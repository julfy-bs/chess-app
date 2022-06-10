import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/assets/figures/king-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/king-white.png'
import { Board } from '@/models/Board'

export class King extends Figure {

  isFirstStep: boolean = true

  constructor(color: Colors, cell: Cell) {
    super(color)
    cell.addFigure(this)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KING
  }

  canMove(board: Board, cell: Cell, target: Cell): boolean {
    if (!super.canMove(board, cell, target)) {
      return false
    }

    const kingMoveCondition = (target.y === cell.y + 1 && target.x === cell.x
      || target.y === cell.y - 1 && target.x === cell.x
      || target.x === cell.x + 1 && target.y === cell.y
      || target.x === cell.x - 1 && target.y === cell.y
      || target.x === cell.x + 1 && target.y === cell.y + 1
      || target.x === cell.x + 1 && target.y === cell.y - 1
      || target.x === cell.x - 1 && target.y === cell.y + 1
      || target.x === cell.x - 1 && target.y === cell.y - 1
      && board.getCell(target.y, target.x).isCellEmpty())

    const kingCastlingCondition = (this.isFirstStep
      && target.y === cell.y
      && (target.x === cell.x + 2 || target.x === cell.x - 2)
      && cell.isCellEmptyHorizontal(board, target)
      && cell.isRookAllowsCastling(board, target)
    )

    return kingMoveCondition
      || kingCastlingCondition
  }

  moveFigure(target: Cell) {
    super.moveFigure(target)
    this.isFirstStep = false
  }
}