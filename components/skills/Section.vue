<template>
  <section class="py-4 md:py-4 mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-0">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-6">
      <skills-card
        v-for="skill in skills"
        :key="skill.id"
        v-bind="skill"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  skills: Array<{
    id: string
    title: string
    description: string
    icon: string
    iconColor: 'dev' | 'photo' | 'travel'
    imageUrl: string
    animationDelay?: string
  }>
}>()
</script>
