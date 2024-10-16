const passwordLength = document.getElementById("passwordLength");
let pLenght = passwordLength.value;

const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("inclideNumbers");
const includeSymbols = document.getElementById("inclideSymbols");

function generateNumber() {
    const random = Math.floor(Math.random() * (10 - 0) + 0);
    return (random);
}

function generateUppercase() {
    const random = Math.floor(Math.random() * (90 - 65) + 65);
    return (String.fromCharCode(random));
}

function generateLowercase() {
    const random = Math.floor(Math.random() * (122 - 97) + 97);
    return (String.fromCharCode(random));
}

function generateSymbol(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return (String.fromCharCode(random));
}

function getchecked() {
    const checkboxs = document.querySelectorAll("input[type='checkbox']");
    let count = 0;
    checkboxs.forEach((checkbox) => {
        if (checkbox.checked) {
            count++;
        }
    });
    return count;
}
getchecked();


function generateActualPassword(plenght) {
    let password = '';
    while (password.length < plenght) {
        const random = Math.floor(Math.random() * (5 - 1) + 1);
        switch (random) {
            case 1:
                if (includeUppercase.checked)
                    password = password + generateUppercase();
                break;
            case 2:
                if (includeLowercase.checked)
                    password = password + generateLowercase();
                break;
            case 3:
                if (includeNumbers.checked)
                    password = password + generateNumber();
                break;
            case 4:
                if (includeSymbols.checked) {
                    const random = Math.floor(Math.random() * (5 - 1) + 1);
                    switch (random) {
                        case 1:
                            password = password + generateSymbol(33, 47);
                            break;
                        case 2:
                            password = password + generateSymbol(58, 64);
                            break;
                        case 3:
                            password = password + generateSymbol(91, 96);
                            break;
                        case 4:
                            password = password + generateSymbol(123, 126);
                            break;
                    }
                }
                break;
        }
    }
    console.log(password);
    console.log("Password Length: " + password.length);
    document.getElementById("password-text").innerText = password;
}


function generatePassword(plenght) {
    if (!includeUppercase.checked && !includeLowercase.checked && !includeNumbers.checked && !includeSymbols.checked) {
        // console.log("no password");
        document.getElementById("password-text").innerText = "Please select at least one option.";
    }
    else if (plenght < getchecked()) {
        generateActualPassword(getchecked());
        document.getElementById("strengthColor").style.backgroundColor = 'yellow';
    }
    else {
        generateActualPassword(plenght);
        document.getElementById("strengthColor").style.backgroundColor = 'green';
    }
}







passwordLength.addEventListener("input", () => {
    pLenght = passwordLength.value;
    document.getElementById("lengthContainer").innerText = pLenght;
})


document.getElementById("generatePassword").addEventListener("click", function () {
    console.clear();
    generatePassword(pLenght);
})


document.getElementById("copyImg").addEventListener("click", () => {
    const textData = document.getElementById("password-text").value;
    navigator.clipboard.writeText(textData)
        .then(() => {
            alert("Copied: " + textData);
        })
        .catch(err => {
            alert("Error: " + err);
        });

    // This function is used to copy the text content fron the clipboard (what ever is copied on to the clip board)
    // navigator.clipboard.readText(textData)
    //     .then((text)=>{
    //         console.log("Read from clipboard: " + text);
    //     })
    //     .catch((err) => {
    //         console.error("Error from js: " + err);
    //     })
})
