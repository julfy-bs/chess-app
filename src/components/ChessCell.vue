<template>
  <div
    class="cell"
    :class="[`cell--${color}`, selected ? 'cell--selected' : '']"
    @click="selectCell(cell)"
  >
    <img
      v-if="figure?.logo"
      :src="figure?.logo"
      :alt="figure.name"
      class="figure"
    >
    <div
      v-if="cell.available && !cell.figure"
      class="hint hint--move-available"
    />
    <div
      v-if="cell.available && cell.figure"
      class="hint hint--attack-available"
    />
  </div>
</template>

<script setup lang="ts">
 import { Colors } from '@/models/Colors'
 import { Figure } from '@/models/figures/Figure'
 import { Cell } from '@/models/Cell'

 interface CellProps {
   selected: boolean;
   selectCell: (cell: Cell) => void;
   cell: Cell;
   readonly x: number;
   readonly y: number;
   readonly color: Colors;
   figure: Figure | null;
   available: boolean;
 }
 const props = defineProps<CellProps>()
 console.log(props.selected)
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.cell {
  position: relative;
  width: $cell-size;
  height: $cell-size;
}

.cell.cell--white {
  background-color: $cell-white;
}

.cell.cell--black {
  background-color: $cell-black;
}

.cell.cell--white.cell--selected {
  background-color: $cell-selected-white;
}

.cell.cell--black.cell--selected {
  background-color: $cell-selected-black;
}

.hint {
  background-clip: content-box;
  border-radius: 50%;
  box-sizing: border-box;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
}

.hint.hint--attack-available  {
  border: 5px solid rgba(0,0,0,.1);
}

.hint.hint--move-available {
  background-color: rgba(0,0,0,.1);
  border-radius: 50%;
  padding: 35%;
}

.cell.figure {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: $cell-size;
  height: $cell-size;
}
</style>