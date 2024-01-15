// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
   'use strict'
 
   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   var forms = document.querySelectorAll('.needs-validation')
 
   // Loop over them and prevent submission
   Array.prototype.slice.call(forms)
     .forEach(function (form) {
       form.addEventListener('submit', function (event) {
         if (!form.checkValidity()) {
           event.preventDefault()
           event.stopPropagation()
         }
 
         form.classList.add('was-validated')
       }, false)
     })
 })()

//  REMPLISSAGE DU NOMBRE DE MENUS 


 let allAddRemover= document.querySelectorAll('.addremove');
 let textInBoutonChariot = document.querySelector('#bulle');
 let nombreElement = 0;
 
 allAddRemover.forEach((addRemover) =>{
   
   addRemover.addEventListener('click', function(e){
 
 if(addRemover.textContent == 'Add to card'){
   addRemover.textContent = 'Remove to Card'
   nombreElement++
 }else if(addRemover.textContent == 'Remove to Card'){
   addRemover.textContent = 'Add to card'
   nombreElement--
 
 }
 
   })
 })



// les lorems couleurs et changement de police
 
let coleur = document.querySelector('#couleur');
let text = document.querySelectorAll('.accordion-body >p');
let nbrePx = document.querySelector('#tall')
let valeur= document.querySelector('.nmber')

coleur.addEventListener('change', function(e){
  text.forEach((p)=>{
    p.style.color = this.value
   })
  
})

nbrePx.addEventListener('change',function(e){
 let val= this.value
  valeur.textContent= val

  text.forEach((p)=>{
   p.style.fontSize = this.value+'px'

  })

})
