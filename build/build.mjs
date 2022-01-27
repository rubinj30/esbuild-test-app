// const cssModulesPlugin = require("esbuild-css-modules-plugin");
import { build } from "esbuild";

export async function staticBuild() {
  await build({
    entryPoints: ["./src/index.js"],
    bundle: true,
    outfile: "dist/main.js",
    loader: {
      ".js": "jsx",
      ".png": "file",
    },
    // plugins: [cssModulesPlugin()],
    // will want to remove for production builds
    assetNames: "assets/[name]-[hash]",
    // TODO: create separate prod and dev build files
    // will want to add for production builds
    minify: true,
  });
  console.log("static build complete!");
}
