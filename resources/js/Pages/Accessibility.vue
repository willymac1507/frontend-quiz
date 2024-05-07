<script setup>
import Navbar from "../Shared/Navbar.vue";
import QuestionButton from "../Shared/NavButton.vue";
</script>
<template>
    <Navbar />
    <div class="flex flex-col main-container mt-10 text-brand-darkest">
        <h2 class="text-title font-light mb-2">Welcome to the</h2>
        <h1 class="text-title font-medium ">Accessibility Page!</h1>
        <p class="text-subtitle italic font-light text-brand-dark mt-4">Pick a subject to get started.</p>
        <div class="mt-10 flex flex-col gap-[12px]">
            <QuestionButton class="bg-background-orange" subject="html" text="HTML"/>
            <QuestionButton class="bg-background-green" subject="css" text="CSS"/>
            <QuestionButton class="bg-background-blue" subject="js" text="Javascript"/>
            <QuestionButton class="bg-background-purple" subject="accessibility" text="Accessibility"/>
        </div>

    </div>
</template>
