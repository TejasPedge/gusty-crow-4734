

let Cart_Data = JSON.parse(localStorage.getItem("Cart-Data")) || [];








//  //  //  //  //  //  //  //  // Display Cart Data function //  //  //  //  //  //  //  //  //




   let Display_Cart_Data = (arr) => {


            let N = arr.length;

            document.getElementById("Card-products-container").innerHTML = "";


           



            for (let i = 0; i < N; i++) {


                   





      
                    


                

//     <div id="Card-products">


//                 <img src="https://lp2.hm.com/hmgoepprod?set=source[/c2/89/c289f482ea541e3b0b112b5602cac50bc81211e8.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt="">


//                 <div id="Detailsis">

//                        <p>Oversized glittery blazer</p>   // done

//                        <h3>Rs.5,499.00</h3>    //done

//                        <div>  //done

//                              <p>Art.no. :</p>  //done

//                              <p>112467854322</p>  // done

                             

//                        </div> //done


//                        <div> //done

//                          <p>Color :</p> //done


//                          <p>Silver-couloured</p> //done

//                        </div> //done


//                        <div> //done

//                          <h3>Total</h3>   //done


//                          <h3>Rs.43,5676</h3> //done

//                        </div> //done

//                 </div> //done





//                 <div id="Quantity">



//                              <span class="material-symbols-rounded">  //done
//                                  add    //done
//                                  </span>  //done

                                   
//                               <div>  Quantity : 5  </div> //done


//                               <span class="material-symbols-rounded"> //done
//                                  remove   //done
//                                  </span>  //done




//                 </div>  //done



//                 <div id="deleteit">

//                                <span class="material-symbols-rounded">

//                                      delete_forever

//                                </span>

//                  </div>




//   </div>


                let Div = document.createElement("div");

                Div.setAttribute("id","Card-products");


                        let IMG = document.createElement("img");

                        IMG.setAttribute("src", "https://" + arr[i].image[0].dataAltImage);


                        IMG.addEventListener("mouseenter", function (){


                            IMG.setAttribute("src", "https://" + arr[i].image[0].src);

                               

                        })

                        IMG.addEventListener("mouseleave", function (){


                            IMG.setAttribute("src", "https://" + arr[i].image[0].dataAltImage);

                               

                        })


                        let Div2 = document.createElement("div");

                        Div2.setAttribute("id","Detailsis");

                                   let P = document.createElement("p");

                                   P.innerText = arr[i].title;

                                   let H3 = document.createElement("h3");

                                   H3.innerText = "Rs. " + arr[i].price;

                                   let Div3 = document.createElement("div");

                                            let P2 = document.createElement("p");

                                            P2.innerText = "Art.no. :";

                                            let P3 = document.createElement("p");

                                            P3.innerText = arr[i].articleCode;

                                    Div3.append(P2,P3);

                                    let Div4 = document.createElement("div");

                                            let P4 = document.createElement("p");

                                            P4.innerText = "Color :";

                                            let P5 = document.createElement("p");


                                            if (arr[i].swatches[0] == undefined) {

                                                P5.innerText =  "blue";

                                            }else {

                                                P5.innerText = arr[i].swatches[0].colorName

                                            }

                                           

                                    Div4.append(P4,P5);

                                    let Div5 = document.createElement("div");

                                            let H4 = document.createElement("h3");

                                            H4.innerText = "Total :";

                                            let H5 = document.createElement("h3");

                                            H5.innerText =  arr[i].Total || arr[i].price;  // // done // // // // // / // // / / / // // 

                                    Div5.append(H4,H5);

                        Div2.append(P,H3,Div3,Div4,Div5);


                        let Div6 = document.createElement("div");

                        Div6.setAttribute("id", "Quantity");

                                     let Span = document.createElement("span");

                                     Span.setAttribute("class","material-symbols-rounded");

                                     Span.innerText = "add";

                                     let Div7 = document.createElement("div");

                                     Div7.innerText = "Quantity : " + arr[i].Quantity  ; //   ///   ///  Pending  // /// // // / // // / / / /

                                     let Span2 = document.createElement("span");

                                     Span2.setAttribute("class","material-symbols-rounded");

                                     Span2.innerText = "remove";


                        
                            // //  //  //  //  Increase Quantity Add Functionality  //  //  //  //  //


                                                    Span.addEventListener("click", function () {

                        
                                                        IncreaseQuantity(i,Div7,H5);



                                            })


                            // // // // // //  Decrease Quantity Minus Functionality  // // // // // // // 


                                                   Span2.addEventListener("click", function () {

                        
                                                    DecreaseQuantity(i,Div7,H5);



                                        });











                        Div6.append(Span,Div7,Span2);

                        let Div8 = document.createElement("div");
                        
                        Div8.setAttribute("id","deleteit");

                                        let Span3 = document.createElement("span");

                                        Span3.setAttribute("class","material-symbols-rounded");

                                        Span3.innerText = " delete_forever";

                                        //////////////Delete Functionality///////////////////


                                        Span3.addEventListener("click",function () {


                                               
                                        DeleteFromCart (i);

                                        })










                        Div8.append(Span3);



                Div.append(IMG,Div2,Div6,Div8);


                document.getElementById("Card-products-container").append(Div);


            }




   }



   Display_Cart_Data(Cart_Data);





   





      // //  //  //  //  Increase Quantity Add Functionality  //  //  //  //  //


    

 let M = Cart_Data;





  

   function IncreaseQuantity(index, a, total) {


    let x = Cart_Data[index].Quantity;

    x++;


    // console.log (x);

            a.innerText = "Quantity : "  + x;

            Cart_Data[index].Quantity = x;



            let Price = Cart_Data[index].price;

            let num = Price.replace(",","");

            let res = x*num;

            let res_afteradding_comma = res.toLocaleString();

            Cart_Data[index].Total = res_afteradding_comma + ".00";



            total.innerText = res_afteradding_comma + ".00";

        

    

        localStorage.setItem("Cart-Data", JSON.stringify (Cart_Data) );


        DisplayTotal(Cart_Data);
        
    
        // console.log (Cart_Data);



      
            



   }




    // // // // // // // // // // Decrease Quantity Function // // // // // // // // // // 


    function  DecreaseQuantity (index, a,total) {


        let x = Cart_Data[index].Quantity;


         if (x != 1) {

            x--;
    

         }
       

             
    
        // console.log (x);
    
                a.innerText = "Quantity : "  + x;
    
                Cart_Data[index].Quantity = x;


                let Price = Cart_Data[index].price;

                let num = Price.replace(",","");

                let res = x*num;

                let res_afteradding_comma = res.toLocaleString();

                Cart_Data[index].Total = res_afteradding_comma + ".00";



                total.innerText = res_afteradding_comma + ".00";




        
    
            localStorage.setItem("Cart-Data", JSON.stringify (Cart_Data) );





           

            DisplayTotal(Cart_Data);



    
    
            console.log (Cart_Data);
                




    }






    // // // // / / // /// Total Order Value Functionality // // // // // // // // 






    function DisplayTotal(arr)   {

        
          let   Order_Value = 0;

        for (let i = 0; i < arr.length; i++) {


                let num = arr[i].price;

                let num2 = num.replace(",","");




                if (arr[i].Total == undefined) {

                   Order_Value += Number(num2);


                }else {

                   let num3 = arr[i].Total;

                   let num4 = num3.replace(",","");


                   Order_Value += Number(num4);


                }




        }



        let Delivery_charge = 0;



        if (Order_Value <= 3000 && Order_Value > 0 ) {

                   Delivery_charge = 149;


        }else if (Order_Value <= 6000 &&  Order_Value >= 300){


                Delivery_charge = 300;

        }else if (Order_Value > 6000) {

                Delivery_charge = 400;

        }else  {

                Delivery_charge = 0
        }



        let a = Order_Value.toLocaleString();

        let b = Delivery_charge.toLocaleString();

        let discount = 0;






        

        document.getElementById("Add").addEventListener("click", function (){

                      
                Addcoupon(a,b,discount)




        } );

               //{

// // // // // / // // // // // // //data shifteed



        // })

        
        localStorage.setItem("discount",discount);

     

        document.getElementById("Delivery-Charge").innerText = "Rs. " + b + ".00";


        let z = "Rs. " + b + ".00"

        localStorage.setItem("Delivery-Charge", z);



        document.getElementById("order-value").innerText = "Rs. " + a + ".00";


        let y = "Rs. " + a + ".00";

        localStorage.setItem("order-value", y);




        // let Final_Price = discount + Number(b) + Number(a);

        let nums = a.replace(",","");

        Final_Price = Number(nums) + Number(b) + discount;

        let nums2 = Final_Price.toLocaleString();

        document.getElementById("final").innerText = "Rs. " + nums2 + ".00";

        let x = "Rs. " + nums2 + ".00";

        localStorage.setItem("Total-values", x);







}


