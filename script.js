const forma = document.querySelector(".forma");
const vards = document.querySelector(".name");
const uzvards = document.querySelector(".surname");

forma.addEventListener("submit", function(a){
    a.preventDefault();
    const json = JSON.stringify[vards.value, uzvards.value];
    fetch(`127.0.0.1/5500`, {
        method:"POST",
        body: json
    })
})
