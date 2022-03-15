var controller = new ScrollMagic.Controller();
var containerScene = new ScrollMagic.Scene({
  triggerElement: '#container',
  // duration: 500,
})
  .setPin('#block')
  .addIndicators()
  .addTo(controller);
