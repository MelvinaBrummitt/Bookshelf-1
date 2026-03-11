let shelf = []

async function searchBooks(){

let query = document.getElementById("searchBox").value

let response = await fetch(
"https://www.googleapis.com/books/v1/volumes?q="+query
)

let data = await response.json()

let results = document.getElementById("results")

results.innerHTML=""

data.items.forEach(book=>{

let cover = book.volumeInfo.imageLinks?.thumbnail
let title = book.volumeInfo.title

let img = document.createElement("img")
img.src = cover

img.onclick = ()=> addBook(book)

results.appendChild(img)

})

}

function addBook(book){

shelf.push(book)

renderShelf()

}

function renderShelf(){

let shelfDiv = document.getElementById("shelf")

shelfDiv.innerHTML=""

shelf.forEach(book=>{

let cover = book.volumeInfo.imageLinks?.thumbnail

let div = document.createElement("div")
div.className="book"

div.innerHTML = `<img src="${cover}">`

div.onclick = ()=> showDetails(book)

shelfDiv.appendChild(div)

})

}

function showDetails(book){

let info = book.volumeInfo

alert(
info.title + "\n\n" +
"Author: " + info.authors + "\n\n" +
"Genre: " + info.categories + "\n\n" +
info.description
)

}