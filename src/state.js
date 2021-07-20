import React from "react";
import { rerenderApp } from "./index";

export let state = {
    messages: [
        { author: "100", text: "Привет", ai: false },
        { author: "101", text: "Хай , мэн", ai: false },
        { author: "ROBOT", text: "Смерть кожаными мешкам", ai: true },
        { author: "102", text: "Аллоха!", ai: false },
    ],
    friends: [
        { id: 1, author: "Robot" , ava: '' },
        { id: 100, author: "mixa" , ava: '1.png'},
        { id: 101, author: "toxa" , ava: '1.png'},
        { id: 102, author: "lexa" , ava: '1.png'},
    ],

    setMessage(message, login) {
        debugger
        if (message != '' && message != 'Some text '){
        this.messages.push({ author: login, text: message, ai: false });
        this.messages.push({ author: 'ROBOT', text: `Человек ${login} детектед!`, ai: true })
        // setTimeout(() => {
        //         this.messages.push({author: 'ROBOT', text: `Человек ${login} детектед!`, ai: true})
        //     }, 2000);
        } else {
            this.messages.push({ author: 'ROBOT', text: `Человек не отправляй пустоту!`, ai: true })
        }
        rerenderApp(state);
        
    }
}