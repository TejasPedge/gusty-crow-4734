

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

                                            P5.innerText = arr[i].swatches[0].colorName;

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

                        Div8.append(Span3);



                Div.append(IMG,Div2,Div6,Div8);


                document.getElementById("Card-products-container").append(Div);


            }




   }



   Display_Cart_Data(Cart_Data);





   





      // //  //  //  //  Increase Quantity Add Functionality  //  //  //  //  //


    







  

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



        if (Order_Value < 3000) {

                   Delivery_charge = 149;


        }else if ()



        let a = Order_Value.toLocaleString();



        document.getElementById("order-value").innerText = "Rs. " + a + ".00";


}


DisplayTotal(Cart_Data);


