// function myFunction() {
// 	document.getElementById('heading').innerHTML = "javascript";
//     console.log("This should appear in the console");
//     alert("This is an alert");
// }

// myFunction();


function changeText() {
  var x = document.getElementById("heading");
  if (x.innerHTML === "This is the heading") {
    x.innerHTML = "Javascript";
    document.body.style.color = "red";
    document.body.style.backgroundColor = "white";
    console.log('change successful');
  } else {
    x.innerHTML = "This is the heading";
    document.body.style.color = "black";
    document.body.style.backgroundColor = "lightblue";
  }
}