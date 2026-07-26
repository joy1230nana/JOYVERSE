const book = document.getElementById("book");
const title = document.querySelector(".title");

setTimeout(()=>{

    book.classList.add("open");

},1200);

setTimeout(()=>{

    title.classList.add("show");

},2200);

setTimeout(()=>{

    window.location.href="answer.html";

},4200);