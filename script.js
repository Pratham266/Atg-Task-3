// Get the dots
const dots = document.querySelectorAll('.dots-nav');

// Get the paths
const paths = document.querySelectorAll('.transrg, .transrgwht');

// Get the content container element
const container = document.querySelector('.container');

// Get the content element
const svgInnerTag = document.querySelector('.SvgInnerTag');
const bottomOfSvg = document.querySelector('.bottomOfSvg');
const rightSideOfSvg = document.querySelector('.rightSideOfSvg');

const backdiv = document.querySelector('.backdiv');
const leftdiv = document.querySelector('.leftdiv');
const svgdiv = document.querySelector('.svgdiv');


const backdivclass = [
  'bg-[#030712]', 
  'bg-[#312e81]', 
  'bg-[#3b0764]', 
  'bg-[#faf5ff]',
  'bg-[#67e8f9]',
  'bg-white',
  'bg-[#10b981]',  
];

const svgdivclass = [
  'bg-[#1f2937]',  
  'bg-[#1e1b4b]', 
  'bg-[#4338ca]',
  'bg-[#7e22ce]',
  'bg-[#1d4ed8]', 
  'bg-[#3730a3]', 
  'bg-[#065f46]',
];

const leftdivclass = [
  'bg-[#1f2937]', 
  'bg-[#1e1b4b]',
  'bg-[#4338ca]',
  'bg-[#7e22ce]',
  'bg-[#1d4ed8]',
  'bg-[#3730a3]', 
  'bg-[#065f46]',
];




// Array to store content for each dot
const dotContent1 = [

  `<div class="dtu"><div class="text-3xl">Redefining</div>
  <div class="text-5xl font-bold">UX Strategy</div>
  <div class="text-3xl ml-20 mt-4">and UI design</div></div>`,
  
  `<div class="dtu"><div class="text-3xl mb-1.5">Powered by advance</div>
  <img src="img/nasa-mobile-app.png"/>
  <div class="text-3xl ml-48 mt-4">algorithms</div></div>`,

  `<div class="dtu"><div class="text-3xl">The Next Big</div>
  <div class="text-6xl font-bold">Blockchain</div>
  <div class="text-3xl ml-24 mt-4">Revolution</div>
  </div>
  `,

  `<div class="dtu"><div class="text-4xl w-max	mt-6 font-bold" style="padding-left:-15px">25M+ Downloads</div>
  <div class="text-xl ml-4 mt-4">on appstore & google playstore</div>
  </div>
  `,

 `<div class="dtu"><div class="text-2xl">Text Headline</div>
 <div class="text-[46px] font-bold">Text Headline</div>
 <div class="text-2xl ml-28 mt-4">Footer Headline</div>
 </div>`,

  `<div class="dtu"><div class="text-2xl">Developing ERP Solution for</div>
  <div class="text-[46px] font-bold">Text Headline</div>
  <div class="text-2xl ml-20 mt-4">in furniture industry</div>
  </div>`,

  `<div class="dtu"><div class="text-3xl">Biggest Classifieds</div>
  <div class="text-7xl font-bold">East Asia</div>
  <div class="text-3xl ml-36 mt-4">Countries</div>
  </div>`
];

