<script setup>
import {computed} from "vue";
import SubjectIcon from "./SubjectIcon.vue";

const props = defineProps(['subject']);

const subjects = {
    accessibility: {
        title: 'Accessibility',
        color: 'bg-background-purple',
        icon: 'icon-accessibility.svg'
    },
    html: {
        title: 'HTML',
        color: 'bg-background-orange',
        icon: 'icon-html.svg'
    },
    js: {
        title: 'Javascript',
        color: 'bg-background-blue',
        icon: 'icon-js.svg'
    },
    css: {
        title: 'CSS',
        color: 'bg-background-green',
        icon: 'icon-css.svg'
    }
}

const iconClass = computed(() => {
    return subjects[props.subject] ? subjects[props.subject].color : null;
})

const iconImage = computed(() => {
    return subjects[props.subject] ? subjects[props.subject].icon : null;
})

const iconTitle = computed(() => {
    return subjects[props.subject] ? subjects[props.subject].title : null;
})
</script>
<template>
    <div class="mr-auto flex justify-start items-center text-nav-sm sm:text-nav-md">
        <SubjectIcon :class=iconClass :icon=iconImage></SubjectIcon>
        {{ iconTitle }}
    </div>
</template>
<style/>
