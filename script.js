///initialise the variables
const Q=document.getElementById("Q")
const W=document.getElementById("W")
const E=document.getElementById("E")
const R=document.getElementById("R")
const T=document.getElementById("T")
const Y=document.getElementById("Y")
const U=document.getElementById("U")
const I=document.getElementById("I")
const O=document.getElementById("O")
const P=document.getElementById("P")
const A=document.getElementById("A")
const S=document.getElementById("S")
const D=document.getElementById("D")
const F=document.getElementById("F")
const G=document.getElementById("G")
const H=document.getElementById("H")
const J=document.getElementById("J")
const K=document.getElementById("K")
const L=document.getElementById("L")
const Z=document.getElementById("Z")
const X=document.getElementById("X")
const C=document.getElementById("C")
const V=document.getElementById("V")
const B=document.getElementById("B")
const N=document.getElementById("N")
const M=document.getElementById("M")

const textarea=document.getElementById("text-area")
const sentenceEl=document.getElementById("sentence")
const total=document.getElementById("total")
const score=document.getElementById("score")
const next=document.getElementById("next")
let typing=""
let keys=[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
let sentence="THIS SENTENCE TO TEACH YOU HOW TO CODE"
let cursor=0;
let score_num=0;
//add events listners
document.addEventListener('keypress', keyPress);
document.addEventListener('keyup', keyUp);

total.innerHTML=`/${sentence.length}`
const audio=new Audio("mp3.mp3")
next.innerHTML=sentence[0]
///define the fucntions for the events listners

function keyUp(e) {
    
    cursor++;
    const keys=document.querySelectorAll(".key")
    for (let i = 0; i < keys.length; i++) {
     keys[i].style.backgroundColor = "rgb(255,200,200)";
    }
    }
    function keyPress(e) {
  if(cursor<=sentence.length){

    //macth each key with its keyCode
      audio.play();
      let c=e.keyCode
      if(c==32){
        typing +=" "
      }
      if(c>=97){
        c=c-32
      }
      if((sentence[cursor]==String.fromCharCode(c))){
        score_num +=1;
        score.innerHTML=`${score_num}`
      }
      if(!(sentence[cursor]==String.fromCharCode(c))){
       
        typing +='<span style="color:red;">'
      }
     
        typing +=String.fromCharCode(c)
        
        if(!(sentence[cursor]==String.fromCharCode(c))){
          typing +='</span>'
        }
        console.log(typing)
        
          textarea.innerHTML=typing
          let sen=""
          for(let i=cursor+1;i<sentence.length;i++){
            sen +=sentence[i]
          }
          sentenceEl.innerHTML=sen
      for(let i=65;i<65+keys.length;i++){
        if (e.keyCode==i|| e.keyCode==i+32){
            keys[i-65].style.backgroundColor="rgb(185,100,100)";
        
        }
      }
      if(sentence[cursor+1] !=" "){
      next.innerHTML=sentence[cursor+1]
      }else{
        next.innerHTML="SPACE"
      }

      if(!sentence[cursor+1]){
        next.innerHTML="Finish"
      }
    }
  }
    