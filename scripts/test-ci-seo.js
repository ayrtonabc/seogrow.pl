import fs from 'fs';
import os from 'os';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT_DIR } from './seo-config.js';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'seo-grow-ci-'));
const workspaceDir = path.join(tempDir, 'workspace');

const run = (command, args, cwd) => {
  console.log(`> ${command} ${args.join(' ')}`);

  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: {
      ...process.env,
      CI: 'true',
    },
  });

  if (result.error) {
    throw new Error(`No se pudo ejecutar ${command}: ${result.error.message}`);
  }

  if (result.status !== 0) {
    const reason = result.signal ? `signal ${result.signal}` : `exit code ${result.status}`;
    throw new Error(`El comando fallo con ${reason}: ${command} ${args.join(' ')}`);
  }
};

const copyWorkspace = () => {
  fs.cpSync(ROOT_DIR, workspaceDir, {
    recursive: true,
    filter: (sourcePath) => {
      const relativePath = path.relative(ROOT_DIR, sourcePath);
      if (!relativePath) {
        return true;
      }

      const topLevel = relativePath.split(path.sep)[0];
      return !['node_modules', 'dist', '.git'].includes(topLevel);
    },
  });
};

try {
  console.log(`🧪 Iniciando prueba SEO en entorno limpio: ${workspaceDir}`);
  copyWorkspace();
  run(npmCommand, ['ci', '--ignore-scripts'], workspaceDir);
  run(npmCommand, ['run', 'build'], workspaceDir);
  run(npmCommand, ['run', 'validate:seo'], workspaceDir);
  console.log('✅ Prueba SEO de CI/CD completada.');
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
