<script setup>
import Navbar from "../Shared/Navbar.vue";
import IconSet from "../Shared/IconSet.vue";
import {computed, onMounted, onUpdated, provide, ref} from "vue";
import Question from "./Question.vue";
import {router} from "@inertiajs/vue3";

const props = defineProps([
    'subject',
    'questions'
]);

let totalScore = ref(0);

const totalQuestions = props.questions.length;
let questionNumber = ref(1);
let width = computed(() => {
    return ((questionNumber.value / totalQuestions) * 100);
});
provide('number', questionNumber);
provide('subject', props.subject);
provide('totalQuestions', totalQuestions);

function progress() {
    console.log(width.value);
    let bar = document.getElementById('innerBar');
    bar.style.width = width.value + '%';
}

function nextQuestion(score) {
    if (score) {
        totalScore.value ++;
    }
    if (questionNumber.value < totalQuestions) {
        questionNumber.value = questionNumber.value + 1;
    } else {
        router.post('/results', {score: totalScore.value}, {forceFormData: true});
    }

}

onMounted(() => {
    progress();
});

onUpdated(() => {
    progress();
})

</script>

<template>
    <Navbar>
        <template #icon>
            <IconSet :subject=props.subject />
        </template>
    </Navbar>
    <div class="main-container">
        <Question :question="props.questions[questionNumber - 1]" @next-question="nextQuestion" />
    </div>
</template>
