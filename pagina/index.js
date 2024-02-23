let elements_nav = document.querySelectorAll(".item-nav");

elements_nav.forEach((element) =>{
    element.addEventListener("click", () =>{
        let value = element.innerHTML.toString().toLowerCase();
        if(value != "inicio"){
            window.location.href = "../src/" + value + ".html";
        }else{
            window.location.href = "../index.html";
        }
    });
});