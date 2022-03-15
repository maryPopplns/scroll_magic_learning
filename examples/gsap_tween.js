const controller = new ScrollMagic.Controller();

const blockTween = new TweenMax.to('#block', 0.25, {
  transform: 'translateX(100vw)',
});

const containerScene = new ScrollMagic.Scene({
  triggerElement: '#container',
})
  .setTween(blockTween)
  .addIndicators()
  .addTo(controller);
