<template>
  <div class="h-screen w-screen overflow-hidden bg-deep-space">
    <!-- Back Button -->
    <ui-back-button
      to="/"
      :label="backLabel"
      aria-label="Back to home"
    />

    <!-- Language Selector -->
    <div class="fixed top-4 right-4 z-[1000]">
      <ui-language-selector />
    </div>

    <!-- Map -->
    <ClientOnly>
      <trips-map :trips="trips" />
      <template #fallback>
        <div class="w-full h-full flex items-center justify-center">
          <div class="text-center">
            <i class="fas fa-globe text-6xl text-neon-cyan animate-pulse mb-4"></i>
            <p class="font-space text-gray-400">Loading map...</p>
          </div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { trips, backLabel } = useTrips()
</script>
