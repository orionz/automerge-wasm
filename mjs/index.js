import * as Automerge from "automerge"
import * as Backend from "automerge-backend-wasm"
Automerge.setDefaultBackend(Backend)
console.log("AutomergeMJS",Automerge.init())
export default Automerge
export { Backend }
export * from "automerge"
