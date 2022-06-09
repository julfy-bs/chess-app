import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/assets/figures/knight-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/knight-white.png'

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color)
    cell.addFigure(this)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KNIGHT
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}