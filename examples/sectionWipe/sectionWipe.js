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

// const secondController = new ScrollMagic.Controller();

(function sectionWipe() {
  const content = Array.from(document.getElementsByClassName('content'));
  for (let i = 0; i < content.length; i++) {
    const offsetHeight = content[i].offsetHeight / 2;
    new ScrollMagic.Scene({
      triggerElement: `#${content[i].id}`,
      triggerHook: 0.5, // show, when scrolled 10% into view
      offset: offsetHeight,
    })
      .setClassToggle(`#${content[i].id}`, 'visible') // add class to reveal
      .addIndicators() // add indicators (requires plugin)
      .addTo(secondController);
  }
})();
