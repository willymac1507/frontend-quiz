<script setup>
import AnswerButtons from "../Shared/AnswerButtons.vue";
import {inject} from "vue";

const props = defineProps([
    'question'
])

let questionNumber = inject('number');
const totalQuestions = inject('totalQuestions');

</script>

<template>
    <div class="lg basis-2/5">
        <p class="text-subtitle-sm sm:text-subtitle-md italic font-light text-brand-dark mt-4">Question
            {{ questionNumber }} of {{ totalQuestions }}</p>
        <p class="text-question-sm sm:text-question-md font-medium mt-3 sm:mt-7 mb-6 sm:mb-10">{{ question.question }}</p>
        <div class="progress-bar bg-white rounded-lg h-4 px-1 w-full flex justify-start items-center">
            <div id="innerBar" class="bg-accent-purple h-2 rounded"></div>
        </div>
    </div>
    <div class="answer-container lg:basis-2/5">
        <AnswerButtons :options="question.options" />
    </div>
</template>
