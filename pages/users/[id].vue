<template>
    <div>
      <h1>Users/{{ $route.params.id }}</h1>
      <hr>
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
  </script>