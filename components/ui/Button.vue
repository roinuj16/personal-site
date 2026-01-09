<template>
  <a
    :href="url"
    :aria-label="ariaLabel"
    target="_blank"
    rel="noopener noreferrer"
    class="social-link w-[50px] h-[50px] rounded-full bg-neon-cyan/10 border-2 border-neon-cyan flex items-center justify-center text-matrix-green no-underline transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,224,255,0.6)] hover:border-neon-cyan"
  >
    <span class="absolute inset-0 bg-gradient-to-br from-matrix-green to-neon-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <i :class="icon" class="relative z-10 text-xl" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  url: string
  ariaLabel: string
}>()
</script>
