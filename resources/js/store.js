import {reactive} from "vue";

export const store = reactive({
    totalScore: 0,
    addScore() {
        this.totalScore ++;
    }
});
