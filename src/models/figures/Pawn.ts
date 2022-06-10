import { Figure, FigureNames } from '@/models/figures/Figure'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
// @ts-ignore
import blackLogo from '@/assets/figures/pawn-black.png'
// @ts-ignore
import whiteLogo from '@/assets/figures/pawn-white.png'
import { Board } from '@/models/Board'

export class Pawn extends Figure {

  isFirstStep: boolean = true

  constructor(color: Colors, cell: Cell) {
    super(color)
    cell.addFigure(this)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.PAWN
  }

  canMove(board: Board, cell: Cell, target: Cell): boolean {
    if (!super.canMove(board, cell, target)) {
      return false
    }
    const direction = cell.figure?.color === Colors.BLACK ? -1 : 1
    const firstStepDirection = cell.figure?.color === Colors.BLACK ? -2 : 2

    const pawnMoveCondition = ((target.y === cell.y + direction
        || this.isFirstStep
        && (target.y === cell.y + firstStepDirection))
      && target.x === cell.x
      && board.getCell(target.y, target.x).isCellEmpty())

    const pawnKillCondition = target.y === cell.y + direction
      && (target.x === cell.x + 1 || target.x === cell.x - 1)
      && cell.isCellContainEnemyFigure(target)

    const pawnCaptureEnPassantCondition = target.y === cell.y + direction
      && (target.x === cell.x + 1 || target.x === cell.x - 1)
      && cell.isSiblingCellContainEnemyPawn(board, target)

    return pawnMoveCondition
      || pawnKillCondition
      || pawnCaptureEnPassantCondition

  }

  moveFigure(target: Cell) {
    super.moveFigure(target)
    this.isFirstStep = false
  }
}