

 let Product_Data = JSON.parse (localStorage.getItem("Show-More-Data"));  // done //done


 let Filter_Accessories =  JSON.parse (localStorage.getItem("Accessories"));  // done //done

 let Filter_Knitwear = JSON.parse(localStorage.getItem("Knitwear"));  //done  //done

 let Fiter_Trousers = JSON.parse(localStorage.getItem("Trousers")); //done  //done

 let Fiter_Shoes = JSON.parse(localStorage.getItem("Shoes"));  //done //done

 let Fiter_Shorts = JSON.parse(localStorage.getItem("Shorts"));  //done //done

 let Sort_Recommended = JSON.parse(localStorage.getItem("Recommended"));  ////////pending////////

 let Sort_Low_price = JSON.parse(localStorage.getItem("Sort_jacket_Low-High")); //done //done

 let Sort_High_price = JSON.parse(localStorage.getItem("Sort_jacket_High-Low")); //done //done

 let Sort_Accessories_Low = JSON.parse(localStorage.getItem("Sort_Accessories_Low-High")); //done //done

 let Sort_Accessories_High = JSON.parse(localStorage.getItem("Sort_Accessories_High-Low")); //done //done

 let Sort_Knitwear_Low_High = JSON.parse(localStorage.getItem("Sort_Knitwear_Low-High")); //done  //done

 let Sort_Knitwear_High_Low = JSON.parse(localStorage.getItem("Sort_Knitwear_High-Low")); //done //done

 let Sort_Trousers_Low_High = JSON.parse(localStorage.getItem("Sort_Trousers_Low-High")); //done //done

 let Sort_Trousers_High_Low = JSON.parse(localStorage.getItem("Sort_Trousers_High-Low")); //done //done

 let Sort_Shoes_Low_High = JSON.parse(localStorage.getItem("Sort_Shoes_Low-High")); //done //done

 let Sort_Shoes_High_Low = JSON.parse(localStorage.getItem("Sort_Shoes_High-Low")); //done //done

 let Sort_Shorts_Low_High = JSON.parse(localStorage.getItem("Sort_Shorts_Low-High")); //done  //done

 let Sort_Sorts_High_Low = JSON.parse(localStorage.getItem("Sort_Shorts_High-Low")); //done //done






//  // // // // // // // Function for adding Quantity key to object with value // // // // // // // // // // // // // // //


    //   function AddQuantity(arr) {

    //          let N = arr.length;

    //          for (let i = 0; i < N; i++) {


    //                    arr[i].Quantity  = 1




    //          }

            

    //   }




    //   AddQuantity (Product_Data.products);


    //   localStorage.setItem("Show-More-Data", JSON.stringify( Product_Data  ) );










 
 


console.log (Product_Data.products);





    let DisplayData = (arr) => {

         console.log(arr)
        
               
          for (let i = 0; i < 18; i++) {


                    let Div = document.createElement("div");

                    Div.setAttribute("id","child-cards");

                            let Div2 = document.createElement("div");

                            Div2.setAttribute("id","img-section");
                                
                                   let Div3 = document.createElement("div");

                                            let Img = document.createElement("img");

                                            Img.setAttribute("src", "https://" + arr[i].image[0].dataAltImage);


                                            Img.addEventListener("mouseenter", function (){


                                                Img.setAttribute("src", "https://" + arr[i].image[0].src);

                                                   

                                            })

                                            Img.addEventListener("mouseleave", function (){


                                                Img.setAttribute("src", "https://" + arr[i].image[0].dataAltImage);

                                                   

                                            })
                                
                                    Div3.append(Img);

                            Div2.append(Div3);


                            let Div4 = document.createElement("div");

                            Div4.setAttribute("id","details");

                                   let H3 = document.createElement("h3");

                                   H3.innerText = arr[i].title;

                                   let H4 = document.createElement("h4");

                                   H4.innerText = "Rs. " + arr[i].price;

                            Div4.append(H3,H4);


                            let Div5 = document.createElement("div");

                            Div5.setAttribute("id","buttons");

                                    let Button = document.createElement("button");

                                    Button.innerText = "Add To Cart"; 

                                    let Button2 = document.createElement("button");

                                    Button2.innerText = "Add To Wishlist";


                                // // // // //  Add to Wishlist Function  // // // // // 


                                Button2.addEventListener("click", function () {

                                     
                                         AddtoWishlist(arr[i]);


                                });


                                // // // // //  Add To Cart Function  // // // // //


                                Button.addEventListener("click", function () {

                                     
                                        AddtoCart(arr[i]);




                               });



                                    
                            Div5.append(Button,Button2);



                           




                     Div.append(Div2,Div4,Div5);

                   
                    document.getElementById("cards").append(Div);



                              



          }


         


    }


     DisplayData(Product_Data.products);




