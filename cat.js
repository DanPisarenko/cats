let loc = window.location.search
loc = loc.substring(1)
console.log(loc)
let api = "dan0703" 
const box = document.querySelector(".eeee");


const getCat = function(){ 
    fetch(`https://sb-cats.herokuapp.com/api/2/${api}/show/${loc}`)


.then(res => res.json())
.then(data => {
    console.log(data)
    let card = `
    <div class="card_of_cat">
    <div class="card-img_b" style="${data.data.img_link && `background-image: url(${data.data.img_link})`}"></div>
    <div class="card_txt">
    <h4>${data.data.name}</h4>
        <br>
        <span>Возраст ${data.data.age} лет/года</span>
        <br>
        <span>${data.data.rate}/10</span>
        <span>ID: ${data.data.id}</span>
        <p>${data.data.description}</p>
        <br></div>    
    </div>`;
box.innerHTML += card;

})
    
};getCat()