document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     CARRUSEL
  ===================================================== */

  const track =
    document.getElementById("carouselTrack");

  const slides =
    document.querySelectorAll(".slide");

  const dotsContainer =
    document.getElementById("carouselDots");


  let currentIndex = 0;


  /* =====================================================
     INDICADORES
  ===================================================== */

  slides.forEach((_, index) => {

    const dot =
      document.createElement("span");

    dot.classList.add(
      "carousel-dot"
    );


    if (index === 0) {

      dot.classList.add(
        "active"
      );

    }


    dotsContainer.appendChild(dot);

  });


  const dots =
    document.querySelectorAll(
      ".carousel-dot"
    );


  /* =====================================================
     CAMBIO DE FOTO
  ===================================================== */

  function changeSlide() {

    currentIndex++;


    if (
      currentIndex >=
      slides.length
    ) {

      currentIndex = 0;

    }


    track.style.transform =
      `translateX(-${currentIndex * 100}%)`;


    dots.forEach(
      (dot, index) => {

        dot.classList.toggle(
          "active",
          index === currentIndex
        );

      }
    );

  }


  /*
    Cambia automáticamente
    cada 4.5 segundos.
  */

  setInterval(
    changeSlide,
    4500
  );


  /* =====================================================
     MÚSICA
  ===================================================== */

  const musicButton =
    document.getElementById(
      "playMusicBtn"
    );

  const music =
    document.getElementById(
      "bgMusic"
    );


  if (
    musicButton &&
    music
  ) {

    let playing = false;


    musicButton.addEventListener(
      "click",
      () => {


        if (!playing) {

          music
            .play()
            .then(() => {

              playing = true;

              musicButton.innerHTML =
                '<span class="music-icon">❚❚</span>';

            })
            .catch(() => {

              console.log(
                "El navegador bloqueó la reproducción."
              );

            });


        } else {

          music.pause();

          playing = false;

          musicButton.innerHTML =
            '<span class="music-icon">♪</span>';

        }

      }
    );

  }

});