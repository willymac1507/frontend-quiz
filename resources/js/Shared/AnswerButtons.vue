<template>
    <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only">Answers</RadioGroupLabel>
        <div class="space-y-3 sm:space-y-6">
            <RadioGroupOption
                v-for="answer in answers" :key="answer.name" v-slot="{ active, checked }" :value="answer" as="template">
                <div
                    :class="[checked ? 'border-accent-purple ring-2 ring-accent-purple' : 'border-transparent', 'border relative block cursor-pointer rounded-lg sm:rounded-3xl bg-white px-2 py-2 shadow-sm focus:outline-none sm:flex sm:justify-between']">
                  <span class="flex items-center">
                    <span class="flex text-sm items-center gap-4">
                      <RadioGroupLabel :class="[checked ? 'text-white bg-accent-purple' : 'text-brand-darkest bg-brand-lighter', 'text-answer-sm sm:text-answer-md flex items-center justify-center w-10 sm:w-14 h-10 sm:h-14 rounded-lg sm:rounded-2xl font-medium']" as="span">{{
                              answer.name
                          }}</RadioGroupLabel>
                      <RadioGroupDescription as="span" class="text-answer-sm sm:text-answer-md font-medium text-brand-darkest">
                        <span class="block sm:inline">{{ answer.answer }}</span>
                      </RadioGroupDescription>
                    </span>
                  </span>
                </div>
            </RadioGroupOption>
            <div v-show="selected" :class="['text-answer-sm sm:text-answer-md text-white h-14 sm:h-[92px] flex items-center justify-center bg-accent-purple border relative block cursor-pointer rounded-lg sm:rounded-3xl px-2 py-2 shadow-sm focus:outline-none']" role="button" @click="checkAnswer()"> Submit Answer</div>
        </div>
    </RadioGroup>
</template>
<script setup>
import {ref} from 'vue'
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption} from '@headlessui/vue'

const answers = [
    {name: 'A', answer: '4.5 : 1'},
    {name: 'B', answer: '3 : 1'},
    {name: 'C', answer: '2.5 : 1'},
    {name: 'D', answer: '5 : 1'},
]

const selected = ref(null)

function checkAnswer() {

}
</script>
