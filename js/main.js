document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const progressBarContainer = document.getElementById("progress-bar-container");
  const progressBar = document.getElementById("progress-bar");

  // 동영상 재생 시 프로그래스 바 업데이트
  video.addEventListener("timeupdate", function () {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percentage + "%";
  });

  // 프로그래스 바 클릭 시 동영상 위치 변경
  progressBarContainer.addEventListener("click", function (event) {
    const rect = progressBarContainer.getBoundingClientRect();
    const posX = event.clientX - rect.left;
    const percentage = posX / rect.width;
    video.currentTime = percentage * video.duration;
  });

  // header

  $(".btn_ham").click(function () {
    $(".btn_ham").hide();
    $(".mgnb_close, .mgnb_wrap, .mgnb_dim").fadeIn();
    $("#header").css({ "background": "#fff" });
  });

  $(".mgnb_close, .mgnb li a").click(function () {
    $(".btn_ham").show();
    $(".mgnb_close").hide();
    $(".mgnb_wrap, .mgnb_dim").fadeOut();
    $("#header").css({ "background": "transparent" });
  });

  const mob_list = new Swiper('.mob_list', {
    loop: true,
    speed: 1000,
    /* autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }, */
    pagination: {// 슬라이드 갯수(하단 불릿기호) - 태그추가
      el: ".swiper-pagination",
      type: "bullets",// normal "bullets" "fraction"(숫자), "progressbar"
      clickable: true,
    },

    mousewheel: {
      invert: false,
    },
  });

  let mobility = $(".mobility_name li");
  $(".mobility_name li").eq(0).addClass("active");
  $(".mobility_con > div").eq(1).hide();

  $(".mobility_name li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".mobility_con > div").eq(num).fadeToggle(1000).siblings().hide();
  });

  //gotop
  $(window).scroll(function () {
    let btnScroll = $(this).scrollTop();
    if (btnScroll > 550) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });

  $(".gotop").click(function () {
    $(window).scrollTop(0);
  });
});