import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/assets/figures/king-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/king-white.png'
import { Board } from '@/models/Board'

export class King extends Figure {
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
    return true
  }
}