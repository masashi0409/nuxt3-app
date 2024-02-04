<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead(
  {
    title: "Nuxt3 Sample",
    link: [
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"}
    ]
  }
)
</script>