const dotContent2 = [
  `<div class="dtu"><div class="text-6xl font-semibold">ABCD 456</div>

  <div class="text-lg  mt-2">We are the best</div>
  <div class="text-lg">web developement company</div>
  <div class="text-lg">in the world</div>

  <div class="flex mt-12">
      <div class="flex text-xl">View Case Study 
          <svg height="34px" width="20px"  class="ml-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 227.096 227.096" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="1.362576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon style="fill:#ffffff;" points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55 "></polygon> </g> </g> </g></svg>                    
          </div>
      <div class="ml-64 text-xl">S K I P</div>
  </div>`,

  ` <div class="dtu"><div class="text-6xl font-semibold">ABCD 456</div>

  <div class="text-lg  mt-2">We are the best</div>
  <div class="text-lg">web developement company</div>
  <div class="text-lg">in the world</div>

  <div class="flex mt-12">
      <div class="flex text-xl text-[#60a5fa]">Comming Soon
</div>
      <div class="ml-64 text-xl">S K I P</div>
  </div>`,

  `<div class="dtu"><div class="text-6xl font-semibold">ABCD 234</div>

  <div class="text-lg  mt-2">We are the best web developement company</div>
  <div class="text-lg">in the world</div>

  <div class="flex mt-12">
  <div class="flex text-xl text-[#60a5fa]">Comming Soon
  </div>
      <div class="ml-64 text-xl">S K I P</div>
  </div>`,


  `
  <div class="dtu w-fit">
  <div style="margin-top: -99px;"><img src="img/world-communication-awards-for-best-digital-experience.png" height="150" width="240"/></div>
  <div class="text-6xl font-semibold mt-8">ABCD 123</div>

  <div class="text-lg  mt-2">We are the best web developement</div>
  <div class="text-lg"> company in the world</div>

  <div class="flex mt-12">
      <div class="flex text-xl">View Case Study 
          <svg height="34px" width="20px"  class="ml-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 227.096 227.096" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="1.362576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon style="fill:#ffffff;" points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55 "></polygon> </g> </g> </g></svg>                    
          </div>
      <div class="ml-64 text-xl">S K I P</div>
  </div></div>`,

  `
  <div class="dtu">
  <div class="text-6xl font-semibold">ABCD 567</div>

  <div class="text-lg  mt-2">We are the best AR</div>
  <div class="text-lg">developement company</div>
  <div class="text-lg">in the world</div>

  <div class="flex mt-12">
      <div class="flex text-xl">View Case Study 
          <svg height="34px" width="20px"  class="ml-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 227.096 227.096" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="1.362576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon style="fill:#ffffff;" points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55 "></polygon> </g> </g> </g></svg>                    
          </div>
      <div class="ml-64 text-xl">S K I P</div>
  </div></div>`,

  `
  <div class="dtu">
  <div class="text-6xl font-semibold">ABCD 678</div>

  <div class="text-lg  mt-2">Best since 2017</div>
  <div class="text-lg">We offere wide range of</div>
  <div class="text-lg">wev Developement and app Developement</div>

  <div class="flex mt-12">
      <div class="flex text-xl">View Case Study 
          <svg height="34px" width="20px"  class="ml-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 227.096 227.096" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="1.362576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon style="fill:#ffffff;" points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55 "></polygon> </g> </g> </g></svg>                    
          </div>
      <div class="ml-64 text-xl">S K I P</div>
  </div></div>`,

    `
    <div class="dtu w-fit">
    <div class="margin-top:-100px;" style="margin-top: -99px;"><img src="img/mobile-app-of-the-year-by-entrepreneur.png" height="150" width="240"/></div>
    <div class="text-6xl font-semibold mt-8">ABCD 23478</div>
  
    <div class="text-lg  mt-2">We are the best</div>
  <div class="text-lg">web developement company</div>
  <div class="text-lg">in the world</div>
  
    <div class="flex mt-12">
        <div class="flex text-xl">View Case Study 
            <svg height="34px" width="20px"  class="ml-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 227.096 227.096" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="1.362576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon style="fill:#ffffff;" points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55 "></polygon> </g> </g> </g></svg>                    
            </div>
        <div class="ml-64 text-xl">S K I P</div>
    </div></div>`
];

