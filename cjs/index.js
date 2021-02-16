let Automerge = require("automerge")
let Backend = require("automerge-backend-wasm");
Automerge.setDefaultBackend(Backend)
console.log("AUTOMERGE", Automerge.init())
module.exports = Automerge
