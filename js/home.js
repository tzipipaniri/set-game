//מערך הקלפים
let arrCard = [
  { shape: "diamond", fill: "open", color: "blue", amount: 1, img: "../images/playing cards/diamond_open_blue.png" },
  { shape: "diamond", fill: "open", color: "blue", amount: 2, img: "../images/playing cards/diamond_open_blue.png" },
  { shape: "diamond", fill: "open", color: "blue", amount: 3, img: "../images/playing cards/diamond_open_blue.png" },
  { shape: "diamond", fill: "open", color: "green", amount: 1, img: "../images/playing cards/diamond_open_green.png" },
  { shape: "diamond", fill: "open", color: "green", amount: 2, img: "../images/playing cards/diamond_open_green.png" },
  { shape: "diamond", fill: "open", color: "green", amount: 3, img: "../images/playing cards/diamond_open_green.png" },
  { shape: "diamond", fill: "open", color: "red", amount: 1, img: "../images/playing cards/diamond_open_red.png" },
  { shape: "diamond", fill: "open", color: "red", amount: 2, img: "../images/playing cards/diamond_open_red.png" },
  { shape: "diamond", fill: "open", color: "red", amount: 3, img: "../images/playing cards/diamond_open_red.png" },
  { shape: "diamond", fill: "solid", color: "blue", amount: 1, img: "../images/playing cards/diamond_solid_blue.png" },
  { shape: "diamond", fill: "solid", color: "blue", amount: 2, img: "../images/playing cards/diamond_solid_blue.png" },
  { shape: "diamond", fill: "solid", color: "blue", amount: 3, img: "../images/playing cards/diamond_solid_blue.png" },
  { shape: "diamond", fill: "solid", color: "green", amount: 1, img: "../images/playing cards/diamond_solid_green.png" },
  { shape: "diamond", fill: "solid", color: "green", amount: 2, img: "../images/playing cards/diamond_solid_green.png" },
  { shape: "diamond", fill: "solid", color: "green", amount: 3, img: "../images/playing cards/diamond_solid_green.png" },
  { shape: "diamond", fill: "solid", color: "red", amount: 1, img: "../images/playing cards/diamond_solid_red.png" },
  { shape: "diamond", fill: "solid", color: "red", amount: 2, img: "../images/playing cards/diamond_solid_red.png" },
  { shape: "diamond", fill: "solid", color: "red", amount: 3, img: "../images/playing cards/diamond_solid_red.png" },
  { shape: "diamond", fill: "striped", color: "blue", amount: 1, img: "../images/playing cards/diamond_striped_blue.png" },
  { shape: "diamond", fill: "striped", color: "blue", amount: 2, img: "../images/playing cards/diamond_striped_blue.png" },
  { shape: "diamond", fill: "striped", color: "blue", amount: 3, img: "../images/playing cards/diamond_striped_blue.png" },
  { shape: "diamond", fill: "striped", color: "green", amount: 1, img: "../images/playing cards/diamond_striped_green.png" },
  { shape: "diamond", fill: "striped", color: "green", amount: 2, img: "../images/playing cards/diamond_striped_green.png" },
  { shape: "diamond", fill: "striped", color: "green", amount: 3, img: "../images/playing cards/diamond_striped_green.png" },
  { shape: "diamond", fill: "striped", color: "red", amount: 1, img: "../images/playing cards/diamond_striped_red.png" },
  { shape: "diamond", fill: "striped", color: "red", amount: 2, img: "../images/playing cards/diamond_striped_red.png" },
  { shape: "diamond", fill: "striped", color: "red", amount: 3, img: "../images/playing cards/diamond_striped_red.png" },





  { shape: "oval", fill: "open", color: "blue", amount: 1, img: "../images/playing cards/oval_open_blue.png" },
  { shape: "oval", fill: "open", color: "blue", amount: 2, img: "../images/playing cards/oval_open_blue.png" },
  { shape: "oval", fill: "open", color: "blue", amount: 3, img: "../images/playing cards/oval_open_blue.png" },
  { shape: "oval", fill: "open", color: "green", amount: 1, img: "../images/playing cards/oval_open_green.png" },
  { shape: "oval", fill: "open", color: "green", amount: 2, img: "../images/playing cards/oval_open_green.png" },
  { shape: "oval", fill: "open", color: "green", amount: 3, img: "../images/playing cards/oval_open_green.png" },
  { shape: "oval", fill: "open", color: "red", amount: 1, img: "../images/playing cards/oval_open_red.png" },
  { shape: "oval", fill: "open", color: "red", amount: 2, img: "../images/playing cards/oval_open_red.png" },
  { shape: "oval", fill: "open", color: "red", amount: 3, img: "../images/playing cards/oval_open_red.png" },

  { shape: "oval", fill: "solid", color: "blue", amount: 1, img: "../images/playing cards/oval_solid_blue.png" },
  { shape: "oval", fill: "solid", color: "blue", amount: 2, img: "../images/playing cards/oval_solid_blue.png" },
  { shape: "oval", fill: "solid", color: "blue", amount: 3, img: "../images/playing cards/oval_solid_blue.png" },
  { shape: "oval", fill: "solid", color: "green", amount: 1, img: "../images/playing cards/oval_solid_green.png" },
  { shape: "oval", fill: "solid", color: "green", amount: 2, img: "../images/playing cards/oval_solid_green.png" },
  { shape: "oval", fill: "solid", color: "green", amount: 3, img: "../images/playing cards/oval_solid_green.png" },
  { shape: "oval", fill: "solid", color: "red", amount: 1, img: "../images/playing cards/oval_solid_red.png" },
  { shape: "oval", fill: "solid", color: "red", amount: 2, img: "../images/playing cards/oval_solid_red.png" },
  { shape: "oval", fill: "solid", color: "red", amount: 3, img: "../images/playing cards/oval_solid_red.png" },

  { shape: "oval", fill: "striped", color: "blue", amount: 1, img: "../images/playing cards/oval_striped_blue.png" },
  { shape: "oval", fill: "striped", color: "blue", amount: 2, img: "../images/playing cards/oval_striped_blue.png" },
  { shape: "oval", fill: "striped", color: "blue", amount: 3, img: "../images/playing cards/oval_striped_blue.png" },
  { shape: "oval", fill: "striped", color: "green", amount: 1, img: "../images/playing cards/oval_striped_green.png" },
  { shape: "oval", fill: "striped", color: "green", amount: 2, img: "../images/playing cards/oval_striped_green.png" },
  { shape: "oval", fill: "striped", color: "green", amount: 3, img: "../images/playing cards/oval_striped_green.png" },
  { shape: "oval", fill: "striped", color: "red", amount: 1, img: "../images/playing cards/oval_striped_red.png" },
  { shape: "oval", fill: "striped", color: "red", amount: 2, img: "../images/playing cards/oval_striped_red.png" },
  { shape: "oval", fill: "striped", color: "red", amount: 3, img: "../images/playing cards/oval_striped_red.png" },





  { shape: "squiggle", fill: "open", color: "blue", amount: 1, img: "../images/playing cards/squiggle_open_blue.png" },
  { shape: "squiggle", fill: "open", color: "blue", amount: 2, img: "../images/playing cards/squiggle_open_blue.png" },
  { shape: "squiggle", fill: "open", color: "blue", amount: 3, img: "../images/playing cards/squiggle_open_blue.png" },
  { shape: "squiggle", fill: "open", color: "green", amount: 1, img: "../images/playing cards/squiggle_open_green.png" },
  { shape: "squiggle", fill: "open", color: "green", amount: 2, img: "../images/playing cards/squiggle_open_green.png" },
  { shape: "squiggle", fill: "open", color: "green", amount: 3, img: "../images/playing cards/squiggle_open_green.png" },
  { shape: "squiggle", fill: "open", color: "red", amount: 1, img: "../images/playing cards/squiggle_open_red.png" },
  { shape: "squiggle", fill: "open", color: "red", amount: 2, img: "../images/playing cards/squiggle_open_red.png" },
  { shape: "squiggle", fill: "open", color: "red", amount: 3, img: "../images/playing cards/squiggle_open_red.png" },

  { shape: "squiggle", fill: "solid", color: "blue", amount: 1, img: "../images/playing cards/squiggle_solid_blue.png" },
  { shape: "squiggle", fill: "solid", color: "blue", amount: 2, img: "../images/playing cards/squiggle_solid_blue.png" },
  { shape: "squiggle", fill: "solid", color: "blue", amount: 3, img: "../images/playing cards/squiggle_solid_blue.png" },
  { shape: "squiggle", fill: "solid", color: "green", amount: 1, img: "../images/playing cards/squiggle_solid_green.png" },
  { shape: "squiggle", fill: "solid", color: "green", amount: 2, img: "../images/playing cards/squiggle_solid_green.png" },
  { shape: "squiggle", fill: "solid", color: "green", amount: 3, img: "../images/playing cards/squiggle_solid_green.png" },
  { shape: "squiggle", fill: "solid", color: "red", amount: 1, img: "../images/playing cards/squiggle_solid_red.png" },
  { shape: "squiggle", fill: "solid", color: "red", amount: 2, img: "../images/playing cards/squiggle_solid_red.png" },
  { shape: "squiggle", fill: "solid", color: "red", amount: 3, img: "../images/playing cards/squiggle_solid_red.png" },

  { shape: "squiggle", fill: "striped", color: "blue", amount: 1, img: "../images/playing cards/squiggle_striped_blue.png" },
  { shape: "squiggle", fill: "striped", color: "blue", amount: 2, img: "../images/playing cards/squiggle_striped_blue.png" },
  { shape: "squiggle", fill: "striped", color: "blue", amount: 3, img: "../images/playing cards/squiggle_striped_blue.png" },
  { shape: "squiggle", fill: "striped", color: "green", amount: 1, img: "../images/playing cards/squiggle_striped_green.png" },
  { shape: "squiggle", fill: "striped", color: "green", amount: 2, img: "../images/playing cards/squiggle_striped_green.png" },
  { shape: "squiggle", fill: "striped", color: "green", amount: 3, img: "../images/playing cards/squiggle_striped_green.png" },
  { shape: "squiggle", fill: "striped", color: "red", amount: 1, img: "../images/playing cards/squiggle_striped_red.png" },
  { shape: "squiggle", fill: "striped", color: "red", amount: 2, img: "../images/playing cards/squiggle_striped_red.png" },
  { shape: "squiggle", fill: "striped", color: "red", amount: 3, img: "../images/playing cards/squiggle_striped_red.png" },
]
let numChooseCard = 0;//מספר הקלפים שהמשתמש בחר
let arrRandomCard = [];//מערך קלפים שכבר הופיעו במשחק
let arrChooseCard = [];//מערך של הקלפים שהמשתמש בחר כל 3 קלפים מתתאפס
//let arrNames = []//מערך לשמירת שמות משתמשים
let points = 0;//מספר הנקודות שהמשתמש צבר
let numCard = 0;//מספר הקלפים שנימצאים כרגע על המסך
let classImg = 0;
document.getElementById("cards").innerHTML = "";
document.getElementById("points").innerHTML = " מספר הנקודות" + " " + points + " ";

