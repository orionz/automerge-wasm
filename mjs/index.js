import * as Automerge from "automerge"
import * as Backend from "automerge-backend-wasm"
Automerge.setDefaultBackend(Backend)
export default Automerge
export { Backend }
export * from "automerge"
