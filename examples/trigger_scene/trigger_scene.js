const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: '#container', // point of execution
  duration: '500',
  offset: '100px',
})
  .setPin('#block')
  .addIndicators()
  .addTo(controller);

// new ScrollMagic.Scene({
//   triggerElement: '#container2', // point of execution
//   duration: '500',
//   triggerHook: 0.3,
// })
//   .setPin('#block2')
//   .addIndicators()
//   .addTo(controller);
