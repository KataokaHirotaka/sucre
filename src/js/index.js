import Accordion from "./_Accordion";
import Anchor from "./_Anchor";
import Nav from "./_Nav";
import Slider from "./_Slider";
import Animation from "./_Animation";
import ScrollTop from "./_ScrollTop";

$(() => {
  new Nav().init();
  new Accordion().init();
  new Anchor().init();
  new Slider().init();
  new Animation().init();
  new ScrollTop().init();
});
