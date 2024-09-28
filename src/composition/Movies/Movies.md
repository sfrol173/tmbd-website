### Html структура

```html

<div class="films__container">
    <div class="films__section">
	    <div class="films__title">Популярне По TV</div>
	    <div class="films__slider">
		    <Swiper
				    slidesPerView={5}
				    spaceBetween={16}
				    class="films__wrapper"
				    navigation={true}
				    grabCursor={false}
				    draggable={false}
				    preventClicksPropagation={true}
				    preventClicks={true}
				    scrollbar={{draggable: false, hide: true}}
				    slideToClickedSlide={false}
				    pagination={{clickable: true}}
		    >
			    <SwiperSlide class="film__item">
				    <div class="film-poster">
					    <img src="IMG_URL poster_path" alt='title'/>
				    </div>
			    </SwiperSlide>
		    </Swiper>
		    <div class="films__section__navigation">
			    <p class="film__link">
				    <a href="/tv/all" class="link">Усі TV</a>
				    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 180" style="enable-background:new 0 0 330 180"
				         xml:space="preserve"><path d="m325.6 79.4-75-75c-5.9-5.9-15.4-5.9-21.2 0-5.9 5.9-5.9 15.4 0 21.2L278.8 75H15C6.7 75 0 81.7 0 90s6.7 15 15 15h263.8l-49.4 49.4c-5.9 5.9-5.9 15.4 0 21.2 2.9 2.9 6.8 4.4 10.6 4.4s7.7-1.5 10.6-4.4l75-75c5.9-5.9 5.9-15.3 0-21.2z"/></svg>
			    </p>
		    </div>
	    </div>
    </div>
    <div class="films__section">
	    <div class="films__title">Популярне У кінотеатрах</div>
	    <div class="films__slider">
		    <Swiper
				    slidesPerView={5}
				    spaceBetween={16}
				    class="films__wrapper"
				    navigation={true}
				    grabCursor={false}
				    draggable={false}
				    preventClicksPropagation={true}
				    preventClicks={true}
				    scrollbar={{draggable: false, hide: true}}
				    slideToClickedSlide={false}
				    pagination={{clickable: true}}
		    >
			    <SwiperSlide class="film__item">
				    <div class="film-poster">
					    <img src="IMG_URL poster_path" alt='title'/>
				    </div>
			    </SwiperSlide>
		    </Swiper>
		    <div class="films__section__navigation">
			    <p class="film__link">
				    <a href="/cinema/all" class="link">Усі Cinemas</a>
				    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 180" style="enable-background:new 0 0 330 180"
				         xml:space="preserve"><path d="m325.6 79.4-75-75c-5.9-5.9-15.4-5.9-21.2 0-5.9 5.9-5.9 15.4 0 21.2L278.8 75H15C6.7 75 0 81.7 0 90s6.7 15 15 15h263.8l-49.4 49.4c-5.9 5.9-5.9 15.4 0 21.2 2.9 2.9 6.8 4.4 10.6 4.4s7.7-1.5 10.6-4.4l75-75c5.9-5.9 5.9-15.3 0-21.2z"/></svg>
			    </p>
		    </div>
	    </div>
    </div>
</div>
```