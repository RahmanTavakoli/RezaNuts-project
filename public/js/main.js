 // AOS.init();
 (function () {

     /**
      * Easy selector helper function
      */
     const select = (el, all = false) => {
         el = el.trim()
         if (all) {
             return [...document.querySelectorAll(el)]
         } else {
             return document.querySelector(el)
         }
     }

     /**
      * Easy event listener function
      */
     const on = (type, el, listener, all = false) => {
         let selectEl = select(el, all)
         if (selectEl) {
             if (all) {
                 selectEl.forEach(e => e.addEventListener(type, listener))
             } else {
                 selectEl.addEventListener(type, listener)
             }
         }
     }

     /**
      * Easy on scroll event listener 
      */
     const onscroll = (el, listener) => {
         el.addEventListener('scroll', listener)
     }

     /**
      * Navbar links active state on scroll
      */
     let navbarlinks = select('.scrollto', true)
     const navbarlinksActive = () => {}
     window.addEventListener('load', navbarlinksActive)
     onscroll(document, navbarlinksActive)

     /**
      * Animation on scroll
      */
     window.addEventListener('load', () => {
         AOS.init({
             duration: 1000,
             easing: "ease-in-out",
             once: true,
             mirror: false
         });
     });
 })();

 const swiper = new Swiper('.swiper', {
     speed: 400,
     loop: true,
     autoplay: {
         delay: 7000,
         disableOnInteraction: false
     },
     slidesPerView: 'auto',
     pagination: {
         el: '.swiper-pagination',
         clickable: true
     },
     breakpoints: {
         320: {
             slidesPerView: 1,
             spaceBetween: 50
         },
         480: {
             slidesPerView: 1,
             spaceBetween: 100
         },
         640: {
             slidesPerView: 2,
             spaceBetween: 110
         },
         992: {
             slidesPerView: 3,
             spaceBetween: 200
         },
         1200: {
             slidesPerView: 4,
             spaceBetween: 200
         }
     }
 });

 // -------------------------------------------------------image magnifier glass *****


 function magnify(imgID, zoom) {
     var img, glass, w, h, bw;
     img = document.getElementById(imgID);
     /*create magnifier glass:*/
     glass = document.createElement("DIV");
     glass.setAttribute("class", "img-magnifier-glass");
     /*insert magnifier glass:*/
     img.parentElement.insertBefore(glass, img);
     /*set background properties for the magnifier glass:*/
     glass.style.backgroundImage = "url('" + img.src + "')";
     glass.style.backgroundRepeat = "no-repeat";
     glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
     bw = 3;
     w = glass.offsetWidth / 2;
     h = glass.offsetHeight / 2;
     /*execute a function when someone moves the magnifier glass over the image:*/
     glass.addEventListener("mousemove", moveMagnifier);
     img.addEventListener("mousemove", moveMagnifier);
     /*and also for touch screens:*/
     glass.addEventListener("touchmove", moveMagnifier);
     img.addEventListener("touchmove", moveMagnifier);

     function moveMagnifier(e) {
         var pos, x, y;
         /*prevent any other actions that may occur when moving over the image*/
         e.preventDefault();
         /*get the cursor's x and y positions:*/
         pos = getCursorPos(e);
         x = pos.x;
         y = pos.y;
         /*prevent the magnifier glass from being positioned outside the image:*/
         if (x > img.width - (w / zoom)) {
             x = img.width - (w / zoom);
         }
         if (x < w / zoom) {
             x = w / zoom;
         }
         if (y > img.height - (h / zoom)) {
             y = img.height - (h / zoom);
         }
         if (y < h / zoom) {
             y = h / zoom;
         }
         /*set the position of the magnifier glass:*/
         glass.style.left = (x - w) + "px";
         glass.style.top = (y - h) + "px";
         /*display what the magnifier glass "sees":*/
         glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
     }

     function getCursorPos(e) {
         var a, x = 0,
             y = 0;
         e = e || window.event;
         /*get the x and y positions of the image:*/
         a = img.getBoundingClientRect();
         /*calculate the cursor's x and y coordinates, relative to the image:*/
         x = e.pageX - a.left;
         y = e.pageY - a.top;
         /*consider any page scrolling:*/
         x = x - window.pageXOffset;
         y = y - window.pageYOffset;
         return {
             x: x,
             y: y
         };
     }
 }

 /*60 image Execute the magnify function: */
 magnify("1", 3);
 magnify("2", 3);
 magnify("3", 3);
 magnify("4", 3);
 magnify("5", 3);
 magnify("6", 3);
 magnify("7", 3);
 magnify("8", 3);
 magnify("9", 3);
 magnify("10", 3);
 magnify("11", 3);
 magnify("12", 3);
 magnify("13", 3);
 magnify("14", 3);
 magnify("15", 3);
 magnify("16", 3);
 magnify("17", 3);
 magnify("18", 3);
 magnify("19", 3);
 magnify("20", 3);
 magnify("21", 3);
 magnify("22", 3);
 magnify("23", 3);
 magnify("24", 3);
 magnify("25", 3);
 magnify("26", 3);
 magnify("27", 3);
 magnify("28", 3);
 magnify("29", 3);
 magnify("30", 3);
 /* Specify the id of the image, and the strength of the magnifier glass: */



 var id = "id" + Math.random().toString(16).slice(2)
    
 console.log(id)