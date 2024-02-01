$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : CarVilla HTML Template
* Version       : 1.0
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. welcome animation support
3. owl carousel
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 300) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

	// 2. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	
	// 3. owl carousel

		// i.  new-cars-carousel
		
			$("#new-cars-carousel").owlCarousel({
				items: 1,
				autoplay:true,
				loop: true,
				dots:true,
				mouseDrag:true,
				nav:false,
				smartSpeed:1000,
				transitionStyle:"fade",
				animateIn: 'fadeIn',
				animateOut: 'fadeOutLeft'
				// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			});


		// ii. .testimonial-carousel
	
		
			var owl=$('.testimonial-carousel');
			owl.owlCarousel({
				items:3,
				margin:0,
				
				loop:true,
				autoplay:true,
				smartSpeed:1000,
				
				//nav:false,
				//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				
				dots:false,
				autoplayHoverPause:false,
			
				responsiveClass:true,
					responsive:{
						0:{
							items:1
						},
						640:{
							items:2
						},
						992:{
							items:3
						}
					}
				
				
			});

		// iii. .brand-item (carousel)
		
			$('.brand-item').owlCarousel({
				items:6,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:false,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:3
						},
						1000:{
							items:6
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})

});


// hidden content
const displayFunction_1 = () => {
	let = falseText = false
	let width_1 = document.querySelector('.mx1')
	let width_2 = document.querySelector('.mx2')
	let disAllow_1 = document.querySelector('.unshow1');
	let disAllow_2 = document.querySelector('.unshow2');

let hideContentEle_1 = document.querySelector('.hide-content1');
let showBtn = document.querySelector('.clickMe-1')
	showBtn.addEventListener('click', () => {
		if (!falseText) {
			hideContentEle_1.classList.remove('display-text');
			disAllow_2.classList.add('display-text');
			falseText = true;
			width_1.classList.add('allow-width')
		} else {
			hideContentEle_1.classList.add('display-text');
			disAllow_2.classList.remove('display-text');
			falseText = false
			width_1.classList.remove('allow-width')
		}
	})
}
displayFunction_1()


const displayFunction_2 = () => {
	let width_1 = document.querySelector('.mx1')
	let width_2 = document.querySelector('.mx2')
	let disAllow_1 = document.querySelector('.unshow1');
	let disAllow_2 = document.querySelector('.unshow2');

	let = falseText = false
	let hideContentEle_2 = document.querySelector('.hide-content2');
	let showBtn = document.querySelector('.clickMe-2')
	showBtn.addEventListener('click', () => {
		if (!falseText) {
			hideContentEle_2.classList.remove('display-text');
			falseText = true;
			disAllow_1.classList.add('display-text');
			width_2.classList.add('allow-width')
		} else {
			hideContentEle_2.classList.add('display-text');
			falseText = false
			disAllow_1.classList.remove('display-text');
			width_2.classList.remove('allow-width')
		}
	})
}
displayFunction_2()




// CAROUSEL TEXT HIDDEN
const hiddenText_1 = () => {
	let btn_1 = document.querySelector('.btn-1');
	let hiddenEle_1 = document.querySelector('.hiddenEle-1')
	let allowHidden_1 = false;

	btn_1.addEventListener('click', () => {
		if (!allowHidden_1) {
			hiddenEle_1.classList.remove('text-hidden');
			btn_1.innerHTML = 'Show Less'
			allowHidden_1 = true;
		} else {
			hiddenEle_1.classList.add('text-hidden');
			btn_1.innerHTML = 'Show More'
			allowHidden_1 = false
		}
	})

}
hiddenText_1()



const hiddenText_2 = () => {
	let btn_2 = document.querySelector('.btn-2');
	let hiddenEle_2 = document.querySelector('.hiddenEle-2')
	let allowHidden_2 = false;

	btn_2.addEventListener('click', () => {
		if (!allowHidden_2) {
			hiddenEle_2.classList.remove('text-hidden');
			btn_2.innerHTML = 'Show Less'
			allowHidden_2 = true;
		} else {
			hiddenEle_2.classList.add('text-hidden');
			btn_2.innerHTML = 'Show More'
			allowHidden_2 = false
		}
	})

}
hiddenText_2()



const hiddenText_3 = () => {
	let btn_3 = document.querySelector('.btn-3');
	let hiddenEle_3 = document.querySelector('.hiddenEle-3')
	let allowHidden_3 = false;

	btn_3.addEventListener('click', () => {
		if (!allowHidden_3) {
			hiddenEle_3.classList.remove('text-hidden');
			btn_3.innerHTML = 'Show Less'
			allowHidden_3 = true;
		} else {
			hiddenEle_3.classList.add('text-hidden');
			btn_3.innerHTML = 'Show More'
			allowHidden_3 = false
		}
	})

}
hiddenText_3()