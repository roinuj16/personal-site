<template>
  <div class="flex gap-4 mt-12 md:mt-8 justify-center md:justify-start">
    <ui-button
      v-for="link in socialLinks"
      :key="link.name"
      :icon="link.icon"
      :url="link.url"
      :aria-label="link.ariaLabel"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  socialLinks: Array<{
    name: string
    icon: string
    url: string
    ariaLabel: string
  }>
}>()
</script>
