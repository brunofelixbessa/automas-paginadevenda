<script setup lang="ts">
defineProps<{
  title: string
  description: string
  iconPath: string
}>()
</script>

<template>
  <div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div class="bg-gradient-to-r from-[#128C7E] to-[#25D366] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          :d="iconPath" 
        />
      </svg>
    </div>
    <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </div>
</template>