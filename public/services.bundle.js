"use strict";(self.webpackChunknv_coding=self.webpackChunknv_coding||[]).push([[894],{561:(e,t,a)=>{a.r(t)},317:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=a(669);t.default=function(){var e=Array.from(document.querySelectorAll(".accordion-list__item"));0!==e.length&&e.forEach((function(e){if(e){var t=e.querySelector(".accordion-list__summary"),a=e.querySelector(".accordion-list__details");if(t&&a){var n=a.querySelector(".accordion-list__inner");if(n){var o=new i.Timeline({duration:400});o.addCallback("progress",(function(e){var t=e.easing,i=1===e.progress?"auto":"".concat(n.clientHeight*t,"px");a.style.height=i,a.style.opacity="".concat(t)})),t.addEventListener("click",(function(){e.classList.toggle("active"),o.progress>0?o.reverse():o.play()})),e.classList.contains("active")&&o.play()}}}}))}},479:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=new(a(669).Application)({tablet:1199,phone:899,prefix:"v-",viewportResizeTimeout:100,easing:[.25,.1,.25,1]});t.default=i},803:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(858));t.default=function(){var e=document.querySelectorAll(".fade-section");0!==e.length&&e.forEach((function(e){(0,n.default)(e)}))}},858:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(106)),o=i(a(94));t.default=function(e,t){void 0===t&&(t="1");var a=e.querySelector(".fade-section-content");if(a){var i={active:{key:t,item:void 0,button:void 0},prev:{key:t,item:void 0,button:void 0},parent:{item:a,parentHeight:(0,n.default)(a),activeHeight:a.clientHeight}},r=Array.from(e.querySelectorAll(".fade-section__button")),c=Array.from(e.querySelectorAll(".fade-section-content__item"));0!==c.length&&(i.active.button=e.querySelector(".fade-section__button.active"),r.forEach((function(t){t.addEventListener("click",(function(){var a,n,r=t.dataset.item;i.prev.key=i.active.key,i.active.key=r||"1",i.prev.button=i.active.button,i.active.button=t,i.prev.key!==i.active.key&&(i.prev.button&&i.prev.button.classList.remove("active"),i.active.button.classList.add("active"),c.forEach((function(e){e.dataset.item===i.active.key&&(a=e),e.dataset.item===i.prev.key&&(n=e)})),a&&n&&(i.parent.activeHeight=a.clientHeight,i.parent.parentHeight.save(),(0,o.default)({showItem:a,hideItem:n,parentHeight:i.parent.parentHeight,section:e,activeHeight:i.parent.activeHeight})))}))})))}}},94:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=a(669);t.default=function(e){var t=e.showItem,a=e.hideItem,n=e.parentHeight,o=e.section,r=e.activeHeight,c=e.duration,l=void 0===c?600:c,u=t,s=a,d=o,v=new i.Timeline({duration:l,easing:[.25,.1,.25,1]});v.addCallback("start",(function(){n.save(),s.classList.add("unactive"),u.classList.remove("unactive")})),v.addCallback("progress",(function(e){var t=e.progress;d.style.pointerEvents="none",n.interpolate(r,t),u.style.opacity="".concat(t),s.style.opacity="".concat(1-t)})),v.addCallback("end",(function(){d.style.pointerEvents="",v.destroy(),n.reset()})),v.play()}},106:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=0;return{save:function(){var a=e;a&&(t=a.clientHeight,a.style.height="".concat(t,"px"))},reset:function(){e&&(t=0,e.style.height="")},interpolate:function(a,i){if(e){var n=t+(a-t)*i;e.style.height="".concat(n,"px")}}}}},450:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,a){var i=a;t.forEach((function(e){i=i<e.clientHeight?e.clientHeight:i})),e.style.setProperty("--additional-height","".concat(0===i?"auto":"".concat(i,"px")))};t.default=function(){var e=Array.from(document.querySelectorAll(".stages"));0!==e.length&&e.forEach((function(e){var t=Array.from(e.querySelectorAll(".stages-additional"));0!==t.length&&(a(e,t,0),window.matchMedia("(max-width: 899px)").addEventListener("change",(function(){a(e,t,0)})))}))}},419:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),a(561);var n=i(a(479)),o=i(a(803)),r=i(a(317)),c=i(a(450));n.default.pageLoad.onLoaded((function(){(0,o.default)(),(0,r.default)(),(0,c.default)()}))}},e=>{e.O(0,[216,980],(()=>(419,e(e.s=419)))),e.O()}]);