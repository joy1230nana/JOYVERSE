const backBtn = document.querySelector(".back-btn");

const preview = document.querySelector("#poster");

const bgItems = document.querySelectorAll(".bg-item");

const langItems = document.querySelectorAll(".lang-item");

const answer = document.querySelector(".share-answer");

const meaning = document.querySelector(".share-meaning");

const date = document.querySelector(".share-date");


// =========================
// 返回答案
// =========================

backBtn.addEventListener("click",()=>{

    document.body.style.transition=".4s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="answer.html";

    },400);

});



// =========================
// 默认羊皮纸
// =========================

preview.style.background="#F7F1E3";

preview.style.color="#3B3129";



// =========================
// 羊皮纸按钮
// =========================

bgItems.forEach(item=>{


    item.addEventListener("click",()=>{


        bgItems.forEach(btn=>{

            btn.classList.remove("active");

        });


        item.classList.add("active");


        preview.style.backgroundImage="none";


        preview.style.background="#F7F1E3";


        preview.style.color="#3B3129";


        preview.classList.remove("photo-mode");


    });


});


// =========================
// 上传自己的图片
// =========================

const upload =
document.querySelector("#bg-upload");

const uploadBtn =
document.querySelector(".upload-btn");


// 点击按钮打开相册

uploadBtn.addEventListener("click",()=>{

    upload.click();

});



// 选择图片

upload.addEventListener("change",(e)=>{


const file=e.target.files[0];


if(!file)return;



const reader=new FileReader();



reader.onload=function(){


preview.style.backgroundImage=
`url(${reader.result})`;


preview.style.backgroundSize=
"cover";


preview.style.backgroundPosition=
"center";



preview.classList.add("photo-mode");



};


reader.readAsDataURL(file);



});








// =========================
// 语言切换
// =========================

langItems.forEach(item=>{


item.addEventListener("click",()=>{


langItems.forEach(btn=>{

btn.classList.remove("active");

});


item.classList.add("active");



const lang=item.innerText;



if(lang==="中文"){


answer.innerHTML=
"每一朵花，<br>都有属于自己的季节。";


meaning.innerHTML=
"等待，<br>也是成长的一部分。";


date.innerHTML=
"2026 年 7 月 27 日";


}



if(lang==="English"){


answer.innerHTML=
"Every flower blooms<br>in its own season.";


meaning.innerHTML=
"Waiting is also<br>part of growth.";


date.innerHTML=
"July 27, 2026";


}



if(lang==="日本語"){


answer.innerHTML=
"花には、<br>それぞれの季節がある。";


meaning.innerHTML=
"待つことも、<br>成長の一部。";


date.innerHTML=
"2026年7月27日";


}



if(lang==="한국어"){


answer.innerHTML=
"모든 꽃은<br>자신의 계절에 핀다.";


meaning.innerHTML=
"기다림 또한<br>성장의 일부입니다.";


date.innerHTML=
"2026년 7월 27일";


}


});


});

// =========================
// 文字主题颜色
// =========================


const colorItems =
document.querySelectorAll(".color-item");



const colorThemes = {


gold:{

date:"#B18A52",

answer:"#3B2718",

meaning:"#80664C",

logo:"#B18A52"

},


moon:{

date:"#D8D8D8",

answer:"#FFFFFF",

meaning:"#C8C8C8",

logo:"#EEEEEE"

},


sky:{

date:"#9BBFFF",

answer:"#DCEBFF",

meaning:"#B8CBE8",

logo:"#82B1FF"

},


forest:{

date:"#A8CFA8",

answer:"#DDF3DD",

meaning:"#B7D5B7",

logo:"#8FCB8F"

},


sakura:{

date:"#F3B6C8",

answer:"#FFE4EC",

meaning:"#E8B7C7",

logo:"#FF9FBA"

},


violet:{

date:"#C8B6FF",

answer:"#EEE5FF",

meaning:"#C9B8DD",

logo:"#B99CFF"

},


ocean:{

date:"#8ED6E8",

answer:"#DDF8FF",

meaning:"#A9DCE8",

logo:"#6CC7DD"

},


obsidian:{

date:"#BBBBBB",

answer:"#FFFFFF",

meaning:"#D0D0D0",

logo:"#AAAAAA"

}


};




colorItems.forEach(item=>{


item.addEventListener("click",()=>{


//按钮状态

colorItems.forEach(btn=>{

btn.classList.remove("active");

});


item.classList.add("active");



// 获取颜色主题

const theme = 
colorThemes[item.dataset.color];



// 修改文字颜色


date.style.color =
theme.date;


answer.style.color =
theme.answer;


meaning.style.color =
theme.meaning;



document.querySelector(".share-logo")
.style.color =
theme.logo;



});


});



// =========================
// 保存图片
// =========================

const saveBtn =
document.querySelector(".save-btn");


saveBtn.addEventListener("click",()=>{


html2canvas(document.getElementById("poster"),{

    scale:3,

    useCORS:true,

    backgroundColor:null

}).then(canvas=>{


canvas.toBlob(async(blob)=>{


    const file = new File(

        [blob],

        "JOYVERSE.png",

        {
            type:"image/png"
        }

    );


    // 手机直接调用系统保存

    if(
        navigator.canShare &&
        navigator.canShare({
            files:[file]
        })
    ){


        await navigator.share({

            files:[file],

            title:"JOYVERSE"

        });


    }


    // 电脑备用下载

    else{


        const link=document.createElement("a");


        link.download="JOYVERSE.png";


        link.href=
        URL.createObjectURL(blob);


        link.click();


    }


});


});


});