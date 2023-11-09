let header = document.querySelector(`header`)
let icon = document.querySelector(`.icon`)
let backone = document.querySelector(`.backone`)

let ul = document.querySelector(`ul`)
icon.addEventListener(`click`, () => {
    if (ul.style.opacity == ``) {
        ul.style.opacity = `1`
        icon.src = `./assets/images/icon-menu-close.svg`
        backone.style.opacity = `.5`
    } else {
        backone.style.opacity = ``
        ul.style.opacity = ``
        icon.src = `./assets/images/icon-menu.svg`
    }
})

