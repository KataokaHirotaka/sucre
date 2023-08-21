// CDNを使ってswpierを読み込んでいる
export default class Slider {
  constructor() {}

  init() {
    const option = {
      loop: true, //繰り返しをする
      // centeredSlides: true, //アクティブなスライドを中央に表示
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      slidesperGroup: 1, // 一度に動かすスライドの枚数
      createElements: true,
      slidesPerView: 1, //スライドの表示枚数　初期値
      spaceBetween: 32, //スライド間の距離を16pxに
      speed: 2000, //スライドの推移時間を600msにs
      slidesPreview: 3,
      breakpoints: {
        768: {
          slidesPerView: 3,
          // speed: 4000,
        },
        1020: {
          slidesPerView: 3,
          spaceBetween: 16,
          // autoplay: {
          //   delay: 5000,
          // },
        },
        // 1280: {
        //   spaceBetween: 42,
        //   // speed: 5000,
        // },
      },
    };
    const swiper = new Swiper(".swiper", option);
  }
}
