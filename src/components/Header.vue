<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center">
        <img
          src="../assets/LogoNovoSemFundo.png"
          alt="Automas Logo"
          class="h-8 mr-4"
        />
      </div>
      <ul class="hidden md:flex space-x-6">
        <li>
          <a href="#" class="text-gray-700 hover:text-gray-900">Recursos</a>
        </li>
        <li>
          <a href="#" class="text-gray-700 hover:text-gray-900">Preços</a>
        </li>
        <li>
          <a href="#" class="text-gray-700 hover:text-gray-900">Contato</a>
        </li>
      </ul>
      <div class="flex items-center">
        <a
          href="https://atendimento.automas.me/"
          target="_blank"
          class="btn-primary"
        >
          Login
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
