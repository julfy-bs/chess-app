import { Cell } from '@/models/Cell'
import { Colors } from '@/models/Colors'
import { Queen } from '@/models/figures/Queen'
import { King } from '@/models/figures/King'
import { Rook } from '@/models/figures/Rook'
import { Bishop } from '@/models/figures/Bishop'
import { Knight } from '@/models/figures/Knight'
import { Pawn } from '@/models/figures/Pawn'

export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let x = 1; x <= 8; x++) {
      const row: Cell[] = []
      for (let y = 1; y <= 8; y++) {
        const colorCondition = (y + x) % 2 !== 1
        colorCondition
          ? row.push(new Cell(x, y, Colors.BLACK, null))
          : row.push(new Cell(x, y, Colors.WHITE, null))
      }
      this.cells.push(row)
    }
  }

  public getCell(y: number, x: number) {
    return this.cells[x - 1][y - 1]
  }

  private addPawns() {
    for (let i = 1; i <= 8; i++) {
      new Pawn(Colors.WHITE, this.getCell(2, i))
      new Pawn(Colors.BLACK, this.getCell(7, i))
    }
  }

  private addKnights() {
    for (let i = 1; i <= 8; i++) {
      new Knight(Colors.WHITE, this.getCell(1, 2))
      new Knight(Colors.WHITE, this.getCell(1, 7))
      new Knight(Colors.BLACK, this.getCell(8, 2))
      new Knight(Colors.BLACK, this.getCell(8, 7))
    }
  }

  private addBishops() {
    new Bishop(Colors.WHITE, this.getCell(1, 3))
    new Bishop(Colors.WHITE, this.getCell(1, 6))
    new Bishop(Colors.BLACK, this.getCell(8, 3))
    new Bishop(Colors.BLACK, this.getCell(8, 6))
  }

  private addRooks() {
    new Rook(Colors.WHITE, this.getCell(1, 1))
    new Rook(Colors.WHITE, this.getCell(1, 8))
    new Rook(Colors.BLACK, this.getCell(8, 1))
    new Rook(Colors.BLACK, this.getCell(8, 8))
  }

  private addQueens() {
    new Queen(Colors.WHITE, this.getCell(1, 4))
    new Queen(Colors.BLACK, this.getCell(8, 4))
  }

  private addKings() {
    new King(Colors.WHITE, this.getCell(1, 5))
    new King(Colors.BLACK, this.getCell(8, 5))
  }

  public addFigures() {
    this.addKings()
    this.addQueens()
    this.addRooks()
    this.addBishops()
    this.addKnights()
    this.addPawns()
  }

  public displayHint(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i]
      for (let j = 0; j < row.length; j++) {
        const target = row[j]
        target.available = !!selectedCell?.figure?.canMove(this, selectedCell,target)
      }
    }
  }
}