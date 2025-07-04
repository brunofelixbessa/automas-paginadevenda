<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center">
        <img
          src="../assets/intal_chatwoot_logo_b.png"
          alt="Intalk Logo"
          class="h-8 mr-4 logo"
        />
      </div>
      <ul class="hidden md:flex space-x-6">
        <li>
          <a href="#recursos" class="text-gray-700 hover:text-gray-900"
            >Recursos</a
          >
        </li>
        <li>
          <a href="#pricing" class="text-gray-700 hover:text-gray-900"
            >Preços</a
          >
        </li>
        <li>
          <a href="#" class="text-gray-700 hover:text-gray-900">Contato</a>
        </li>
      </ul>
      <div class="flex items-center">
        <button @click="toggleDarkMode" class="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m.386-6.364l1.591 1.591M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
        <a
          href="https://chat.intalk.pro"
          target="_blank"
          class="btn-primary"
        >
          Login
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const toggleDarkMode = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  }
};

onMounted(() => {
  if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark");
  }
});
</script>

<style scoped>
.logo {
  height: 32px;
  width: auto;
}
</style>
