var a = document.getElementById("copy");
var b = document.getElementById("not");
var c = document.getElementById("text");
var val = document.getElementById("val");
var slider = document.getElementById("slider");
var uper = document.getElementById("upper");
var low = document.getElementById("low");
var symb = document.getElementById("symb");
var numb = document.getElementById("numb");
var gener = document.getElementById("gener");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower = "abcdefghijklmnopqrstuvwxyz",
  num = "0123456789",
  symbol = "@#$";

a.addEventListener("click", () => {
  // alert("copied successfully")

  b.innerHTML = "NOW COPIED";
  b.style.cssText = "color:white";
  c.select();
  document.execCommand("copy");

  //set timeout means stop execution
  setTimeout(fun, 1000);
  function fun() {
    b.innerHTML = "";
  }
});

//Ye data set hai bs string ka adata leke usme se random string dega
const passw = (data) => {
  return data[Math.floor(Math.random() * data.length)];
};

// ye fnction baar  baar call hoga password addon pe
const generatePassword = (password = "") => {
  if (uper.checked) {
    password += passw(upper);
  }
  if (low.checked) {
    password += passw(lower);
  }
  if (numb.checked) {
    password += passw(num);
  }
  if (symb.checked) {
    password += passw(symbol);
  }
  if (password.length < slider.value) {
    return generatePassword(password);
  }

  //fer yaha pe check krenge ki user ne jo value range se select kri hai whi value hai
  //agr nhi hogi to truncate function call hoga truncate means ki agr value se jada hoga toh koi substring uthalega
  c.value = chotiString(password, slider.value);
  console.log(slider.value, password);
};

//slider
function myfun() {
  val.innerHTML = slider.value;
  length = slider.value;
}

generatePassword();

function chotiString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}

function genr() {
  generatePassword();
}

function genpass() {
  generatePassword();
}
