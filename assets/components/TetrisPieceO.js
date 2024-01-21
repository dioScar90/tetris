import { piecesMatrixes } from "./piecesMatrixes.js"

class TetrisPieceO extends HTMLElement {
  constructor() {
    super()
    this.matrix = piecesMatrixes.get('o')
  }

  connectedCallback() {
  }
}

export default TetrisPieceO