// Loading the page
// Loading the page
// Loading the page


//localStorage.removeItem("arr");



// Code executed on page load

let si = null;
let minTime = null;
let siH;
let siM;
let siS;
let previousRecord = localStorage.getItem("name");
let flag = false;
console.log("localStorage item:", localStorage.getItem("arr"));
let arr = JSON.parse(localStorage.getItem("arr")) || [];
if (arr.length > 0) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name == previousRecord) {
      si = arr[i].si;
      siH = arr[i].siHours;
      siM = arr[i].siMinutes;
      siS = arr[i].siSeconds;
     

      let formattedSeconds = siS.toString().padStart(2, '0');
      let formattedMinutes = siM.toString().padStart(2, '0');
      let formattedHours = siH.toString().padStart(2, '0');
      minTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;


      flag = true;
      //break;
    }
  }
}

if (!flag) {
  si = "אין שיאים קודמים";
  minTime = "אין משחקים קודמים";
}

document.getElementById("name").innerHTML = "שם: " + previousRecord;
document.getElementById("si").innerHTML = "השיא שלך: " + si;
document.getElementById("min-time").innerHTML = "זמן השיא :" + minTime;


//הוספת 12 כרטיסים מיד בטעינת הדף
AddCard(12);
let hours = 0;
let minutes = 0;
let seconds = 0;

