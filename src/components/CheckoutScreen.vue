<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-4">Confirme seus dados</h2>
      <p class="mb-4">Você escolheu o plano: {{ plan.name }}</p>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2"
            >Nome</label
          >
          <input
            type="text"
            id="name"
            v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700 text-sm font-bold mb-2"
            >Telefone</label
          >
          <input
            type="tel"
            id="phone"
            v-model="phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="flex justify-end">
          <button type="submit" class="btn-primary mr-2">Confirmar</button>
          <button type="button" class="btn-secondary" @click="$emit('close')">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["close"]);

const props = defineProps({
  plan: {
    type: Object,
    required: true,
  },
});

const name = ref("");
const email = ref("");
const phone = ref("");

const handleSubmit = () => {
  console.log(
    "Simulating sending email to brunofelixbessa@gmail.com with the following data:"
  );
  console.log("Name:", name.value);
  console.log("Email:", email.value);
  console.log("Phone:", phone.value);
  console.log("Plan:", props.plan);
  emit("close");
};
</script>
