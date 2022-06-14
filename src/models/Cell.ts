import { Colors } from '@/models/Colors'
import { Figure, FigureNames } from '@/models/figures/Figure'
import { Board } from '@/models/Board'
import { Rook } from '@/models/figures/Rook'

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  available: boolean;

  constructor(x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x
    this.y = y
    this.color = color
    this.figure = figure
    this.available = false
  }

  isCellEmpty() {
    return this.figure === null
  }

  isCellContainEnemyFigure(target: Cell): boolean {
    if (target.figure) return this.figure?.color !== target.figure.color
    return false
  }

  isSiblingCellContainEnemyPawn(board: Board, target: Cell): boolean {
    if (target.y === 6 || target.y === 3) {
      const siblingCell = board.getCell(this.y, target.x)
      const siblingCellsContainEnemyPawn: boolean =
        (siblingCell.figure?.name === FigureNames.PAWN
          && siblingCell.figure
          && siblingCell.figure.color !== this.figure?.color)
      return !!siblingCell && siblingCellsContainEnemyPawn
    } else {
      return false
    }
  }

  isRookAllowsCastling(board: Board, target: Cell): boolean {
    if (target.x > this.x) {
      const castlingRook = board.getCell(this.y, 8)
      if (castlingRook.figure instanceof Rook
        && castlingRook.figure.isFirstStep
        && castlingRook.figure?.name === FigureNames.ROOK) return true
    } else {
      const castlingRook = board.getCell(this.y, 1)
      if (castlingRook.figure instanceof Rook
        && castlingRook.figure.isFirstStep
        && castlingRook.figure?.name === FigureNames.ROOK) return true
    }
    return false
  }

  moveCastlingRook(board: Board, target: Cell) {
    if (target.x > this.x) {
      const castlingRook = board.getCell(this.y, 8)
      const newRookPosition = board.getCell(this.y, target.x - 1)
      if (castlingRook.figure) {
        newRookPosition.addFigure(castlingRook.figure)
        castlingRook.removeFigure()
      }
    } else {
      const castlingRook = board.getCell(this.y, 1)
      const newRookPosition = board.getCell(this.y, target.x + 1)
      if (castlingRook.figure) {
        newRookPosition.addFigure(castlingRook.figure)
        castlingRook.removeFigure()
      }
    }
  }

  isCellEmptyVertical(board: Board, target: Cell): boolean {
    if (this.x !== target.x) {
      return false
    }
    const min = Math.min(this.y, target.y)
    const max = Math.max(this.y, target.y)
    for (let y = min + 1; y < max; y++) {
      if (!board.getCell(y, this.x).isCellEmpty()) {
        return false
      }
    }
    return true
  }

  isCellEmptyHorizontal(board: Board, target: Cell): boolean {
    if (this.y !== target.y) {
      return false
    }
    const min = Math.min(this.x, target.x)
    const max = Math.max(this.x, target.x)
    for (let x = min + 1; x < max; x++) {
      if (!board.getCell(this.y, x).isCellEmpty()) {
        return false
      }
    }
    return true
  }

  isCellEmptyDiagonal(board: Board, target: Cell): boolean {
    const absX = Math.abs(target.x - this.x)
    const absY = Math.abs(target.y - this.y)
    if (absY !== absX) return false
    const dy = this.y < target.y ? 1 : -1
    const dx = this.x < target.x ? 1 : -1
    for (let i = 1; i < absY; i++) {
      if (!board.getCell(this.y + dy * i, this.x + dx * i).isCellEmpty()) {
        return false
      }
    }
    return true
  }

  addFigure(figure: Figure) {
    this.figure = figure
  }

  removeFigure() {
    this.figure = null
  }

  moveFigure(board: Board, target: Cell): void {
    if (this.figure && this.figure?.canMove(board, this, target)) {
      this.figure.moveFigure(target)
      if (this.isSiblingCellContainEnemyPawn(board, target)) {
        const siblingCell = board.getCell(this.y, target.x)
        siblingCell.removeFigure()
      }
      if (this.figure?.name === FigureNames.KING
        && (board.getCell(this.y, this.x - 2) === target
        || board.getCell(this.y, this.x + 2) === target)
        && this.isRookAllowsCastling(board, target)) {
        console.log(board.getCell(this.y, this.x + 1), this)
        this.moveCastlingRook(board, target)
      }
      target.figure = this.figure
      this.figure = null
    }
  }
}