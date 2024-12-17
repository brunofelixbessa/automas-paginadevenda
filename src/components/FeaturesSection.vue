<script setup lang="ts">
import FeatureCard from "./FeatureCard.vue";

const features = [
  {
    title: "Multiplas Contas",
    description:
      "Gerencie todas as suas contas de atendimento em uma única plataforma.",
    icon: "M12 4.354a4 4 0 110 5.292V4.354zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Permissões por Agente",
    description:
      "Defina permissões para cada agente, para que eles possam acessar apenas os canais que você permitir.",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
  },
  {
    title: "Pesquisa de Satisfação",
    description:
      "Envie pesquisas de satisfação para seus clientes e acompanhe o feedback deles, seja por e-mail ou mensagem.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "Relatórios sobre Atendimentos",
    description:
      "Acompanhe o desempenho de seus atendentes e veja como estão os atendimentos.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "REST API",
    description:
      "A API REST permite que você integre com outros sistemas como o N8N, TypeBoot, Seus sistemas, etc.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Automação no Atendimento",
    description:
      "Crie fluxos de atendimento automatizados para responder a perguntas frequentes ou organizar seus atendimentos.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Central de Ajuda",
    description:
      "Crie uma central de ajuda para seus clientes e permita que eles encontrem as respostas para suas perguntas.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Gerencie Vários Canais",
    description:
      "Gerencie seus atendimentos em vários canais como WhatsApp, Facebook, Twitter, Telegram, etc ao mesmo tempo.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];
</script>

<template>
  <section id="recursos" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16">Recursos Principais</h2>
      <div class="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <FeatureCard
          v-for="feature in features.slice(0, 8)"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon-path="feature.icon"
        />
      </div>
    </div>
  </section>
</template>
