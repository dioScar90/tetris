class TetrisBlock extends HTMLElement {
  constructor() {
    super()
  }
}

class TetrisGame extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const fragment = document.createDocumentFragment()

    const { gridTemplateRows, gridTemplateColumns } = getComputedStyle(this)
    const rows = gridTemplateRows.split(' ').length
    const columns = gridTemplateColumns.split(' ').length
    const blocks = rows * columns

    for (let i = 0; i < blocks; i++) {
      fragment.append(new TetrisBlock)
    }

    this.replaceChildren(fragment)
  }
}

customElements.define('tetris-block', TetrisBlock)
customElements.define('tetris-game', TetrisGame)

