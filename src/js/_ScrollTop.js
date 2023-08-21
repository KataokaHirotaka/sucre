export default class ScrollTop {
  constructor() {
    this.$toTopBtn = $(".js-to-top");
  }
  init() {
    this.$toTopBtn.hide();
    this.addEvents();
  }

  addEvents() {
    $(window).on("scroll", () => this.onScroll());
    this.$toTopBtn.on("click", () => this.onClick());
  }

  onClick() {
    $("body,html").animate({ scrollTop: 0 }, 800, "swing");
    return false;
  }
  onScroll() {
    // スクロールトップボタンの表示、非表示を切り替える実装
    if ($(window).scrollTop() > 800) {
      this.$toTopBtn.fadeIn();
    } else {
      this.$toTopBtn.fadeOut();
    }
  }
}
