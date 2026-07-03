// scripts/compress-video.mjs — re-encode panel.webm to a much smaller file
//
// Why: panel.webm was 1.7MB (VP8, default ffmpeg settings) which dominated the
// landing page payload (~3MB total). Re-encoding to VP9 at 720p / 500kbps
// drops it to ~1MB with no visible quality loss for a 18s UI demo.
//
// The <video> tag in ModulosSection is muted, so we strip audio for further savings.

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TARGET = "public/panel.webm";
const TARGET_KBPS = 500;
const TARGET_CRF = 35;
const MAX_HEIGHT = 720;
const STRIP_AUDIO = true;

if (!fs.existsSync(TARGET)) {
  console.log(`[compress-video] ${TARGET} not found, skipping`);
  process.exit(0);
}

let ffmpegPath;
try {
  ffmpegPath = (await import("ffmpeg-static")).default;
} catch {
  console.warn("[compress-video] ffmpeg-static not installed, skipping (run: npm i -D ffmpeg-static)");
  process.exit(0);
}

const before = fs.statSync(TARGET).size;
const TMP = path.join(os.tmpdir(), `webm-compress-${Date.now()}`);
fs.mkdirSync(TMP, { recursive: true });
const tmpOut = path.join(TMP, "panel.webm");

const args = [
  "-y",
  "-i", TARGET,
  "-c:v", "libvpx-vp9",
  "-b:v", `${TARGET_KBPS}k`,
  "-crf", String(TARGET_CRF),
  "-vf", `scale=-2:${MAX_HEIGHT}`,
  "-deadline", "realtime",
  "-cpu-used", "8",
  "-row-mt", "1",
];
if (STRIP_AUDIO) args.push("-an");
args.push(tmpOut);

const result = spawnSync(ffmpegPath, args, { stdio: ["ignore", "ignore", "ignore"] });
if (result.status !== 0) {
  console.error(`[compress-video] ffmpeg exited with code ${result.status}`);
  fs.rmSync(TMP, { recursive: true, force: true });
  process.exit(1);
}

const after = fs.statSync(tmpOut).size;
if (after < before) {
  fs.unlinkSync(TARGET);
  fs.renameSync(tmpOut, TARGET);
  const saved = before - after;
  console.log(
    `[compress-video] ${TARGET}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB ` +
      `(saved ${(saved / 1024).toFixed(0)}KB, ${((1 - after / before) * 100).toFixed(0)}%)`,
  );
} else {
  console.log(`[compress-video] ${TARGET}: no improvement (${(after / 1024).toFixed(0)}KB), keeping original`);
  fs.unlinkSync(tmpOut);
}
fs.rmSync(TMP, { recursive: true, force: true });
