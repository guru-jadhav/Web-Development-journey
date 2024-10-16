const progress = document.querySelector('#progress');

let download = 0;

let timeToDownload = setInterval(() => {
    if(download > 100){
        download = 0;
    }
    let currentWidth = "" + download;
    console.log(currentWidth);
    download = download + 5;
    progress.style.width = currentWidth+"%";
}, 1000);