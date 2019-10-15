ml.timelines["ml8"] = anime
  .timeline({ loop: false })
  .add({
    targets: ".ml8 .circle-white",
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  })
  .add({
    targets: ".ml8 .circle-container",
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: "-=1000"
  })
  .add({
    targets: ".ml8 .circle-dark",
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: "-=600"
  })
  .add({
    targets: ".ml8 .letters-left",
    scale: [0, 1],
    duration: 1200,
    offset: "-=550"
  })
  .add({
    targets: ".ml8 .bang",
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: "-=1000"
  })
  .add({
    targets: ".ml8",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });
anime({
  targets: ".ml8 .circle-dark-dashed",
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: false
});

setTimeout(() => {
  document.getElementById("preloader2").style.display = "none";
  console.log("Hi I am");
  document.getElementById("preloader3").style.display = "block";
  $(".ml11 .letters").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });
  ml.timelines["ml11"] = anime
    .timeline({ loop: false })
    .add({
      targets: ".ml11 .line",
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: ".ml11 .line",
      translateX: [0, $(".ml11 .letters").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    })
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: function(el, i) {
        return 34 * (i + 1);
      }
    })
    .add({
      targets: ".ml11",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
}, 5000);

setTimeout(() => {
  document.getElementById("preloader3").style.display = "none";
  console.log("What the hell");
  document.getElementById("main2").style.display = "block";
}, 10000);
