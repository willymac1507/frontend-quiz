<script setup>
import Navbar from "../Shared/Navbar.vue";
import IconSet from "../Shared/IconSet.vue";
import {onMounted, provide} from "vue";
import Question from "./Question.vue";

const props = defineProps([
    'subject',
    'questions',
    'number'
]);

const totalQuestions = props.questions.length;
let questionNumber = props.number ++;
provide('number', questionNumber);
provide('subject', props.subject);
provide('totalQuestions', totalQuestions);

function progress() {
    let width = (questionNumber / totalQuestions) * 100;
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
        <Question :question="props.questions[props.number - 1]" />
    </div>
</template>
