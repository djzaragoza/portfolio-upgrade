/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

function checkScroll() {
  // @ts-ignore
  if ($(window).scrollTop() >= 300) {
    // @ts-ignore
    $(".navbar").addClass("solid");
  } else {
    // @ts-ignore
    $(".navbar").removeClass("solid");
  }
}

/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
// @ts-ignore
$(document).ready(function () {
  checkScroll();
  // @ts-ignore
  $(window).scroll(checkScroll);
  // @ts-ignore
  $(".navbar-toggler").click(function () {
    // @ts-ignore
    if ($(window).scrollTop() <= 300) {
      // @ts-ignore
      $("nav.navbar").toggleClass("solid-toggle");
    }
  });
});
/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK ==========*/

// @ts-ignore
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  // @ts-ignore
  $(".navbar-toggler").addClass("collapsed");
  // @ts-ignore
  $("#navbarResponsive").removeClass("show");

  setTimeout(function () {
    // @ts-ignore
    $("nav.navbar").removeClass("solid-toggle");
  }, 300);

  // @ts-ignore
  $("html, body").animate(
    {
      // @ts-ignore
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});

/*========== BOUNCING DOWN ARROW ==========*/
// @ts-ignore
$(document).ready(function () {
  // @ts-ignore
  $(window).scroll(function () {
    // @ts-ignore
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  });
});

/*========== LIGHTBOX IMAGE GALLERY ==========*/

/*========== MEET THE TEAM CAROUSEL ==========*/

/*========== SKILLS COUNTER ==========*/

/*========== CLIENTS CAROUSEL ==========*/

/*========== TOP SCROLL BUTTON ==========*/

/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/

/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
// @ts-ignore
$(function () {
  // a self calling function
  function onScrollInit(items, trigger) {
    // a custom made function
    items.each(function () {
      //for every element in items run function
      // @ts-ignore
      var osElement = $(this), //set osElement to the current
        osAnimationClass = osElement.attr("data-animation"), //get value of attribute data-animation type
        osAnimationDelay = osElement.attr("data-delay"); //get value of attribute data-delay time

      osElement.css({
        //change css of element
        "-webkit-animation-delay": osAnimationDelay, //for safari browsers
        "-moz-animation-delay": osAnimationDelay, //for mozilla browsers
        "animation-delay": osAnimationDelay, //normal
      });

      var osTrigger = trigger ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

      osTrigger.waypoint(
        function () {
          //scroll upwards and downwards
          osElement.addClass("animated").addClass(osAnimationClass); //add animated and the data-animation class to the element.
        },
        {
          triggerOnce: true, //only once this animation should happen
          offset: "70%", // animation should happen when the element is 70% below from the top of the browser window
        }
      );
    });
  }

  // @ts-ignore
  onScrollInit($(".os-animation")); //function call with only items
  // @ts-ignore
  onScrollInit($(".staggered-animation"), $(".staggered-animation-container")); //function call with items and trigger
});

/*========== CONTACT FORM INPUT VALIDATION ==========*/
//Original Resource: https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form
// @ts-ignore
$(function () {
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  // @ts-ignore
  $("#contact-form").validator();

  // when the form is submitted
  // @ts-ignore
  $("#contact-form").on("submit", function (e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "contact/contact.php";

      // POST values in the background the the script URL
      // @ts-ignore
      $.ajax({
        type: "POST",
        url: url,
        // @ts-ignore
        data: $(this).serialize(),
        success: function (data) {
          // data = JSON object that contact.php returns

          // we receive the type of the message: success x danger and apply it to the
          var messageAlert = "alert-" + data.type;
          var messageText = data.message;

          // let's compose Bootstrap alert box HTML
          var alertBox =
            '<div class="alert ' +
            messageAlert +
            ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            messageText +
            "</div>";

          // If we have messageAlert and messageText
          if (messageAlert && messageText) {
            // inject the alert to .messages div in our form
            // @ts-ignore
            $("#contact-form").find(".messages").html(alertBox);
            // empty the form
            // @ts-ignore
            $("#contact-form")[0].reset();
          }
        },
      });
      return false;
    }
  });
});
