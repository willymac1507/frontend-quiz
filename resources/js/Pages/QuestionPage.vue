<script setup>
import Navbar from "../Shared/Navbar.vue";
import IconSet from "../Shared/IconSet.vue";
import {computed, onMounted, onUpdated, provide, ref} from "vue";
import {router} from "@inertiajs/vue3";
import {store} from "../store.js";
import Question from "./Question.vue";

const props = defineProps([
    'subject',
    'questions'
]);

const totalQuestions = props.questions.length;
let questionNumber = ref(1);
let width = computed(() => {
    return ((questionNumber.value / totalQuestions) * 100);
});
provide('number', questionNumber);
provide('subject', props.subject);
provide('totalQuestions', totalQuestions);

function progress() {
    let bar = document.getElementById('innerBar');
    bar.style.width = width.value + '%';
}

function nextQuestion(score) {
    if (score) {
        store.addScore();
    }
    if (questionNumber.value < totalQuestions) {
        questionNumber.value = questionNumber.value + 1;
    } else {
        router.post('/results', {score: store.totalScore, subject: props.subject, questions: totalQuestions}, {forceFormData: true});
    }

}

onMounted(() => {
    progress();
    store.resetScore();
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
        <Question :question="props.questions[questionNumber -1]" :questionNumber="questionNumber" :totalQuestions="totalQuestions" @next-question="nextQuestion"></Question>
    </div>
</template>
