<template>
  <section class="animated-icons-section">
    <div
      class="icon-container"
      v-for="icon in icons"
      :key="icon"
      :style="getContainerStyle()"
    >
      <i :class="`icon ${getIconClass(icon)}`"></i>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const baseIcons = [
  "whatsapp",
  "facebook",
  "instagram",
  "comment",
  "telegram",
  "envelope",
  "email",
  "chat",
  "site",
  "phone",
  "mobile",
  "inbox",
  "at",
  "wifi",
  "bell",
  "share-alt",
];

const icons = ref<string[]>([]);

function generateIcons() {
  baseIcons.forEach((icon) => {
    const repeatCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < repeatCount; i++) {
      icons.value.push(icon);
    }
  });
}

generateIcons();

function getIconClass(icon: string) {
  if (icon === "envelope") {
    return "fa fa-envelope";
  } else if (icon === "comment") {
    return "fa fa-comment";
  } else if (icon === "email") {
    return "fa fa-envelope";
  } else if (icon === "chat") {
    return "fa fa-comment";
  } else if (icon === "site") {
    return "fa fa-globe";
  } else if (icon === "phone") {
    return "fa fa-phone";
  } else if (icon === "mobile") {
    return "fa fa-mobile";
  } else if (icon === "inbox") {
    return "fa fa-inbox";
  } else if (icon === "at") {
    return "fa fa-at";
  } else if (icon === "wifi") {
    return "fa fa-wifi";
  } else if (icon === "bell") {
    return "fa fa-bell";
  } else if (icon === "share-alt") {
    return "fa fa-share-alt";
  } else {
    return `fab fa-${icon}`;
  }
}

function getContainerStyle() {
  const randomTop = Math.random() * 350;
  const randomLeft = Math.random() * 95;
  return {
    top: `${randomTop}px`,
    left: `${randomLeft}%`,
  };
}

onMounted(() => {
  const iconContainers = document.querySelectorAll(".icon-container");
  iconContainers.forEach((container) => {
    animateIcon(container);
  });
});

function animateIcon(container: Element) {
  const icon = container.querySelector("i") as HTMLElement;
  const randomX = Math.random() * 100 - 50;
  const randomY = Math.random() * 100 - 50;
  const randomDelay = Math.random() * 5;
  const randomDuration = Math.random() * 5 + 5;

  icon.style.setProperty("--random-x", `${randomX}px`);
  icon.style.setProperty("--random-y", `${randomY}px`);
  icon.style.setProperty("--random-delay", `${randomDelay}s`);
  icon.style.setProperty("--random-duration", `${randomDuration}s`);
}
</script>

<style scoped>
.animated-icons-section {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: #f0f0f0;
}

.icon-container {
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.icon {
  font-size: 24px;
  color: #333;
  opacity: 0.3;
  transition: transform 0.3s ease;
  animation: moveIcon var(--random-duration) linear var(--random-delay) infinite
    alternate;
}

@keyframes moveIcon {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(var(--random-x), var(--random-y));
  }
}
</style>
