/* =====================================================
   CARRUSEL AUTOMÁTICO
===================================================== */

const carouselTrack =
  document.getElementById("carouselTrack");

const carouselDots =
  document.getElementById("carouselDots");

const slides =
  document.querySelectorAll(".slide");

let currentSlide = 0;

let autoPlay;



/* =====================================================
   CREAR LOS PUNTOS
===================================================== */

slides.forEach((_, index) => {

  const dot =
    document.createElement("button");

  dot.classList.add(
    "carousel-dot"
  );

  dot.setAttribute(
    "aria-label",
    `Ir a la fotografía ${index + 1}`
  );


  dot.addEventListener(
    "click",
    () => {

      goToSlide(index);

      restartAutoPlay();

    }
  );


  carouselDots.appendChild(dot);

});


const dots =
  document.querySelectorAll(
    ".carousel-dot"
  );



/* =====================================================
   CAMBIAR FOTO
===================================================== */

function goToSlide(index) {

  currentSlide = index;


  carouselTrack.style.transform =
    `translateX(-${currentSlide * 100}%)`;


  dots.forEach(
    (dot, i) => {

      dot.classList.toggle(
        "active",
        i === currentSlide
      );

    }
  );

}



/* =====================================================
   SIGUIENTE FOTO
===================================================== */

function nextSlide() {

  currentSlide++;


  if (
    currentSlide >= slides.length
  ) {

    currentSlide = 0;

  }


  goToSlide(currentSlide);

}



/* =====================================================
   REPRODUCCIÓN AUTOMÁTICA
===================================================== */

function startAutoPlay() {

  autoPlay =
    setInterval(
      nextSlide,
      4500
    );

}


function restartAutoPlay() {

  clearInterval(autoPlay);

  startAutoPlay();

}



/* =====================================================
   INICIAR CARRUSEL
===================================================== */

goToSlide(0);

startAutoPlay();



/* =====================================================
   PREGUNTA FINAL
===================================================== */

const questionButton =
  document.getElementById(
    "questionButton"
  );


const answerArea =
  document.getElementById(
    "answerArea"
  );


questionButton.addEventListener(
  "click",
  () => {

    answerArea.classList.toggle(
      "open"
    );


    const isOpen =
      answerArea.classList.contains(
        "open"
      );


    if (isOpen) {

      questionButton.querySelector(
        "span"
      ).textContent = "♡";


      questionButton.querySelector(
        "small"
      ).textContent =
        "Hay algo que quiero preguntarte";

    } else {

      questionButton.querySelector(
        "span"
      ).textContent = "Abrir";


      questionButton.querySelector(
        "small"
      ).textContent =
        "Tengo algo que decirte";

    }

  }
);



/* =====================================================
   MÚSICA
===================================================== */

const bgMusic =
  document.getElementById(
    "bgMusic"
  );


let musicStarted = false;


document.addEventListener(
  "click",
  () => {

    if (musicStarted) {
      return;
    }


    bgMusic.volume = 0.30;


    bgMusic
      .play()
      .then(() => {

        musicStarted = true;

      })
      .catch(() => {

        /*
          Algunos navegadores bloquean
          la reproducción automática.
        */

      });

  },
  { once: true }
);
