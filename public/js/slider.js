$(window).on("load",function(){

  var boxes = $(".box"),
      stage = $(".inner");
  
  TweenLite.set(stage, {
    css: {
      perspective: 1100,
      transformStyle: "preserve-3d"
    }
  });
  
  boxes.each(function(index, element) {
    TweenLite.set(element, {
      css: {
        rotationY: index * 800 / 20,
        transformOrigin: "50% 50% -520"
      }
    });
    TweenMax.to(element, 20, {
      css: {
        z:0.1,
        rotationY: "+=159"
      },
      repeat: 6, // 20
      ease: Linear.easeNone
    });
  });
    
  });