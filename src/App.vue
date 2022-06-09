<template>
  <div class="app__container">
    <chess-board :board="board" />
  </div>
</template>

<script setup lang="ts">
import ChessBoard from '@/components/ChessBoard.vue'
import { ref } from 'vue'
import { Board } from '@/models/Board'
const board = ref<Board>(new Board())
const restart = () => {
  const newBoard = new Board()
  newBoard.initCells()
  newBoard.addFigures()
  board.value = newBoard
}

restart()
</script>

<style lang="scss">
:root {
  --font: Inter, -apple-system, sans-serif;
  --screen-max-width: 1376px;
  --screen-min-width: 380px;
  //// colors
  // old
  --c-white: #ffffff;
  --c-white-soft: #f9f9f9;
  --c-white-mute: #f1f1f1;
  --c-black: #1a1a1a;
  --c-black-pure: #000000;
  --c-black-soft: #242424;
  // primary
  --c-indigo: #213547;
  // text
  --c-text-1: var(--c-indigo);
  // cell
  --c-cell-black: #ba8f5e;
  --c-cell-white: #dcccad;
  --c-cell-black-2: #769656;
  --c-cell-white-2: #eeeed2;
  --c-cell-selected-black: #bbca41;
  --c-cell-selected-white: #f6f686;
  //// decorators
  // btn
  --btn-br: 6px;
  --btn-pdn: 12px;
  --btn-height: 40px;
  --bg: var(--c-black);
  --bg-soft: var(--c-black-soft);
  --bg-mute: var(--c-black-mute);
}

@import "@/assets/styles/_variables.scss";

html {
  scroll-behavior: smooth;
  font-size: 12px;
  background-color: var(--bg);
}

*, :before, :after {
  box-sizing: border-box;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}

body {
  margin: 0;
}

body {
  width: 100%;
  height: 100vh;
  min-width: $screen-min-width;
  font-family: $font;
  letter-spacing: .2px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: $text-1;
  background-color: $bg;
  transition: color .5s, background-color .5s;

  &.modal-open {
    overflow: hidden;
  }
}

button, input, optgroup, select, textarea {
  border: 0;
  padding: 0;
  line-height: inherit;
  color: inherit;
}

ul, ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: inherit;
}

button, input, select, textarea {
  border: 0;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  color: inherit;
  background-color: transparent;
}

a, area, button, [role=button], input, label, select, summary, textarea {
  touch-action: manipulation;
}

button {
  padding: 0;
  background-color: transparent;
  background-image: none;
}

button, [role=button] {
  cursor: pointer;
}

img, video {
  max-width: 100%;
  height: auto;
}

.app__container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  min-width: $screen-min-width;
  max-width: $screen-max-width;
  background-color: $bg;
}
</style>
