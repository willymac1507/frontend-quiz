<script setup>
import Navbar from "../Shared/Navbar.vue";
import NavButton from "../Shared/NavButton.vue";
</script>
<template>
    <Navbar />
    <div class="main-container">
        <h2 class="text-title font-light mb-2">Welcome to the</h2>
        <h1 class="text-title font-medium ">Frontend Quiz!</h1>
        <p class="text-subtitle italic font-light text-brand-dark mt-4">Pick a subject to get started.</p>
        <div class="answer-container">
            <NavButton subject="html" />
            <NavButton subject="css" />
            <NavButton subject="js" />
            <NavButton subject="accessibility" />
        </div>

    </div>
</template>