DisplayTotal(Cart_Data);





// // // // // // // // // // // Add coupon Functionality // // // // // / // // // // // // 








function Addcoupon(a,b,discount){


  


                
        let x = document.getElementById("Coupon-code");

        let Coupon_VAlue = x.value;


        let n =  a.replace(",","")

        console.log (n);


        if (Coupon_VAlue == "Masai2000" &&  n > 3000) {

                alert("Your Coupon is applied");

                document.getElementById("Discount").innerText = "- Rs. 2000.00";

                discount = -2000;

                localStorage.setItem("discount",discount);

                document.getElementById("Coupon-code").value = "";

        

                     let Div = document.createElement("div");

                     Div.setAttribute("id", "Discound-applied");

                           let IMG = document.createElement("img");

                           IMG.setAttribute("src","https://thelogofinder.com/wp-content/uploads/edd/2022/03/Masai.svg");

                           let H3 = document.createElement("h3");

                           H3.innerText = "2000";

                           let Span = document.createElement("span");

                           Span.setAttribute("class","material-symbols-rounded");

                           Span.innerText = "close";

                           Span.addEventListener("click",function(){

                                document.getElementById("coupons").innerHTML="";

                                document.getElementById("Discount").innerText = "- Rs. 00.00";


      
                                                        
                                        let nums = a.replace(",","");

                                        Final_Price = Number(nums) + Number(b) + 0;
                                
                                        let nums2 = Final_Price.toLocaleString();
                                

                                        document.getElementById("final").innerText = "Rs. " + nums2 + ".00";
                                                
                                                
                                
                                

                           });


                     Div.append(IMG,H3,Span);

                     document.getElementById("coupons").append(Div);



                     let nums = a.replace(",","");

                     Final_Price = (Number(nums) + Number(b)) + discount;
             
                     let nums2 = Final_Price.toLocaleString();
             
                     document.getElementById("final").innerText = "Rs. " + nums2 + ".00";

                     let x =  "Rs. " + nums2 + ".00";

                     localStorage.setItem("Total-values",x);

                     
        
               

        }else  if (Coupon_VAlue == "Masai2000" && n < 3000){

                alert("This Coupon is Applicable on Shopping of Rs. 3,000 or More");

        }else {


                 alert("Invalid Coupon");

        }


           console.log ( Coupon_VAlue);





}






