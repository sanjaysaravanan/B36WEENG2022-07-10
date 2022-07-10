
// function HelperFunc () {

// }

// function SumArr (arr) {
//   HelperFunc();
// }

/**
 * 
 * Input/Output
 * input
 *  
 * arr = []
 * 
 * result = SumArr(arr) 
 * 
 * console.log(result); write
 * 
 */



// console.log(document);


// getElementById
// const samDiv = document.getElementById('sample-div');


// Two ways
//set attribute


// samDiv.setAttribute('class', 'sam-div test-div');

// samDiv.classList.add('sam-div');
// // samDiv.classList.add('test-div');
// samDiv.classList.remove('test-div');


// samDiv.setAttribute('class', 'bg-secondary border border-warning');

// samDiv.innerHTML = "<h2 style='color: blue' >Something</h2>";


// samDiv.innerText = "<h2 style='color: blue' >Something</h2>";


// console.log(samDiv);


// querySelector vs querySelectorAll

// const samDiv = document.querySelector('.sam-div');

// console.log(samDiv);

// const testDiv = document.querySelector('.test-div');

// console.log(testDiv);


// const samDivs = document.querySelectorAll('.sam-div');

// console.log(samDivs);

// const testDivs = document.querySelectorAll('.test-div');

// console.log(testDivs);


// HTML Node/Element Creation
// const sampleDiv = document.createElement('div'); // <div></div>


// sampleDiv.innerHTML = "<h1>Sample Content</h1>"; // <div><h1>Sample Content</h1></div>


// document.body.appendChild(sampleDiv); // <body>...<div><h1>Sample Content</h1></div></body>


// const sampleDivTwo = document.createElement('div'); // <div></div>


// sampleDivTwo.innerHTML = "<h1>Sample Content Two</h1>"; 


// document.body.appendChild(sampleDiv, sampleDivTwo);

// document.body.appendChild(sampleDivTwo);

// document.body.append( sampleDiv,  sampleDivTwo,);


// Return Type:
// Append Child
// const returnEleOne = document.body.appendChild(sampleDiv, sampleDivTwo);
// console.log(returnEleOne);
// const returnEleTwo = document.body.appendChild(sampleDivTwo);
// console.log(returnEleTwo)

// Append

// const returnType = document.body.append( sampleDiv,  sampleDivTwo,);
// console.log(returnType);


// sampleDiv.remove();

// document.body.appendChild(sampleDiv); 


// const hyperLink = document.createElement('a');

// hyperLink.setAttribute('href', 'https://facebook.com');
// hyperLink.setAttribute('target', '_blank');
// hyperLink.innerText = 'Click to FB'

// sampleDiv.appendChild(hyperLink);



// console.log(window);

// document.body.appendChild(hyperLink);


// Alert
// Used to alert 
// window.alert("Hey there, I am simple Alert!!!");
// alert("Hey there, I am simple Alert!!!");


// Prompt
// Used to prompt something from the User
// const val = prompt('what is Your name');

// console.log(val);


// confirm
// Used to confirm something from the user
// const confirmVal = confirm('Do You want to proceed ?');
// console.log(confirmVal);



// const divElement = document.createElement('div');

// document.body.appendChild(divElement)

// if (confirmVal)
//   divElement.innerHTML = '<h1>Success</h1>';
// else
//   divElement.innerHTML = '<h1>Cancelled</h1>';


// const timeoutFunc = (title) => {
//   console.log(title);
// }

// Set timeout

// console.log("Timer Started");
// const exampleTimeout = setTimeout(timeoutFunc, 3000, 'Morning Interview');

// clearTimeout(exampleTimeout);


// Set Interval

// console.log("Timer Started");
// var exampleInterval = setInterval(() => {
//   console.log("Wake Up its time for Exams");
// }, 1000);

// const btn = document.createElement('button');

// btn.innerText = "Stop Alarm";

// btn.classList.add('bg-primary')

// btn.addEventListener('click', () => {
//   clearInterval(exampleInterval);
// });

// const btnStart = document.createElement('button');

// btnStart.innerText = "Start Alarm";

// btnStart.classList.add('bg-success')

// btnStart.addEventListener('click', () => {
//   exampleInterval = setInterval((name) => {
//     console.log(name + " Wake Up its time for Exams");
//   }, 1000, 'Sanjay');
// });


// document.body.append(btnStart, btn);
const grandParent = document.createElement('div');
grandParent.setAttribute('class', 'grandparent');


// const parent = document.createElement('div');
// parent.setAttribute('class', 'parent');

// const child = document.createElement('div');
// child.setAttribute('class', 'child');

// parent.appendChild(child);

// grandParent.append(parent);


const inp = document.createElement('input');

inp.setAttribute('type', 'text');

const btnSubmit = document.createElement('button');

btnSubmit.innerText = "Submit";

btnSubmit.classList.add('bg-success');

btnSubmit.addEventListener('click', () => {
  console.log(inp.value);
})



grandParent.addEventListener('click', (e) => {
  console.log("Click On Grand Parent from event one ");
})

grandParent.addEventListener('mouseover', (e) => {
  console.log(e);
  e.target.style.backgroundColor = 'blue'
})

grandParent.addEventListener('mouseleave', (e) => {
  console.log(e);
  e.target.style.backgroundColor = 'red'
});


// [...Array(100).keys()].forEach((i) => {
//   const trElement = document.createElement('tr');

//   trElement.innerText = i;

//   document.body.appendChild(trElement);  

// })



document.body.append( inp, btnSubmit,grandParent);














