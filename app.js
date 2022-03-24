'use strict'

const modal = document.querySelector('.model')
const overly = document.querySelector('.overly')
const CloseModelBtn=document.querySelector('.hidden-close')
const OpenBtnModel=document.querySelectorAll('.show-btn')
console.log(OpenBtnModel);
function removHidden(){
  // console.log('clicked btn');
  modal.classList.remove('hidden')
  overly.classList.remove('hidden')
}

function addHidden(){
  modal.classList.add('hidden')
  overly.classList.add('hidden')
}

for(let i=0 ; OpenBtnModel.length>i; i++)
OpenBtnModel[i].addEventListener('click',removHidden);

CloseModelBtn.addEventListener('click',addHidden)
overly.addEventListener('click',addHidden)
document.addEventListener('keydown',function(e){
  if(e.key==='Escape' && !modal.classList.contains('hidden')){
      addHidden()
  }
})