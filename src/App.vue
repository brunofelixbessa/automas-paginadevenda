<script setup lang="ts">
import { ref } from "vue";
import HeroSection from "./components/HeroSection.vue";
import ClientLogosSection from "./components/ClientLogosSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import OmnichannelSection from "./components/OmnichannelSection.vue";
import PricingCard from "./components/PricingCard.vue";
import FAQSection from "./components/FAQSection.vue";
import DashboardSection from "./components/DashboardSection.vue";
import CheckoutScreen from "./components/CheckoutScreen.vue";
import Header from "./components/Header.vue";

const plans = [
  {
    name: "Básico",
    price: "R$ 49,90",
    features: [
      "Até 500 conversas por mês",
      "Atendimento em horário comercial",
      "Respostas automáticas básicas",
      "1 usuário",
      "Relatórios básicos",
    ],
    recommended: false,
  },
  {
    name: "Profissional",
    price: "R$ 99,90",
    features: [
      "Até 2000 conversas por mês",
      "Atendimento 24/7",
      "Chatbot personalizado",
      "3 usuários",
      "Relatórios avançados",
      "API de integração",
    ],
    recommended: true,
  },
  {
    name: "Empresarial",
    price: "R$ 199,90",
    features: [
      "Conversas ilimitadas",
      "Suporte prioritário 24/7",
      "Chatbot avançado com IA",
      "Usuários ilimitados",
      "Relatórios personalizados",
      "API completa",
      "Treinamento exclusivo",
    ],
    recommended: false,
  },
];

const showCheckout = ref(false);
const selectedPlan = ref({});

const handleSelectPlan = (plan: any) => {
  selectedPlan.value = plan;
  showCheckout.value = true;
};
</script>

<template>
  <div>
    <Header />
    <HeroSection />
    <DashboardSection />
    <FeaturesSection />
    <OmnichannelSection />
    <ClientLogosSection />
    <!-- Pricing Section -->
    <section id="pricing" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Planos e Preços</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            v-for="plan in plans"
            :key="plan.name"
            :name="plan.name"
            :price="plan.price"
            :features="plan.features"
            :recommended="plan.recommended"
            @select-plan="handleSelectPlan"
          />
        </div>
      </div>
    </section>

    <FAQSection />

    <!-- CTA Section -->
    <section class="bg-[#128C7E] text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Pronto para revolucionar seu atendimento?
        </h2>
        <p class="text-xl mb-8">
          Comece agora e transforme a maneira como você gerencia suas conversas
          no WhatsApp.
        </p>
        <button
          class="bg-white text-[#128C7E] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
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
            &copy; 2024 WhatsApp Management System. Todos os direitos
            reservados.
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