let timerElement = document.getElementById("timer");
setInterval(startTimer, 1000);



function startTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Pad the values with leading zeros if necessary
  let formattedSeconds = seconds.toString().padStart(2, '0');
  let formattedMinutes = minutes.toString().padStart(2, '0');
  let formattedHours = hours.toString().padStart(2, '0');

  timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


//לחיצה על משחק חדש
document.getElementById('start').addEventListener("click", startPlay);
function startPlay() {

  if (arr.length == 0) {
    arr[0] = { name: previousRecord, si: points, siHours: hours, siMinutes: minutes, siSeconds: seconds };
  } else {
    let existingRecordIndex = -1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].name === previousRecord) {
        existingRecordIndex = j;
        //break;
      }
    }

    if (existingRecordIndex > -1) {
      let existingRecord = arr[existingRecordIndex];

      existingRecord.si = Math.max(points, existingRecord.si);

      if (
        existingRecord.siHours > hours ||
        (existingRecord.siHours === hours && existingRecord.siMinutes > minutes) ||
        (existingRecord.siHours === hours && existingRecord.siMinutes === minutes && existingRecord.siSeconds > seconds)
      ) {
        existingRecord.siHours = hours;
        existingRecord.siMinutes = minutes;
        existingRecord.siSeconds = seconds;
        arr[existingRecordIndex] = existingRecord;
      }
    } else {

      arr[arr.length] = { name: previousRecord, si: points, siHours: hours, siMinutes: minutes, siSeconds: seconds };
    }
  }

  localStorage.setItem("arr", JSON.stringify(arr)); // Convert the array to a JSON string before storing it in localStorage


  if (si == "אין שיאים קודמים") {
    document.getElementById("si").innerHTML = "השיא שלך: " + points;

    let formattedSeconds = seconds.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedHours =hours.toString().padStart(2, '0');
    minTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

   

  }

  else {
    document.getElementById("si").innerHTML = "השיא שלך" + Math.max(points, si);
    if (siH > hours
      || (siH == hours && siM > minutes)
      || (siH == hours && siM == minutes && siS > seconds)) {

      let formattedSeconds = siS.toString().padStart(2, '0');
      let formattedMinutes = siM.toString().padStart(2, '0');
      let formattedHours = siH.toString().padStart(2, '0');
      minTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  }
  document.getElementById("min-time").textContent = `${minTime}:זמן השיא`;



  hours = 0;
  minutes = 0;
  seconds = 0;






  numChooseCard = 0;
  points = 0;
  numCard = 0;
  arrRandomCard = [];
  arrChooseCard = [];
  document.getElementById("cards").innerHTML = "";
  document.getElementById("points").innerHTML = " מספר הנקודות" + " " + points + " ";
  AddCard(12);
}
//שינוי צבע של הקלפים במשחק ללבן
function clearCard() {
  var cardElements = document.querySelectorAll(".card");
  cardElements.forEach(element => {
    element.style.backgroundColor = "rgb(255, 255, 255)";
  });
}


