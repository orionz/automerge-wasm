let Automerge = require("automerge")
let Backend = require("automerge-backend-wasm-node");
Automerge.setDefaultBackend(Backend)
module.exports = Automerge
