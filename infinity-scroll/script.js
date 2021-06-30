'use script';

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let ready = false;
let imgLoaded = 0;
let totalImages = 0;
let photosArray = [];
// Unsplash api
const count = 30;
const apiKey = 'GtVexzvGtyNjBHT9FpzMGJT2RUJWT4UO8XcutVnRxPc';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// check if all images are loaded
const imageLoaded = () => {
  imgLoaded++;
  if (imgLoaded === totalImages) {
    loader.hidden = true;
    ready = true;
  }
  console.log('image loaded');
};

// create elements for links & photos ,add to dom
const displayPhotos = () => {
  imgLoaded = 0;
  totalImages = photosArray.length;
  // run function for each object in photosArray
  photosArray.forEach((photo) => {
    console.log('anis');
    // create <a> to link to Unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // create <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    // Event listener ,check when each is finished loadin
    img.addEventListener('load', imageLoaded);
    // Put <img> inside <a> then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

// get photos from unsplash api

const getPhotos = async () => {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener('scroll', () => {
  // for infinity scroll
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    getPhotos();
  }
  console.log('innerheight', window.innerHeight);
  console.log('scrollY', window.scrollY);
  console.log('offsetHeight', document.body.offsetHeight);
});

// Onload
getPhotos();
