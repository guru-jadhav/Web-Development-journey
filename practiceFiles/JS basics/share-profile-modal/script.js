const hiddenModal = document.getElementsByClassName("hiddenModal")[0];

function openModal(){
    if(hiddenModal.classList.contains("hidden")){
        hiddenModal.classList.remove("hidden");
        hiddenModal.classList.add("visible");
    }else{
        closeModal();
    }
}

function closeModal(event){
    hiddenModal.classList.remove("visible");
    hiddenModal.classList.add("hidden");
}

document.getElementById("wrapper").addEventListener("click", (event) =>{
    const shareProfile = document.getElementById("shareProfile")
    if(event.target !== shareProfile && event.target !==hiddenModal){
        closeModal();
    }
})



//  shareProfile = document.getElementById("shareProfile");
// const closeModal = document.getElementById("close");
// const hiddenModal = document.getElementsByClassName("hiddenModal")[0];

// function modalVisiblity() {
//     console.log("modal")
    
//     console.log(hiddenModal);
//     if (hiddenModal.classList.contains("hidden")) {
//         hiddenModal.classList.remove("hidden");
//         hiddenModal.classList.add("visible");
//     } else {
//         hiddenModal.classList.remove("visible");
//         hiddenModal.classList.add("hidden");
//     }
// }

// shareProfile.addEventListener("click", modalVisiblity);
// closeModal.addEventListener("click", modalVisiblity);


// document.getElementById("wrapper").addEventListener("click", (event) => {
//     if(!hiddenModal.contains(event.target) && !shareProfile.contains(event.target)){
//         if(hiddenModal.classList.contains("visible")){
//             hiddenModal.classList.add("hidden");
//             hiddenModal.classList.remove("visible");
//         }
//     }
// })


// document.getElementById("wrapper").addEventListener("click", (event) => {
//     console.log("wrapper");
//     const hiddenModal = document.getElementsByClassName("hiddenModal")[0];
//     if (event.target.id !== 'shareProfile' && hiddenModal.classList.contains("visible")) {
//         console.log("wrapper if");
//         hiddenModal.classList.add("hidden");
//         hiddenModal.classList.remove("visible");
//     }
// });