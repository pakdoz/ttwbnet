/*! elementor - v3.4.7 - 31-10-2021 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[745],{9269:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Alert extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{dismissButton:".elementor-alert-dismiss"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$dismissButton:this.$element.find(e.dismissButton)}}bindEvents(){this.elements.$dismissButton.on("click",this.onDismissButtonClick.bind(this))}onDismissButtonClick(){this.$element.fadeOut()}}t.default=Alert}}]);