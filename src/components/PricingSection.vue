<script setup lang="ts">
import { ref } from "vue";
import PricingCard from "./PricingCard.vue";
import CheckoutScreen from "./CheckoutScreen.vue";

const plans = [
  {
    name: "FREE",
    price: "R$ 0,00",
    features: [
      "1 caixas de entrada",
      "Live Chat",
      "Respostas automáticas básicas",
      "1 usuário",
      "Relatórios básicos",
    ],
    recommended: false,
  },
  // {
  //   name: "Básico",
  //   price: "R$ 79,90",
  //   features: [
  //     "2 caixas de entrada",
  //     "Email",
  //     "Live Chat",
  //     "Respostas automáticas básicas",
  //     "até 2 usuário",
  //     "Relatórios básicos",
  //     "Suporte por chat",
  //   ],
  //   recommended: false,
  // },
  {
    name: "Profissional",
    price: "R$ 149,90",
    features: [
      "3 caixas de entrada",
      "1 WhatsApp",
      "Chatbot personalizado",
      "até 5 usuários",
      "Relatórios avançados",
      "API de integração",
      "Suporte por chat",
    ],
    recommended: true,
  },
  {
    name: "Empresarial",
    price: "R$ 499,90",
    features: [
      "Conversas ilimitadas",
      "10 caixas de entrada",
      "2 WhatsApp",
      "Chatbot avançado com IA",
      "Usuários (validar)",
      "Relatórios personalizados",
      "API de integração",
      "Suporte personalizado",
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
