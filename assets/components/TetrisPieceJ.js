import { piecesMatrixes } from "./piecesMatrixes.js"

class TetrisPieceJ extends HTMLElement {
  constructor() {
    super()
    this.matrix = piecesMatrixes.get('j')
  }

  connectedCallback() {
  }
}

export default TetrisPieceJ

