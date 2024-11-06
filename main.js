(function game(){
  let level=10
  let random_no=genRandom(level)
  console.log(random_no)
  showPattern(random_no)
  
  current=0
  isOver=false
  for(let i=1;i<random_no.length;i++){
    let div=document.querySelector(`.tri${random_no[i]}`)
    div.addEventListener("click",()=>HandleClick(i))
  }
})()

function HandleClick(i){
  
}

function genRandom(n){
  let arr=[]
  for(let i=0;i<n;i++){
    let random=Math.floor(Math.random()*4+1)
    arr.push(random)
  }
  return arr
}

function showPattern(random_no){
  for(let i=0;i<random_no.length;i++){
    setTimeout(()=>{
      let div=document.querySelector(`.tri${random_no[i]}`)
      Blink(div,1000*(i+1))
    },i*1000)
    
  }
}

function Blink(div) {
  div.style.opacity=1
  setTimeout(function() {
    div.style.opacity=0.4
  }, 500);
}