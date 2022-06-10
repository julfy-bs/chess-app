// @ts-ignore
import logo from '@/assets/figures/pawn-black.png'
import { Colors } from '@/models/Colors'
import { Cell } from '@/models/Cell'
import { Board } from '@/models/Board'

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
  KNIGHT = 'Конь',
  PAWN = 'Пешка'
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  name: FigureNames;


  constructor(color: Colors) {
    this.color = color
    this.logo = null
    this.name = FigureNames.FIGURE
  }

  canMove(board: Board, cell: Cell, target: Cell): boolean {
    const couldKillKing = target.figure?.name === FigureNames.KING
    const couldKillAllies = target.figure?.color === this.color
    return !(couldKillKing || couldKillAllies)
  }

  moveFigure(target: Cell) {

  }
}