//פונקציה שמקבלת מערך כרטיסים וכרטיס ומחזירה את האינדקס של הכרטיס במערך
function findCard(arr, card) {
  for (let i = 0; i < arr.length; i++) {
    if (card == arr[i])
      return i;
  }
}

//לחיצה על תמונה

/*
// Get all the image buttons
let imageButtons = document.querySelectorAll('.image');

// Attach click event listener to each image button
imageButtons.forEach(button => {
  button.addEventListener('click', handleImageButtonClick);
});

// Function to handle image button click
function handleImageButtonClick(event) {
  // Change the background color of the button
  //this.style.backgroundColor = "rgb(255, 99, 71)";
  
  // Perform any other operations as needed
  console.log('Button clicked:', this);
}
*/





let imgElement;
let amount;
let backgroundColor;
let srcChoose;
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cards").addEventListener("click", function (event) {
    if (event.target.classList.contains("card")) {
      imgElement = event.target.querySelector('img');//התמונה שבתוך הכרטיס
      
      amount = event.target.querySelectorAll("img").length;//מספר התמונות בכרטיס1/2/3
      //console.log(amount);
      backgroundColor = getComputedStyle(event.target).backgroundColor;
      //console.log(imgElement, srcChoose, amount, backgroundColor)

      chooseCards(event.target);
      /*console.log(imgElement);
      console.log(srcChoose);

      console.log(amount);
      console.log(backgroundColor);*/

    } else if (event.target.classList.contains("image")) {
      //console.log(event);
      //console.log(event.target);
      //console.log(event.target.parentElement);
      imgElement = event.target;
      srcChoose = imgElement.src;


      amount = event.target.parentElement.querySelectorAll("img").length;
      console.log(amount,srcChoose);

      backgroundColor = getComputedStyle(event.target.parentElement).backgroundColor;

      chooseCards(event.target.parentNode);
      //chooseCards(event);


      //  chooseCards(event.target.parentElement);

    }


  });
});



