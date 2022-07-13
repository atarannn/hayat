function sideSwitchArrow(swiper, arrowArgs, conArgs) {
  const arrow = arrowArgs;
  const container = conArgs;
  const mediumCordValue = document.documentElement.clientWidth / 2;
  document.body.append(arrow);
  container.style.cursor = 'none';
  arrow.style.cursor = 'none';
  arrow.style.zIndex = 10;
  arrow.__proto__.hide = function some() {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
  };
  arrow.__proto__.show = function some() {
    this.style.opacity = '1';
  };
  arrow.dataset.side = 'leftSide';
  arrow.hide();

  container.addEventListener('mousemove', desktopNavButtonHandler);
  container.addEventListener('mouseenter', () => {
    arrow.show();
  });
  container.addEventListener('mouseleave', () => {
    arrow.hide();
  });
  if (document.documentElement.clientWidth < 769) {
    window.removeEventListener('mousemove', desktopNavButtonHandler);
    arrow.remove();
  }

  if (document.documentElement.clientWidth < 992) {
    container.style.cursor = 'pointer';
    arrow.style.cursor = 'pointer';
  }

  function desktopNavButtonHandler(evt) {
    arrow.style.left = `${evt.clientX - 18}px`;
    arrow.style.top = `${evt.clientY - 18}px`;
    getCursorSide(evt.clientX);
  }

  function getCursorSide(x) {
    if (x < (mediumCordValue)) {
      arrow.classList.add('left-side');
      arrow.dataset.side = 'leftSide';
    } else {
      arrow.classList.remove('left-side');
      arrow.dataset.side = 'rightSide';
    }
  }
  container.addEventListener('click', () => {
    switchGallerySlide(arrow.dataset.side);
  });
  if (document.documentElement.clientWidth < 576) {
    container.removeEventListener('click', clickToChange);
  }
  const navigate = {
    leftSide: () => {
      swiper.slidePrev();
    },
    rightSide: () => {
      swiper.slideNext();
    },
  };

  function switchGallerySlide(side) {
    navigate[side]();
    return navigate.side;
  }
}
function sideSwitchArrow2(swiper, arrowArgs, conArgs) {
  const arrow = arrowArgs;
  const container = conArgs;
  const mediumCordValue = document.documentElement.clientWidth / 2;
  document.body.append(arrow);
  container.style.cursor = 'none';
  arrow.style.cursor = 'none';
  arrow.style.zIndex = 10;
  arrow.__proto__.hide = function some() {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
  };
  arrow.__proto__.show = function some() {
    this.style.opacity = '1';
  };
  arrow.dataset.side = 'leftSide';
  arrow.hide();

  container.addEventListener('mousemove', desktopNavButtonHandler);
  container.addEventListener('mouseenter', () => {
    arrow.show();
  });
  container.addEventListener('mouseleave', () => {
    arrow.hide();
  });
  if (document.documentElement.clientWidth < 769) {
    window.removeEventListener('mousemove', desktopNavButtonHandler);
    arrow.remove();
  }

  if (document.documentElement.clientWidth < 992) {
    container.style.cursor = 'pointer';
    arrow.style.cursor = 'pointer';
  }

  function desktopNavButtonHandler(evt) {
    arrow.style.left = `${evt.clientX - 18}px`;
    arrow.style.top = `${evt.clientY - 18}px`;
    getCursorSide(evt.clientX);
  }

  function getCursorSide(x) {
    if (x < (mediumCordValue)) {
      arrow.classList.add('left-side');
      arrow.dataset.side = 'leftSide';
    } else {
      arrow.classList.remove('left-side');
      arrow.dataset.side = 'rightSide';
    }
  }
  container.addEventListener('click', () => {
    switchGallerySlide(arrow.dataset.side);
  });
  if (document.documentElement.clientWidth < 576) {
    container.removeEventListener('click', clickToChange);
  }
  const navigate = {
    leftSide: () => {
      swiper.slidePrev();
    },
    rightSide: () => {
      swiper.slideNext();
    },
  };

  function switchGallerySlide(side) {
    navigate[side]();
    return navigate.side;
  }
}
function sideSwitchArrow3(swiper, arrowArgs, conArgs) {
  const arrow = arrowArgs;
  const container = conArgs;
  const mediumCordValue = document.documentElement.clientWidth / 2;
  document.body.append(arrow);
  container.style.cursor = 'none';
  arrow.style.cursor = 'none';
  arrow.style.zIndex = 10;
  arrow.__proto__.hide = function some() {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
  };
  arrow.__proto__.show = function some() {
    this.style.opacity = '1';
  };
  arrow.dataset.side = 'leftSide';
  arrow.hide();

  container.addEventListener('mousemove', desktopNavButtonHandler);
  container.addEventListener('mouseenter', () => {
    arrow.show();
  });
  container.addEventListener('mouseleave', () => {
    arrow.hide();
  });
  if (document.documentElement.clientWidth < 769) {
    window.removeEventListener('mousemove', desktopNavButtonHandler);
    arrow.remove();
  }

  if (document.documentElement.clientWidth < 992) {
    container.style.cursor = 'pointer';
    arrow.style.cursor = 'pointer';
  }

  function desktopNavButtonHandler(evt) {
    arrow.style.left = `${evt.clientX - 18}px`;
    arrow.style.top = `${evt.clientY - 18}px`;
    getCursorSide(evt.clientX);
  }

  function getCursorSide(x) {
    if (x < (mediumCordValue)) {
      arrow.classList.add('left-side');
      arrow.dataset.side = 'leftSide';
    } else {
      arrow.classList.remove('left-side');
      arrow.dataset.side = 'rightSide';
    }
  }
  container.addEventListener('click', () => {
    switchGallerySlide(arrow.dataset.side);
  });
  if (document.documentElement.clientWidth < 576) {
    container.removeEventListener('click', clickToChange);
  }
  const navigate = {
    leftSide: () => {
      swiper.slidePrev();
    },
    rightSide: () => {
      swiper.slideNext();
    },
  };

  function switchGallerySlide(side) {
    navigate[side]();
    return navigate.side;
  }
}
const slider = new Swiper('.main-swiper', {
  loop: false,
  speed: 1000,
  slidesPerView: 1.7,
  simulateTouch: false,
  spaceBetween: 70,
  navigation: {
    nextEl: document.querySelector('[data-next]'),
    prevEl: document.querySelector('[data-prev]'),
  },
  breakpoints: {
    1600: {
      slidesPerView: 1.7,
      spaceBetween: 70,
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 50,
    },
    575: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },
    320: {
      spaceBetween: 30,
    },
  },
});
const slider2 = new Swiper('.main-swiper2', {
  loop: false,
  speed: 1000,
  slidesPerView: 1.7,
  simulateTouch: false,
  spaceBetween: 70,
  navigation: {
    nextEl: document.querySelector('[data-next]'),
    prevEl: document.querySelector('[data-prev]'),
  },
  breakpoints: {
    1600: {
      slidesPerView: 1.7,
      spaceBetween: 70,
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 50,
    },
    575: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },
    320: {
      spaceBetween: 30,
    },
  },
});
const slider3 = new Swiper('.main-swiper3', {
  loop: false,
  speed: 1000,
  slidesPerView: 1.4,
  simulateTouch: false,
  spaceBetween: 70,
  navigation: {
    nextEl: document.querySelector('[data-next]'),
    prevEl: document.querySelector('[data-prev]'),
  },
  breakpoints: {
    1600: {
      slidesPerView: 1.4,
      spaceBetween: 70,
    },
    1024: {
      slidesPerView: 1.6,
      spaceBetween: 50,
    },
    575: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },
    320: {
      spaceBetween: 30,
    },
  },
});

sideSwitchArrow(
  slider,
  document.querySelector('.moving-arrow'),
  document.querySelector('.main-swiper'),
);

sideSwitchArrow2(
  slider2,
  document.querySelector('.moving-arrow2'),
  document.querySelector('.main-swiper2'),
);

sideSwitchArrow3(
  slider3,
  document.querySelector('.moving-arrow3'),
  document.querySelector('.main-swiper3'),
);
