import { piecesMatrixes } from "./piecesMatrixes.js"

class TetrisPieceI extends HTMLElement {
  constructor() {
    super()
    this.matrix = piecesMatrixes.get('i')
  }

  connectedCallback() {
  }
}

export default TetrisPieceI

