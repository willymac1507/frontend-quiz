<script setup>
    const props = defineProps(['score'])
</script>

<template>
    <div class="main-container">
        Hello {{ props.score }}
    </div>
</template>
