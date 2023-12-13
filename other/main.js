const tabs = document.querySelectorAll(".tabs-container .tab");
const contents = document.querySelectorAll(".tabs-container .content");

const removeActiveClass = () => {
  tabs.forEach((t) => {
    t.classList.remove("active");
  });

  contents.forEach((c) => {
    c.classList.remove("active");
  });
};

tabs.forEach((t, i) => {
  t.addEventListener("click", () => {
    removeActiveClass();
    contents[i].classList.add("active");
    t.classList.add("active");
  });
});

function tipsHide () {
  $('.tabs').css('width', '80px');
  $('.content-container').css('width', 'calc(100% - 80px)');
  $('.tab span').hide();
}

$('.content-container').click(function () {
  tipsHide ()
});

function tipsShow() {
  $('.tabs').css('width', '20%');
  $('.content-container').css('width', 'calc(100% - 250px)');
  $('.tab span').show();
}

var time;
$('.tabs').click(function () {
  tipsShow();
  clearTimeout(time);
  time = setTimeout(function(){tipsHide()},3000);
});

$('.moon').show();
$('.sun').hide();
$('.dark').click(function () {
  if ($('.dark').val() == 'light') {
    $('.dark').val('dark'); //now is dark
    $('.moon').hide();
    $('.sun').show();
    $('.tabs').css('background-color',  '#000');
    $('.content-container').css('background-color', '#1a1a1a');
    $('body').css('background-color', '#3f3f3f');
    $('body').css('color', '#fff');
    $('.card').css('background-color', 'rgba(255, 255, 255, 0.2)');
    $('.dark').css('background-color', '#fff')
    $('.tab:not(.tab.active)').css('background-color', '');
    $('.tab.active').css('background-color', '#1a1a1a');
    $('.tab svg:not(.tab.active svg)').css('fill', '#fff');
    $('.tab.active svg').css('fill', '#8581cb');
  }else if ($('.dark').val() == 'dark') {
    $('.dark').val('light'); //now is light
    $('.moon').show();
    $('.sun').hide();
    $('.tabs').css('background-color',  '#e2e8ff');
    $('.content-container').css('background-color', '#fff');
    $('body').css('background-color', '#fff');
    $('body').css('color', '#000');
    $('.card').css('background-color', 'rgba(255, 255, 255, 0.5)');
    $('.dark').css('background-color', '#000')
    $('.tab:not(.tab.active)').css('background-color', '');
    $('.tab.active').css('background-color', '#fff');
    $('.tab svg:not(.tab.active svg)').css('fill', '#000');
    $('.tab.active svg').css('fill', '#8581cb');
  }
});
$('.tab').click(function () {
  if ($('.dark').val() == 'dark') {
    $('.tab:not(.tab.active)').css('background-color', '');
    $('.tab.active').css('background-color', '#1a1a1a');
    $('.tab svg:not(.tab.active svg)').css('fill', '#fff');
    $('.tab.active svg').css('fill', '#8581cb');
  }
  if ($('.dark').val() == 'light') {
    $('.tab:not(.tab.active)').css('background-color', '');
    $('.tab.active').css('background-color', '#fff');
    $('.tab svg:not(.tab.active svg)').css('fill', '#000');
    $('.tab.active svg').css('fill', '#8581cb');
  }
});