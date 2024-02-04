<template>
    <div v-if="error.statusCode === 404">
        <h1>error page</h1>
        <p>404 error</p>
        <p> {{ error.message }}</p>
    </div>
    <div v-if="error.statusCode !== 404">
        <h1>error page</h1>
        <div>status code:</div><div v-html="error.statusCode"></div>
        <div>message:</div><div v-html="error.message"></div>
        <div>{{ error }}</div>
    </div>
</template>
<script setup>
const error = useError() // https://zenn.dev/mm67/articles/nuxt3-use-error
</script>