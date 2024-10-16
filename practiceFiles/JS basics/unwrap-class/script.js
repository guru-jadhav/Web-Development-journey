let count = 0;
const countDisplay = document.getElementById("count");
countDisplay.innerText = count;

function incrementDecrement(event){
    console.log(event);
    if(event.currentTarget.id === 'increment'){
        count = count + 1;
    }
    else{
        count = count - 1;
    }
    countDisplay.innerText = count;
}

document.getElementById("decrement").addEventListener("click", incrementDecrement);
document.getElementById("increment").addEventListener("click", incrementDecrement);