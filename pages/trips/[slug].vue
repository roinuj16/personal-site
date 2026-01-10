<template>
  <div class="min-h-screen overflow-y-auto">
    <!-- Background Effects -->
    <layout-background-effects />

    <!-- Back Button -->
    <ui-back-button
      to="/trips"
      :label="backLabel"
      aria-label="Back to trips map"
    />

    <!-- Language Selector -->
    <div class="fixed top-4 right-4 z-[1000]">
      <ui-language-selector />
    </div>

    <!-- Content Container -->
    <div class="max-w-4xl mx-auto px-6 py-20">
      <!-- Header -->
      <header class="mb-12 animate-fade-in-up">
        <div class="flex items-center gap-3 mb-4">
          <i class="fas fa-map-marker-alt text-neon-cyan"></i>
          <span class="font-space text-gray-400">{{ trip?.country }}</span>
        </div>
        <h1 class="font-orbitron text-4xl md:text-5xl font-bold text-gradient-tech mb-4">
          {{ trip?.name }}
        </h1>
      </header>

      <!-- Featured Image -->
      <div class="relative mb-12 rounded-xl overflow-hidden border border-neon-cyan/20 animate-fade-in-up" style="animation-delay: 0.2s;">
        <img
          :src="trip?.thumbnailUrl"
          :alt="trip?.name"
          class="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent"></div>
      </div>

      <!-- Post Content -->
      <article class="prose prose-invert max-w-none animate-fade-in-up" style="animation-delay: 0.4s;">
        <div class="bg-deep-space/50 border border-neon-cyan/10 rounded-xl p-8 backdrop-blur-tech">
          <p class="font-space text-lg text-gray-300 leading-relaxed mb-6">
            {{ placeholderContent.intro }}
          </p>

          <h2 class="font-orbitron text-2xl text-neon-cyan mb-4">{{ placeholderContent.sectionTitle }}</h2>

          <p class="font-space text-gray-300 leading-relaxed mb-6">
            {{ placeholderContent.body }}
          </p>

          <div class="flex items-center gap-4 pt-6 border-t border-neon-cyan/10">
            <i class="fas fa-info-circle text-matrix-green"></i>
            <p class="font-space text-sm text-gray-400 italic">
              {{ placeholderContent.note }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { trips, backLabel } = useTrips()
const { locale } = useLocale()

const trip = computed(() => {
  return trips.value.find(t => t.slug === route.params.slug)
})

const placeholderContent = computed(() => {
  if (locale.value === 'pt') {
    return {
      intro: `Esta é uma página de exemplo para ${trip.value?.name}. Em breve, este espaço será preenchido com histórias, fotos e experiências incríveis dessa viagem.`,
      sectionTitle: 'Sobre este destino',
      body: 'Aqui você encontrará detalhes sobre os lugares visitados, dicas de viagem, recomendações de restaurantes, hospedagem e muito mais. Cada destino tem sua própria história para contar, e este blog será o espaço perfeito para compartilhar essas memórias.',
      note: 'Este conteúdo é um placeholder. O post completo será adicionado em breve.'
    }
  }
  return {
    intro: `This is a sample page for ${trip.value?.name}. Soon, this space will be filled with stories, photos, and amazing experiences from this trip.`,
    sectionTitle: 'About this destination',
    body: 'Here you will find details about the places visited, travel tips, restaurant recommendations, accommodation, and much more. Each destination has its own story to tell, and this blog will be the perfect space to share these memories.',
    note: 'This content is a placeholder. The full post will be added soon.'
  }
})

// Redirect to trips page if trip not found
onMounted(() => {
  if (!trip.value) {
    navigateTo('/trips')
  }
})
</script>
