document.addEventListener("DOMContentLoaded" , () => {

    fetch("http://localhost:3000/categories")
    .then(Response => Response.json())
    .then(data => {
        console.table(data)
    })
})