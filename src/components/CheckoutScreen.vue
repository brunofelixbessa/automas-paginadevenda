<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-4">Confirme seus dados</h2>
      <p class="mb-4">Você escolheu o plano: {{ plan.name }}</p>
      <form @submit.prevent="handleSubmit" v-if="!successMessage">
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
            v-mask="'+55 (##) #####-####'"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="flex justify-end">
          <button type="submit" class="btn-primary mr-2" :disabled="loading">
            <span v-if="loading">Enviando...</span>
            <span v-else>Confirmar</span>
          </button>
          <button type="button" class="btn-secondary" @click="$emit('close')">
            Cancelar
          </button>
        </div>
      </form>
      <div v-if="successMessage" class="text-center">
        <p class="text-green-500 font-bold mb-4">{{ successMessage }}</p>
        <button type="button" class="btn-primary" @click="$emit('close')">
          Fechar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { sendTextMessage } from "../services/api";

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
const loading = ref(false);
const successMessage = ref("");

const handleSubmit = async () => {
  loading.value = true;
  const message = `Novo pedido!\nPlano: ${props.plan.name}\nNome: ${name.value}\nEmail: ${email.value}\nTelefone: ${phone.value}`;
  try {
    await sendTextMessage(message);
    successMessage.value = "Formulário enviado com sucesso!";
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Failed to send message", error);
    successMessage.value = "Erro ao enviar o formulário.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {});
</script>
