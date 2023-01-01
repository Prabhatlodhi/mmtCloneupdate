resetLocalStorage();

const travellerNumber = document.querySelector('.travel-number');

const searchButton = document.querySelector('.search_fornt_page');


let theEnd = 0,
  navBar = document.querySelector("#Header_Id");



window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset;

  if (scrollTop > 0) {
    navBar.style.top = "0px";
  } else {
    navBar.style.top = "-70px";
  }
  theEnd = scrollTop;
});

function CopyFrag() {}

// const AllImages = document.querySelector('#All_icon')

// AllImages.addEventListener('click', xxp)

// function xxp(e){


//     if(e.target.getAttributeNode('src').value == './icons/allnavicon/icons8-airplane-take-off-50.png'){
//         e.target.setAttribute("src", "./images/homepageallimages/blueImages/icons8-airplane-take-off-50blue.png");

//     }else if(e.target.getAttributeNode('src').value == './icons/allnavicon/icons8-hotel-50.png'){
//         e.target.setAttribute("src", "./images/homepageallimages/blueImages/icons8-hotel-50b.png");

//     }
// }



// Defining async function
//FetchData to AirportNameData

async function fetchData(query="USA") {
  
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


function CreateSuggestionItem(value){

  const FragmentElements = document.createDocumentFragment();


  const div1 = document.createElement("div");
  div1.setAttribute("class", "flex space_between airline_one");

  const div2 = document.createElement("div");
  div2.setAttribute("class", "flex");

  const div3 = document.createElement("div");
  div3.setAttribute("class", "plane_icon");

  const div4 = document.createElement("div");
  div4.setAttribute("class", "Airport_Name");

  const div5 = document.createElement("div");
  div5.setAttribute("class", "Div_Five");

  const div6 = document.createElement("div");
  div6.setAttribute("class", "Div_Six");

  const Ione = document.createElement("i");
  Ione.setAttribute("class", "fa fa-plane");
  Ione.style.fontSize = "22px";

  const HeadThree = document.createElement("h3");
  HeadThree.textContent = `${value.city_name}`;

  const ParaElement = document.createElement("p");
  ParaElement.textContent = `${value.airport_name}`;

  const HeadFive = document.createElement("h5");
  HeadFive.setAttribute("class", "HeadFive_value");
  HeadFive.textContent = `${value.IATA_code}`;

  div1.append(div2);
  div2.append(div3);
  div3.append(Ione);
  div4.append(HeadThree);
  div4.append(ParaElement);
  div2.append(div6);
  div5.append(HeadFive);
  div1.append(div5);

  div6.append(div4);
  div6.append(div5);

  FragmentElements.append(div1);


ShowMat.append(FragmentElements);

}

function CreateSuggestionItem1(value){

  const FragmentElements = document.createDocumentFragment();


  const div1 = document.createElement("div");
  div1.setAttribute("class", "flex space_between airline_one_2");

  const div2 = document.createElement("div");
  div2.setAttribute("class", "flex");

  const div3 = document.createElement("div");
  div3.setAttribute("class", "plane_icon");

  const div4 = document.createElement("div");
  div4.setAttribute("class", "Airport_Name");

  const div5 = document.createElement("div");
  div5.setAttribute("class", "Div_Five");

  const div6 = document.createElement("div");
  div6.setAttribute("class", "Div_Six");

  const Ione = document.createElement("i");
  Ione.setAttribute("class", "fa fa-plane");
  Ione.style.fontSize = "22px";

  const HeadThree = document.createElement("h3");
  HeadThree.textContent = `${value.city_name}`;

  const ParaElement = document.createElement("p");
  ParaElement.textContent = `${value.airport_name}`;

  const HeadFive = document.createElement("h5");
  HeadFive.setAttribute("class", "HeadFive_value");
  HeadFive.textContent = `${value.IATA_code}`;

  div1.append(div2);
  div2.append(div3);
  div3.append(Ione);
  div4.append(HeadThree);
  div4.append(ParaElement);
  div2.append(div6);
  div5.append(HeadFive);
  div1.append(div5);

  div6.append(div4);
  div6.append(div5);

  FragmentElements.append(div1);


ShowMat1.append(FragmentElements);

}

const FlightFrom = document.querySelector("#flight_from");
const FlightTo = document.querySelector("#flight_to");
const FlightSearchBox = document.querySelector(".Searching_box");
const FlightSearchBox1 = document.querySelector(".Searching_box1");
const ShowMat = document.querySelector("#All_data");
const ShowMat1 = document.querySelector("#All_data1");

FlightFrom.addEventListener("click", async (e) => {
  e.stopPropagation();

  //Console coming two times**************************************

   FlightSearchBox.classList.remove("hide_element");
  let data = await fetchData();

   

  //Pick five data and render (for loop or slice)

  data.data.airports.forEach((airport) => {
    CreateSuggestionItem(airport)
  })

   


});


FlightTo.addEventListener("click", async (e) => {
  e.stopPropagation();

  //Console coming two times**************************************

  FlightSearchBox1.classList.remove("hide_element");
  let data = await fetchData();

   

  //Pick five data and render (for loop or slice)

  data.data.airports.forEach((airport) => {
    CreateSuggestionItem1(airport)
  })

   


});




const Input_Box = document.querySelector("#input_box_from");
const Input_Box1 = document.querySelector("#input_box_from1");

Input_Box.addEventListener("input", Search_Handle);
Input_Box1.addEventListener("input", Search_Handle1);

async function Search_Handle(){
  ShowMat.innerHTML = "";


  let data = await fetchData(Input_Box.value);

  data.data.airports.forEach((value) => {
    if (value.city_name.includes(Input_Box.value)) {
    CreateSuggestionItem(value)
    }
  })

   
}
async function Search_Handle1(){

  ShowMat1.innerHTML = "";

  let data = await fetchData(Input_Box1.value);




  data.data.airports.forEach((value) => {
    
 
    if (value.city_name.includes(Input_Box1.value)) {
    CreateSuggestionItem1(value)
    }
  })

   
}

//Testing

let testingVariable;


ShowMat.addEventListener('click',(e)=>{
  // if()
  testingVariable = e;
  let vartest = e.path
  for(let i=0; i<e.path.length; i++)
    
    if(vartest[i].classList.contains('airline_one')){
      document.getElementById('City-Name').innerText = vartest[i].querySelector('h3').innerText;
      document.getElementById('Airport-Code').innerText = vartest[i].querySelector('p').innerText;
      document.getElementById('Airport-Name').innerText = vartest[i].querySelector('h5').innerText;
      check1=document.getElementById('City-Name').innerText
      FlightSearchBox.classList.add("hide_element");

      let departureCity = vartest[i].querySelector('h3').innerText;
      let departureCityAirport = vartest[i].querySelector('p').innerText;
      let departureCityCode = vartest[i].querySelector('h5').innerText;
      localStorage.setItem("cityDeparture", departureCity)
      localStorage.setItem("airportDeparture", departureCityAirport)
      localStorage.setItem("airportDepartureCode", departureCityCode)
    
    }


   
  

})
ShowMat1.addEventListener('click',(e)=>{



 
  testingVariable = e;
  let vartest1=e.path;
  for(let i=0; i<e.path.length; i++)

    if(vartest1[i].classList.contains('airline_one_2')){
       
      
      document.getElementById('City-Name1').innerText = vartest1[i].querySelector('h3').innerText;
      document.getElementById('Airport-Code1').innerText = vartest1[i].querySelector('p').innerText;
      document.getElementById('Airport-Name1').innerText = vartest1[i].querySelector('h5').innerText;

      check2 = document.getElementById('City-Name1').innerText


      FlightSearchBox1.classList.add("hide_element");

      let arrivalCity = vartest1[i].querySelector('h3').innerText;
      let arrivalCityAirport = vartest1[i].querySelector('p').innerText;
      let arrivalCityCode = vartest1[i].querySelector('h5').innerText;


      localStorage.setItem("cityLand", arrivalCity)
      localStorage.setItem("airportLand", arrivalCityAirport)
      localStorage.setItem("codeLand", arrivalCityCode)

    }


   

 
})


// ====================CALENDER VISIBILITY============================

const Box_flightto = document.querySelector('#Section_to');
const Main_box = document.querySelector('#Main_calender');
const calendar_days = document.querySelector('.calendar-days');
const monthDay = document.querySelector('.month_day');
const monthName = document.querySelector('.month_name');
const yearNumber = document.querySelector('.year_number');
const yearDisplay = document.querySelector('#year');

Box_flightto.addEventListener('click', hideelements)

function hideelements(){
   
   
    Main_box.style.display="block";
  
  
  
}


 

// =====================JS FOR CALENDER STARTS HERE=======================
const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};
let calendar = document.querySelector('.calendar');
const month_names = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
let month_picker = document.querySelector('#month-picker');
const dayTextFormate = document.querySelector('.day-text-formate');
const timeFormate = document.querySelector('.time-formate');
const dateFormate = document.querySelector('.date-formate');

