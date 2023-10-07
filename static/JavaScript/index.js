console.log("TEST")
const url = 'http://127.0.0.1:8000/'

$("#test").on( "click", function() {
       character_sheet();
       window.location.href = '/character_sheet'
});

function GET_EXAMPLE() {
    fetch("https://www.google.com/") //This will use url instead example fetch(url + 'test')
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
}

function character_sheet() {
    console.log(url + 'character_sheet')
    fetch(url + 'character_sheet')
    .then(response => response.json())
    .then(json => {
        console.log("OK");
    })
}

function POST_EXAMPLE() {
    let data = {"test":"TEST"}
    fetch(url + "postmethod", {
        "method": "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        "body": JSON.stringify(data)
    }).then(json => {
        console.log(json);
    })
}