


let Order_value = localStorage.getItem("order-value");

let Delivery_Charge =  localStorage.getItem("Delivery-Charge");

let Total = localStorage.getItem("Total-values");

let Discount = localStorage.getItem("discount");




document.getElementById("order").innerText = Order_value;

document.getElementById("discount").innerText = Discount;

document.getElementById("delivery").innerText = Delivery_Charge;


document.getElementById("total").innerText = Total;










document.getElementById("pay").addEventListener("click", Proceedtopayfun);

let arr = JSON.parse (localStorage.getItem("Proceed-to-payment-Data")) || [];



function Proceedtopayfun () {


    let Email = document.getElementById("email").value

    let Name = document.getElementById("name").value;

    let LastName = document.getElementById ("last").value;

    let Adress1 = document.getElementById("adress1").value;

    let Adress2 = document.getElementById("adress2").value;

    let Postcode = document.getElementById("post").value;

    let City =  document.getElementById("city").value;

    let State = document.getElementById("state").value


            let obj = {Email,Name,LastName,Adress1,Adress2,Postcode,City,State};













             if (Email != "aj@gmail.com" && Email!="") {


                        alert("Invalid Email Address");

             }else if (Email == "") {


                       alert("please fill all the details");

             }else if (Email == "aj@gmail.com") {




                     

                     alert("redirecting you to payment page");

                  let A =   document.createElement("a");

                  A.setAttribute("href","finalpayment.html");

                  A.innerText = "Proceed to Payment";

                  document.getElementById("pay").append(A);



                     arr.push(obj);

                     localStorage.setItem("Proceed-to-payment-Data",JSON.stringify(arr));


                   







             }


   











}





