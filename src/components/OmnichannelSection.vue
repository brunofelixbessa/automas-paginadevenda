<script setup lang="ts"></script>

<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="
        background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
        filter: brightness(0.3);
      "
    ></div>

    <!-- Content -->
    <div class="relative container mx-auto px-4 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Centro de Suporte Omnichannel
        </h2>
        <p class="text-lg md:text-xl leading-relaxed opacity-90">
          O Intalk se conecta com canais populares de comunicação com o
          cliente, como Email, chat ao vivo no site, Facebook, WhatsApp,
          Instagram, entre outros. Isso permite oferecer uma experiência
          consistente ao cliente através de diversos canais - tudo a partir de
          um único painel de controle.
        </p>

        <!-- Channel Icons -->
        <div
          class="mt-12 grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center"
        >
          <div
            v-for="channel in [
              'whatsapp',
              'facebook',
              'instagram',
              'comment',
              //'twitter',
              'telegram',
              'envelope',
            ]"
            :key="channel"
            class="flex items-center justify-center"
          >
            <div
              class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"
            >
              <i
                :class="
                  channel === 'envelope'
                    ? 'fa fa-envelope'
                    : channel === 'comment'
                    ? 'fa fa-comment'
                    : `fab fa-${channel}`
                "
                class="text-2xl"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>
