
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
//Select Option da gün ay ve yıl değerlerinin optiona düşmesi için oluşturulan döngü
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
//input girişlerinin boş olması durumunda uyarı 
function errorMessage(el){
   const value = el.value.trim();
   if(value == "" ){
      el.insertAdjacentHTML('afterend', `<span class="error">Lütfen değer giriniz </span>`);
      return false;
   }
   return true;

}
//dolu inputların kontrolüne göre uyarı mesajını temizleme
function removeErrorMessages(doc){
   const errorElem = doc.querySelectorAll('.error');
   Array.prototype.map.call(errorElem, el=>{
      if(el != null || el != undefined){
         el.parentNode.removeChild(el);
      }
      
   });
   
}
// e-mail inputu için '@' kontrolü ve sonrasında '.com' kontrolü
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
//First Name alanı için string kontrolü
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
//last name için string kontrolü
function lastNameValidate(){

   const lastName = document.getElementById("lasstName");

   lastName.addEventListener("blur", () => {

    let regex = /^[A-Za-z]+$/;

    let s = lastName.value;

    if (regex.test(s) ) {

      lastName.classList.remove("is-invalid");

      lastNameError = true;

    } else {

      lastName.classList.add("is-invalid");

      lastNameError = false;

    }

  });

}
//telefon alanı için '0' ile başlayarak rakamlardan oluşacak şekilde 11 karakter giriş kontrolü 
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
// Age inputu için seçilen yıla göre yaşın hesaplanması
function onChangeCalculateAge(selectedAge) {
   var today = new Date();
   var age = today.getFullYear() - selectedAge.value;
   document.getElementById("age").value = age;
}
//ikinci sayfa için yönlendirme 

function passToThreePage(){
   window.location.href = 'financialGoalsPage.html';
}
//First name input ve last name input için string,
// age input için rakam  kontrolüne uymaması durumunda yazmasını engelleme
function checkInput(e){

   const firstName = document.getElementById("firstName");
   const lastName = document.getElementById("lasstName");
   const age = document.getElementById("age");

   let regexStr = /^[A-Za-z]+$/;
   let regexNum =  /^[0-9]+$/;

   let firstNameValue = firstName.value;

   if (!regexStr.test(firstNameValue) ) {
      firstName.value="";
   }

   let lastNameValue = lastName.value;

   if (!regexStr.test(lastNameValue) ) {
      lastName.value="";
   }
   let ageValue = age.value;

   if (!regexNum.test(ageValue) ) {
      age.value="";
   }
 
}