<template>
    <div>
        <h1>Tasks</h1>
        <form @submit.prevent="addTask">
            <input v-model="newTask" autocomplete="off" />
            <button>Add</button>
        </form>
        <ul>
            <li v-for="(task, index) in tasks" :key="task">
                <span>{{ task }}</span>
                <button @click="deleteTask(index)">Delete</button>
            </li>
        </ul>
        <button @click="clearTasks">Clear</button>
    </div>
</template>
<script setup>
    const tasks = useCookie(
        'tasks',
        {
            default: () => []
        }
    )
    const newTask = ref('')

    /**
     * 追加
     */
    const addTask = () => {
        if (newTask.value.length >= 1) {
            tasks.value.push(newTask.value)
        }
        newTask.value = ''
    }

    /**
     * 1件削除
     * @param {*} index 
     */
    const deleteTask = (index) => {
        tasks.value.splice(index, 1)
    }

    /**
     * 全件削除
     */
    const clearTasks = () => {
        tasks.value = [] // tasks配列を空にする
    }
</script>