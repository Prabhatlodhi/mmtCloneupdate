//basefare div manipulation
const plusicon = document.querySelector(".basefare-section");
const basefare = document.querySelector(".fare--div");
const basefarePrice = document.querySelector(".basefare-price");
const imgsrc = document.querySelector(".bfs-img");
const popupWindow = document.querySelector(".review-popup");
const spanRupee = document.querySelector(".rupee_span");
//toggle the image icon
let toggle = true;
function imgchange() {
  toggle = !toggle;
  if (toggle) {
    imgsrc.src = "../images/bookingImg/plus.png";
  } else {
    imgsrc.src = "../images/bookingImg/minus.png";
  }
}
plusicon.addEventListener("click", (e) => {
  basefare.classList.toggle("displayn");
  basefarePrice.classList.toggle("displayn");
  
  console.log("heeeeeeeellllllllo")
  imgchange();
});
//surcharge div mani
const plusicon2 = document.querySelector(".surcharge-section");
const plusicon3 = document.querySelector(".surcharge-section1");
const surchargefare = document.querySelector(".fare--div2");
const surchargefare2 = document.querySelector(".fare--div3");
const surchargePrice = document.querySelector(".surcharge-price");
const surchargePrice1 = document.querySelector(".surcharge-price1");
const surchargePrice2 = document.querySelector(".surcharge-price2");

plusicon2.addEventListener("click", (e) => {
  surchargefare.classList.toggle("displayn");
  surchargePrice.classList.toggle("displayn");
  
});

plusicon3.addEventListener("click", (e) => {
  surchargefare2.classList.toggle("displayn");
  surchargePrice1.classList.toggle("displayn");
  spanRupee.classList.toggle("displayn")
});

// ================ Insurance pop alert =================
const secureTrip = document.querySelector(".secure-trip");
const noMessage = document.querySelector(".no-message");
const yesMessage = document.querySelector(".yes-message");
secureTrip.addEventListener("click", (e) => {
  if (e.target.classList.contains("yes-secure")) {
    yesMessage.classList.remove("displayn");
    noMessage.classList.add("displayn");
  }
  if (e.target.classList.contains("no-secure")) {
    noMessage.classList.remove("displayn");
    yesMessage.classList.add("displayn");
  }
});

// notAddedText.classList.add("displayn")

const clickContinue = document.querySelector(".continue-btn");
const clickEdit = document.querySelector(".edit");
const clickCross = document.querySelector(".close-review-box");

function closeReviewTravellers() {
  passengerInfoArray=[];
  localStorage.removeItem("passengerList");
  popupWindow.innerHTML="";
  document.querySelector(".rd-popup-box").style.display = "none";
  
}

clickEdit.addEventListener("click", closeReviewTravellers);
clickCross.addEventListener("click", closeReviewTravellers);

const displayTravellersDiv = document.querySelector(".display-travellers-div");

let numberOfTraveller = localStorage.getItem("sum") ?? 1;
let number = numberOfTraveller;
let count = 0;
let name_num = 1;
let gender = 1;
let passengerDetailsObj = {};
let passengerInfoArray = [];
let firstNameInput;
let lastNameInput;
let genderInput;
// notAddedText.classList.add("displayn")

for (let i = 0; i < number; i++) {
  displayTravellersDiv.innerHTML += `<div class="adult-add">
  
    <div>
     
      <label for="adult" style="font-weight: bold;">PASSENGER ${++count}</label>
    </div>
    <div class="adult-section">
      <input type="text" id="first_name${name_num}" placeholder="First & Middle Name">
      <input type="text" id="last_name${name_num}" placeholder="Last Name">
      <div class="gender-section">
        <input type="radio" name="gender${gender}" value="male" checked>
        <label for="male">MALE</label>
        <input type="radio" name="gender${gender}" value="female">
        <label for="female">FEMALE</label>
      </div>
    </div>
</div>
`;

  gender++;
  name_num++;

  //   lastname: document.querySelector(`#last_name${num}`).value,
  //   gender: document.querySelector(`gender${num}`).value
  // }
}

// localStorage.setItem("formname", abc)

// count++
const totalCount = document.querySelector(".total_count");
const totalCount1 = document.querySelector(".total_count1");

