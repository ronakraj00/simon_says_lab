(function game(){
  let level=1
  let random_no=genRandom(level)
  console.log(random_no)
})()

function genRandom(n){
  arr=[]
  for(let i;i<n;i++){
    random=Math.floor(Math.random()*n+1)
    arr.push(random)
  }
  return arr
}

function showPattern(random_no){
  for(let i=1;i<len(random_no);i++){
    let div=document.querySelector(".tri"+i)
    div.style.opacity=1
    setTimeout(()=>{
      div.style.opacity=0.4
    },400)
  }
}