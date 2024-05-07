<template>
    <Link :href="'/question/' + props.subject" class="cursor-pointer text-answer h-16 bg-white rounded-md w-full p-[12px] flex justify-start items-center">
        <IconSet :class="props.class" :subject="props.subject"></IconSet>
    </Link>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";
import IconSet from "./IconSet.vue";

const props = defineProps(['subject'])

</script>
