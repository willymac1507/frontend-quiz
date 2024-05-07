<template>
    <Switch :class="[
        'bg-accent-purple relative inline-flex h-5 sm:h-7 w-8 sm:w-12 flex-shrink-0 cursor-pointer rounded-full border-4 border-transparent transition-colors duration-200 ease-in-out focus:outline-none']" @click ="toggle()">
        <span class="sr-only">Use setting</span>
        <span :class="[enabled ? 'translate-x-3 sm:translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-3 sm:h-5 w-3 sm:w-5 transform rounded-full bg-brand-lightest shadow ring-0 transition duration-200 ease-in-out']" aria-hidden="true" />
    </Switch>
</template>

<script setup>
import {ref} from 'vue'
import {Switch} from '@headlessui/vue'

let enabled = ref(false)

function toggle() {
    enabled = !enabled
}
</script>