let totalPassenger = localStorage.getItem("sum") ?? 1;


totalCount.innerText = totalPassenger;
totalCount1.innerText = totalPassenger;

clickContinue.addEventListener("click", continueButtonFunction);

function continueButtonFunction(e) {
  let k = 1;
  
  let iteration = localStorage.getItem("sum") ?? 1;
 


  for (let i = 0; i < iteration; i++) {
    firstNameInput = document.querySelector(`#first_name${k}`);
    lastNameInput = document.querySelector(`#last_name${k}`);
    genderInput = document.querySelector(
      `input[name="gender${k}"]:checked`
    ).value;
    errorMsg = document.querySelector(".error_msg_display");

    if (firstNameInput.value == "") {
      errorMsg.innerText = "please enter first name";
      firstNameInput.style.borderColor = "red";
      setTimeout(() => {
        errorMsg.innerText = "";
        firstNameInput.style.borderColor = "grey";
      }, 2000);
      return;
    }
    if (lastNameInput.value == "") {
      lastNameInput.style.borderColor = "red";
      errorMsg.innerText = "please enter last name";
      setTimeout(() => {
        errorMsg.innerText = "";
        lastNameInput.style.borderColor = "grey";
      }, 2000);
      return;
    }

    k++;

    passengerDetailsObj = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      gender: genderInput,
  
    };
  
    passengerInfoArray.push(passengerDetailsObj);
  
  
    localStorage.setItem("passengerList", JSON.stringify(passengerInfoArray));


  }

  const mobileInput = document.querySelector("#mobile_input");
  const emailInput = document.querySelector("#email_input");
  const errorInput = document.querySelector(".error_msg_input");

  if (mobileInput.value == "") {
    mobileInput.style.borderColor = "red";
    errorInput.innerText = "please enter your mobile";
    setTimeout(() => {
      errorInput.innerText = "";
      mobileInput.style.borderColor = "grey";
    }, 2000);
    return;
  } else if (mobileInput.value % 1 !== 0) {
    mobileInput.style.borderColor = "red";
    errorInput.innerText = "please enter only numbers";
    setTimeout(() => {
      errorInput.innerText = "";
      mobileInput.style.borderColor = "grey";
    }, 2000);
    return;
  } else if (mobileInput.value.length !== 10) {
    mobileInput.style.borderColor = "red";
    errorInput.innerText = "please enter 10 digits number";
    
    setTimeout(() => {
      errorInput.innerText = "";
      mobileInput.style.borderColor = "grey";
    }, 2000);
    return;
  }

  if (emailInput.value == "") {
    emailInput.style.borderColor = "red";
    errorInput.innerText = "please enter your email";
   
    setTimeout(() => {
      errorInput.innerText = "";
      emailInput.style.borderColor = "grey";
    }, 2000);
    return;
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)
  ) {
    emailInput.style.borderColor = "red";
    errorInput.innerText = "please enter valid email";
    setTimeout(() => {
      errorInput.innerText = "";
      emailInput.style.borderColor = "grey";
    }, 2000);
    return;
  }
 
  localStorage.setItem("mobile", mobileInput.value);
  localStorage.setItem("email", emailInput.value);




  document.querySelector(".rd-popup-box").style.display = "flex";

 
  let noOfPassenger = localStorage.getItem("sum");
  let countOfpass = 0;
  let passengersDetailsArray = JSON.parse(
    localStorage.getItem("passengerList")
  );


  for (i = 0; i < noOfPassenger; i++) {
    popupWindow.innerHTML += ` <table class="cardreview-wrap">
                      <tr>
                          <th colspan="2">PASSENGER ${++countOfpass}</th>
                      </tr>
                      <tr>
                          <td>First & Middle Name</td>
                          <td>${passengersDetailsArray[i].firstName}</td>
                      </tr>
                      <tr>
                          <td>Last Name</td>
                          <td>${passengersDetailsArray[i].lastName}</td>
                      </tr>
                      <tr>
                          <td>Gender</td>
                          <td>${passengersDetailsArray[i].gender}</td>
                      </tr>
              </table> `;
  }
}

//Traveller review details Pop-Up