/////////////////////////////Deletefrom Cart //////////////////////////////////




function DeleteFromCart (index) {



        Cart_Data.splice(index,1);


        console.log( Cart_Data);

        localStorage.setItem("Cart-Data", JSON.stringify ( Cart_Data ));

        document.getElementById("Card-products-container").innerHTML = "";

        alert("item Removed From Cart");

       if (Cart_Data.length == 0) {

                  
              document.getElementById("Price").innerHTML = "";


             
 if (Cart_Data.length == 0) {

                  
        document.getElementById("Price").innerHTML = "";



                let Div = document.createElement("div");

                Div.setAttribute("id","No-Card-products");

                     let H1 = document.createElement("h1");

                     H1.innerText = "Your Shopping Cart Is Empty";

                     let P = document.createElement  ("p");

                     P.innerText = "Sign in to save or access already saved items in your shopping bag.";

                     let Button = document.createElement("button");

                     Button.innerText = "Sign in";

                 Div.append(H1,P,Button);

                 document.getElementById("Card-products-container").append(Div);

                


 }





























       }


       document.getElementById("final").innerText = "Rs. " + "00" + ".00";


        
       console.log(Cart_Data)

        DisplayTotal(Cart_Data);

        Display_Cart_Data( Cart_Data );







 }


 if (Cart_Data.length == 0) {

                  
        document.getElementById("Price").innerHTML = "";


                let Div = document.createElement("div");

                Div.setAttribute("id","No-Card-products");

                     let H1 = document.createElement("h1");

                     H1.innerText = "Your Shopping Cart Is Empty";

                     let P = document.createElement  ("p");

                     P.innerText = "Sign in to save or access already saved items in your shopping bag.";

                     let Button = document.createElement("button");

                     Button.innerText = "Sign in";

                 Div.append(H1,P,Button);
                 

                 document.getElementById("Card-products-container").append(Div);

 }




 // ///////////////////////////////Proceed to Payment Functionality /////////////////////////////////////////


       document.getElementById ("payment").addEventListener("click",ProceedtoPay) ;




     function ProceedtoPay () {


        if (Cart_Data.length == 0) {

 
                  alert("Please Add Some Items to Cart")




        }else {


                 document.getElementById("pay").innerText = "";


                 let A = document.createElement ("a");

                 A.setAttribute("href","Payment.html");

                 let Button = document.createElement("button");

                 Button.innerText = "Proceed To Payment";

                 A.append(Button);


                 document.getElementById("pay").append(A);







        }


                
             


     }




