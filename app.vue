<template>
  <div class="h-screen overflow-y-auto">
    <!-- Background Effects -->
    <layout-background-effects />

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
const { content } = useContent()
</script>
