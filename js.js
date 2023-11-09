let header = document.querySelector(`header`)
let icon = document.querySelector(`.icon`)

let ul = document.querySelector(`ul`)
icon.addEventListener(`click`, () => {
    console.log(1)
    if (ul.style.opacity == ``) {
        console.log(2)
        // ul.style.display = `flex`
        ul.style.opacity = `1`
        icon.src = `./assets/images/icon-menu-close.svg`
    } else {
        // ul.style.display = `none`
        ul.style.opacity = ``
        icon.src = `./assets/images/icon-menu.svg`
    }
})

