<script setup lang="ts">
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore();
const handleMenuItemClick = (itemId: number) => {
  mainStore.changeMenuItemActive(itemId)
}
</script>

<template>
  <div  class="border border-slate-500 rounded-full cursor-pointer inline-block mi-yo">
    <img
        alt="YO"
        src="/yo-small.png"
        width="50"
        height="57"
        @click="handleMenuItemClick(0)"
    />
  </div>
</template>

<style scoped></style>