month_picker.onclick = () => {
  month_list.classList.remove('hideonce');
  month_list.classList.remove('hide');
  month_list.classList.add('show');
  dayTextFormate.classList.remove('showtime');
  dayTextFormate.classList.add('hidetime');
  timeFormate.classList.remove('showtime');
  timeFormate.classList.add('hideTime');
  dateFormate.classList.remove('showtime');
  dateFormate.classList.add('hideTime');

};





const generateCalendar = (month, year) => {

  calendar_days.innerHTML = '';
  let calendar_header_year = document.querySelector('#year');
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  
  let currentDate = new Date();

  
  month_picker.innerHTML = month_names[month];
  
  calendar_header_year.innerHTML = year;
  
  let first_day = new Date(year, month);


for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {

    let day = document.createElement('div');
    day.setAttribute('class', "day_number")

    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;

      // if (i - first_day.getDay() + 1 === currentDate.getDate() &&
      //   year === currentDate.getFullYear() &&
      //   month === currentDate.getMonth()
      // ) {
      //   day.classList.add('current-date');
      // }
    }
    calendar_days.appendChild(day);

  }
};






let month_list = calendar.querySelector('.month-list');
month_names.forEach((e, index) => {
  let month = document.createElement('div');


  
  month.innerHTML = `<div class="month_value">${e}</div>`;

  month_list.append(month);
  month.onclick = () => {
    currentMonth.value = index;
    generateCalendar(currentMonth.value, currentYear.value);
    month_list.classList.replace('show', 'hide');
    dayTextFormate.classList.remove('hideTime');
    dayTextFormate.classList.add('showtime');
    timeFormate.classList.remove('hideTime');
    timeFormate.classList.add('showtime');
    dateFormate.classList.remove('hideTime');
    dateFormate.classList.add('showtime');
  };
});



