	const swiperContainers = document.querySelectorAll('#swiper-global-container');
    const swipers = document.querySelectorAll('#swiper-global-container .swiper');
    
	let loop_slider = true;
	let num_of_slides = 6;
	let num_of_slides_before_init = document.querySelectorAll(".swiper-slide").length;
	if(num_of_slides_before_init < num_of_slides){
	  loop_slider = false;
	}    

    swipers.forEach((swiper, index) => {
        swiper.classList.add(`swiper-${index}`);
    })
    
    swiperContainers.forEach((container, index) => {
        container.querySelector('.swiper-button-next').classList.add(`swiper-next-${index}`)
        container.querySelector('.swiper-button-prev').classList.add(`swiper-prev-${index}`)
    })

    swipers.forEach((swiper, index) => {
        new Swiper(`.swiper-${index}`, {
	    
	    slidesPerView: 8, // количество слайдев
	    spaceBetween: 20, // отступ между слайдами
		loop: true,
    
        navigation: { // кнопки навигации
            nextEl: `.swiper-next-${index}`,
            prevEl: `.swiper-prev-${index}`,
        },
    
	    breakpoints: { // колличество слайдов на размер экрана
	    	1280: {
	    		slidesPerView: 8,
	    		loop: loop_slider,
	    	},
    
	    	1024: {
	    		slidesPerView: 6,
	    		loop: loop_slider,
	    	},
    
	    	912: {
	    		slidesPerView: 5,
	    		loop: loop_slider,
	    	},
    
	    	750: {
	    		slidesPerView: 4
	    	},
    
	    	412: {
	    		slidesPerView: 2
	    	},
    
	    	320: {
	    		slidesPerView: 2
	    	}
	    }
    });
});
