const menu = document.querySelector('.menu')


fetch('https://api.sampleapis.com/rickandmorty/characters')
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        menu.innerHTML += `
            <div class="card">
                <img class="card_image" src="${item.image}">
                <P class="card_name">${item.name}</P>
                <div class="block">
                <P class="card_gender">${item.gender}</P>
                <P class="card_type">${item.type}</P>
                <P class="card.status">${item.status}</P>
                </div>
            </div>
        `
    })
})