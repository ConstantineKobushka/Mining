$(function () {
  $(".questions__content-item--title").on("click", function () {
    $(".questions__content-item").removeClass(
      "questions__content-item--active"
    );
    $(this).parent().addClass("questions__content-item--active");
  });

  $(".menu__btn").on("click", function () {
    $(".header__menu-list").toggleClass("header__menu-list--active");
  });

  $(".footer__item-title").on("click", function () {
    $(this).toggleClass("footer__item-title--active");
    $(this).next().slideToggle();
  });
});
