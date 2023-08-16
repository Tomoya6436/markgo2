$(document).ready(function () {
  window.initializeSlick = function () {
    $(".slide-items")
      .slick({
        arrows: false,
        autoplay: false,
        dots: false,
        slidesToScroll: 1, // スライドする数
        slidesToShow: 1, // 表示するスライド枚数
        speed: 500,
        swipe: false,
        infinite: false,
      })
      .on("afterChange", function (event, slick, currentSlide) {
        $("ul li").each(function (index) {
          if (index === currentSlide) {
            // barImgを表示
            $(this).find(".barImg").css("visibility", "visible");

            // iconImgの色を変更
            var newIconSrc = "../menuIconAfter" + (index + 1) + ".svg";
            $(this).find(".menuImg").attr("src", newIconSrc);

            // pタグの文字色を変更
            $(this).find("p").css("color", "#5956E9");
          } else {
            // 他のスライドの設定をリセット
            $(this).find(".barImg").css("visibility", "hidden");
            var originalIconSrc = "../menuIcon" + (index + 1) + ".svg";
            $(this).find(".menuImg").attr("src", originalIconSrc);
            $(this).find("p").css("color", "#A3A2CE");
          }
        });
      });

    window.slickFunctions = {
      goNext: function () {
        $(".slide-items").slick("slickNext");
      },
      goPrev: function () {
        $(".slide-items").slick("slickPrev");
      },
    };
  };
});
