const count = document.querySelector('.count')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')

let label = 0;

increase.onclick = ()=>{
    label++;
    count.innerHTML= label;
    if(label >0){
        count.style.color='green';
    } else if(label === 0){
    count.style.color='grey';
    }

}

decrease.onclick = ()=>{
    label--;
    count.innerHTML= label;
    if(label <0){
        count.style.color='red';
    }else if(label === 0){
    count.style.color='grey';
    }
}

reset.onclick = ()=> {
    label=0;
    count.innerHTML= label;

    if(label === 0){
    count.style.color='grey';
    }
}




const generate = document.querySelector('.generate')
const loto = document.getElementsByClassName('loto')

generate.onclick = ()=> {
    for (let i=0; i<=6; i++){
        loto[i].innerHTML= Math.ceil(Math.random()*100+1)
    }
}