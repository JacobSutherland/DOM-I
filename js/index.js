const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Header Links
const navAnchorsIndex = Object.keys(siteContent.nav).length - 1;
const links = document.querySelectorAll('a');

const navigation = document.querySelector('nav');
const link1 = document.createElement('a');
const link2 = document.createElement('a');

link1.innerText = 'Example 1';
link2.innerText = 'Example 2';

navigation.appendChild(link2);
navigation.prepend(link1);

link1.style.color = 'green';
link2.style.color = 'green';



for(let i = 0; i < navAnchorsIndex; i ++){
  links[i].innerText = Object.values(siteContent.nav)[i];
}

//makes anchors green
for(let i = 0; i < navAnchorsIndex; i++){
  links[i].style.color = 'green';
}

//code snippet image
const bigLogo = document.querySelector('#cta-img');
bigLogo.src = siteContent.cta["img-src"];


//Top h1 Text
const mainText = document.querySelector('h1');
mainText.innerHTML = siteContent.cta['h1'];

mainText.style.width = '42%';
mainText.style.marginRight = '10%'

//button
const button = document.querySelector('button');
button.innerText = siteContent.cta.button;

//top-section h4 / p
const topLeftH4 = document.getElementsByClassName('top-content')[0].children[0].children[0].innerText = siteContent['main-content']["features-h4"];
const topRightH4 = document.getElementsByClassName('top-content')[0].children[1].children[0].innerText = siteContent['main-content']["about-h4"];
const topleftP = document.getElementsByClassName('top-content')[0].children[1].children[1].innerText = siteContent['main-content']["about-content"];
const topRightP = document.getElementsByClassName('top-content')[0].children[0].children[1].innerText = siteContent['main-content']["features-content"];

//banner image
const banner = document.querySelector('.main-content img');
banner.src = '/img/mid-page-accent.jpg';

//Bottom-section h4 / p
const leftBottomH4 = document.getElementsByClassName('bottom-content')[0].children[0].children[0].innerText = siteContent['main-content']['services-h4'];
const midBottomH4 = document.querySelector('.bottom-content').children[1].children[0].innerText =siteContent['main-content']['product-h4'];
const rightBottomH4 = document.querySelector('.bottom-content').children[2].children[0].innerText =siteContent['main-content']['vision-h4'];
const leftBottomP = document.querySelector('.bottom-content').children[0].children[1].innerText = siteContent['main-content']['services-content']
const midBottomP = document.querySelector('.bottom-content').children[1].children[1].innerText = siteContent['main-content']['product-content']
const rightBottomP = document.querySelector('.bottom-content').children[2].children[1].innerText = siteContent['main-content']['vision-content']

//contact
const contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent.contact['contact-h4'];

const address = document.querySelector('.contact').children[1];
address.innerText = siteContent.contact.address;

const phoneNum = document.querySelector('.contact').children[2];
phoneNum.innerText = siteContent.contact.phone;

const email = document.querySelector('.contact').children[3];
email.innerText = siteContent.contact.email;

//footer
const copyright = document.querySelector('footer p');
copyright.innerText = siteContent.footer.copyright;

//append new links
// const navigation = document.querySelector('nav');
// const link1 = document.createElement('a');
// const link2 = document.createElement('a');

// link1.innerText = 'Example 1';
// link2.innerText = 'Example 2';

// navigation.appendChild(link2);
// navigation.prepend(link1);