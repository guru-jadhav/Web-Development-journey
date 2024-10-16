function sample(){
    let URL = "https://randomuser.me/api/";
    fetch(URL)
        .then(Response =>{
            if(Response.ok)
            {
                Response.json()
                .then(data => {
                    const user = data.results[0];
                    document.getElementById("profile-image").querySelector("img").src = user.picture.large;
                    document.getElementById("name").querySelector("h1").textContent += user.name.title + " " + user.name.first + " " + user.name.last;
                    document.getElementById("email").querySelector("a").innerText = user.email;
                    document.getElementById("phone").querySelector("a").innerText = user.phone;
                    document.getElementById("cell").querySelector("a").innerText = user.cell;
                })

            }
            else
            {
                return -1;
            }
        })
    console.log("Function Ended");
};

sample();


document.getElementById("menu-logo").addEventListener("click", function(){
    const img_src = document.getElementById("menu-logo").querySelector("img");
    if(img_src.src.includes("menu-logo.svg")){
        img_src.src = "close-logo.svg";
        img_src.style.transition = "opacity 0.5s ease-in-out";
    }
    else
    {
        img_src.src = "menu-logo.svg";
        img_src.style.transition = "opacity 0.5s ease-in-out";
    }
});

// document.getElementById("close-logo").addEventListener("click", function(){
//     document.getElementById("close-logo").querySelector("img").src = "menu-logo.svg";
//     document.getElementById("close-logo").querySelector("img").id = "menu-logo.svg";
// });


// document.getElementById("menu").addEventListener("click", function() {
//     const img = document.getElementById("menu").querySelector("img");
//     if (img.src.includes("menu-logo.svg")) {
//         img.src = "original-logo.svg"; // Replace with the original image source
//     } else {
//         img.src = "menu-logo.svg";
//     }
// });

