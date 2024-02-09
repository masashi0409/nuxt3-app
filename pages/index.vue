<template>
  <div>
    <h1>Top Page</h1>
    <hr>
    <div>NuxtLink</div>
    <NuxtLink to="/users">Users</NuxtLink><br>
    <NuxtLink to="/tasks">Tasks</NuxtLink>
    <hr>
    <div>useStateでテキストを変更</div>
    <div>{{ text }}</div>
    <button @click="textState.changeText('Text Changed.')">changeText</button>
    <hr>
    <div>useStateでカウンタを変更</div>
    <div>{{ counter }}</div>
    <div>
      <button @click="counterStore.reset">reset</button>
      <button @click="counterStore.down">-</button>
      <button @click="counterStore.up">+</button>
    </div>
    <hr>
    <div>assets</div>
    <div>
      <img width="300" src="~/assets/cat.jpg" alt="cat">
    </div>
  </div>
</template>
<script setup>
const textState = useText()
const { text } = textState

const counterStore = useCounterState()
const { counter } = counterStore
</script>