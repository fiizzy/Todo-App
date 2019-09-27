const url = "/contact";
fetch(url, {
    method : "POST",
    body: new FormData(document.querySelector('.form')),
    // -- or --
    // body : JSON.stringify({
        // user : document.getElementById('user').value,
        // ...
    // })
}).then(
    response => response.text() // .json(), etc.
    // same as function(response) {return response.text();}
).then(
    html => console.log(html)
);