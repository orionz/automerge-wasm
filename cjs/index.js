let Automerge = require("automerge")
let Backend = require("automerge-backend-wasm");
Automerge.setDefaultBackend(Backend)
module.exports = Automerge
