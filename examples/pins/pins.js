var controller = new ScrollMagic.Controller();
var containerScene = new ScrollMagic.Scene({
  triggerElement: '#container',
  duration: 500, // removing duration pins element til end of page
})
  .setPin('#block')
  .addIndicators()
  .addTo(controller);
