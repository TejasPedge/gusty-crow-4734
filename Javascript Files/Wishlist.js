
let Wishlist_DAta = JSON.parse(localStorage.getItem("Wishlist-Data")) || [];




 let DisplayData = (arr) => {




    if (arr.length == 0){

              
               let Div = document.createElement("div");

               Div.setAttribute("id","Favourites");

                       let H1 = document.createElement("h1");

                       H1.innerText = "Wishlists";

                       let H3 = document.createElement("h3");

                       H3.innerText = "SAVE YOUR FAVOURITE ITEMS";

                       let P = document.createElement("p");

                       P.innerText = "Want to save the items that you love? Just click on the Add to Wishlist symbol beside the item and it will show up here.";

                       let P2 = document.createElement("p");

                       P2.innerText = "Your Wishlist is empty Browse To add Some Items Which you Like";

                       let A = document.createElement("a");

                       A.setAttribute("href","index.html");

                               let Button = document.createElement("button");

                               Button.innerText = "Browse Now";

                       A.append(Button);


                Div.append(H1,H3,P,P2,A);


                document.getElementById("append-fav").append(Div);




    } else {


           
//<div id="childs">


//        <div id="image-show">

//                        <img src="https://lp2.hm.com/hmgoepprod?set=source[/53/08/5308320d4e7230e98e8eb41a8cdcd233151331ce.jpg],origin[dam],category[],type[LOOKBOOK],res[s],hmver[2]&call=url[file:/product/main]" alt="">

//        </div>


//        <div id="infos">

//                    <h3>Long earing</h3>

//                    <h4>Rs.1,499.00</h4>

//                    <p>Colour: Purple</p>

//                    <button>
                            
                              //<span class="material-symbols-rounded">

//                            shopping_cart

//                             </span>Add

//                      </button>


//                        <span class="material-symbols-rounded">
//                            delete
//                            </span>



//        </div>



// </div>

   for (let i = 0; i < arr.length; i++) {

                
                    let Div = document.createElement("div");

                    Div.setAttribute("id", "childs");

                        
                            let Div2 = document.createElement("div");

                            Div2.setAttribute("id", "image-show");

                                            let Img = document.createElement("img");

                                            Img.setAttribute("src", "https://" + arr[i].image[0].dataAltImage);


                                            Img.addEventListener("mouseenter", function (){


                                                Img.setAttribute("src", "https://" + arr[i].image[0].src);

                                                    

                                            })

                                            Img.addEventListener("mouseleave", function (){


                                                Img.setAttribute("src", "https://" + arr[i].image[0].dataAltImage);

                                                    

                                            });

                                Div2.append(Img);



                                let Div3 = document.createElement("div");

                                Div3.setAttribute("id", "infos");


                                            let H3 = document.createElement("h3");

                                            H3.innerText = arr[i].title;

                                            let H4 = document.createElement("h4");

                                            H4.innerText = "Rs. " + arr[i].price;

                                            let P = document.createElement("p");

                                            P.innerText = "Colour : " + arr[i].swatches[0].colorName;

                                            let Button = document.createElement("button");

                                                    let Span = document.createElement("span");

                                                    Span.setAttribute("class","material-symbols-rounded");

                                                    Span.innerText  ="shopping_cart";

                                            Button.innerText = "Add";

                                            Button.append(Span);

                                            let Span2 = document.createElement("span");

                                            Span2.setAttribute("class","material-symbols-rounded");

                                            Span2.innerText = "delete";

                                            //  //  //  //  // Delete from Wishlist function  // //  // //  //


                                            Span2.addEventListener("click", function () {


                                                   DeleteFromWishlist(i);

                                            })


                                    Div3.append(H3,H4,P,Button,Span2);


                            Div.append(Div2,Div3);


                            document.getElementById("wishlist-Data-container").append(Div);
           



       }






    }


    
      


       



 }



 DisplayData( Wishlist_DAta );




//  //  //  //  //  //  //  //  // Remove From wishlist Function // // // // // // // 




 function DeleteFromWishlist (index) {



        Wishlist_DAta.splice(index,1);


        console.log( Wishlist_DAta);

        localStorage.setItem("Wishlist-Data", JSON.stringify ( Wishlist_DAta ));

        document.getElementById("wishlist-Data-container").innerHTML = "";

        alert("item Removed From Wishlist");

        DisplayData( Wishlist_DAta );


 













 }




 console.log(Wishlist_DAta)