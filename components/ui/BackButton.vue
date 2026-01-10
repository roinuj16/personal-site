<template>
  <NuxtLink
    :to="to"
    class="fixed top-4 left-4 z-[1000] flex items-center gap-2 px-4 py-2 rounded-lg
           bg-deep-space/80 border border-neon-cyan/30 backdrop-blur-tech
           text-neon-cyan hover:text-matrix-green hover:border-matrix-green/50
           transition-all duration-300 group"
    :aria-label="ariaLabel"
  >
    <i class="fas fa-arrow-left transform group-hover:-translate-x-1 transition-transform duration-300"></i>
    <span class="font-space text-sm">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  to: string
  label: string
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
  ariaLabel: 'Go back'
})
</script>
