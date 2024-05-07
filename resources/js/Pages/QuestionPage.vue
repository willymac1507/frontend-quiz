<script setup>
import Navbar from "../Shared/Navbar.vue";
import IconSet from "../Shared/IconSet.vue";
import AnswerButtons from "../Shared/AnswerButtons.vue";
import {onMounted} from "vue";

const props = defineProps(['subject']);

const totalQuestions = 10;
const questionNumber = 1;

function progress() {
    let width = (questionNumber / totalQuestions) * 100;
    console.log(width);
    let bar = document.getElementById('innerBar');
    bar.style.width = width + '%';
}

onMounted(() => {
    progress();
});
</script>
<template>
    <Navbar>
        <template #icon>
            <IconSet :subject=props.subject />
        </template>
    </Navbar>
    <div class="main-container">
        <div class="lg basis-2/5">
            <p class="text-subtitle-sm sm:text-subtitle-md italic font-light text-brand-dark mt-4">Question
                {{ questionNumber }} of {{ totalQuestions }}</p>
            <p class="text-question-sm sm:text-question-md font-medium mt-3 sm:mt-7 mb-6 sm:mb-10">Which of these color
                contrast ratios defines the minimum WCAG 2.1
                Level AA requirement for normal text?</p>
            <div class="progress-bar bg-white rounded-lg h-4 px-1 w-full flex justify-start items-center">
                <div id="innerBar" class="bg-accent-purple h-2 rounded"></div>
            </div>
        </div>
        <div class="answer-container lg:basis-2/5">
            <AnswerButtons/>
        </div>
    </div>
</template>
