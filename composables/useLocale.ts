export type Locale = 'en' | 'pt'

const locale = ref<Locale>('en')

export const useLocale = () => {
  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale
    if (import.meta.client) {
      localStorage.setItem('locale', newLocale)
    }
  }

  const initLocale = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('locale') as Locale | null
      if (saved && (saved === 'en' || saved === 'pt')) {
        locale.value = saved
      }
    }
  }

  return {
    locale: readonly(locale),
    setLocale,
    initLocale
  }
}
