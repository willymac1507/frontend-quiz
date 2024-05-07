<script setup>
import Toggle from "./Toggle.vue";
</script>

<template>
    <nav class="max-w-full h-[40px] flex justify-between items-center gap-2">
        <div>
            <slot name="icon"/>
        </div>
        <div class="mr-auto font-medium text-nav-sm sm:text-nav-md">
            <slot name="title"/>
        </div>
        <div class="ml-auto">
            <img alt="" class="h-4 sm:h-6" src="/images/icon-sun-dark.svg">
        </div>
        <div>
            <Toggle/>
        </div>
        <div>
            <img alt="" class="h-4 sm:h-6" src="/images/icon-moon-dark.svg">
        </div>
    </nav>
</template>


