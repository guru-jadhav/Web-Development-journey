document.getElementById("menu-button").addEventListener("click", function(){
    const img_src = document.getElementById("menu-button").querySelector("img");

    img_src.style.opacity = 0;

    setTimeout(() => {
        if(img_src.src.includes("menu-logo.svg")){
            img_src.src = "close-logo.svg";
        }
        else{
            img_src.src = "menu-logo.svg";
        }
    img_src.style.opacity = 1;

    }, 300);
});