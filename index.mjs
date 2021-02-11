import * as Automerge from "automerge"
import * as Backend from "automerge-backend-wasm-module"
Automerge.setDefaultBackend(Backend)
export * from "automerge"
