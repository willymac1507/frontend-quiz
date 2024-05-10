<script setup>
import Navbar from "../Shared/Navbar.vue";
import IconSet from "../Shared/IconSet.vue";
import {router} from "@inertiajs/vue3";

const props = defineProps([
        'score',
        'subject',
        'questions'
    ]);

function playAgain() {
    router.get('/')
}
</script>

<template>
    <Navbar>
        <template #icon>
            <IconSet :subject=props.subject />
        </template>
    </Navbar>
    <div class="main-container">
        <div class="lg:basis-2/5">
            <h2 class="text-title-sm sm:text-title-md font-light mb-2">Quiz completed</h2>
            <h1 class="text-title-sm sm:text-title-md font-medium lg:mb-10">You scored ...</h1>
        </div>
        <div class="lg:basis-2/5 answer-container">
            <div class="lg:mt-0 w-full rounded-xl sm:rounded-3xl bg-white mt-10 sm:mt-14 mb-3 sm:mb-6 p-8 flex flex-col items-center mx-auto">
                <IconSet :subject="props.subject" class="mx-auto justify-center"/>
                <p class="text-score-sm sm:text-score-md mt-4 mb-4 font-medium">{{props.score}}</p>
                <p class="text-result-sm sm:text-result-md text-brand-dark">out of {{ props.questions }}</p>
            </div>
            <div
                :class="['text-answer-sm sm:text-answer-md text-white h-14 sm:h-[92px] flex items-center justify-center bg-accent-purple border relative cursor-pointer rounded-lg sm:rounded-3xl px-2 py-2 shadow-sm focus:outline-none']"
                role="button" @click="playAgain()"> Play Again
            </div>
        </div>

    </div>
</template>
