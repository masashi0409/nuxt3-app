import { Ref } from 'vue'

export const useText = () => {
    const text = useState<string>('text', () => 'Hello World.')

    return {
        text: readonly(text),
        changeText: changeText(text)
    }
}
const changeText = (text: Ref<string>) => (value: string) => {
    text.value = value
}

export const useCounterState = () => {
    const count = useState<number>('count', () => 0) 

    return {
        counter: readonly(count),
        up: countUp(count),
        down: countDown(count),
        reset: countReset(count)
    }
}
const countUp = (count: Ref<number>) => () => {
    count.value++
}
const countDown = (count: Ref<number>) => () => {
    if (count.value > 0) {
        count.value--
    }
}
const countReset = (count: Ref<number>) => () => {
    count.value = 0
}