let finalTotal = localStorage.getItem("total_amount");


let passengerList = JSON.parse(localStorage.getItem("passengerList"));
let mobileOfPassenger = localStorage.getItem("mobile");
let emailOfPassenger = localStorage.getItem("email");
const passengerNames = document.querySelector('.passenger_name_list');




passengerList.map((val)=>{
    passengerNames.innerHTML+=`
    <li>
                <p>${val.firstName} <span>(${val.gender})</span></p>
                <span>
                  <span class="email">${emailOfPassenger}</span>
                  <span>|</span>
                  <span class="phone-no">+91-${mobileOfPassenger}</span>
                </span>
              </li>`
})



const total = document.querySelector('.total_amount');
const total1 = document.querySelector('.total_amount1');
const total2 = document.querySelector('.total_amount2');
const cityNewDepart = document.querySelector('.city_departure');
const cityNewArrival = document.querySelector('.city_land');
const tripTime = document.querySelector('.trip_duration');
const arriveTripTime = document.querySelector('.trip_arrive_time');
const departTripTime = document.querySelector('.trip_depart_time');
const dayNumber = document.querySelector('.number_day');
const dayName = document.querySelector('.name_day');
const monthYear = document.querySelector('.month_year');
const yearToday = document.querySelector('.year_today');

total.innerText = finalTotal
total1.innerText = finalTotal
total2.innerText = finalTotal
cityNewDepart.innerText = localStorage.getItem('cityDeparture')
cityNewArrival.innerText = localStorage.getItem('cityLand')
tripTime.innerText = localStorage.getItem('duration')
arriveTripTime.innerText = localStorage.getItem("tripArriveTime")
departTripTime.innerText = localStorage.getItem("tripDepartTime")
dayNumber.innerText = localStorage.getItem("day");
dayName.innerText = localStorage.getItem("name_of_day");
monthYear.innerText = localStorage.getItem("month");
yearToday.innerText = localStorage.getItem("year");

