//  Movie-lists Image Slider

const arrows = document.querySelectorAll('.arrow');
// console.log(arrows);
const movieLists = document.querySelectorAll('.movie-list');
// console.log(movieLists);

arrows.forEach((arrow, idx) => {
    const itemLen = movieLists[idx].querySelectorAll('img').length;
    // console.log(itemLen);
    let clickCounter = 0;
    arrow.addEventListener('click', function () {
        // console.log('You clicked specific arrow', idx); // This click is for each arrow
        // console.log(movieLists[idx]); // Click is for specific movielist
        // movieLists[idx].style.backgroundColor = 'red'; // For demo
        clickCounter++; // Incrementing d clickCounter by 1
        // ------------------Responsive test variable--------------------------------------
        const screenRatio = Math.floor(window.innerWidth / 270);
        if (itemLen - (4 + clickCounter) + (4 - screenRatio) >= 0) {
            movieLists[idx].style.transform = `translate(${movieLists[idx].computedStyleMap().get('transform')[0].x.value - 270}px)`; /* After this(movieLists[idx].style.transform = `'translate(-100px)') its not gonna work perfect it'll overflow 2 handle give overflow property 4 parent & go n add transition 4 movie-list */
        } else {
            movieLists[idx].style.transform = 'translate(0)';
            clickCounter = 0;
        }
    });
    // Intial position (d movie-list) transform
    // console.log(movieLists[idx].computedStyleMap().get('transform')[0].x.value);
    // 2 get d total items (d movie-lists-items)
    // console.log(movieLists[idx].querySelectorAll('img')) // Gives u d present images lists
    // console.log(movieLists[idx].querySelectorAll('img').length) // Gives u d length
    // ------------------------Responsive test----------------------------------------
    // console.log(window.innerWidth);
    // console.log(window.innerWidth / 270);
    // console.log(Math.floor(window.innerWidth / 270));
});

// Toggling and changing background-color 2 dark theme

const ball = document.querySelector('.toggle-ball');
// console.log(ball);
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle');

ball.addEventListener('click', function () {
    items.forEach(item => {
        item.classList.toggle('active');
    });
    ball.classList.toggle('active');
}); 