/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
let greet = (time) => {
  const hour = time.slice(0, time.indexOf(":"));
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};
/* Write your implementation of displayMessage() */
let displayMessage = (str) => {
  let h1 = document.getElementById("greeting");
  h1.innerText = str;
};
