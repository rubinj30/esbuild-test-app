import Koa from 'koa';
import cors from '@koa/cors';
import { build } from "esbuild";

export async function devBuild() {
  console.log("starting dev server...");
  await build({
    entryPoints: ["./src/index.js"],
    bundle: true,
    outfile: "dist/main.js",
    loader: {
      ".js": "jsx",
      ".png": "file",
    },
    assetNames: "assets/[name]-[hash]",
    sourcemap: true,
    // plugins: [cssModulesPlugin()],
    watch: {
      onRebuild(error, result) {
        if (error) console.error("watch build failed:", error);
        else console.log("watch build succeeded:", result);
      },
    },
  })
    .then((result) => {
      console.log("watching...");
    })
    .catch(() => process.exit(1));
}

export async function runDevServer() {
  app.use(cors());
  
}