import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

// Helper to get asset folders from root (excluding system/dev folders)
function getAssetFolders(): string[] {
  const exclude = ['.git', 'dist', 'node_modules', 'public', 'src', '.vscode', '.idea', 'temp', 'tmp'];
  const root = process.cwd();
  try {
    return fs.readdirSync(root, { withFileTypes: true })
      .filter(entry => entry.isDirectory() && !exclude.includes(entry.name))
      .map(entry => entry.name);
  } catch {
    return [];
  }
}

// Copy helper
function copyDirRecursive(src: string, dest: string) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Content-type resolver for serving dev files
function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.gif': return 'image/gif';
    case '.svg': return 'image/svg+xml';
    case '.webp': return 'image/webp';
    case '.mp4': return 'video/mp4';
    case '.webm': return 'video/webm';
    default: return 'application/octet-stream';
  }
}

// Custom Vite plugin to handle root assets automatically
function localAssetManagerPlugin(): Plugin {
  return {
    name: 'local-asset-manager',
    // Dev Mode: intercept server requests to root folders
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        const folders = getAssetFolders();
        for (const folder of folders) {
          if (url.startsWith(`/${folder}/`) || url === `/${folder}`) {
            const filePath = path.join(process.cwd(), decodeURIComponent(url.split('?')[0]));
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', getMimeType(filePath));
              res.end(fs.readFileSync(filePath));
              return;
            }
          }
        }
        next();
      });
    },
    // Build Mode: copy all custom root directories to dist
    closeBundle() {
      const folders = getAssetFolders();
      const distDir = path.resolve(process.cwd(), 'dist');
      for (const folder of folders) {
        const srcDir = path.resolve(process.cwd(), folder);
        const destDir = path.resolve(distDir, folder);
        if (fs.existsSync(srcDir) && fs.statSync(srcDir).isDirectory()) {
          copyDirRecursive(srcDir, destDir);
        }
      }
    }
  };
}

export default defineConfig(() => {
  return {
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: './index.html',
          projects: './projects.html',
          services: './services.html',
          team: './team.html',
          about: './about.html',
          achievements: './achievements.html',
        },
      },
    },
    plugins: [react(), tailwindcss(), localAssetManagerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
