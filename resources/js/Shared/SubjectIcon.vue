<template>
    <div class="w-10 sm:w-14 h-10 sm:h-14 rounded sm:rounded-xl p-1 sm:p-2 mr-2 sm:mr-8"><img :src="'/images/' + props.icon" alt="" width="40px" ></div>
</template>
<script setup>
const props = defineProps(['icon'])
</script>
