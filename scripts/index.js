// let posts;
// let currentIndex = 0;

// const btnPrev = document.querySelector("#btnPrev");
// const btnNext = document.querySelector("#btnNext");

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => {
//     posts = data.map((value) => `<li>Title: ${value.title}</li>`);
//     show();
// })
// .catch(error => {
//     const body = document.body;
//     const banner = `
//     <div class="error-banner">ERROR</divs>
//     `;
//     body.insertAdjacentHTML("afterend", banner);
// });

// function show() {
//     const list = document.querySelector("ul");
//     const elements = [];

//     list.innerHTML = "";
    
//     for (let i = currentIndex; i < currentIndex + 10 && i < posts.length; i++) {
//         elements.push(posts[i]);
//     }

//     list.insertAdjacentHTML("beforeend", elements.join(""));
// }

// btnPrev.addEventListener("click", () => {
//     if (currentIndex - 10 > 0) {
//         currentIndex -= 10;
//     }
//     else {
//         currentIndex = 0;
//     }
//     show();
// });

// btnNext.addEventListener("click", () => {
//     if (currentIndex + 10 < posts.length) {
//         currentIndex += 10;
//     }
    
//     show();
// });

/// TASK 2 ASYNC AWAIT

let posts;
let currentIndex = 0;

const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

const getPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        posts = data.map((value) => `<li>Title: ${value.title}</li>`);

        show();
    }
    catch (error) {
        const body = document.body;
        const banner = `
        <div class="error-banner">ERROR</divs>
        `;
        body.insertAdjacentHTML("afterend", banner);
    }
}

getPosts();

function show() {
    const list = document.querySelector("ul");
    const elements = [];

    list.innerHTML = "";
    
    for (let i = currentIndex; i < currentIndex + 10 && i < posts.length; i++) {
        elements.push(posts[i]);
    }

    list.insertAdjacentHTML("beforeend", elements.join(""));
}

btnPrev.addEventListener("click", () => {
    if (currentIndex - 10 > 0) {
        currentIndex -= 10;
    }
    else {
        currentIndex = 0;
    }
    show();
});

btnNext.addEventListener("click", () => {
    if (currentIndex + 10 < posts.length) {
        currentIndex += 10;
    }
    
    show();
});