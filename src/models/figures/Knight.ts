import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/assets/figures/knight-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/knight-white.png'
import { Board } from '@/models/Board'

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color)
    cell.addFigure(this)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KNIGHT
  }

  canMove(board: Board, cell: Cell, target: Cell): boolean {
    if (!super.canMove(board, cell, target)) {
      return false
    }
    return true
  }
}