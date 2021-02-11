let Automerge = require("automerge")
let Backend = require("automerge-backend-wasm-node");
Automerge.setDefaultBackend(Backend)
module.exports = Automerge

module.exports = import("automerge-backend-wasm-module").then(Backend => {
  Automerge.setDefaultBackend(Backend)
  console.log(Automerge.init())
  return Automerge
})
