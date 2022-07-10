const gP = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


// Bubbling

gP.addEventListener('click', e => {
  console.log("grandparent 1");
});

parent.addEventListener('click', e => {
  console.log("parent 1");
});

child.addEventListener('click', e => {
  console.log("child 1");
});

document.addEventListener('click', e => {
  console.log('document')
})


// Capturing