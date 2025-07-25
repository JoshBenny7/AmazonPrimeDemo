function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
const swiperContainer1 = document.querySelector('.swiper-container-1');
const wrapper1 = swiperContainer1.querySelector('.wrapper');
const cards1 = wrapper1.querySelectorAll('.card');
const prevButton1 = swiperContainer1.querySelector('.swiper-button-prev');
const nextButton1 = swiperContainer1.querySelector('.swiper-button-next');

// Initialize the current index to track the current visible card for the first swiper
let currentIndex1 = 0;
const totalCards1 = cards1.length;
const visibleCards1 = 4;  // Number of cards visible in one view (adjust if needed)

// Function to update the first swiper's position
function updateSwiper1() {
    const cardWidth = cards1[0].offsetWidth;  // Get the width of one card
    const gap = parseInt(window.getComputedStyle(cards1[0]).marginRight);  // Get the gap between cards
    const moveDistance = (cardWidth + gap) * visibleCards1;  // Calculate the total move distance
    const maxIndex1 = Math.ceil(totalCards1 / visibleCards1) - 1;  // Maximum index we can slide to

    // Move the wrapper left or right based on the current index
    wrapper1.style.transform = `translateX(-${currentIndex1 * moveDistance}px)`;

    // Disable prev/next buttons at the limits
    prevButton1.disabled = (currentIndex1 === 0);
    nextButton1.disabled = (currentIndex1 === maxIndex1);
}

// Next button functionality for the first swiper
nextButton1.addEventListener('click', () => {
    if (currentIndex1 < Math.ceil(totalCards1 / visibleCards1) - 1) {
        currentIndex1++;
        updateSwiper1();
    }
});

// Previous button functionality for the first swiper
prevButton1.addEventListener('click', () => {
    if (currentIndex1 > 0) {
        currentIndex1--;
        updateSwiper1();
    }
});

// Initialize the first swiper display
updateSwiper1();


// Second swiper logic for the top movies
const swiperContainer2 = document.querySelector('.swiper-container-2');
const wrapper2 = swiperContainer2.querySelector('.wrapper');
const cards2 = wrapper2.querySelectorAll('.card');
const prevButton2 = swiperContainer2.querySelector('.swiper-button-prev_2');
const nextButton2 = swiperContainer2.querySelector('.swiper-button-next_2');

// Initialize the current index to track the current visible card for the second swiper
let currentIndex2 = 0;
const totalCards2 = cards2.length;
const visibleCards2 = 4;  // Number of cards visible in one view (adjust if needed)

// Function to update the second swiper's position
function updateSwiper2() {
    const cardWidth = cards2[0].offsetWidth;  // Get the width of one card
    const gap = parseInt(window.getComputedStyle(cards2[0]).marginRight);  // Get the gap between cards
    const moveDistance = (cardWidth + gap) * visibleCards2;  // Calculate the total move distance
    const maxIndex2 = Math.ceil(totalCards2 / visibleCards2) - 1;  // Maximum index we can slide to

    // Move the wrapper left or right based on the current index
    wrapper2.style.transform = `translateX(-${currentIndex2 * moveDistance}px)`;

    // Disable prev/next buttons at the limits
    prevButton2.disabled = (currentIndex2 === 0);
    nextButton2.disabled = (currentIndex2 === maxIndex2);
}

// Next button functionality for the second swiper
nextButton2.addEventListener('click', () => {
    if (currentIndex2 < Math.ceil(totalCards2 / visibleCards2) - 1) {
        currentIndex2++;
        updateSwiper2();
    }
});

// Previous button functionality for the second swiper
prevButton2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
        updateSwiper2();
    }
});

// Initialize the second swiper display
updateSwiper2();

// Thrid swiper logic for the top movies
const swiperContainer3 = document.querySelector('.swiper-container-3');
const wrapper3 = swiperContainer3.querySelector('.wrapper');
const cards3 = wrapper3.querySelectorAll('.card');
const prevButton3 = swiperContainer3.querySelector('.swiper-button-prev_3');
const nextButton3 = swiperContainer3.querySelector('.swiper-button-next_3');

// Initialize the current index to track the current visible card for the second swiper
let currentIndex3 = 0;
const totalCards3 = cards3.length;
const visibleCards3 = 4;  // Number of cards visible in one view (adjust if needed)

// Function to update the Thrid swiper's position
function updateSwiper3() {
    const cardWidth = cards3[0].offsetWidth;  // Get the width of one card
    const gap = parseInt(window.getComputedStyle(cards3[0]).marginRight);  // Get the gap between cards
    const moveDistance = (cardWidth + gap) * visibleCards3;  // Calculate the total move distance
    const maxIndex3 = Math.ceil(totalCards3 / visibleCards3) - 1;  // Maximum index we can slide to

    // Move the wrapper left or right based on the current index
    wrapper3.style.transform = `translateX(-${currentIndex3 * moveDistance}px)`;

    // Disable prev/next buttons at the limits
    prevButton3.disabled = (currentIndex3 === 0);
    nextButton3.disabled = (currentIndex3 === maxIndex3);
}

// Next button functionality for the Thrid swiper
nextButton3.addEventListener('click', () => {
    if (currentIndex3 < Math.ceil(totalCards3 / visibleCards3) - 1) {
        currentIndex3++;
        updateSwiper3();
    }
});

// Previous button functionality for the Thrid swiper
prevButton3.addEventListener('click', () => {
    if (currentIndex3 > 0) {
        currentIndex3--;
        updateSwiper3();
    }
});

// Initialize the second swiper display
updateSwiper3();
