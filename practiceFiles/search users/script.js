const peopleList = document.querySelector(".people-list");
const search = document.querySelector("#search");

const data = [
    { name: "sunny", src: "https://media.istockphoto.com/id/908231976/photo/bearded-young-man-with-hat.webp?a=1&b=1&s=612x612&w=0&k=20&c=3jslsSNPpMr9kp9QZ9YmgXgFOD3a6WiiiMTqrjRuE20=" },
    { name: "harry", src: "https://media.istockphoto.com/id/2148419703/photo/portrait-of-a-young-indian-man-in-glasses-and-a-white-shirt-standing-near-an-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ov-4immlwIJdFndC0NYpPwhIHL85itRXnbWdwnIKe8k=" },
    { name: "henry", src: "https://media.istockphoto.com/id/1150096021/photo/smiling-mature-manager-sitting-at-creative-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=EeyO5sFhpLAVxaUqbzZdQDRCLU4negYbSGYO6UJwc1Q=" },
    { name: "hardy", src: "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA=" },
    { name: "hardip", src: "https://media.istockphoto.com/id/1500856235/photo/portrait-of-happy-young-punjabi-sikh-man-farmer-standing-cross-arms-wearing-red-turban-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=GhDXBjSEOL-5q3WTU8BJvIXjGfDZ0UnXg6jcXSROWmY=" }
]

let user = ""
data.forEach(function (element) {
    user +=`<div class="person">
                    <img id="userProfile" src="${element.src}" alt="">
                    <h3 id="userImg">${element.name}</h3>
                </div>`;
});
peopleList.innerHTML += user;

function filterSearch() {
    let matching = data.filter((element) => {
        return element.name.startsWith(search.value.toLowerCase()) || element.name.startsWith(search.value.toUpperCase());
    })
    let newUser = "";
    matching.forEach((element) => {
                newUser +=`<div class="person">
                            <img id="userProfile" src="${element.src}" alt="">
                            <h3 id="userImg">${element.name}</h3>
                            </div>`;
    })
    peopleList.innerHTML = newUser;
}


search.addEventListener("input", () => {
    filterSearch();
})