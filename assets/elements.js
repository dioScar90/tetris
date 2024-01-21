class TetrisBlock extends HTMLElement {
  constructor() {
    super()
  }
}

class TetrisGame extends HTMLElement {
  constructor() {
    if (document.body.matches(':has(tetris-game)')) {
      // Does not allow to instantiate twice or more.
      throw new Error('TetrisGame has been already included in the document.')
    }

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

