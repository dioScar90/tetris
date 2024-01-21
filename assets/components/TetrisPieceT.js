import { piecesMatrixes } from "./piecesMatrixes.js"

class TetrisPieceT extends HTMLElement {
  constructor() {
    super()
    this.matrix = piecesMatrixes.get('t')
  }

  connectedCallback() {
  }
}

export default TetrisPieceT

