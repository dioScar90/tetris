import { piecesMatrixes } from "./piecesMatrixes.js"

class TetrisPieceL extends HTMLElement {
  constructor() {
    super()
    this.matrix = piecesMatrixes.get('l')
  }

  connectedCallback() {
  }
}

export default TetrisPieceL

