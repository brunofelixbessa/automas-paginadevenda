<script setup lang="ts">
import dashboardImage from "../assets/dashboard.png";
</script>

<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <img
          :src="dashboardImage"
          alt="Dashboard"
          class="w-full rounded-lg shadow-xl"
        />
      </div>
    </div>
  </section>
</template>
