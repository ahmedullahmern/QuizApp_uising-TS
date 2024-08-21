// Define interfaces for the quiz questions
interface QuizQuestion {
    question: string;
    options: string[];
    answer: string;
}

// Create an array of quiz questions using the interface
const typeScriptQuizQuestions: QuizQuestion[] = [
    {
        question: "Which TypeScript feature allows you to define a type that is a combination of multiple types?",
        options: [
            "a) Union type",
            "b) Intersection type",
            "c) Tuple",
            "d) Enum"
        ],
        answer: "b) Intersection type"
    },
    {
        question: "What keyword is used to define a constant in TypeScript?",
        options: [
            "a) const",
            "b) let",
            "c) var",
            "d) static"
        ],
        answer: "a) const"
    },
    {
        question: "How can you specify the type of a function return value in TypeScript?",
        options: [
            "a) Use the `type` keyword",
            "b) Use a type annotation after the function parameters",
            "c) Use a type annotation after the function name",
            "d) Use the `return` keyword"
        ],
        answer: "b) Use a type annotation after the function parameters"
    },
    {
        question: "What is the purpose of the `never` type in TypeScript?",
        options: [
            "a) To represent a value that will never occur",
            "b) To represent an empty object",
            "c) To denote an uninitialized variable",
            "d) To represent a type that can be any value"
        ],
        answer: "a) To represent a value that will never occur"
    },
    {
        question: "Which of the following is used to define a class in TypeScript?",
        options: [
            "a) class",
            "b) structure",
            "c) type",
            "d) object"
        ],
        answer: "a) class"
    }
];

const question_html = document.querySelector("#question") as HTMLHeadElement;
const Chosse_answer = document.querySelector("#Chosse_answer") as HTMLDivElement
const next_btn = document.querySelector("#next_btn")as HTMLButtonElement

let currentInd :number = 0

renderQiuzhtml()

function renderQiuzhtml(){
    const que = typeScriptQuizQuestions[currentInd];
    question_html.innerText = `${currentInd+1})${que.question}`
    
    const allOptions = que.options.map((data,ind)=>{
        console.log(data);
        
        ` <label class="option-label">
                <input type="radio" name="${currentInd}" value="${data}" class="option-radio">
                ${data}
            </label>`
    })
    
    console.log("alloptoins",allOptions);
}

console.log("typeScriptQuizQuestions",typeScriptQuizQuestions[currentInd]);