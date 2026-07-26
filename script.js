const book = document.getElementById("book");

book.addEventListener("click",()=>{

    book.classList.add("opening");

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href="opening.html";

    },900);

});