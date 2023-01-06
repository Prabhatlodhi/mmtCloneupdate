// import info from '../hope.json' assert {type: 'json'};
// depart_city_name, depart_IATA_code, depart_airport_name, dept_date, arrive_city_name, arrive_IATA_code, arrive_airport_name
// data.data.flights
// api url
// const api_url =  `/flights?depart_city_name=${departCityValue}&depart_IATA_code=${}&depart_airport_name=${}&dept_date=${}&arrive_city_name=${}&arrive_IATA_code=${}&arrive_airport_name=${}`;
const flightInfoDisplay = document.querySelector('.flight_info_display');
const arriveCityContainer = document.querySelector('.arrive_city_container');
const departCityContainer = document.querySelector('.depart_city_container');
const tripArrive = document.querySelector('.trip_arrive');
const tripDepart = document.querySelector('.trip_depart');
const arriveCityDisplay = document.querySelector('.arrive_city_display');
const departCityDisplay = document.querySelector('.depart_city_display');
const departCity = document.getElementById("depart_city");
const arriveCity = document.getElementById("arrive_city");
const tripTypeWay = document.querySelector('.trip_type_way'); 
const tripWayOptions = document.querySelector('.trip_way');
const tripWayOptionClick = document.querySelector('.trip_way_options');
const tripWayDynamic = document.querySelector('.trip_way_dynamic');
const totalPassengerDisplay = document.querySelector('.total_passenger');
const passengerClassDisplay = document.querySelector('.passenger_class');

const searchButton = document.querySelector('.search_btn');


let dayName = localStorage.getItem("name_of_day");
let dayNumber = localStorage.getItem("day");
let departMonth = localStorage.getItem("month");
let departYear = localStorage.getItem("year");

let departAirport =localStorage.getItem("airportDeparture")
let departureCity = localStorage.getItem("cityDeparture")
let departCode = localStorage.getItem("airportDepartureCode")

let arrivalCity = localStorage.getItem("cityLand")
let arrivalAirport = localStorage.getItem("airportLand")
let arrivalCode = localStorage.getItem("codeLand");

departCityDisplay.innerText = departureCity ?? "Delhi";
arriveCityDisplay.innerText = arrivalCity ?? "Kolkata";



const api_url =  `https://mmtbackend-production.up.railway.app/flights?depart_city_name=${departureCity}&depart_IATA_code=${departCode}&depart_airport_name=${departAirport}&dept_day_name=${dayName}&dept_day=${dayNumber}&dept_month${departMonth}&dept_year=${departYear}&arrive_city_name=${arrivalCity}&arrive_IATA_code=${arrivalCode}&arrive_airport_name=${arrivalAirport}`;


async function fetchData(url) {



    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    const data = await response.json();

    return data;

}

async function fetchAirportData(query="USA") {
  
   const _apiUrl = `https://mmtbackend-production.up.railway.app/airports`;
   
   const options = {
     method: 'GET',
     // headers: {
     //   'X-RapidAPI-Key': '88e3507a35mshab9ed11a3c29c2bp149618jsn8eb901ce4045',
     //   'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
     // }
   };
   
   
     // Storing response
     const response = await fetch(_apiUrl, options);
     // Storing data in form of JSON
     const data = await response.json();
     return data;

   }

   async function airportData(){
      let data= await fetchAirportData();

      data.data.airports.map((val)=>{
         departCity.innerHTML+=`<option class="depart_option">${val.city_name}</option>`
         arriveCity.innerHTML+=`<option class="arrive_option">${val.city_name}</option>`
      })
   }

   airportData()
   

 fetchData(api_url)
// //whenever we need the data from api we are sending request and then using the same data in our functions
// // async function showData(){
// //   let data = await fetchData(api_url);

// // }
// // showData();
// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //       .then(response => response.json())
// //       .then(json => console.log(json))






let bookingArray=JSON.parse(localStorage.getItem("booking")) ?? [];



let totalPassenger = localStorage.getItem("sum");
let passengerClass = localStorage.getItem("class");

