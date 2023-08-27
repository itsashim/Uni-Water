"use  strict";
$(document).ready(function () {
  function toggleHide() {
    $(".layout_1").toggleClass("hide");
    $(".layout_2").toggleClass("hide");
  }

  $(".form_next").on("click", function () {
    toggleHide();
  });

  $(".form_back").on("click", function () {
    toggleHide();
  });

  $(".book_a_call").on("click", function () {
    $(".layout_2").toggleClass("hide");
    $(".layout_3").toggleClass("hide");
  });

  $(".proceed_to_pay").on("click", function () {
    $(".layout_3").toggleClass("hide");
    $(".layout_4").toggleClass("hide");
  });

  $("#myForm").submit(function (event) {
    event.preventDefault();

    var username = $('input[name="name').val();

    $(".formName").html(username);
  });

  // Product.html  (Turn key solutions  //  Clean Water as  Service)

  $("#turn_key").prop("checked", true);

  $("#turn_key").on("change", function () {
    if ($(this).prop("checked")) {
      $("#clean_service").prop("checked", false);
    }
  });

  $("#clean_service").on("change", function () {
    if ($(this).prop("checked")) {
      $("#turn_key").prop("checked", false);
    }
  });

  var showMore = $(".view_all").html("View all Cities");

  $(".view_all").on("click", function () {
    $(".citys").toggleClass("hide");
    $(".cityss").toggleClass("hide");
    $(this).html(
      $(this).html() == "Show Less" ? "View all Cities" : "Show Less"
    );
  });

  // Product.html End

  // your_cart.html || your_cart.scss)(product_increaser)
  const productValueArr = [];
  let productValue = 0;
  $(".product_value").html(productValueArr.length);
  $("#product_increaser").on("click", function () {
    productValue++;
    productValueArr.push(productValue);
    console.log(productValueArr);
    $(".product_value").html(productValueArr.length);
  });
  $("#product_decreaser").on("click", function () {
    productValue--;
    productValueArr.pop();
    console.log(productValueArr);
    $(".product_value").html(productValueArr.length);
  });

  console.log(productValueArr);

  // your_cart.html || your_cart.scss)(product_increaser) End

  // Add new address
  // shipping_info
  $("#add_new_address").on("click", function () {
    $(".add_address").toggleClass("show_address_form");
  });

  $(".close_address_form").on("click", function () {
    $(".add_address").toggleClass("show_address_form");
  });

  // Add new address End
});
