# Scroll Magic

## <ins>Tween</ins>

- In Animation jargon a Tween is a transition. It's going from one state to another.

## <ins>Pins</ins>

- Pinning an element to its place so the scroll of the page continues, but the element remains at the same place.

## <ins>Scene Trigger Position</ins>

- The point of execution
- three parameters that 'makeup' the starting position:

  1. <ins>offset</ins> : Offsets trigger point by specified distance
  2. <ins>triggerElement</ins> : a selector, DOM object or jQuery Object that defines the start of the scene
  3. <ins>triggerHook</ins> : postition of trigger, in realation to the viewport (values: [0.0 - 1.0] / ['onLeave', 'onCenter', 'onEnter'])

```
var scene = new ScrollMagic.Scene({
  triggerElement: '#scroll-trigger',
  offset: '50px',
  tiggerHook: '.5'
});
```
