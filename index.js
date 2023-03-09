let slide_index = 1;
let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
let slide4 = document.querySelector("#slide4");
let slide5 = document.querySelector("#slide5");
let slide6 = document.querySelector("#slide6");

function showSlide(n) {
  slide_index = slide_index + n;
  display(slide_index);
}

function display(n) {
  if (n == 1) {
    slide1.style.display = "block";
    slide2.style.display = "block";
    slide3.style.display = "none";
    slide4.style.display = "none";
    slide5.style.display = "none";
    slide6.style.display = "none";

    document.querySelector(".move_left_icon").style.pointerEvents = "none";
  } 
  else if (n == 2)
   {
    document.querySelector(".move_right_icon").style.pointerEvents = "auto";
    document.querySelector(".move_left_icon").style.pointerEvents = "auto";
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "block";
    slide4.style.display = "block";
    slide5.style.display = "none";
    slide6.style.display = "none";
  } 
  else
   {
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "none";
    slide4.style.display = "none";
    slide5.style.display = "block";
    slide6.style.display = "block";

    document.querySelector(".move_right_icon").style.pointerEvents = "none";
  }
}





// show more-------




$(document).ready(function () {

  $('#tg').on('click',function(){
      $('#buttomdiv').slideToggle(2000)
  })
})



// --------------------------------from validation----------------------------


$(document).ready(function () {
  console.log($);
  $("#error1").hide();
  $('#error2').hide();
  // $('#error3').hide();
  // $('#error4').hide();

  let user_no_err = true;
  let email_no_err = true;
  // let password_no_err = true;
  // let contact_no_err = true;





  // user name--------------------

  $("#username").keyup(function () {
    //   alert("username clicked")
    username_check();
  });

  function username_check() {
    let user_value = $("#username").val();
    let reg_user = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;

    if (user_value.length == "") {
      $("#error1").show();
      $("#error1").html("** Required field **");

      user_no_err = false;
      return false;
    } else if (!reg_user.test(user_value)) {
      $("#error1").show();
      $("#error1").html("** wrong pattern **");
      $("#error1").css({ "background-color": "none", color: "red" });
      user_no_err = false;
      return false;
    } else {
      $("#error1").hide();
      user_no_err = true;
      return true;
    }
  }

  // email--------------------------------------------------------------------


  $("#email").keyup(function () {
      // alert("email clicked")
    email_check();
  });

  function email_check() {
    let mail_value = $("#email").val();
    let reg_email = /^[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;

    if (mail_value.length == "") {
      $("#error2").show();
      $("#error2").html("** Required field **");

      email_no_err = false;
      return false;
    } else if (!reg_email.test(mail_value)) {
      $("#error2").show();
      $("#error2").html("** wrong pattern **");
      $("#error2").css({ "background-color": "none", color: "red" });
      email_no_err = false;
      return false;
    } else {
      $("#error2").hide();
      email_no_err = true;
      return true;
    }
  }


  // password-------------

  // $("#password").keyup(function () {
  //   // alert("password clicked")
  //   password_check();
  // });

  // function password_check() {
  //   let password_value = $("#password").val();
  //   let reg_password = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$/;

  //   if (password_value.length == "") {
  //     $("#error3").show();
  //     $("#error3").html("** Required field **");

  //     password_no_err = false;
  //     return false;
  //   } else if (!reg_password.test(password_value)) {
  //     $("#error3").show();
  //     $("#error3").html("** wrong pattern **");
  //     $("#error3").css({ "background-color": "none", color: "red" });
  //     password_no_err = false;
  //     return false;
  //   } else {
  //     $("#error3").hide();
  //     password_no_err = true;
  //     return true;
  //   }
  // }













  // contact-----------------------------------------------------


  // $("#contact").keyup(function () {
  //   // alert("contact clicked")
  //   contact_check();
  // });

  // function contact_check() {
  //   let contact_value = $("#contact").val();
  //   let reg_contact = /^[89]{1}[0-9]{9}$/;

  //   if (contact_value.length == "") {
  //     $("#error4").show();
  //     $("#error4").html("** Required field **");

  //     contact_no_err = false;
  //     return false;
  //   } else if (!reg_contact.test(contact_value)) {
  //     $("#error4").show();
  //     $("#error4").html("** wrong pattern **");
  //     $("#error4").css({ "background-color": "none", color: "red" });
  //     contact_no_err = false;
  //     return false;
  //   } else {
  //     $("#error4").hide();
  //     contact_no_err = true;
  //     return true;
  //   }
  // }



  $(".submit").click(function () {
    user_no_err = true;
    // password_no_err = true;
    email_no_err = true;
    // contact_no_err = true;
    username_check();
    // password_check();
    email_check();
    // contact_check();
    if (user_no_err == true && email_no_err == true ) {
      return true;
    }
    else {
      return false;

    }

  });


});





