import type { chatType } from "../types/type";
const answerBot = (question : string) : chatType => {
    return {
        id: Date.now(),
        content: `You asked: ${question}. !!! sorry I haven't the brain to answer !!!.`,
        isBot: true
    }
}

export default answerBot;