let theYear=document.getElementById("year");
let theMonth=document.getElementById("month");
let theDay=document.getElementById("day");
let theCalcAgeBtn=document.querySelector(".calc__Age");
let theR_Year=document.querySelector(".years span");
let theR_Month=document.querySelector(".months span");
let theR_Days=document.querySelector(".days span");
let theError=document.querySelector(".error");
let theResetBtn=document.querySelector(".reset");


theCalcAgeBtn.onclick=(e) => {
    theR_Year.innerHTML="- -";
    theR_Month.innerHTML="- -";
    theR_Days.innerHTML="- -";
    theYear.innerHTML=e.target.value;
    theMonth.innerHTML=e.target.value;
    theDay.innerHTML=e.target.value;
    let date=new Date();

    if(theYear.value==""||theMonth.value==""||theDay.value=="") {
        theError.innerHTML="Input Fields are required";
    } else {
        theR_Year.innerHTML=date.getFullYear()-theYear.value;
        theR_Month.innerHTML=`${(date.getMonth()+1)-theMonth.value}`;
        theR_Days.innerHTML=`${date.getDate()-theDay.value}`;
    }
};

theResetBtn.onclick=() => {
    theYear.value="";
    theMonth.value="";
    theDay.value="";
};
