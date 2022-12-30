let bookingTicketDetails = JSON.parse(localStorage.getItem("booking"));

let totalPassengers = localStorage.getItem("sum") ?? 0;
let totalAdults = localStorage.getItem("adults") ?? 0;
let totalChildren = localStorage.getItem("children") ?? 0;
let totalInfants = localStorage.getItem("infants") ?? 0;



let bookingDetails = bookingTicketDetails[bookingTicketDetails.length-1];

const cityDeparture = document.querySelector('.city_departure');
const cityArrival = document.querySelector('.city_arrival');
const cityDeparture1 = document.querySelector('.city_departure1');
const cityArrival1 = document.querySelector('.city_arrival1');
const flightName = document.querySelector('.flight_name');
const tripDuration = document.querySelector('.trip-duration');
const tripDuration1 = document.querySelector('.trip-duration1');
const departFlightTime = document.querySelector('.depart_flight_time')
const arriveFlightTime = document.querySelector('.arrive_flight_time');
const departureAirportName = document.querySelector('.departure_airport_name');
const arrivalAirportName = document.querySelector('.arrival_airport_name');
const ticketPrice1 = document.querySelector('.basefare-price1');
const ticketPrice2 = document.querySelector('.basefare-price2');
const ticketPrice3 = document.querySelector('.basefare-price3');;
const ticketPrice4 = document.querySelector('.basefare-price4');;
const ticketPrice5 = document.querySelector('.basefare-price5');;
const ticketPriceAdultsTotal = document.querySelector('.basefare-price_adults_total');
const ticketPriceChildrenTotal = document.querySelector('.basefare-price_children_total');
const ticketPriceInfantsTotal = document.querySelector('.basefare-price_infants_total');
const totalNumberAdults =  document.querySelector('.total_no_adults');
const totalNumberChildren =  document.querySelector('.total_no_children');
const totalNumberInfants =  document.querySelector('.total_no_infants');

const departCityCode = document.querySelector('.depart_city_code');
const arriveCityCode = document.querySelector('.arrive_city_code');
const numberOfPassenger = document.querySelector('.total_passenger');
const promoCodeButton = document.querySelector('.promo_btn');
const promoCodeMessage = document.querySelector('.promo_message');
const discountSection = document.querySelector('.fee--surcharge1');

const discountAmount1 = document.querySelector('.surcharge-price1');
const discountAmount2 = document.querySelector('.surcharge-price2');

const bookingDayName = document.querySelector('.booking_day_name');
const bookingMonth = document.querySelector('.booking_month');
const bookingYear = document.querySelector('.booking_year');
const bookingDay = document.querySelector('.booking_day');

let selectedDayForBooking = localStorage.getItem("day");
let selectedMonthForBooking = localStorage.getItem("month");
let selectedYearForBooking = localStorage.getItem("year");
let selectDayNameForBooking = localStorage.getItem("name_of_day");

bookingDayName.innerText = selectDayNameForBooking;
bookingMonth.innerText = selectedMonthForBooking;
bookingYear.innerText = selectedYearForBooking;
bookingDay.innerText = selectedDayForBooking


let price = bookingDetails.ticket_price;
let price2=Number(price.slice(-4));

// let totalPassengerAmount = totalPassengers * price2;
// let totalAdultsAmount = totalAdults * price2;
// let totalChildrenAmount = totalChildren * price2;
// let totalInfantsAmount = totalInfants * Math.floor(price2/2);
// let total=totalPassengerAmount+973;



cityDeparture.innerText = bookingDetails.departure_city;
cityArrival.innerText = bookingDetails.arrival_city;
cityDeparture1.innerText = bookingDetails.departure_city;
cityArrival1.innerText = bookingDetails.arrival_city;
flightName.innerText = bookingDetails.flight;
tripDuration.innerText = bookingDetails.flight_duration;
tripDuration1.innerText = bookingDetails.flight_duration;
departFlightTime.innerText = bookingDetails.departure_time;
arriveFlightTime.innerText = bookingDetails.arrival_time;
departureAirportName.innerText = bookingDetails.departure_airport;
arrivalAirportName.innerText = bookingDetails.arrival_airport;
departCityCode.innerText = bookingDetails.depart_city_code;
arriveCityCode.innerText = bookingDetails.arrive_city_code;
// numberOfPassenger.innerText = totalPassengers;

let tripTime = bookingDetails.flight_duration;
localStorage.setItem("duration", tripTime);

let tripDepartTime = bookingDetails.departure_time;
localStorage.setItem("tripDepartTime", tripDepartTime)

let tripArriveTime = bookingDetails.arrival_time;
localStorage.setItem("tripArriveTime", tripArriveTime)

