<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Container } from '@tsparticles/engine'

const miName = ref({
  'name': '',
  'surname': ''
})
const { t, locale } = useI18n()
const currentLocale = ref(locale)
const fetchData = async () => {
  const data = await queryContent('mi-data/data').only(['name', 'surname']).findOne()
  if (data) {
    miName.value.name = data.name
    miName.value.surname = data.surname
  }
}

const options = {
  fullScreen: {
    enable: false,
    zIndex: 1000
  },
  particles: {
    number: {
      value: 250,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: { min: 0.6, max: 1.5},
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 0.1,
        startValue: 'random',
        sync: false
      }
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: 'random',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'grab'
      },
      onClick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 25,
        line_linked: {
          opacity: 1
        }
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  retina_detect: true
}

const onLoad = (container: Container) => {
  container.pause()
  setTimeout(() => container.play(), 60000)
}

onMounted(() => {
  fetchData()
})

</script>

<template>
  <div class="relative general-font">
    <NuxtParticles
        id="tsparticles"
        :options="options"
    ></NuxtParticles>
    <footer class="p-4 text-start absolute inset-x-0 bottom-0 dark:bg-gray-900 flex justify-between">
      <p class="text-sm text-gray-500">© 2024 {{ miName.name + ' ' + miName.surname }}. {{ t('main-footer.rights') }}.</p>
      <span class="text-gray-500">
      <NuxtTime :datetime="Date.now()"
                month="long"
                day="numeric"
                weekday="long"
                :locale="currentLocale"/>
    </span>
    </footer>
  </div>
</template>

<style scoped>
#tsparticles{
  position: absolute;
  width: 100%;
  height: 100px;
  top: -100px;
  left: 0;
  z-index: 70;
}
</style>
