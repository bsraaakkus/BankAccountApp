
const form = document.querySelector('form');
const formButton = form.querySelector('button');
let firstNameError = true;
let lastNameError  = true;
let phoneError     = true;
let emailError     = true;
dateFill();

formButton.onclick=()=>{ 
   let arrValidateInput= validate();

   if(firstNameError == true &&

      lastNameError == true &&

      phoneError == true &&

      emailError == true && arrValidateInput.every(v => v === true)){
      window.location.href = 'connectBankPage.html';
   }
}

function dateFill(){
   const date = document.querySelector('.date');
   if(date!=null){
      const day =date.querySelector('[name="day"]');
      const dayMax=32;
      const monthMax=13;
      const yearMax=2022;
      const yearMin=1940;
   
      for(let index = 1; index<dayMax; index++){
         day.insertAdjacentHTML('beforeend', `<option> ${index}</option>`)
      }
   
      const month = date.querySelector('[name="month"]');
      
      for (let index = 1; index < monthMax; index++) {
         month.insertAdjacentHTML('beforeend', `<option> ${index}</option>`);
      }
      const year =date.querySelector('[name="year"]');
   
      for(let index = yearMax; index>yearMin; index--){
         year.insertAdjacentHTML('beforeend', `<option> ${index}</option>`)
      }
   }
   
}

function errorMessage(el){
   const value = el.value.trim();
   if(value == "" ){
      el.insertAdjacentHTML('afterend', `<span class="error">Lütfen değer giriniz </span>`);
      return false;
   }
   return true;

}

function removeErrorMessages(doc){
   const errorElem = doc.querySelectorAll('.error');
   Array.prototype.map.call(errorElem, el=>{
      if(el != null || el != undefined){
         el.parentNode.removeChild(el);
      }
      
   });
   
}

function emailValidate(){

   const email = document.getElementById("email");

  email.addEventListener("blur", () => {

    let regex = /^[a-zA-z0-9]+@[a-zA-Z0-9]+[.{1}]+[c][o][m]$/;

    let s = email.value;

    if (regex.test(s)) {

      email.classList.remove("is-invalid");

      emailError = true;

    } else {

      email.classList.add("is-invalid");

      emailError = false;

    }

  });

}

function firstNameValidate(){

   const firstName = document.getElementById("firstName");

   firstName.addEventListener("blur", () => {

    let regex = /^[A-Za-z]+$/;

    let s = firstName.value;

    if (regex.test(s)) {

      firstName.classList.remove("is-invalid");

      firstNameError = true;

    } else {

      firstName.classList.add("is-invalid");

      firstNameError = false;

    }

  });

}
function lastNameValidate(){

   const lastName = document.getElementById("lasstName");

   lastName.addEventListener("blur", () => {

    let regex = /^[A-Za-z]+$/;

    let s = lastName.value;

    if (regex.test(s)) {

      lastName.classList.remove("is-invalid");

      lastNameError = true;

    } else {

      lastName.classList.add("is-invalid");

      lastNameError = false;

    }

  });

}

function phoneValidate(){
   
  const phone = document.getElementById("telephone");

  phone.addEventListener("blur", () => {

    let regex = /^[0]+[0-9]{10}$/;

    let s = phone.value;

    if (regex.test(s)) {

      phone.classList.remove("is-invalid");

      phoneError = true;

    } else {

      phone.classList.add("is-invalid");

      phoneError = false;

    }

  });
}

function validate(){
 removeErrorMessages(form);
   const elems = form.querySelectorAll('input');
   let result = Array.prototype.map.call(elems, item=>{

   phoneValidate();
  
   emailValidate();

   firstNameValidate();

   lastNameValidate();

   return  errorMessage(item);
 });

  return result;
}

function onChangeCalculateAge(selectedAge) {
   var today = new Date();
   var age = today.getFullYear() - selectedAge.value;
   document.getElementById("age").value = age;
}


function passToThreePage(){
   window.location.href = 'financialGoalsPage.html';
}