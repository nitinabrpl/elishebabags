//Design by Nitin Saxena

$(document).ready(function(){	

	$('.slider-carousel').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		slideSpeed : 200,
		paginationSpeed : 800,
    rewindSpeed : 1000,
		slideSpeed : 200,
		dots:true
	});
	$('.testimonial-carousel').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		responsiveClass:true,
    autoplay:200,
		slideSpeed : 200,
		paginationSpeed : 800,
    rewindSpeed : 1000,
		slideSpeed : 200,
		dots:true,
		responsive:{
			1080:{items:2},
			768:{items:2},
			600:{items:1},
			425:{items:1},
			360:{items:1},
			30:{items:1}
			
		}
	});
	$('.product-carousel').owlCarousel({
		items:3,
		loop:true,
		autoplay:true,
		responsiveClass:true,
    autoplay:200,
		slideSpeed : 200,
		paginationSpeed : 800,
    rewindSpeed : 1000,
		slideSpeed : 200,
		dots:false,
        nav:true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive:{
			1080:{items:4},
			768:{items:3},
			600:{items:2},
			425:{items:1},
			360:{items:1},
			30:{items:1}
			
		}
	});
	$('.blog-carousel').owlCarousel({
		items:2,
		loop:true,
		autoplay:true,
		responsiveClass:true,
    autoplay:200,
		slideSpeed : 200,
		paginationSpeed : 800,
    rewindSpeed : 1000,
		slideSpeed : 200,
		dots:false,
		responsive:{
			980:{items:3},
			768:{items:2},
			600:{items:1},
			425:{items:1},
			360:{items:1},
			30:{items:1}
			
		}
	});
	


$('body').on('click','header .more i.fa-search',function(e){
    $('.searchBox').slideDown();
    $(this).attr('class','fas fa-times');
});
$('body').on('click','header .more i.fa-times',function(e){
    $('.searchBox').slideUp();
    $(this).attr('class','fas fa-search');
});
$('.nit-img-list li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    let src = $(this).find('img').attr('src');
    $('.nit-main-img img').attr('src',src);
});
    
$('a[href="#"]').click(function(e){
    e.preventDefault();
});

$('.loginPage .list span').click(function(){
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    let i = $(this).parent().index();
    $('.loginPage .content .box').removeClass('active');
    $('.loginPage .content .box').eq(i).addClass('active');
});
    
// $('body').on('click','.nit-increment .plus',function(){
//         let inval = $(this).siblings('input').val();
//         $(this).siblings('input').val(parseInt(inval)+1);
//     });
// $('body').on('click','.nit-increment .minus',function(){
//     let inval = $(this).siblings('input').val();
//     if(inval>=2){           $(this).siblings('input').val(parseInt(inval)-1);
//     }else{

//     }
// });
$('.nit-checkOut-page .inBox input[type="radio"]').change(function(){
    if($(this).val() == 'same'){
       $('.address2').slideUp();
       }else{
           $('.address2').slideDown();
       }
});
    
$('.navbar-toggler').click(function(){
	$('nav').css('right','0');
});	
$('.closeBox i').click(function(){
	$('nav').css('right','-100%');
});
	
 AOS.init({easing: 'ease-in-out-sine',once:true});

	
});
$(window).scroll(function(){
		
});

