const inp=document.querySelector('#inp');
const btn=document.querySelector('#btn');
const inpPart=document.querySelector('#inpPart')
const numDiv=document.querySelector('#numDiv')
const info=document.querySelector('#info')

let h3=document.createElement('h3')
btn.addEventListener('click',checkNumber)
function checkNumber(){
    if( isNaN(inp.value)){
        h3.innerHTML="It should be <b>NUMBER</b> "
        h3.className="text-success"
        h3.style.marginLeft="66px"
        inpPart.prepend(h3)
        numDiv.innerHTML=""
       info.classList.remove('d-none')
       info.classList.add('d-flex')
    }
    else if(inp.value==""){
      h3.innerHTML="You should enter <b>NUMBER</b> "
        h3.className="text-success"
        h3.style.marginLeft="66px"
        inpPart.prepend(h3)
        numDiv.innerHTML=""
       info.classList.remove('d-none')
       info.classList.add('d-flex')
    }
    else{
    h3.remove()
        selectNumber(inp.value)
    }
     inp.value=" "
}

function selectNumber(e){
  info.classList.add('d-none')
    for (let i = 0; i <= e; i++) {
        let numberDiv=document.createElement('div')
        numberDiv.className=" m-1"
        numberDiv.style="width: 100px;height: 80px;"
        let h1=document.createElement('h1')
        h1.className="text-center mt-3 text-white"
        h1.innerHTML=i
        numberDiv.appendChild(h1)
        numDiv.appendChild(numberDiv)
        if( (i!=1) && ((i%2!=0 || i==2) && (i%3!=0 || i==3) && (i%5!=0 || i==5) && (i%7!=0||i==7) && (i%9!=0 || i==9))){
          numberDiv.style.backgroundColor="red"
        }
        else if(i%2==0){
          numberDiv.style.backgroundColor="green"
        }
        else if((i==1)||(i>8 && i%2==1)){
          numberDiv.style.backgroundColor="yellow"
        }
    }
}
