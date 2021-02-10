
import * as Automerge from "automerge"
import * as Backend from "automerge-backend-wasm-module"
Automerge.setDefaultBackend(Backend)
console.log(Automerge.init())
export * from "automerge"
