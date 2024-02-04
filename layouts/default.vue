<template>
    <div class="container">
        <slot />
        <footer>&copy; proglus.jp</footer>
    </div>
</template>
<style>
.container{
    color: rgb(43, 92, 118);
}

footer {
    background-color: rgba(0, 81, 143, 0.623);
    color: white;
    text-align: center;
}
</style>