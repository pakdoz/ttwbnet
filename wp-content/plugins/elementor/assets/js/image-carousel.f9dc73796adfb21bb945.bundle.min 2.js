/*! elementor - v3.4.7 - 31-10-2021 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[268],{5914:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class ImageCarousel extends elementorModules.frontend.handlers.SwiperBase{getDefaultSettings(){return{selectors:{carousel:".elementor-image-carousel-wrapper",slideContent:".swiper-slide"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$swiperContainer:this.$element.find(e.carousel)};return t.$slides=t.$swiperContainer.find(e.slideContent),t}getSwiperSettings(){const e=this.getElementSettings(),t=+e.slides_to_show||3,s=1===t,i=elementorFrontend.config.responsive.activeBreakpoints,n={mobile:1,tablet:s?1:2},a={slidesPerView:t,loop:"yes"===e.infinite,speed:e.speed,handleElementorBreakpoints:!0,breakpoints:{}};let o=t;Object.keys(i).reverse().forEach((t=>{const s=n[t]?n[t]:o;a.breakpoints[i[t].value]={slidesPerView:+e["slides_to_show_"+t]||s,slidesPerGroup:+e["slides_to_scroll_"+t]||1},o=+e["slides_to_show_"+t]||s})),"yes"===e.autoplay&&(a.autoplay={delay:e.autoplay_speed,disableOnInteraction:"yes"===e.pause_on_interaction}),s?(a.effect=e.effect,"fade"===e.effect&&(a.fadeEffect={crossFade:!0})):a.slidesPerGroup=+e.slides_to_scroll||1,e.image_spacing_custom&&(a.spaceBetween=e.image_spacing_custom.size);const r="arrows"===e.navigation||"both"===e.navigation,l="dots"===e.navigation||"both"===e.navigation;return r&&(a.navigation={prevEl:".elementor-swiper-button-prev",nextEl:".elementor-swiper-button-next"}),l&&(a.pagination={el:".swiper-pagination",type:"bullets",clickable:!0}),a}async onInit(...e){super.onInit(...e);const t=this.getElementSettings();if(!this.elements.$swiperContainer.length||2>this.elements.$slides.length)return;const s=elementorFrontend.utils.swiper;this.swiper=await new s(this.elements.$swiperContainer,this.getSwiperSettings()),this.elements.$swiperContainer.data("swiper",this.swiper),"yes"===t.pause_on_hover&&this.togglePauseOnHover(!0)}updateSwiperOption(e){const t=this.getElementSettings()[e],s=this.swiper.params;switch(e){case"image_spacing_custom":s.spaceBetween=t.size||0;break;case"autoplay_speed":s.autoplay.delay=t;break;case"speed":s.speed=t}this.swiper.update()}getChangeableProperties(){return{pause_on_hover:"pauseOnHover",autoplay_speed:"delay",speed:"speed",image_spacing_custom:"spaceBetween"}}onElementChange(e){if(this.getChangeableProperties()[e])if("pause_on_hover"===e){const e=this.getElementSettings("pause_on_hover");this.togglePauseOnHover("yes"===e)}else this.updateSwiperOption(e)}onEditSettingsChange(e){"activeItemIndex"===e&&this.swiper.slideToLoop(this.getEditSettings("activeItemIndex")-1)}}t.default=ImageCarousel}}]);