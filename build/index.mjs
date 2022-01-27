import { staticBuild } from "./build.mjs";
import { devBuild } from "./dev.mjs";

const args = process.argv.slice(2);
const command = args[0];

async function executeCommand() {
  if (command === "dev") {

    // TODO: work on dev server, was planning on trying Koa for this
    await devBuild();
  } else {
    await staticBuild();
  }
}

executeCommand();
