//Pseudo
    //display the current day at the top of the page
    //create time blcoks
    //color code the time blocks
        //figure out what is the time now.
        //compare the thime with each block
        //color the blocks accordingly

    //handle save
        //set up a js representation of the schedule
        //event listner
        //handle the update
        //sync with stroage



console.log(moment().format('dddd, MMM Do YYYY'));
var currentD = document.getElementById('currentDay');
currentD.textContent = moment().format('dddd, MMM Do YYYY');
var now = new Date().getHours();
// function createTimeBlocks(){
// // 9:00 ~ 17:00
// for (let i = 9; i < 17; i++) {
//     console.log(i+ ':00')

//     //generateOneBlock(timeSlot)
// }
// }

// createTimeBlocks();

// function saveToSomeSlot(){
//     //if first time user init the db
//     //if not get the existing db
//     if(!localStorage.getItem('Schedule')){
//         localStorage.setItem('Schedule', 'First time user, welcome');
//     }else{

//     }

//     alert(`here is the schedule for today: ${localStorage.getItem('Schedule')}`)
//     const choice = prompt('Which entry would you like to update?')
//     localStorage.setItem('Schedule', choice)
    
//     // update the entry
// }

   
    function colorChange(){
        var rightNow = moment().hour();
        var nineAMEl = document.getElementById('nineAM');
        var tenAMEl = document.getElementById('tenAM');
        var elevenAMEl = document.getElementById('elevenAM');
        var twelveAMEl = document.getElementById('twelveAM');
        var onePMEl = document.getElementById('onePM');
        var twoPMEl = document.getElementById('twoPM');
        var threePMEl = document.getElementById('threePM');
        var fourPMEl = document.getElementById('fourPM');
        var fivePMEl = document.getElementById('fivePM');
        
        console.log(rightNow);
            if (9 > rightNow) {
                nineAMEl.classList.add('past');
            } else if(9 === rightNow){
                nineAMEl.classList.add('present');
            } else{
                nineAMEl.classList.add ('future');   
            }
        
            if (10 > rightNow) {
                tenAMEl.classList.add('past');
            } else if(10 === rightNow){
                tenAMEl.classList.add('present');
            } else{
                tenAMEl.classList.add ('future');   
            }
        
            if (11 > rightNow) {
                elevenAMEl.classList.add('past');
            } else if(11 === rightNow){
                elevenAMEl.classList.add('present');
            } else{
                elevenAMEl.classList.add ('future');   
            }
        
            if (12 > rightNow) {
                twelveAMEl.classList.add('past');
            } else if(12 === rightNow){
                twelveAMEl.classList.add('present');
            } else{
                twelveAMEl.classList.add ('future');   
            }    
        
            if (13 > rightNow) {
                onePMEl.classList.add('past');
            } else if(12 === rightNow){
                onePMEl.classList.add('present');
            } else{
                onePMEl.classList.add ('future');   
            }   

            if (14 > rightNow) {
                twoPMEl.classList.add('past');
            } else if(12 === rightNow){
                twoPMEl.classList.add('present');
            } else{
                twoPMEl.classList.add ('future');   
            }   

            if (15 > rightNow) {
                threePMEl.classList.add('past');
            } else if(12 === rightNow){
                threePMEl.classList.add('present');
            } else{
                threePMEl.classList.add ('future');   
            }  


            if (16 > rightNow) {
                fourPMEl.classList.add('past');
            } else if(12 === rightNow){
                fourPMEl.classList.add('present');
            } else{
                fourPMEl.classList.add ('future');   
            }  

            if (17 > rightNow) {
                fivePMEl.classList.add('past');
            } else if(12 === rightNow){
                fivePMEl.classList.add('present');
            } else{
                fivePMEl.classList.add ('future');   
            }  
        }

        colorChange();


$(document).ready(function () {
    $(".saveBtn").on("click", eventhandler)});

function eventhandler(event){
    console.log("Yes")
  var text =event.target.previousSibling.value;
  var time = event.target.parentElement.id;
  console.log("Time ",time);
  localStorage.setItem(time, text);

}

if(localStorage.nineAM !== undefined){
var nineAM = localStorage.getItem("nineAM"); 
document.querySelector("#nineAM textarea:nth-child(2)").value = nineAM;
}


if(localStorage.tenAM !== undefined){
var tenAM = localStorage.getItem("tenAM"); 
document.querySelector("#tenAM textarea:nth-child(2)").value = tenAM;
}

if(localStorage.elevenAM !== undefined){
var elevenAM = localStorage.getItem("elevenAM"); 
document.querySelector("#elevenAM textarea:nth-child(2)").value = elevenAM;
}

if(localStorage.twelveAM !== undefined){
var twelveAM = localStorage.getItem("twelveAM"); 
document.querySelector("#twelveAM textarea:nth-child(2)").value = twelveAM;
}

if(localStorage.onePM !== undefined){
var onePM = localStorage.getItem("onePM"); 
document.querySelector("#onePM textarea:nth-child(2)").value = onePM;
}

if(localStorage.twoPM !== undefined){
var twoPM = localStorage.getItem("twoPM"); 
document.querySelector("#twoPM textarea:nth-child(2)").value = twoPM;
}

if(localStorage.threePM !== undefined){
var threePM = localStorage.getItem("threePM"); 
document.querySelector("#threePM textarea:nth-child(2)").value = threePM;
}

if(localStorage.fourPM !== undefined){
var fourPM = localStorage.getItem("fourPM"); 
document.querySelector("#fourPM textarea:nth-child(2)").value = fourPM;
}

if(localStorage.fivePM !== undefined){
var fivePM = localStorage.getItem("fivePM"); 
document.querySelector("#fivePM textarea:nth-child(2)").value = fivePM;
}


















console.log(nineAM)
