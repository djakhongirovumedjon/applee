let img = document.querySelector('.left img')
let btns = document.querySelectorAll('button[data-iphone]')
let open_modal = document.querySelectorAll('[data-open]')
let modal_bg = document.querySelector('.modal_bg')
let modal = document.querySelector('.modal')
let close = document.querySelectorAll('[data-close]')



colors = {
   purple: "../img/Purple.png",
   gold: "../img/gold.png",
   silver: "../img/silver.png",
   black: "../img/black.png"
}



btns.forEach(btn => {
   btn.onclick = () => {

      let key = btn.getAttribute('data-iphone')
      img.src = colors[key]
   }
})



let purple = document.querySelector('.purple')
let color_text = document.querySelector('.color_text')

purple.onmouseenter = () => {
   color_text.innerHTML = 'Color - purple'
}

purple.onmouseleave = () => {
   color_text.innerHTML = 'Color'
}


let gold = document.querySelector('.gold')
gold.onmouseenter = () => {
   color_text.innerHTML = 'Color - gold'
}

gold.onmouseleave = () => {
   color_text.innerHTML = 'Color'
}


let silver = document.querySelector('.silver')
silver.onmouseenter = () => {
   color_text.innerHTML = 'Color - silver'
}

silver.onmouseleave = () => {
   color_text.innerHTML = 'Color'
}


let black = document.querySelector('.black_')
black.onmouseenter = () => {
   color_text.innerHTML = 'Color - black'
}





black.onmouseleave = () => {
   color_text.innerHTML = 'Color'


}


open_modal.forEach(open => {
   open.onclick = () =>{
      modal_bg.style.display = "block"
      modal.style.display = "block"
   }
}             )


close.forEach(closee =>{
   closee.onclick = () =>{
      modal_bg.style.display = "none"
      modal.style.display = "none   "
   }
})