(function () {
  month_list.classList.add('hideonce');
})();

document.querySelector('.month-list').addEventListener("click", (e)=>{
  if(e.target.classList.contains("month_value")){
   let month_view = e.target.innerText;
   monthName.innerText = month_view;
   localStorage.setItem("month", month_view);
  }
})

document.querySelector('#pre-year').onclick = () => {
  --currentYear.value;

  yearNumber.innerText = yearDisplay.innerText-1;
  let yearInNumbers = yearNumber.innerText;
  localStorage.setItem("year",yearInNumbers);
 
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector('#next-year').onclick = () => {
  ++currentYear.value;
  yearNumber.innerText = Number(yearDisplay.innerText)+1 ;
  let yearInNumbers = yearNumber.innerText;
  localStorage.setItem("year",yearInNumbers);
  
  generateCalendar(currentMonth.value, currentYear.value);

};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector('.time-formate');
const todayShowDate = document.querySelector('.date-formate');

const currshowDate = new Date();
const showCurrentDateOption = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
const currentDateFormate = new Intl.DateTimeFormat(
  'en-US',
  showCurrentDateOption
).format(currshowDate);
todayShowDate.textContent = currentDateFormate;
setInterval(() => {
  const timer = new Date();
  const option = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
  let time = `${`${timer.getHours()}`.padStart(
    2,
    '0'
  )}:${`${timer.getMinutes()}`.padStart(
    2,
    '0'
  )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
  todayShowTime.textContent = formateTimer;
}, 1000);

const dayName = document.querySelector(".calendar-body");
const dayToDisplay = document.querySelector(".day_to_display");

let dayNameArray=[];

function dayNameValue(e){
  if(e.target.classList.contains("days_to_select")){
    let nameOfDay = e.target.innerText;
    dayToDisplay.innerText = nameOfDay;
    localStorage.setItem("name_of_day", nameOfDay); 

    if(dayNameArray.length>0){
      let rCol = dayNameArray.shift();
      rCol.classList.remove("current-day-name");
     
    }
    dayNameArray.push(e.target);
  }
  
  dayNameArray.forEach((e1)=>e1.classList.add("current-day-name"));

}




dayName.addEventListener("click", dayNameValue);


let dayArray=[];

calendar_days.addEventListener('click', (e)=>{
  if(e.target.classList.contains('day_number')){
    day=e.target.innerText;
    localStorage.setItem("day", day);


    monthDay.innerText = day;

    if(dayArray.length>0){
      let rCol = dayArray.shift();
      rCol.classList.remove("current-date");
    }
    dayArray.push(e.target);
  }
  
    dayArray.forEach((e1)=>e1.classList.add("current-date"));

    if(localStorage.getItem("name_of_day")==null){

      const dateError = document.querySelector('.error_date');

      dateError.innerText = "*select name of day";
      dateError.style.display = "block";
      setTimeout(()=>{
        dateError.style.display = "none";
      },2000)
      return;
    }
    if(localStorage.getItem("month")==null){
      const dateError = document.querySelector('.error_date');

      dateError.innerText = "*select month";
      dateError.style.display = "block";
      setTimeout(()=>{
        dateError.style.display = "none";
      },2000)
      return;
    }
    if(localStorage.getItem("year")==null){
      const dateError = document.querySelector('.error_date');

      dateError.innerText = "*select year";
      dateError.style.display = "block";
      setTimeout(()=>{
        dateError.style.display = "none";
      },2000)
      return;
    }


    Main_box.style.display="none";
})

 
// =====================JS FOR CALENDER ENDS HERE=======================


 

function resetLocalStorage(){
  localStorage.removeItem("cityDeparture")
  localStorage.removeItem("infants")
  localStorage.removeItem("day")
  localStorage.removeItem("month")
  localStorage.removeItem("mobile")
  localStorage.removeItem("passengerList")
  localStorage.removeItem("children")
  localStorage.removeItem("airportDepartureCode")
  localStorage.removeItem("booking")
  localStorage.removeItem("promo1")
  localStorage.removeItem("promo2")
  localStorage.removeItem("promo3")
  localStorage.removeItem("promo4")
  localStorage.removeItem("sum")
  localStorage.removeItem("name_of_day")
  localStorage.removeItem("finalTotal")
  localStorage.removeItem("total_amount")
  localStorage.removeItem("airportLand")
  localStorage.removeItem("year")
  localStorage.removeItem("adults")
  localStorage.removeItem("cityLand")
  localStorage.removeItem("airportDeparture")
  localStorage.removeItem("email")
  localStorage.removeItem("codeLand")
  localStorage.removeItem("class")
  localStorage.removeItem("duration")
  localStorage.removeItem("tripDepartTime")
  localStorage.removeItem("tripArriveTime")
}


// =====================JS FOR CALENDER ENDS HERE=======================
 
