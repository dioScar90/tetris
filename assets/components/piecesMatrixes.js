const piecesMatrixes = (() => {
  const defaultPiece = 'i'

  const matrixes = {
    'i': [
      [1, 1, 1, 1]
    ],

    'j': [
      [1, 0, 0],
      [1, 1, 1]
    ],

    'l': [
      [0, 0, 1],
      [1, 1, 1]
    ],

    'o': [
      [1, 1],
      [1, 1]
    ],

    's': [
      [0, 1, 1],
      [1, 1, 0]
    ],

    't': [
      [0, 1, 0],
      [1, 1, 1]
    ],

    'z': [
      [1, 1, 0],
      [0, 1, 1]
    ],
  }

  const get = (piece) => matrixes[piece] ?? matrixes[defaultPiece]

  return {
    get
  }
})()

export { piecesMatrixes }

