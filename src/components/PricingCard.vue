<script setup lang="ts">
import { ref } from "vue";
import CheckoutScreen from "./CheckoutScreen.vue";

interface Plan {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
}

defineProps<{
  plan: Plan;
}>();

const showCheckout = ref(false);

const handleCheckout = () => {
  showCheckout.value = true;
};
</script>

<template>
  <div
    class="card-hover rounded-xl overflow-hidden shadow-lg bg-white relative"
    :class="{ 'border-2 border-[#25D366]': plan.recommended }"
  >
    <div v-if="plan.recommended" class="absolute top-4 right-4">
      <span class="bg-[#25D366] text-white px-3 py-1 rounded-full text-sm"
        >Recomendado</span
      >
    </div>
    <div class="p-8">
      <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
      <div class="mb-6">
        <span class="text-4xl font-bold">{{ plan.price }}</span>
        <span class="text-gray-600">/mês</span>
      </div>
      <ul class="space-y-4 mb-8">
        <li
          v-for="feature in plan.features"
          :key="feature"
          class="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-[#25D366] mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          {{ feature }}
        </li>
      </ul>
      <button
        class="w-full btn-primary"
        :class="{ 'bg-[#25D366] hover:bg-[#128C7E]': plan.recommended }"
        @click="handleCheckout"
      >
        Assinar
      </button>
    </div>
    <CheckoutScreen v-if="showCheckout" @close="showCheckout = false" />
  </div>
</template>
