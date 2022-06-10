import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/assets/figures/rook-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/rook-white.png'
import { Board } from '@/models/Board'

export class Rook extends Figure {

  isFirstStep: boolean = true

  constructor(color: Colors, cell: Cell) {
    super(color)
    cell.addFigure(this)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.ROOK
  }

  canMove(board: Board, cell: Cell, target: Cell): boolean {
    if (!super.canMove(board, cell, target)) {
      return false
    }
    return cell.isCellEmptyVertical(board, target)
      || cell.isCellEmptyHorizontal(board, target)
  }

  moveFigure(target: Cell) {
    super.moveFigure(target)
    this.isFirstStep = false
  }
}