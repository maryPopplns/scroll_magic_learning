const controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave',
    duration: '200%', // this works just fine with duration 0 as well
    // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
    // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
  },
});

// get all slides
const slides = document.querySelectorAll('section.panel');

// create scene for every slide
for (let i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i],
  })
    .setPin(slides[i], { pushFollowers: false })
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
}

(function reveal() {
  const content = Array.from(document.getElementsByClassName('content'));
  for (let i = 0; i < content.length; i++) {
    const offsetHeight = content[i].offsetHeight / 2;
    new ScrollMagic.Scene({
      triggerElement: `#${content[i].id}`,
      triggerHook: 0.5,
      offset: offsetHeight,
    })
      .setClassToggle(`#${content[i].id}`, 'visible')
      .addIndicators()
      .addTo(secondController); // controller need to be intialized before the body
  }
})();

(function swordAnimation() {
  const controller1 = new ScrollMagic.Controller();

  // create multiple elements and try to get them to snap into position

  const firstBlock = new TweenMax.to('#first', 0.75, {
    transform: 'translateX(55vw)',
    display: 'block',
  });
  const secondBlock = new TweenMax.to('#second', 0.75, {
    transform: 'translateX(-55vw)',
    display: 'block',
  });
  const thirdBlock = new TweenMax.to('#third', 0.75, {
    transform: 'translateY(-55vh)',
    display: 'block',
  });
  const blocks = [firstBlock, secondBlock, thirdBlock];
  for (let i = 0; i < blocks.length; i++) {
    const containerScene = new ScrollMagic.Scene({
      triggerElement: '.blue',
      triggerHook: 'onLeave',
    })
      .setTween(blocks[i])
      .addIndicators()
      .addTo(controller1);
  }
})();