//פונקציה שמופעלת בבחירת 

function chooseCards(event) {
  //לחיצה על כפתור
  srcChoose = imgElement.getAttribute('src');
  let card = null;
  //הלולאה עוברת על הכרטיסים שכבר הופיעו ומחפשת את הכרטיס שהמשתמש בחר כרגע
  //console.log(srcChoose);
  for (let i = 0; i < arrRandomCard.length; i++) {
    if (arrRandomCard[i].img == srcChoose && arrRandomCard[i].amount == amount)
      card = arrRandomCard[i];
    //console.log(card);
  }
  //let computedStyle = getComputedStyle(event.target);
  //אם צבע הרקע הוא שונה מלבן אז הוא מתחרט על בחירת הכרטיס הנוכחי
  if (backgroundColor == "rgb(255, 99, 71)") {

    //צבע הרקע מתחלף ללבן
    //console.log(card);
    event.style.backgroundColor = "rgb(255, 255, 255)";
    //הפחתת מספר הכרטיסים שבחר
    numChooseCard--;
    let index = findCard(arrChooseCard, card);
    arrChooseCard.splice(index, 1);
  }

  else {//pink
    //console.log('white');
    //צבע הרקע משתנה לסמן שבחר את הכרטיס הנוכחי
    //console.log(card);

    event.style.backgroundColor = "rgb(255, 99, 71)";
    arrChooseCard.push(card);

    numChooseCard++;


    if (numChooseCard == 3) {//choice 3 cards
      setTimeout(clearCard, 1000);

      numChooseCard = 0;
      let choice = true;
      //אם לא בחר 3 כרטיסים בעלי צורה שווה וגם לא בחר 3 כרטיסים בעלי צורה שונה אז הבחירה שגויה
      if (!(arrChooseCard[0].shape == arrChooseCard[1].shape && arrChooseCard[1].shape == arrChooseCard[2].shape)
        && !(arrChooseCard[0].shape != arrChooseCard[1].shape && arrChooseCard[1].shape != arrChooseCard[2].shape && arrChooseCard[0].shape != arrChooseCard[2].shape))
        choice = false;
      //אם לא בחר 3 כרטיסים בעלי מילוי שווה וגם לא בחר 3 כרטיסים בעלי מילוי שונה אז הבחירה שגויה

      if (!(arrChooseCard[0].fill == arrChooseCard[1].fill && arrChooseCard[1].fill == arrChooseCard[2].fill)
        && !(arrChooseCard[0].fill != arrChooseCard[1].fill && arrChooseCard[1].fill != arrChooseCard[2].fill && arrChooseCard[0].fill != arrChooseCard[2].fill))
        choice = false;
      //כנ"ל
      if (!(arrChooseCard[0].color == arrChooseCard[1].color && arrChooseCard[1].color == arrChooseCard[2].color)
        && !(arrChooseCard[0].color != arrChooseCard[1].color && arrChooseCard[1].color != arrChooseCard[2].color && arrChooseCard[0].color != arrChooseCard[2].color))
        choice = false;
      if (!(arrChooseCard[0].amount == arrChooseCard[1].amount && arrChooseCard[1].amount == arrChooseCard[2].amount)
        && !(arrChooseCard[0].amount != arrChooseCard[1].amount && arrChooseCard[1].amount != arrChooseCard[2].amount && arrChooseCard[0].amount != arrChooseCard[2].amount))
        choice = false;
      if (choice) {//בחר כרטיסים נכונים
        points += 10;
        for (let i = 0; i < 3; i++) {
          let src = arrChooseCard[i].img;
          let amountChild = arrChooseCard[i].amount;
          let arrChild = document.getElementById("cards").querySelectorAll(".card");

          for (let j = 0; j < arrChild.length; j++) {
            let element = arrChild[j];

            if (element.querySelector("img").getAttribute("src") == src && element.querySelectorAll("img").length == amountChild) {

              document.getElementById("cards").removeChild(arrChild[j]);
              arrChild = document.getElementById("cards").querySelectorAll(".card");
            }
          }
        }

        numCard -= 3;
        if (numCard < 12)
          AddThreeCards();
      }
      else//בחר כרטיסים שגויים
        points -= 5;
      points = Math.max(points, 0);
      document.getElementById("points").innerHTML = " מספר הנקודות" + " " + points + " ";

      arrChooseCard = [];
    }
  }
}

