<script setup>
import Navbar from "../Shared/Navbar.vue";
import NavButton from "../Shared/NavButton.vue";
</script>
<template>
    <Navbar />
    <div class="main-container">
        <div class="lg basis-2/5 dark:text-white">
            <h2 class="text-title-sm sm:text-title-md font-light mb-2">Welcome to the</h2>
            <h1 class="text-title-sm sm:text-title-md font-medium lg:mb-10">Frontend Quiz!</h1>
            <p class="text-subtitle italic font-light text-brand-dark mt-4 dark:text-brand-light">Pick a subject to get started.</p>
        </div>

        <div class="answer-container lg:basis-2/5">
            <NavButton subject="html" />
            <NavButton subject="css" />
            <NavButton subject="js" />
            <NavButton subject="accessibility" />
        </div>

    </div>
</template>
