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

  // Product.html
});
