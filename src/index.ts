import "reflect-metadata";
import initServer from "./server";

console.log("starting server");
(async function () {
  await initServer();
})();
