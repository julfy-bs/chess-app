import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/assets/figures/pawn-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/pawn-white.png'

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color)
    cell.addFigure(this)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.PAWN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}