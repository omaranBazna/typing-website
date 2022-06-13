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
let typing=""
let keys=[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];


//add events listners
document.addEventListener('keypress', keyPress);
document.addEventListener('keyup', keyUp);