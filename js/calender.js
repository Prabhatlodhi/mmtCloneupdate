const date = new Date();
const weekday = document.querySelector('.weekdays')

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysName= [
    "Sunday",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ]

  let dateObj={
    "January":31,
    "February":28,
    "March":31,
    "April":30,
    "May":31,
    "June":30,
    "July":31,
    "August":31,
    "September":30,
    "October":31,
    "November":30,
    "December":31,
  }

  let totalDaySum=1;
  let day;


  

  

  document.querySelector(".date h1").innerHTML = months[date.getMonth()]+" "+2023;
 

  // document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  monthDays.addEventListener('click', (e)=>{
    var path = e.path || (e.composedPath && e.composedPath());
    if(months[date.getMonth()]=="January"){
      totalDaySum=e.target.innerText;
    }
    else if(months[date.getMonth()]=="February"){
      totalDaySum=Number(e.target.innerText)+31;
    }
    else if(months[date.getMonth()]=="March"){
      totalDaySum=Number(e.target.innerText)+59;
    }
    else if(months[date.getMonth()]=="April"){
      totalDaySum=Number(e.target.innerText)+90;
    }
    else if(months[date.getMonth()]=="May"){
      totalDaySum=Number(e.target.innerText)+120;
    }
      
    else if(months[date.getMonth()]=="June"){
      totalDaySum=Number(e.target.innerText)+151;
      console.log(months[date.getMonth()])
    }
      
    else if(months[date.getMonth()]=="July"){
      totalDaySum=Number(e.target.innerText)+181;
    }
      
    else if(months[date.getMonth()]=="August"){
      totalDaySum=Number(e.target.innerText)+212;
    }
      
    else if(months[date.getMonth()]=="September"){
      totalDaySum=Number(e.target.innerText)+242;
    }
      
    else if(months[date.getMonth()]=="October"){
      totalDaySum=Number(e.target.innerText)+272;
    }
      
    else if(months[date.getMonth()]=="November"){
      totalDaySum=Number(e.target.innerText)+303;
    }
      
    else if(months[date.getMonth()]=="December"){
      totalDaySum=Number(e.target.innerText)+336;
    }
      
    
    
    
    
    
    if(totalDaySum%7==1){
        day="Sun"
    
      }else if(totalDaySum%7==2){
        day="Mon"
      }
      else if(totalDaySum%7==3){
        day="Tue"
      }
      else if(totalDaySum%7==4){
        day="Wed"
      }
      else if(totalDaySum%7==5){
        day="Thu"
      }
      else if(totalDaySum%7==6){
        day="Fri"
      }
      else if(totalDaySum%7==0){
        day="Sat"
      }

      console.log(day)
      console.log(e.target.innerText)


    
  })
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  console.log(date)

  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
