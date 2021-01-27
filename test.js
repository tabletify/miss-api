require("node-fetch")("http://localhost:3000/api/v2/cat", {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `User 1606584151023.nuDh3BquG0d2yROfuR`,
    },
}).then(x => x.json().then(b => console.log(b)));