function showText() {
    document.getElementById("result").style.display = "block";
  } //displat result of computing
  
  function compute() {
    var principal = document.getElementById("principal").value;
    if (parseInt(principal) < 1) {
      alert("Enter a positive Number");
      document.getElementById("principal").focus();
      return;
    } // if number of amount is negative or null, alert: enter positive number
  
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var today = new Date();
    var yearToday = parseInt(today.getFullYear()) + parseInt(years);
  
    document.getElementById("depositText").innerHTML = "" + principal;
    document.getElementById("interestText").innerHTML = "" + rate;
    document.getElementById("amountText").innerHTML = "" + interest;
    document.getElementById("yearText").innerHTML = "" + yearToday;
    showText();
  
    return false;
  }
  
  function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
  } // show value of interest rate
     