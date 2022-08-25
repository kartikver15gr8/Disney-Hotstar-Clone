let movies = [
  {
    name: "Multiverse Of Madness",
    des: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.",
    image: "images/multi.PNG",
  },
  {
    name: "Nobody",
    des: "Hutch Mansell finds his life changed when a few thieves break into his house. While trying to punish the thieves, he ends up earning the wrath of a crime lord, Yulian, after he attacks his brother.",
    image: "images/Nobody.PNG",
  },
  {
    name: "Conjuring 2",
    des: "Peggy, a single mother of four children, seeks the help of occult investigators Ed and Lorraine Warren when she and her children witness strange, paranormal events in their house.",
    image: "images/Conjuring.PNG",
  },
  {
    name: "The Kashmir Files",
    des: 'Krishna endeavours to uncover the reason behind his parents brutal killings in Kashmir. He is shocked to uncover a web of lies and conspiracies in connection with the massive genocide.',
    image: "images/slider 6.PNG",
  },
  {
    name: "Bahubali 2: The Conclusion",
    des: 'After learning that his father was brutally killed by Bhallaladeva, Mahendra Baahubali raises an army to defeat him and release his mother from the former"s captivity.',
    image: "images/slider 7.PNG",
  },
  {
    name: "Django Unchained",
    des: 'When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.',
    image: "images/slider 8.PNG",
  }
  ];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // to track current slide index.
const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i = 0; i < 3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

// Video Cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

// Card Sliders


let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
