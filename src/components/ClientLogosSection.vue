<script setup lang="ts">
const clients = [
  { 
    name: 'Tech Company', 
    logo: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=200&h=100&fit=crop&q=80&auto=format'
  },
  { 
    name: 'Marketing Agency', 
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80&auto=format'
  },
  { 
    name: 'Consulting Firm', 
    logo: 'https://images.unsplash.com/photo-1554774853-719586f82d77?w=200&h=100&fit=crop&q=80&auto=format'
  },
  { 
    name: 'Software Company', 
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&q=80&auto=format'
  },
  { 
    name: 'Design Studio', 
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop&q=80&auto=format'
  },
  { 
    name: 'Financial Services', 
    logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200&h=100&fit=crop&q=80&auto=format'
  },
  { 
    name: 'Healthcare Provider', 
    logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=100&fit=crop&q=80&auto=format'
  },
  { 
    name: 'Education Institute', 
    logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=100&fit=crop&q=80&auto=format'
  }
]
</script>

<template>
  <section class="py-12 bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
        Mais de 1500 clientes já usam e confiam no Automas
      </h2>
      
      <div class="relative">
        <!-- First row of logos -->
        <div class="flex space-x-12 animate-scroll">
          <div v-for="client in clients" :key="client.name" class="flex-none">
            <img 
              :src="client.logo" 
              :alt="client.name"
              class="h-20 w-32 object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300 shadow-md"
            />
          </div>
        </div>
        
        <!-- Duplicated row for seamless scrolling -->
        <div class="flex space-x-12 animate-scroll" aria-hidden="true">
          <div v-for="client in clients" :key="`${client.name}-duplicate`" class="flex-none">
            <img 
              :src="client.logo" 
              :alt="client.name"
              class="h-20 w-32 object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300 shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Add a gradient overlay to hide the scroll edges */
.relative::before,
.relative::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
}

.relative::before {
  left: 0;
  background: linear-gradient(to right, rgb(249 250 251) 0%, transparent 100%);
}

.relative::after {
  right: 0;
  background: linear-gradient(to left, rgb(249 250 251) 0%, transparent 100%);
}
</style>