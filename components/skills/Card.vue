<template>
  <component
    :is="linkComponent"
    :href="linkExternal ? linkUrl : undefined"
    :to="!linkExternal && linkUrl ? linkUrl : undefined"
    :target="linkExternal ? '_blank' : undefined"
    :rel="linkExternal ? 'noopener noreferrer' : undefined"
    :aria-label="linkUrl ? `Ver mais sobre ${title}` : undefined"
    class="skill-card group relative p-[2px] rounded-3xl bg-gradient-to-br from-matrix-green to-neon-cyan transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,224,255,0.5)] block no-underline"
    :class="{ 'cursor-pointer': linkUrl }"
    :style="{ animationDelay: animationDelay }"
  >
    <div class="skill-card-inner relative bg-deep-space/95 backdrop-blur-tech rounded-3xl p-8 h-full overflow-hidden">
      <skills-card-corners />

      <!-- TODO: Substituir ícone por foto quando disponível -->
      <!-- Ícone temporário no lugar da foto (depois volta para o título) -->
      <div class="skill-icon-wrapper relative w-20 h-20 mb-6 mx-auto flex items-center justify-center">
        <div class="skill-icon-glow absolute inset-0 bg-gradient-to-br from-matrix-green to-neon-cyan opacity-50 blur-[30px] animate-glow-pulse" />
        <i
          :class="[
            icon,
            'card-icon relative text-5xl opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110',
            iconColorClass
          ]"
        />
      </div>

      <!-- TODO: Quando adicionar a foto, descomentar o código abaixo -->
      <!-- <div class="skill-icon-wrapper relative w-20 h-20 mb-6 mx-auto">
        <div class="skill-icon-glow absolute inset-0 bg-gradient-to-br from-matrix-green to-neon-cyan opacity-50 blur-[30px] animate-glow-pulse" />
        <img
          :src="imageUrl"
          :alt="title"
          class="skill-icon relative w-full h-full rounded-2xl object-cover border-2 border-neon-cyan/30"
        >
      </div> -->

      <!-- Título (ícone volta aqui quando adicionar a foto) -->
      <h3 class="font-orbitron text-2xl font-bold mb-4 flex items-center justify-center">
        <!-- TODO: Quando adicionar a foto, descomentar o ícone abaixo -->
        <!-- <i
          :class="[
            icon,
            'card-icon inline-block text-xl mr-2 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110',
            iconColorClass
          ]"
        /> -->
        <span class="text-gradient-tech">{{ title }}</span>
      </h3>

      <!-- Descrição -->
      <p class="text-white/85 text-lg leading-relaxed text-center">
        {{ description }}
      </p>
    </div>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
  title: string
  description: string
  icon: string
  iconColor: 'dev' | 'photo' | 'travel'
  imageUrl: string
  linkUrl?: string
  linkExternal?: boolean
  animationDelay?: string
}>()

const iconColorClass = computed(() => {
  const colors = {
    dev: 'text-matrix-green',
    photo: 'text-neon-cyan',
    travel: 'text-electric-blue'
  }
  return colors[props.iconColor]
})

const linkComponent = computed(() => {
  if (!props.linkUrl) return 'div'
  if (props.linkExternal) return 'a'
  return resolveComponent('NuxtLink')
})
</script>

<style scoped>
.skill-card:hover .card-icon {
  opacity: 1;
  transform: scale(1.15);
}
</style>