if(totalPassenger==0 || totalPassenger == undefined){
   totalPassengerDisplay.innerText = 1;
}else{
   totalPassengerDisplay.innerText = totalPassenger;
}

passengerClassDisplay.innerText = passengerClass;


let arriveCityValue;
let departCityValue;




 searchFunction();

const dayToShow = document.querySelector('.day_display');
const monthToShow = document.querySelector('.month_display');
const yearToShow = document.querySelector('.year_display');
const dayNameToShow = document.querySelector('.day_name_display');

let selectedDay = localStorage.getItem("day");
let selectedMonth = localStorage.getItem("month");
let selectedYear = localStorage.getItem("year");
let selectDayName = localStorage.getItem("name_of_day");

dayToShow.innerText = selectedDay;
monthToShow.innerText = selectedMonth;
yearToShow.innerText = selectedYear;
dayNameToShow.innerText = selectDayName;



// function cityText(){
//    let selectArriveCity = arriveCity.selectedIndex;
//    arriveCityValue = document.getElementsByClassName("arrive_option")[selectArriveCity].value;
  
// }

// function departCityText(){
//    let selectDepartCity = departCity.selectedIndex;
//    departCityValue = document.getElementsByClassName("depart_option")[selectDepartCity].value;
  


// }


function displaySearchResult(val){

   let dynamicImageName ={
      
      "air india": 1,
      "akasa": 2,
      "emirates": 3,
      "indigo" : 4,
      "spice jet":5,
      "vistara":6
   }

   let image_number=dynamicImageName[val.flight];

   flightInfoDisplay.innerHTML+=`
   <div class="wrapper_search">
   <div class="blue_lock_box">
   <img
      src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/farelock/fl_small_blue_plain_lock.png" />
   <p>Lock this Price<span>i</span></p>
</div>

<div class="go_first">
   <div class="go_first_logo">
   <img src="../images/ailrlines/airline-${image_number}.jpg" alt="" srcset="">
      <div class="go_first_para">
         <p class="flight_name">${val.flight} </p>
         <p>G8 713, G8 392</p>
      </div>
   </div>
   <div class="flight_time">
      <p class="departure_time">${val.dept_time}</p>
      <p class="departure_airport hidden">${val.depart_airport_name}</p>
      <p class="arrival_airport hidden">${val.arrive_airport_name}</p>
      <p class="arrival_airport hidden">${val.depart_IATA_code}</p>
      <p class="arrival_airport hidden">${val.arrive_IATA_code}</p>
      <p class="departure_city_name">${val.depart_city_name}</p>
   </div>
   <div class="one_stop">
      <p class="total_duration">${val.total_duration}</p>
      <div class="blue_line"></div>
      <p>Non Stop</p>
   </div>

   <div class>
      <div class="arrival_info">
         <p class="arrival_time">${val.arrive_time}</p>
         <div class="plus_one_day">
            <p>+1</p>
            <p>Day</p>
         </div>
      </div>
      <p class="destination arrival_city_name">${val.arrive_city_name}</p>
   </div>
   <div class="price_details">
      <p class="ticket_price">₹ ${val.price}</p>
   </div>

    <button class="info_btn">Book Now</button>
</div>
</div>
   `

  
}







async function searchFunction(){

   // cityText();
   // departCityText();

   flightInfoDisplay.innerHTML="";

   let data = await fetchData(api_url);

data.data.flights.map((val)=>{

   
 
      displaySearchResult(val);
})

   
}

function departCityClick(){
   departCity.classList.remove('hidden');
}
function arriveCityClick(){
   arriveCity.classList.remove('hidden');
}

// function disappearDepartSelectMenu(){
//    departCityText();
//    departCity.classList.add('hidden');
// }
// function disappearArriveSelectMenu(){
//    cityText();
//    arriveCity.classList.add('hidden');
// }

