// const data = document.querySelector('.selling_items');
$('.selling_items').click(function(){
   var filter_value  =  $(this).attr('filter-atr');
   console.log(filter_value)
})

document.addEventListener("DOMContentLoaded", () => {
   var bannerslider = new Splide(".bannerslider", {
     perPage: 1,
     gap: "2rem",
     type: "loop",
     arrows: false,
     autoplay: true,
     breakpoints: {
       640: {
         perPage: 2,
         gap: ".7rem",
       },
       480: {
         perPage: 1,
         gap: ".7rem",
       },
     },
   });

   bannerslider.mount();
 });
 var category_slide = new Splide(".category_slide", {
   perPage: 4,
   gap: "3rem",
   type: "loop",
   permove: "1",
   autoplay: true,
   breakpoints: {
     640: {
       perPage: 2,
       gap: ".7rem",
     },
     480: {
       arrows:false,
       perPage: 1,
       gap: ".7rem",
     },
   },
 });

 category_slide.mount();
 var feauture_slide = new Splide(".feauture_slide", {
   perPage: 4,
   gap: "3rem",
   type: "loop",
   pagination: false,
   permove: "1",
   autoplay: true,
   breakpoints: {
     640: {
       perPage: 2,
       gap: ".7rem",
     },
     480: {
       arrows:false,
       perPage: 1,
       gap: ".7rem",
     },
   },
 });

 feauture_slide.mount();
 var best_sell = new Splide(".best_sell", {
   perPage: 4,
   gap: "3rem",
   type: "loop",
   pagination: false,
   permove: "1",
   autoplay: true,
   breakpoints: {
     640: {
       perPage: 2,
       gap: ".7rem",
     },
     480: {
       arrows:false,
       perPage: 1,
       gap: ".7rem",
     },
   },
 });

 best_sell.mount();


 document.addEventListener('DOMContentLoaded', function () {

 var annouce_slide = new Splide(".annouce_slide", {
   perPage: 1,
   arrows: false,
   pagination: false,
   permove: "1",
   type:"loop",
   autoplay: true,
 });

 annouce_slide.mount();

});

 
 var customer_reviews = new Splide(".customer_reviews", {
   perPage: 3,
   type: "loop",
   arrows: false,
   pagination: false,
   permove: "1",
   gap:"3rem",
   autoplay: true,
   breakpoints: {
     640: {
       perPage: 2,
       gap: ".7rem",
     },
     480: {
       arrows:false,
       perPage: 1,
       gap: ".7rem",
     },
   },
 });

 customer_reviews.mount();
 
 var category_wrapper = new Splide(".category_wrapper", {
   perPage: 8,
   type: "loop",
   gap: "0rem",
   arrows: false,
   pagination: false,
   permove: "1",
   autoplay: true,
   breakpoints: {
     640: {
       perPage: 5,
       gap: ".7rem",
     },
     480: {
       perPage: 3,
       gap: "1rem",
       autoplay: true,
       speed:'300'
     },
   },
 });

 category_wrapper.mount();
