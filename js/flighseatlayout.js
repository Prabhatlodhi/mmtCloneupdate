//===============Below code is for Creating seat dynamically===================

const main_table = document.querySelector("Table");

const topRowA = document.querySelector("#top_row_A").innerText;
const topRowB = document.querySelector("#top_row_B").innerText;
const topRowC = document.querySelector("#top_row_C").innerText;
const topRowD = document.querySelector("#top_row_D").innerText;
const topRowE = document.querySelector("#top_row_E").innerText;
const topRowF = document.querySelector("#top_row_F").innerText;

let row_present = 32;
function aircraft_seat_row() {
  for (let i = 1; i <= row_present; i++) {
    if (i <= 6) {
      main_table.innerHTML += `
        <thead class="aero_seat">
        <th style="background-color: white;" class="dummy">${i}</th>
        <th class="premiumSeat singleSeat"  id=${
          i + topRowA
        } class="purple" > </th>
        <th class="premiumSeat singleSeat"  id=${
          i + topRowB
        } class="purple" ></th>
        <th class="premiumSeat singleSeat"  id=${
          i + topRowC
        } class="purple"></th>
        <th  style="background-color: white;" class="dummy"></th>
        <th class="premiumSeat singleSeat"  id=${
          i + topRowD
        } class="purple"></th>
        <th class="premiumSeat singleSeat" id=${
          i + topRowE
        } class="purple" ></th>
        <th class="premiumSeat singleSeat"  id=${
          i + topRowF
        } class="premiumSeat singleSeat"  ></th>
        <th style="background-color: white;" class="dummy">${i}</th>
    </thead>
        `;
    } else if (i > 4 && i < 27) {
      main_table.innerHTML += `
    <thead class="aero_seat">
    <th style="background-color: white;" class="dummy">${i}</th>
    <th id=${i + topRowA} class="midSeat singleSeat"> </th>
    <th id=${i + topRowB} class="midSeat singleSeat"> </th>
    <th id=${i + topRowC} class="midSeat singleSeat">  </th>
    <th  style="background-color: white;" class="dummy"></th>
    <th id=${i + topRowD} class="midSeat singleSeat" >  </th>
    <th id=${i + topRowE} class="midSeat singleSeat"> </th>
    <th id=${i + topRowF} class="midSeat singleSeat">  </th>
    <th style="background-color: white;" class="dummy">${i}</th>
</thead>
    `;
    } else {
      main_table.innerHTML += `
    <thead class="aero_seat">
    <th style="background-color: white;" class="dummy">${i}</th>
    <th id=${i + topRowA} class="endBlue singleSeat"></th>
    <th   id=${
      i + topRowB
    } class="free_seat singleSeat" style="background-color: #50e3c2;" >₹ 0</th>
    <th id=${i + topRowC} class="endBlue singleSeat"></th>
    <th  style="background-color: white;" class="dummy"></th>
    <th id=${i + topRowD} class="endBlue singleSeat"></th>
    <th   id=${
      i + topRowE
    } class="free_seat singleSeat" style="background-color: #50e3c2;">₹ 0</th>
    <th id=${i + topRowF} class="endBlue singleSeat" ></th>
    <th style="background-color: white;" class="dummy">${i}</th>
</thead> `;
    }
  }
}
aircraft_seat_row();


//===============Below code is for showing Seat Price and Seat Position =============


const InfoDiv = document.querySelector(".seat_info_box");

//===Code for positioning display price box====

function showDiv(x, y) {
  y -= 250;
  x -= 190;

  InfoDiv.style.top = `${y}px`;
  InfoDiv.style.left = `${x}px`;
  InfoDiv.style.display = "block";
}



main_table.addEventListener("mouseover", displayDiv);
function displayDiv(e, window) {
  if (
    !e.target.classList.contains("main_table") &&
    !e.target.classList.contains("dummy")
  ) {
    let price = calculateSeatPrice(e.target.id) ?? "";
    let seatname = seatnamehover(e.target.id) ?? "";
    let target_id = e.target.id ?? "";

    if(price=="" || seatname =="" || target_id==""){
      InfoDiv.style.display="none";
    }else{
    InfoDiv.innerHTML = `<span> <strong> ${target_id} || </strong> </span>
                         <span> <strong>${seatname} || </strong> </span>
                         <span> <strong> ₹ ${price} </strong> </span>`;
    }
    let valueX = e.pageX;
    let valueY = e.pageY;

    showDiv(valueX, valueY);
  } else {
    InfoDiv.style.display = "none";
  }
}

main_table.addEventListener("mouseout", hideBox);

function hideBox() {
  InfoDiv.style.display = "none";
}


//===============Below code is for displaying seat Price=============

