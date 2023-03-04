const boxes=document.querySelectorAll('.box')
window.addEventListener('scroll',cheakBoxes)

cheakBoxes()


function cheakBoxes(){
    const triggerBottom=innerHeight/5*4
    boxes.forEach((box)=>{
        const boxTop=box.getBoundingClientRect().top
        if (boxTop<triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}