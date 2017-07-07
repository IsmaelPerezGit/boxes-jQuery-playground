/* ### Exercise 1 - DOM Ready

Reference [this page](https://learn.jquery.
com/using-jquery-core/document-ready/). Add a
callback function to ready that alerts a message
saying, ready for DOM manipulation.
 Try using both styles of callbacks. */
$(document).ready(function() {
  console.log("ready for DOM manipulation!");


  /**********************************************************************
  ### Exercise 2 - Selectors, CSS, Attributes

  Go to the [MDN docs for selectors](https://developer.
  mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors).
  Read through the docs to get an idea of how selectors
   work.  Next, look at the [jQuery page on selectors](https://learn.
   jquery.com/using-jquery-core/selecting-elements/).*/

  /*1. Find the secretBox on the page. Set the background color to white.
     Add an h1 tag that says, "secret box!"*/
  $("#secretBox").css("backgroundColor", "white");
  $("#secretBox").append("<h1></h1>");
  $("h1").attr("id", "secretBoxHeader");
  $("#secretBoxHeader").text("Secret Box!");

  /* 2. Find all child divs of the first row.  Add the class boxType3 to all
     of these divs. */

  $("#row1").children().addClass("boxType3");

  /*3. Make the last box in the last row disappear. (Hint, look into the dispaly
   style.  Also, you should only get back one element from your selector.).*/
  $("div").last().remove();

  // 4. Change all red boxes to white.
  $(".boxType1").css("background", "white");

  /*5. Get the first two divs in the second row.  Take away all styling from the divs.*/
$("#row2 div:nth-child(1)").removeAttr("style");
$("#row2 div:nth-child(2)").removeAttr("style");

  /*6. Get all divs inside the container that are not row divs and are not the secret
   box div.  Set the width of the divs to 2 pixels.*/
$("div:not(#container, .row, #secretBox)").css("width", ("2px"))

});
