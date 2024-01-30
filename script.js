const questions=[
    {
    question:'What is my name?',
    answers:[
        {text:'Ayyan',correct:false},
        {text:'Akif',correct:true},
        {text:'Aryan',correct:false},
        {text:'Ali',correct:false}
    ]
    },

    {
        question:'What is my age?',
        answers:[
            {text:16,correct:false},
            {text:17,correct:false},
            {text:18,correct:false},
            {text:19,correct:true}
        ]
    },

    {
        question:'Which is my favourite Programming Language?',
        answers:[
            {text:'Python',correct:false},
            {text:'JS',correct:true},
            {text:'C++',correct:false},
            {text:'C',correct:false}
            
        ]
        
    },
    {
        question:'Which is my favourite game name?',
        answers:[
            {text:'GTA V',correct:false},
            {text:'GTA VI',correct:false},
            {text:'RDR 2',correct:true},
            {text:'FREEDOM FIGHTERS',correct:false}
            
        ]
        
    },

]

const question=document.getElementById('question')
const answers=document.getElementById('answers')
const nextButton=document.getElementById('next-btn')
let questionIndex=0

const startQuiz=()=>{
    questionIndex=0
    score=0
    nextButton.innerHTML='Next'
    showQuestions()
}

const showQuestions=()=>{
    resetState()
    currentQuestionIndex=questions[questionIndex]
    questionNo=questionIndex+1
    question.innerHTML=questionNo + '.' + currentQuestionIndex.question

    currentQuestionIndex.answers.forEach(ans=>{
        button=document.createElement('button')
        button.innerHTML=ans.text
        answers.appendChild(button)
        if (ans.correct){
            button.dataset.correct=ans.correct
        }
        button.addEventListener('click',selectedAnswer)
    })
}

const resetState=()=>{
    nextButton.style.display='none'
    while(answers.firstChild){
        answers.removeChild(answers.firstChild)
    }
}

const selectedAnswer=(e)=>{
    const selectedButton=e.target
    const isCorrect=selectedButton.dataset.correct==="true"

    if (isCorrect){
        selectedButton.classList.add('correct')
        score++
    }else{
        selectedButton.classList.add('incorrect')
    }

    Array.from(answers.children).forEach(button=>{
        if (button.dataset.correct==='true'){
            button.classList.add('correct')
        }
        button.disabled=true
        nextButton.style.display='block'
    })

}

const showscore=()=>{
    resetState()
    question.innerHTML=`You scored ${score} out of ${questions.length}` 
    nextButton.innerHTML='PLay Again'
    nextButton.style.display='block'
    
}

const handleNextButton=()=>{
    questionIndex++
    if (questionIndex<questions.length){
        showQuestions()
    }
    else{
        showscore()
    }
}

nextButton.addEventListener('click',()=>{
    if (questionIndex<questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})

startQuiz()