function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var it = "If you deposite "+ principal + "\n at the interest of " +rate+"\n You will receive an amount " +interest+ "\n at the end of the year "+year;
    document.getElementById("result").innerText= it;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function numchk()
{
    var num = document.getElementById("principal").value;
    if(num <=0){
     alert("Enter positive number");
    }
    
    document.getElementById("principal").focus();
}


        