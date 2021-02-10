let Automerge = require("automerge")

module.exports = import("automerge-backend-wasm-module").then(Backend => {
  Automerge.setDefaultBackend(Backend)
  console.log(Automerge.init())
  return Automerge
})