function bookingTicket(e){
   if(e.target.classList.contains('info_btn')){
      let flightNamePath = e.path[1].firstElementChild;
      let flightDetailPath = flightNamePath.nextElementSibling.nextElementSibling;
      let airportDetails = flightNamePath.nextElementSibling.firstElementChild;
      let airportCodeDetails = flightNamePath.nextElementSibling.lastElementChild;
     
    const bookingTicketObj = {
     flight : flightNamePath.querySelector('p').innerText,
     departure_time : flightNamePath.nextElementSibling.firstElementChild.innerText,
     departure_city : flightNamePath.nextElementSibling.lastElementChild.innerText,
     flight_duration : flightDetailPath.querySelector('p').innerText,
     ticket_price : e.path[1].lastElementChild.previousElementSibling.querySelector('p').innerText,
     arrival_time : flightDetailPath.nextElementSibling.firstElementChild.querySelector('p').innerText,
     arrival_city : flightDetailPath.nextElementSibling.lastElementChild.innerText,
     departure_airport : airportDetails.nextElementSibling.innerText,
     arrival_airport : airportDetails.nextElementSibling.nextElementSibling.innerText,
     arrive_city_code : airportCodeDetails.previousElementSibling.innerText,
     depart_city_code : airportCodeDetails.previousElementSibling.previousElementSibling.innerText
     
   }

 bookingArray.push(bookingTicketObj)

localStorage.setItem("booking", JSON.stringify(bookingArray));  

window.location.href = "../html/booking.html";
   }
 
}

// function tripTypeOptions(){
//    tripWayOptions.classList.remove('hidden');
// }

function tripWayOptionClickFuncion(e){
   tripWayDynamic.innerText = e.target.innerText;
   tripWayOptions.classList.add('hidden');


}

flightInfoDisplay.addEventListener('click', bookingTicket);

// tripTypeWay.addEventListener('click', tripTypeOptions);

tripWayOptionClick.addEventListener('click', tripWayOptionClickFuncion)

// =====================================================
async function searchFunctionFlight(flightName){

   // cityText();
   // departCityText();

   



   let data = await fetchData(api_url);

data.data.flights.map((val)=>{

   if(flightName.length>0){
   if(val.flight==flightName){
      displaySearchResult(val);
   }
}else{

      displaySearchResult(val);
   
}
})

   
}




document.getElementById('air_india').addEventListener('click',async ()=>{

      let airIndia = document.getElementById("air_india");


if (airIndia.checked == true){
   let flightName="air india"
   flightInfoDisplay.innerHTML="";
searchFunctionFlight(flightName);
      }

})


document.getElementById('akasa_air').addEventListener('click',async ()=>{

      let akasa = document.getElementById("akasa_air");


if (akasa.checked == true){
   let flightName="akasa"
   flightInfoDisplay.innerHTML="";
searchFunctionFlight(flightName);

} 
        
      
})
document.getElementById('emirates').addEventListener('click',async ()=>{

      let emirates= document.getElementById("emirates");


if (emirates.checked == true){
   let flightName="emirates"
   flightInfoDisplay.innerHTML="";
searchFunctionFlight(flightName);

} 
        
      
})
document.getElementById('indigo').addEventListener('click',async ()=>{

      let indigo = document.getElementById("indigo");


if (indigo.checked == true){
   let flightName="indigo"
   flightInfoDisplay.innerHTML="";
searchFunctionFlight(flightName);

} 
        
      
})
document.getElementById('spice_jet').addEventListener('click',async ()=>{

      let spiceJet = document.getElementById("spice_jet");


if (spiceJet.checked == true){
   let flightName="spice jet"
   flightInfoDisplay.innerHTML="";
searchFunctionFlight(flightName);

} 
        
      
})
document.getElementById('vistara').addEventListener('click',async ()=>{

      let vistara = document.getElementById("vistara");


if (vistara.checked == true){
   let flightName="vistara"
   flightInfoDisplay.innerHTML="";
searchFunctionFlight(flightName);

} 
        
      
})
document.getElementById('all_flights').addEventListener('click',async ()=>{

  

searchFunction();
        
      
})









