import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() *
    surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomprompt(Prompt);
    return randomPrompt;
}


export async function downloadImage(_id, photo) {
    File.saver.saveAs(photo, `download-${_id}.jpg`);
}