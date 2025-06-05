<script setup lang="ts">
import IconsAnimatedSection from "./IconsAnimatedSection.vue";

const scrollToPricing = () => {
  const pricingSection = document.getElementById("pricing");
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <header
    class="bg-gradient-to-r from-[#1EB178] to-[#25D366] text-white py-20 relative overflow-hidden"
  >
    <IconsAnimatedSection />
    <div class="container mx-auto px-4 text-center relative z-10">
      <h1 class="text-5xl font-bold mb-6">
        Gerencie suas conversas do WhatsApp como um profissional
      </h1>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        Automatize, organize e potencialize seu atendimento com nossa plataforma
        completa de gestão de WhatsApp <br /><br />Comece de graça<br /><br />
        Conecte seu WhatsApp em poucos minutos tenha todos seus atendentes
        compartilhando o mesmo número. Não perca mais vendas.
      </p>
      <button
        @click="scrollToPricing"
        class="bg-white text-[#1EB178] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
      >
        Começar Agora
      </button>
    </div>
  </header>
</template>
