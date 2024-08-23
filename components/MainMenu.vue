<script setup lang="ts">
import { ref } from 'vue'
import MiYo from "~/components/MiYo.vue"
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore();
const { t, locales, setLocale, locale } = useI18n()
const currentLocale = ref(locale)
const handleMenuItemClick = (itemId: number) => {
  mainStore.changeMenuItemActive(itemId)
}
</script>

<template>
  <header class="general-font bg-gray-900 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <MiYo />
      <div class="flex gap-2">
        <label class="uppercase" v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
          <span :class="currentLocale !== locale.code ? 'text-amber-600 hover:text-amber-100 cursor-pointer' : 'text-slate-500 cursor-text'">{{ locale.name }}</span>
        </label>
      </div>
      <nav>
        <label class="text-gray-300 hover:text-white cursor-pointer mx-2"
               @click="handleMenuItemClick(1)"
        >{{ t('main-menu.about-me') }}</label>
        <label class="text-gray-300 hover:text-white cursor-pointer mx-2"
               @click="handleMenuItemClick(2)"
        >{{ t('main-menu.expertise') }}</label>
        <label class="text-gray-300 hover:text-white cursor-pointer mx-2"
               @click="handleMenuItemClick(3)"
        >{{ t('main-menu.projects') }}</label>
        <label class="text-gray-300 hover:text-white cursor-pointer mx-2"
               @click="handleMenuItemClick(4)"
        >{{ t('main-menu.contact') }}</label>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
