<script setup>
import {computed, ref} from "vue";

const props = defineProps([
    'question',
    'questionNumber',
    'totalQuestions'
]);

const emit = defineEmits(['next-question']);

const questionOptions = computed(() => {
    return props.question['options'];
})

const options = computed(() => {
    return [
        {letter: 'A', option: questionOptions.value[0]},
        {letter: 'B', option: questionOptions.value[1]},
        {letter: 'C', option: questionOptions.value[2]},
        {letter: 'D', option: questionOptions.value[3]}
    ];
});

let selected = ref(null);
let correct = ref();
let disable = ref(false);
let itemRefs = ref([]);
let errorMessage = ref();

function nextQuestion() {
    if (selected.value === correct.value) {
        emit('next-question', true)
    } else {
        emit('next-question', false)
    }
    correct.value = '';
    disable.value = false;
}

function checkAnswer() {
    errorMessage.value = '';
    if (selected.value) {
        disable.value = true;
        correct.value = props.question.answer;
    } else {
        errorMessage.value = 'Please select an answer!'
    }
}
</script>
<template>
    <p class="text-subtitle-sm sm:text-subtitle-md italic font-light text-brand-dark mt-4">Question
        {{ questionNumber }} of {{ totalQuestions }}</p>
    <p class="text-question-sm sm:text-question-md font-medium mt-3 sm:mt-7 mb-6 sm:mb-10">{{ question.question }}</p>
    <div class="progress-bar bg-white rounded-lg h-4 px-1 w-full flex justify-start items-center">
        <div id="innerBar" class="bg-accent-purple h-2 rounded"></div>
    </div>
    <div class="answer-container lg:basis-2/5">
        <ul>
            <li
                v-for="entry in options"
                :key="entry.option" ref="itemRefs" :class="[
                {'selected': entry.option === selected},
                {'unselected': entry.option !== selected},
                {'selected-correct': entry.option === selected && entry.option === correct},
                {'selected-incorrect': correct && entry.option === selected && entry.option !== correct}
            ]">
                <label
                    :for="entry.letter"
                    class="border-2 p-4 w-full rounded-lg bg-white h-16 flex justify-between items-center mb-4"
                    role="button">
                <span
                    class="question-icon w-12 h-12 flex items-center justify-center rounded-lg mr-4"
                >{{ entry.letter }}</span>
                    <span class="mr-auto">{{ entry.option }}</span>
                    <input
                        :id="entry.letter"
                        v-model="selected" :disabled="disable" :value="entry.option" class="hidden" name="choices"
                        type="radio">
                    <img :class="entry.option === correct ? '' : 'hidden'" alt="correct" src="/images/icon-correct.svg">
                    <img
                        :class="correct && entry.option === selected && entry.option !== correct ? '' : 'hidden'"
                        alt="wrong"
                        src="/images/icon-error.svg">
                </label>
            </li>
        </ul>
        <button
            :class="{'hidden': disable }" class="w-full rounded-lg bg-accent-purple h-16 p-4 text-center text-white"
            @click="checkAnswer()">
            Submit Answer
        </button>
        <button
            :class="{'hidden': !disable }" class="w-full rounded-lg bg-accent-purple h-16 p-4 text-center text-white"
            @click="nextQuestion()">
            Next Question
        </button>
        <p :class="{'hidden': selected}" class="text-red-500">{{ errorMessage }}</p>
    </div>
</template>
<style scoped>
</style>
