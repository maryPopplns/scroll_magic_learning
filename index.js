const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  offset: 100,
  duration: 400,
});

const blockTween = new TweenMax.to('#block', 1.5, {
  backgroundColor: 'red',
});
