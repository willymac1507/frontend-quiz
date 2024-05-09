<script setup>
import AnswerButtons from "../Shared/AnswerButtons.vue";
import {inject, ref} from "vue";

const props = defineProps([
    'question'
])

const emit = defineEmits(['next-question']);
const answerSelected = ref(null);

let questionNumber = ref(inject('number'));
const totalQuestions = inject('totalQuestions');

function checkAnswer(answer) {
    if (answer === props.question['answer']) {
        emit('next-question', true);
    } else {
        emit('next-question', true);
    }
}

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
        <AnswerButtons
            :options="question.options"
            @v-model="answerSelected"
            @check-answer="checkAnswer"
        />
    </div>
</template>