let addButton = document.querySelector('#add-button');
addButton.addEventListener('click', AddThreeCards);

function AddCard(numCardAdd) {
  for (let i = 0; i < numCardAdd; i++) {
    if (arrCard.length === 0) {


      clearInterval(startTimer);
      if (arr.length == 0) {
        arr[0] = { name: previousRecord, si: points, siHours: hours, siMinutes: minutes, siSeconds: seconds };
      } else {
        let existingRecordIndex = -1;
        for (let j = 0; j < arr.length; j++) {
          if (arr[j].name === previousRecord) {
            existingRecordIndex = j;
            //break;
          }
        }

        if (existingRecordIndex > -1) {
          let existingRecord = arr[existingRecordIndex];

          existingRecord.si = Math.max(points, existingRecord.si);

          if (
            existingRecord.siHours > hours ||
            (existingRecord.siHours === hours && existingRecord.siMinutes > minutes) ||
            (existingRecord.siHours === hours && existingRecord.siMinutes === minutes && existingRecord.siSeconds > seconds)
          ) {
            existingRecord.siHours = hours;
            existingRecord.siMinutes = minutes;
            existingRecord.siSeconds = seconds;
            arr[existingRecordIndex] = existingRecord;
          }
        } else {

          arr[arr.length] = { name: previousRecord, si: points, siHours: hours, siMinutes: minutes, siSeconds: seconds };
        }
      }

      localStorage.setItem("arr", JSON.stringify(arr)); // Convert the array to a JSON string before storing it in localStorage

      console.log("No more cards left");


      window.open("../index.html", "_self");

    }
    let indexCard = Math.floor(Math.random() * arrCard.length);
    let card = arrCard[indexCard];
    let buttonCard = document.createElement("button");
    buttonCard.setAttribute("class", "card");
    classImg++;

    for (let l = 0; l < card.amount; l++) {
      let img = document.createElement("img");
      img.setAttribute("src", card.img);
      img.setAttribute("class", "image");
      buttonCard.appendChild(img);

    }
    buttonCard.setAttribute("id", "card" + classImg);

    document.getElementById("cards").appendChild(buttonCard);
    arrRandomCard.push(card);
    arrCard.splice(indexCard, 1);
    numCard++;
  }
  if (arrCard.length == 0) {
    document.getElementById("add-button").innerHTML = "סיים משחק";
  }
}

function AddThreeCards() {
  if (document.getElementById("cards").children.length < 21 || arrCard.length == 0) {
    AddCard(3);
  }
}
document.getElementById("rules").addEventListener("click", goToRules);
function goToRules() {

  window.open("../html/rules.html", "_blank");
}