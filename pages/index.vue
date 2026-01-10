<template>
  <div class="h-screen overflow-y-auto">
    <!-- Background Effects -->
    <layout-background-effects />

    <!-- Language Selector -->
    <div class="fixed top-4 right-4 z-50">
      <ui-language-selector />
    </div>

    <!-- Main Container -->
    <layout-container>

      <!-- Hero Section -->
      <hero-section
        :hero="content.hero"
        :social-links="content.socialLinks"
      />

      <!-- Skills Section -->
      <skills-section :skills="content.skills" />
    </layout-container>
  </div>
</template>

<script setup lang="ts">
const { initLocale } = useLocale()
const { content } = useContent()

onMounted(() => {
  initLocale()
})
</script>
