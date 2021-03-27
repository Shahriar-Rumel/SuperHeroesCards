const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);
checkBoxes();
function checkBoxes(e){

    const triggerBottom = window.innerHeight /5 *4;

    boxes.forEach(box =>{
        const boxtop = box.getBoundingClientRect().top;
        if(boxtop < triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    });
}