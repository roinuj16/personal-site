<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 bg-deep-space/50 border border-gray-700 hover:border-neon-cyan/50 rounded-lg backdrop-blur-sm"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
    >
      <i class="fas fa-globe text-neon-cyan"></i>
      <span class="uppercase">{{ locale }}</span>
      <i class="fas fa-chevron-down text-xs transition-transform duration-200" :class="{ 'rotate-180': isOpen }"></i>
    </button>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <ul
        v-if="isOpen"
        class="absolute right-0 mt-2 w-32 bg-deep-space/95 border border-gray-700 rounded-lg shadow-lg backdrop-blur-sm overflow-hidden z-50"
        role="listbox"
      >
        <li
          v-for="lang in languages"
          :key="lang.code"
          @click="selectLanguage(lang.code)"
          class="px-4 py-2 text-sm cursor-pointer transition-colors duration-150 flex items-center gap-2"
          :class="locale === lang.code ? 'text-neon-cyan bg-neon-cyan/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'"
          role="option"
          :aria-selected="locale === lang.code"
        >
          <span>{{ lang.flag }}</span>
          <span>{{ lang.name }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { Locale } from '~/composables/useLocale'

const { locale, setLocale } = useLocale()
const isOpen = ref(false)

const languages = [
  { code: 'en' as Locale, name: 'English', flag: '🇺🇸' },
  { code: 'pt' as Locale, name: 'Português', flag: '🇧🇷' }
]

const selectLanguage = (code: Locale) => {
  setLocale(code)
  isOpen.value = false
}

// Close dropdown when clicking outside
const closeDropdown = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>
