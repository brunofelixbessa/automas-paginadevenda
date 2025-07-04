<script setup lang="ts">
import { ref } from "vue";
import HeroSection from "./components/HeroSection.vue";
import ClientLogosSection from "./components/ClientLogosSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import OmnichannelSection from "./components/OmnichannelSection.vue";
import FAQSection from "./components/FAQSection.vue";
import DashboardSection from "./components/DashboardSection.vue";
import CheckoutScreen from "./components/CheckoutScreen.vue";
import Header from "./components/Header.vue";
import PricingSection from "./components/PricingSection.vue";
//import IconsAnimatedSection from "./components/IconsAnimatedSection.vue";

const showCheckout = ref(false);
const selectedPlan = ref({});

</script>

<template>
  <div>
    <Header />
    <HeroSection />
    <DashboardSection />
    <FeaturesSection />
    <OmnichannelSection />
    <ClientLogosSection />
    <PricingSection />
    <FAQSection />

    <!-- CTA Section -->
    <section class="bg-[#2781f6] text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Pronto para revolucionar seu atendimento?
        </h2>
        <p class="text-xl mb-8">
          Comece agora e transforme a maneira como você gerencia suas conversas
          no WhatsApp.
        </p>
        <button
          class="bg-white text-[#2781f6] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
        >
          Experimente Grátis por 30 Dias
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <p>
            &copy; 2024 Futura Tecnologia LTDA - 50069157000141. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
    <CheckoutScreen
      v-if="showCheckout"
      :plan="selectedPlan"
      @close="showCheckout = false"
    />
  </div>
</template>
