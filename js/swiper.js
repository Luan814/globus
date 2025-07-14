//section1

gsap.registerPlugin(ScrollTrigger);
   
     gsap.fromTo(".section2 .card",
       {
         y: 50,
         opacity: 0
       },
       {
         y: 0,
         opacity: 1,
         duration: 3,
         ease: "power2.out",
         scrollTrigger: {
           trigger: ".section2 .card",
           start: "top 80%",
           toggleActions: "play reset play reset", // <== 포인트!
           // play: 들어올 때 실행
           // reset: 다시 스크롤 벗어나면 리셋해서 다시 실행
         }
       }
     );

     gsap.fromTo(".section3",
      {
        y: 80,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section3",
          start: "top 80%",
          toggleActions: "play reset play reset"
        }
      }
    );
        
    gsap.fromTo(".section6 .career-overlay",
      {
        y: 50,
        scale: 0.5,
        opacity: 0.5
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".section6",
          start: "top 80%",
          end: "center center",
          scrub: 0.8,
          // markers: true, // 디버깅용
        },
        ease: "power2.out"
      }
    );
    gsap.fromTo(".section6 .career-box",
      {
        y: 80,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section6 .career-box",
          start: "top 80%",
          toggleActions: "play reset play reset"
        }
      }
    );

//section4

const swiperE2 = document.querySelector('.news-swiper');
          
Object.assign(swiperE2, {
  slidesPerView: 5,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1140: {
      slidesPerView: 3
    },
    1141: {
      slidesPerView: 5
    }
  }
});

