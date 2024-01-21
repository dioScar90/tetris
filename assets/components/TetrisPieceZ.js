import { piecesMatrixes } from "./piecesMatrixes.js"

class TetrisPieceZ extends HTMLElement {
  constructor() {
    super()
    this.matrix = piecesMatrixes.get('z')
  }

  connectedCallback() {
  }
}

export default TetrisPieceZ

