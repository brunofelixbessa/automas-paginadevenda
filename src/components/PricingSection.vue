<script setup lang="ts">
import { ref } from "vue";
import PricingCard from "./PricingCard.vue";
import CheckoutScreen from "./CheckoutScreen.vue";

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
      <CheckoutScreen
        v-if="showCheckout"
        :plan="selectedPlan"
        @close="showCheckout = false"
      />
    </div>
  </section>
</template>
