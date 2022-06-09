import { Colors } from '@/models/Colors'
import { Figure } from '@/models/figures/Figure'

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

  isCellEmptyVertical(target: Cell, board: Cell[][]): boolean {
    if (this.x !== target.x) {
      return false
    }

    const min = Math.min(this.y, target.y)
    const max = Math.max(this.y, target.y)

    // for (let y = min + 1; y < max; y++) {
    //   if (!board.getCell(this.x, y).isEmpty()) {
    //     return false
    //   }
    // }

    return true
  }

  isCellEmptyHorizontal(target: Cell): boolean {
    return true
  }

  isCellEmptyDiagonal(target: Cell): boolean {
    return true
  }

  addFigure(figure: Figure) {
    this.figure = figure
  }

  removeFigure() {
    this.figure = null
  }

  moveFigure(target: Cell): void {
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target)
      target.figure = this.figure
      this.figure = null
    }
  }
}