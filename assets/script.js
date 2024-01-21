import TetrisBlock from "./components/TetrisBlock.js"
import TetrisGame from "./components/TetrisGame.js"
import TetrisPieceI from "./components/TetrisPieceI.js"

const getMainContainer = () => document.querySelector('main.container')
const getTetrisGame = () => document.querySelector('tetris-game')

const createTetrisGame = () => getMainContainer().append(new TetrisGame)

const criarTodasAsPecas = () => {
  const criarPeca = (matrizPeca, classePeca) => {
    const tetrisGrid = document.querySelector('.tetris')

    for (let i = 0; i < matrizPeca.length; i++) {
      for (let j = 0; j < matrizPeca[i].length; j++) {
        if (matrizPeca[i][j] === 1) {
          const gridItem = document.createElement('div')
          gridItem.classList.add('grid-item', classePeca)
          gridItem.style.gridColumn = j + 1
          gridItem.style.gridRow = i + 1
          tetrisGrid.append(gridItem)
        }
      }
    }
  }

  // Matrizes para algumas peças Tetris comuns
  const pecaI = [
    [1, 1, 1, 1]
  ]

  const pecaJ = [
    [1, 0, 0],
    [1, 1, 1]
  ]

  const pecaL = [
    [0, 0, 1],
    [1, 1, 1]
  ]

  const pecaO = [
    [1, 1],
    [1, 1]
  ]

  const pecaS = [
    [0, 1, 1],
    [1, 1, 0]
  ]

  const pecaT = [
    [0, 1, 0],
    [1, 1, 1]
  ]

  const pecaZ = [
    [1, 1, 0],
    [0, 1, 1]
  ]

  // Criando peças no grid (exemplo)
  criarPeca(pecaI, 'piece-I')
  criarPeca(pecaJ, 'piece-J')
  criarPeca(pecaL, 'piece-L')
  criarPeca(pecaO, 'piece-O')
  criarPeca(pecaS, 'piece-S')
  criarPeca(pecaT, 'piece-T')
  criarPeca(pecaZ, 'piece-Z')
}

const defineCustomElements = () => {
  customElements.define('tetris-block', TetrisBlock)
  customElements.define('tetris-game', TetrisGame)
}

const init = () => {
  defineCustomElements()
  createTetrisGame()
  // criarTodasAsPecas()
}

document.addEventListener('DOMContentLoaded', init)

