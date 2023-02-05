window.addEventListener("load", function (e) {
    // header navbar menu toggle
    $("header .activeBars").click(function () {
      $("header .activeMenuBars").slideToggle(1000);
    })
    // headerLogin
    $("main .eyes").click(function () {
      var attr = $("main .pass input").attr("type");
      if (attr == "password") {
        $("main .pass input").attr("type", "text");
      } else {
        $("main .pass input").attr("type", "password");
      }
    });
  
    // header navbar signin form error Validation togirlash kerak
  
    $(".headerLogin button").click(function (e) {
      e.preventDefault();
      if ($(".headerLogin input").val() === "") {
        $(".errorMsg").show();
      } else {
        $(".errorMsg").hide();
      }
    });
  
    /// header navbar signin close
  
    $(".headerLogin .close").click(function () {
      $(".headerLogin").fadeOut(500);
    });
  
    $("main .signUp").click(function () {
      $(".headerLogin").fadeIn();
      $(".headerLogin").css("display", "flex");
    });
    // choose
    $(".choose .owl-carousel").owlCarousel({
      items: 4,
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      nav: true,
    });
    // design
    $(".Learn .close").click(function () {
      $(".Learn").fadeOut(500);
    });
  
    $(".design .signUp").click(function () {
      $(".Learn").fadeIn();
      $(".Learn").css("display", "flex");
    });
    $(".says .owl-carousel").owlCarousel({
      items: 4,
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      nav: true,
    });
})