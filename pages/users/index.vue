<template>
  <div>
    <h1>Users Top Page</h1>
    <hr>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.id }}, {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>