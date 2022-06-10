<template>
  <div class="board">
    <div class="board__container">
      <chess-cells />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChessCell from '@/components/ChessCell.vue'
import { Board } from '@/models/Board'
import { h, ref, watch } from 'vue'
import { Cell } from '@/models/Cell'

interface BoardProps {
  board: Board;
}

const props = defineProps<BoardProps>()
const selectedCell = ref<Cell | null>(null)

const selectCell = (cell: Cell) => {
  if (selectedCell.value && selectedCell.value !== cell
      && selectedCell.value.figure?.canMove(props.board, selectedCell.value, cell)) {
    selectedCell.value.moveFigure(props.board, cell)
    selectedCell.value = null
  } else {
    selectedCell.value = cell
  }
}

const displayHint = () => {
  props.board.displayHint(selectedCell.value)
}

watch(selectedCell, () => {
  displayHint()
})

const chessCells = () => {
  return props.board.cells.map(
      row => {
        return row.map(cell => {
          return h(ChessCell, {
            key: `${cell.y}/${cell.x}`,
            y: cell.y,
            x: cell.x,
            cell: cell,
            color: cell.color,
            available: cell.available,
            figure: cell.figure,
            selected: cell.x === selectedCell.value?.x && cell.y === selectedCell.value?.y,
            selectCell: selectCell
          })
        })
      }
  )
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.board {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .5s;
  box-sizing: content-box;
  border-radius: 14px;
  width: calc(#{$board-border-width} * 2 + #{$cell-size} * 8);
  height: calc(#{$board-border-width} * 2 + #{$cell-size} * 8);
}

.board__container {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0;
  flex-direction: column-reverse;
  flex-wrap: wrap;
}
</style>