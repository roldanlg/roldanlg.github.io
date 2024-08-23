<template>
  <div class="dark:bg-gray-900 min-h-screen flex flex-col">
    <!-- MainMenu -->
    <MainMenu />
    <!-- MainContent -->
    <div class="flex-grow dark:text-gray-50 place-content-center">
      <div class="w-10/12 place-content-center text-center mx-auto">
        <transition name="slide-fade" mode="out-in" :duration="{ enter: 800, leave: 500 }">
          <component :is="currentComponent" />
        </transition>
      </div>
    </div>
    <!-- MainFooter -->
    <MainFooter />
  </div>
</template>
<script setup lang="ts">
import {computed, type DefineComponent} from 'vue'
import MainMenu from "~/components/MainMenu.vue"
import MainFooter from "~/components/MainFooter.vue"
import MainHome from "~/components/MainHome.vue"
import MiAbout from '~/components/MiAbout.vue'
import MiExpertise from '~/components/MiExpertise.vue'
import MiProjects from '~/components/MiProjects.vue'
import MiContact from '~/components/MiContact.vue'
import {useMainStore} from "~/store/mainStore"

const mainStore = useMainStore()
const componentsMap: { [Key: number]: DefineComponent<{}, {}, any> } = {
  0: MainHome,
  1: MiAbout,
  2: MiExpertise,
  3: MiProjects,
  4: MiContact
}
const currentComponent = computed(() => componentsMap[mainStore.menuItemActive])

defineOgImageComponent('Pergel',{
  headline: '¡Hola Conóceme! 👋',
  title: 'Mi Mismo',
  description: 'Esto se trata acerca de mí...',
  colorMode: 'dark'
})

</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.8s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter-from {
  transform: translateY(100%);
}

.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
