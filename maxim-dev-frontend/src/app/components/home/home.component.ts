import { Component, OnInit } from '@angular/core';

declare var Swiper: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.resetVideo();
      this.mainSlider();
      this.devSlider();
      this.mediaSlider();
    }, 500);

  }

  mainSlider() {
    let swiper = new Swiper(".main-slider", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      allowTouchMove: false // To disable draging in swiperjs
    });
  }

  devSlider() {
    let swiper = new Swiper(".devSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  mediaSlider() {
    let swiper = new Swiper(".mediaSwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 1025px
        1025: {
          slidesPerView: 2,
          spaceBetween: 80
        }
      }
    });
  }

  resetVideo() {
    let video = document.getElementById("video") as HTMLVideoElement;
    let ourStoryVideo = document.getElementById("our-story-video") as HTMLVideoElement;
    ourStoryVideo.currentTime = 0;
    video.currentTime = 0;
    ourStoryVideo.pause();
    video.pause();
  }


  playVideo() {
    $('.video-overlay').fadeOut('slow');
    $('#video').get(0).play();
  }

  playOurStoryVideo() {
    $('.our-story-video-overlay').fadeOut('slow');
    $('#our-story-video').get(0).play();
  }

}