//      -----------------Filter Function ----------------------    //




     document.getElementById("Filter").addEventListener("change",filterit)


     function filterit () {


           let filtervalue = document.getElementById("Filter").value;

           let Sort_value =  document.getElementById("Sort").value;


           console.log (filtervalue)


           console.log (Sort_value)


           console.log(Filter_Accessories )





           if (filtervalue == "" && Sort_value == "a") {


                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Low_price.products);


        }else if (filtervalue == "" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_High_price.products);


        }else if (filtervalue == "a" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Accessories_Low.products);

        }else if (filtervalue == "a" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Accessories_High.products);

        }else if (filtervalue == "b" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Knitwear_Low_High.products);

        }else if (filtervalue == "b" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Knitwear_High_Low.products);

        }else if (filtervalue == "c" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Trousers_Low_High.products);

        }else if (filtervalue == "c" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Trousers_High_Low.products);

        }else if (filtervalue == "d" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Shoes_Low_High.products);

        }else if (filtervalue == "d" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Shoes_High_Low.products);

        }else if (filtervalue == "e" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Shorts_Low_High.products);

        }else if (filtervalue == "e" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData( Sort_Sorts_High_Low.products);

        }else if (filtervalue == "a" &&  Sort_value == "" ) {


                document.getElementById("cards").innerHTML = "";

                DisplayData(Filter_Accessories.products);


         }else if (filtervalue == "b") {


                document.getElementById("cards").innerHTML = "";

 
                DisplayData (Filter_Knitwear.products);

        }else if (filtervalue == "c") {


                document.getElementById("cards").innerHTML = "";

                DisplayData ( Fiter_Trousers.products);

         }else if (filtervalue == "d") {


                 document.getElementById("cards").innerHTML = "";

                 DisplayData( Fiter_Shoes.products );


          }else if (filtervalue == "e") {


                document.getElementById("cards").innerHTML = "";



                DisplayData ( Fiter_Shorts.products );

          } else {


                  
                document.getElementById("cards").innerHTML = "";

                
                  DisplayData(Product_Data.products);

  

          }

       



     }





//      ---------------Sort Functionality---------------    //


document.getElementById("Sort").addEventListener("change",Sortit);



function  Sortit () {


        let Sort_value =  document.getElementById("Sort").value;

        let filtervalue = document.getElementById("Filter").value;


        if (filtervalue == "" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Low_price.products);



        }else if (filtervalue == "" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_High_price.products);

        }else if (filtervalue == "a" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Accessories_Low.products);

        }else if (filtervalue == "a" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Accessories_High.products);

        }else if (filtervalue == "b" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Knitwear_Low_High.products);

        }else if (filtervalue == "b" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Knitwear_High_Low.products);

        }else if (filtervalue == "c" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Trousers_Low_High.products);

        }else if (filtervalue == "c" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Trousers_High_Low.products);

        }else if (filtervalue == "d" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Shoes_Low_High.products);

        }else if (filtervalue == "d" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Shoes_High_Low.products);

        }else if (filtervalue == "e" && Sort_value == "a") {

                document.getElementById("cards").innerHTML = "";

                DisplayData(Sort_Shorts_Low_High.products);

        }else if (filtervalue == "e" && Sort_value == "b") {

                document.getElementById("cards").innerHTML = "";

                DisplayData( Sort_Sorts_High_Low.products);

        }




} 



// // // // // // //   AD To Wishlist Function Declaration   // // // // // // // //


let Wishlist_Data = JSON.parse(localStorage.getItem("Wishlist-Data")) || [];





   function AddtoWishlist ( element ) {


        let flag = "Item Added To Wishlist";


        for (let i = 0; i < Wishlist_Data.length; i++ ) {


                if ( Wishlist_Data[i] == element) {


                        flag = "Item Is Already Present in Wishlist";

                        break;


                }



        }



        if (flag == "Item Added To Wishlist") {

              
                Wishlist_Data.push(element);


                localStorage.setItem("Wishlist-Data",  JSON.stringify( Wishlist_Data )); 





        }


        alert (flag);
                 
           

            console.log (Wishlist_Data);


   }







   // // // // // // //   AD To Cart Function Declaration   // // // // // // // //


   let Cart_Data = JSON.parse(localStorage.getItem("Cart-Data")) || [];





    function  AddtoCart (element) {



        let flag = "Item Added To Cart";


        for (let i = 0; i < Cart_Data.length; i++ ) {


                if ( Cart_Data[i] == element) {


                        flag = "Item Is Already Present in Cart";

                        break;


                }



        }



        if (flag == "Item Added To Cart") {


              
              
                Cart_Data.push(element);


                localStorage.setItem("Cart-Data",  JSON.stringify( Cart_Data )); 


        }


        alert (flag);
                 
           

            console.log (Cart_Data);



    }







//    localStorage.setItem("Shoes",JSON.stringify(obj));