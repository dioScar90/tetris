import { piecesMatrixes } from "./piecesMatrixes.js"

class TetrisPieceS extends HTMLElement {
  constructor() {
    super()
    this.matrix = piecesMatrixes.get('s')
  }

  connectedCallback() {
  }
}

export default TetrisPieceS

