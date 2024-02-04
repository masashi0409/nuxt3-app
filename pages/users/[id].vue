<template>
  <div>
    <h1>Users/{{ $route.params.id }}</h1>
    <hr>
    <p>{{ users[paramsId - 1].id }}: {{users[paramsId - 1].name }}</p>
  </div>
</template>
<script setup>
  definePageMeta({
      validate: async(route) => {
          return /^\d+$/.test(route.params.id)
      }
  })

  const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')

  const route = useRoute()
  const paramsId = route.params.id
</script>