

 let Product_Data = JSON.parse (localStorage.getItem("Show-More-Data"));


 let Filter_Accessories =  JSON.parse (localStorage.getItem("Accessories"));

 let Filter_Knitwear = JSON.parse(localStorage.getItem("Knitwear"));

 let Fiter_Trousers = JSON.parse(localStorage.getItem("Trousers"));

 let Fiter_Shoes = JSON.parse(localStorage.getItem("Shoes"));

 let Fiter_Shorts = JSON.parse(localStorage.getItem("Shorts"));

 let Sort_Recommended = JSON.parse(localStorage.getItem("Recommended"));

 let Sort_Low_price = JSON.parse(localStorage.getItem("Sort_jacket_Low-High"));

 let Sort_High_price = JSON.parse(localStorage.getItem("Sort_jacket_High-Low"));

 let Sort_Accessories_Low = JSON.parse(localStorage.getItem("Sort_Accessories_Low-High"));

 let Sort_Accessories_High = JSON.parse(localStorage.getItem("Sort_Accessories_High-Low"));



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

                                   H4.innerText = arr[i].price;

                            Div4.append(H3,H4);


                            let Div5 = document.createElement("div");

                            Div5.setAttribute("id","buttons");

                                    let Button = document.createElement("button");

                                    Button.innerText = "Add To Cart"; 

                                    let Button2 = document.createElement("button");

                                    Button2.innerText = "Add To Wishlist";
                                    
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

        }else if (filtervalue == "a") {


                
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

        }






} 






//     localStorage.setItem("Sort_Accessories_High-Low",JSON.stringify(obj));