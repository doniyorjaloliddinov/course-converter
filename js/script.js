// COURSE CONVERTATION PROJECT
var elUsdInput = document.querySelector("#usd");
var elSomInput = document.querySelector("#som");
var elChangeBtn = document.querySelector(".change-btn");
var elClearBtn = document.querySelector(".clear-btn");
var elList = document.querySelector(".ready-list");
var usdInSum = 11367.93;
var message = "malumot notog'ri"


elChangeBtn.addEventListener ('click', (e) => {
  e.preventDefault();
  var usdInput =  elUsdInput.value.trim();
  var usdInputNumber = Number(usdInput);
  if (isNaN(usdInputNumber)){
    elUsdInput.value = message
    return  
  }

  var readyConvertatiion = usdInputNumber * usdInSum;
  if (readyConvertatiion){
    elSomInput.value = readyConvertatiion
  }


  var readyList = document.createElement("li");
  var usdOutput = document.createElement("p");
  var somOutput = document.createElement("p");
  // var readyConvert = document.createElement("span");

  usdOutput = document.textContent = `Usd : ${usdInputNumber}$`; 
  somOutput = document.textContent = `So'm : ${readyConvertatiion} so'm`;
  // readyConvert = document.textContent = `Konvertatsiya = ${readyConvertatiion}`;
  readyList.append(usdOutput, somOutput);
  elList.appendChild(readyList);
})

elClearBtn.addEventListener("click", (evt) =>
{
  evt.preventDefault();
  elList.innerHTML = ""
})
// COURSE CONVERTATION PROJECT

