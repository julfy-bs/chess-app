import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/assets/figures/queen-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/queen-white.png'

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color)
    cell.addFigure(this)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.QUEEN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}