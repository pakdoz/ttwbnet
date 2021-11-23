/*! elementor-pro - v3.4.1 - 01-09-2021 */
(self.webpackChunkelementor_pro=self.webpackChunkelementor_pro||[]).push([[985],{9738:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class LoadMore extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{postsContainer:".elementor-posts-container",loadMoreButton:".elementor-button",loadMoreSpinnerWrapper:".e-load-more-spinner",loadMoreSpinner:".e-load-more-spinner i, .e-load-more-spinner svg",loadMoreAnchor:".e-load-more-anchor"},classes:{loadMoreSpin:"eicon-animation-spin",loadMoreIsLoading:"e-load-more-pagination-loading",loadMorePaginationEnd:"e-load-more-pagination-end",loadMoreNoSpinner:"e-load-more-no-spinner"}}}getDefaultElements(){const e=this.getSettings("selectors");return{postsWidgetWrapper:this.$element[0],postsContainer:this.$element[0].querySelector(e.postsContainer),loadMoreButton:this.$element[0].querySelector(e.loadMoreButton),loadMoreSpinnerWrapper:this.$element[0].querySelector(e.loadMoreSpinnerWrapper),loadMoreSpinner:this.$element[0].querySelector(e.loadMoreSpinner),loadMoreAnchor:this.$element[0].querySelector(e.loadMoreAnchor)}}bindEvents(){super.bindEvents(),this.elements.loadMoreButton&&this.elements.loadMoreButton.addEventListener("click",(e=>{this.isLoading||(e.preventDefault(),this.handlePostsQuery())}))}onInit(){super.onInit(),this.classes=this.getSettings("classes"),this.isLoading=!1;const e=this.getElementSettings("pagination_type");"load_more_on_click"!==e&&"load_more_infinite_scroll"!==e||(this.isInfinteScroll="load_more_infinite_scroll"===e,this.isSpinnerAvailable=this.getElementSettings("load_more_spinner").value,this.isSpinnerAvailable||this.elements.postsWidgetWrapper.classList.add(this.classes.loadMoreNoSpinner),this.isInfinteScroll?this.handleInfiniteScroll():this.elements.loadMoreSpinnerWrapper&&this.elements.loadMoreButton.insertAdjacentElement("beforeEnd",this.elements.loadMoreSpinnerWrapper),this.elementId=this.getID(),this.postId=elementorFrontendConfig.post.id,this.currentPage=parseInt(this.elements.loadMoreAnchor.getAttribute("data-page")),this.maxPage=parseInt(this.elements.loadMoreAnchor.getAttribute("data-max-page")),this.currentPage===this.maxPage&&this.handleUiWhenNoPosts())}handleInfiniteScroll(){this.isEdit||(this.observer=elementorModules.utils.Scroll.scrollObserver({callback:e=>{e.isInViewport&&!this.isLoading&&(this.observer.unobserve(this.elements.loadMoreAnchor),this.handlePostsQuery().then((()=>{this.currentPage!==this.maxPage&&this.observer.observe(this.elements.loadMoreAnchor)})))}}),this.observer.observe(this.elements.loadMoreAnchor))}handleUiBeforeLoading(){this.isLoading=!0,this.elements.loadMoreSpinner&&this.elements.loadMoreSpinner.classList.add(this.classes.loadMoreSpin),this.elements.postsWidgetWrapper.classList.add(this.classes.loadMoreIsLoading)}handleUiAfterLoading(){this.isLoading=!1,this.elements.loadMoreSpinner&&this.elements.loadMoreSpinner.classList.remove(this.classes.loadMoreSpin),this.isInfinteScroll&&this.elements.loadMoreSpinnerWrapper&&this.elements.loadMoreAnchor.insertAdjacentElement("afterend",this.elements.loadMoreSpinnerWrapper),this.elements.postsWidgetWrapper.classList.remove(this.classes.loadMoreIsLoading)}handleUiWhenNoPosts(){this.elements.postsWidgetWrapper.classList.add(this.classes.loadMorePaginationEnd)}handleSuccessFetch(e){this.handleUiAfterLoading();const t=document.createElement("div");t.innerHTML=e.content;const s=[...t.querySelectorAll(".elementor-posts-container > article")].reduce(((e,t)=>e+t.outerHTML),"");this.elements.postsContainer.insertAdjacentHTML("beforeend",s),this.elements.loadMoreAnchor.setAttribute("data-page",this.currentPage),this.currentPage===this.maxPage&&this.handleUiWhenNoPosts()}handlePostsQuery(){this.handleUiBeforeLoading(),this.currentPage++;const e=`${ElementorProFrontendConfig.urls.rest}elementor-pro/v1/posts-widget?post_id=${this.postId}&element_id=${this.elementId}&page=${this.currentPage}`;return fetch(e).then((e=>e.json())).then((e=>{this.handleSuccessFetch(e)}))}}t.default=LoadMore}}]);