const dotContent3 = [
  `  <div class="flex">
  <div class="">
      <img class="utd" src="img/pizza_box.png"/>
      <img class="dtu" src="img/domi-img1.png" style="height:515px; padding-left:45px;padding-top: 150px;"/>
  </div> 
  <div class="">
      <img class="utd" src="img/ux-strategy-for-mobile-app-devlopment.png" style="height:595px;padding-top: 150px;" /> 
  </div>
  <div>
      <img class="utd" src="img/dominos-bread.png" style="margin-top: -100px;"/>
      <img class="dtu" src="img/dominos-bread1.png" style="height:195px;margin-top: 400px;"/>

  </div>
</div>`,

  `<div class="flex">
  <div class="">
      <img class="dtu" src="img/nasa-fitness-tracking-mobile-app.png" style="height:650px; margin-left:150px;padding-top: 150px;"/>
  </div> 
  <div class="">
      <img class="utd" src="img/measure-total-body-weight-through-fitness-app.png" style="height:595px;margin-top:-130px;margin-left:15px" /> 
  </div>
</div>`,


`<div class="flex">
<div >
    <img class="dtu" src="img/veme-blockchain-app-developed.png" style="height:650px; margin-left:150px;padding-top: 150px;margin-top:102px"/>
</div> 
<div >
    <img  class="utd" src="img/veme-app-ui-design.png" style="height:595px;margin-top:-130px;margin-left:15px" /> 
</div>
</div>`,


  `<div class="flex">
  <div class="ml-12">
      <img class="utd" src="img/nexgtv-entertainment-mobile-app-development.png" style="height:650px;margin-top:95px;margin-left:30px;"/>
  </div> 
  <div class="">
      <img class="dtu" src="img/nexgtv-mobile-app-ui-design.png" style="height:650px;margin-top:95px;margin-left:-25px;"/>
  </div>
  </div>`,

  `<div class="flex ml-32 fixed">
  <div class="mr-4">
  <img class="utd" src="img/karavan-social-networking-app-screen.png" height="350" width="200" style="margin-top:-100px;"/>
  <img class="dtu" src="img/karavan_2.png"  height="350" width="200" style="margin-top: 180px;"/>
</div>
  <div class="mr-4">
  <img class="utd" src="img/social-networking-app-case-study.png"  height="350" width="200" style="margin-top:-30px;"/>
  <img class="dtu" src="img/karavan-social-networking-app-screen-2.png"  height="350" width="200" style="margin-top: 210px;"/>
  </div>
  <div>
  <img class="utd" src="img/developers-for-social-media-app.png"  height="350" width="200" style="margin-top:185px;"/>
  </div>
  </div>`,

  `
  <div class="" style="background-image: url('img/erp-app-development-service.png'); background-size: cover; background-position: center; width: 100%; height: 100vh;">
  <img class="utd" src="img/erp-app-development-service.png"/>
  </div>
  `,

  `<div class="ml-48 flex fixed z-0">
  <img  class="dtu" src="img/melltoo-img2.png"  height="280" width="350" style="margin-top:250px;margin-right:-106px;"/>
  <img class="dtu" src="img/melltoo-img1.png" height="350" width="300" style="margin-top:210px;"/>
  </div>`

];


backdiv.classList.add(backdivclass[0]);
leftdiv.classList.add(leftdivclass[0]);
svgdiv.classList.add(svgdivclass[0]);

// Display the content of the first dot
svgInnerTag.innerHTML = dotContent1[0];
bottomOfSvg.innerHTML = dotContent2[0];
rightSideOfSvg.innerHTML = dotContent3[0];



// Add click event listener to each dot
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Clear previous content
    svgInnerTag.innerHTML = '';

    // Display the corresponding content
    svgInnerTag.innerHTML = dotContent1[index];
    bottomOfSvg.innerHTML = dotContent2[index];
    rightSideOfSvg.innerHTML = dotContent3[index];

    //change the color
    backdiv.className='flex  backdiv';
    backdiv.classList.add(backdivclass[index]);

    leftdiv.className='h-screen w-[45rem] z-0 leftdiv';
    leftdiv.classList.add(leftdivclass[index]);
    svgdiv.className='rounded-r-full flex svgdiv';
    svgdiv.classList.add(svgdivclass[index]);
    
    // Remove active class from all dots and paths
    dots.forEach(dot => dot.classList.remove('active'));
    paths.forEach(path => path.classList.remove('active'));

    // Add active class to the clicked dot and its corresponding paths
    dot.classList.add('active');
    paths[index].classList.add('active');

    // Scroll the container to the content section
    container.scrollTo({
      top: content.offsetTop,
      behavior: 'smooth'
    });
  });
});


