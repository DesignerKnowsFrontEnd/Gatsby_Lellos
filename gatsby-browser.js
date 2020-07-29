/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const $ = require("jquery")

export const onInitialClientRender = () => {
    // Scrolling Navbar
window.onscroll = function() { stickyNavbar(); };

function stickyNavbar() {
  const navigation = document.getElementById('navigation');
  const sticky = navigation.offsetTop;

  if (window.pageYOffset > sticky) {
    navigation.classList.add('navigation-scrolled');
  } else {
    navigation.classList.remove('navigation-scrolled');
  }
};

// Sticky Sub-Nav 

// function stickySubNav() {
//   let header = document.getElementById('sub-nav');
//   let sticky = header.offsetTop;
//   if (window.pageYOffset > sticky) {
//     header.classList.add('tabs-sticky');
//   } else {
//     header.classList.remove('tabs-sticky');
//   }
// }

// Mobile Menu Toggle

function mobileToggle() {
const navbarLinks = document.querySelector('.navbar-links');
const navigation =  document.querySelector('.navigation');

  document.querySelector('.toggle').addEventListener('click', (event) => {
    if (navbarLinks.classList.contains('active')) {
      navbarLinks.classList.remove('active');
      navigation.classList.remove('navigation-opened');
    } else {
      navbarLinks.classList.add('active');
      navigation.classList.add('navigation-opened');
    }
  });
};

mobileToggle();

// to get tab params from homepage or other page?
function getTab(){

  var $_GET = {};
  if(document.location.toString().indexOf('#') !== -1) {
      var indexLocationStart = document.location.toString().indexOf('#');
      var indexLocationEnd = document.location.toString().indexOf('&');
      ++indexLocationStart;

      var tabSelect = "";
      if (indexLocationEnd == -1){
          tabSelect = document.location.toString().substring(indexLocationStart)
      }
      else{
          tabSelect = document.location.toString().substring(indexLocationStart,indexLocationEnd)
      }

      tabSelect = tabSelect;
      

      return tabSelect;
  }
  //get the 'index' query parameter
}


// // Tabs js
if(typeof document.querySelector('.tabs') !== 'undefined') { 
const tabs = document.querySelector(".tabs");
if(tabs !== null) { 
  const tabsBtns = tabs.querySelectorAll(".tabs-btn");
  const tabsContents = tabs.querySelectorAll(".tabs-content");

  function displayCurrentTab(current) {
    for (let i = 0; i < tabsContents.length; i++) {
      tabsContents[i].style.display = (current === i) ? "block" : "none";
    }
  }
  
      
  displayCurrentTab(0);
  let tabsParam = getTab();
  let mapArray = {"salads":1,"primi-piatti":2,"pizzas":4}
  
  for(var key in mapArray) {
      if(key.indexOf(tabsParam)!=-1) {
        displayCurrentTab(mapArray[key]); 
      }
  }
  
  tabs.addEventListener("click", event => {
    if (event.target.className === "tabs-btn") {
      
       for (let i = 0; i < tabsBtns.length; i++) {
        if (event.target === tabsBtns[i]) {
          displayCurrentTab(i)
          break;
        }
      }
    }
  });

}
}




  $(document).ready(function () {
    $('.reviews-carousel').slick({
        dots: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev arrows"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next arrows"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1 ,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
      });
    });

    // Back to top 
$('.btn-bttop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
});
}