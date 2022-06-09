import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/assets/figures/rook-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/rook-white.png'

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color)
    cell.addFigure(this)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.ROOK
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}