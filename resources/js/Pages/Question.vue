<script setup>
import {computed, inject, ref} from "vue";
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption} from "@headlessui/vue";

const props = defineProps([
    'question'
])

const emit = defineEmits(['next-question']);

let subject = inject('subject');

const options = computed(() => {
    return props.question['options'];
})

const answers = computed(() => {
    return [
        {name: 'A', answer: options.value[0]},
        {name: 'B', answer: options.value[1]},
        {name: 'C', answer: options.value[2]},
        {name: 'D', answer: options.value[3]},
    ];
});

let selected = ref(null);
let correct = ref('A');

let questionNumber = ref(inject('number'));
const totalQuestions = inject('totalQuestions');

function checkAnswer(answer) {
    if (answer['answer'] === props.question['answer']) {
        correct.value = answer['title'];
        // emit('next-question', true);
    } else {
        // emit('next-question', false);
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
        <RadioGroup v-model="selected">
            <RadioGroupLabel class="sr-only">Answers</RadioGroupLabel>
            <div class="space-y-3 sm:space-y-6">
                <RadioGroupOption
                    v-for="answer in answers" :key="answer.name" v-slot="{ active, checked }" :value="answer" as="template">
                    <div
                        :class="[correct ? 'border-green-500' : checked ? 'border-accent-purple ring-2 ring-accent-purple' : 'border-transparent', 'border relative block cursor-pointer rounded-lg sm:rounded-3xl bg-white px-2 py-2 shadow-sm focus:outline-none sm:flex sm:justify-between']">
                  <span class="flex items-center">
                    <span class="flex text-sm items-center gap-4 sm:gap-8">
                      <RadioGroupLabel
                          :class="[checked ? 'text-white bg-accent-purple' : 'text-brand-darkest bg-brand-lighter', 'text-answer-sm sm:text-answer-md flex items-center justify-center w-10 sm:w-14 h-10 sm:h-14 rounded-lg sm:rounded-2xl font-medium']"
                          as="span">{{
                              answer.name
                          }}</RadioGroupLabel>
                      <RadioGroupDescription
                          as="span" class="text-answer-sm sm:text-answer-md font-medium text-brand-darkest">
                        <span class="block sm:inline">{{ answer.answer }}</span>
                      </RadioGroupDescription>
                    </span>
                  </span>
                    </div>
                </RadioGroupOption>
                <div
                    v-show="selected"
                    :class="['bg-accent-purple', 'text-answer-sm sm:text-answer-md text-white h-14 sm:h-[92px] flex items-center justify-center border relative cursor-pointer rounded-lg sm:rounded-3xl px-2 py-2 shadow-sm focus:outline-none']"
                    role="button" @click="checkAnswer(selected)"> Submit Answer
                </div>
            </div>
        </RadioGroup>
    </div>
</template>
