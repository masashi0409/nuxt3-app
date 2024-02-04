<template>
  <div>
    <h1>Users/{{ $route.params.id }}</h1>
    <hr>
    <p>{{ users[paramsId].id }}: {{users[paramsId].name }}</p>
  </div>
</template>
<script setup>
  definePageMeta({
      validate: async(route) => {
          return /^\d+$/.test(route.params.id)
          // 整数のみの正規表現. testメソッドで検査. みつからない=false=404error
          // /users/100 などで正常系
          // /users/hoge などで404になる
      }
  })

  const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')
  // const apiResult = await useFetch('https://jsonplaceholder.typicode.com/users')
  // const users = apiResult.data
  // { data: } とすることでapiの結果の変数をつくる不要

  // テストデータの取得にplaceholderというwebサービスを利用する
  // テストやプロトタイピングに使えるJSON形式のダミーデータを配信するAPI

  // useFetchはnuxtのAPI呼び出しcomposable 
  // useFetchは非同期データ取得API
  // https://nuxt.com/docs/api/composables/use-fetch

  const route = useRoute()
  // console.log(route.params.id)
  const paramsId = route.params.id
</script>