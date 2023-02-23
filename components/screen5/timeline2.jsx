export default function ttimeline2(
  scrollSunTl,
  hauteurDefilementStep1,
  hauteurDefilementStep2
) {
  scrollSunTl.to("#zoom", {
    scrollTrigger: {
      trigger: "#container_move",
      // endTrigger: ".screen6",
      start: hauteurDefilementStep1 + " center", // which means "when the top of the trigger hits 40px above the bottom of the viewport
      end: hauteurDefilementStep2 + " center",
      toggleActions: "play none none reset",
      // markers: true,
      scrub: 1,
    },
    duration: scrollSunTl.duration(),
    // opacity: 1,
    // scale: 500,
    color: "red",
    // height: "10vh",
    // fontSize: "10vh",
    // lineHeight: "10vh",
  });

  return scrollSunTl;
}
