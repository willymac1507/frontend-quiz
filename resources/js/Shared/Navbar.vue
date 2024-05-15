<script setup>
import Toggle from "./Toggle.vue";
</script>

<template>
    <nav class="max-w-full h-[40px] flex justify-between items-center gap-2">
        <div>
            <slot name="icon"/>
        </div>
<!--        <div class="mr-auto font-medium text-nav-sm sm:text-nav-md dark:text-white">-->
<!--            <slot name="title"/>-->
<!--        </div>-->
        <div class="ml-auto">
            <img alt="light sun" class="dark:hidden h-4 sm:h-6" src="/images/icon-sun-dark.svg">
            <img alt="dark sun" class="hidden dark:block h-4 sm:h-6" src="/images/icon-sun-light.svg">
        </div>
        <div>
            <Toggle/>
        </div>
        <div>
            <img alt="light moon" class="dark:hidden h-4 sm:h-6" src="/images/icon-moon-dark.svg">
            <img alt="dark moon" class="hidden dark:block h-4 sm:h-6" src="/images/icon-moon-light.svg">
        </div>
    </nav>
</template>


