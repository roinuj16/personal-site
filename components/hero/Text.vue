<template>
  <div class="hero-text text-left">
    <h1 class="hero-title font-orbitron text-5xl md:text-6xl lg:text-[5rem] font-black leading-tight mb-8 tracking-normal">
      <span class="text-tech block text-white drop-shadow-[0_0_10px_rgba(0,224,255,0.5)] [text-shadow:0_0_10px_rgba(0,224,255,0.5),0_0_20px_rgba(0,224,255,0.3),0_0_30px_rgba(0,224,255,0.2)]">
        {{ firstName }}
      </span>
      <span class="text-tech-alt block text-matrix-green drop-shadow-[0_0_10px_rgba(0,255,136,0.6)] [text-shadow:0_0_10px_rgba(0,255,136,0.6),0_0_20px_rgba(0,255,136,0.4),0_0_30px_rgba(0,255,136,0.2)] pl-[3.5rem] md:pl-[4.5rem] lg:pl-[6rem]">
        {{ lastName }}
      </span>
    </h1>

    <p class="hero-description text-lg md:text-xl leading-relaxed text-white/85 mb-8 font-light">
      <i class="fas fa-arrow-up-right mr-2 text-neon-cyan" />
      {{ description }}
    </p>

    <ui-social :social-links="socialLinks" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  firstName: string
  lastName: string
  description: string
  socialLinks: Array<{
    name: string
    icon: string
    url: string
    ariaLabel: string
  }>
}>()
</script>
