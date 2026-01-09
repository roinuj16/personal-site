<template>
  <div>
    <!-- Grid holográfico de fundo -->
    <div class="holographic-grid fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(rgba(0,224,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,224,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />

    <!-- Estrelas animadas -->
    <div class="stars fixed inset-0 pointer-events-none z-0">
      <div class="stars-layer absolute inset-0 bg-[radial-gradient(2px_2px_at_20%_30%,white,transparent),radial-gradient(2px_2px_at_60%_70%,white,transparent),radial-gradient(1px_1px_at_50%_50%,white,transparent),radial-gradient(1px_1px_at_80%_10%,white,transparent),radial-gradient(1px_1px_at_90%_60%,white,transparent)] bg-[length:300px_300px] animate-stars" />
    </div>

    <!-- Light Orbs -->
    <div class="light-orb fixed top-[15%] left-[10%] w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-40 bg-[radial-gradient(circle,rgba(0,255,136,0.15),transparent)]" />
    <div class="light-orb fixed bottom-[15%] right-[10%] w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-40 bg-[radial-gradient(circle,rgba(0,224,255,0.15),transparent)]" />
  </div>
</template>

<script setup lang="ts">
</script>
