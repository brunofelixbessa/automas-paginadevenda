<script setup lang="ts">
const props = defineProps<{
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
}>();

const emit = defineEmits(["select-plan"]);

const handleCheckout = () => {
  emit("select-plan", {
    name: props.name,
    price: props.price,
    features: props.features,
    recommended: props.recommended,
  });
};
</script>

<template>
  <div
    class="card-hover rounded-xl overflow-hidden shadow-lg bg-white relative"
    :class="{ 'border-2 border-[#25D366]': recommended }"
  >
    <div v-if="recommended" class="absolute top-4 right-4">
      <span class="bg-[#25D366] text-white px-3 py-1 rounded-full text-sm"
        >Recomendado</span
      >
    </div>
    <div class="p-8">
      <h3 class="text-2xl font-bold mb-4">{{ name }}</h3>
      <div class="mb-6">
        <span class="text-4xl font-bold">{{ price }}</span>
        <span class="text-gray-600">/mês</span>
      </div>
      <ul class="space-y-4 mb-8">
        <li
          v-for="feature in features"
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
        :class="{ 'bg-[#25D366] hover:bg-[#128C7E]': recommended }"
        @click="handleCheckout"
      >
        Assinar
      </button>
    </div>
  </div>
</template>
