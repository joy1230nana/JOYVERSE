/* ==========================================
JOYVERSE ANSWER LOGIC
========================================== */


const answerBox =
document.querySelector(".answer");


const meaningBox =
document.querySelector(".meaning");


const dateBox =
document.querySelector(".month");


const weekdayBox =
document.querySelector(".weekday");


const againBtn =
document.querySelector(".again-btn");


const shareBtn =
document.querySelector(".share-btn");



// ==========================
// 随机答案
// ==========================

function getRandomAnswer(){

    const index =
    Math.floor(Math.random()*answers.length);

    return answers[index];

}



// ==========================
// 显示答案
// ==========================

function showAnswer(){

    const data =
    getRandomAnswer();


    answerBox.innerHTML =
    data.answer;


    meaningBox.innerHTML =
    data.meaning;


    localStorage.setItem(
        "joyverseAnswer",
        JSON.stringify(data)
    );

}



// ==========================
// 日期
// ==========================

function showDate(){

    const now =
    new Date();


    const year =
    now.getFullYear();


    const month =
    now.getMonth()+1;


    const day =
    now.getDate();


    const week = [

        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"

    ];


    dateBox.innerHTML =
    `${year} 年 ${month} 月 ${day} 日`;


    weekdayBox.innerHTML =
    week[now.getDay()];

}



// ==========================
// 再问一次
// ==========================

againBtn.addEventListener(
"click",
()=>{


    document.body.style.opacity="0";


    setTimeout(()=>{


        showAnswer();


        document.body.style.opacity="1";


    },400);


});



// ==========================
// 分享
// ==========================

shareBtn.addEventListener(
"click",
()=>{


    window.location.href =
    "share.html";


});




// 初始化

showDate();

showAnswer();