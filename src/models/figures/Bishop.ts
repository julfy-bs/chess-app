import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/static/figures/bishop-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/bishop-white.png'

export class Bishop extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color)
    cell.addFigure(this)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.BISHOP
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}