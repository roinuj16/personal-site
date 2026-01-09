<template>
  <section class="hero-section flex items-center justify-center pt-12 pb-6 md:pt-16 md:pb-6 relative">
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 items-center max-w-[1200px] mx-auto">
      <!-- Hero Text -->
      <hero-text
        :first-name="hero.firstName"
        :last-name="hero.lastName"
        :description="hero.description"
        :social-links="socialLinks"
        class="md:text-left text-center order-2 md:order-1"
      />

      <!-- Profile Image -->
      <hero-profile
        :image-url="hero.profileImageUrl"
        :image-alt="hero.profileImageAlt"
        class="order-1 md:order-2"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  hero: {
    firstName: string
    lastName: string
    description: string
    profileImageUrl: string
    profileImageAlt: string
  }
  socialLinks: Array<{
    name: string
    icon: string
    url: string
    ariaLabel: string
  }>
}>()
</script>