totalNumberAdults.innerText = totalAdults;
totalNumberChildren.innerText = totalChildren;
totalNumberInfants.innerText = totalInfants;



let totalAmountOfAdults = totalAdults * price2;
let totalAmountOfChildren = totalChildren * price2;
let totalAmountOfInfants = totalInfants * Math.floor(price2/2);
let discount;

let basePrice = totalAmountOfAdults + totalAmountOfChildren + totalAmountOfInfants;

ticketPriceAdultsTotal.innerText = totalAmountOfAdults;
ticketPriceChildrenTotal.innerText = totalAmountOfChildren;
ticketPriceInfantsTotal.innerText = totalAmountOfInfants;


ticketPrice1.innerText = basePrice;
ticketPrice2.innerText = price2;
ticketPrice3.innerText = price2;
ticketPrice4.innerText = Math.floor(price2/2);
ticketPrice5.innerText = basePrice + 973;










let dynamicImageName ={
      
    "air india": 1,
    "akasa": 2,
    "emirates": 3,
    "indigo" : 4,
    "spice jet":5,
    "vistara":6
 }

 let image_number = dynamicImageName[flightName.innerText]

 document.querySelector('.flight-img').src=`../images/ailrlines/airline-${image_number}.jpg`;
 document.querySelector('.flight-img1').src=`../images/ailrlines/airline-${image_number}.jpg`;
 
let radioCheck=false;
 document.getElementById('promo_code_1').addEventListener('click', ()=>{
  discount=550;
  discountSection.classList.remove('displayn');
    if(discount!==undefined){
    promoCodeMessage.style.display="block";
    setTimeout(()=>{
        promoCodeMessage.style.display="none";
    },2000)
  }
    discountAmount1.innerText = discount;
  discountAmount2.innerText = discount;
  ticketPrice5.innerText = basePrice + 973-discount;

  if(document.getElementById('promo_code_1').checked){
    localStorage.setItem("promo1", "true")
    localStorage.setItem("promo2", "false")
    localStorage.setItem("promo3", "false")
    localStorage.setItem("promo4", "false")
   }

   radioCheck = true;

  localStorage.setItem("total_amount", ticketPrice5.innerText )
 })




 document.getElementById('promo_code_2').addEventListener('click', ()=>{
  discount=850;
  discountSection.classList.remove('displayn');
    if(discount!==undefined){
    promoCodeMessage.style.display="block";
    setTimeout(()=>{
        promoCodeMessage.style.display="none";
    },2000)
  }
    discountAmount1.innerText = discount;
  discountAmount2.innerText = discount;
  ticketPrice5.innerText = basePrice + 973-discount;

  if(document.getElementById('promo_code_2').checked){
    localStorage.setItem("promo1", "false")
    localStorage.setItem("promo2", "true")
    localStorage.setItem("promo3", "false")
    localStorage.setItem("promo4", "false")
   }
   
   radioCheck = true;
  localStorage.setItem("total_amount", ticketPrice5.innerText )
 })

 document.getElementById('promo_code_3').addEventListener('click', ()=>{
  discount=1050;
  discountSection.classList.remove('displayn');
    if(discount!==undefined){
    promoCodeMessage.style.display="block";
    setTimeout(()=>{
        promoCodeMessage.style.display="none";
    },2000)
  }
    discountAmount1.innerText = discount;
  discountAmount2.innerText = discount;
  ticketPrice5.innerText = basePrice + 973-discount;

  if(document.getElementById('promo_code_3').checked){
    localStorage.setItem("promo1", "false")
    localStorage.setItem("promo2", "false")
    localStorage.setItem("promo3", "true")
    localStorage.setItem("promo4", "false")
   }
   radioCheck = true;
  localStorage.setItem("total_amount", ticketPrice5.innerText )
 })

 document.getElementById('promo_code_4').addEventListener('click', ()=>{
  discount=1250;
  discountSection.classList.remove('displayn');
    if(discount!==undefined){
    promoCodeMessage.style.display="block";
    setTimeout(()=>{
        promoCodeMessage.style.display="none";
    },2000)
  }
    discountAmount1.innerText = discount;
  discountAmount2.innerText = discount;
  ticketPrice5.innerText = basePrice + 973-discount;

  if(document.getElementById('promo_code_4').checked){
    localStorage.setItem("promo1", "false")
    localStorage.setItem("promo2", "false")
    localStorage.setItem("promo3", "false")
    localStorage.setItem("promo4", "true")
   }
   radioCheck = true;
  localStorage.setItem("total_amount", ticketPrice5.innerText )
 })


 if(radioCheck==false){
  localStorage.setItem("promo1", "false")
  localStorage.setItem("promo2", "false")
  localStorage.setItem("promo3", "false")
  localStorage.setItem("promo4", "false")
 }

 







 


    
 

