<script setup lang="ts">
import { ref } from "vue";

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

const faqs = ref<FAQ[]>([
  {
    question: "Como funciona o período de teste gratuito?",
    answer:
      "Oferecemos 30 dias de teste gratuito em qualquer plano. Durante este período, você terá acesso a todas as funcionalidades do plano escolhido, sem compromisso. Não é necessário cartão de crédito para começar.",
    isOpen: false,
  },
  {
    question: "Preciso instalar algum software adicional?",
    answer:
      "Não, nossa plataforma é 100% baseada na web. Você só precisa de um navegador e conexão com a internet para começar a usar.",
    isOpen: false,
  },
  {
    question: "Posso mudar de plano a qualquer momento?",
    answer:
      "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações serão refletidas na sua próxima fatura.",
    isOpen: false,
  },
  {
    question: "Como funciona o suporte técnico?",
    answer:
      "Oferecemos suporte por chat e email em todos os planos. No plano Empresarial, você também tem acesso a suporte prioritário por chat ou email.",
    isOpen: false,
  },
  {
    question: "É possível integrar com outros sistemas?",
    answer:
      "Sim, oferecemos API REST nos planos Profissional e Empresarial, permitindo integração com diversos sistemas e plataformas.",
    isOpen: false,
  },
]);

const toggleFAQ = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
            @click="toggleFAQ(index)"
          >
            <span class="text-lg font-semibold">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 transform transition-transform duration-200"
              :class="{ 'rotate-180': faq.isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div v-show="faq.isOpen" class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
