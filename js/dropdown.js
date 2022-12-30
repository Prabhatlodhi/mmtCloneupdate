const clickbutton = document.querySelector(".select-trav")
const displaywindow = document.querySelector(".travellers-details")
const applybutton = document.querySelector(".apply-btn");

const travelClass = document.querySelector(".travel-class-select")
const age = document.querySelectorAll(".adult-age")
const classtype = document.querySelector("#class-type")
const noOfTravellers = document.querySelector(".travel-number")
const adults = document.querySelector(".adults")
const children = document.querySelector(".children")
const infants = document.querySelector(".infants")
const infantsli = document.querySelectorAll(".infants>li")

let adultNo = 0;
let childrenNo = 0;
let infantsNo = 0;
let sum=0;
let travelType= "";
let economyClassArray = [];
let adultsCountArray = [];
let childrenCountArray = [];
let infantCountArray = [];





const travelCount = document.querySelector('#Travellers_count');


travelCount.addEventListener('click', traverllerCountPopUp)

function traverllerCountPopUp(){
  displaywindow.classList.remove('hide_element');
} 

 


travelClass.addEventListener("click", (e)=>{
   travelType = e.target.innerHTML;
   if(e.target.classList.contains("economy_premium_buiseness_class")){
    if(economyClassArray.length>0){
        let rCol=economyClassArray.shift();
        rCol.classList.remove("selected")
    }
    economyClassArray.push(e.target);
}

economyClassArray.forEach((e1)=>e1.classList.add("selected"))
  
   


   

})

adults.addEventListener("click", (e)=>{
  adultNo = parseInt(e.target.innerHTML);
  localStorage.setItem("adults", adultNo)

  if(e.target.classList.contains("how_many_adults")){
    if(adultsCountArray.length>0){
        let rCol=adultsCountArray.shift();
        rCol.classList.remove("selected")
    }
    adultsCountArray.push(e.target);
}

adultsCountArray.forEach((e1)=>e1.classList.add("selected"))

  
})
children.addEventListener("click", (e)=>{
   childrenNo = parseInt(e.target.innerHTML);
   localStorage.setItem("children", childrenNo)
   if(e.target.classList.contains("how_many_children")){
    if(childrenCountArray.length>0){
        let rCol=childrenCountArray.shift();
        rCol.classList.remove("selected")
    }
    childrenCountArray.push(e.target);
}

childrenCountArray.forEach((e1)=>e1.classList.add("selected"))
})
infants.addEventListener("click", (e)=>{
  infantsNo = parseInt(e.target.innerHTML);
  localStorage.setItem("infants", infantsNo)
  
  if(e.target.classList.contains("how_many_infant")){
   if(infantCountArray.length>0){
       let rCol=infantCountArray.shift();
       rCol.classList.remove("selected")
   }
   infantCountArray.push(e.target);
}

infantCountArray.forEach((e1)=>e1.classList.add("selected"))
 
})
// submit the no of travellers details
function submitTotalTravellers(e){
  e.preventDefault();
  
  sum = adultNo + childrenNo + infantsNo
  localStorage.setItem("sum", sum)
  noOfTravellers.innerText = sum
  classtype.innerText = travelType;

  localStorage.setItem("class", travelType)

  displaywindow.classList.add('hide_element');
 
  resetValues()
}

function resetValues(e) {
  adultNo = 0
  childrenNo = 0
  infantsNo = 0
  sum = 0
}
//  to display window of travellers
// function displaywin(){
//   displaywindow.classList.toggle("diswin")
// }
//to close the window
// function closewin(e){
// if((e.target.classList.contains("apply-btn"))){
//     if (displaywindow.classList.contains('diswin')) {
//       displaywindow.classList.remove('diswin');
//     }
//   }
// }
applybutton.addEventListener("click", submitTotalTravellers)

// clickbutton.addEventListener("click", displaywin)
//  window.addEventListener("click", closewin)

// // =================================================================

