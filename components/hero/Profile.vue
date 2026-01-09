<template>
  <div class="profile-container relative w-full max-w-[500px] md:max-w-[400px] mx-auto">
    <div class="profile-image-wrapper relative w-full aspect-square rounded-full overflow-hidden border-[3px] border-neon-cyan/50 shadow-[0_0_30px_rgba(0,224,255,0.4),0_0_60px_rgba(0,255,136,0.2)] transition-all duration-[400ms] hover:scale-[1.03] hover:border-matrix-green/70 hover:shadow-[0_0_40px_rgba(0,224,255,0.6),0_0_80px_rgba(0,255,136,0.4)] group">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="profile-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      >
      <div class="holo-overlay absolute inset-0 bg-gradient-to-br from-matrix-green/[0.03] via-transparent to-neon-cyan/[0.05] pointer-events-none" />
    </div>

    <!-- Efeitos decorativos ao redor da foto -->
    <div class="deco-glow absolute -top-4 -right-4 w-[50px] h-[50px] rounded-full bg-[radial-gradient(circle,rgba(0,224,255,0.4),transparent)] blur-[20px]" />
    <div class="deco-glow absolute -bottom-4 -left-4 w-[50px] h-[50px] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.4),transparent)] blur-[20px]" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string
  imageAlt: string
}>()
</script>