function calculateSeatPrice(id, e) {
  id = [parseInt(id.slice(0, id.length - 1)), id.slice(id.length - 1)];

  if (id[0] >= 1 && id[0] <= 6 && (id[1] == "A" || id[1] == "F")) {
    return 1500;
  } else if (id[0] >= 7 && id[0] <= 26 && (id[1] == "A" || id[1] == "F")) {
    return 800;
  } else if (id[0] >= 27 && id[0] <= 32 && (id[1] == "A" || id[1] == "F")) {
    return 200;
  } else if (id[0] >= 1 && id[0] <= 6 && (id[1] == "B" || id[1] == "E")) {
    return 900;
  } else if (id[0] >= 7 && id[0] <= 26 && (id[1] == "B" || id[1] == "E")) {
    return 500;
  } else if (id[0] >= 27 && id[0] <= 32 && (id[1] == "B" || id[1] == "E")) {
    return 0;
  } else if (id[0] >= 1 && id[0] <= 6 && (id[1] == "C" || id[1] == "D")) {
    return 700;
  } else if (id[0] >= 7 && id[0] <= 26 && (id[1] == "C" || id[1] == "D")) {
    return 200;
  } else if (id[0] >= 27 && id[0] <= 32 && (id[1] == "C" || id[1] == "D")) {
    return 150;
  }
}

function seatnamehover(id) {
  id = [parseInt(id.slice(0, id.length - 1)), id.slice(id.length - 1)];

  if (id[0] >= 1 && id[0] <= 6 && (id[1] == "A" || id[1] == "F")) {
    return "Window Seat";
  } else if (id[0] >= 7 && id[0] <= 28 && (id[1] == "A" || id[1] == "F")) {
    return "Window Seat";
  } else if (id[0] >= 29 && id[0] <= 32 && (id[1] == "A" || id[1] == "F")) {
    return "Window Seat";
  } else if (id[0] >= 1 && id[0] <= 6 && (id[1] == "B" || id[1] == "E")) {
    return "Middle Seat";
  } else if (id[0] >= 7 && id[0] <= 28 && (id[1] == "B" || id[1] == "E")) {
    return "Middle Seat";
  } else if (id[0] >= 29 && id[0] <= 32 && (id[1] == "B" || id[1] == "E")) {
    return "Middle Seat";
  } else if (id[0] >= 1 && id[0] <= 6 && (id[1] == "C" || id[1] == "D")) {
    return "Aisle Seat";
  } else if (id[0] >= 7 && id[0] <= 28 && (id[1] == "C" || id[1] == "D")) {
    return "Aisle Seat";
  } else if (id[0] >= 29 && id[0] <= 32 && (id[1] == "C" || id[1] == "D")) {
    return "Aisle Seat";
  }
}

//===============Below code is for Seat Hover Effect=============

const singleSeat = document.querySelectorAll(".singleSeat");
singleSeat.forEach((ele) => ele.addEventListener("mouseover", hovereffect));

function hovereffect(e) {
  e.target.style.background = "lightgreen";
}

singleSeat.forEach((ele) => ele.addEventListener("mouseout", hoverundo));

function hoverundo(e, id) {
  let seprateID = e.target.id.slice(0, e.target.id.length - 1);

  if (seprateID <= 6) {
    e.target.style.background = "#c9baff";


  } else if (seprateID >= 7 && seprateID <= 26) {
    e.target.style.background = "#badaff";
  } else if (
    seprateID >= 26 &&
    seprateID <= 32 &&
    !e.target.classList.contains("free_seat")
  ) {
    e.target.style.background = "#badaff";
  } else if (
    seprateID >= 26 &&
    seprateID <= 32 &&
    e.target.classList.contains("free_seat")
  ) {
    e.target.style.background = "#50e3c2";
  }
}


//===============Below code is for Display the selected Seat=============

main_table.addEventListener("click", selectingSeat);
let seatSelected = localStorage.getItem("sum") ?? 1;
let emptyArr = [];
let seatArr = [];
const seatCounter = document.querySelector('.counter_seat');
const seatInTotal = document.querySelector('.seat_in_total');
seatInTotal.innerText = localStorage.getItem("sum") ?? 1;
let counter=0;
 
function selectingSeat(e) {
  let expSeat = e.target.classList.contains("singleSeat");
  let freeSeatdata = e.target.classList.contains("free_seat");
  let seatValue = e.target.id;
  

   

  if (expSeat){
    if (emptyArr.length >= seatSelected){
      
      let seatSelection = emptyArr.shift();
      seatArr.shift();
      counter--;

      seatSelection.innerHTML = "";

      if(seatSelection.classList.contains('free_seat')){
        seatSelection.innerHTML = "₹ 0";
      }
    }
    
    emptyArr.push(e.target);
    seatArr.push(seatValue);
    counter++;
    seatCounter.innerText = counter;
    localStorage.setItem("seats", JSON.stringify(seatArr));
    
  }

  emptyArr.forEach((el) => {
    el.innerHTML = `<i class="fa fa-check-square-o" style="font-size:20px;color:black"></i>`;
  
  });
}

//===============Below code is for freeSeat=============
 