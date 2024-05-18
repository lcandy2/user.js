// ==UserScript==
// @name       【学习通任务一览】- 作业 与 考试 列表 | 电脑端快速查看，绝不错过任何作业与考试
// @namespace  https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-assignment
// @version    1.0.0
// @author     monkey
// @source     https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-assignment
// @match      *://mooc1-api.chaoxing.com/work/stu-work*
// @match      *://i.chaoxing.com/base*
// @require    https://registry.npmmirror.com/vue/3.4.27/files/dist/vue.global.prod.js
// @resource   vuetify/dist/vuetify.css  https://registry.npmmirror.com/vuetify/3.6.6/files/dist/vuetify.min.css
// @grant      GM_addStyle
// @grant      GM_getResourceText
// @run-at     document-end
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const t=document.createElement("style");t.textContent=e,document.head.append(t)})(' .v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-btn .v-btn__underlay{position:absolute}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled:hover{opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--slim{padding:0 8px}.v-btn--readonly{pointer-events:none}.v-btn--rounded{border-radius:24px}.v-btn--rounded.v-btn--icon{border-radius:4px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__loader>.v-progress-circular{width:1.5em;height:1.5em}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline:calc(var(--v-btn-height) / -9) calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline:calc(var(--v-btn-height) / 4.5) calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline:calc(var(--v-btn-height) / -9) calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline:calc(var(--v-btn-height) / 4.5) calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn~.v-btn:not(.v-btn-toggle .v-btn){margin-inline-start:.5rem}.v-pagination .v-btn{border-radius:4px}.v-pagination .v-btn--rounded{border-radius:50%}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled)>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled):hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled):focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled):focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;width:1em;min-width:1em}.v-icon--clickable{cursor:pointer}.v-icon--disabled{pointer-events:none;opacity:.38}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background,.v-progress-linear__buffer{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;width:100%;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate{border-start-start-radius:0;border-end-start-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-card{display:block;overflow:hidden;overflow-wrap:break-word;position:relative;padding:0;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity,background;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:4px}.v-card--border{border-width:thin;box-shadow:none}.v-card--absolute{position:absolute}.v-card--fixed{position:fixed}.v-card:hover>.v-card__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-card:focus-visible>.v-card__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card:focus>.v-card__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-card--active>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]>.v-card__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-card--active:hover>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:hover>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-card--active:focus-visible>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card--active:focus>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-card--variant-plain,.v-card--variant-outlined,.v-card--variant-text,.v-card--variant-tonal{background:transparent;color:inherit}.v-card--variant-plain{opacity:.62}.v-card--variant-plain:focus,.v-card--variant-plain:hover{opacity:1}.v-card--variant-plain .v-card__overlay{display:none}.v-card--variant-elevated,.v-card--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-card--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--variant-outlined{border:thin solid currentColor}.v-card--variant-text .v-card__overlay{background:currentColor}.v-card--variant-tonal .v-card__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-card .v-card__underlay{position:absolute}.v-card--disabled{pointer-events:none;-webkit-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__loader){opacity:.6}.v-card--flat{box-shadow:none}.v-card--hover{cursor:pointer}.v-card--hover:before,.v-card--hover:after{border-radius:inherit;bottom:0;content:"";display:block;left:0;pointer-events:none;position:absolute;right:0;top:0;transition:inherit}.v-card--hover:before{opacity:1;z-index:-1;box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--hover:after{z-index:1;opacity:0;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--hover:hover:after{opacity:1}.v-card--hover:hover:before{opacity:0}.v-card--hover:hover{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-card--link{cursor:pointer}.v-card-actions{align-items:center;display:flex;flex:none;min-height:52px;padding:.5rem}.v-card-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;padding:.625rem 1rem}.v-card-item+.v-card-text{padding-top:0}.v-card-item__prepend,.v-card-item__append{align-items:center;display:flex}.v-card-item__prepend{grid-area:prepend;padding-inline-end:.5rem}.v-card-item__append{grid-area:append;padding-inline-start:.5rem}.v-card-item__content{align-self:center;grid-area:content;overflow:hidden}.v-card-title{display:block;flex:none;font-size:1.25rem;font-weight:500;-webkit-hyphens:auto;hyphens:auto;letter-spacing:.0125em;min-width:0;overflow-wrap:normal;overflow:hidden;padding:.5rem 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap;word-break:normal;word-wrap:break-word}.v-card .v-card-title{line-height:1.6}.v-card--density-comfortable .v-card-title{line-height:1.75rem}.v-card--density-compact .v-card-title{line-height:1.55rem}.v-card-item .v-card-title{padding:0}.v-card-title+.v-card-text,.v-card-title+.v-card-actions{padding-top:0}.v-card-subtitle{display:block;flex:none;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;opacity:var(--v-card-subtitle-opacity, var(--v-medium-emphasis-opacity));overflow:hidden;padding:0 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap}.v-card .v-card-subtitle{line-height:1.425}.v-card--density-comfortable .v-card-subtitle{line-height:1.125rem}.v-card--density-compact .v-card-subtitle{line-height:1rem}.v-card-item .v-card-subtitle{padding:0 0 .25rem}.v-card-text{flex:1 1 auto;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;opacity:var(--v-card-text-opacity, 1);padding:1rem;text-transform:none}.v-card .v-card-text{line-height:1.425}.v-card--density-comfortable .v-card-text{line-height:1.2rem}.v-card--density-compact .v-card-text{line-height:1.15rem}.v-card__image{display:flex;height:100%;flex:1 1 auto;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-card__content{border-radius:inherit;overflow:hidden;position:relative}.v-card__loader{bottom:auto;top:0;left:0;position:absolute;right:0;width:100%;z-index:1}.v-card__overlay{background-color:currentColor;border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar .v-avatar__underlay{position:absolute}.v-avatar--rounded{border-radius:4px}.v-avatar--start{margin-inline-end:8px}.v-avatar--end{margin-inline-start:8px}.v-avatar .v-img{height:100%;width:100%}.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img--rounded{border-radius:4px}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:flex;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-flex;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer~.v-responsive__content{margin-inline-start:-100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-data-table{width:100%}.v-data-table__table{width:100%;border-collapse:separate;border-spacing:0}.v-data-table__tr--focus{border:1px dotted black}.v-data-table__tr--clickable{cursor:pointer}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end{text-align:end}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-end .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-end .v-data-table-header__content{flex-direction:row-reverse}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center{text-align:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--align-center .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--align-center .v-data-table-header__content{justify-content:center}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--no-padding,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--no-padding{padding:0 8px}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--nowrap,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--nowrap,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--nowrap,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--nowrap{text-overflow:ellipsis;text-wrap:nowrap;overflow:hidden}.v-data-table .v-table__wrapper>table>thead>tr>td.v-data-table-column--nowrap .v-data-table-header__content,.v-data-table .v-table__wrapper>table>thead>tr th.v-data-table-column--nowrap .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr>td.v-data-table-column--nowrap .v-data-table-header__content,.v-data-table .v-table__wrapper>table tbody>tr th.v-data-table-column--nowrap .v-data-table-header__content{display:contents}.v-data-table .v-table__wrapper>table>thead>tr>th,.v-data-table .v-table__wrapper>table tbody>tr>th{align-items:center}.v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--fixed,.v-data-table .v-table__wrapper>table tbody>tr>th.v-data-table__th--fixed{position:sticky}.v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--sortable:hover,.v-data-table .v-table__wrapper>table tbody>tr>th.v-data-table__th--sortable:hover{cursor:pointer;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon{opacity:0}.v-data-table .v-table__wrapper>table>thead>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon,.v-data-table .v-table__wrapper>table tbody>tr>th:not(.v-data-table__th--sorted):hover .v-data-table-header__sort-icon{opacity:.5}.v-data-table-column--fixed,.v-data-table__th--sticky{background:rgb(var(--v-theme-surface));position:sticky!important;left:0;z-index:1}.v-data-table-column--last-fixed{border-right:1px solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-data-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th.v-data-table-column--fixed{z-index:2}.v-data-table-group-header-row td{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface))}.v-data-table-group-header-row td>span{padding-left:5px}.v-data-table--loading .v-data-table__td{opacity:var(--v-disabled-opacity)}.v-data-table-group-header-row__column{padding-left:calc(var(--v-data-table-group-header-row-depth) * 16px)!important}.v-data-table-header__content{display:flex;align-items:center}.v-data-table-header__sort-badge{display:inline-flex;justify-content:center;align-items:center;font-size:.875rem;padding:4px;border-radius:50%;background:rgba(var(--v-border-color),var(--v-border-opacity));min-width:20px;min-height:20px;width:20px;height:20px}.v-data-table-progress>th{border:none!important;height:auto!important;padding:0!important}.v-data-table-progress__loader{position:relative}.v-data-table-rows-loading,.v-data-table-rows-no-data{text-align:center}.v-data-table__tr--mobile>.v-data-table__td--expanded-row{grid-template-columns:0;justify-content:center}.v-data-table__tr--mobile>.v-data-table__td--select-row{grid-template-columns:0;justify-content:end}.v-data-table__tr--mobile>td{align-items:center;column-gap:4px;display:grid;grid-template-columns:repeat(2,1fr);min-height:var(--v-table-row-height)}.v-data-table__tr--mobile>td:not(:last-child){border-bottom:0!important}.v-data-table__td-title{font-weight:500;text-align:left}.v-data-table__td-value{text-align:right}.v-data-table__td-sort-icon{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-data-table__td-sort-icon-active{color:rgba(var(--v-theme-on-surface))}.v-data-table-footer{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end;padding:8px 4px}.v-data-table-footer__items-per-page{align-items:center;display:flex;justify-content:center}.v-data-table-footer__items-per-page>span{padding-inline-end:8px}.v-data-table-footer__items-per-page>.v-select{width:90px}.v-data-table-footer__info{display:flex;justify-content:flex-end;min-width:116px;padding:0 16px}.v-data-table-footer__paginationz{align-items:center;display:flex;margin-inline-start:16px}.v-data-table-footer__page{padding:0 8px}.v-pagination__list{display:inline-flex;list-style-type:none;justify-content:center;width:100%}.v-pagination__item,.v-pagination__first,.v-pagination__prev,.v-pagination__next,.v-pagination__last{margin:.3rem}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none;caret-color:transparent}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;align-items:center;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;-webkit-user-select:none;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;color:inherit;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 16px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 12px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 8px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-input--hide-spin-buttons input::-webkit-outer-spin-button,.v-input--hide-spin-buttons input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.v-input--hide-spin-buttons input[type=number]{-moz-appearance:textfield}.v-input--plain-underlined .v-input__prepend,.v-input--plain-underlined .v-input__append{align-items:flex-start}.v-input--density-default.v-input--plain-underlined .v-input__prepend,.v-input--density-default.v-input--plain-underlined .v-input__append{padding-top:calc(var(--v-input-padding-top) + 4px)}.v-input--density-comfortable.v-input--plain-underlined .v-input__prepend,.v-input--density-comfortable.v-input--plain-underlined .v-input__append{padding-top:calc(var(--v-input-padding-top) + 2px)}.v-input--density-compact.v-input--plain-underlined .v-input__prepend,.v-input--density-compact.v-input--plain-underlined .v-input__append{padding-top:calc(var(--v-input-padding-top) + 0px)}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip .v-icon{--v-icon-size-multiplier: .8571428571}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 20px;font-size:.625rem;padding:0 8px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 14px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 20px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-5.6px;margin-inline-end:4px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-8px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:4px;margin-inline-end:-5.6px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-8px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:12px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-4px;margin-inline-end:4px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:4px;margin-inline-end:-4px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:8px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 26px;font-size:.75rem;padding:0 10px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 20px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 26px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-7px;margin-inline-end:5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-10px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:5px;margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-10px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:15px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-5px;margin-inline-end:5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:5px;margin-inline-end:-5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:10px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 32px;font-size:.875rem;padding:0 12px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 26px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 32px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-8.4px;margin-inline-end:6px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-12px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:6px;margin-inline-end:-8.4px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-12px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:18px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-6px;margin-inline-end:6px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:6px;margin-inline-end:-6px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:12px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 38px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 32px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 38px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 44px;font-size:1.125rem;padding:0 17px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 38px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 44px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.9px;margin-inline-end:8.5px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-17px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8.5px;margin-inline-end:-11.9px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-17px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:25.5px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8.5px;margin-inline-end:8.5px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8.5px;margin-inline-end:-8.5px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:17px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -4px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -8px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip .v-chip__underlay{position:absolute}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--link,.v-chip--filter{-webkit-user-select:none;user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;-webkit-user-select:none;user-select:none}.v-chip--label{border-radius:4px}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column .v-slide-group__content{white-space:normal;flex-wrap:wrap;max-width:100%}.v-slide-group{display:flex;overflow:hidden}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px;cursor:pointer}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none;opacity:var(--v-disabled-opacity)}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.2s all cubic-bezier(.4,0,.2,1);white-space:nowrap}.v-slide-group__content>*{white-space:initial}.v-slide-group__container{contain:content;display:flex;flex:1 1 auto;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;scrollbar-color:rgba(0,0,0,0)}.v-slide-group__container::-webkit-scrollbar{display:none}.v-slide-group--vertical{max-height:inherit}.v-slide-group--vertical,.v-slide-group--vertical .v-slide-group__container,.v-slide-group--vertical .v-slide-group__content{flex-direction:column}.v-slide-group--vertical .v-slide-group__container{overflow-x:hidden;overflow-y:auto}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;-webkit-user-select:none;user-select:none}.v-list--nav{padding-inline:8px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content 1fr auto;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-list-item .v-list-item__underlay{position:absolute}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-badge .v-icon,.v-list-item__prepend>.v-icon,.v-list-item__append>.v-badge .v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-badge .v-icon,.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-badge .v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--active:not(.v-list-item--link) .v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;-webkit-user-select:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-navigation-drawer--rail:not(.v-navigation-drawer--expand-on-hover) .v-list-item .v-avatar,.v-navigation-drawer--rail.v-navigation-drawer--expand-on-hover:not(.v-navigation-drawer--is-hovering) .v-list-item .v-avatar{--v-avatar-height: 24px}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-badge~.v-list-item__spacer,.v-list-item__prepend>.v-icon~.v-list-item__spacer,.v-list-item__prepend>.v-tooltip~.v-list-item__spacer{width:32px}.v-list-item__prepend>.v-avatar~.v-list-item__spacer{width:16px}.v-list-item__prepend>.v-list-item-action~.v-list-item__spacer{width:16px}.v-list-item--slim .v-list-item__prepend>.v-badge~.v-list-item__spacer,.v-list-item--slim .v-list-item__prepend>.v-icon~.v-list-item__spacer,.v-list-item--slim .v-list-item__prepend>.v-tooltip~.v-list-item__spacer{width:20px}.v-list-item--slim .v-list-item__prepend>.v-avatar~.v-list-item__spacer{width:4px}.v-list-item--slim .v-list-item__prepend>.v-list-item-action~.v-list-item__spacer{width:4px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append .v-list-item__spacer{order:-1;transition:.15s width cubic-bezier(.4,0,.2,1)}.v-list-item__append>.v-badge~.v-list-item__spacer,.v-list-item__append>.v-icon~.v-list-item__spacer,.v-list-item__append>.v-tooltip~.v-list-item__spacer{width:32px}.v-list-item__append>.v-avatar~.v-list-item__spacer{width:16px}.v-list-item__append>.v-list-item-action~.v-list-item__spacer{width:16px}.v-list-item--slim .v-list-item__append>.v-badge~.v-list-item__spacer,.v-list-item--slim .v-list-item__append>.v-icon~.v-list-item__spacer,.v-list-item--slim .v-list-item__append>.v-tooltip~.v-list-item__spacer{width:20px}.v-list-item--slim .v-list-item__append>.v-avatar~.v-list-item__spacer{width:4px}.v-list-item--slim .v-list-item__append>.v-list-item-action~.v-list-item__spacer{width:4px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:8px;margin-inline-start:-8px}.v-list-item-action--end{margin-inline-start:8px;margin-inline-end:-8px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-list-item-subtitle-opacity, var(--v-medium-emphasis-opacity));overflow:hidden;padding:0;text-overflow:ellipsis;overflow-wrap:break-word;word-break:initial;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{-webkit-hyphens:auto;hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline:16px}.v-list-item--nav{padding-inline:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list--slim .v-list-group{--prepend-width: 28px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-list-group__header.v-list-item--active:hover .v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:100%;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-divider__content{padding:0 16px}.v-divider__wrapper--vertical .v-divider__content{padding:4px 0}.v-divider__wrapper{display:flex;align-items:center;justify-content:center}.v-divider__wrapper--vertical{flex-direction:column;height:100%}.v-divider__wrapper--vertical .v-divider{margin:0 auto}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-overlay-scroll-blocked:not(html){overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:var(--v-overlay-opacity, .32);position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline:16px}.v-input--plain-underlined.v-text-field .v-input__details{padding-inline:0}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;min-height:max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom));padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 8px;--v-field-padding-bottom: 4px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 4px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field .v-chip{--v-chip-height: 24px}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 56px;--v-field-padding-bottom: 4px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 48px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 40px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 16px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 12px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 8px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 48px;--v-field-padding-top: 4px;--v-field-padding-bottom: 4px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 40px;--v-field-padding-top: 2px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 32px;--v-field-padding-top: 0px;--v-field-padding-bottom: 0px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:24px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{align-items:center;color:inherit;column-gap:2px;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom));min-width:0;padding-inline:var(--v-field-padding-start) var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%}.v-input--density-default .v-field__input{row-gap:8px}.v-input--density-comfortable .v-field__input{row-gap:6px}.v-input--density-compact .v-field__input{row-gap:4px}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 8px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 4px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;overflow:hidden;margin-inline:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}@media (hover: none){.v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;display:block;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform;z-index:1}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:unset}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-color:currentColor;border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width);border-start-start-radius:inherit;border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:inherit}.v-field--rounded.v-field--variant-outlined .v-field__outline__start,[class^=rounded-].v-field--variant-outlined .v-field__outline__start,[class*=" rounded-"].v-field--variant-outlined .v-field__outline__start{flex-basis:calc(var(--v-input-control-height) / 2 + 2px)}.v-field--reverse.v-field--variant-outlined .v-field__outline__start{border-start-start-radius:0;border-start-end-radius:inherit;border-end-end-radius:inherit;border-end-start-radius:0;border-inline-end-width:var(--v-field-border-width);border-inline-start-width:0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative;max-width:calc(100% - 12px)}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width);border-start-start-radius:0;border-start-end-radius:inherit;border-end-end-radius:inherit;border-end-start-radius:0}.v-field--reverse.v-field--variant-outlined .v-field__outline__end{border-start-start-radius:inherit;border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:inherit;border-inline-end-width:0;border-inline-start-width:var(--v-field-border-width)}.v-field__loader{top:calc(100% - 2px);left:0;position:absolute;right:0;width:100%;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;overflow:hidden}.v-field--variant-outlined .v-field__loader{top:calc(100% - 3px);width:calc(100% - 2px);left:1px}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__field,.v-field--reverse .v-field__input,.v-field--reverse .v-field__outline{flex-direction:row-reverse}.v-field--reverse .v-field__input,.v-field--reverse input{text-align:end}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-virtual-scroll{display:block;flex:1 1 auto;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-table{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));font-size:.875rem;transition-duration:.28s;transition-property:box-shadow,opacity,background,height;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-table .v-table-divider{border-right:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>thead>tr>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th{border-bottom:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table .v-table__wrapper>table>tfoot>tr>td,.v-table .v-table__wrapper>table>tfoot>tr>th{border-top:thin solid rgba(var(--v-border-color),var(--v-border-opacity))}.v-table.v-table--hover>.v-table__wrapper>table>tbody>tr>td{position:relative}.v-table.v-table--hover>.v-table__wrapper>table>tbody>tr:hover>td:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(var(--v-border-color),var(--v-hover-opacity));pointer-events:none}.v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{background:rgb(var(--v-theme-surface));box-shadow:inset 0 -1px rgba(var(--v-border-color),var(--v-border-opacity));z-index:1}.v-table.v-table--fixed-footer>tfoot>tr>th,.v-table.v-table--fixed-footer>tfoot>tr>td{background:rgb(var(--v-theme-surface));box-shadow:inset 0 1px rgba(var(--v-border-color),var(--v-border-opacity))}.v-table{border-radius:inherit;line-height:1.5;max-width:100%;display:flex;flex-direction:column}.v-table>.v-table__wrapper>table{width:100%;border-spacing:0}.v-table>.v-table__wrapper>table>tbody>tr>td,.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>td,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>td,.v-table>.v-table__wrapper>table>tfoot>tr>th{padding:0 16px;transition-duration:.28s;transition-property:box-shadow,opacity,background,height;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-table>.v-table__wrapper>table>tbody>tr>td,.v-table>.v-table__wrapper>table>thead>tr>td,.v-table>.v-table__wrapper>table>tfoot>tr>td{height:var(--v-table-row-height)}.v-table>.v-table__wrapper>table>tbody>tr>th,.v-table>.v-table__wrapper>table>thead>tr>th,.v-table>.v-table__wrapper>table>tfoot>tr>th{height:var(--v-table-header-height);font-weight:500;-webkit-user-select:none;user-select:none;text-align:start}.v-table--density-default{--v-table-header-height: 56px;--v-table-row-height: 52px}.v-table--density-comfortable{--v-table-header-height: 48px;--v-table-row-height: 44px}.v-table--density-compact{--v-table-header-height: 40px;--v-table-row-height: 36px}.v-table__wrapper{border-radius:inherit;overflow:auto;flex:1 1 auto}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-table--fixed-height>.v-table__wrapper{overflow-y:auto}.v-table--fixed-header>.v-table__wrapper>table>thead{position:sticky;top:0;z-index:2}.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{border-bottom:0px!important}.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr{position:sticky;bottom:0;z-index:1}.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>td,.v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>th{border-top:0px!important}@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.googlefonts.cn/s/materialicons/v141/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format("woff2")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased} ');

(function (vue) {
  'use strict';

  const wrapElements = () => {
    const wrapper = document.createElement("body");
    wrapper.id = "chaoxing-assignment-wrapper";
    while (document.body.firstChild) {
      wrapper.appendChild(document.body.firstChild);
    }
    document.body.appendChild(wrapper);
    wrapper.style.display = "none";
  };
  const removeStyles = () => {
    const styles = document.querySelectorAll("link[rel=stylesheet]");
    styles.forEach((style) => {
      var _a;
      if ((_a = style.getAttribute("href")) == null ? void 0 : _a.includes("chaoxing")) {
        style.remove();
      }
    });
  };
  const urlDetection = () => {
    const url = window.location.href;
    if (url.includes("mooc1-api.chaoxing.com/work/stu-work")) {
      return "homework";
    }
    if (url.includes("i.chaoxing.com/base")) {
      return "home";
    }
  };
  const addMenuItem = () => {
    const menubarElement = document.querySelector('div.menubar[role="menubar"]');
    if (menubarElement) {
      const menuItemElement = document.createElement("a");
      menuItemElement.setAttribute("role", "menuitem");
      menuItemElement.setAttribute("focus_element", "0");
      menuItemElement.setAttribute("tabindex", "-1");
      menuItemElement.id = "first1000001";
      menuItemElement.setAttribute("imgname", "icon-home");
      menuItemElement.setAttribute(
        "onclick",
        `setUrl('1000001','https://mooc1-api.chaoxing.com/work/stu-work',this,'0','全部作业')`
      );
      menuItemElement.setAttribute(
        "dataurl",
        "https://mooc1-api.chaoxing.com/work/stu-work"
      );
      const iconElement = document.createElement("span");
      iconElement.className = "icon3 zne_bj_icon";
      menuItemElement.appendChild(iconElement);
      const titleElement = document.createElement("h5");
      titleElement.title = "全部作业";
      titleElement.textContent = "全部作业";
      menuItemElement.appendChild(titleElement);
      const arrowElement = document.createElement("span");
      arrowElement.className = "arrow icon-uniE900";
      menuItemElement.appendChild(arrowElement);
      menubarElement.prepend(menuItemElement);
    }
  };
  function extractTasks() {
    const taskElements = document.querySelectorAll(
      "#chaoxing-assignment-wrapper ul.nav > li"
    );
    const tasks = Array.from(taskElements).map((task) => {
      var _a, _b, _c;
      const optionElement = task.querySelector('div[role="option"]');
      let title = "";
      let status = "";
      let uncommitted = false;
      let course = "";
      let leftTime = "";
      if (optionElement) {
        title = ((_a = optionElement.querySelector("p")) == null ? void 0 : _a.textContent) || "";
        const statusElement = optionElement.querySelector("span:nth-of-type(1)");
        status = (statusElement == null ? void 0 : statusElement.textContent) || "";
        uncommitted = (statusElement == null ? void 0 : statusElement.className.includes("status")) || false;
        course = ((_b = optionElement.querySelector("span:nth-of-type(2)")) == null ? void 0 : _b.textContent) || "";
        leftTime = ((_c = optionElement.querySelector(".fr")) == null ? void 0 : _c.textContent) || "";
      }
      const raw = task.getAttribute("data") || "";
      let workId = "";
      let courseId = "";
      let clazzId = "";
      if (raw) {
        const rawUrl = new URL(raw);
        const searchParams = rawUrl.searchParams;
        workId = searchParams.get("taskrefId") || "";
        courseId = searchParams.get("courseId") || "";
        clazzId = searchParams.get("clazzId") || "";
      }
      return {
        title,
        status,
        uncommitted,
        course,
        leftTime,
        workId,
        courseId,
        clazzId,
        raw
      };
    });
    return tasks;
  }
  const API_VISIT_COURSE = "https://mooc1.chaoxing.com/visit/stucoursemiddle?ismooc2=1";
  const cssLoader = (e) => {
    const t = GM_getResourceText(e);
    return GM_addStyle(t), t;
  };
  cssLoader("vuetify/dist/vuetify.css");
  function useToggleScope(source, fn) {
    let scope;
    function start() {
      scope = vue.effectScope();
      scope.run(() => fn.length ? fn(() => {
        scope == null ? void 0 : scope.stop();
        start();
      }) : fn());
    }
    vue.watch(source, (active) => {
      if (active && !scope) {
        start();
      } else if (!active) {
        scope == null ? void 0 : scope.stop();
        scope = void 0;
      }
    }, {
      immediate: true
    });
    vue.onScopeDispose(() => {
      scope == null ? void 0 : scope.stop();
    });
  }
  const IN_BROWSER = typeof window !== "undefined";
  const SUPPORTS_INTERSECTION = IN_BROWSER && "IntersectionObserver" in window;
  const SUPPORTS_TOUCH = IN_BROWSER && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
  function getNestedValue(obj, path, fallback) {
    const last = path.length - 1;
    if (last < 0)
      return obj === void 0 ? fallback : obj;
    for (let i = 0; i < last; i++) {
      if (obj == null) {
        return fallback;
      }
      obj = obj[path[i]];
    }
    if (obj == null)
      return fallback;
    return obj[path[last]] === void 0 ? fallback : obj[path[last]];
  }
  function deepEqual(a, b) {
    if (a === b)
      return true;
    if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
      return false;
    }
    if (a !== Object(a) || b !== Object(b)) {
      return false;
    }
    const props = Object.keys(a);
    if (props.length !== Object.keys(b).length) {
      return false;
    }
    return props.every((p) => deepEqual(a[p], b[p]));
  }
  function getObjectValueByPath(obj, path, fallback) {
    if (obj == null || !path || typeof path !== "string")
      return fallback;
    if (obj[path] !== void 0)
      return obj[path];
    path = path.replace(/\[(\w+)\]/g, ".$1");
    path = path.replace(/^\./, "");
    return getNestedValue(obj, path.split("."), fallback);
  }
  function getPropertyFromItem(item, property, fallback) {
    if (property === true)
      return item === void 0 ? fallback : item;
    if (property == null || typeof property === "boolean")
      return fallback;
    if (item !== Object(item)) {
      if (typeof property !== "function")
        return fallback;
      const value2 = property(item, fallback);
      return typeof value2 === "undefined" ? fallback : value2;
    }
    if (typeof property === "string")
      return getObjectValueByPath(item, property, fallback);
    if (Array.isArray(property))
      return getNestedValue(item, property, fallback);
    if (typeof property !== "function")
      return fallback;
    const value = property(item, fallback);
    return typeof value === "undefined" ? fallback : value;
  }
  function createRange(length) {
    let start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Array.from({
      length
    }, (v, k) => start + k);
  }
  function convertToUnit(str) {
    let unit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
    if (str == null || str === "") {
      return void 0;
    } else if (isNaN(+str)) {
      return String(str);
    } else if (!isFinite(+str)) {
      return void 0;
    } else {
      return `${Number(str)}${unit}`;
    }
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && !Array.isArray(obj);
  }
  function refElement(obj) {
    if (obj && "$el" in obj) {
      const el = obj.$el;
      if ((el == null ? void 0 : el.nodeType) === Node.TEXT_NODE) {
        return el.nextElementSibling;
      }
      return el;
    }
    return obj;
  }
  const keyCodes = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16
  });
  const keyValues = Object.freeze({
    enter: "Enter",
    tab: "Tab",
    delete: "Delete",
    esc: "Escape",
    space: "Space",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    end: "End",
    home: "Home",
    del: "Delete",
    backspace: "Backspace",
    insert: "Insert",
    pageup: "PageUp",
    pagedown: "PageDown",
    shift: "Shift"
  });
  function has(obj, key) {
    return key.every((k) => obj.hasOwnProperty(k));
  }
  function pick(obj, paths) {
    const found = {};
    const keys = new Set(Object.keys(obj));
    for (const path of paths) {
      if (keys.has(path)) {
        found[path] = obj[path];
      }
    }
    return found;
  }
  function pickWithRest(obj, paths, exclude) {
    const found = /* @__PURE__ */ Object.create(null);
    const rest = /* @__PURE__ */ Object.create(null);
    for (const key in obj) {
      if (paths.some((path) => path instanceof RegExp ? path.test(key) : path === key) && !(void 0 )) {
        found[key] = obj[key];
      } else {
        rest[key] = obj[key];
      }
    }
    return [found, rest];
  }
  function omit(obj, exclude) {
    const clone = {
      ...obj
    };
    exclude.forEach((prop) => delete clone[prop]);
    return clone;
  }
  function only(obj, include) {
    const clone = {};
    include.forEach((prop) => clone[prop] = obj[prop]);
    return clone;
  }
  const onRE = /^on[^a-z]/;
  const isOn = (key) => onRE.test(key);
  const bubblingEvents = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
  function filterInputAttrs(attrs) {
    const [events, props] = pickWithRest(attrs, [onRE]);
    const inputEvents = omit(events, bubblingEvents);
    const [rootAttrs, inputAttrs] = pickWithRest(props, ["class", "style", "id", /^data-/]);
    Object.assign(rootAttrs, events);
    Object.assign(inputAttrs, inputEvents);
    return [rootAttrs, inputAttrs];
  }
  function wrapInArray(v) {
    return v == null ? [] : Array.isArray(v) ? v : [v];
  }
  function debounce(fn, delay) {
    let timeoutId = 0;
    const wrap = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), vue.unref(delay));
    };
    wrap.clear = () => {
      clearTimeout(timeoutId);
    };
    wrap.immediate = fn;
    return wrap;
  }
  function clamp(value) {
    let min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    let max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return Math.max(min, Math.min(max, value));
  }
  function padEnd(str, length) {
    let char = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
    return str + char.repeat(Math.max(0, length - str.length));
  }
  function padStart(str, length) {
    let char = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
    return char.repeat(Math.max(0, length - str.length)) + str;
  }
  function chunk(str) {
    let size = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const chunked = [];
    let index = 0;
    while (index < str.length) {
      chunked.push(str.substr(index, size));
      index += size;
    }
    return chunked;
  }
  function mergeDeep() {
    let source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let arrayFn = arguments.length > 2 ? arguments[2] : void 0;
    const out = {};
    for (const key in source) {
      out[key] = source[key];
    }
    for (const key in target) {
      const sourceProperty = source[key];
      const targetProperty = target[key];
      if (isObject(sourceProperty) && isObject(targetProperty)) {
        out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn);
        continue;
      }
      if (Array.isArray(sourceProperty) && Array.isArray(targetProperty) && arrayFn) {
        out[key] = arrayFn(sourceProperty, targetProperty);
        continue;
      }
      out[key] = targetProperty;
    }
    return out;
  }
  function flattenFragments(nodes) {
    return nodes.map((node) => {
      if (node.type === vue.Fragment) {
        return flattenFragments(node.children);
      } else {
        return node;
      }
    }).flat();
  }
  function toKebabCase() {
    let str = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    if (toKebabCase.cache.has(str))
      return toKebabCase.cache.get(str);
    const kebab = str.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
    toKebabCase.cache.set(str, kebab);
    return kebab;
  }
  toKebabCase.cache = /* @__PURE__ */ new Map();
  function findChildrenWithProvide(key, vnode) {
    if (!vnode || typeof vnode !== "object")
      return [];
    if (Array.isArray(vnode)) {
      return vnode.map((child) => findChildrenWithProvide(key, child)).flat(1);
    } else if (Array.isArray(vnode.children)) {
      return vnode.children.map((child) => findChildrenWithProvide(key, child)).flat(1);
    } else if (vnode.component) {
      if (Object.getOwnPropertySymbols(vnode.component.provides).includes(key)) {
        return [vnode.component];
      } else if (vnode.component.subTree) {
        return findChildrenWithProvide(key, vnode.component.subTree).flat(1);
      }
    }
    return [];
  }
  function destructComputed(getter) {
    const refs = vue.reactive({});
    const base = vue.computed(getter);
    vue.watchEffect(() => {
      for (const key in base.value) {
        refs[key] = base.value[key];
      }
    }, {
      flush: "sync"
    });
    return vue.toRefs(refs);
  }
  function includes(arr, val) {
    return arr.includes(val);
  }
  function eventName(propName) {
    return propName[2].toLowerCase() + propName.slice(3);
  }
  const EventProp = () => [Function, Array];
  function hasEvent(props, name) {
    name = "on" + vue.capitalize(name);
    return !!(props[name] || props[`${name}Once`] || props[`${name}Capture`] || props[`${name}OnceCapture`] || props[`${name}CaptureOnce`]);
  }
  function callEvent(handler) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    if (Array.isArray(handler)) {
      for (const h2 of handler) {
        h2(...args);
      }
    } else if (typeof handler === "function") {
      handler(...args);
    }
  }
  function focusableChildren(el) {
    let filterByTabIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const targets = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((s) => `${s}${filterByTabIndex ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
    return [...el.querySelectorAll(targets)];
  }
  function getNextElement(elements, location, condition) {
    let _el;
    let idx = elements.indexOf(document.activeElement);
    const inc = location === "next" ? 1 : -1;
    do {
      idx += inc;
      _el = elements[idx];
    } while ((!_el || _el.offsetParent == null || !((condition == null ? void 0 : condition(_el)) ?? true)) && idx < elements.length && idx >= 0);
    return _el;
  }
  function focusChild(el, location) {
    var _a, _b, _c, _d;
    const focusable = focusableChildren(el);
    if (!location) {
      if (el === document.activeElement || !el.contains(document.activeElement)) {
        (_a = focusable[0]) == null ? void 0 : _a.focus();
      }
    } else if (location === "first") {
      (_b = focusable[0]) == null ? void 0 : _b.focus();
    } else if (location === "last") {
      (_c = focusable.at(-1)) == null ? void 0 : _c.focus();
    } else if (typeof location === "number") {
      (_d = focusable[location]) == null ? void 0 : _d.focus();
    } else {
      const _el = getNextElement(focusable, location);
      if (_el)
        _el.focus();
      else
        focusChild(el, location === "next" ? "first" : "last");
    }
  }
  function isEmpty(val) {
    return val === null || val === void 0 || typeof val === "string" && val.trim() === "";
  }
  function matchesSelector(el, selector) {
    const supportsSelector = IN_BROWSER && typeof CSS !== "undefined" && typeof CSS.supports !== "undefined" && CSS.supports(`selector(${selector})`);
    if (!supportsSelector)
      return null;
    try {
      return !!el && el.matches(selector);
    } catch (err) {
      return null;
    }
  }
  function ensureValidVNode(vnodes) {
    return vnodes.some((child) => {
      if (!vue.isVNode(child))
        return true;
      if (child.type === vue.Comment)
        return false;
      return child.type !== vue.Fragment || ensureValidVNode(child.children);
    }) ? vnodes : null;
  }
  function defer(timeout, cb) {
    if (!IN_BROWSER || timeout === 0) {
      cb();
      return () => {
      };
    }
    const timeoutId = window.setTimeout(cb, timeout);
    return () => window.clearTimeout(timeoutId);
  }
  function isClickInsideElement(event, targetDiv) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const divRect = targetDiv.getBoundingClientRect();
    const divLeft = divRect.left;
    const divTop = divRect.top;
    const divRight = divRect.right;
    const divBottom = divRect.bottom;
    return mouseX >= divLeft && mouseX <= divRight && mouseY >= divTop && mouseY <= divBottom;
  }
  function templateRef() {
    const el = vue.shallowRef();
    const fn = (target) => {
      el.value = target;
    };
    Object.defineProperty(fn, "value", {
      enumerable: true,
      get: () => el.value,
      set: (val) => el.value = val
    });
    Object.defineProperty(fn, "el", {
      enumerable: true,
      get: () => refElement(el.value)
    });
    return fn;
  }
  const block = ["top", "bottom"];
  const inline = ["start", "end", "left", "right"];
  function parseAnchor(anchor, isRtl) {
    let [side, align] = anchor.split(" ");
    if (!align) {
      align = includes(block, side) ? "start" : includes(inline, side) ? "top" : "center";
    }
    return {
      side: toPhysical(side, isRtl),
      align: toPhysical(align, isRtl)
    };
  }
  function toPhysical(str, isRtl) {
    if (str === "start")
      return isRtl ? "right" : "left";
    if (str === "end")
      return isRtl ? "left" : "right";
    return str;
  }
  function flipSide(anchor) {
    return {
      side: {
        center: "center",
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[anchor.side],
      align: anchor.align
    };
  }
  function flipAlign(anchor) {
    return {
      side: anchor.side,
      align: {
        center: "center",
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[anchor.align]
    };
  }
  function flipCorner(anchor) {
    return {
      side: anchor.align,
      align: anchor.side
    };
  }
  function getAxis(anchor) {
    return includes(block, anchor.side) ? "y" : "x";
  }
  class Box {
    constructor(_ref) {
      let {
        x,
        y,
        width,
        height
      } = _ref;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
    get top() {
      return this.y;
    }
    get bottom() {
      return this.y + this.height;
    }
    get left() {
      return this.x;
    }
    get right() {
      return this.x + this.width;
    }
  }
  function getOverflow(a, b) {
    return {
      x: {
        before: Math.max(0, b.left - a.left),
        after: Math.max(0, a.right - b.right)
      },
      y: {
        before: Math.max(0, b.top - a.top),
        after: Math.max(0, a.bottom - b.bottom)
      }
    };
  }
  function getTargetBox(target) {
    if (Array.isArray(target)) {
      return new Box({
        x: target[0],
        y: target[1],
        width: 0,
        height: 0
      });
    } else {
      return target.getBoundingClientRect();
    }
  }
  function nullifyTransforms(el) {
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    const tx = style.transform;
    if (tx) {
      let ta, sx, sy, dx, dy;
      if (tx.startsWith("matrix3d(")) {
        ta = tx.slice(9, -1).split(/, /);
        sx = +ta[0];
        sy = +ta[5];
        dx = +ta[12];
        dy = +ta[13];
      } else if (tx.startsWith("matrix(")) {
        ta = tx.slice(7, -1).split(/, /);
        sx = +ta[0];
        sy = +ta[3];
        dx = +ta[4];
        dy = +ta[5];
      } else {
        return new Box(rect);
      }
      const to = style.transformOrigin;
      const x = rect.x - dx - (1 - sx) * parseFloat(to);
      const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
      const w = sx ? rect.width / sx : el.offsetWidth + 1;
      const h2 = sy ? rect.height / sy : el.offsetHeight + 1;
      return new Box({
        x,
        y,
        width: w,
        height: h2
      });
    } else {
      return new Box(rect);
    }
  }
  function animate(el, keyframes, options) {
    if (typeof el.animate === "undefined")
      return {
        finished: Promise.resolve()
      };
    let animation;
    try {
      animation = el.animate(keyframes, options);
    } catch (err) {
      return {
        finished: Promise.resolve()
      };
    }
    if (typeof animation.finished === "undefined") {
      animation.finished = new Promise((resolve) => {
        animation.onfinish = () => {
          resolve(animation);
        };
      });
    }
    return animation;
  }
  const handlers = /* @__PURE__ */ new WeakMap();
  function bindProps(el, props) {
    Object.keys(props).forEach((k) => {
      var _a;
      if (isOn(k)) {
        const name = eventName(k);
        const handler = handlers.get(el);
        if (props[k] == null) {
          handler == null ? void 0 : handler.forEach((v) => {
            const [n, fn] = v;
            if (n === name) {
              el.removeEventListener(name, fn);
              handler.delete(v);
            }
          });
        } else if (!handler || !((_a = [...handler]) == null ? void 0 : _a.some((v) => v[0] === name && v[1] === props[k]))) {
          el.addEventListener(name, props[k]);
          const _handler = handler || /* @__PURE__ */ new Set();
          _handler.add([name, props[k]]);
          if (!handlers.has(el))
            handlers.set(el, _handler);
        }
      } else {
        if (props[k] == null) {
          el.removeAttribute(k);
        } else {
          el.setAttribute(k, props[k]);
        }
      }
    });
  }
  function unbindProps(el, props) {
    Object.keys(props).forEach((k) => {
      if (isOn(k)) {
        const name = eventName(k);
        const handler = handlers.get(el);
        handler == null ? void 0 : handler.forEach((v) => {
          const [n, fn] = v;
          if (n === name) {
            el.removeEventListener(name, fn);
            handler.delete(v);
          }
        });
      } else {
        el.removeAttribute(k);
      }
    });
  }
  const mainTRC = 2.4;
  const Rco = 0.2126729;
  const Gco = 0.7151522;
  const Bco = 0.072175;
  const normBG = 0.55;
  const normTXT = 0.58;
  const revTXT = 0.57;
  const revBG = 0.62;
  const blkThrs = 0.03;
  const blkClmp = 1.45;
  const deltaYmin = 5e-4;
  const scaleBoW = 1.25;
  const scaleWoB = 1.25;
  const loConThresh = 0.078;
  const loConFactor = 12.82051282051282;
  const loConOffset = 0.06;
  const loClip = 1e-3;
  function APCAcontrast(text, background) {
    const Rtxt = (text.r / 255) ** mainTRC;
    const Gtxt = (text.g / 255) ** mainTRC;
    const Btxt = (text.b / 255) ** mainTRC;
    const Rbg = (background.r / 255) ** mainTRC;
    const Gbg = (background.g / 255) ** mainTRC;
    const Bbg = (background.b / 255) ** mainTRC;
    let Ytxt = Rtxt * Rco + Gtxt * Gco + Btxt * Bco;
    let Ybg = Rbg * Rco + Gbg * Gco + Bbg * Bco;
    if (Ytxt <= blkThrs)
      Ytxt += (blkThrs - Ytxt) ** blkClmp;
    if (Ybg <= blkThrs)
      Ybg += (blkThrs - Ybg) ** blkClmp;
    if (Math.abs(Ybg - Ytxt) < deltaYmin)
      return 0;
    let outputContrast;
    if (Ybg > Ytxt) {
      const SAPC = (Ybg ** normBG - Ytxt ** normTXT) * scaleBoW;
      outputContrast = SAPC < loClip ? 0 : SAPC < loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC - loConOffset;
    } else {
      const SAPC = (Ybg ** revBG - Ytxt ** revTXT) * scaleWoB;
      outputContrast = SAPC > -loClip ? 0 : SAPC > -loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC + loConOffset;
    }
    return outputContrast * 100;
  }
  function consoleWarn(message) {
    vue.warn(`Vuetify: ${message}`);
  }
  function consoleError(message) {
    vue.warn(`Vuetify error: ${message}`);
  }
  function deprecate(original, replacement) {
    replacement = Array.isArray(replacement) ? replacement.slice(0, -1).map((s) => `'${s}'`).join(", ") + ` or '${replacement.at(-1)}'` : `'${replacement}'`;
    vue.warn(`[Vuetify UPGRADE] '${original}' is deprecated, use ${replacement} instead.`);
  }
  const delta = 0.20689655172413793;
  const cielabForwardTransform = (t) => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;
  const cielabReverseTransform = (t) => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);
  function fromXYZ$1(xyz) {
    const transform2 = cielabForwardTransform;
    const transformedY = transform2(xyz[1]);
    return [116 * transformedY - 16, 500 * (transform2(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform2(xyz[2] / 1.08883))];
  }
  function toXYZ$1(lab) {
    const transform2 = cielabReverseTransform;
    const Ln = (lab[0] + 16) / 116;
    return [transform2(Ln + lab[1] / 500) * 0.95047, transform2(Ln), transform2(Ln - lab[2] / 200) * 1.08883];
  }
  const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]];
  const srgbForwardTransform = (C) => C <= 31308e-7 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055;
  const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];
  const srgbReverseTransform = (C) => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;
  function fromXYZ(xyz) {
    const rgb = Array(3);
    const transform2 = srgbForwardTransform;
    const matrix = srgbForwardMatrix;
    for (let i = 0; i < 3; ++i) {
      rgb[i] = Math.round(clamp(transform2(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
    }
    return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2]
    };
  }
  function toXYZ(_ref) {
    let {
      r,
      g,
      b
    } = _ref;
    const xyz = [0, 0, 0];
    const transform2 = srgbReverseTransform;
    const matrix = srgbReverseMatrix;
    r = transform2(r / 255);
    g = transform2(g / 255);
    b = transform2(b / 255);
    for (let i = 0; i < 3; ++i) {
      xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
    }
    return xyz;
  }
  function isCssColor(color) {
    return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color);
  }
  function isParsableColor(color) {
    return isCssColor(color) && !/^((rgb|hsl)a?\()?var\(--/.test(color);
  }
  const cssColorRe = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/;
  const mappers = {
    rgb: (r, g, b, a) => ({
      r,
      g,
      b,
      a
    }),
    rgba: (r, g, b, a) => ({
      r,
      g,
      b,
      a
    }),
    hsl: (h2, s, l, a) => HSLtoRGB({
      h: h2,
      s,
      l,
      a
    }),
    hsla: (h2, s, l, a) => HSLtoRGB({
      h: h2,
      s,
      l,
      a
    }),
    hsv: (h2, s, v, a) => HSVtoRGB({
      h: h2,
      s,
      v,
      a
    }),
    hsva: (h2, s, v, a) => HSVtoRGB({
      h: h2,
      s,
      v,
      a
    })
  };
  function parseColor(color) {
    if (typeof color === "number") {
      if (isNaN(color) || color < 0 || color > 16777215) {
        consoleWarn(`'${color}' is not a valid hex color`);
      }
      return {
        r: (color & 16711680) >> 16,
        g: (color & 65280) >> 8,
        b: color & 255
      };
    } else if (typeof color === "string" && cssColorRe.test(color)) {
      const {
        groups
      } = color.match(cssColorRe);
      const {
        fn,
        values
      } = groups;
      const realValues = values.split(/,\s*/).map((v) => {
        if (v.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(fn)) {
          return parseFloat(v) / 100;
        } else {
          return parseFloat(v);
        }
      });
      return mappers[fn](...realValues);
    } else if (typeof color === "string") {
      let hex = color.startsWith("#") ? color.slice(1) : color;
      if ([3, 4].includes(hex.length)) {
        hex = hex.split("").map((char) => char + char).join("");
      } else if (![6, 8].includes(hex.length)) {
        consoleWarn(`'${color}' is not a valid hex(a) color`);
      }
      const int = parseInt(hex, 16);
      if (isNaN(int) || int < 0 || int > 4294967295) {
        consoleWarn(`'${color}' is not a valid hex(a) color`);
      }
      return HexToRGB(hex);
    } else if (typeof color === "object") {
      if (has(color, ["r", "g", "b"])) {
        return color;
      } else if (has(color, ["h", "s", "l"])) {
        return HSVtoRGB(HSLtoHSV(color));
      } else if (has(color, ["h", "s", "v"])) {
        return HSVtoRGB(color);
      }
    }
    throw new TypeError(`Invalid color: ${color == null ? color : String(color) || color.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
  }
  function HSVtoRGB(hsva) {
    const {
      h: h2,
      s,
      v,
      a
    } = hsva;
    const f = (n) => {
      const k = (n + h2 / 60) % 6;
      return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    };
    const rgb = [f(5), f(3), f(1)].map((v2) => Math.round(v2 * 255));
    return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2],
      a
    };
  }
  function HSLtoRGB(hsla) {
    return HSVtoRGB(HSLtoHSV(hsla));
  }
  function HSLtoHSV(hsl) {
    const {
      h: h2,
      s,
      l,
      a
    } = hsl;
    const v = l + s * Math.min(l, 1 - l);
    const sprime = v === 0 ? 0 : 2 - 2 * l / v;
    return {
      h: h2,
      s: sprime,
      v,
      a
    };
  }
  function toHex(v) {
    const h2 = Math.round(v).toString(16);
    return ("00".substr(0, 2 - h2.length) + h2).toUpperCase();
  }
  function RGBtoHex(_ref2) {
    let {
      r,
      g,
      b,
      a
    } = _ref2;
    return `#${[toHex(r), toHex(g), toHex(b), a !== void 0 ? toHex(Math.round(a * 255)) : ""].join("")}`;
  }
  function HexToRGB(hex) {
    hex = parseHex(hex);
    let [r, g, b, a] = chunk(hex, 2).map((c) => parseInt(c, 16));
    a = a === void 0 ? a : a / 255;
    return {
      r,
      g,
      b,
      a
    };
  }
  function parseHex(hex) {
    if (hex.startsWith("#")) {
      hex = hex.slice(1);
    }
    hex = hex.replace(/([^0-9a-f])/gi, "F");
    if (hex.length === 3 || hex.length === 4) {
      hex = hex.split("").map((x) => x + x).join("");
    }
    if (hex.length !== 6) {
      hex = padEnd(padEnd(hex, 6), 8, "F");
    }
    return hex;
  }
  function lighten(value, amount) {
    const lab = fromXYZ$1(toXYZ(value));
    lab[0] = lab[0] + amount * 10;
    return fromXYZ(toXYZ$1(lab));
  }
  function darken(value, amount) {
    const lab = fromXYZ$1(toXYZ(value));
    lab[0] = lab[0] - amount * 10;
    return fromXYZ(toXYZ$1(lab));
  }
  function getLuma(color) {
    const rgb = parseColor(color);
    return toXYZ(rgb)[1];
  }
  function getForeground(color) {
    const blackContrast = Math.abs(APCAcontrast(parseColor(0), parseColor(color)));
    const whiteContrast = Math.abs(APCAcontrast(parseColor(16777215), parseColor(color)));
    return whiteContrast > Math.min(blackContrast, 50) ? "#fff" : "#000";
  }
  function propsFactory(props, source) {
    return (defaults) => {
      return Object.keys(props).reduce((obj, prop) => {
        const isObjectDefinition = typeof props[prop] === "object" && props[prop] != null && !Array.isArray(props[prop]);
        const definition = isObjectDefinition ? props[prop] : {
          type: props[prop]
        };
        if (defaults && prop in defaults) {
          obj[prop] = {
            ...definition,
            default: defaults[prop]
          };
        } else {
          obj[prop] = definition;
        }
        if (source && !obj[prop].source) {
          obj[prop].source = source;
        }
        return obj;
      }, {});
    };
  }
  const makeComponentProps = propsFactory({
    class: [String, Array, Object],
    style: {
      type: [String, Array, Object],
      default: null
    }
  }, "component");
  const DefaultsSymbol = Symbol.for("vuetify:defaults");
  function createDefaults(options) {
    return vue.ref(options);
  }
  function injectDefaults() {
    const defaults = vue.inject(DefaultsSymbol);
    if (!defaults)
      throw new Error("[Vuetify] Could not find defaults instance");
    return defaults;
  }
  function provideDefaults(defaults, options) {
    const injectedDefaults = injectDefaults();
    const providedDefaults = vue.ref(defaults);
    const newDefaults = vue.computed(() => {
      const disabled = vue.unref(options == null ? void 0 : options.disabled);
      if (disabled)
        return injectedDefaults.value;
      const scoped = vue.unref(options == null ? void 0 : options.scoped);
      const reset = vue.unref(options == null ? void 0 : options.reset);
      const root = vue.unref(options == null ? void 0 : options.root);
      if (providedDefaults.value == null && !(scoped || reset || root))
        return injectedDefaults.value;
      let properties = mergeDeep(providedDefaults.value, {
        prev: injectedDefaults.value
      });
      if (scoped)
        return properties;
      if (reset || root) {
        const len = Number(reset || Infinity);
        for (let i = 0; i <= len; i++) {
          if (!properties || !("prev" in properties)) {
            break;
          }
          properties = properties.prev;
        }
        if (properties && typeof root === "string" && root in properties) {
          properties = mergeDeep(mergeDeep(properties, {
            prev: properties
          }), properties[root]);
        }
        return properties;
      }
      return properties.prev ? mergeDeep(properties.prev, properties) : properties;
    });
    vue.provide(DefaultsSymbol, newDefaults);
    return newDefaults;
  }
  function propIsDefined(vnode, prop) {
    var _a, _b;
    return typeof ((_a = vnode.props) == null ? void 0 : _a[prop]) !== "undefined" || typeof ((_b = vnode.props) == null ? void 0 : _b[toKebabCase(prop)]) !== "undefined";
  }
  function internalUseDefaults() {
    let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let name = arguments.length > 1 ? arguments[1] : void 0;
    let defaults = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : injectDefaults();
    const vm = getCurrentInstance("useDefaults");
    name = name ?? vm.type.name ?? vm.type.__name;
    if (!name) {
      throw new Error("[Vuetify] Could not determine component name");
    }
    const componentDefaults = vue.computed(() => {
      var _a;
      return (_a = defaults.value) == null ? void 0 : _a[props._as ?? name];
    });
    const _props = new Proxy(props, {
      get(target, prop) {
        var _a, _b, _c, _d;
        const propValue = Reflect.get(target, prop);
        if (prop === "class" || prop === "style") {
          return [(_a = componentDefaults.value) == null ? void 0 : _a[prop], propValue].filter((v) => v != null);
        } else if (typeof prop === "string" && !propIsDefined(vm.vnode, prop)) {
          return ((_b = componentDefaults.value) == null ? void 0 : _b[prop]) ?? ((_d = (_c = defaults.value) == null ? void 0 : _c.global) == null ? void 0 : _d[prop]) ?? propValue;
        }
        return propValue;
      }
    });
    const _subcomponentDefaults = vue.shallowRef();
    vue.watchEffect(() => {
      if (componentDefaults.value) {
        const subComponents = Object.entries(componentDefaults.value).filter((_ref) => {
          let [key] = _ref;
          return key.startsWith(key[0].toUpperCase());
        });
        _subcomponentDefaults.value = subComponents.length ? Object.fromEntries(subComponents) : void 0;
      } else {
        _subcomponentDefaults.value = void 0;
      }
    });
    function provideSubDefaults() {
      const injected = injectSelf(DefaultsSymbol, vm);
      vue.provide(DefaultsSymbol, vue.computed(() => {
        return _subcomponentDefaults.value ? mergeDeep((injected == null ? void 0 : injected.value) ?? {}, _subcomponentDefaults.value) : injected == null ? void 0 : injected.value;
      }));
    }
    return {
      props: _props,
      provideSubDefaults
    };
  }
  function defineComponent(options) {
    options._setup = options._setup ?? options.setup;
    if (!options.name) {
      consoleWarn("The component is missing an explicit name, unable to generate default prop value");
      return options;
    }
    if (options._setup) {
      options.props = propsFactory(options.props ?? {}, options.name)();
      const propKeys = Object.keys(options.props).filter((key) => key !== "class" && key !== "style");
      options.filterProps = function filterProps(props) {
        return pick(props, propKeys);
      };
      options.props._as = String;
      options.setup = function setup(props, ctx) {
        const defaults = injectDefaults();
        if (!defaults.value)
          return options._setup(props, ctx);
        const {
          props: _props,
          provideSubDefaults
        } = internalUseDefaults(props, props._as ?? options.name, defaults);
        const setupBindings = options._setup(_props, ctx);
        provideSubDefaults();
        return setupBindings;
      };
    }
    return options;
  }
  function genericComponent() {
    let exposeDefaults = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return (options) => (exposeDefaults ? defineComponent : vue.defineComponent)(options);
  }
  function defineFunctionalComponent(props, render) {
    render.props = props;
    return render;
  }
  function createSimpleFunctional(klass) {
    let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
    let name = arguments.length > 2 ? arguments[2] : void 0;
    return genericComponent()({
      name: name ?? vue.capitalize(vue.camelize(klass.replace(/__/g, "-"))),
      props: {
        tag: {
          type: String,
          default: tag
        },
        ...makeComponentProps()
      },
      setup(props, _ref) {
        let {
          slots
        } = _ref;
        return () => {
          var _a;
          return vue.h(props.tag, {
            class: [klass, props.class],
            style: props.style
          }, (_a = slots.default) == null ? void 0 : _a.call(slots));
        };
      }
    });
  }
  function attachedRoot(node) {
    if (typeof node.getRootNode !== "function") {
      while (node.parentNode)
        node = node.parentNode;
      if (node !== document)
        return null;
      return document;
    }
    const root = node.getRootNode();
    if (root !== document && root.getRootNode({
      composed: true
    }) !== document)
      return null;
    return root;
  }
  const standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
  const deceleratedEasing = "cubic-bezier(0.0, 0, 0.2, 1)";
  const acceleratedEasing = "cubic-bezier(0.4, 0, 1, 1)";
  function getPrefixedEventHandlers(attrs, suffix, getData) {
    return Object.keys(attrs).filter((key) => isOn(key) && key.endsWith(suffix)).reduce((acc, key) => {
      acc[key.slice(0, -suffix.length)] = (event) => attrs[key](event, getData(event));
      return acc;
    }, {});
  }
  function getCurrentInstance(name, message) {
    const vm = vue.getCurrentInstance();
    if (!vm) {
      throw new Error(`[Vuetify] ${name} ${"must be called from inside a setup function"}`);
    }
    return vm;
  }
  function getCurrentInstanceName() {
    let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
    const vm = getCurrentInstance(name).type;
    return toKebabCase((vm == null ? void 0 : vm.aliasName) || (vm == null ? void 0 : vm.name));
  }
  let _uid = 0;
  let _map = /* @__PURE__ */ new WeakMap();
  function getUid() {
    const vm = getCurrentInstance("getUid");
    if (_map.has(vm))
      return _map.get(vm);
    else {
      const uid = _uid++;
      _map.set(vm, uid);
      return uid;
    }
  }
  getUid.reset = () => {
    _uid = 0;
    _map = /* @__PURE__ */ new WeakMap();
  };
  function getScrollParent(el) {
    let includeHidden = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    while (el) {
      if (includeHidden ? isPotentiallyScrollable(el) : hasScrollbar(el))
        return el;
      el = el.parentElement;
    }
    return document.scrollingElement;
  }
  function getScrollParents(el, stopAt) {
    const elements = [];
    if (stopAt && el && !stopAt.contains(el))
      return elements;
    while (el) {
      if (hasScrollbar(el))
        elements.push(el);
      if (el === stopAt)
        break;
      el = el.parentElement;
    }
    return elements;
  }
  function hasScrollbar(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE)
      return false;
    const style = window.getComputedStyle(el);
    return style.overflowY === "scroll" || style.overflowY === "auto" && el.scrollHeight > el.clientHeight;
  }
  function isPotentiallyScrollable(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE)
      return false;
    const style = window.getComputedStyle(el);
    return ["scroll", "auto"].includes(style.overflowY);
  }
  function injectSelf(key) {
    let vm = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstance("injectSelf");
    const {
      provides
    } = vm;
    if (provides && key in provides) {
      return provides[key];
    }
    return void 0;
  }
  function isFixedPosition(el) {
    while (el) {
      if (window.getComputedStyle(el).position === "fixed") {
        return true;
      }
      el = el.offsetParent;
    }
    return false;
  }
  function useRender(render) {
    const vm = getCurrentInstance("useRender");
    vm.render = render;
  }
  function useProxiedModel(props, prop, defaultValue) {
    let transformIn = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v;
    let transformOut = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
    const vm = getCurrentInstance("useProxiedModel");
    const internal = vue.ref(props[prop] !== void 0 ? props[prop] : defaultValue);
    const kebabProp = toKebabCase(prop);
    const checkKebab = kebabProp !== prop;
    const isControlled = checkKebab ? vue.computed(() => {
      var _a, _b, _c, _d;
      void props[prop];
      return !!((((_a = vm.vnode.props) == null ? void 0 : _a.hasOwnProperty(prop)) || ((_b = vm.vnode.props) == null ? void 0 : _b.hasOwnProperty(kebabProp))) && (((_c = vm.vnode.props) == null ? void 0 : _c.hasOwnProperty(`onUpdate:${prop}`)) || ((_d = vm.vnode.props) == null ? void 0 : _d.hasOwnProperty(`onUpdate:${kebabProp}`))));
    }) : vue.computed(() => {
      var _a, _b;
      void props[prop];
      return !!(((_a = vm.vnode.props) == null ? void 0 : _a.hasOwnProperty(prop)) && ((_b = vm.vnode.props) == null ? void 0 : _b.hasOwnProperty(`onUpdate:${prop}`)));
    });
    useToggleScope(() => !isControlled.value, () => {
      vue.watch(() => props[prop], (val) => {
        internal.value = val;
      });
    });
    const model = vue.computed({
      get() {
        const externalValue = props[prop];
        return transformIn(isControlled.value ? externalValue : internal.value);
      },
      set(internalValue) {
        const newValue = transformOut(internalValue);
        const value = vue.toRaw(isControlled.value ? props[prop] : internal.value);
        if (value === newValue || transformIn(value) === internalValue) {
          return;
        }
        internal.value = newValue;
        vm == null ? void 0 : vm.emit(`update:${prop}`, newValue);
      }
    });
    Object.defineProperty(model, "externalValue", {
      get: () => isControlled.value ? props[prop] : internal.value
    });
    return model;
  }
  const en = {
    badge: "Badge",
    open: "Open",
    close: "Close",
    dismiss: "Dismiss",
    confirmEdit: {
      ok: "OK",
      cancel: "Cancel"
    },
    dataIterator: {
      noResultsText: "No matching records found",
      loadingText: "Loading items..."
    },
    dataTable: {
      itemsPerPageText: "Rows per page:",
      ariaLabel: {
        sortDescending: "Sorted descending.",
        sortAscending: "Sorted ascending.",
        sortNone: "Not sorted.",
        activateNone: "Activate to remove sorting.",
        activateDescending: "Activate to sort descending.",
        activateAscending: "Activate to sort ascending."
      },
      sortBy: "Sort by"
    },
    dataFooter: {
      itemsPerPageText: "Items per page:",
      itemsPerPageAll: "All",
      nextPage: "Next page",
      prevPage: "Previous page",
      firstPage: "First page",
      lastPage: "Last page",
      pageText: "{0}-{1} of {2}"
    },
    dateRangeInput: {
      divider: "to"
    },
    datePicker: {
      itemsSelected: "{0} selected",
      range: {
        title: "Select dates",
        header: "Enter dates"
      },
      title: "Select date",
      header: "Enter date",
      input: {
        placeholder: "Enter date"
      }
    },
    noDataText: "No data available",
    carousel: {
      prev: "Previous visual",
      next: "Next visual",
      ariaLabel: {
        delimiter: "Carousel slide {0} of {1}"
      }
    },
    calendar: {
      moreEvents: "{0} more",
      today: "Today"
    },
    input: {
      clear: "Clear {0}",
      prependAction: "{0} prepended action",
      appendAction: "{0} appended action",
      otp: "Please enter OTP character {0}"
    },
    fileInput: {
      counter: "{0} files",
      counterSize: "{0} files ({1} in total)"
    },
    timePicker: {
      am: "AM",
      pm: "PM",
      title: "Select Time"
    },
    pagination: {
      ariaLabel: {
        root: "Pagination Navigation",
        next: "Next page",
        previous: "Previous page",
        page: "Go to page {0}",
        currentPage: "Page {0}, Current page",
        first: "First page",
        last: "Last page"
      }
    },
    stepper: {
      next: "Next",
      prev: "Previous"
    },
    rating: {
      ariaLabel: {
        item: "Rating {0} of {1}"
      }
    },
    loading: "Loading...",
    infiniteScroll: {
      loadMore: "Load more",
      empty: "No more"
    }
  };
  const LANG_PREFIX = "$vuetify.";
  const replace = (str, params) => {
    return str.replace(/\{(\d+)\}/g, (match, index) => {
      return String(params[+index]);
    });
  };
  const createTranslateFunction = (current, fallback, messages) => {
    return function(key) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      if (!key.startsWith(LANG_PREFIX)) {
        return replace(key, params);
      }
      const shortKey = key.replace(LANG_PREFIX, "");
      const currentLocale = current.value && messages.value[current.value];
      const fallbackLocale = fallback.value && messages.value[fallback.value];
      let str = getObjectValueByPath(currentLocale, shortKey, null);
      if (!str) {
        consoleWarn(`Translation key "${key}" not found in "${current.value}", trying fallback locale`);
        str = getObjectValueByPath(fallbackLocale, shortKey, null);
      }
      if (!str) {
        consoleError(`Translation key "${key}" not found in fallback`);
        str = key;
      }
      if (typeof str !== "string") {
        consoleError(`Translation key "${key}" has a non-string value`);
        str = key;
      }
      return replace(str, params);
    };
  };
  function createNumberFunction(current, fallback) {
    return (value, options) => {
      const numberFormat = new Intl.NumberFormat([current.value, fallback.value], options);
      return numberFormat.format(value);
    };
  }
  function useProvided(props, prop, provided) {
    const internal = useProxiedModel(props, prop, props[prop] ?? provided.value);
    internal.value = props[prop] ?? provided.value;
    vue.watch(provided, (v) => {
      if (props[prop] == null) {
        internal.value = provided.value;
      }
    });
    return internal;
  }
  function createProvideFunction(state) {
    return (props) => {
      const current = useProvided(props, "locale", state.current);
      const fallback = useProvided(props, "fallback", state.fallback);
      const messages = useProvided(props, "messages", state.messages);
      return {
        name: "vuetify",
        current,
        fallback,
        messages,
        t: createTranslateFunction(current, fallback, messages),
        n: createNumberFunction(current, fallback),
        provide: createProvideFunction({
          current,
          fallback,
          messages
        })
      };
    };
  }
  function createVuetifyAdapter(options) {
    const current = vue.shallowRef((options == null ? void 0 : options.locale) ?? "en");
    const fallback = vue.shallowRef((options == null ? void 0 : options.fallback) ?? "en");
    const messages = vue.ref({
      en,
      ...options == null ? void 0 : options.messages
    });
    return {
      name: "vuetify",
      current,
      fallback,
      messages,
      t: createTranslateFunction(current, fallback, messages),
      n: createNumberFunction(current, fallback),
      provide: createProvideFunction({
        current,
        fallback,
        messages
      })
    };
  }
  const LocaleSymbol = Symbol.for("vuetify:locale");
  function isLocaleInstance(obj) {
    return obj.name != null;
  }
  function createLocale(options) {
    const i18n = (options == null ? void 0 : options.adapter) && isLocaleInstance(options == null ? void 0 : options.adapter) ? options == null ? void 0 : options.adapter : createVuetifyAdapter(options);
    const rtl = createRtl(i18n, options);
    return {
      ...i18n,
      ...rtl
    };
  }
  function useLocale() {
    const locale = vue.inject(LocaleSymbol);
    if (!locale)
      throw new Error("[Vuetify] Could not find injected locale instance");
    return locale;
  }
  function genDefaults$3() {
    return {
      af: false,
      ar: true,
      bg: false,
      ca: false,
      ckb: false,
      cs: false,
      de: false,
      el: false,
      en: false,
      es: false,
      et: false,
      fa: true,
      fi: false,
      fr: false,
      hr: false,
      hu: false,
      he: true,
      id: false,
      it: false,
      ja: false,
      km: false,
      ko: false,
      lv: false,
      lt: false,
      nl: false,
      no: false,
      pl: false,
      pt: false,
      ro: false,
      ru: false,
      sk: false,
      sl: false,
      srCyrl: false,
      srLatn: false,
      sv: false,
      th: false,
      tr: false,
      az: false,
      uk: false,
      vi: false,
      zhHans: false,
      zhHant: false
    };
  }
  function createRtl(i18n, options) {
    const rtl = vue.ref((options == null ? void 0 : options.rtl) ?? genDefaults$3());
    const isRtl = vue.computed(() => rtl.value[i18n.current.value] ?? false);
    return {
      isRtl,
      rtl,
      rtlClasses: vue.computed(() => `v-locale--is-${isRtl.value ? "rtl" : "ltr"}`)
    };
  }
  function useRtl() {
    const locale = vue.inject(LocaleSymbol);
    if (!locale)
      throw new Error("[Vuetify] Could not find injected rtl instance");
    return {
      isRtl: locale.isRtl,
      rtlClasses: locale.rtlClasses
    };
  }
  const firstDay = {
    "001": 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AG: 0,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AS: 0,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BD: 0,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BR: 0,
    BS: 0,
    BT: 0,
    BW: 0,
    BY: 1,
    BZ: 0,
    CA: 0,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CO: 0,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DM: 0,
    DO: 0,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    ET: 0,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    "GB-alt-variant": 0,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    GT: 0,
    GU: 0,
    HK: 0,
    HN: 0,
    HR: 1,
    HU: 1,
    ID: 0,
    IE: 1,
    IL: 0,
    IN: 0,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JM: 0,
    JO: 6,
    JP: 0,
    KE: 0,
    KG: 1,
    KH: 0,
    KR: 0,
    KW: 6,
    KZ: 1,
    LA: 0,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MH: 0,
    MK: 1,
    MM: 0,
    MN: 1,
    MO: 0,
    MQ: 1,
    MT: 0,
    MV: 5,
    MX: 0,
    MY: 1,
    MZ: 0,
    NI: 0,
    NL: 1,
    NO: 1,
    NP: 0,
    NZ: 1,
    OM: 6,
    PA: 0,
    PE: 0,
    PH: 0,
    PK: 0,
    PL: 1,
    PR: 0,
    PT: 0,
    PY: 0,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SA: 0,
    SD: 6,
    SE: 1,
    SG: 0,
    SI: 1,
    SK: 1,
    SM: 1,
    SV: 0,
    SY: 6,
    TH: 0,
    TJ: 1,
    TM: 1,
    TR: 1,
    TT: 0,
    TW: 0,
    UA: 1,
    UM: 0,
    US: 0,
    UY: 1,
    UZ: 1,
    VA: 1,
    VE: 0,
    VI: 0,
    VN: 1,
    WS: 0,
    XK: 1,
    YE: 0,
    ZA: 0,
    ZW: 0
  };
  function getWeekArray(date2, locale) {
    const weeks = [];
    let currentWeek = [];
    const firstDayOfMonth = startOfMonth(date2);
    const lastDayOfMonth = endOfMonth(date2);
    const firstDayWeekIndex = (firstDayOfMonth.getDay() - firstDay[locale.slice(-2).toUpperCase()] + 7) % 7;
    const lastDayWeekIndex = (lastDayOfMonth.getDay() - firstDay[locale.slice(-2).toUpperCase()] + 7) % 7;
    for (let i = 0; i < firstDayWeekIndex; i++) {
      const adjacentDay = new Date(firstDayOfMonth);
      adjacentDay.setDate(adjacentDay.getDate() - (firstDayWeekIndex - i));
      currentWeek.push(adjacentDay);
    }
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const day = new Date(date2.getFullYear(), date2.getMonth(), i);
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    for (let i = 1; i < 7 - lastDayWeekIndex; i++) {
      const adjacentDay = new Date(lastDayOfMonth);
      adjacentDay.setDate(adjacentDay.getDate() + i);
      currentWeek.push(adjacentDay);
    }
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }
    return weeks;
  }
  function startOfWeek(date2, locale) {
    const d = new Date(date2);
    while (d.getDay() !== (firstDay[locale.slice(-2).toUpperCase()] ?? 0)) {
      d.setDate(d.getDate() - 1);
    }
    return d;
  }
  function endOfWeek(date2, locale) {
    const d = new Date(date2);
    const lastDay = ((firstDay[locale.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
    while (d.getDay() !== lastDay) {
      d.setDate(d.getDate() + 1);
    }
    return d;
  }
  function startOfMonth(date2) {
    return new Date(date2.getFullYear(), date2.getMonth(), 1);
  }
  function endOfMonth(date2) {
    return new Date(date2.getFullYear(), date2.getMonth() + 1, 0);
  }
  function parseLocalDate(value) {
    const parts = value.split("-").map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  const _YYYMMDD = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
  function date(value) {
    if (value == null)
      return /* @__PURE__ */ new Date();
    if (value instanceof Date)
      return value;
    if (typeof value === "string") {
      let parsed;
      if (_YYYMMDD.test(value)) {
        return parseLocalDate(value);
      } else {
        parsed = Date.parse(value);
      }
      if (!isNaN(parsed))
        return new Date(parsed);
    }
    return null;
  }
  const sundayJanuarySecond2000 = new Date(2e3, 0, 2);
  function getWeekdays(locale) {
    const daysFromSunday = firstDay[locale.slice(-2).toUpperCase()];
    return createRange(7).map((i) => {
      const weekday = new Date(sundayJanuarySecond2000);
      weekday.setDate(sundayJanuarySecond2000.getDate() + daysFromSunday + i);
      return new Intl.DateTimeFormat(locale, {
        weekday: "narrow"
      }).format(weekday);
    });
  }
  function format(value, formatString, locale, formats) {
    const newDate = date(value) ?? /* @__PURE__ */ new Date();
    const customFormat = formats == null ? void 0 : formats[formatString];
    if (typeof customFormat === "function") {
      return customFormat(newDate, formatString, locale);
    }
    let options = {};
    switch (formatString) {
      case "fullDate":
        options = {
          year: "numeric",
          month: "long",
          day: "numeric"
        };
        break;
      case "fullDateWithWeekday":
        options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        };
        break;
      case "normalDate":
        const day = newDate.getDate();
        const month = new Intl.DateTimeFormat(locale, {
          month: "long"
        }).format(newDate);
        return `${day} ${month}`;
      case "normalDateWithWeekday":
        options = {
          weekday: "short",
          day: "numeric",
          month: "short"
        };
        break;
      case "shortDate":
        options = {
          month: "short",
          day: "numeric"
        };
        break;
      case "year":
        options = {
          year: "numeric"
        };
        break;
      case "month":
        options = {
          month: "long"
        };
        break;
      case "monthShort":
        options = {
          month: "short"
        };
        break;
      case "monthAndYear":
        options = {
          month: "long",
          year: "numeric"
        };
        break;
      case "monthAndDate":
        options = {
          month: "long",
          day: "numeric"
        };
        break;
      case "weekday":
        options = {
          weekday: "long"
        };
        break;
      case "weekdayShort":
        options = {
          weekday: "short"
        };
        break;
      case "dayOfMonth":
        return new Intl.NumberFormat(locale).format(newDate.getDate());
      case "hours12h":
        options = {
          hour: "numeric",
          hour12: true
        };
        break;
      case "hours24h":
        options = {
          hour: "numeric",
          hour12: false
        };
        break;
      case "minutes":
        options = {
          minute: "numeric"
        };
        break;
      case "seconds":
        options = {
          second: "numeric"
        };
        break;
      case "fullTime":
        options = {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true
        };
        break;
      case "fullTime12h":
        options = {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true
        };
        break;
      case "fullTime24h":
        options = {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false
        };
        break;
      case "fullDateTime":
        options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true
        };
        break;
      case "fullDateTime12h":
        options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true
        };
        break;
      case "fullDateTime24h":
        options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false
        };
        break;
      case "keyboardDate":
        options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        };
        break;
      case "keyboardDateTime":
        options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false
        };
        break;
      case "keyboardDateTime12h":
        options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true
        };
        break;
      case "keyboardDateTime24h":
        options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false
        };
        break;
      default:
        options = customFormat ?? {
          timeZone: "UTC",
          timeZoneName: "short"
        };
    }
    return new Intl.DateTimeFormat(locale, options).format(newDate);
  }
  function toISO(adapter, value) {
    const date2 = adapter.toJsDate(value);
    const year = date2.getFullYear();
    const month = padStart(String(date2.getMonth() + 1), 2, "0");
    const day = padStart(String(date2.getDate()), 2, "0");
    return `${year}-${month}-${day}`;
  }
  function parseISO(value) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }
  function addMinutes(date2, amount) {
    const d = new Date(date2);
    d.setMinutes(d.getMinutes() + amount);
    return d;
  }
  function addHours(date2, amount) {
    const d = new Date(date2);
    d.setHours(d.getHours() + amount);
    return d;
  }
  function addDays(date2, amount) {
    const d = new Date(date2);
    d.setDate(d.getDate() + amount);
    return d;
  }
  function addWeeks(date2, amount) {
    const d = new Date(date2);
    d.setDate(d.getDate() + amount * 7);
    return d;
  }
  function addMonths(date2, amount) {
    const d = new Date(date2);
    d.setDate(1);
    d.setMonth(d.getMonth() + amount);
    return d;
  }
  function getYear(date2) {
    return date2.getFullYear();
  }
  function getMonth(date2) {
    return date2.getMonth();
  }
  function getDate(date2) {
    return date2.getDate();
  }
  function getNextMonth(date2) {
    return new Date(date2.getFullYear(), date2.getMonth() + 1, 1);
  }
  function getPreviousMonth(date2) {
    return new Date(date2.getFullYear(), date2.getMonth() - 1, 1);
  }
  function getHours(date2) {
    return date2.getHours();
  }
  function getMinutes(date2) {
    return date2.getMinutes();
  }
  function startOfYear(date2) {
    return new Date(date2.getFullYear(), 0, 1);
  }
  function endOfYear(date2) {
    return new Date(date2.getFullYear(), 11, 31);
  }
  function isWithinRange(date2, range) {
    return isAfter(date2, range[0]) && isBefore(date2, range[1]);
  }
  function isValid(date2) {
    const d = new Date(date2);
    return d instanceof Date && !isNaN(d.getTime());
  }
  function isAfter(date2, comparing) {
    return date2.getTime() > comparing.getTime();
  }
  function isAfterDay(date2, comparing) {
    return isAfter(startOfDay(date2), startOfDay(comparing));
  }
  function isBefore(date2, comparing) {
    return date2.getTime() < comparing.getTime();
  }
  function isEqual(date2, comparing) {
    return date2.getTime() === comparing.getTime();
  }
  function isSameDay(date2, comparing) {
    return date2.getDate() === comparing.getDate() && date2.getMonth() === comparing.getMonth() && date2.getFullYear() === comparing.getFullYear();
  }
  function isSameMonth(date2, comparing) {
    return date2.getMonth() === comparing.getMonth() && date2.getFullYear() === comparing.getFullYear();
  }
  function isSameYear(date2, comparing) {
    return date2.getFullYear() === comparing.getFullYear();
  }
  function getDiff(date2, comparing, unit) {
    const d = new Date(date2);
    const c = new Date(comparing);
    switch (unit) {
      case "years":
        return d.getFullYear() - c.getFullYear();
      case "quarters":
        return Math.floor((d.getMonth() - c.getMonth() + (d.getFullYear() - c.getFullYear()) * 12) / 4);
      case "months":
        return d.getMonth() - c.getMonth() + (d.getFullYear() - c.getFullYear()) * 12;
      case "weeks":
        return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60 * 24 * 7));
      case "days":
        return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60 * 24));
      case "hours":
        return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60));
      case "minutes":
        return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60));
      case "seconds":
        return Math.floor((d.getTime() - c.getTime()) / 1e3);
      default: {
        return d.getTime() - c.getTime();
      }
    }
  }
  function setHours(date2, count) {
    const d = new Date(date2);
    d.setHours(count);
    return d;
  }
  function setMinutes(date2, count) {
    const d = new Date(date2);
    d.setMinutes(count);
    return d;
  }
  function setMonth(date2, count) {
    const d = new Date(date2);
    d.setMonth(count);
    return d;
  }
  function setDate(date2, day) {
    const d = new Date(date2);
    d.setDate(day);
    return d;
  }
  function setYear(date2, year) {
    const d = new Date(date2);
    d.setFullYear(year);
    return d;
  }
  function startOfDay(date2) {
    return new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 0, 0, 0, 0);
  }
  function endOfDay(date2) {
    return new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 23, 59, 59, 999);
  }
  class VuetifyDateAdapter {
    constructor(options) {
      this.locale = options.locale;
      this.formats = options.formats;
    }
    date(value) {
      return date(value);
    }
    toJsDate(date2) {
      return date2;
    }
    toISO(date2) {
      return toISO(this, date2);
    }
    parseISO(date2) {
      return parseISO(date2);
    }
    addMinutes(date2, amount) {
      return addMinutes(date2, amount);
    }
    addHours(date2, amount) {
      return addHours(date2, amount);
    }
    addDays(date2, amount) {
      return addDays(date2, amount);
    }
    addWeeks(date2, amount) {
      return addWeeks(date2, amount);
    }
    addMonths(date2, amount) {
      return addMonths(date2, amount);
    }
    getWeekArray(date2) {
      return getWeekArray(date2, this.locale);
    }
    startOfWeek(date2) {
      return startOfWeek(date2, this.locale);
    }
    endOfWeek(date2) {
      return endOfWeek(date2, this.locale);
    }
    startOfMonth(date2) {
      return startOfMonth(date2);
    }
    endOfMonth(date2) {
      return endOfMonth(date2);
    }
    format(date2, formatString) {
      return format(date2, formatString, this.locale, this.formats);
    }
    isEqual(date2, comparing) {
      return isEqual(date2, comparing);
    }
    isValid(date2) {
      return isValid(date2);
    }
    isWithinRange(date2, range) {
      return isWithinRange(date2, range);
    }
    isAfter(date2, comparing) {
      return isAfter(date2, comparing);
    }
    isAfterDay(date2, comparing) {
      return isAfterDay(date2, comparing);
    }
    isBefore(date2, comparing) {
      return !isAfter(date2, comparing) && !isEqual(date2, comparing);
    }
    isSameDay(date2, comparing) {
      return isSameDay(date2, comparing);
    }
    isSameMonth(date2, comparing) {
      return isSameMonth(date2, comparing);
    }
    isSameYear(date2, comparing) {
      return isSameYear(date2, comparing);
    }
    setMinutes(date2, count) {
      return setMinutes(date2, count);
    }
    setHours(date2, count) {
      return setHours(date2, count);
    }
    setMonth(date2, count) {
      return setMonth(date2, count);
    }
    setDate(date2, day) {
      return setDate(date2, day);
    }
    setYear(date2, year) {
      return setYear(date2, year);
    }
    getDiff(date2, comparing, unit) {
      return getDiff(date2, comparing, unit);
    }
    getWeekdays() {
      return getWeekdays(this.locale);
    }
    getYear(date2) {
      return getYear(date2);
    }
    getMonth(date2) {
      return getMonth(date2);
    }
    getDate(date2) {
      return getDate(date2);
    }
    getNextMonth(date2) {
      return getNextMonth(date2);
    }
    getPreviousMonth(date2) {
      return getPreviousMonth(date2);
    }
    getHours(date2) {
      return getHours(date2);
    }
    getMinutes(date2) {
      return getMinutes(date2);
    }
    startOfDay(date2) {
      return startOfDay(date2);
    }
    endOfDay(date2) {
      return endOfDay(date2);
    }
    startOfYear(date2) {
      return startOfYear(date2);
    }
    endOfYear(date2) {
      return endOfYear(date2);
    }
  }
  const DateOptionsSymbol = Symbol.for("vuetify:date-options");
  const DateAdapterSymbol = Symbol.for("vuetify:date-adapter");
  function createDate(options, locale) {
    const _options = mergeDeep({
      adapter: VuetifyDateAdapter,
      locale: {
        af: "af-ZA",
        // ar: '', # not the same value for all variants
        bg: "bg-BG",
        ca: "ca-ES",
        ckb: "",
        cs: "cs-CZ",
        de: "de-DE",
        el: "el-GR",
        en: "en-US",
        // es: '', # not the same value for all variants
        et: "et-EE",
        fa: "fa-IR",
        fi: "fi-FI",
        // fr: '', #not the same value for all variants
        hr: "hr-HR",
        hu: "hu-HU",
        he: "he-IL",
        id: "id-ID",
        it: "it-IT",
        ja: "ja-JP",
        ko: "ko-KR",
        lv: "lv-LV",
        lt: "lt-LT",
        nl: "nl-NL",
        no: "no-NO",
        pl: "pl-PL",
        pt: "pt-PT",
        ro: "ro-RO",
        ru: "ru-RU",
        sk: "sk-SK",
        sl: "sl-SI",
        srCyrl: "sr-SP",
        srLatn: "sr-SP",
        sv: "sv-SE",
        th: "th-TH",
        tr: "tr-TR",
        az: "az-AZ",
        uk: "uk-UA",
        vi: "vi-VN",
        zhHans: "zh-CN",
        zhHant: "zh-TW"
      }
    }, options);
    return {
      options: _options,
      instance: createInstance(_options, locale)
    };
  }
  function createInstance(options, locale) {
    const instance = vue.reactive(typeof options.adapter === "function" ? new options.adapter({
      locale: options.locale[locale.current.value] ?? locale.current.value,
      formats: options.formats
    }) : options.adapter);
    vue.watch(locale.current, (value) => {
      instance.locale = options.locale[value] ?? value ?? instance.locale;
    });
    return instance;
  }
  const DisplaySymbol = Symbol.for("vuetify:display");
  const defaultDisplayOptions = {
    mobileBreakpoint: "lg",
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560
    }
  };
  const parseDisplayOptions = function() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultDisplayOptions;
    return mergeDeep(defaultDisplayOptions, options);
  };
  function getClientWidth(ssr) {
    return IN_BROWSER && !ssr ? window.innerWidth : typeof ssr === "object" && ssr.clientWidth || 0;
  }
  function getClientHeight(ssr) {
    return IN_BROWSER && !ssr ? window.innerHeight : typeof ssr === "object" && ssr.clientHeight || 0;
  }
  function getPlatform(ssr) {
    const userAgent = IN_BROWSER && !ssr ? window.navigator.userAgent : "ssr";
    function match(regexp) {
      return Boolean(userAgent.match(regexp));
    }
    const android = match(/android/i);
    const ios = match(/iphone|ipad|ipod/i);
    const cordova = match(/cordova/i);
    const electron = match(/electron/i);
    const chrome = match(/chrome/i);
    const edge = match(/edge/i);
    const firefox = match(/firefox/i);
    const opera = match(/opera/i);
    const win = match(/win/i);
    const mac = match(/mac/i);
    const linux = match(/linux/i);
    return {
      android,
      ios,
      cordova,
      electron,
      chrome,
      edge,
      firefox,
      opera,
      win,
      mac,
      linux,
      touch: SUPPORTS_TOUCH,
      ssr: userAgent === "ssr"
    };
  }
  function createDisplay(options, ssr) {
    const {
      thresholds,
      mobileBreakpoint
    } = parseDisplayOptions(options);
    const height = vue.shallowRef(getClientHeight(ssr));
    const platform = vue.shallowRef(getPlatform(ssr));
    const state = vue.reactive({});
    const width = vue.shallowRef(getClientWidth(ssr));
    function updateSize() {
      height.value = getClientHeight();
      width.value = getClientWidth();
    }
    function update() {
      updateSize();
      platform.value = getPlatform();
    }
    vue.watchEffect(() => {
      const xs = width.value < thresholds.sm;
      const sm = width.value < thresholds.md && !xs;
      const md2 = width.value < thresholds.lg && !(sm || xs);
      const lg = width.value < thresholds.xl && !(md2 || sm || xs);
      const xl = width.value < thresholds.xxl && !(lg || md2 || sm || xs);
      const xxl = width.value >= thresholds.xxl;
      const name = xs ? "xs" : sm ? "sm" : md2 ? "md" : lg ? "lg" : xl ? "xl" : "xxl";
      const breakpointValue = typeof mobileBreakpoint === "number" ? mobileBreakpoint : thresholds[mobileBreakpoint];
      const mobile = width.value < breakpointValue;
      state.xs = xs;
      state.sm = sm;
      state.md = md2;
      state.lg = lg;
      state.xl = xl;
      state.xxl = xxl;
      state.smAndUp = !xs;
      state.mdAndUp = !(xs || sm);
      state.lgAndUp = !(xs || sm || md2);
      state.xlAndUp = !(xs || sm || md2 || lg);
      state.smAndDown = !(md2 || lg || xl || xxl);
      state.mdAndDown = !(lg || xl || xxl);
      state.lgAndDown = !(xl || xxl);
      state.xlAndDown = !xxl;
      state.name = name;
      state.height = height.value;
      state.width = width.value;
      state.mobile = mobile;
      state.mobileBreakpoint = mobileBreakpoint;
      state.platform = platform.value;
      state.thresholds = thresholds;
    });
    if (IN_BROWSER) {
      window.addEventListener("resize", updateSize, {
        passive: true
      });
    }
    return {
      ...vue.toRefs(state),
      update,
      ssr: !!ssr
    };
  }
  const makeDisplayProps = propsFactory({
    mobile: {
      type: Boolean,
      default: false
    },
    mobileBreakpoint: [Number, String]
  }, "display");
  function useDisplay() {
    let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    const display = vue.inject(DisplaySymbol);
    if (!display)
      throw new Error("Could not find Vuetify display injection");
    const mobile = vue.computed(() => {
      if (props.mobile != null)
        return props.mobile;
      if (!props.mobileBreakpoint)
        return display.mobile.value;
      const breakpointValue = typeof props.mobileBreakpoint === "number" ? props.mobileBreakpoint : display.thresholds.value[props.mobileBreakpoint];
      return display.width.value < breakpointValue;
    });
    const displayClasses = vue.computed(() => {
      if (!name)
        return {};
      return {
        [`${name}--mobile`]: mobile.value
      };
    });
    return {
      ...display,
      displayClasses,
      mobile
    };
  }
  const GoToSymbol = Symbol.for("vuetify:goto");
  function genDefaults$2() {
    return {
      container: void 0,
      duration: 300,
      layout: false,
      offset: 0,
      easing: "easeInOutCubic",
      patterns: {
        linear: (t) => t,
        easeInQuad: (t) => t ** 2,
        easeOutQuad: (t) => t * (2 - t),
        easeInOutQuad: (t) => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t,
        easeInCubic: (t) => t ** 3,
        easeOutCubic: (t) => --t ** 3 + 1,
        easeInOutCubic: (t) => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        easeInQuart: (t) => t ** 4,
        easeOutQuart: (t) => 1 - --t ** 4,
        easeInOutQuart: (t) => t < 0.5 ? 8 * t ** 4 : 1 - 8 * --t ** 4,
        easeInQuint: (t) => t ** 5,
        easeOutQuint: (t) => 1 + --t ** 5,
        easeInOutQuint: (t) => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5
      }
    };
  }
  function getContainer(el) {
    return getTarget$1(el) ?? (document.scrollingElement || document.body);
  }
  function getTarget$1(el) {
    return typeof el === "string" ? document.querySelector(el) : refElement(el);
  }
  function getOffset$1(target, horizontal, rtl) {
    if (typeof target === "number")
      return horizontal && rtl ? -target : target;
    let el = getTarget$1(target);
    let totalOffset = 0;
    while (el) {
      totalOffset += horizontal ? el.offsetLeft : el.offsetTop;
      el = el.offsetParent;
    }
    return totalOffset;
  }
  function createGoTo(options, locale) {
    return {
      rtl: locale.isRtl,
      options: mergeDeep(genDefaults$2(), options)
    };
  }
  async function scrollTo(_target, _options, horizontal, goTo) {
    const property = horizontal ? "scrollLeft" : "scrollTop";
    const options = mergeDeep((goTo == null ? void 0 : goTo.options) ?? genDefaults$2(), _options);
    const rtl = goTo == null ? void 0 : goTo.rtl.value;
    const target = (typeof _target === "number" ? _target : getTarget$1(_target)) ?? 0;
    const container = options.container === "parent" && target instanceof HTMLElement ? target.parentElement : getContainer(options.container);
    const ease = typeof options.easing === "function" ? options.easing : options.patterns[options.easing];
    if (!ease)
      throw new TypeError(`Easing function "${options.easing}" not found.`);
    let targetLocation;
    if (typeof target === "number") {
      targetLocation = getOffset$1(target, horizontal, rtl);
    } else {
      targetLocation = getOffset$1(target, horizontal, rtl) - getOffset$1(container, horizontal, rtl);
      if (options.layout) {
        const styles = window.getComputedStyle(target);
        const layoutOffset = styles.getPropertyValue("--v-layout-top");
        if (layoutOffset)
          targetLocation -= parseInt(layoutOffset, 10);
      }
    }
    targetLocation += options.offset;
    targetLocation = clampTarget(container, targetLocation, !!rtl, !!horizontal);
    const startLocation = container[property] ?? 0;
    if (targetLocation === startLocation)
      return Promise.resolve(targetLocation);
    const startTime = performance.now();
    return new Promise((resolve) => requestAnimationFrame(function step(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = timeElapsed / options.duration;
      const location = Math.floor(startLocation + (targetLocation - startLocation) * ease(clamp(progress, 0, 1)));
      container[property] = location;
      if (progress >= 1 && Math.abs(location - container[property]) < 10) {
        return resolve(targetLocation);
      } else if (progress > 2) {
        consoleWarn("Scroll target is not reachable");
        return resolve(container[property]);
      }
      requestAnimationFrame(step);
    }));
  }
  function useGoTo() {
    let _options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const goToInstance = vue.inject(GoToSymbol);
    const {
      isRtl
    } = useRtl();
    if (!goToInstance)
      throw new Error("[Vuetify] Could not find injected goto instance");
    const goTo = {
      ...goToInstance,
      // can be set via VLocaleProvider
      rtl: vue.computed(() => goToInstance.rtl.value || isRtl.value)
    };
    async function go(target, options) {
      return scrollTo(target, mergeDeep(_options, options), false, goTo);
    }
    go.horizontal = async (target, options) => {
      return scrollTo(target, mergeDeep(_options, options), true, goTo);
    };
    return go;
  }
  function clampTarget(container, value, rtl, horizontal) {
    const {
      scrollWidth,
      scrollHeight
    } = container;
    const [containerWidth, containerHeight] = container === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [container.offsetWidth, container.offsetHeight];
    let min;
    let max;
    if (horizontal) {
      if (rtl) {
        min = -(scrollWidth - containerWidth);
        max = 0;
      } else {
        min = 0;
        max = scrollWidth - containerWidth;
      }
    } else {
      min = 0;
      max = scrollHeight + -containerHeight;
    }
    return Math.max(Math.min(value, max), min);
  }
  const aliases$1 = {
    collapse: "mdi-chevron-up",
    complete: "mdi-check",
    cancel: "mdi-close-circle",
    close: "mdi-close",
    delete: "mdi-close-circle",
    // delete (e.g. v-chip close)
    clear: "mdi-close-circle",
    success: "mdi-check-circle",
    info: "mdi-information",
    warning: "mdi-alert-circle",
    error: "mdi-close-circle",
    prev: "mdi-chevron-left",
    next: "mdi-chevron-right",
    checkboxOn: "mdi-checkbox-marked",
    checkboxOff: "mdi-checkbox-blank-outline",
    checkboxIndeterminate: "mdi-minus-box",
    delimiter: "mdi-circle",
    // for carousel
    sortAsc: "mdi-arrow-up",
    sortDesc: "mdi-arrow-down",
    expand: "mdi-chevron-down",
    menu: "mdi-menu",
    subgroup: "mdi-menu-down",
    dropdown: "mdi-menu-down",
    radioOn: "mdi-radiobox-marked",
    radioOff: "mdi-radiobox-blank",
    edit: "mdi-pencil",
    ratingEmpty: "mdi-star-outline",
    ratingFull: "mdi-star",
    ratingHalf: "mdi-star-half-full",
    loading: "mdi-cached",
    first: "mdi-page-first",
    last: "mdi-page-last",
    unfold: "mdi-unfold-more-horizontal",
    file: "mdi-paperclip",
    plus: "mdi-plus",
    minus: "mdi-minus",
    calendar: "mdi-calendar",
    treeviewCollapse: "mdi-menu-down",
    treeviewExpand: "mdi-menu-right",
    eyeDropper: "mdi-eyedropper"
  };
  const mdi = {
    // Not using mergeProps here, functional components merge props by default (?)
    component: (props) => vue.h(VClassIcon, {
      ...props,
      class: "mdi"
    })
  };
  const IconValue = [String, Function, Object, Array];
  const IconSymbol = Symbol.for("vuetify:icons");
  const makeIconProps = propsFactory({
    icon: {
      type: IconValue
    },
    // Could not remove this and use makeTagProps, types complained because it is not required
    tag: {
      type: String,
      required: true
    }
  }, "icon");
  const VComponentIcon = genericComponent()({
    name: "VComponentIcon",
    props: makeIconProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        const Icon = props.icon;
        return vue.createVNode(props.tag, null, {
          default: () => {
            var _a;
            return [props.icon ? vue.createVNode(Icon, null, null) : (_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        });
      };
    }
  });
  const VSvgIcon = defineComponent({
    name: "VSvgIcon",
    inheritAttrs: false,
    props: makeIconProps(),
    setup(props, _ref2) {
      let {
        attrs
      } = _ref2;
      return () => {
        return vue.createVNode(props.tag, vue.mergeProps(attrs, {
          "style": null
        }), {
          default: () => [vue.createVNode("svg", {
            "class": "v-icon__svg",
            "xmlns": "http://www.w3.org/2000/svg",
            "viewBox": "0 0 24 24",
            "role": "img",
            "aria-hidden": "true"
          }, [Array.isArray(props.icon) ? props.icon.map((path) => Array.isArray(path) ? vue.createVNode("path", {
            "d": path[0],
            "fill-opacity": path[1]
          }, null) : vue.createVNode("path", {
            "d": path
          }, null)) : vue.createVNode("path", {
            "d": props.icon
          }, null)])]
        });
      };
    }
  });
  const VLigatureIcon = defineComponent({
    name: "VLigatureIcon",
    props: makeIconProps(),
    setup(props) {
      return () => {
        return vue.createVNode(props.tag, null, {
          default: () => [props.icon]
        });
      };
    }
  });
  const VClassIcon = defineComponent({
    name: "VClassIcon",
    props: makeIconProps(),
    setup(props) {
      return () => {
        return vue.createVNode(props.tag, {
          "class": props.icon
        }, null);
      };
    }
  });
  function genDefaults$1() {
    return {
      svg: {
        component: VSvgIcon
      },
      class: {
        component: VClassIcon
      }
    };
  }
  function createIcons(options) {
    const sets = genDefaults$1();
    const defaultSet = (options == null ? void 0 : options.defaultSet) ?? "mdi";
    if (defaultSet === "mdi" && !sets.mdi) {
      sets.mdi = mdi;
    }
    return mergeDeep({
      defaultSet,
      sets,
      aliases: {
        ...aliases$1,
        /* eslint-disable max-len */
        vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
        "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
        "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
        /* eslint-enable max-len */
      }
    }, options);
  }
  const useIcon = (props) => {
    const icons = vue.inject(IconSymbol);
    if (!icons)
      throw new Error("Missing Vuetify Icons provide!");
    const iconData = vue.computed(() => {
      var _a;
      const iconAlias = vue.unref(props);
      if (!iconAlias)
        return {
          component: VComponentIcon
        };
      let icon = iconAlias;
      if (typeof icon === "string") {
        icon = icon.trim();
        if (icon.startsWith("$")) {
          icon = (_a = icons.aliases) == null ? void 0 : _a[icon.slice(1)];
        }
      }
      if (!icon)
        consoleWarn(`Could not find aliased icon "${iconAlias}"`);
      if (Array.isArray(icon)) {
        return {
          component: VSvgIcon,
          icon
        };
      } else if (typeof icon !== "string") {
        return {
          component: VComponentIcon,
          icon
        };
      }
      const iconSetName = Object.keys(icons.sets).find((setName) => typeof icon === "string" && icon.startsWith(`${setName}:`));
      const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon;
      const iconSet = icons.sets[iconSetName ?? icons.defaultSet];
      return {
        component: iconSet.component,
        icon: iconName
      };
    });
    return {
      iconData
    };
  };
  const ThemeSymbol = Symbol.for("vuetify:theme");
  const makeThemeProps = propsFactory({
    theme: String
  }, "theme");
  function genDefaults() {
    return {
      defaultTheme: "light",
      variations: {
        colors: [],
        lighten: 0,
        darken: 0
      },
      themes: {
        light: {
          dark: false,
          colors: {
            background: "#FFFFFF",
            surface: "#FFFFFF",
            "surface-bright": "#FFFFFF",
            "surface-light": "#EEEEEE",
            "surface-variant": "#424242",
            "on-surface-variant": "#EEEEEE",
            primary: "#1867C0",
            "primary-darken-1": "#1F5592",
            secondary: "#48A9A6",
            "secondary-darken-1": "#018786",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00"
          },
          variables: {
            "border-color": "#000000",
            "border-opacity": 0.12,
            "high-emphasis-opacity": 0.87,
            "medium-emphasis-opacity": 0.6,
            "disabled-opacity": 0.38,
            "idle-opacity": 0.04,
            "hover-opacity": 0.04,
            "focus-opacity": 0.12,
            "selected-opacity": 0.08,
            "activated-opacity": 0.12,
            "pressed-opacity": 0.12,
            "dragged-opacity": 0.08,
            "theme-kbd": "#212529",
            "theme-on-kbd": "#FFFFFF",
            "theme-code": "#F5F5F5",
            "theme-on-code": "#000000"
          }
        },
        dark: {
          dark: true,
          colors: {
            background: "#121212",
            surface: "#212121",
            "surface-bright": "#ccbfd6",
            "surface-light": "#424242",
            "surface-variant": "#a3a3a3",
            "on-surface-variant": "#424242",
            primary: "#2196F3",
            "primary-darken-1": "#277CC1",
            secondary: "#54B6B2",
            "secondary-darken-1": "#48A9A6",
            error: "#CF6679",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00"
          },
          variables: {
            "border-color": "#FFFFFF",
            "border-opacity": 0.12,
            "high-emphasis-opacity": 1,
            "medium-emphasis-opacity": 0.7,
            "disabled-opacity": 0.5,
            "idle-opacity": 0.1,
            "hover-opacity": 0.04,
            "focus-opacity": 0.12,
            "selected-opacity": 0.08,
            "activated-opacity": 0.12,
            "pressed-opacity": 0.16,
            "dragged-opacity": 0.08,
            "theme-kbd": "#212529",
            "theme-on-kbd": "#FFFFFF",
            "theme-code": "#343434",
            "theme-on-code": "#CCCCCC"
          }
        }
      }
    };
  }
  function parseThemeOptions() {
    var _a, _b;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : genDefaults();
    const defaults = genDefaults();
    if (!options)
      return {
        ...defaults,
        isDisabled: true
      };
    const themes = {};
    for (const [key, theme] of Object.entries(options.themes ?? {})) {
      const defaultTheme = theme.dark || key === "dark" ? (_a = defaults.themes) == null ? void 0 : _a.dark : (_b = defaults.themes) == null ? void 0 : _b.light;
      themes[key] = mergeDeep(defaultTheme, theme);
    }
    return mergeDeep(defaults, {
      ...options,
      themes
    });
  }
  function createTheme(options) {
    const parsedOptions = parseThemeOptions(options);
    const name = vue.ref(parsedOptions.defaultTheme);
    const themes = vue.ref(parsedOptions.themes);
    const computedThemes = vue.computed(() => {
      const acc = {};
      for (const [name2, original] of Object.entries(themes.value)) {
        const theme = acc[name2] = {
          ...original,
          colors: {
            ...original.colors
          }
        };
        if (parsedOptions.variations) {
          for (const name3 of parsedOptions.variations.colors) {
            const color = theme.colors[name3];
            if (!color)
              continue;
            for (const variation of ["lighten", "darken"]) {
              const fn = variation === "lighten" ? lighten : darken;
              for (const amount of createRange(parsedOptions.variations[variation], 1)) {
                theme.colors[`${name3}-${variation}-${amount}`] = RGBtoHex(fn(parseColor(color), amount));
              }
            }
          }
        }
        for (const color of Object.keys(theme.colors)) {
          if (/^on-[a-z]/.test(color) || theme.colors[`on-${color}`])
            continue;
          const onColor = `on-${color}`;
          const colorVal = parseColor(theme.colors[color]);
          theme.colors[onColor] = getForeground(colorVal);
        }
      }
      return acc;
    });
    const current = vue.computed(() => computedThemes.value[name.value]);
    const styles = vue.computed(() => {
      var _a;
      const lines = [];
      if ((_a = current.value) == null ? void 0 : _a.dark) {
        createCssClass(lines, ":root", ["color-scheme: dark"]);
      }
      createCssClass(lines, ":root", genCssVariables(current.value));
      for (const [themeName, theme] of Object.entries(computedThemes.value)) {
        createCssClass(lines, `.v-theme--${themeName}`, [`color-scheme: ${theme.dark ? "dark" : "normal"}`, ...genCssVariables(theme)]);
      }
      const bgLines = [];
      const fgLines = [];
      const colors = new Set(Object.values(computedThemes.value).flatMap((theme) => Object.keys(theme.colors)));
      for (const key of colors) {
        if (/^on-[a-z]/.test(key)) {
          createCssClass(fgLines, `.${key}`, [`color: rgb(var(--v-theme-${key})) !important`]);
        } else {
          createCssClass(bgLines, `.bg-${key}`, [`--v-theme-overlay-multiplier: var(--v-theme-${key}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${key})) !important`, `color: rgb(var(--v-theme-on-${key})) !important`]);
          createCssClass(fgLines, `.text-${key}`, [`color: rgb(var(--v-theme-${key})) !important`]);
          createCssClass(fgLines, `.border-${key}`, [`--v-border-color: var(--v-theme-${key})`]);
        }
      }
      lines.push(...bgLines, ...fgLines);
      return lines.map((str, i) => i === 0 ? str : `    ${str}`).join("");
    });
    function getHead() {
      return {
        style: [{
          children: styles.value,
          id: "vuetify-theme-stylesheet",
          nonce: parsedOptions.cspNonce || false
        }]
      };
    }
    function install(app) {
      if (parsedOptions.isDisabled)
        return;
      const head = app._context.provides.usehead;
      if (head) {
        if (head.push) {
          const entry = head.push(getHead);
          if (IN_BROWSER) {
            vue.watch(styles, () => {
              entry.patch(getHead);
            });
          }
        } else {
          if (IN_BROWSER) {
            head.addHeadObjs(vue.computed(getHead));
            vue.watchEffect(() => head.updateDOM());
          } else {
            head.addHeadObjs(getHead());
          }
        }
      } else {
        let updateStyles = function() {
          if (typeof document !== "undefined" && !styleEl) {
            const el = document.createElement("style");
            el.type = "text/css";
            el.id = "vuetify-theme-stylesheet";
            if (parsedOptions.cspNonce)
              el.setAttribute("nonce", parsedOptions.cspNonce);
            styleEl = el;
            document.head.appendChild(styleEl);
          }
          if (styleEl)
            styleEl.innerHTML = styles.value;
        };
        let styleEl = IN_BROWSER ? document.getElementById("vuetify-theme-stylesheet") : null;
        if (IN_BROWSER) {
          vue.watch(styles, updateStyles, {
            immediate: true
          });
        } else {
          updateStyles();
        }
      }
    }
    const themeClasses = vue.computed(() => parsedOptions.isDisabled ? void 0 : `v-theme--${name.value}`);
    return {
      install,
      isDisabled: parsedOptions.isDisabled,
      name,
      themes,
      current,
      computedThemes,
      themeClasses,
      styles,
      global: {
        name,
        current
      }
    };
  }
  function provideTheme(props) {
    getCurrentInstance("provideTheme");
    const theme = vue.inject(ThemeSymbol, null);
    if (!theme)
      throw new Error("Could not find Vuetify theme injection");
    const name = vue.computed(() => {
      return props.theme ?? theme.name.value;
    });
    const current = vue.computed(() => theme.themes.value[name.value]);
    const themeClasses = vue.computed(() => theme.isDisabled ? void 0 : `v-theme--${name.value}`);
    const newTheme = {
      ...theme,
      name,
      current,
      themeClasses
    };
    vue.provide(ThemeSymbol, newTheme);
    return newTheme;
  }
  function createCssClass(lines, selector, content) {
    lines.push(`${selector} {
`, ...content.map((line) => `  ${line};
`), "}\n");
  }
  function genCssVariables(theme) {
    const lightOverlay = theme.dark ? 2 : 1;
    const darkOverlay = theme.dark ? 1 : 2;
    const variables = [];
    for (const [key, value] of Object.entries(theme.colors)) {
      const rgb = parseColor(value);
      variables.push(`--v-theme-${key}: ${rgb.r},${rgb.g},${rgb.b}`);
      if (!key.startsWith("on-")) {
        variables.push(`--v-theme-${key}-overlay-multiplier: ${getLuma(value) > 0.18 ? lightOverlay : darkOverlay}`);
      }
    }
    for (const [key, value] of Object.entries(theme.variables)) {
      const color = typeof value === "string" && value.startsWith("#") ? parseColor(value) : void 0;
      const rgb = color ? `${color.r}, ${color.g}, ${color.b}` : void 0;
      variables.push(`--v-${key}: ${rgb ?? value}`);
    }
    return variables;
  }
  function useResizeObserver(callback) {
    let box = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
    const resizeRef = templateRef();
    const contentRect = vue.ref();
    if (IN_BROWSER) {
      const observer = new ResizeObserver((entries) => {
        callback == null ? void 0 : callback(entries, observer);
        if (!entries.length)
          return;
        if (box === "content") {
          contentRect.value = entries[0].contentRect;
        } else {
          contentRect.value = entries[0].target.getBoundingClientRect();
        }
      });
      vue.onBeforeUnmount(() => {
        observer.disconnect();
      });
      vue.watch(() => resizeRef.el, (newValue, oldValue) => {
        if (oldValue) {
          observer.unobserve(oldValue);
          contentRect.value = void 0;
        }
        if (newValue)
          observer.observe(newValue);
      }, {
        flush: "post"
      });
    }
    return {
      resizeRef,
      contentRect: vue.readonly(contentRect)
    };
  }
  function createVuetify() {
    let vuetify = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      blueprint,
      ...rest
    } = vuetify;
    const options = mergeDeep(blueprint, rest);
    const {
      aliases: aliases2 = {},
      components = {},
      directives = {}
    } = options;
    const defaults = createDefaults(options.defaults);
    const display = createDisplay(options.display, options.ssr);
    const theme = createTheme(options.theme);
    const icons = createIcons(options.icons);
    const locale = createLocale(options.locale);
    const date2 = createDate(options.date, locale);
    const goTo = createGoTo(options.goTo, locale);
    const install = (app) => {
      for (const key in directives) {
        app.directive(key, directives[key]);
      }
      for (const key in components) {
        app.component(key, components[key]);
      }
      for (const key in aliases2) {
        app.component(key, defineComponent({
          ...aliases2[key],
          name: key,
          aliasName: aliases2[key].name
        }));
      }
      theme.install(app);
      app.provide(DefaultsSymbol, defaults);
      app.provide(DisplaySymbol, display);
      app.provide(ThemeSymbol, theme);
      app.provide(IconSymbol, icons);
      app.provide(LocaleSymbol, locale);
      app.provide(DateOptionsSymbol, date2.options);
      app.provide(DateAdapterSymbol, date2.instance);
      app.provide(GoToSymbol, goTo);
      if (IN_BROWSER && options.ssr) {
        if (app.$nuxt) {
          app.$nuxt.hook("app:suspense:resolve", () => {
            display.update();
          });
        } else {
          const {
            mount
          } = app;
          app.mount = function() {
            const vm = mount(...arguments);
            vue.nextTick(() => display.update());
            app.mount = mount;
            return vm;
          };
        }
      }
      getUid.reset();
      {
        app.mixin({
          computed: {
            $vuetify() {
              return vue.reactive({
                defaults: inject.call(this, DefaultsSymbol),
                display: inject.call(this, DisplaySymbol),
                theme: inject.call(this, ThemeSymbol),
                icons: inject.call(this, IconSymbol),
                locale: inject.call(this, LocaleSymbol),
                date: inject.call(this, DateAdapterSymbol)
              });
            }
          }
        });
      }
    };
    return {
      install,
      defaults,
      display,
      theme,
      icons,
      locale,
      date: date2,
      goTo
    };
  }
  const version = "3.6.6";
  createVuetify.version = version;
  function inject(key) {
    var _a, _b;
    const vm = this.$;
    const provides = ((_a = vm.parent) == null ? void 0 : _a.provides) ?? ((_b = vm.vnode.appContext) == null ? void 0 : _b.provides);
    if (provides && key in provides) {
      return provides[key];
    }
  }
  const makeBorderProps = propsFactory({
    border: [Boolean, Number, String]
  }, "border");
  function useBorder(props) {
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    const borderClasses = vue.computed(() => {
      const border = vue.isRef(props) ? props.value : props.border;
      const classes = [];
      if (border === true || border === "") {
        classes.push(`${name}--border`);
      } else if (typeof border === "string" || border === 0) {
        for (const value of String(border).split(" ")) {
          classes.push(`border-${value}`);
        }
      }
      return classes;
    });
    return {
      borderClasses
    };
  }
  const allowedDensities = [null, "default", "comfortable", "compact"];
  const makeDensityProps = propsFactory({
    density: {
      type: String,
      default: "default",
      validator: (v) => allowedDensities.includes(v)
    }
  }, "density");
  function useDensity(props) {
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    const densityClasses = vue.computed(() => {
      return `${name}--density-${props.density}`;
    });
    return {
      densityClasses
    };
  }
  const makeElevationProps = propsFactory({
    elevation: {
      type: [Number, String],
      validator(v) {
        const value = parseInt(v);
        return !isNaN(value) && value >= 0 && // Material Design has a maximum elevation of 24
        // https://material.io/design/environment/elevation.html#default-elevations
        value <= 24;
      }
    }
  }, "elevation");
  function useElevation(props) {
    const elevationClasses = vue.computed(() => {
      const elevation = vue.isRef(props) ? props.value : props.elevation;
      const classes = [];
      if (elevation == null)
        return classes;
      classes.push(`elevation-${elevation}`);
      return classes;
    });
    return {
      elevationClasses
    };
  }
  const makeRoundedProps = propsFactory({
    rounded: {
      type: [Boolean, Number, String],
      default: void 0
    },
    tile: Boolean
  }, "rounded");
  function useRounded(props) {
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    const roundedClasses = vue.computed(() => {
      const rounded = vue.isRef(props) ? props.value : props.rounded;
      const tile = vue.isRef(props) ? props.value : props.tile;
      const classes = [];
      if (rounded === true || rounded === "") {
        classes.push(`${name}--rounded`);
      } else if (typeof rounded === "string" || rounded === 0) {
        for (const value of String(rounded).split(" ")) {
          classes.push(`rounded-${value}`);
        }
      } else if (tile || rounded === false) {
        classes.push("rounded-0");
      }
      return classes;
    });
    return {
      roundedClasses
    };
  }
  const makeTagProps = propsFactory({
    tag: {
      type: String,
      default: "div"
    }
  }, "tag");
  function useColor(colors) {
    return destructComputed(() => {
      const classes = [];
      const styles = {};
      if (colors.value.background) {
        if (isCssColor(colors.value.background)) {
          styles.backgroundColor = colors.value.background;
          if (!colors.value.text && isParsableColor(colors.value.background)) {
            const backgroundColor = parseColor(colors.value.background);
            if (backgroundColor.a == null || backgroundColor.a === 1) {
              const textColor = getForeground(backgroundColor);
              styles.color = textColor;
              styles.caretColor = textColor;
            }
          }
        } else {
          classes.push(`bg-${colors.value.background}`);
        }
      }
      if (colors.value.text) {
        if (isCssColor(colors.value.text)) {
          styles.color = colors.value.text;
          styles.caretColor = colors.value.text;
        } else {
          classes.push(`text-${colors.value.text}`);
        }
      }
      return {
        colorClasses: classes,
        colorStyles: styles
      };
    });
  }
  function useTextColor(props, name) {
    const colors = vue.computed(() => ({
      text: vue.isRef(props) ? props.value : name ? props[name] : null
    }));
    const {
      colorClasses: textColorClasses,
      colorStyles: textColorStyles
    } = useColor(colors);
    return {
      textColorClasses,
      textColorStyles
    };
  }
  function useBackgroundColor(props, name) {
    const colors = vue.computed(() => ({
      background: vue.isRef(props) ? props.value : name ? props[name] : null
    }));
    const {
      colorClasses: backgroundColorClasses,
      colorStyles: backgroundColorStyles
    } = useColor(colors);
    return {
      backgroundColorClasses,
      backgroundColorStyles
    };
  }
  const allowedVariants$1 = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
  function genOverlays(isClickable, name) {
    return vue.createVNode(vue.Fragment, null, [isClickable && vue.createVNode("span", {
      "key": "overlay",
      "class": `${name}__overlay`
    }, null), vue.createVNode("span", {
      "key": "underlay",
      "class": `${name}__underlay`
    }, null)]);
  }
  const makeVariantProps = propsFactory({
    color: String,
    variant: {
      type: String,
      default: "elevated",
      validator: (v) => allowedVariants$1.includes(v)
    }
  }, "variant");
  function useVariant(props) {
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    const variantClasses = vue.computed(() => {
      const {
        variant
      } = vue.unref(props);
      return `${name}--variant-${variant}`;
    });
    const {
      colorClasses,
      colorStyles
    } = useColor(vue.computed(() => {
      const {
        variant,
        color
      } = vue.unref(props);
      return {
        [["elevated", "flat"].includes(variant) ? "background" : "text"]: color
      };
    }));
    return {
      colorClasses,
      colorStyles,
      variantClasses
    };
  }
  const makeVBtnGroupProps = propsFactory({
    baseColor: String,
    divided: Boolean,
    ...makeBorderProps(),
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeElevationProps(),
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps()
  }, "VBtnGroup");
  const VBtnGroup = genericComponent()({
    name: "VBtnGroup",
    props: makeVBtnGroupProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        themeClasses
      } = provideTheme(props);
      const {
        densityClasses
      } = useDensity(props);
      const {
        borderClasses
      } = useBorder(props);
      const {
        elevationClasses
      } = useElevation(props);
      const {
        roundedClasses
      } = useRounded(props);
      provideDefaults({
        VBtn: {
          height: "auto",
          baseColor: vue.toRef(props, "baseColor"),
          color: vue.toRef(props, "color"),
          density: vue.toRef(props, "density"),
          flat: true,
          variant: vue.toRef(props, "variant")
        }
      });
      useRender(() => {
        return vue.createVNode(props.tag, {
          "class": ["v-btn-group", {
            "v-btn-group--divided": props.divided
          }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class],
          "style": props.style
        }, slots);
      });
    }
  });
  const makeGroupProps = propsFactory({
    modelValue: {
      type: null,
      default: void 0
    },
    multiple: Boolean,
    mandatory: [Boolean, String],
    max: Number,
    selectedClass: String,
    disabled: Boolean
  }, "group");
  const makeGroupItemProps = propsFactory({
    value: null,
    disabled: Boolean,
    selectedClass: String
  }, "group-item");
  function useGroupItem(props, injectKey) {
    let required = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const vm = getCurrentInstance("useGroupItem");
    if (!vm) {
      throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    }
    const id = getUid();
    vue.provide(Symbol.for(`${injectKey.description}:id`), id);
    const group = vue.inject(injectKey, null);
    if (!group) {
      if (!required)
        return group;
      throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
    }
    const value = vue.toRef(props, "value");
    const disabled = vue.computed(() => !!(group.disabled.value || props.disabled));
    group.register({
      id,
      value,
      disabled
    }, vm);
    vue.onBeforeUnmount(() => {
      group.unregister(id);
    });
    const isSelected = vue.computed(() => {
      return group.isSelected(id);
    });
    const isFirst = vue.computed(() => {
      return group.items.value[0].id === id;
    });
    const isLast = vue.computed(() => {
      return group.items.value[group.items.value.length - 1].id === id;
    });
    const selectedClass = vue.computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
    vue.watch(isSelected, (value2) => {
      vm.emit("group:selected", {
        value: value2
      });
    }, {
      flush: "sync"
    });
    return {
      id,
      isSelected,
      isFirst,
      isLast,
      toggle: () => group.select(id, !isSelected.value),
      select: (value2) => group.select(id, value2),
      selectedClass,
      value,
      disabled,
      group
    };
  }
  function useGroup(props, injectKey) {
    let isUnmounted = false;
    const items = vue.reactive([]);
    const selected = useProxiedModel(props, "modelValue", [], (v) => {
      if (v == null)
        return [];
      return getIds(items, wrapInArray(v));
    }, (v) => {
      const arr = getValues(items, v);
      return props.multiple ? arr : arr[0];
    });
    const groupVm = getCurrentInstance("useGroup");
    function register(item, vm) {
      const unwrapped = item;
      const key = Symbol.for(`${injectKey.description}:id`);
      const children = findChildrenWithProvide(key, groupVm == null ? void 0 : groupVm.vnode);
      const index = children.indexOf(vm);
      if (vue.unref(unwrapped.value) == null) {
        unwrapped.value = index;
        unwrapped.useIndexAsValue = true;
      }
      if (index > -1) {
        items.splice(index, 0, unwrapped);
      } else {
        items.push(unwrapped);
      }
    }
    function unregister(id) {
      if (isUnmounted)
        return;
      forceMandatoryValue();
      const index = items.findIndex((item) => item.id === id);
      items.splice(index, 1);
    }
    function forceMandatoryValue() {
      const item = items.find((item2) => !item2.disabled);
      if (item && props.mandatory === "force" && !selected.value.length) {
        selected.value = [item.id];
      }
    }
    vue.onMounted(() => {
      forceMandatoryValue();
    });
    vue.onBeforeUnmount(() => {
      isUnmounted = true;
    });
    vue.onUpdated(() => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].useIndexAsValue) {
          items[i].value = i;
        }
      }
    });
    function select(id, value) {
      const item = items.find((item2) => item2.id === id);
      if (value && (item == null ? void 0 : item.disabled))
        return;
      if (props.multiple) {
        const internalValue = selected.value.slice();
        const index = internalValue.findIndex((v) => v === id);
        const isSelected = ~index;
        value = value ?? !isSelected;
        if (isSelected && props.mandatory && internalValue.length <= 1)
          return;
        if (!isSelected && props.max != null && internalValue.length + 1 > props.max)
          return;
        if (index < 0 && value)
          internalValue.push(id);
        else if (index >= 0 && !value)
          internalValue.splice(index, 1);
        selected.value = internalValue;
      } else {
        const isSelected = selected.value.includes(id);
        if (props.mandatory && isSelected)
          return;
        selected.value = value ?? !isSelected ? [id] : [];
      }
    }
    function step(offset) {
      if (props.multiple)
        consoleWarn('This method is not supported when using "multiple" prop');
      if (!selected.value.length) {
        const item = items.find((item2) => !item2.disabled);
        item && (selected.value = [item.id]);
      } else {
        const currentId = selected.value[0];
        const currentIndex = items.findIndex((i) => i.id === currentId);
        let newIndex = (currentIndex + offset) % items.length;
        let newItem = items[newIndex];
        while (newItem.disabled && newIndex !== currentIndex) {
          newIndex = (newIndex + offset) % items.length;
          newItem = items[newIndex];
        }
        if (newItem.disabled)
          return;
        selected.value = [items[newIndex].id];
      }
    }
    const state = {
      register,
      unregister,
      selected,
      select,
      disabled: vue.toRef(props, "disabled"),
      prev: () => step(items.length - 1),
      next: () => step(1),
      isSelected: (id) => selected.value.includes(id),
      selectedClass: vue.computed(() => props.selectedClass),
      items: vue.computed(() => items),
      getItemIndex: (value) => getItemIndex(items, value)
    };
    vue.provide(injectKey, state);
    return state;
  }
  function getItemIndex(items, value) {
    const ids = getIds(items, [value]);
    if (!ids.length)
      return -1;
    return items.findIndex((item) => item.id === ids[0]);
  }
  function getIds(items, modelValue) {
    const ids = [];
    modelValue.forEach((value) => {
      const item = items.find((item2) => deepEqual(value, item2.value));
      const itemByIndex = items[value];
      if ((item == null ? void 0 : item.value) != null) {
        ids.push(item.id);
      } else if (itemByIndex != null) {
        ids.push(itemByIndex.id);
      }
    });
    return ids;
  }
  function getValues(items, ids) {
    const values = [];
    ids.forEach((id) => {
      const itemIndex = items.findIndex((item) => item.id === id);
      if (~itemIndex) {
        const item = items[itemIndex];
        values.push(item.value != null ? item.value : itemIndex);
      }
    });
    return values;
  }
  const VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
  const makeVBtnToggleProps = propsFactory({
    ...makeVBtnGroupProps(),
    ...makeGroupProps()
  }, "VBtnToggle");
  genericComponent()({
    name: "VBtnToggle",
    props: makeVBtnToggleProps(),
    emits: {
      "update:modelValue": (value) => true
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        isSelected,
        next,
        prev,
        select,
        selected
      } = useGroup(props, VBtnToggleSymbol);
      useRender(() => {
        const btnGroupProps = VBtnGroup.filterProps(props);
        return vue.createVNode(VBtnGroup, vue.mergeProps({
          "class": ["v-btn-toggle", props.class]
        }, btnGroupProps, {
          "style": props.style
        }), {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
              isSelected,
              next,
              prev,
              select,
              selected
            })];
          }
        });
      });
      return {
        next,
        prev,
        select
      };
    }
  });
  const makeVDefaultsProviderProps = propsFactory({
    defaults: Object,
    disabled: Boolean,
    reset: [Number, String],
    root: [Boolean, String],
    scoped: Boolean
  }, "VDefaultsProvider");
  const VDefaultsProvider = genericComponent(false)({
    name: "VDefaultsProvider",
    props: makeVDefaultsProviderProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        defaults,
        disabled,
        reset,
        root,
        scoped
      } = vue.toRefs(props);
      provideDefaults(defaults, {
        reset,
        root,
        scoped,
        disabled
      });
      return () => {
        var _a;
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      };
    }
  });
  const predefinedSizes = ["x-small", "small", "default", "large", "x-large"];
  const makeSizeProps = propsFactory({
    size: {
      type: [String, Number],
      default: "default"
    }
  }, "size");
  function useSize(props) {
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    return destructComputed(() => {
      let sizeClasses;
      let sizeStyles;
      if (includes(predefinedSizes, props.size)) {
        sizeClasses = `${name}--size-${props.size}`;
      } else if (props.size) {
        sizeStyles = {
          width: convertToUnit(props.size),
          height: convertToUnit(props.size)
        };
      }
      return {
        sizeClasses,
        sizeStyles
      };
    });
  }
  const makeVIconProps = propsFactory({
    color: String,
    disabled: Boolean,
    start: Boolean,
    end: Boolean,
    icon: IconValue,
    ...makeComponentProps(),
    ...makeSizeProps(),
    ...makeTagProps({
      tag: "i"
    }),
    ...makeThemeProps()
  }, "VIcon");
  const VIcon = genericComponent()({
    name: "VIcon",
    props: makeVIconProps(),
    setup(props, _ref) {
      let {
        attrs,
        slots
      } = _ref;
      const slotIcon = vue.ref();
      const {
        themeClasses
      } = provideTheme(props);
      const {
        iconData
      } = useIcon(vue.computed(() => slotIcon.value || props.icon));
      const {
        sizeClasses
      } = useSize(props);
      const {
        textColorClasses,
        textColorStyles
      } = useTextColor(vue.toRef(props, "color"));
      useRender(() => {
        var _a, _b;
        const slotValue = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (slotValue) {
          slotIcon.value = (_b = flattenFragments(slotValue).filter((node) => node.type === vue.Text && node.children && typeof node.children === "string")[0]) == null ? void 0 : _b.children;
        }
        const hasClick = !!(attrs.onClick || attrs.onClickOnce);
        return vue.createVNode(iconData.value.component, {
          "tag": props.tag,
          "icon": iconData.value.icon,
          "class": ["v-icon", "notranslate", themeClasses.value, sizeClasses.value, textColorClasses.value, {
            "v-icon--clickable": hasClick,
            "v-icon--disabled": props.disabled,
            "v-icon--start": props.start,
            "v-icon--end": props.end
          }, props.class],
          "style": [!sizeClasses.value ? {
            fontSize: convertToUnit(props.size),
            height: convertToUnit(props.size),
            width: convertToUnit(props.size)
          } : void 0, textColorStyles.value, props.style],
          "role": hasClick ? "button" : void 0,
          "aria-hidden": !hasClick,
          "tabindex": hasClick ? props.disabled ? -1 : 0 : void 0
        }, {
          default: () => [slotValue]
        });
      });
      return {};
    }
  });
  function useIntersectionObserver(callback, options) {
    const intersectionRef = vue.ref();
    const isIntersecting = vue.shallowRef(false);
    if (SUPPORTS_INTERSECTION) {
      const observer = new IntersectionObserver((entries) => {
        isIntersecting.value = !!entries.find((entry) => entry.isIntersecting);
      }, options);
      vue.onBeforeUnmount(() => {
        observer.disconnect();
      });
      vue.watch(intersectionRef, (newValue, oldValue) => {
        if (oldValue) {
          observer.unobserve(oldValue);
          isIntersecting.value = false;
        }
        if (newValue)
          observer.observe(newValue);
      }, {
        flush: "post"
      });
    }
    return {
      intersectionRef,
      isIntersecting
    };
  }
  const makeVProgressCircularProps = propsFactory({
    bgColor: String,
    color: String,
    indeterminate: [Boolean, String],
    modelValue: {
      type: [Number, String],
      default: 0
    },
    rotate: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 4
    },
    ...makeComponentProps(),
    ...makeSizeProps(),
    ...makeTagProps({
      tag: "div"
    }),
    ...makeThemeProps()
  }, "VProgressCircular");
  const VProgressCircular = genericComponent()({
    name: "VProgressCircular",
    props: makeVProgressCircularProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const MAGIC_RADIUS_CONSTANT = 20;
      const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
      const root = vue.ref();
      const {
        themeClasses
      } = provideTheme(props);
      const {
        sizeClasses,
        sizeStyles
      } = useSize(props);
      const {
        textColorClasses,
        textColorStyles
      } = useTextColor(vue.toRef(props, "color"));
      const {
        textColorClasses: underlayColorClasses,
        textColorStyles: underlayColorStyles
      } = useTextColor(vue.toRef(props, "bgColor"));
      const {
        intersectionRef,
        isIntersecting
      } = useIntersectionObserver();
      const {
        resizeRef,
        contentRect
      } = useResizeObserver();
      const normalizedValue = vue.computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))));
      const width = vue.computed(() => Number(props.width));
      const size = vue.computed(() => {
        return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
      });
      const diameter = vue.computed(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
      const strokeWidth = vue.computed(() => width.value / size.value * diameter.value);
      const strokeDashOffset = vue.computed(() => convertToUnit((100 - normalizedValue.value) / 100 * CIRCUMFERENCE));
      vue.watchEffect(() => {
        intersectionRef.value = root.value;
        resizeRef.value = root.value;
      });
      useRender(() => vue.createVNode(props.tag, {
        "ref": root,
        "class": ["v-progress-circular", {
          "v-progress-circular--indeterminate": !!props.indeterminate,
          "v-progress-circular--visible": isIntersecting.value,
          "v-progress-circular--disable-shrink": props.indeterminate === "disable-shrink"
        }, themeClasses.value, sizeClasses.value, textColorClasses.value, props.class],
        "style": [sizeStyles.value, textColorStyles.value, props.style],
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
      }, {
        default: () => [vue.createVNode("svg", {
          "style": {
            transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`
          },
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": `0 0 ${diameter.value} ${diameter.value}`
        }, [vue.createVNode("circle", {
          "class": ["v-progress-circular__underlay", underlayColorClasses.value],
          "style": underlayColorStyles.value,
          "fill": "transparent",
          "cx": "50%",
          "cy": "50%",
          "r": MAGIC_RADIUS_CONSTANT,
          "stroke-width": strokeWidth.value,
          "stroke-dasharray": CIRCUMFERENCE,
          "stroke-dashoffset": 0
        }, null), vue.createVNode("circle", {
          "class": "v-progress-circular__overlay",
          "fill": "transparent",
          "cx": "50%",
          "cy": "50%",
          "r": MAGIC_RADIUS_CONSTANT,
          "stroke-width": strokeWidth.value,
          "stroke-dasharray": CIRCUMFERENCE,
          "stroke-dashoffset": strokeDashOffset.value
        }, null)]), slots.default && vue.createVNode("div", {
          "class": "v-progress-circular__content"
        }, [slots.default({
          value: normalizedValue.value
        })])]
      }));
      return {};
    }
  });
  const makeDimensionProps = propsFactory({
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String]
  }, "dimension");
  function useDimension(props) {
    const dimensionStyles = vue.computed(() => ({
      height: convertToUnit(props.height),
      maxHeight: convertToUnit(props.maxHeight),
      maxWidth: convertToUnit(props.maxWidth),
      minHeight: convertToUnit(props.minHeight),
      minWidth: convertToUnit(props.minWidth),
      width: convertToUnit(props.width)
    }));
    return {
      dimensionStyles
    };
  }
  const oppositeMap = {
    center: "center",
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  };
  const makeLocationProps = propsFactory({
    location: String
  }, "location");
  function useLocation(props) {
    let opposite = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let offset = arguments.length > 2 ? arguments[2] : void 0;
    const {
      isRtl
    } = useRtl();
    const locationStyles = vue.computed(() => {
      if (!props.location)
        return {};
      const {
        side,
        align
      } = parseAnchor(props.location.split(" ").length > 1 ? props.location : `${props.location} center`, isRtl.value);
      function getOffset2(side2) {
        return offset ? offset(side2) : 0;
      }
      const styles = {};
      if (side !== "center") {
        if (opposite)
          styles[oppositeMap[side]] = `calc(100% - ${getOffset2(side)}px)`;
        else
          styles[side] = 0;
      }
      if (align !== "center") {
        if (opposite)
          styles[oppositeMap[align]] = `calc(100% - ${getOffset2(align)}px)`;
        else
          styles[align] = 0;
      } else {
        if (side === "center")
          styles.top = styles.left = "50%";
        else {
          styles[{
            top: "left",
            bottom: "left",
            left: "top",
            right: "top"
          }[side]] = "50%";
        }
        styles.transform = {
          top: "translateX(-50%)",
          bottom: "translateX(-50%)",
          left: "translateY(-50%)",
          right: "translateY(-50%)",
          center: "translate(-50%, -50%)"
        }[side];
      }
      return styles;
    });
    return {
      locationStyles
    };
  }
  const makeVProgressLinearProps = propsFactory({
    absolute: Boolean,
    active: {
      type: Boolean,
      default: true
    },
    bgColor: String,
    bgOpacity: [Number, String],
    bufferValue: {
      type: [Number, String],
      default: 0
    },
    bufferColor: String,
    bufferOpacity: [Number, String],
    clickable: Boolean,
    color: String,
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    opacity: [Number, String],
    reverse: Boolean,
    stream: Boolean,
    striped: Boolean,
    roundedBar: Boolean,
    ...makeComponentProps(),
    ...makeLocationProps({
      location: "top"
    }),
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeThemeProps()
  }, "VProgressLinear");
  const VProgressLinear = genericComponent()({
    name: "VProgressLinear",
    props: makeVProgressLinearProps(),
    emits: {
      "update:modelValue": (value) => true
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const progress = useProxiedModel(props, "modelValue");
      const {
        isRtl,
        rtlClasses
      } = useRtl();
      const {
        themeClasses
      } = provideTheme(props);
      const {
        locationStyles
      } = useLocation(props);
      const {
        textColorClasses,
        textColorStyles
      } = useTextColor(props, "color");
      const {
        backgroundColorClasses,
        backgroundColorStyles
      } = useBackgroundColor(vue.computed(() => props.bgColor || props.color));
      const {
        backgroundColorClasses: bufferColorClasses,
        backgroundColorStyles: bufferColorStyles
      } = useBackgroundColor(vue.computed(() => props.bufferColor || props.bgColor || props.color));
      const {
        backgroundColorClasses: barColorClasses,
        backgroundColorStyles: barColorStyles
      } = useBackgroundColor(props, "color");
      const {
        roundedClasses
      } = useRounded(props);
      const {
        intersectionRef,
        isIntersecting
      } = useIntersectionObserver();
      const max = vue.computed(() => parseFloat(props.max));
      const height = vue.computed(() => parseFloat(props.height));
      const normalizedBuffer = vue.computed(() => clamp(parseFloat(props.bufferValue) / max.value * 100, 0, 100));
      const normalizedValue = vue.computed(() => clamp(parseFloat(progress.value) / max.value * 100, 0, 100));
      const isReversed = vue.computed(() => isRtl.value !== props.reverse);
      const transition = vue.computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
      function handleClick(e) {
        if (!intersectionRef.value)
          return;
        const {
          left,
          right,
          width
        } = intersectionRef.value.getBoundingClientRect();
        const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
        progress.value = Math.round(value / width * max.value);
      }
      useRender(() => vue.createVNode(props.tag, {
        "ref": intersectionRef,
        "class": ["v-progress-linear", {
          "v-progress-linear--absolute": props.absolute,
          "v-progress-linear--active": props.active && isIntersecting.value,
          "v-progress-linear--reverse": isReversed.value,
          "v-progress-linear--rounded": props.rounded,
          "v-progress-linear--rounded-bar": props.roundedBar,
          "v-progress-linear--striped": props.striped
        }, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
        "style": [{
          bottom: props.location === "bottom" ? 0 : void 0,
          top: props.location === "top" ? 0 : void 0,
          height: props.active ? convertToUnit(height.value) : 0,
          "--v-progress-linear-height": convertToUnit(height.value),
          ...props.absolute ? locationStyles.value : {}
        }, props.style],
        "role": "progressbar",
        "aria-hidden": props.active ? "false" : "true",
        "aria-valuemin": "0",
        "aria-valuemax": props.max,
        "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value,
        "onClick": props.clickable && handleClick
      }, {
        default: () => [props.stream && vue.createVNode("div", {
          "key": "stream",
          "class": ["v-progress-linear__stream", textColorClasses.value],
          "style": {
            ...textColorStyles.value,
            [isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
            borderTop: `${convertToUnit(height.value / 2)} dotted`,
            opacity: parseFloat(props.bufferOpacity),
            top: `calc(50% - ${convertToUnit(height.value / 4)})`,
            width: convertToUnit(100 - normalizedBuffer.value, "%"),
            "--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
          }
        }, null), vue.createVNode("div", {
          "class": ["v-progress-linear__background", backgroundColorClasses.value],
          "style": [backgroundColorStyles.value, {
            opacity: parseFloat(props.bgOpacity),
            width: props.stream ? 0 : void 0
          }]
        }, null), vue.createVNode("div", {
          "class": ["v-progress-linear__buffer", bufferColorClasses.value],
          "style": [bufferColorStyles.value, {
            opacity: parseFloat(props.bufferOpacity),
            width: convertToUnit(normalizedBuffer.value, "%")
          }]
        }, null), vue.createVNode(vue.Transition, {
          "name": transition.value
        }, {
          default: () => [!props.indeterminate ? vue.createVNode("div", {
            "class": ["v-progress-linear__determinate", barColorClasses.value],
            "style": [barColorStyles.value, {
              width: convertToUnit(normalizedValue.value, "%")
            }]
          }, null) : vue.createVNode("div", {
            "class": "v-progress-linear__indeterminate"
          }, [["long", "short"].map((bar) => vue.createVNode("div", {
            "key": bar,
            "class": ["v-progress-linear__indeterminate", bar, barColorClasses.value],
            "style": barColorStyles.value
          }, null))])]
        }), slots.default && vue.createVNode("div", {
          "class": "v-progress-linear__content"
        }, [slots.default({
          value: normalizedValue.value,
          buffer: normalizedBuffer.value
        })])]
      }));
      return {};
    }
  });
  const makeLoaderProps = propsFactory({
    loading: [Boolean, String]
  }, "loader");
  function useLoader(props) {
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    const loaderClasses = vue.computed(() => ({
      [`${name}--loading`]: props.loading
    }));
    return {
      loaderClasses
    };
  }
  function LoaderSlot(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    return vue.createVNode("div", {
      "class": `${props.name}__loader`
    }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
      color: props.color,
      isActive: props.active
    })) || vue.createVNode(VProgressLinear, {
      "absolute": props.absolute,
      "active": props.active,
      "color": props.color,
      "height": "2",
      "indeterminate": true
    }, null)]);
  }
  const positionValues = ["static", "relative", "fixed", "absolute", "sticky"];
  const makePositionProps = propsFactory({
    position: {
      type: String,
      validator: (
        /* istanbul ignore next */
        (v) => positionValues.includes(v)
      )
    }
  }, "position");
  function usePosition(props) {
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    const positionClasses = vue.computed(() => {
      return props.position ? `${name}--${props.position}` : void 0;
    });
    return {
      positionClasses
    };
  }
  function useRoute() {
    const vm = getCurrentInstance("useRoute");
    return vue.computed(() => {
      var _a;
      return (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$route;
    });
  }
  function useRouter() {
    var _a, _b;
    return (_b = (_a = getCurrentInstance("useRouter")) == null ? void 0 : _a.proxy) == null ? void 0 : _b.$router;
  }
  function useLink(props, attrs) {
    var _a, _b;
    const RouterLink = vue.resolveDynamicComponent("RouterLink");
    const isLink = vue.computed(() => !!(props.href || props.to));
    const isClickable = vue.computed(() => {
      return (isLink == null ? void 0 : isLink.value) || hasEvent(attrs, "click") || hasEvent(props, "click");
    });
    if (typeof RouterLink === "string" || !("useLink" in RouterLink)) {
      return {
        isLink,
        isClickable,
        href: vue.toRef(props, "href")
      };
    }
    const linkProps = vue.computed(() => ({
      ...props,
      to: vue.toRef(() => props.to || "")
    }));
    const routerLink = RouterLink.useLink(linkProps.value);
    const link = vue.computed(() => props.to ? routerLink : void 0);
    const route = useRoute();
    return {
      isLink,
      isClickable,
      route: (_a = link.value) == null ? void 0 : _a.route,
      navigate: (_b = link.value) == null ? void 0 : _b.navigate,
      isActive: vue.computed(() => {
        var _a2, _b2, _c;
        if (!link.value)
          return false;
        if (!props.exact)
          return ((_a2 = link.value.isActive) == null ? void 0 : _a2.value) ?? false;
        if (!route.value)
          return ((_b2 = link.value.isExactActive) == null ? void 0 : _b2.value) ?? false;
        return ((_c = link.value.isExactActive) == null ? void 0 : _c.value) && deepEqual(link.value.route.value.query, route.value.query);
      }),
      href: vue.computed(() => {
        var _a2;
        return props.to ? (_a2 = link.value) == null ? void 0 : _a2.route.value.href : props.href;
      })
    };
  }
  const makeRouterProps = propsFactory({
    href: String,
    replace: Boolean,
    to: [String, Object],
    exact: Boolean
  }, "router");
  let inTransition = false;
  function useBackButton(router, cb) {
    let popped = false;
    let removeBefore;
    let removeAfter;
    if (IN_BROWSER) {
      vue.nextTick(() => {
        window.addEventListener("popstate", onPopstate);
        removeBefore = router == null ? void 0 : router.beforeEach((to, from, next) => {
          if (!inTransition) {
            setTimeout(() => popped ? cb(next) : next());
          } else {
            popped ? cb(next) : next();
          }
          inTransition = true;
        });
        removeAfter = router == null ? void 0 : router.afterEach(() => {
          inTransition = false;
        });
      });
      vue.onScopeDispose(() => {
        window.removeEventListener("popstate", onPopstate);
        removeBefore == null ? void 0 : removeBefore();
        removeAfter == null ? void 0 : removeAfter();
      });
    }
    function onPopstate(e) {
      var _a;
      if ((_a = e.state) == null ? void 0 : _a.replaced)
        return;
      popped = true;
      setTimeout(() => popped = false);
    }
  }
  function useSelectLink(link, select) {
    vue.watch(() => {
      var _a;
      return (_a = link.isActive) == null ? void 0 : _a.value;
    }, (isActive) => {
      if (link.isLink.value && isActive && select) {
        vue.nextTick(() => {
          select(true);
        });
      }
    }, {
      immediate: true
    });
  }
  const stopSymbol = Symbol("rippleStop");
  const DELAY_RIPPLE = 80;
  function transform(el, value) {
    el.style.transform = value;
    el.style.webkitTransform = value;
  }
  function isTouchEvent(e) {
    return e.constructor.name === "TouchEvent";
  }
  function isKeyboardEvent(e) {
    return e.constructor.name === "KeyboardEvent";
  }
  const calculate = function(e, el) {
    var _a;
    let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let localX = 0;
    let localY = 0;
    if (!isKeyboardEvent(e)) {
      const offset = el.getBoundingClientRect();
      const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
      localX = target.clientX - offset.left;
      localY = target.clientY - offset.top;
    }
    let radius = 0;
    let scale = 0.3;
    if ((_a = el._ripple) == null ? void 0 : _a.circle) {
      scale = 0.15;
      radius = el.clientWidth / 2;
      radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
    } else {
      radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
    }
    const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
    const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
    const x = value.center ? centerX : `${localX - radius}px`;
    const y = value.center ? centerY : `${localY - radius}px`;
    return {
      radius,
      scale,
      x,
      y,
      centerX,
      centerY
    };
  };
  const ripples = {
    /* eslint-disable max-statements */
    show(e, el) {
      var _a;
      let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled)) {
        return;
      }
      const container = document.createElement("span");
      const animation = document.createElement("span");
      container.appendChild(animation);
      container.className = "v-ripple__container";
      if (value.class) {
        container.className += ` ${value.class}`;
      }
      const {
        radius,
        scale,
        x,
        y,
        centerX,
        centerY
      } = calculate(e, el, value);
      const size = `${radius * 2}px`;
      animation.className = "v-ripple__animation";
      animation.style.width = size;
      animation.style.height = size;
      el.appendChild(container);
      const computed2 = window.getComputedStyle(el);
      if (computed2 && computed2.position === "static") {
        el.style.position = "relative";
        el.dataset.previousPosition = "static";
      }
      animation.classList.add("v-ripple__animation--enter");
      animation.classList.add("v-ripple__animation--visible");
      transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
      animation.dataset.activated = String(performance.now());
      setTimeout(() => {
        animation.classList.remove("v-ripple__animation--enter");
        animation.classList.add("v-ripple__animation--in");
        transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
      }, 0);
    },
    hide(el) {
      var _a;
      if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled))
        return;
      const ripples2 = el.getElementsByClassName("v-ripple__animation");
      if (ripples2.length === 0)
        return;
      const animation = ripples2[ripples2.length - 1];
      if (animation.dataset.isHiding)
        return;
      else
        animation.dataset.isHiding = "true";
      const diff = performance.now() - Number(animation.dataset.activated);
      const delay = Math.max(250 - diff, 0);
      setTimeout(() => {
        animation.classList.remove("v-ripple__animation--in");
        animation.classList.add("v-ripple__animation--out");
        setTimeout(() => {
          var _a2;
          const ripples3 = el.getElementsByClassName("v-ripple__animation");
          if (ripples3.length === 1 && el.dataset.previousPosition) {
            el.style.position = el.dataset.previousPosition;
            delete el.dataset.previousPosition;
          }
          if (((_a2 = animation.parentNode) == null ? void 0 : _a2.parentNode) === el)
            el.removeChild(animation.parentNode);
        }, 300);
      }, delay);
    }
  };
  function isRippleEnabled(value) {
    return typeof value === "undefined" || !!value;
  }
  function rippleShow(e) {
    const value = {};
    const element = e.currentTarget;
    if (!(element == null ? void 0 : element._ripple) || element._ripple.touched || e[stopSymbol])
      return;
    e[stopSymbol] = true;
    if (isTouchEvent(e)) {
      element._ripple.touched = true;
      element._ripple.isTouch = true;
    } else {
      if (element._ripple.isTouch)
        return;
    }
    value.center = element._ripple.centered || isKeyboardEvent(e);
    if (element._ripple.class) {
      value.class = element._ripple.class;
    }
    if (isTouchEvent(e)) {
      if (element._ripple.showTimerCommit)
        return;
      element._ripple.showTimerCommit = () => {
        ripples.show(e, element, value);
      };
      element._ripple.showTimer = window.setTimeout(() => {
        var _a;
        if ((_a = element == null ? void 0 : element._ripple) == null ? void 0 : _a.showTimerCommit) {
          element._ripple.showTimerCommit();
          element._ripple.showTimerCommit = null;
        }
      }, DELAY_RIPPLE);
    } else {
      ripples.show(e, element, value);
    }
  }
  function rippleStop(e) {
    e[stopSymbol] = true;
  }
  function rippleHide(e) {
    const element = e.currentTarget;
    if (!(element == null ? void 0 : element._ripple))
      return;
    window.clearTimeout(element._ripple.showTimer);
    if (e.type === "touchend" && element._ripple.showTimerCommit) {
      element._ripple.showTimerCommit();
      element._ripple.showTimerCommit = null;
      element._ripple.showTimer = window.setTimeout(() => {
        rippleHide(e);
      });
      return;
    }
    window.setTimeout(() => {
      if (element._ripple) {
        element._ripple.touched = false;
      }
    });
    ripples.hide(element);
  }
  function rippleCancelShow(e) {
    const element = e.currentTarget;
    if (!(element == null ? void 0 : element._ripple))
      return;
    if (element._ripple.showTimerCommit) {
      element._ripple.showTimerCommit = null;
    }
    window.clearTimeout(element._ripple.showTimer);
  }
  let keyboardRipple = false;
  function keyboardRippleShow(e) {
    if (!keyboardRipple && (e.keyCode === keyCodes.enter || e.keyCode === keyCodes.space)) {
      keyboardRipple = true;
      rippleShow(e);
    }
  }
  function keyboardRippleHide(e) {
    keyboardRipple = false;
    rippleHide(e);
  }
  function focusRippleHide(e) {
    if (keyboardRipple) {
      keyboardRipple = false;
      rippleHide(e);
    }
  }
  function updateRipple(el, binding, wasEnabled) {
    const {
      value,
      modifiers
    } = binding;
    const enabled = isRippleEnabled(value);
    if (!enabled) {
      ripples.hide(el);
    }
    el._ripple = el._ripple ?? {};
    el._ripple.enabled = enabled;
    el._ripple.centered = modifiers.center;
    el._ripple.circle = modifiers.circle;
    if (isObject(value) && value.class) {
      el._ripple.class = value.class;
    }
    if (enabled && !wasEnabled) {
      if (modifiers.stop) {
        el.addEventListener("touchstart", rippleStop, {
          passive: true
        });
        el.addEventListener("mousedown", rippleStop);
        return;
      }
      el.addEventListener("touchstart", rippleShow, {
        passive: true
      });
      el.addEventListener("touchend", rippleHide, {
        passive: true
      });
      el.addEventListener("touchmove", rippleCancelShow, {
        passive: true
      });
      el.addEventListener("touchcancel", rippleHide);
      el.addEventListener("mousedown", rippleShow);
      el.addEventListener("mouseup", rippleHide);
      el.addEventListener("mouseleave", rippleHide);
      el.addEventListener("keydown", keyboardRippleShow);
      el.addEventListener("keyup", keyboardRippleHide);
      el.addEventListener("blur", focusRippleHide);
      el.addEventListener("dragstart", rippleHide, {
        passive: true
      });
    } else if (!enabled && wasEnabled) {
      removeListeners(el);
    }
  }
  function removeListeners(el) {
    el.removeEventListener("mousedown", rippleShow);
    el.removeEventListener("touchstart", rippleShow);
    el.removeEventListener("touchend", rippleHide);
    el.removeEventListener("touchmove", rippleCancelShow);
    el.removeEventListener("touchcancel", rippleHide);
    el.removeEventListener("mouseup", rippleHide);
    el.removeEventListener("mouseleave", rippleHide);
    el.removeEventListener("keydown", keyboardRippleShow);
    el.removeEventListener("keyup", keyboardRippleHide);
    el.removeEventListener("dragstart", rippleHide);
    el.removeEventListener("blur", focusRippleHide);
  }
  function mounted$1(el, binding) {
    updateRipple(el, binding, false);
  }
  function unmounted$1(el) {
    delete el._ripple;
    removeListeners(el);
  }
  function updated(el, binding) {
    if (binding.value === binding.oldValue) {
      return;
    }
    const wasEnabled = isRippleEnabled(binding.oldValue);
    updateRipple(el, binding, wasEnabled);
  }
  const Ripple = {
    mounted: mounted$1,
    unmounted: unmounted$1,
    updated
  };
  const makeVBtnProps = propsFactory({
    active: {
      type: Boolean,
      default: void 0
    },
    baseColor: String,
    symbol: {
      type: null,
      default: VBtnToggleSymbol
    },
    flat: Boolean,
    icon: [Boolean, String, Function, Object],
    prependIcon: IconValue,
    appendIcon: IconValue,
    block: Boolean,
    readonly: Boolean,
    slim: Boolean,
    stacked: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    text: String,
    ...makeBorderProps(),
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeGroupItemProps(),
    ...makeLoaderProps(),
    ...makeLocationProps(),
    ...makePositionProps(),
    ...makeRoundedProps(),
    ...makeRouterProps(),
    ...makeSizeProps(),
    ...makeTagProps({
      tag: "button"
    }),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "elevated"
    })
  }, "VBtn");
  const VBtn = genericComponent()({
    name: "VBtn",
    props: makeVBtnProps(),
    emits: {
      "group:selected": (val) => true
    },
    setup(props, _ref) {
      let {
        attrs,
        slots
      } = _ref;
      const {
        themeClasses
      } = provideTheme(props);
      const {
        borderClasses
      } = useBorder(props);
      const {
        densityClasses
      } = useDensity(props);
      const {
        dimensionStyles
      } = useDimension(props);
      const {
        elevationClasses
      } = useElevation(props);
      const {
        loaderClasses
      } = useLoader(props);
      const {
        locationStyles
      } = useLocation(props);
      const {
        positionClasses
      } = usePosition(props);
      const {
        roundedClasses
      } = useRounded(props);
      const {
        sizeClasses,
        sizeStyles
      } = useSize(props);
      const group = useGroupItem(props, props.symbol, false);
      const link = useLink(props, attrs);
      const isActive = vue.computed(() => {
        var _a;
        if (props.active !== void 0) {
          return props.active;
        }
        if (link.isLink.value) {
          return (_a = link.isActive) == null ? void 0 : _a.value;
        }
        return group == null ? void 0 : group.isSelected.value;
      });
      const variantProps = vue.computed(() => {
        var _a, _b;
        const showColor = (group == null ? void 0 : group.isSelected.value) && (!link.isLink.value || ((_a = link.isActive) == null ? void 0 : _a.value)) || !group || ((_b = link.isActive) == null ? void 0 : _b.value);
        return {
          color: showColor ? props.color ?? props.baseColor : props.baseColor,
          variant: props.variant
        };
      });
      const {
        colorClasses,
        colorStyles,
        variantClasses
      } = useVariant(variantProps);
      const isDisabled = vue.computed(() => (group == null ? void 0 : group.disabled.value) || props.disabled);
      const isElevated = vue.computed(() => {
        return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
      });
      const valueAttr = vue.computed(() => {
        if (props.value === void 0 || typeof props.value === "symbol")
          return void 0;
        return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
      });
      function onClick(e) {
        var _a;
        if (isDisabled.value || link.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || attrs.target === "_blank"))
          return;
        (_a = link.navigate) == null ? void 0 : _a.call(link, e);
        group == null ? void 0 : group.toggle();
      }
      useSelectLink(link, group == null ? void 0 : group.select);
      useRender(() => {
        const Tag = link.isLink.value ? "a" : props.tag;
        const hasPrepend = !!(props.prependIcon || slots.prepend);
        const hasAppend = !!(props.appendIcon || slots.append);
        const hasIcon = !!(props.icon && props.icon !== true);
        return vue.withDirectives(vue.createVNode(Tag, {
          "type": Tag === "a" ? void 0 : "button",
          "class": ["v-btn", group == null ? void 0 : group.selectedClass.value, {
            "v-btn--active": isActive.value,
            "v-btn--block": props.block,
            "v-btn--disabled": isDisabled.value,
            "v-btn--elevated": isElevated.value,
            "v-btn--flat": props.flat,
            "v-btn--icon": !!props.icon,
            "v-btn--loading": props.loading,
            "v-btn--readonly": props.readonly,
            "v-btn--slim": props.slim,
            "v-btn--stacked": props.stacked
          }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
          "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, sizeStyles.value, props.style],
          "aria-busy": props.loading ? true : void 0,
          "disabled": isDisabled.value || void 0,
          "href": link.href.value,
          "tabindex": props.loading || props.readonly ? -1 : void 0,
          "onClick": onClick,
          "value": valueAttr.value
        }, {
          default: () => {
            var _a;
            return [genOverlays(true, "v-btn"), !props.icon && hasPrepend && vue.createVNode("span", {
              "key": "prepend",
              "class": "v-btn__prepend"
            }, [!slots.prepend ? vue.createVNode(VIcon, {
              "key": "prepend-icon",
              "icon": props.prependIcon
            }, null) : vue.createVNode(VDefaultsProvider, {
              "key": "prepend-defaults",
              "disabled": !props.prependIcon,
              "defaults": {
                VIcon: {
                  icon: props.prependIcon
                }
              }
            }, slots.prepend)]), vue.createVNode("span", {
              "class": "v-btn__content",
              "data-no-activator": ""
            }, [!slots.default && hasIcon ? vue.createVNode(VIcon, {
              "key": "content-icon",
              "icon": props.icon
            }, null) : vue.createVNode(VDefaultsProvider, {
              "key": "content-defaults",
              "disabled": !hasIcon,
              "defaults": {
                VIcon: {
                  icon: props.icon
                }
              }
            }, {
              default: () => {
                var _a2;
                return [((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) ?? props.text];
              }
            })]), !props.icon && hasAppend && vue.createVNode("span", {
              "key": "append",
              "class": "v-btn__append"
            }, [!slots.append ? vue.createVNode(VIcon, {
              "key": "append-icon",
              "icon": props.appendIcon
            }, null) : vue.createVNode(VDefaultsProvider, {
              "key": "append-defaults",
              "disabled": !props.appendIcon,
              "defaults": {
                VIcon: {
                  icon: props.appendIcon
                }
              }
            }, slots.append)]), !!props.loading && vue.createVNode("span", {
              "key": "loader",
              "class": "v-btn__loader"
            }, [((_a = slots.loader) == null ? void 0 : _a.call(slots)) ?? vue.createVNode(VProgressCircular, {
              "color": typeof props.loading === "boolean" ? void 0 : props.loading,
              "indeterminate": true,
              "width": "2"
            }, null)])];
          }
        }), [[Ripple, !isDisabled.value && !!props.ripple, "", {
          center: !!props.icon
        }]]);
      });
      return {
        group
      };
    }
  });
  const VCardActions = genericComponent()({
    name: "VCardActions",
    props: makeComponentProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      provideDefaults({
        VBtn: {
          slim: true,
          variant: "text"
        }
      });
      useRender(() => {
        var _a;
        return vue.createVNode("div", {
          "class": ["v-card-actions", props.class],
          "style": props.style
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      });
      return {};
    }
  });
  const makeVCardSubtitleProps = propsFactory({
    opacity: [Number, String],
    ...makeComponentProps(),
    ...makeTagProps()
  }, "VCardSubtitle");
  const VCardSubtitle = genericComponent()({
    name: "VCardSubtitle",
    props: makeVCardSubtitleProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      useRender(() => vue.createVNode(props.tag, {
        "class": ["v-card-subtitle", props.class],
        "style": [{
          "--v-card-subtitle-opacity": props.opacity
        }, props.style]
      }, slots));
      return {};
    }
  });
  const VCardTitle = createSimpleFunctional("v-card-title");
  function useAspectStyles(props) {
    return {
      aspectStyles: vue.computed(() => {
        const ratio = Number(props.aspectRatio);
        return ratio ? {
          paddingBottom: String(1 / ratio * 100) + "%"
        } : void 0;
      })
    };
  }
  const makeVResponsiveProps = propsFactory({
    aspectRatio: [String, Number],
    contentClass: null,
    inline: Boolean,
    ...makeComponentProps(),
    ...makeDimensionProps()
  }, "VResponsive");
  const VResponsive = genericComponent()({
    name: "VResponsive",
    props: makeVResponsiveProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        aspectStyles
      } = useAspectStyles(props);
      const {
        dimensionStyles
      } = useDimension(props);
      useRender(() => {
        var _a;
        return vue.createVNode("div", {
          "class": ["v-responsive", {
            "v-responsive--inline": props.inline
          }, props.class],
          "style": [dimensionStyles.value, props.style]
        }, [vue.createVNode("div", {
          "class": "v-responsive__sizer",
          "style": aspectStyles.value
        }, null), (_a = slots.additional) == null ? void 0 : _a.call(slots), slots.default && vue.createVNode("div", {
          "class": ["v-responsive__content", props.contentClass]
        }, [slots.default()])]);
      });
      return {};
    }
  });
  const makeTransitionProps$1 = propsFactory({
    transition: {
      type: [Boolean, String, Object],
      default: "fade-transition",
      validator: (val) => val !== true
    }
  }, "transition");
  const MaybeTransition = (props, _ref) => {
    let {
      slots
    } = _ref;
    const {
      transition,
      disabled,
      group,
      ...rest
    } = props;
    const {
      component = group ? vue.TransitionGroup : vue.Transition,
      ...customProps
    } = typeof transition === "object" ? transition : {};
    return vue.h(component, vue.mergeProps(typeof transition === "string" ? {
      name: disabled ? "" : transition
    } : customProps, typeof transition === "string" ? {} : Object.fromEntries(Object.entries({
      disabled,
      group
    }).filter((_ref2) => {
      let [_, v] = _ref2;
      return v !== void 0;
    })), rest), slots);
  };
  function mounted(el, binding) {
    if (!SUPPORTS_INTERSECTION)
      return;
    const modifiers = binding.modifiers || {};
    const value = binding.value;
    const {
      handler,
      options
    } = typeof value === "object" ? value : {
      handler: value,
      options: {}
    };
    const observer = new IntersectionObserver(function() {
      var _a;
      let entries = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      let observer2 = arguments.length > 1 ? arguments[1] : void 0;
      const _observe = (_a = el._observe) == null ? void 0 : _a[binding.instance.$.uid];
      if (!_observe)
        return;
      const isIntersecting = entries.some((entry) => entry.isIntersecting);
      if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
        handler(isIntersecting, entries, observer2);
      }
      if (isIntersecting && modifiers.once)
        unmounted(el, binding);
      else
        _observe.init = true;
    }, options);
    el._observe = Object(el._observe);
    el._observe[binding.instance.$.uid] = {
      init: false,
      observer
    };
    observer.observe(el);
  }
  function unmounted(el, binding) {
    var _a;
    const observe = (_a = el._observe) == null ? void 0 : _a[binding.instance.$.uid];
    if (!observe)
      return;
    observe.observer.unobserve(el);
    delete el._observe[binding.instance.$.uid];
  }
  const Intersect = {
    mounted,
    unmounted
  };
  const makeVImgProps = propsFactory({
    alt: String,
    cover: Boolean,
    color: String,
    draggable: {
      type: [Boolean, String],
      default: void 0
    },
    eager: Boolean,
    gradient: String,
    lazySrc: String,
    options: {
      type: Object,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: () => ({
        root: void 0,
        rootMargin: void 0,
        threshold: void 0
      })
    },
    sizes: String,
    src: {
      type: [String, Object],
      default: ""
    },
    crossorigin: String,
    referrerpolicy: String,
    srcset: String,
    position: String,
    ...makeVResponsiveProps(),
    ...makeComponentProps(),
    ...makeRoundedProps(),
    ...makeTransitionProps$1()
  }, "VImg");
  const VImg = genericComponent()({
    name: "VImg",
    directives: {
      intersect: Intersect
    },
    props: makeVImgProps(),
    emits: {
      loadstart: (value) => true,
      load: (value) => true,
      error: (value) => true
    },
    setup(props, _ref) {
      let {
        emit,
        slots
      } = _ref;
      const {
        backgroundColorClasses,
        backgroundColorStyles
      } = useBackgroundColor(vue.toRef(props, "color"));
      const {
        roundedClasses
      } = useRounded(props);
      const vm = getCurrentInstance("VImg");
      const currentSrc = vue.shallowRef("");
      const image = vue.ref();
      const state = vue.shallowRef(props.eager ? "loading" : "idle");
      const naturalWidth = vue.shallowRef();
      const naturalHeight = vue.shallowRef();
      const normalisedSrc = vue.computed(() => {
        return props.src && typeof props.src === "object" ? {
          src: props.src.src,
          srcset: props.srcset || props.src.srcset,
          lazySrc: props.lazySrc || props.src.lazySrc,
          aspect: Number(props.aspectRatio || props.src.aspect || 0)
        } : {
          src: props.src,
          srcset: props.srcset,
          lazySrc: props.lazySrc,
          aspect: Number(props.aspectRatio || 0)
        };
      });
      const aspectRatio = vue.computed(() => {
        return normalisedSrc.value.aspect || naturalWidth.value / naturalHeight.value || 0;
      });
      vue.watch(() => props.src, () => {
        init(state.value !== "idle");
      });
      vue.watch(aspectRatio, (val, oldVal) => {
        if (!val && oldVal && image.value) {
          pollForSize(image.value);
        }
      });
      vue.onBeforeMount(() => init());
      function init(isIntersecting) {
        if (props.eager && isIntersecting)
          return;
        if (SUPPORTS_INTERSECTION && !isIntersecting && !props.eager)
          return;
        state.value = "loading";
        if (normalisedSrc.value.lazySrc) {
          const lazyImg = new Image();
          lazyImg.src = normalisedSrc.value.lazySrc;
          pollForSize(lazyImg, null);
        }
        if (!normalisedSrc.value.src)
          return;
        vue.nextTick(() => {
          var _a;
          emit("loadstart", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
          setTimeout(() => {
            var _a2;
            if (vm.isUnmounted)
              return;
            if ((_a2 = image.value) == null ? void 0 : _a2.complete) {
              if (!image.value.naturalWidth) {
                onError();
              }
              if (state.value === "error")
                return;
              if (!aspectRatio.value)
                pollForSize(image.value, null);
              if (state.value === "loading")
                onLoad();
            } else {
              if (!aspectRatio.value)
                pollForSize(image.value);
              getSrc();
            }
          });
        });
      }
      function onLoad() {
        var _a;
        if (vm.isUnmounted)
          return;
        getSrc();
        pollForSize(image.value);
        state.value = "loaded";
        emit("load", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
      }
      function onError() {
        var _a;
        if (vm.isUnmounted)
          return;
        state.value = "error";
        emit("error", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
      }
      function getSrc() {
        const img = image.value;
        if (img)
          currentSrc.value = img.currentSrc || img.src;
      }
      let timer = -1;
      vue.onBeforeUnmount(() => {
        clearTimeout(timer);
      });
      function pollForSize(img) {
        let timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
        const poll = () => {
          clearTimeout(timer);
          if (vm.isUnmounted)
            return;
          const {
            naturalHeight: imgHeight,
            naturalWidth: imgWidth
          } = img;
          if (imgHeight || imgWidth) {
            naturalWidth.value = imgWidth;
            naturalHeight.value = imgHeight;
          } else if (!img.complete && state.value === "loading" && timeout != null) {
            timer = window.setTimeout(poll, timeout);
          } else if (img.currentSrc.endsWith(".svg") || img.currentSrc.startsWith("data:image/svg+xml")) {
            naturalWidth.value = 1;
            naturalHeight.value = 1;
          }
        };
        poll();
      }
      const containClasses = vue.computed(() => ({
        "v-img__img--cover": props.cover,
        "v-img__img--contain": !props.cover
      }));
      const __image = () => {
        var _a;
        if (!normalisedSrc.value.src || state.value === "idle")
          return null;
        const img = vue.createVNode("img", {
          "class": ["v-img__img", containClasses.value],
          "style": {
            objectPosition: props.position
          },
          "src": normalisedSrc.value.src,
          "srcset": normalisedSrc.value.srcset,
          "alt": props.alt,
          "crossorigin": props.crossorigin,
          "referrerpolicy": props.referrerpolicy,
          "draggable": props.draggable,
          "sizes": props.sizes,
          "ref": image,
          "onLoad": onLoad,
          "onError": onError
        }, null);
        const sources = (_a = slots.sources) == null ? void 0 : _a.call(slots);
        return vue.createVNode(MaybeTransition, {
          "transition": props.transition,
          "appear": true
        }, {
          default: () => [vue.withDirectives(sources ? vue.createVNode("picture", {
            "class": "v-img__picture"
          }, [sources, img]) : img, [[vue.vShow, state.value === "loaded"]])]
        });
      };
      const __preloadImage = () => vue.createVNode(MaybeTransition, {
        "transition": props.transition
      }, {
        default: () => [normalisedSrc.value.lazySrc && state.value !== "loaded" && vue.createVNode("img", {
          "class": ["v-img__img", "v-img__img--preload", containClasses.value],
          "style": {
            objectPosition: props.position
          },
          "src": normalisedSrc.value.lazySrc,
          "alt": props.alt,
          "crossorigin": props.crossorigin,
          "referrerpolicy": props.referrerpolicy,
          "draggable": props.draggable
        }, null)]
      });
      const __placeholder = () => {
        if (!slots.placeholder)
          return null;
        return vue.createVNode(MaybeTransition, {
          "transition": props.transition,
          "appear": true
        }, {
          default: () => [(state.value === "loading" || state.value === "error" && !slots.error) && vue.createVNode("div", {
            "class": "v-img__placeholder"
          }, [slots.placeholder()])]
        });
      };
      const __error = () => {
        if (!slots.error)
          return null;
        return vue.createVNode(MaybeTransition, {
          "transition": props.transition,
          "appear": true
        }, {
          default: () => [state.value === "error" && vue.createVNode("div", {
            "class": "v-img__error"
          }, [slots.error()])]
        });
      };
      const __gradient = () => {
        if (!props.gradient)
          return null;
        return vue.createVNode("div", {
          "class": "v-img__gradient",
          "style": {
            backgroundImage: `linear-gradient(${props.gradient})`
          }
        }, null);
      };
      const isBooted = vue.shallowRef(false);
      {
        const stop = vue.watch(aspectRatio, (val) => {
          if (val) {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                isBooted.value = true;
              });
            });
            stop();
          }
        });
      }
      useRender(() => {
        const responsiveProps = VResponsive.filterProps(props);
        return vue.withDirectives(vue.createVNode(VResponsive, vue.mergeProps({
          "class": ["v-img", {
            "v-img--booting": !isBooted.value
          }, backgroundColorClasses.value, roundedClasses.value, props.class],
          "style": [{
            width: convertToUnit(props.width === "auto" ? naturalWidth.value : props.width)
          }, backgroundColorStyles.value, props.style]
        }, responsiveProps, {
          "aspectRatio": aspectRatio.value,
          "aria-label": props.alt,
          "role": props.alt ? "img" : void 0
        }), {
          additional: () => vue.createVNode(vue.Fragment, null, [vue.createVNode(__image, null, null), vue.createVNode(__preloadImage, null, null), vue.createVNode(__gradient, null, null), vue.createVNode(__placeholder, null, null), vue.createVNode(__error, null, null)]),
          default: slots.default
        }), [[vue.resolveDirective("intersect"), {
          handler: init,
          options: props.options
        }, null, {
          once: true
        }]]);
      });
      return {
        currentSrc,
        image,
        state,
        naturalWidth,
        naturalHeight
      };
    }
  });
  const makeVAvatarProps = propsFactory({
    start: Boolean,
    end: Boolean,
    icon: IconValue,
    image: String,
    text: String,
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeRoundedProps(),
    ...makeSizeProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "flat"
    })
  }, "VAvatar");
  const VAvatar = genericComponent()({
    name: "VAvatar",
    props: makeVAvatarProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        themeClasses
      } = provideTheme(props);
      const {
        colorClasses,
        colorStyles,
        variantClasses
      } = useVariant(props);
      const {
        densityClasses
      } = useDensity(props);
      const {
        roundedClasses
      } = useRounded(props);
      const {
        sizeClasses,
        sizeStyles
      } = useSize(props);
      useRender(() => vue.createVNode(props.tag, {
        "class": ["v-avatar", {
          "v-avatar--start": props.start,
          "v-avatar--end": props.end
        }, themeClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, sizeStyles.value, props.style]
      }, {
        default: () => [!slots.default ? props.image ? vue.createVNode(VImg, {
          "key": "image",
          "src": props.image,
          "alt": "",
          "cover": true
        }, null) : props.icon ? vue.createVNode(VIcon, {
          "key": "icon",
          "icon": props.icon
        }, null) : props.text : vue.createVNode(VDefaultsProvider, {
          "key": "content-defaults",
          "defaults": {
            VImg: {
              cover: true,
              image: props.image
            },
            VIcon: {
              icon: props.icon
            }
          }
        }, {
          default: () => [slots.default()]
        }), genOverlays(false, "v-avatar")]
      }));
      return {};
    }
  });
  const makeCardItemProps = propsFactory({
    appendAvatar: String,
    appendIcon: IconValue,
    prependAvatar: String,
    prependIcon: IconValue,
    subtitle: [String, Number],
    title: [String, Number],
    ...makeComponentProps(),
    ...makeDensityProps()
  }, "VCardItem");
  const VCardItem = genericComponent()({
    name: "VCardItem",
    props: makeCardItemProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      useRender(() => {
        var _a;
        const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
        const hasPrepend = !!(hasPrependMedia || slots.prepend);
        const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
        const hasAppend = !!(hasAppendMedia || slots.append);
        const hasTitle = !!(props.title != null || slots.title);
        const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
        return vue.createVNode("div", {
          "class": ["v-card-item", props.class],
          "style": props.style
        }, [hasPrepend && vue.createVNode("div", {
          "key": "prepend",
          "class": "v-card-item__prepend"
        }, [!slots.prepend ? vue.createVNode(vue.Fragment, null, [props.prependAvatar && vue.createVNode(VAvatar, {
          "key": "prepend-avatar",
          "density": props.density,
          "image": props.prependAvatar
        }, null), props.prependIcon && vue.createVNode(VIcon, {
          "key": "prepend-icon",
          "density": props.density,
          "icon": props.prependIcon
        }, null)]) : vue.createVNode(VDefaultsProvider, {
          "key": "prepend-defaults",
          "disabled": !hasPrependMedia,
          "defaults": {
            VAvatar: {
              density: props.density,
              image: props.prependAvatar
            },
            VIcon: {
              density: props.density,
              icon: props.prependIcon
            }
          }
        }, slots.prepend)]), vue.createVNode("div", {
          "class": "v-card-item__content"
        }, [hasTitle && vue.createVNode(VCardTitle, {
          "key": "title"
        }, {
          default: () => {
            var _a2;
            return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) ?? props.title];
          }
        }), hasSubtitle && vue.createVNode(VCardSubtitle, {
          "key": "subtitle"
        }, {
          default: () => {
            var _a2;
            return [((_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots)) ?? props.subtitle];
          }
        }), (_a = slots.default) == null ? void 0 : _a.call(slots)]), hasAppend && vue.createVNode("div", {
          "key": "append",
          "class": "v-card-item__append"
        }, [!slots.append ? vue.createVNode(vue.Fragment, null, [props.appendIcon && vue.createVNode(VIcon, {
          "key": "append-icon",
          "density": props.density,
          "icon": props.appendIcon
        }, null), props.appendAvatar && vue.createVNode(VAvatar, {
          "key": "append-avatar",
          "density": props.density,
          "image": props.appendAvatar
        }, null)]) : vue.createVNode(VDefaultsProvider, {
          "key": "append-defaults",
          "disabled": !hasAppendMedia,
          "defaults": {
            VAvatar: {
              density: props.density,
              image: props.appendAvatar
            },
            VIcon: {
              density: props.density,
              icon: props.appendIcon
            }
          }
        }, slots.append)])]);
      });
      return {};
    }
  });
  const makeVCardTextProps = propsFactory({
    opacity: [Number, String],
    ...makeComponentProps(),
    ...makeTagProps()
  }, "VCardText");
  const VCardText = genericComponent()({
    name: "VCardText",
    props: makeVCardTextProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      useRender(() => vue.createVNode(props.tag, {
        "class": ["v-card-text", props.class],
        "style": [{
          "--v-card-text-opacity": props.opacity
        }, props.style]
      }, slots));
      return {};
    }
  });
  const makeVCardProps = propsFactory({
    appendAvatar: String,
    appendIcon: IconValue,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    image: String,
    link: {
      type: Boolean,
      default: void 0
    },
    prependAvatar: String,
    prependIcon: IconValue,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    subtitle: [String, Number],
    text: [String, Number],
    title: [String, Number],
    ...makeBorderProps(),
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeLoaderProps(),
    ...makeLocationProps(),
    ...makePositionProps(),
    ...makeRoundedProps(),
    ...makeRouterProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "elevated"
    })
  }, "VCard");
  const VCard = genericComponent()({
    name: "VCard",
    directives: {
      Ripple
    },
    props: makeVCardProps(),
    setup(props, _ref) {
      let {
        attrs,
        slots
      } = _ref;
      const {
        themeClasses
      } = provideTheme(props);
      const {
        borderClasses
      } = useBorder(props);
      const {
        colorClasses,
        colorStyles,
        variantClasses
      } = useVariant(props);
      const {
        densityClasses
      } = useDensity(props);
      const {
        dimensionStyles
      } = useDimension(props);
      const {
        elevationClasses
      } = useElevation(props);
      const {
        loaderClasses
      } = useLoader(props);
      const {
        locationStyles
      } = useLocation(props);
      const {
        positionClasses
      } = usePosition(props);
      const {
        roundedClasses
      } = useRounded(props);
      const link = useLink(props, attrs);
      const isLink = vue.computed(() => props.link !== false && link.isLink.value);
      const isClickable = vue.computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
      useRender(() => {
        const Tag = isLink.value ? "a" : props.tag;
        const hasTitle = !!(slots.title || props.title != null);
        const hasSubtitle = !!(slots.subtitle || props.subtitle != null);
        const hasHeader = hasTitle || hasSubtitle;
        const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
        const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
        const hasImage = !!(slots.image || props.image);
        const hasCardItem = hasHeader || hasPrepend || hasAppend;
        const hasText = !!(slots.text || props.text != null);
        return vue.withDirectives(vue.createVNode(Tag, {
          "class": ["v-card", {
            "v-card--disabled": props.disabled,
            "v-card--flat": props.flat,
            "v-card--hover": props.hover && !(props.disabled || props.flat),
            "v-card--link": isClickable.value
          }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
          "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
          "href": link.href.value,
          "onClick": isClickable.value && link.navigate,
          "tabindex": props.disabled ? -1 : void 0
        }, {
          default: () => {
            var _a;
            return [hasImage && vue.createVNode("div", {
              "key": "image",
              "class": "v-card__image"
            }, [!slots.image ? vue.createVNode(VImg, {
              "key": "image-img",
              "cover": true,
              "src": props.image
            }, null) : vue.createVNode(VDefaultsProvider, {
              "key": "image-defaults",
              "disabled": !props.image,
              "defaults": {
                VImg: {
                  cover: true,
                  src: props.image
                }
              }
            }, slots.image)]), vue.createVNode(LoaderSlot, {
              "name": "v-card",
              "active": !!props.loading,
              "color": typeof props.loading === "boolean" ? void 0 : props.loading
            }, {
              default: slots.loader
            }), hasCardItem && vue.createVNode(VCardItem, {
              "key": "item",
              "prependAvatar": props.prependAvatar,
              "prependIcon": props.prependIcon,
              "title": props.title,
              "subtitle": props.subtitle,
              "appendAvatar": props.appendAvatar,
              "appendIcon": props.appendIcon
            }, {
              default: slots.item,
              prepend: slots.prepend,
              title: slots.title,
              subtitle: slots.subtitle,
              append: slots.append
            }), hasText && vue.createVNode(VCardText, {
              "key": "text"
            }, {
              default: () => {
                var _a2;
                return [((_a2 = slots.text) == null ? void 0 : _a2.call(slots)) ?? props.text];
              }
            }), (_a = slots.default) == null ? void 0 : _a.call(slots), slots.actions && vue.createVNode(VCardActions, null, {
              default: slots.actions
            }), genOverlays(isClickable.value, "v-card")];
          }
        }), [[vue.resolveDirective("ripple"), isClickable.value && props.ripple]]);
      });
      return {};
    }
  });
  function useRefs() {
    const refs = vue.ref([]);
    vue.onBeforeUpdate(() => refs.value = []);
    function updateRef(e, i) {
      refs.value[i] = e;
    }
    return {
      refs,
      updateRef
    };
  }
  const makeVPaginationProps = propsFactory({
    activeColor: String,
    start: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: Number,
      default: (props) => props.start
    },
    disabled: Boolean,
    length: {
      type: [Number, String],
      default: 1,
      validator: (val) => val % 1 === 0
    },
    totalVisible: [Number, String],
    firstIcon: {
      type: IconValue,
      default: "$first"
    },
    prevIcon: {
      type: IconValue,
      default: "$prev"
    },
    nextIcon: {
      type: IconValue,
      default: "$next"
    },
    lastIcon: {
      type: IconValue,
      default: "$last"
    },
    ariaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.root"
    },
    pageAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.page"
    },
    currentPageAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.currentPage"
    },
    firstAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.first"
    },
    previousAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.previous"
    },
    nextAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.next"
    },
    lastAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.last"
    },
    ellipsis: {
      type: String,
      default: "..."
    },
    showFirstLastPage: Boolean,
    ...makeBorderProps(),
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeElevationProps(),
    ...makeRoundedProps(),
    ...makeSizeProps(),
    ...makeTagProps({
      tag: "nav"
    }),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "text"
    })
  }, "VPagination");
  const VPagination = genericComponent()({
    name: "VPagination",
    props: makeVPaginationProps(),
    emits: {
      "update:modelValue": (value) => true,
      first: (value) => true,
      prev: (value) => true,
      next: (value) => true,
      last: (value) => true
    },
    setup(props, _ref) {
      let {
        slots,
        emit
      } = _ref;
      const page = useProxiedModel(props, "modelValue");
      const {
        t,
        n
      } = useLocale();
      const {
        isRtl
      } = useRtl();
      const {
        themeClasses
      } = provideTheme(props);
      const {
        width
      } = useDisplay();
      const maxButtons = vue.shallowRef(-1);
      provideDefaults(void 0, {
        scoped: true
      });
      const {
        resizeRef
      } = useResizeObserver((entries) => {
        if (!entries.length)
          return;
        const {
          target,
          contentRect
        } = entries[0];
        const firstItem = target.querySelector(".v-pagination__list > *");
        if (!firstItem)
          return;
        const totalWidth = contentRect.width;
        const itemWidth = firstItem.offsetWidth + parseFloat(getComputedStyle(firstItem).marginRight) * 2;
        maxButtons.value = getMax(totalWidth, itemWidth);
      });
      const length = vue.computed(() => parseInt(props.length, 10));
      const start = vue.computed(() => parseInt(props.start, 10));
      const totalVisible = vue.computed(() => {
        if (props.totalVisible != null)
          return parseInt(props.totalVisible, 10);
        else if (maxButtons.value >= 0)
          return maxButtons.value;
        return getMax(width.value, 58);
      });
      function getMax(totalWidth, itemWidth) {
        const minButtons = props.showFirstLastPage ? 5 : 3;
        return Math.max(0, Math.floor(
          // Round to two decimal places to avoid floating point errors
          +((totalWidth - itemWidth * minButtons) / itemWidth).toFixed(2)
        ));
      }
      const range = vue.computed(() => {
        if (length.value <= 0 || isNaN(length.value) || length.value > Number.MAX_SAFE_INTEGER)
          return [];
        if (totalVisible.value <= 0)
          return [];
        else if (totalVisible.value === 1)
          return [page.value];
        if (length.value <= totalVisible.value) {
          return createRange(length.value, start.value);
        }
        const even = totalVisible.value % 2 === 0;
        const middle = even ? totalVisible.value / 2 : Math.floor(totalVisible.value / 2);
        const left = even ? middle : middle + 1;
        const right = length.value - middle;
        if (left - page.value >= 0) {
          return [...createRange(Math.max(1, totalVisible.value - 1), start.value), props.ellipsis, length.value];
        } else if (page.value - right >= (even ? 1 : 0)) {
          const rangeLength = totalVisible.value - 1;
          const rangeStart = length.value - rangeLength + start.value;
          return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart)];
        } else {
          const rangeLength = Math.max(1, totalVisible.value - 3);
          const rangeStart = rangeLength === 1 ? page.value : page.value - Math.ceil(rangeLength / 2) + start.value;
          return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart), props.ellipsis, length.value];
        }
      });
      function setValue(e, value, event) {
        e.preventDefault();
        page.value = value;
        event && emit(event, value);
      }
      const {
        refs,
        updateRef
      } = useRefs();
      provideDefaults({
        VPaginationBtn: {
          color: vue.toRef(props, "color"),
          border: vue.toRef(props, "border"),
          density: vue.toRef(props, "density"),
          size: vue.toRef(props, "size"),
          variant: vue.toRef(props, "variant"),
          rounded: vue.toRef(props, "rounded"),
          elevation: vue.toRef(props, "elevation")
        }
      });
      const items = vue.computed(() => {
        return range.value.map((item, index) => {
          const ref2 = (e) => updateRef(e, index);
          if (typeof item === "string") {
            return {
              isActive: false,
              key: `ellipsis-${index}`,
              page: item,
              props: {
                ref: ref2,
                ellipsis: true,
                icon: true,
                disabled: true
              }
            };
          } else {
            const isActive = item === page.value;
            return {
              isActive,
              key: item,
              page: n(item),
              props: {
                ref: ref2,
                ellipsis: false,
                icon: true,
                disabled: !!props.disabled || +props.length < 2,
                color: isActive ? props.activeColor : props.color,
                "aria-current": isActive,
                "aria-label": t(isActive ? props.currentPageAriaLabel : props.pageAriaLabel, item),
                onClick: (e) => setValue(e, item)
              }
            };
          }
        });
      });
      const controls = vue.computed(() => {
        const prevDisabled = !!props.disabled || page.value <= start.value;
        const nextDisabled = !!props.disabled || page.value >= start.value + length.value - 1;
        return {
          first: props.showFirstLastPage ? {
            icon: isRtl.value ? props.lastIcon : props.firstIcon,
            onClick: (e) => setValue(e, start.value, "first"),
            disabled: prevDisabled,
            "aria-label": t(props.firstAriaLabel),
            "aria-disabled": prevDisabled
          } : void 0,
          prev: {
            icon: isRtl.value ? props.nextIcon : props.prevIcon,
            onClick: (e) => setValue(e, page.value - 1, "prev"),
            disabled: prevDisabled,
            "aria-label": t(props.previousAriaLabel),
            "aria-disabled": prevDisabled
          },
          next: {
            icon: isRtl.value ? props.prevIcon : props.nextIcon,
            onClick: (e) => setValue(e, page.value + 1, "next"),
            disabled: nextDisabled,
            "aria-label": t(props.nextAriaLabel),
            "aria-disabled": nextDisabled
          },
          last: props.showFirstLastPage ? {
            icon: isRtl.value ? props.firstIcon : props.lastIcon,
            onClick: (e) => setValue(e, start.value + length.value - 1, "last"),
            disabled: nextDisabled,
            "aria-label": t(props.lastAriaLabel),
            "aria-disabled": nextDisabled
          } : void 0
        };
      });
      function updateFocus() {
        var _a;
        const currentIndex = page.value - start.value;
        (_a = refs.value[currentIndex]) == null ? void 0 : _a.$el.focus();
      }
      function onKeydown(e) {
        if (e.key === keyValues.left && !props.disabled && page.value > +props.start) {
          page.value = page.value - 1;
          vue.nextTick(updateFocus);
        } else if (e.key === keyValues.right && !props.disabled && page.value < start.value + length.value - 1) {
          page.value = page.value + 1;
          vue.nextTick(updateFocus);
        }
      }
      useRender(() => vue.createVNode(props.tag, {
        "ref": resizeRef,
        "class": ["v-pagination", themeClasses.value, props.class],
        "style": props.style,
        "role": "navigation",
        "aria-label": t(props.ariaLabel),
        "onKeydown": onKeydown,
        "data-test": "v-pagination-root"
      }, {
        default: () => [vue.createVNode("ul", {
          "class": "v-pagination__list"
        }, [props.showFirstLastPage && vue.createVNode("li", {
          "key": "first",
          "class": "v-pagination__first",
          "data-test": "v-pagination-first"
        }, [slots.first ? slots.first(controls.value.first) : vue.createVNode(VBtn, vue.mergeProps({
          "_as": "VPaginationBtn"
        }, controls.value.first), null)]), vue.createVNode("li", {
          "key": "prev",
          "class": "v-pagination__prev",
          "data-test": "v-pagination-prev"
        }, [slots.prev ? slots.prev(controls.value.prev) : vue.createVNode(VBtn, vue.mergeProps({
          "_as": "VPaginationBtn"
        }, controls.value.prev), null)]), items.value.map((item, index) => vue.createVNode("li", {
          "key": item.key,
          "class": ["v-pagination__item", {
            "v-pagination__item--is-active": item.isActive
          }],
          "data-test": "v-pagination-item"
        }, [slots.item ? slots.item(item) : vue.createVNode(VBtn, vue.mergeProps({
          "_as": "VPaginationBtn"
        }, item.props), {
          default: () => [item.page]
        })])), vue.createVNode("li", {
          "key": "next",
          "class": "v-pagination__next",
          "data-test": "v-pagination-next"
        }, [slots.next ? slots.next(controls.value.next) : vue.createVNode(VBtn, vue.mergeProps({
          "_as": "VPaginationBtn"
        }, controls.value.next), null)]), props.showFirstLastPage && vue.createVNode("li", {
          "key": "last",
          "class": "v-pagination__last",
          "data-test": "v-pagination-last"
        }, [slots.last ? slots.last(controls.value.last) : vue.createVNode(VBtn, vue.mergeProps({
          "_as": "VPaginationBtn"
        }, controls.value.last), null)])])]
      }));
      return {};
    }
  });
  const makeTransitionProps = propsFactory({
    disabled: Boolean,
    group: Boolean,
    hideOnLeave: Boolean,
    leaveAbsolute: Boolean,
    mode: String,
    origin: String
  }, "transition");
  function createCssTransition(name, origin, mode) {
    return genericComponent()({
      name,
      props: makeTransitionProps({
        mode,
        origin
      }),
      setup(props, _ref) {
        let {
          slots
        } = _ref;
        const functions = {
          onBeforeEnter(el) {
            if (props.origin) {
              el.style.transformOrigin = props.origin;
            }
          },
          onLeave(el) {
            if (props.leaveAbsolute) {
              const {
                offsetTop,
                offsetLeft,
                offsetWidth,
                offsetHeight
              } = el;
              el._transitionInitialStyles = {
                position: el.style.position,
                top: el.style.top,
                left: el.style.left,
                width: el.style.width,
                height: el.style.height
              };
              el.style.position = "absolute";
              el.style.top = `${offsetTop}px`;
              el.style.left = `${offsetLeft}px`;
              el.style.width = `${offsetWidth}px`;
              el.style.height = `${offsetHeight}px`;
            }
            if (props.hideOnLeave) {
              el.style.setProperty("display", "none", "important");
            }
          },
          onAfterLeave(el) {
            if (props.leaveAbsolute && (el == null ? void 0 : el._transitionInitialStyles)) {
              const {
                position,
                top,
                left,
                width,
                height
              } = el._transitionInitialStyles;
              delete el._transitionInitialStyles;
              el.style.position = position || "";
              el.style.top = top || "";
              el.style.left = left || "";
              el.style.width = width || "";
              el.style.height = height || "";
            }
          }
        };
        return () => {
          const tag = props.group ? vue.TransitionGroup : vue.Transition;
          return vue.h(tag, {
            name: props.disabled ? "" : name,
            css: !props.disabled,
            ...props.group ? void 0 : {
              mode: props.mode
            },
            ...props.disabled ? {} : functions
          }, slots.default);
        };
      }
    });
  }
  function createJavascriptTransition(name, functions) {
    let mode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
    return genericComponent()({
      name,
      props: {
        mode: {
          type: String,
          default: mode
        },
        disabled: Boolean,
        group: Boolean
      },
      setup(props, _ref2) {
        let {
          slots
        } = _ref2;
        const tag = props.group ? vue.TransitionGroup : vue.Transition;
        return () => {
          return vue.h(tag, {
            name: props.disabled ? "" : name,
            css: !props.disabled,
            // mode: props.mode, // TODO: vuejs/vue-next#3104
            ...props.disabled ? {} : functions
          }, slots.default);
        };
      }
    });
  }
  function ExpandTransitionGenerator() {
    let expandedParentClass = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const sizeProperty = x ? "width" : "height";
    const offsetProperty = vue.camelize(`offset-${sizeProperty}`);
    return {
      onBeforeEnter(el) {
        el._parent = el.parentNode;
        el._initialStyle = {
          transition: el.style.transition,
          overflow: el.style.overflow,
          [sizeProperty]: el.style[sizeProperty]
        };
      },
      onEnter(el) {
        const initialStyle = el._initialStyle;
        el.style.setProperty("transition", "none", "important");
        el.style.overflow = "hidden";
        const offset = `${el[offsetProperty]}px`;
        el.style[sizeProperty] = "0";
        void el.offsetHeight;
        el.style.transition = initialStyle.transition;
        if (expandedParentClass && el._parent) {
          el._parent.classList.add(expandedParentClass);
        }
        requestAnimationFrame(() => {
          el.style[sizeProperty] = offset;
        });
      },
      onAfterEnter: resetStyles,
      onEnterCancelled: resetStyles,
      onLeave(el) {
        el._initialStyle = {
          transition: "",
          overflow: el.style.overflow,
          [sizeProperty]: el.style[sizeProperty]
        };
        el.style.overflow = "hidden";
        el.style[sizeProperty] = `${el[offsetProperty]}px`;
        void el.offsetHeight;
        requestAnimationFrame(() => el.style[sizeProperty] = "0");
      },
      onAfterLeave,
      onLeaveCancelled: onAfterLeave
    };
    function onAfterLeave(el) {
      if (expandedParentClass && el._parent) {
        el._parent.classList.remove(expandedParentClass);
      }
      resetStyles(el);
    }
    function resetStyles(el) {
      const size = el._initialStyle[sizeProperty];
      el.style.overflow = el._initialStyle.overflow;
      if (size != null)
        el.style[sizeProperty] = size;
      delete el._initialStyle;
    }
  }
  const makeVDialogTransitionProps = propsFactory({
    target: [Object, Array]
  }, "v-dialog-transition");
  const VDialogTransition = genericComponent()({
    name: "VDialogTransition",
    props: makeVDialogTransitionProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const functions = {
        onBeforeEnter(el) {
          el.style.pointerEvents = "none";
          el.style.visibility = "hidden";
        },
        async onEnter(el, done) {
          var _a;
          await new Promise((resolve) => requestAnimationFrame(resolve));
          await new Promise((resolve) => requestAnimationFrame(resolve));
          el.style.visibility = "";
          const {
            x,
            y,
            sx,
            sy,
            speed
          } = getDimensions(props.target, el);
          const animation = animate(el, [{
            transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
            opacity: 0
          }, {}], {
            duration: 225 * speed,
            easing: deceleratedEasing
          });
          (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
            animate(el2, [{
              opacity: 0
            }, {
              opacity: 0,
              offset: 0.33
            }, {}], {
              duration: 225 * 2 * speed,
              easing: standardEasing
            });
          });
          animation.finished.then(() => done());
        },
        onAfterEnter(el) {
          el.style.removeProperty("pointer-events");
        },
        onBeforeLeave(el) {
          el.style.pointerEvents = "none";
        },
        async onLeave(el, done) {
          var _a;
          await new Promise((resolve) => requestAnimationFrame(resolve));
          const {
            x,
            y,
            sx,
            sy,
            speed
          } = getDimensions(props.target, el);
          const animation = animate(el, [{}, {
            transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
            opacity: 0
          }], {
            duration: 125 * speed,
            easing: acceleratedEasing
          });
          animation.finished.then(() => done());
          (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
            animate(el2, [{}, {
              opacity: 0,
              offset: 0.2
            }, {
              opacity: 0
            }], {
              duration: 125 * 2 * speed,
              easing: standardEasing
            });
          });
        },
        onAfterLeave(el) {
          el.style.removeProperty("pointer-events");
        }
      };
      return () => {
        return props.target ? vue.createVNode(vue.Transition, vue.mergeProps({
          "name": "dialog-transition"
        }, functions, {
          "css": false
        }), slots) : vue.createVNode(vue.Transition, {
          "name": "dialog-transition"
        }, slots);
      };
    }
  });
  function getChildren(el) {
    var _a;
    const els = (_a = el.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a.children;
    return els && [...els];
  }
  function getDimensions(target, el) {
    const targetBox = getTargetBox(target);
    const elBox = nullifyTransforms(el);
    const [originX, originY] = getComputedStyle(el).transformOrigin.split(" ").map((v) => parseFloat(v));
    const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue("--v-overlay-anchor-origin").split(" ");
    let offsetX = targetBox.left + targetBox.width / 2;
    if (anchorSide === "left" || anchorOffset === "left") {
      offsetX -= targetBox.width / 2;
    } else if (anchorSide === "right" || anchorOffset === "right") {
      offsetX += targetBox.width / 2;
    }
    let offsetY = targetBox.top + targetBox.height / 2;
    if (anchorSide === "top" || anchorOffset === "top") {
      offsetY -= targetBox.height / 2;
    } else if (anchorSide === "bottom" || anchorOffset === "bottom") {
      offsetY += targetBox.height / 2;
    }
    const tsx = targetBox.width / elBox.width;
    const tsy = targetBox.height / elBox.height;
    const maxs = Math.max(1, tsx, tsy);
    const sx = tsx / maxs || 0;
    const sy = tsy / maxs || 0;
    const asa = elBox.width * elBox.height / (window.innerWidth * window.innerHeight);
    const speed = asa > 0.12 ? Math.min(1.5, (asa - 0.12) * 10 + 1) : 1;
    return {
      x: offsetX - (originX + elBox.left),
      y: offsetY - (originY + elBox.top),
      sx,
      sy,
      speed
    };
  }
  createCssTransition("fab-transition", "center center", "out-in");
  createCssTransition("dialog-bottom-transition");
  createCssTransition("dialog-top-transition");
  const VFadeTransition = createCssTransition("fade-transition");
  createCssTransition("scale-transition");
  createCssTransition("scroll-x-transition");
  createCssTransition("scroll-x-reverse-transition");
  createCssTransition("scroll-y-transition");
  createCssTransition("scroll-y-reverse-transition");
  createCssTransition("slide-x-transition");
  createCssTransition("slide-x-reverse-transition");
  const VSlideYTransition = createCssTransition("slide-y-transition");
  createCssTransition("slide-y-reverse-transition");
  const VExpandTransition = createJavascriptTransition("expand-transition", ExpandTransitionGenerator());
  const VExpandXTransition = createJavascriptTransition("expand-x-transition", ExpandTransitionGenerator("", true));
  const makeVLabelProps = propsFactory({
    text: String,
    onClick: EventProp(),
    ...makeComponentProps(),
    ...makeThemeProps()
  }, "VLabel");
  const VLabel = genericComponent()({
    name: "VLabel",
    props: makeVLabelProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      useRender(() => {
        var _a;
        return vue.createVNode("label", {
          "class": ["v-label", {
            "v-label--clickable": !!props.onClick
          }, props.class],
          "style": props.style,
          "onClick": props.onClick
        }, [props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)]);
      });
      return {};
    }
  });
  const VSelectionControlGroupSymbol = Symbol.for("vuetify:selection-control-group");
  const makeSelectionControlGroupProps = propsFactory({
    color: String,
    disabled: {
      type: Boolean,
      default: null
    },
    defaultsTarget: String,
    error: Boolean,
    id: String,
    inline: Boolean,
    falseIcon: IconValue,
    trueIcon: IconValue,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    multiple: {
      type: Boolean,
      default: null
    },
    name: String,
    readonly: {
      type: Boolean,
      default: null
    },
    modelValue: null,
    type: String,
    valueComparator: {
      type: Function,
      default: deepEqual
    },
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeThemeProps()
  }, "SelectionControlGroup");
  const makeVSelectionControlGroupProps = propsFactory({
    ...makeSelectionControlGroupProps({
      defaultsTarget: "VSelectionControl"
    })
  }, "VSelectionControlGroup");
  genericComponent()({
    name: "VSelectionControlGroup",
    props: makeVSelectionControlGroupProps(),
    emits: {
      "update:modelValue": (value) => true
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const modelValue = useProxiedModel(props, "modelValue");
      const uid = getUid();
      const id = vue.computed(() => props.id || `v-selection-control-group-${uid}`);
      const name = vue.computed(() => props.name || id.value);
      const updateHandlers = /* @__PURE__ */ new Set();
      vue.provide(VSelectionControlGroupSymbol, {
        modelValue,
        forceUpdate: () => {
          updateHandlers.forEach((fn) => fn());
        },
        onForceUpdate: (cb) => {
          updateHandlers.add(cb);
          vue.onScopeDispose(() => {
            updateHandlers.delete(cb);
          });
        }
      });
      provideDefaults({
        [props.defaultsTarget]: {
          color: vue.toRef(props, "color"),
          disabled: vue.toRef(props, "disabled"),
          density: vue.toRef(props, "density"),
          error: vue.toRef(props, "error"),
          inline: vue.toRef(props, "inline"),
          modelValue,
          multiple: vue.computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value)),
          name,
          falseIcon: vue.toRef(props, "falseIcon"),
          trueIcon: vue.toRef(props, "trueIcon"),
          readonly: vue.toRef(props, "readonly"),
          ripple: vue.toRef(props, "ripple"),
          type: vue.toRef(props, "type"),
          valueComparator: vue.toRef(props, "valueComparator")
        }
      });
      useRender(() => {
        var _a;
        return vue.createVNode("div", {
          "class": ["v-selection-control-group", {
            "v-selection-control-group--inline": props.inline
          }, props.class],
          "style": props.style,
          "role": props.type === "radio" ? "radiogroup" : void 0
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      });
      return {};
    }
  });
  const makeVSelectionControlProps = propsFactory({
    label: String,
    baseColor: String,
    trueValue: null,
    falseValue: null,
    value: null,
    ...makeComponentProps(),
    ...makeSelectionControlGroupProps()
  }, "VSelectionControl");
  function useSelectionControl(props) {
    const group = vue.inject(VSelectionControlGroupSymbol, void 0);
    const {
      densityClasses
    } = useDensity(props);
    const modelValue = useProxiedModel(props, "modelValue");
    const trueValue = vue.computed(() => props.trueValue !== void 0 ? props.trueValue : props.value !== void 0 ? props.value : true);
    const falseValue = vue.computed(() => props.falseValue !== void 0 ? props.falseValue : false);
    const isMultiple = vue.computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value));
    const model = vue.computed({
      get() {
        const val = group ? group.modelValue.value : modelValue.value;
        return isMultiple.value ? wrapInArray(val).some((v) => props.valueComparator(v, trueValue.value)) : props.valueComparator(val, trueValue.value);
      },
      set(val) {
        if (props.readonly)
          return;
        const currentValue = val ? trueValue.value : falseValue.value;
        let newVal = currentValue;
        if (isMultiple.value) {
          newVal = val ? [...wrapInArray(modelValue.value), currentValue] : wrapInArray(modelValue.value).filter((item) => !props.valueComparator(item, trueValue.value));
        }
        if (group) {
          group.modelValue.value = newVal;
        } else {
          modelValue.value = newVal;
        }
      }
    });
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(vue.computed(() => {
      if (props.error || props.disabled)
        return void 0;
      return model.value ? props.color : props.baseColor;
    }));
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(vue.computed(() => {
      return model.value && !props.error && !props.disabled ? props.color : props.baseColor;
    }));
    const icon = vue.computed(() => model.value ? props.trueIcon : props.falseIcon);
    return {
      group,
      densityClasses,
      trueValue,
      falseValue,
      model,
      textColorClasses,
      textColorStyles,
      backgroundColorClasses,
      backgroundColorStyles,
      icon
    };
  }
  const VSelectionControl = genericComponent()({
    name: "VSelectionControl",
    directives: {
      Ripple
    },
    inheritAttrs: false,
    props: makeVSelectionControlProps(),
    emits: {
      "update:modelValue": (value) => true
    },
    setup(props, _ref) {
      let {
        attrs,
        slots
      } = _ref;
      const {
        group,
        densityClasses,
        icon,
        model,
        textColorClasses,
        textColorStyles,
        backgroundColorClasses,
        backgroundColorStyles,
        trueValue
      } = useSelectionControl(props);
      const uid = getUid();
      const isFocused = vue.shallowRef(false);
      const isFocusVisible = vue.shallowRef(false);
      const input = vue.ref();
      const id = vue.computed(() => props.id || `input-${uid}`);
      const isInteractive = vue.computed(() => !props.disabled && !props.readonly);
      group == null ? void 0 : group.onForceUpdate(() => {
        if (input.value) {
          input.value.checked = model.value;
        }
      });
      function onFocus(e) {
        if (!isInteractive.value)
          return;
        isFocused.value = true;
        if (matchesSelector(e.target, ":focus-visible") !== false) {
          isFocusVisible.value = true;
        }
      }
      function onBlur() {
        isFocused.value = false;
        isFocusVisible.value = false;
      }
      function onClickLabel(e) {
        e.stopPropagation();
      }
      function onInput(e) {
        if (!isInteractive.value)
          return;
        if (props.readonly && group) {
          vue.nextTick(() => group.forceUpdate());
        }
        model.value = e.target.checked;
      }
      useRender(() => {
        var _a, _b;
        const label = slots.label ? slots.label({
          label: props.label,
          props: {
            for: id.value
          }
        }) : props.label;
        const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
        const inputNode = vue.createVNode("input", vue.mergeProps({
          "ref": input,
          "checked": model.value,
          "disabled": !!props.disabled,
          "id": id.value,
          "onBlur": onBlur,
          "onFocus": onFocus,
          "onInput": onInput,
          "aria-disabled": !!props.disabled,
          "aria-label": props.label,
          "type": props.type,
          "value": trueValue.value,
          "name": props.name,
          "aria-checked": props.type === "checkbox" ? model.value : void 0
        }, inputAttrs), null);
        return vue.createVNode("div", vue.mergeProps({
          "class": ["v-selection-control", {
            "v-selection-control--dirty": model.value,
            "v-selection-control--disabled": props.disabled,
            "v-selection-control--error": props.error,
            "v-selection-control--focused": isFocused.value,
            "v-selection-control--focus-visible": isFocusVisible.value,
            "v-selection-control--inline": props.inline
          }, densityClasses.value, props.class]
        }, rootAttrs, {
          "style": props.style
        }), [vue.createVNode("div", {
          "class": ["v-selection-control__wrapper", textColorClasses.value],
          "style": textColorStyles.value
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          backgroundColorClasses,
          backgroundColorStyles
        }), vue.withDirectives(vue.createVNode("div", {
          "class": ["v-selection-control__input"]
        }, [((_b = slots.input) == null ? void 0 : _b.call(slots, {
          model,
          textColorClasses,
          textColorStyles,
          backgroundColorClasses,
          backgroundColorStyles,
          inputNode,
          icon: icon.value,
          props: {
            onFocus,
            onBlur,
            id: id.value
          }
        })) ?? vue.createVNode(vue.Fragment, null, [icon.value && vue.createVNode(VIcon, {
          "key": "icon",
          "icon": icon.value
        }, null), inputNode])]), [[vue.resolveDirective("ripple"), props.ripple && [!props.disabled && !props.readonly, null, ["center", "circle"]]]])]), label && vue.createVNode(VLabel, {
          "for": id.value,
          "onClick": onClickLabel
        }, {
          default: () => [label]
        })]);
      });
      return {
        isFocused,
        input
      };
    }
  });
  const makeVCheckboxBtnProps = propsFactory({
    indeterminate: Boolean,
    indeterminateIcon: {
      type: IconValue,
      default: "$checkboxIndeterminate"
    },
    ...makeVSelectionControlProps({
      falseIcon: "$checkboxOff",
      trueIcon: "$checkboxOn"
    })
  }, "VCheckboxBtn");
  const VCheckboxBtn = genericComponent()({
    name: "VCheckboxBtn",
    props: makeVCheckboxBtnProps(),
    emits: {
      "update:modelValue": (value) => true,
      "update:indeterminate": (value) => true
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const indeterminate = useProxiedModel(props, "indeterminate");
      const model = useProxiedModel(props, "modelValue");
      function onChange(v) {
        if (indeterminate.value) {
          indeterminate.value = false;
        }
      }
      const falseIcon = vue.computed(() => {
        return indeterminate.value ? props.indeterminateIcon : props.falseIcon;
      });
      const trueIcon = vue.computed(() => {
        return indeterminate.value ? props.indeterminateIcon : props.trueIcon;
      });
      useRender(() => {
        const controlProps = omit(VSelectionControl.filterProps(props), ["modelValue"]);
        return vue.createVNode(VSelectionControl, vue.mergeProps(controlProps, {
          "modelValue": model.value,
          "onUpdate:modelValue": [($event) => model.value = $event, onChange],
          "class": ["v-checkbox-btn", props.class],
          "style": props.style,
          "type": "checkbox",
          "falseIcon": falseIcon.value,
          "trueIcon": trueIcon.value,
          "aria-checked": indeterminate.value ? "mixed" : void 0
        }), slots);
      });
      return {};
    }
  });
  function useInputIcon(props) {
    const {
      t
    } = useLocale();
    function InputIcon(_ref) {
      let {
        name
      } = _ref;
      const localeKey = {
        prepend: "prependAction",
        prependInner: "prependAction",
        append: "appendAction",
        appendInner: "appendAction",
        clear: "clear"
      }[name];
      const listener = props[`onClick:${name}`];
      const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? "") : void 0;
      return vue.createVNode(VIcon, {
        "icon": props[`${name}Icon`],
        "aria-label": label,
        "onClick": listener
      }, null);
    }
    return {
      InputIcon
    };
  }
  const makeVMessagesProps = propsFactory({
    active: Boolean,
    color: String,
    messages: {
      type: [Array, String],
      default: () => []
    },
    ...makeComponentProps(),
    ...makeTransitionProps$1({
      transition: {
        component: VSlideYTransition,
        leaveAbsolute: true,
        group: true
      }
    })
  }, "VMessages");
  const VMessages = genericComponent()({
    name: "VMessages",
    props: makeVMessagesProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const messages = vue.computed(() => wrapInArray(props.messages));
      const {
        textColorClasses,
        textColorStyles
      } = useTextColor(vue.computed(() => props.color));
      useRender(() => vue.createVNode(MaybeTransition, {
        "transition": props.transition,
        "tag": "div",
        "class": ["v-messages", textColorClasses.value, props.class],
        "style": [textColorStyles.value, props.style],
        "role": "alert",
        "aria-live": "polite"
      }, {
        default: () => [props.active && messages.value.map((message, i) => vue.createVNode("div", {
          "class": "v-messages__message",
          "key": `${i}-${messages.value}`
        }, [slots.message ? slots.message({
          message
        }) : message]))]
      }));
      return {};
    }
  });
  const makeFocusProps = propsFactory({
    focused: Boolean,
    "onUpdate:focused": EventProp()
  }, "focus");
  function useFocus(props) {
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    const isFocused = useProxiedModel(props, "focused");
    const focusClasses = vue.computed(() => {
      return {
        [`${name}--focused`]: isFocused.value
      };
    });
    function focus() {
      isFocused.value = true;
    }
    function blur() {
      isFocused.value = false;
    }
    return {
      focusClasses,
      isFocused,
      focus,
      blur
    };
  }
  const FormKey = Symbol.for("vuetify:form");
  function useForm() {
    return vue.inject(FormKey, null);
  }
  const makeValidationProps = propsFactory({
    disabled: {
      type: Boolean,
      default: null
    },
    error: Boolean,
    errorMessages: {
      type: [Array, String],
      default: () => []
    },
    maxErrors: {
      type: [Number, String],
      default: 1
    },
    name: String,
    label: String,
    readonly: {
      type: Boolean,
      default: null
    },
    rules: {
      type: Array,
      default: () => []
    },
    modelValue: null,
    validateOn: String,
    validationValue: null,
    ...makeFocusProps()
  }, "validation");
  function useValidation(props) {
    let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
    let id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : getUid();
    const model = useProxiedModel(props, "modelValue");
    const validationModel = vue.computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
    const form = useForm();
    const internalErrorMessages = vue.ref([]);
    const isPristine = vue.shallowRef(true);
    const isDirty = vue.computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
    const isDisabled = vue.computed(() => !!(props.disabled ?? (form == null ? void 0 : form.isDisabled.value)));
    const isReadonly = vue.computed(() => !!(props.readonly ?? (form == null ? void 0 : form.isReadonly.value)));
    const errorMessages = vue.computed(() => {
      var _a;
      return ((_a = props.errorMessages) == null ? void 0 : _a.length) ? wrapInArray(props.errorMessages).concat(internalErrorMessages.value).slice(0, Math.max(0, +props.maxErrors)) : internalErrorMessages.value;
    });
    const validateOn = vue.computed(() => {
      let value = (props.validateOn ?? (form == null ? void 0 : form.validateOn.value)) || "input";
      if (value === "lazy")
        value = "input lazy";
      const set = new Set((value == null ? void 0 : value.split(" ")) ?? []);
      return {
        blur: set.has("blur") || set.has("input"),
        input: set.has("input"),
        submit: set.has("submit"),
        lazy: set.has("lazy")
      };
    });
    const isValid2 = vue.computed(() => {
      var _a;
      if (props.error || ((_a = props.errorMessages) == null ? void 0 : _a.length))
        return false;
      if (!props.rules.length)
        return true;
      if (isPristine.value) {
        return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
      } else {
        return !internalErrorMessages.value.length;
      }
    });
    const isValidating = vue.shallowRef(false);
    const validationClasses = vue.computed(() => {
      return {
        [`${name}--error`]: isValid2.value === false,
        [`${name}--dirty`]: isDirty.value,
        [`${name}--disabled`]: isDisabled.value,
        [`${name}--readonly`]: isReadonly.value
      };
    });
    const vm = getCurrentInstance("validation");
    const uid = vue.computed(() => props.name ?? vue.unref(id));
    vue.onBeforeMount(() => {
      form == null ? void 0 : form.register({
        id: uid.value,
        vm,
        validate,
        reset,
        resetValidation
      });
    });
    vue.onBeforeUnmount(() => {
      form == null ? void 0 : form.unregister(uid.value);
    });
    vue.onMounted(async () => {
      if (!validateOn.value.lazy) {
        await validate(true);
      }
      form == null ? void 0 : form.update(uid.value, isValid2.value, errorMessages.value);
    });
    useToggleScope(() => validateOn.value.input, () => {
      vue.watch(validationModel, () => {
        if (validationModel.value != null) {
          validate();
        } else if (props.focused) {
          const unwatch = vue.watch(() => props.focused, (val) => {
            if (!val)
              validate();
            unwatch();
          });
        }
      });
    });
    useToggleScope(() => validateOn.value.blur, () => {
      vue.watch(() => props.focused, (val) => {
        if (!val)
          validate();
      });
    });
    vue.watch([isValid2, errorMessages], () => {
      form == null ? void 0 : form.update(uid.value, isValid2.value, errorMessages.value);
    });
    async function reset() {
      model.value = null;
      await vue.nextTick();
      await resetValidation();
    }
    async function resetValidation() {
      isPristine.value = true;
      if (!validateOn.value.lazy) {
        await validate(true);
      } else {
        internalErrorMessages.value = [];
      }
    }
    async function validate() {
      let silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      const results = [];
      isValidating.value = true;
      for (const rule of props.rules) {
        if (results.length >= +(props.maxErrors ?? 1)) {
          break;
        }
        const handler = typeof rule === "function" ? rule : () => rule;
        const result = await handler(validationModel.value);
        if (result === true)
          continue;
        if (result !== false && typeof result !== "string") {
          console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        results.push(result || "");
      }
      internalErrorMessages.value = results;
      isValidating.value = false;
      isPristine.value = silent;
      return internalErrorMessages.value;
    }
    return {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid: isValid2,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    };
  }
  const makeVInputProps = propsFactory({
    id: String,
    appendIcon: IconValue,
    centerAffix: {
      type: Boolean,
      default: true
    },
    prependIcon: IconValue,
    hideDetails: [Boolean, String],
    hideSpinButtons: Boolean,
    hint: String,
    persistentHint: Boolean,
    messages: {
      type: [Array, String],
      default: () => []
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (v) => ["horizontal", "vertical"].includes(v)
    },
    "onClick:prepend": EventProp(),
    "onClick:append": EventProp(),
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...only(makeDimensionProps(), ["maxWidth", "minWidth", "width"]),
    ...makeThemeProps(),
    ...makeValidationProps()
  }, "VInput");
  const VInput = genericComponent()({
    name: "VInput",
    props: {
      ...makeVInputProps()
    },
    emits: {
      "update:modelValue": (value) => true
    },
    setup(props, _ref) {
      let {
        attrs,
        slots,
        emit
      } = _ref;
      const {
        densityClasses
      } = useDensity(props);
      const {
        dimensionStyles
      } = useDimension(props);
      const {
        themeClasses
      } = provideTheme(props);
      const {
        rtlClasses
      } = useRtl();
      const {
        InputIcon
      } = useInputIcon(props);
      const uid = getUid();
      const id = vue.computed(() => props.id || `input-${uid}`);
      const messagesId = vue.computed(() => `${id.value}-messages`);
      const {
        errorMessages,
        isDirty,
        isDisabled,
        isReadonly,
        isPristine,
        isValid: isValid2,
        isValidating,
        reset,
        resetValidation,
        validate,
        validationClasses
      } = useValidation(props, "v-input", id);
      const slotProps = vue.computed(() => ({
        id,
        messagesId,
        isDirty,
        isDisabled,
        isReadonly,
        isPristine,
        isValid: isValid2,
        isValidating,
        reset,
        resetValidation,
        validate
      }));
      const messages = vue.computed(() => {
        var _a;
        if (((_a = props.errorMessages) == null ? void 0 : _a.length) || !isPristine.value && errorMessages.value.length) {
          return errorMessages.value;
        } else if (props.hint && (props.persistentHint || props.focused)) {
          return props.hint;
        } else {
          return props.messages;
        }
      });
      useRender(() => {
        var _a, _b, _c, _d;
        const hasPrepend = !!(slots.prepend || props.prependIcon);
        const hasAppend = !!(slots.append || props.appendIcon);
        const hasMessages = messages.value.length > 0;
        const hasDetails = !props.hideDetails || props.hideDetails === "auto" && (hasMessages || !!slots.details);
        return vue.createVNode("div", {
          "class": ["v-input", `v-input--${props.direction}`, {
            "v-input--center-affix": props.centerAffix,
            "v-input--hide-spin-buttons": props.hideSpinButtons
          }, densityClasses.value, themeClasses.value, rtlClasses.value, validationClasses.value, props.class],
          "style": [dimensionStyles.value, props.style]
        }, [hasPrepend && vue.createVNode("div", {
          "key": "prepend",
          "class": "v-input__prepend"
        }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots, slotProps.value), props.prependIcon && vue.createVNode(InputIcon, {
          "key": "prepend-icon",
          "name": "prepend"
        }, null)]), slots.default && vue.createVNode("div", {
          "class": "v-input__control"
        }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)]), hasAppend && vue.createVNode("div", {
          "key": "append",
          "class": "v-input__append"
        }, [props.appendIcon && vue.createVNode(InputIcon, {
          "key": "append-icon",
          "name": "append"
        }, null), (_c = slots.append) == null ? void 0 : _c.call(slots, slotProps.value)]), hasDetails && vue.createVNode("div", {
          "class": "v-input__details"
        }, [vue.createVNode(VMessages, {
          "id": messagesId.value,
          "active": hasMessages,
          "messages": messages.value
        }, {
          message: slots.message
        }), (_d = slots.details) == null ? void 0 : _d.call(slots, slotProps.value)])]);
      });
      return {
        reset,
        resetValidation,
        validate,
        isValid: isValid2,
        errorMessages
      };
    }
  });
  function calculateUpdatedTarget(_ref) {
    let {
      selectedElement,
      containerElement,
      isRtl,
      isHorizontal
    } = _ref;
    const containerSize = getOffsetSize(isHorizontal, containerElement);
    const scrollPosition = getScrollPosition(isHorizontal, isRtl, containerElement);
    const childrenSize = getOffsetSize(isHorizontal, selectedElement);
    const childrenStartPosition = getOffsetPosition(isHorizontal, selectedElement);
    const additionalOffset = childrenSize * 0.4;
    if (scrollPosition > childrenStartPosition) {
      return childrenStartPosition - additionalOffset;
    } else if (scrollPosition + containerSize < childrenStartPosition + childrenSize) {
      return childrenStartPosition - containerSize + childrenSize + additionalOffset;
    }
    return scrollPosition;
  }
  function calculateCenteredTarget(_ref2) {
    let {
      selectedElement,
      containerElement,
      isHorizontal
    } = _ref2;
    const containerOffsetSize = getOffsetSize(isHorizontal, containerElement);
    const childrenOffsetPosition = getOffsetPosition(isHorizontal, selectedElement);
    const childrenOffsetSize = getOffsetSize(isHorizontal, selectedElement);
    return childrenOffsetPosition - containerOffsetSize / 2 + childrenOffsetSize / 2;
  }
  function getScrollSize(isHorizontal, element) {
    const key = isHorizontal ? "scrollWidth" : "scrollHeight";
    return (element == null ? void 0 : element[key]) || 0;
  }
  function getClientSize(isHorizontal, element) {
    const key = isHorizontal ? "clientWidth" : "clientHeight";
    return (element == null ? void 0 : element[key]) || 0;
  }
  function getScrollPosition(isHorizontal, rtl, element) {
    if (!element) {
      return 0;
    }
    const {
      scrollLeft,
      offsetWidth,
      scrollWidth
    } = element;
    if (isHorizontal) {
      return rtl ? scrollWidth - offsetWidth + scrollLeft : scrollLeft;
    }
    return element.scrollTop;
  }
  function getOffsetSize(isHorizontal, element) {
    const key = isHorizontal ? "offsetWidth" : "offsetHeight";
    return (element == null ? void 0 : element[key]) || 0;
  }
  function getOffsetPosition(isHorizontal, element) {
    const key = isHorizontal ? "offsetLeft" : "offsetTop";
    return (element == null ? void 0 : element[key]) || 0;
  }
  const VSlideGroupSymbol = Symbol.for("vuetify:v-slide-group");
  const makeVSlideGroupProps = propsFactory({
    centerActive: Boolean,
    direction: {
      type: String,
      default: "horizontal"
    },
    symbol: {
      type: null,
      default: VSlideGroupSymbol
    },
    nextIcon: {
      type: IconValue,
      default: "$next"
    },
    prevIcon: {
      type: IconValue,
      default: "$prev"
    },
    showArrows: {
      type: [Boolean, String],
      validator: (v) => typeof v === "boolean" || ["always", "desktop", "mobile"].includes(v)
    },
    ...makeComponentProps(),
    ...makeDisplayProps({
      mobile: null
    }),
    ...makeTagProps(),
    ...makeGroupProps({
      selectedClass: "v-slide-group-item--active"
    })
  }, "VSlideGroup");
  const VSlideGroup = genericComponent()({
    name: "VSlideGroup",
    props: makeVSlideGroupProps(),
    emits: {
      "update:modelValue": (value) => true
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        isRtl
      } = useRtl();
      const {
        displayClasses,
        mobile
      } = useDisplay(props);
      const group = useGroup(props, props.symbol);
      const isOverflowing = vue.shallowRef(false);
      const scrollOffset = vue.shallowRef(0);
      const containerSize = vue.shallowRef(0);
      const contentSize = vue.shallowRef(0);
      const isHorizontal = vue.computed(() => props.direction === "horizontal");
      const {
        resizeRef: containerRef,
        contentRect: containerRect
      } = useResizeObserver();
      const {
        resizeRef: contentRef,
        contentRect
      } = useResizeObserver();
      const goTo = useGoTo();
      const goToOptions = vue.computed(() => {
        return {
          container: containerRef.el,
          duration: 200,
          easing: "easeOutQuart"
        };
      });
      const firstSelectedIndex = vue.computed(() => {
        if (!group.selected.value.length)
          return -1;
        return group.items.value.findIndex((item) => item.id === group.selected.value[0]);
      });
      const lastSelectedIndex = vue.computed(() => {
        if (!group.selected.value.length)
          return -1;
        return group.items.value.findIndex((item) => item.id === group.selected.value[group.selected.value.length - 1]);
      });
      if (IN_BROWSER) {
        let frame = -1;
        vue.watch(() => [group.selected.value, containerRect.value, contentRect.value, isHorizontal.value], () => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            if (containerRect.value && contentRect.value) {
              const sizeProperty = isHorizontal.value ? "width" : "height";
              containerSize.value = containerRect.value[sizeProperty];
              contentSize.value = contentRect.value[sizeProperty];
              isOverflowing.value = containerSize.value + 1 < contentSize.value;
            }
            if (firstSelectedIndex.value >= 0 && contentRef.el) {
              const selectedElement = contentRef.el.children[lastSelectedIndex.value];
              scrollToChildren(selectedElement, props.centerActive);
            }
          });
        });
      }
      const isFocused = vue.shallowRef(false);
      function scrollToChildren(children, center) {
        let target = 0;
        if (center) {
          target = calculateCenteredTarget({
            containerElement: containerRef.el,
            isHorizontal: isHorizontal.value,
            selectedElement: children
          });
        } else {
          target = calculateUpdatedTarget({
            containerElement: containerRef.el,
            isHorizontal: isHorizontal.value,
            isRtl: isRtl.value,
            selectedElement: children
          });
        }
        scrollToPosition(target);
      }
      function scrollToPosition(newPosition) {
        if (!IN_BROWSER || !containerRef.el)
          return;
        const offsetSize = getOffsetSize(isHorizontal.value, containerRef.el);
        const scrollPosition = getScrollPosition(isHorizontal.value, isRtl.value, containerRef.el);
        const scrollSize = getScrollSize(isHorizontal.value, containerRef.el);
        if (scrollSize <= offsetSize || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
        Math.abs(newPosition - scrollPosition) < 16)
          return;
        if (isHorizontal.value && isRtl.value && containerRef.el) {
          const {
            scrollWidth,
            offsetWidth: containerWidth
          } = containerRef.el;
          newPosition = scrollWidth - containerWidth - newPosition;
        }
        if (isHorizontal.value) {
          goTo.horizontal(newPosition, goToOptions.value);
        } else {
          goTo(newPosition, goToOptions.value);
        }
      }
      function onScroll(e) {
        const {
          scrollTop,
          scrollLeft
        } = e.target;
        scrollOffset.value = isHorizontal.value ? scrollLeft : scrollTop;
      }
      function onFocusin(e) {
        isFocused.value = true;
        if (!isOverflowing.value || !contentRef.el)
          return;
        for (const el of e.composedPath()) {
          for (const item of contentRef.el.children) {
            if (item === el) {
              scrollToChildren(item);
              return;
            }
          }
        }
      }
      function onFocusout(e) {
        isFocused.value = false;
      }
      let ignoreFocusEvent = false;
      function onFocus(e) {
        var _a;
        if (!ignoreFocusEvent && !isFocused.value && !(e.relatedTarget && ((_a = contentRef.el) == null ? void 0 : _a.contains(e.relatedTarget))))
          focus();
        ignoreFocusEvent = false;
      }
      function onFocusAffixes() {
        ignoreFocusEvent = true;
      }
      function onKeydown(e) {
        if (!contentRef.el)
          return;
        function toFocus(location) {
          e.preventDefault();
          focus(location);
        }
        if (isHorizontal.value) {
          if (e.key === "ArrowRight") {
            toFocus(isRtl.value ? "prev" : "next");
          } else if (e.key === "ArrowLeft") {
            toFocus(isRtl.value ? "next" : "prev");
          }
        } else {
          if (e.key === "ArrowDown") {
            toFocus("next");
          } else if (e.key === "ArrowUp") {
            toFocus("prev");
          }
        }
        if (e.key === "Home") {
          toFocus("first");
        } else if (e.key === "End") {
          toFocus("last");
        }
      }
      function focus(location) {
        var _a, _b;
        if (!contentRef.el)
          return;
        let el;
        if (!location) {
          const focusable = focusableChildren(contentRef.el);
          el = focusable[0];
        } else if (location === "next") {
          el = (_a = contentRef.el.querySelector(":focus")) == null ? void 0 : _a.nextElementSibling;
          if (!el)
            return focus("first");
        } else if (location === "prev") {
          el = (_b = contentRef.el.querySelector(":focus")) == null ? void 0 : _b.previousElementSibling;
          if (!el)
            return focus("last");
        } else if (location === "first") {
          el = contentRef.el.firstElementChild;
        } else if (location === "last") {
          el = contentRef.el.lastElementChild;
        }
        if (el) {
          el.focus({
            preventScroll: true
          });
        }
      }
      function scrollTo2(location) {
        const direction = isHorizontal.value && isRtl.value ? -1 : 1;
        const offsetStep = (location === "prev" ? -direction : direction) * containerSize.value;
        let newPosition = scrollOffset.value + offsetStep;
        if (isHorizontal.value && isRtl.value && containerRef.el) {
          const {
            scrollWidth,
            offsetWidth: containerWidth
          } = containerRef.el;
          newPosition += scrollWidth - containerWidth;
        }
        scrollToPosition(newPosition);
      }
      const slotProps = vue.computed(() => ({
        next: group.next,
        prev: group.prev,
        select: group.select,
        isSelected: group.isSelected
      }));
      const hasAffixes = vue.computed(() => {
        switch (props.showArrows) {
          case "always":
            return true;
          case "desktop":
            return !mobile.value;
          case true:
            return isOverflowing.value || Math.abs(scrollOffset.value) > 0;
          case "mobile":
            return mobile.value || isOverflowing.value || Math.abs(scrollOffset.value) > 0;
          default:
            return !mobile.value && (isOverflowing.value || Math.abs(scrollOffset.value) > 0);
        }
      });
      const hasPrev = vue.computed(() => {
        return Math.abs(scrollOffset.value) > 1;
      });
      const hasNext = vue.computed(() => {
        if (!containerRef.value)
          return false;
        const scrollSize = getScrollSize(isHorizontal.value, containerRef.el);
        const clientSize = getClientSize(isHorizontal.value, containerRef.el);
        const scrollSizeMax = scrollSize - clientSize;
        return scrollSizeMax - Math.abs(scrollOffset.value) > 1;
      });
      useRender(() => vue.createVNode(props.tag, {
        "class": ["v-slide-group", {
          "v-slide-group--vertical": !isHorizontal.value,
          "v-slide-group--has-affixes": hasAffixes.value,
          "v-slide-group--is-overflowing": isOverflowing.value
        }, displayClasses.value, props.class],
        "style": props.style,
        "tabindex": isFocused.value || group.selected.value.length ? -1 : 0,
        "onFocus": onFocus
      }, {
        default: () => {
          var _a, _b, _c;
          return [hasAffixes.value && vue.createVNode("div", {
            "key": "prev",
            "class": ["v-slide-group__prev", {
              "v-slide-group__prev--disabled": !hasPrev.value
            }],
            "onMousedown": onFocusAffixes,
            "onClick": () => hasPrev.value && scrollTo2("prev")
          }, [((_a = slots.prev) == null ? void 0 : _a.call(slots, slotProps.value)) ?? vue.createVNode(VFadeTransition, null, {
            default: () => [vue.createVNode(VIcon, {
              "icon": isRtl.value ? props.nextIcon : props.prevIcon
            }, null)]
          })]), vue.createVNode("div", {
            "key": "container",
            "ref": containerRef,
            "class": "v-slide-group__container",
            "onScroll": onScroll
          }, [vue.createVNode("div", {
            "ref": contentRef,
            "class": "v-slide-group__content",
            "onFocusin": onFocusin,
            "onFocusout": onFocusout,
            "onKeydown": onKeydown
          }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)])]), hasAffixes.value && vue.createVNode("div", {
            "key": "next",
            "class": ["v-slide-group__next", {
              "v-slide-group__next--disabled": !hasNext.value
            }],
            "onMousedown": onFocusAffixes,
            "onClick": () => hasNext.value && scrollTo2("next")
          }, [((_c = slots.next) == null ? void 0 : _c.call(slots, slotProps.value)) ?? vue.createVNode(VFadeTransition, null, {
            default: () => [vue.createVNode(VIcon, {
              "icon": isRtl.value ? props.prevIcon : props.nextIcon
            }, null)]
          })])];
        }
      }));
      return {
        selected: group.selected,
        scrollTo: scrollTo2,
        scrollOffset,
        focus
      };
    }
  });
  const VChipGroupSymbol = Symbol.for("vuetify:v-chip-group");
  const makeVChipGroupProps = propsFactory({
    column: Boolean,
    filter: Boolean,
    valueComparator: {
      type: Function,
      default: deepEqual
    },
    ...makeVSlideGroupProps(),
    ...makeComponentProps(),
    ...makeGroupProps({
      selectedClass: "v-chip--selected"
    }),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "tonal"
    })
  }, "VChipGroup");
  genericComponent()({
    name: "VChipGroup",
    props: makeVChipGroupProps(),
    emits: {
      "update:modelValue": (value) => true
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        themeClasses
      } = provideTheme(props);
      const {
        isSelected,
        select,
        next,
        prev,
        selected
      } = useGroup(props, VChipGroupSymbol);
      provideDefaults({
        VChip: {
          color: vue.toRef(props, "color"),
          disabled: vue.toRef(props, "disabled"),
          filter: vue.toRef(props, "filter"),
          variant: vue.toRef(props, "variant")
        }
      });
      useRender(() => {
        const slideGroupProps = VSlideGroup.filterProps(props);
        return vue.createVNode(VSlideGroup, vue.mergeProps(slideGroupProps, {
          "class": ["v-chip-group", {
            "v-chip-group--column": props.column
          }, themeClasses.value, props.class],
          "style": props.style
        }), {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
              isSelected,
              select,
              next,
              prev,
              selected: selected.value
            })];
          }
        });
      });
      return {};
    }
  });
  const makeVChipProps = propsFactory({
    activeClass: String,
    appendAvatar: String,
    appendIcon: IconValue,
    closable: Boolean,
    closeIcon: {
      type: IconValue,
      default: "$delete"
    },
    closeLabel: {
      type: String,
      default: "$vuetify.close"
    },
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: "$complete"
    },
    label: Boolean,
    link: {
      type: Boolean,
      default: void 0
    },
    pill: Boolean,
    prependAvatar: String,
    prependIcon: IconValue,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    text: String,
    modelValue: {
      type: Boolean,
      default: true
    },
    onClick: EventProp(),
    onClickOnce: EventProp(),
    ...makeBorderProps(),
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeElevationProps(),
    ...makeGroupItemProps(),
    ...makeRoundedProps(),
    ...makeRouterProps(),
    ...makeSizeProps(),
    ...makeTagProps({
      tag: "span"
    }),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "tonal"
    })
  }, "VChip");
  const VChip = genericComponent()({
    name: "VChip",
    directives: {
      Ripple
    },
    props: makeVChipProps(),
    emits: {
      "click:close": (e) => true,
      "update:modelValue": (value) => true,
      "group:selected": (val) => true,
      click: (e) => true
    },
    setup(props, _ref) {
      let {
        attrs,
        emit,
        slots
      } = _ref;
      const {
        t
      } = useLocale();
      const {
        borderClasses
      } = useBorder(props);
      const {
        colorClasses,
        colorStyles,
        variantClasses
      } = useVariant(props);
      const {
        densityClasses
      } = useDensity(props);
      const {
        elevationClasses
      } = useElevation(props);
      const {
        roundedClasses
      } = useRounded(props);
      const {
        sizeClasses
      } = useSize(props);
      const {
        themeClasses
      } = provideTheme(props);
      const isActive = useProxiedModel(props, "modelValue");
      const group = useGroupItem(props, VChipGroupSymbol, false);
      const link = useLink(props, attrs);
      const isLink = vue.computed(() => props.link !== false && link.isLink.value);
      const isClickable = vue.computed(() => !props.disabled && props.link !== false && (!!group || props.link || link.isClickable.value));
      const closeProps = vue.computed(() => ({
        "aria-label": t(props.closeLabel),
        onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          isActive.value = false;
          emit("click:close", e);
        }
      }));
      function onClick(e) {
        var _a;
        emit("click", e);
        if (!isClickable.value)
          return;
        (_a = link.navigate) == null ? void 0 : _a.call(link, e);
        group == null ? void 0 : group.toggle();
      }
      function onKeyDown(e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(e);
        }
      }
      return () => {
        const Tag = link.isLink.value ? "a" : props.tag;
        const hasAppendMedia = !!(props.appendIcon || props.appendAvatar);
        const hasAppend = !!(hasAppendMedia || slots.append);
        const hasClose = !!(slots.close || props.closable);
        const hasFilter = !!(slots.filter || props.filter) && group;
        const hasPrependMedia = !!(props.prependIcon || props.prependAvatar);
        const hasPrepend = !!(hasPrependMedia || slots.prepend);
        const hasColor = !group || group.isSelected.value;
        return isActive.value && vue.withDirectives(vue.createVNode(Tag, {
          "class": ["v-chip", {
            "v-chip--disabled": props.disabled,
            "v-chip--label": props.label,
            "v-chip--link": isClickable.value,
            "v-chip--filter": hasFilter,
            "v-chip--pill": props.pill
          }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, group == null ? void 0 : group.selectedClass.value, props.class],
          "style": [hasColor ? colorStyles.value : void 0, props.style],
          "disabled": props.disabled || void 0,
          "draggable": props.draggable,
          "href": link.href.value,
          "tabindex": isClickable.value ? 0 : void 0,
          "onClick": onClick,
          "onKeydown": isClickable.value && !isLink.value && onKeyDown
        }, {
          default: () => {
            var _a;
            return [genOverlays(isClickable.value, "v-chip"), hasFilter && vue.createVNode(VExpandXTransition, {
              "key": "filter"
            }, {
              default: () => [vue.withDirectives(vue.createVNode("div", {
                "class": "v-chip__filter"
              }, [!slots.filter ? vue.createVNode(VIcon, {
                "key": "filter-icon",
                "icon": props.filterIcon
              }, null) : vue.createVNode(VDefaultsProvider, {
                "key": "filter-defaults",
                "disabled": !props.filterIcon,
                "defaults": {
                  VIcon: {
                    icon: props.filterIcon
                  }
                }
              }, slots.filter)]), [[vue.vShow, group.isSelected.value]])]
            }), hasPrepend && vue.createVNode("div", {
              "key": "prepend",
              "class": "v-chip__prepend"
            }, [!slots.prepend ? vue.createVNode(vue.Fragment, null, [props.prependIcon && vue.createVNode(VIcon, {
              "key": "prepend-icon",
              "icon": props.prependIcon,
              "start": true
            }, null), props.prependAvatar && vue.createVNode(VAvatar, {
              "key": "prepend-avatar",
              "image": props.prependAvatar,
              "start": true
            }, null)]) : vue.createVNode(VDefaultsProvider, {
              "key": "prepend-defaults",
              "disabled": !hasPrependMedia,
              "defaults": {
                VAvatar: {
                  image: props.prependAvatar,
                  start: true
                },
                VIcon: {
                  icon: props.prependIcon,
                  start: true
                }
              }
            }, slots.prepend)]), vue.createVNode("div", {
              "class": "v-chip__content",
              "data-no-activator": ""
            }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
              isSelected: group == null ? void 0 : group.isSelected.value,
              selectedClass: group == null ? void 0 : group.selectedClass.value,
              select: group == null ? void 0 : group.select,
              toggle: group == null ? void 0 : group.toggle,
              value: group == null ? void 0 : group.value.value,
              disabled: props.disabled
            })) ?? props.text]), hasAppend && vue.createVNode("div", {
              "key": "append",
              "class": "v-chip__append"
            }, [!slots.append ? vue.createVNode(vue.Fragment, null, [props.appendIcon && vue.createVNode(VIcon, {
              "key": "append-icon",
              "end": true,
              "icon": props.appendIcon
            }, null), props.appendAvatar && vue.createVNode(VAvatar, {
              "key": "append-avatar",
              "end": true,
              "image": props.appendAvatar
            }, null)]) : vue.createVNode(VDefaultsProvider, {
              "key": "append-defaults",
              "disabled": !hasAppendMedia,
              "defaults": {
                VAvatar: {
                  end: true,
                  image: props.appendAvatar
                },
                VIcon: {
                  end: true,
                  icon: props.appendIcon
                }
              }
            }, slots.append)]), hasClose && vue.createVNode("button", vue.mergeProps({
              "key": "close",
              "class": "v-chip__close",
              "type": "button"
            }, closeProps.value), [!slots.close ? vue.createVNode(VIcon, {
              "key": "close-icon",
              "icon": props.closeIcon,
              "size": "x-small"
            }, null) : vue.createVNode(VDefaultsProvider, {
              "key": "close-defaults",
              "defaults": {
                VIcon: {
                  icon: props.closeIcon,
                  size: "x-small"
                }
              }
            }, slots.close)])];
          }
        }), [[vue.resolveDirective("ripple"), isClickable.value && props.ripple, null]]);
      };
    }
  });
  const ListKey = Symbol.for("vuetify:list");
  function createList() {
    const parent = vue.inject(ListKey, {
      hasPrepend: vue.shallowRef(false),
      updateHasPrepend: () => null
    });
    const data = {
      hasPrepend: vue.shallowRef(false),
      updateHasPrepend: (value) => {
        if (value)
          data.hasPrepend.value = value;
      }
    };
    vue.provide(ListKey, data);
    return parent;
  }
  function useList() {
    return vue.inject(ListKey, null);
  }
  const independentActiveStrategy = (mandatory) => {
    const strategy = {
      activate: (_ref) => {
        let {
          id,
          value,
          activated
        } = _ref;
        id = vue.toRaw(id);
        if (mandatory && !value && activated.size === 1 && activated.has(id))
          return activated;
        if (value) {
          activated.add(id);
        } else {
          activated.delete(id);
        }
        return activated;
      },
      in: (v, children, parents) => {
        let set = /* @__PURE__ */ new Set();
        if (v != null) {
          for (const id of wrapInArray(v)) {
            set = strategy.activate({
              id,
              value: true,
              activated: new Set(set),
              children,
              parents
            });
          }
        }
        return set;
      },
      out: (v) => {
        return Array.from(v);
      }
    };
    return strategy;
  };
  const independentSingleActiveStrategy = (mandatory) => {
    const parentStrategy = independentActiveStrategy(mandatory);
    const strategy = {
      activate: (_ref2) => {
        let {
          activated,
          id,
          ...rest
        } = _ref2;
        id = vue.toRaw(id);
        const singleSelected = activated.has(id) ? /* @__PURE__ */ new Set([id]) : /* @__PURE__ */ new Set();
        return parentStrategy.activate({
          ...rest,
          id,
          activated: singleSelected
        });
      },
      in: (v, children, parents) => {
        let set = /* @__PURE__ */ new Set();
        if (v != null) {
          const arr = wrapInArray(v);
          if (arr.length) {
            set = parentStrategy.in(arr.slice(0, 1), children, parents);
          }
        }
        return set;
      },
      out: (v, children, parents) => {
        return parentStrategy.out(v, children, parents);
      }
    };
    return strategy;
  };
  const leafActiveStrategy = (mandatory) => {
    const parentStrategy = independentActiveStrategy(mandatory);
    const strategy = {
      activate: (_ref3) => {
        let {
          id,
          activated,
          children,
          ...rest
        } = _ref3;
        id = vue.toRaw(id);
        if (children.has(id))
          return activated;
        return parentStrategy.activate({
          id,
          activated,
          children,
          ...rest
        });
      },
      in: parentStrategy.in,
      out: parentStrategy.out
    };
    return strategy;
  };
  const leafSingleActiveStrategy = (mandatory) => {
    const parentStrategy = independentSingleActiveStrategy(mandatory);
    const strategy = {
      activate: (_ref4) => {
        let {
          id,
          activated,
          children,
          ...rest
        } = _ref4;
        id = vue.toRaw(id);
        if (children.has(id))
          return activated;
        return parentStrategy.activate({
          id,
          activated,
          children,
          ...rest
        });
      },
      in: parentStrategy.in,
      out: parentStrategy.out
    };
    return strategy;
  };
  const singleOpenStrategy = {
    open: (_ref) => {
      let {
        id,
        value,
        opened,
        parents
      } = _ref;
      if (value) {
        const newOpened = /* @__PURE__ */ new Set();
        newOpened.add(id);
        let parent = parents.get(id);
        while (parent != null) {
          newOpened.add(parent);
          parent = parents.get(parent);
        }
        return newOpened;
      } else {
        opened.delete(id);
        return opened;
      }
    },
    select: () => null
  };
  const multipleOpenStrategy = {
    open: (_ref2) => {
      let {
        id,
        value,
        opened,
        parents
      } = _ref2;
      if (value) {
        let parent = parents.get(id);
        opened.add(id);
        while (parent != null && parent !== id) {
          opened.add(parent);
          parent = parents.get(parent);
        }
        return opened;
      } else {
        opened.delete(id);
      }
      return opened;
    },
    select: () => null
  };
  const listOpenStrategy = {
    open: multipleOpenStrategy.open,
    select: (_ref3) => {
      let {
        id,
        value,
        opened,
        parents
      } = _ref3;
      if (!value)
        return opened;
      const path = [];
      let parent = parents.get(id);
      while (parent != null) {
        path.push(parent);
        parent = parents.get(parent);
      }
      return new Set(path);
    }
  };
  const independentSelectStrategy = (mandatory) => {
    const strategy = {
      select: (_ref) => {
        let {
          id,
          value,
          selected
        } = _ref;
        id = vue.toRaw(id);
        if (mandatory && !value) {
          const on = Array.from(selected.entries()).reduce((arr, _ref2) => {
            let [key, value2] = _ref2;
            if (value2 === "on")
              arr.push(key);
            return arr;
          }, []);
          if (on.length === 1 && on[0] === id)
            return selected;
        }
        selected.set(id, value ? "on" : "off");
        return selected;
      },
      in: (v, children, parents) => {
        let map = /* @__PURE__ */ new Map();
        for (const id of v || []) {
          map = strategy.select({
            id,
            value: true,
            selected: new Map(map),
            children,
            parents
          });
        }
        return map;
      },
      out: (v) => {
        const arr = [];
        for (const [key, value] of v.entries()) {
          if (value === "on")
            arr.push(key);
        }
        return arr;
      }
    };
    return strategy;
  };
  const independentSingleSelectStrategy = (mandatory) => {
    const parentStrategy = independentSelectStrategy(mandatory);
    const strategy = {
      select: (_ref3) => {
        let {
          selected,
          id,
          ...rest
        } = _ref3;
        id = vue.toRaw(id);
        const singleSelected = selected.has(id) ? /* @__PURE__ */ new Map([[id, selected.get(id)]]) : /* @__PURE__ */ new Map();
        return parentStrategy.select({
          ...rest,
          id,
          selected: singleSelected
        });
      },
      in: (v, children, parents) => {
        let map = /* @__PURE__ */ new Map();
        if (v == null ? void 0 : v.length) {
          map = parentStrategy.in(v.slice(0, 1), children, parents);
        }
        return map;
      },
      out: (v, children, parents) => {
        return parentStrategy.out(v, children, parents);
      }
    };
    return strategy;
  };
  const leafSelectStrategy = (mandatory) => {
    const parentStrategy = independentSelectStrategy(mandatory);
    const strategy = {
      select: (_ref4) => {
        let {
          id,
          selected,
          children,
          ...rest
        } = _ref4;
        id = vue.toRaw(id);
        if (children.has(id))
          return selected;
        return parentStrategy.select({
          id,
          selected,
          children,
          ...rest
        });
      },
      in: parentStrategy.in,
      out: parentStrategy.out
    };
    return strategy;
  };
  const leafSingleSelectStrategy = (mandatory) => {
    const parentStrategy = independentSingleSelectStrategy(mandatory);
    const strategy = {
      select: (_ref5) => {
        let {
          id,
          selected,
          children,
          ...rest
        } = _ref5;
        id = vue.toRaw(id);
        if (children.has(id))
          return selected;
        return parentStrategy.select({
          id,
          selected,
          children,
          ...rest
        });
      },
      in: parentStrategy.in,
      out: parentStrategy.out
    };
    return strategy;
  };
  const classicSelectStrategy = (mandatory) => {
    const strategy = {
      select: (_ref6) => {
        let {
          id,
          value,
          selected,
          children,
          parents
        } = _ref6;
        id = vue.toRaw(id);
        const original = new Map(selected);
        const items = [id];
        while (items.length) {
          const item = items.shift();
          selected.set(item, value ? "on" : "off");
          if (children.has(item)) {
            items.push(...children.get(item));
          }
        }
        let parent = parents.get(id);
        while (parent) {
          const childrenIds = children.get(parent);
          const everySelected = childrenIds.every((cid) => selected.get(cid) === "on");
          const noneSelected = childrenIds.every((cid) => !selected.has(cid) || selected.get(cid) === "off");
          selected.set(parent, everySelected ? "on" : noneSelected ? "off" : "indeterminate");
          parent = parents.get(parent);
        }
        if (mandatory && !value) {
          const on = Array.from(selected.entries()).reduce((arr, _ref7) => {
            let [key, value2] = _ref7;
            if (value2 === "on")
              arr.push(key);
            return arr;
          }, []);
          if (on.length === 0)
            return original;
        }
        return selected;
      },
      in: (v, children, parents) => {
        let map = /* @__PURE__ */ new Map();
        for (const id of v || []) {
          map = strategy.select({
            id,
            value: true,
            selected: new Map(map),
            children,
            parents
          });
        }
        return map;
      },
      out: (v, children) => {
        const arr = [];
        for (const [key, value] of v.entries()) {
          if (value === "on" && !children.has(key))
            arr.push(key);
        }
        return arr;
      }
    };
    return strategy;
  };
  const VNestedSymbol = Symbol.for("vuetify:nested");
  const emptyNested = {
    id: vue.shallowRef(),
    root: {
      register: () => null,
      unregister: () => null,
      parents: vue.ref(/* @__PURE__ */ new Map()),
      children: vue.ref(/* @__PURE__ */ new Map()),
      open: () => null,
      openOnSelect: () => null,
      activate: () => null,
      select: () => null,
      activatable: vue.ref(false),
      selectable: vue.ref(false),
      opened: vue.ref(/* @__PURE__ */ new Set()),
      activated: vue.ref(/* @__PURE__ */ new Set()),
      selected: vue.ref(/* @__PURE__ */ new Map()),
      selectedValues: vue.ref([])
    }
  };
  const makeNestedProps = propsFactory({
    activatable: Boolean,
    selectable: Boolean,
    activeStrategy: [String, Function, Object],
    selectStrategy: [String, Function, Object],
    openStrategy: [String, Object],
    opened: null,
    activated: null,
    selected: null,
    mandatory: Boolean
  }, "nested");
  const useNested = (props) => {
    let isUnmounted = false;
    const children = vue.ref(/* @__PURE__ */ new Map());
    const parents = vue.ref(/* @__PURE__ */ new Map());
    const opened = useProxiedModel(props, "opened", props.opened, (v) => new Set(v), (v) => [...v.values()]);
    const activeStrategy = vue.computed(() => {
      if (typeof props.activeStrategy === "object")
        return props.activeStrategy;
      if (typeof props.activeStrategy === "function")
        return props.activeStrategy(props.mandatory);
      switch (props.activeStrategy) {
        case "leaf":
          return leafActiveStrategy(props.mandatory);
        case "single-leaf":
          return leafSingleActiveStrategy(props.mandatory);
        case "independent":
          return independentActiveStrategy(props.mandatory);
        case "single-independent":
        default:
          return independentSingleActiveStrategy(props.mandatory);
      }
    });
    const selectStrategy = vue.computed(() => {
      if (typeof props.selectStrategy === "object")
        return props.selectStrategy;
      if (typeof props.selectStrategy === "function")
        return props.selectStrategy(props.mandatory);
      switch (props.selectStrategy) {
        case "single-leaf":
          return leafSingleSelectStrategy(props.mandatory);
        case "leaf":
          return leafSelectStrategy(props.mandatory);
        case "independent":
          return independentSelectStrategy(props.mandatory);
        case "single-independent":
          return independentSingleSelectStrategy(props.mandatory);
        case "classic":
        default:
          return classicSelectStrategy(props.mandatory);
      }
    });
    const openStrategy = vue.computed(() => {
      if (typeof props.openStrategy === "object")
        return props.openStrategy;
      switch (props.openStrategy) {
        case "list":
          return listOpenStrategy;
        case "single":
          return singleOpenStrategy;
        case "multiple":
        default:
          return multipleOpenStrategy;
      }
    });
    const activated = useProxiedModel(props, "activated", props.activated, (v) => activeStrategy.value.in(v, children.value, parents.value), (v) => activeStrategy.value.out(v, children.value, parents.value));
    const selected = useProxiedModel(props, "selected", props.selected, (v) => selectStrategy.value.in(v, children.value, parents.value), (v) => selectStrategy.value.out(v, children.value, parents.value));
    vue.onBeforeUnmount(() => {
      isUnmounted = true;
    });
    function getPath(id) {
      const path = [];
      let parent = id;
      while (parent != null) {
        path.unshift(parent);
        parent = parents.value.get(parent);
      }
      return path;
    }
    const vm = getCurrentInstance("nested");
    const nested = {
      id: vue.shallowRef(),
      root: {
        opened,
        activatable: vue.toRef(props, "activatable"),
        selectable: vue.toRef(props, "selectable"),
        activated,
        selected,
        selectedValues: vue.computed(() => {
          const arr = [];
          for (const [key, value] of selected.value.entries()) {
            if (value === "on")
              arr.push(key);
          }
          return arr;
        }),
        register: (id, parentId, isGroup) => {
          parentId && id !== parentId && parents.value.set(id, parentId);
          isGroup && children.value.set(id, []);
          if (parentId != null) {
            children.value.set(parentId, [...children.value.get(parentId) || [], id]);
          }
        },
        unregister: (id) => {
          if (isUnmounted)
            return;
          children.value.delete(id);
          const parent = parents.value.get(id);
          if (parent) {
            const list = children.value.get(parent) ?? [];
            children.value.set(parent, list.filter((child) => child !== id));
          }
          parents.value.delete(id);
          opened.value.delete(id);
        },
        open: (id, value, event) => {
          vm.emit("click:open", {
            id,
            value,
            path: getPath(id),
            event
          });
          const newOpened = openStrategy.value.open({
            id,
            value,
            opened: new Set(opened.value),
            children: children.value,
            parents: parents.value,
            event
          });
          newOpened && (opened.value = newOpened);
        },
        openOnSelect: (id, value, event) => {
          const newOpened = openStrategy.value.select({
            id,
            value,
            selected: new Map(selected.value),
            opened: new Set(opened.value),
            children: children.value,
            parents: parents.value,
            event
          });
          newOpened && (opened.value = newOpened);
        },
        select: (id, value, event) => {
          vm.emit("click:select", {
            id,
            value,
            path: getPath(id),
            event
          });
          const newSelected = selectStrategy.value.select({
            id,
            value,
            selected: new Map(selected.value),
            children: children.value,
            parents: parents.value,
            event
          });
          newSelected && (selected.value = newSelected);
          nested.root.openOnSelect(id, value, event);
        },
        activate: (id, value, event) => {
          if (!props.activatable) {
            return nested.root.select(id, true, event);
          }
          vm.emit("click:activate", {
            id,
            value,
            path: getPath(id),
            event
          });
          const newActivated = activeStrategy.value.activate({
            id,
            value,
            activated: new Set(activated.value),
            children: children.value,
            parents: parents.value,
            event
          });
          newActivated && (activated.value = newActivated);
        },
        children,
        parents
      }
    };
    vue.provide(VNestedSymbol, nested);
    return nested.root;
  };
  const useNestedItem = (id, isGroup) => {
    const parent = vue.inject(VNestedSymbol, emptyNested);
    const uidSymbol = Symbol(getUid());
    const computedId = vue.computed(() => id.value !== void 0 ? id.value : uidSymbol);
    const item = {
      ...parent,
      id: computedId,
      open: (open, e) => parent.root.open(computedId.value, open, e),
      openOnSelect: (open, e) => parent.root.openOnSelect(computedId.value, open, e),
      isOpen: vue.computed(() => parent.root.opened.value.has(computedId.value)),
      parent: vue.computed(() => parent.root.parents.value.get(computedId.value)),
      activate: (activated, e) => parent.root.activate(computedId.value, activated, e),
      isActivated: vue.computed(() => parent.root.activated.value.has(vue.toRaw(computedId.value))),
      select: (selected, e) => parent.root.select(computedId.value, selected, e),
      isSelected: vue.computed(() => parent.root.selected.value.get(vue.toRaw(computedId.value)) === "on"),
      isIndeterminate: vue.computed(() => parent.root.selected.value.get(computedId.value) === "indeterminate"),
      isLeaf: vue.computed(() => !parent.root.children.value.get(computedId.value)),
      isGroupActivator: parent.isGroupActivator
    };
    !parent.isGroupActivator && parent.root.register(computedId.value, parent.id.value, isGroup);
    vue.onBeforeUnmount(() => {
      !parent.isGroupActivator && parent.root.unregister(computedId.value);
    });
    isGroup && vue.provide(VNestedSymbol, item);
    return item;
  };
  const useNestedGroupActivator = () => {
    const parent = vue.inject(VNestedSymbol, emptyNested);
    vue.provide(VNestedSymbol, {
      ...parent,
      isGroupActivator: true
    });
  };
  function useSsrBoot() {
    const isBooted = vue.shallowRef(false);
    vue.onMounted(() => {
      window.requestAnimationFrame(() => {
        isBooted.value = true;
      });
    });
    const ssrBootStyles = vue.computed(() => !isBooted.value ? {
      transition: "none !important"
    } : void 0);
    return {
      ssrBootStyles,
      isBooted: vue.readonly(isBooted)
    };
  }
  const VListGroupActivator = defineComponent({
    name: "VListGroupActivator",
    setup(_, _ref) {
      let {
        slots
      } = _ref;
      useNestedGroupActivator();
      return () => {
        var _a;
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      };
    }
  });
  const makeVListGroupProps = propsFactory({
    /* @deprecated */
    activeColor: String,
    baseColor: String,
    color: String,
    collapseIcon: {
      type: IconValue,
      default: "$collapse"
    },
    expandIcon: {
      type: IconValue,
      default: "$expand"
    },
    prependIcon: IconValue,
    appendIcon: IconValue,
    fluid: Boolean,
    subgroup: Boolean,
    title: String,
    value: null,
    ...makeComponentProps(),
    ...makeTagProps()
  }, "VListGroup");
  const VListGroup = genericComponent()({
    name: "VListGroup",
    props: makeVListGroupProps(),
    setup(props, _ref2) {
      let {
        slots
      } = _ref2;
      const {
        isOpen,
        open,
        id: _id
      } = useNestedItem(vue.toRef(props, "value"), true);
      const id = vue.computed(() => `v-list-group--id-${String(_id.value)}`);
      const list = useList();
      const {
        isBooted
      } = useSsrBoot();
      function onClick(e) {
        open(!isOpen.value, e);
      }
      const activatorProps = vue.computed(() => ({
        onClick,
        class: "v-list-group__header",
        id: id.value
      }));
      const toggleIcon = vue.computed(() => isOpen.value ? props.collapseIcon : props.expandIcon);
      const activatorDefaults = vue.computed(() => ({
        VListItem: {
          active: isOpen.value,
          activeColor: props.activeColor,
          baseColor: props.baseColor,
          color: props.color,
          prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
          appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
          title: props.title,
          value: props.value
        }
      }));
      useRender(() => vue.createVNode(props.tag, {
        "class": ["v-list-group", {
          "v-list-group--prepend": list == null ? void 0 : list.hasPrepend.value,
          "v-list-group--fluid": props.fluid,
          "v-list-group--subgroup": props.subgroup,
          "v-list-group--open": isOpen.value
        }, props.class],
        "style": props.style
      }, {
        default: () => [slots.activator && vue.createVNode(VDefaultsProvider, {
          "defaults": activatorDefaults.value
        }, {
          default: () => [vue.createVNode(VListGroupActivator, null, {
            default: () => [slots.activator({
              props: activatorProps.value,
              isOpen: isOpen.value
            })]
          })]
        }), vue.createVNode(MaybeTransition, {
          "transition": {
            component: VExpandTransition
          },
          "disabled": !isBooted.value
        }, {
          default: () => {
            var _a;
            return [vue.withDirectives(vue.createVNode("div", {
              "class": "v-list-group__items",
              "role": "group",
              "aria-labelledby": id.value
            }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vue.vShow, isOpen.value]])];
          }
        })]
      }));
      return {
        isOpen
      };
    }
  });
  const makeVListItemSubtitleProps = propsFactory({
    opacity: [Number, String],
    ...makeComponentProps(),
    ...makeTagProps()
  }, "VListItemSubtitle");
  const VListItemSubtitle = genericComponent()({
    name: "VListItemSubtitle",
    props: makeVListItemSubtitleProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      useRender(() => vue.createVNode(props.tag, {
        "class": ["v-list-item-subtitle", props.class],
        "style": [{
          "--v-list-item-subtitle-opacity": props.opacity
        }, props.style]
      }, slots));
      return {};
    }
  });
  const VListItemTitle = createSimpleFunctional("v-list-item-title");
  const makeVListItemProps = propsFactory({
    active: {
      type: Boolean,
      default: void 0
    },
    activeClass: String,
    /* @deprecated */
    activeColor: String,
    appendAvatar: String,
    appendIcon: IconValue,
    baseColor: String,
    disabled: Boolean,
    lines: [Boolean, String],
    link: {
      type: Boolean,
      default: void 0
    },
    nav: Boolean,
    prependAvatar: String,
    prependIcon: IconValue,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    slim: Boolean,
    subtitle: [String, Number],
    title: [String, Number],
    value: null,
    onClick: EventProp(),
    onClickOnce: EventProp(),
    ...makeBorderProps(),
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeRoundedProps(),
    ...makeRouterProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "text"
    })
  }, "VListItem");
  const VListItem = genericComponent()({
    name: "VListItem",
    directives: {
      Ripple
    },
    props: makeVListItemProps(),
    emits: {
      click: (e) => true
    },
    setup(props, _ref) {
      let {
        attrs,
        slots,
        emit
      } = _ref;
      const link = useLink(props, attrs);
      const id = vue.computed(() => props.value === void 0 ? link.href.value : props.value);
      const {
        activate,
        isActivated,
        select,
        isSelected,
        isIndeterminate,
        isGroupActivator,
        root,
        parent,
        openOnSelect
      } = useNestedItem(id, false);
      const list = useList();
      const isActive = vue.computed(() => {
        var _a;
        return props.active !== false && (props.active || ((_a = link.isActive) == null ? void 0 : _a.value) || (root.activatable.value ? isActivated.value : isSelected.value));
      });
      const isLink = vue.computed(() => props.link !== false && link.isLink.value);
      const isClickable = vue.computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value || !!list && (root.selectable.value || root.activatable.value || props.value != null)));
      const roundedProps = vue.computed(() => props.rounded || props.nav);
      const color = vue.computed(() => props.color ?? props.activeColor);
      const variantProps = vue.computed(() => ({
        color: isActive.value ? color.value ?? props.baseColor : props.baseColor,
        variant: props.variant
      }));
      vue.watch(() => {
        var _a;
        return (_a = link.isActive) == null ? void 0 : _a.value;
      }, (val) => {
        if (val && parent.value != null) {
          root.open(parent.value, true);
        }
        if (val) {
          openOnSelect(val);
        }
      }, {
        immediate: true
      });
      const {
        themeClasses
      } = provideTheme(props);
      const {
        borderClasses
      } = useBorder(props);
      const {
        colorClasses,
        colorStyles,
        variantClasses
      } = useVariant(variantProps);
      const {
        densityClasses
      } = useDensity(props);
      const {
        dimensionStyles
      } = useDimension(props);
      const {
        elevationClasses
      } = useElevation(props);
      const {
        roundedClasses
      } = useRounded(roundedProps);
      const lineClasses = vue.computed(() => props.lines ? `v-list-item--${props.lines}-line` : void 0);
      const slotProps = vue.computed(() => ({
        isActive: isActive.value,
        select,
        isSelected: isSelected.value,
        isIndeterminate: isIndeterminate.value
      }));
      function onClick(e) {
        var _a;
        emit("click", e);
        if (!isClickable.value)
          return;
        (_a = link.navigate) == null ? void 0 : _a.call(link, e);
        if (isGroupActivator)
          return;
        if (root.activatable.value) {
          activate(!isActivated.value, e);
        } else if (root.selectable.value) {
          select(!isSelected.value, e);
        } else if (props.value != null) {
          select(!isSelected.value, e);
        }
      }
      function onKeyDown(e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(e);
        }
      }
      useRender(() => {
        const Tag = isLink.value ? "a" : props.tag;
        const hasTitle = slots.title || props.title != null;
        const hasSubtitle = slots.subtitle || props.subtitle != null;
        const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
        const hasAppend = !!(hasAppendMedia || slots.append);
        const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
        const hasPrepend = !!(hasPrependMedia || slots.prepend);
        list == null ? void 0 : list.updateHasPrepend(hasPrepend);
        if (props.activeColor) {
          deprecate("active-color", ["color", "base-color"]);
        }
        return vue.withDirectives(vue.createVNode(Tag, {
          "class": ["v-list-item", {
            "v-list-item--active": isActive.value,
            "v-list-item--disabled": props.disabled,
            "v-list-item--link": isClickable.value,
            "v-list-item--nav": props.nav,
            "v-list-item--prepend": !hasPrepend && (list == null ? void 0 : list.hasPrepend.value),
            "v-list-item--slim": props.slim,
            [`${props.activeClass}`]: props.activeClass && isActive.value
          }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, variantClasses.value, props.class],
          "style": [colorStyles.value, dimensionStyles.value, props.style],
          "href": link.href.value,
          "tabindex": isClickable.value ? list ? -2 : 0 : void 0,
          "onClick": onClick,
          "onKeydown": isClickable.value && !isLink.value && onKeyDown
        }, {
          default: () => {
            var _a;
            return [genOverlays(isClickable.value || isActive.value, "v-list-item"), hasPrepend && vue.createVNode("div", {
              "key": "prepend",
              "class": "v-list-item__prepend"
            }, [!slots.prepend ? vue.createVNode(vue.Fragment, null, [props.prependAvatar && vue.createVNode(VAvatar, {
              "key": "prepend-avatar",
              "density": props.density,
              "image": props.prependAvatar
            }, null), props.prependIcon && vue.createVNode(VIcon, {
              "key": "prepend-icon",
              "density": props.density,
              "icon": props.prependIcon
            }, null)]) : vue.createVNode(VDefaultsProvider, {
              "key": "prepend-defaults",
              "disabled": !hasPrependMedia,
              "defaults": {
                VAvatar: {
                  density: props.density,
                  image: props.prependAvatar
                },
                VIcon: {
                  density: props.density,
                  icon: props.prependIcon
                },
                VListItemAction: {
                  start: true
                }
              }
            }, {
              default: () => {
                var _a2;
                return [(_a2 = slots.prepend) == null ? void 0 : _a2.call(slots, slotProps.value)];
              }
            }), vue.createVNode("div", {
              "class": "v-list-item__spacer"
            }, null)]), vue.createVNode("div", {
              "class": "v-list-item__content",
              "data-no-activator": ""
            }, [hasTitle && vue.createVNode(VListItemTitle, {
              "key": "title"
            }, {
              default: () => {
                var _a2;
                return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots, {
                  title: props.title
                })) ?? props.title];
              }
            }), hasSubtitle && vue.createVNode(VListItemSubtitle, {
              "key": "subtitle"
            }, {
              default: () => {
                var _a2;
                return [((_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots, {
                  subtitle: props.subtitle
                })) ?? props.subtitle];
              }
            }), (_a = slots.default) == null ? void 0 : _a.call(slots, slotProps.value)]), hasAppend && vue.createVNode("div", {
              "key": "append",
              "class": "v-list-item__append"
            }, [!slots.append ? vue.createVNode(vue.Fragment, null, [props.appendIcon && vue.createVNode(VIcon, {
              "key": "append-icon",
              "density": props.density,
              "icon": props.appendIcon
            }, null), props.appendAvatar && vue.createVNode(VAvatar, {
              "key": "append-avatar",
              "density": props.density,
              "image": props.appendAvatar
            }, null)]) : vue.createVNode(VDefaultsProvider, {
              "key": "append-defaults",
              "disabled": !hasAppendMedia,
              "defaults": {
                VAvatar: {
                  density: props.density,
                  image: props.appendAvatar
                },
                VIcon: {
                  density: props.density,
                  icon: props.appendIcon
                },
                VListItemAction: {
                  end: true
                }
              }
            }, {
              default: () => {
                var _a2;
                return [(_a2 = slots.append) == null ? void 0 : _a2.call(slots, slotProps.value)];
              }
            }), vue.createVNode("div", {
              "class": "v-list-item__spacer"
            }, null)])];
          }
        }), [[vue.resolveDirective("ripple"), isClickable.value && props.ripple]]);
      });
      return {
        isGroupActivator,
        isSelected,
        list,
        select
      };
    }
  });
  const makeVListSubheaderProps = propsFactory({
    color: String,
    inset: Boolean,
    sticky: Boolean,
    title: String,
    ...makeComponentProps(),
    ...makeTagProps()
  }, "VListSubheader");
  const VListSubheader = genericComponent()({
    name: "VListSubheader",
    props: makeVListSubheaderProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        textColorClasses,
        textColorStyles
      } = useTextColor(vue.toRef(props, "color"));
      useRender(() => {
        const hasText = !!(slots.default || props.title);
        return vue.createVNode(props.tag, {
          "class": ["v-list-subheader", {
            "v-list-subheader--inset": props.inset,
            "v-list-subheader--sticky": props.sticky
          }, textColorClasses.value, props.class],
          "style": [{
            textColorStyles
          }, props.style]
        }, {
          default: () => {
            var _a;
            return [hasText && vue.createVNode("div", {
              "class": "v-list-subheader__text"
            }, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.title])];
          }
        });
      });
      return {};
    }
  });
  const makeVDividerProps = propsFactory({
    color: String,
    inset: Boolean,
    length: [Number, String],
    opacity: [Number, String],
    thickness: [Number, String],
    vertical: Boolean,
    ...makeComponentProps(),
    ...makeThemeProps()
  }, "VDivider");
  const VDivider = genericComponent()({
    name: "VDivider",
    props: makeVDividerProps(),
    setup(props, _ref) {
      let {
        attrs,
        slots
      } = _ref;
      const {
        themeClasses
      } = provideTheme(props);
      const {
        textColorClasses,
        textColorStyles
      } = useTextColor(vue.toRef(props, "color"));
      const dividerStyles = vue.computed(() => {
        const styles = {};
        if (props.length) {
          styles[props.vertical ? "maxHeight" : "maxWidth"] = convertToUnit(props.length);
        }
        if (props.thickness) {
          styles[props.vertical ? "borderRightWidth" : "borderTopWidth"] = convertToUnit(props.thickness);
        }
        return styles;
      });
      useRender(() => {
        const divider = vue.createVNode("hr", {
          "class": [{
            "v-divider": true,
            "v-divider--inset": props.inset,
            "v-divider--vertical": props.vertical
          }, themeClasses.value, textColorClasses.value, props.class],
          "style": [dividerStyles.value, textColorStyles.value, {
            "--v-border-opacity": props.opacity
          }, props.style],
          "aria-orientation": !attrs.role || attrs.role === "separator" ? props.vertical ? "vertical" : "horizontal" : void 0,
          "role": `${attrs.role || "separator"}`
        }, null);
        if (!slots.default)
          return divider;
        return vue.createVNode("div", {
          "class": ["v-divider__wrapper", {
            "v-divider__wrapper--vertical": props.vertical,
            "v-divider__wrapper--inset": props.inset
          }]
        }, [divider, vue.createVNode("div", {
          "class": "v-divider__content"
        }, [slots.default()]), divider]);
      });
      return {};
    }
  });
  const makeVListChildrenProps = propsFactory({
    items: Array,
    returnObject: Boolean
  }, "VListChildren");
  const VListChildren = genericComponent()({
    name: "VListChildren",
    props: makeVListChildrenProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      createList();
      return () => {
        var _a, _b;
        return ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? ((_b = props.items) == null ? void 0 : _b.map((_ref2) => {
          var _a2, _b2;
          let {
            children,
            props: itemProps,
            type,
            raw: item
          } = _ref2;
          if (type === "divider") {
            return ((_a2 = slots.divider) == null ? void 0 : _a2.call(slots, {
              props: itemProps
            })) ?? vue.createVNode(VDivider, itemProps, null);
          }
          if (type === "subheader") {
            return ((_b2 = slots.subheader) == null ? void 0 : _b2.call(slots, {
              props: itemProps
            })) ?? vue.createVNode(VListSubheader, itemProps, null);
          }
          const slotsWithItem = {
            subtitle: slots.subtitle ? (slotProps) => {
              var _a3;
              return (_a3 = slots.subtitle) == null ? void 0 : _a3.call(slots, {
                ...slotProps,
                item
              });
            } : void 0,
            prepend: slots.prepend ? (slotProps) => {
              var _a3;
              return (_a3 = slots.prepend) == null ? void 0 : _a3.call(slots, {
                ...slotProps,
                item
              });
            } : void 0,
            append: slots.append ? (slotProps) => {
              var _a3;
              return (_a3 = slots.append) == null ? void 0 : _a3.call(slots, {
                ...slotProps,
                item
              });
            } : void 0,
            title: slots.title ? (slotProps) => {
              var _a3;
              return (_a3 = slots.title) == null ? void 0 : _a3.call(slots, {
                ...slotProps,
                item
              });
            } : void 0
          };
          const listGroupProps = VListGroup.filterProps(itemProps);
          return children ? vue.createVNode(VListGroup, vue.mergeProps({
            "value": itemProps == null ? void 0 : itemProps.value
          }, listGroupProps), {
            activator: (_ref3) => {
              let {
                props: activatorProps
              } = _ref3;
              const listItemProps = {
                ...itemProps,
                ...activatorProps,
                value: props.returnObject ? item : itemProps.value
              };
              return slots.header ? slots.header({
                props: listItemProps
              }) : vue.createVNode(VListItem, listItemProps, slotsWithItem);
            },
            default: () => vue.createVNode(VListChildren, {
              "items": children
            }, slots)
          }) : slots.item ? slots.item({
            props: itemProps
          }) : vue.createVNode(VListItem, vue.mergeProps(itemProps, {
            "value": props.returnObject ? item : itemProps.value
          }), slotsWithItem);
        }));
      };
    }
  });
  const makeItemsProps = propsFactory({
    items: {
      type: Array,
      default: () => []
    },
    itemTitle: {
      type: [String, Array, Function],
      default: "title"
    },
    itemValue: {
      type: [String, Array, Function],
      default: "value"
    },
    itemChildren: {
      type: [Boolean, String, Array, Function],
      default: "children"
    },
    itemProps: {
      type: [Boolean, String, Array, Function],
      default: "props"
    },
    returnObject: Boolean,
    valueComparator: {
      type: Function,
      default: deepEqual
    }
  }, "list-items");
  function transformItem$2(props, item) {
    const title = getPropertyFromItem(item, props.itemTitle, item);
    const value = getPropertyFromItem(item, props.itemValue, title);
    const children = getPropertyFromItem(item, props.itemChildren);
    const itemProps = props.itemProps === true ? typeof item === "object" && item != null && !Array.isArray(item) ? "children" in item ? omit(item, ["children"]) : item : void 0 : getPropertyFromItem(item, props.itemProps);
    const _props = {
      title,
      value,
      ...itemProps
    };
    return {
      title: String(_props.title ?? ""),
      value: _props.value,
      props: _props,
      children: Array.isArray(children) ? transformItems$2(props, children) : void 0,
      raw: item
    };
  }
  function transformItems$2(props, items) {
    const array = [];
    for (const item of items) {
      array.push(transformItem$2(props, item));
    }
    return array;
  }
  function useItems(props) {
    const items = vue.computed(() => transformItems$2(props, props.items));
    const hasNullItem = vue.computed(() => items.value.some((item) => item.value === null));
    function transformIn(value) {
      if (!hasNullItem.value) {
        value = value.filter((v) => v !== null);
      }
      return value.map((v) => {
        if (props.returnObject && typeof v === "string") {
          return transformItem$2(props, v);
        }
        return items.value.find((item) => props.valueComparator(v, item.value)) || transformItem$2(props, v);
      });
    }
    function transformOut(value) {
      return props.returnObject ? value.map((_ref) => {
        let {
          raw
        } = _ref;
        return raw;
      }) : value.map((_ref2) => {
        let {
          value: value2
        } = _ref2;
        return value2;
      });
    }
    return {
      items,
      transformIn,
      transformOut
    };
  }
  function isPrimitive(value) {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
  }
  function transformItem$1(props, item) {
    const type = getPropertyFromItem(item, props.itemType, "item");
    const title = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemTitle);
    const value = getPropertyFromItem(item, props.itemValue, void 0);
    const children = getPropertyFromItem(item, props.itemChildren);
    const itemProps = props.itemProps === true ? omit(item, ["children"]) : getPropertyFromItem(item, props.itemProps);
    const _props = {
      title,
      value,
      ...itemProps
    };
    return {
      type,
      title: _props.title,
      value: _props.value,
      props: _props,
      children: type === "item" && children ? transformItems$1(props, children) : void 0,
      raw: item
    };
  }
  function transformItems$1(props, items) {
    const array = [];
    for (const item of items) {
      array.push(transformItem$1(props, item));
    }
    return array;
  }
  function useListItems(props) {
    const items = vue.computed(() => transformItems$1(props, props.items));
    return {
      items
    };
  }
  const makeVListProps = propsFactory({
    baseColor: String,
    /* @deprecated */
    activeColor: String,
    activeClass: String,
    bgColor: String,
    disabled: Boolean,
    expandIcon: String,
    collapseIcon: String,
    lines: {
      type: [Boolean, String],
      default: "one"
    },
    slim: Boolean,
    nav: Boolean,
    ...makeNestedProps({
      selectStrategy: "single-leaf",
      openStrategy: "list"
    }),
    ...makeBorderProps(),
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    itemType: {
      type: String,
      default: "type"
    },
    ...makeItemsProps(),
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "text"
    })
  }, "VList");
  const VList = genericComponent()({
    name: "VList",
    props: makeVListProps(),
    emits: {
      "update:selected": (value) => true,
      "update:activated": (value) => true,
      "update:opened": (value) => true,
      "click:open": (value) => true,
      "click:activate": (value) => true,
      "click:select": (value) => true
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        items
      } = useListItems(props);
      const {
        themeClasses
      } = provideTheme(props);
      const {
        backgroundColorClasses,
        backgroundColorStyles
      } = useBackgroundColor(vue.toRef(props, "bgColor"));
      const {
        borderClasses
      } = useBorder(props);
      const {
        densityClasses
      } = useDensity(props);
      const {
        dimensionStyles
      } = useDimension(props);
      const {
        elevationClasses
      } = useElevation(props);
      const {
        roundedClasses
      } = useRounded(props);
      const {
        children,
        open,
        parents,
        select
      } = useNested(props);
      const lineClasses = vue.computed(() => props.lines ? `v-list--${props.lines}-line` : void 0);
      const activeColor = vue.toRef(props, "activeColor");
      const baseColor = vue.toRef(props, "baseColor");
      const color = vue.toRef(props, "color");
      createList();
      provideDefaults({
        VListGroup: {
          activeColor,
          baseColor,
          color,
          expandIcon: vue.toRef(props, "expandIcon"),
          collapseIcon: vue.toRef(props, "collapseIcon")
        },
        VListItem: {
          activeClass: vue.toRef(props, "activeClass"),
          activeColor,
          baseColor,
          color,
          density: vue.toRef(props, "density"),
          disabled: vue.toRef(props, "disabled"),
          lines: vue.toRef(props, "lines"),
          nav: vue.toRef(props, "nav"),
          slim: vue.toRef(props, "slim"),
          variant: vue.toRef(props, "variant")
        }
      });
      const isFocused = vue.shallowRef(false);
      const contentRef = vue.ref();
      function onFocusin(e) {
        isFocused.value = true;
      }
      function onFocusout(e) {
        isFocused.value = false;
      }
      function onFocus(e) {
        var _a;
        if (!isFocused.value && !(e.relatedTarget && ((_a = contentRef.value) == null ? void 0 : _a.contains(e.relatedTarget))))
          focus();
      }
      function onKeydown(e) {
        const target = e.target;
        if (!contentRef.value || ["INPUT", "TEXTAREA"].includes(target.tagName))
          return;
        if (e.key === "ArrowDown") {
          focus("next");
        } else if (e.key === "ArrowUp") {
          focus("prev");
        } else if (e.key === "Home") {
          focus("first");
        } else if (e.key === "End") {
          focus("last");
        } else {
          return;
        }
        e.preventDefault();
      }
      function onMousedown(e) {
        isFocused.value = true;
      }
      function focus(location) {
        if (contentRef.value) {
          return focusChild(contentRef.value, location);
        }
      }
      useRender(() => {
        return vue.createVNode(props.tag, {
          "ref": contentRef,
          "class": ["v-list", {
            "v-list--disabled": props.disabled,
            "v-list--nav": props.nav,
            "v-list--slim": props.slim
          }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, props.class],
          "style": [backgroundColorStyles.value, dimensionStyles.value, props.style],
          "tabindex": props.disabled || isFocused.value ? -1 : 0,
          "role": "listbox",
          "aria-activedescendant": void 0,
          "onFocusin": onFocusin,
          "onFocusout": onFocusout,
          "onFocus": onFocus,
          "onKeydown": onKeydown,
          "onMousedown": onMousedown
        }, {
          default: () => [vue.createVNode(VListChildren, {
            "items": items.value,
            "returnObject": props.returnObject
          }, slots)]
        });
      });
      return {
        open,
        select,
        focus,
        children,
        parents
      };
    }
  });
  function elementToViewport(point, offset) {
    return {
      x: point.x + offset.x,
      y: point.y + offset.y
    };
  }
  function getOffset(a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }
  function anchorToPoint(anchor, box) {
    if (anchor.side === "top" || anchor.side === "bottom") {
      const {
        side,
        align
      } = anchor;
      const x = align === "left" ? 0 : align === "center" ? box.width / 2 : align === "right" ? box.width : align;
      const y = side === "top" ? 0 : side === "bottom" ? box.height : side;
      return elementToViewport({
        x,
        y
      }, box);
    } else if (anchor.side === "left" || anchor.side === "right") {
      const {
        side,
        align
      } = anchor;
      const x = side === "left" ? 0 : side === "right" ? box.width : side;
      const y = align === "top" ? 0 : align === "center" ? box.height / 2 : align === "bottom" ? box.height : align;
      return elementToViewport({
        x,
        y
      }, box);
    }
    return elementToViewport({
      x: box.width / 2,
      y: box.height / 2
    }, box);
  }
  const locationStrategies = {
    static: staticLocationStrategy,
    // specific viewport position, usually centered
    connected: connectedLocationStrategy
    // connected to a certain element
  };
  const makeLocationStrategyProps = propsFactory({
    locationStrategy: {
      type: [String, Function],
      default: "static",
      validator: (val) => typeof val === "function" || val in locationStrategies
    },
    location: {
      type: String,
      default: "bottom"
    },
    origin: {
      type: String,
      default: "auto"
    },
    offset: [Number, String, Array]
  }, "VOverlay-location-strategies");
  function useLocationStrategies(props, data) {
    const contentStyles = vue.ref({});
    const updateLocation = vue.ref();
    if (IN_BROWSER) {
      useToggleScope(() => !!(data.isActive.value && props.locationStrategy), (reset) => {
        var _a, _b;
        vue.watch(() => props.locationStrategy, reset);
        vue.onScopeDispose(() => {
          window.removeEventListener("resize", onResize);
          updateLocation.value = void 0;
        });
        window.addEventListener("resize", onResize, {
          passive: true
        });
        if (typeof props.locationStrategy === "function") {
          updateLocation.value = (_a = props.locationStrategy(data, props, contentStyles)) == null ? void 0 : _a.updateLocation;
        } else {
          updateLocation.value = (_b = locationStrategies[props.locationStrategy](data, props, contentStyles)) == null ? void 0 : _b.updateLocation;
        }
      });
    }
    function onResize(e) {
      var _a;
      (_a = updateLocation.value) == null ? void 0 : _a.call(updateLocation, e);
    }
    return {
      contentStyles,
      updateLocation
    };
  }
  function staticLocationStrategy() {
  }
  function getIntrinsicSize(el, isRtl) {
    if (isRtl) {
      el.style.removeProperty("left");
    } else {
      el.style.removeProperty("right");
    }
    const contentBox = nullifyTransforms(el);
    if (isRtl) {
      contentBox.x += parseFloat(el.style.right || 0);
    } else {
      contentBox.x -= parseFloat(el.style.left || 0);
    }
    contentBox.y -= parseFloat(el.style.top || 0);
    return contentBox;
  }
  function connectedLocationStrategy(data, props, contentStyles) {
    const activatorFixed = Array.isArray(data.target.value) || isFixedPosition(data.target.value);
    if (activatorFixed) {
      Object.assign(contentStyles.value, {
        position: "fixed",
        top: 0,
        [data.isRtl.value ? "right" : "left"]: 0
      });
    }
    const {
      preferredAnchor,
      preferredOrigin
    } = destructComputed(() => {
      const parsedAnchor = parseAnchor(props.location, data.isRtl.value);
      const parsedOrigin = props.origin === "overlap" ? parsedAnchor : props.origin === "auto" ? flipSide(parsedAnchor) : parseAnchor(props.origin, data.isRtl.value);
      if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) {
        return {
          preferredAnchor: flipCorner(parsedAnchor),
          preferredOrigin: flipCorner(parsedOrigin)
        };
      } else {
        return {
          preferredAnchor: parsedAnchor,
          preferredOrigin: parsedOrigin
        };
      }
    });
    const [minWidth, minHeight, maxWidth, maxHeight] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((key) => {
      return vue.computed(() => {
        const val = parseFloat(props[key]);
        return isNaN(val) ? Infinity : val;
      });
    });
    const offset = vue.computed(() => {
      if (Array.isArray(props.offset)) {
        return props.offset;
      }
      if (typeof props.offset === "string") {
        const offset2 = props.offset.split(" ").map(parseFloat);
        if (offset2.length < 2)
          offset2.push(0);
        return offset2;
      }
      return typeof props.offset === "number" ? [props.offset, 0] : [0, 0];
    });
    let observe = false;
    const observer = new ResizeObserver(() => {
      if (observe)
        updateLocation();
    });
    vue.watch([data.target, data.contentEl], (_ref, _ref2) => {
      let [newTarget, newContentEl] = _ref;
      let [oldTarget, oldContentEl] = _ref2;
      if (oldTarget && !Array.isArray(oldTarget))
        observer.unobserve(oldTarget);
      if (newTarget && !Array.isArray(newTarget))
        observer.observe(newTarget);
      if (oldContentEl)
        observer.unobserve(oldContentEl);
      if (newContentEl)
        observer.observe(newContentEl);
    }, {
      immediate: true
    });
    vue.onScopeDispose(() => {
      observer.disconnect();
    });
    function updateLocation() {
      observe = false;
      requestAnimationFrame(() => observe = true);
      if (!data.target.value || !data.contentEl.value)
        return;
      const targetBox = getTargetBox(data.target.value);
      const contentBox = getIntrinsicSize(data.contentEl.value, data.isRtl.value);
      const scrollParents = getScrollParents(data.contentEl.value);
      const viewportMargin = 12;
      if (!scrollParents.length) {
        scrollParents.push(document.documentElement);
        if (!(data.contentEl.value.style.top && data.contentEl.value.style.left)) {
          contentBox.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0);
          contentBox.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0);
        }
      }
      const viewport = scrollParents.reduce((box, el) => {
        const rect = el.getBoundingClientRect();
        const scrollBox = new Box({
          x: el === document.documentElement ? 0 : rect.x,
          y: el === document.documentElement ? 0 : rect.y,
          width: el.clientWidth,
          height: el.clientHeight
        });
        if (box) {
          return new Box({
            x: Math.max(box.left, scrollBox.left),
            y: Math.max(box.top, scrollBox.top),
            width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
            height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
          });
        }
        return scrollBox;
      }, void 0);
      viewport.x += viewportMargin;
      viewport.y += viewportMargin;
      viewport.width -= viewportMargin * 2;
      viewport.height -= viewportMargin * 2;
      let placement = {
        anchor: preferredAnchor.value,
        origin: preferredOrigin.value
      };
      function checkOverflow(_placement) {
        const box = new Box(contentBox);
        const targetPoint = anchorToPoint(_placement.anchor, targetBox);
        const contentPoint = anchorToPoint(_placement.origin, box);
        let {
          x: x2,
          y: y2
        } = getOffset(targetPoint, contentPoint);
        switch (_placement.anchor.side) {
          case "top":
            y2 -= offset.value[0];
            break;
          case "bottom":
            y2 += offset.value[0];
            break;
          case "left":
            x2 -= offset.value[0];
            break;
          case "right":
            x2 += offset.value[0];
            break;
        }
        switch (_placement.anchor.align) {
          case "top":
            y2 -= offset.value[1];
            break;
          case "bottom":
            y2 += offset.value[1];
            break;
          case "left":
            x2 -= offset.value[1];
            break;
          case "right":
            x2 += offset.value[1];
            break;
        }
        box.x += x2;
        box.y += y2;
        box.width = Math.min(box.width, maxWidth.value);
        box.height = Math.min(box.height, maxHeight.value);
        const overflows = getOverflow(box, viewport);
        return {
          overflows,
          x: x2,
          y: y2
        };
      }
      let x = 0;
      let y = 0;
      const available = {
        x: 0,
        y: 0
      };
      const flipped = {
        x: false,
        y: false
      };
      let resets = -1;
      while (true) {
        if (resets++ > 10) {
          consoleError("Infinite loop detected in connectedLocationStrategy");
          break;
        }
        const {
          x: _x,
          y: _y,
          overflows
        } = checkOverflow(placement);
        x += _x;
        y += _y;
        contentBox.x += _x;
        contentBox.y += _y;
        {
          const axis2 = getAxis(placement.anchor);
          const hasOverflowX = overflows.x.before || overflows.x.after;
          const hasOverflowY = overflows.y.before || overflows.y.after;
          let reset = false;
          ["x", "y"].forEach((key) => {
            if (key === "x" && hasOverflowX && !flipped.x || key === "y" && hasOverflowY && !flipped.y) {
              const newPlacement = {
                anchor: {
                  ...placement.anchor
                },
                origin: {
                  ...placement.origin
                }
              };
              const flip = key === "x" ? axis2 === "y" ? flipAlign : flipSide : axis2 === "y" ? flipSide : flipAlign;
              newPlacement.anchor = flip(newPlacement.anchor);
              newPlacement.origin = flip(newPlacement.origin);
              const {
                overflows: newOverflows
              } = checkOverflow(newPlacement);
              if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
                placement = newPlacement;
                reset = flipped[key] = true;
              }
            }
          });
          if (reset)
            continue;
        }
        if (overflows.x.before) {
          x += overflows.x.before;
          contentBox.x += overflows.x.before;
        }
        if (overflows.x.after) {
          x -= overflows.x.after;
          contentBox.x -= overflows.x.after;
        }
        if (overflows.y.before) {
          y += overflows.y.before;
          contentBox.y += overflows.y.before;
        }
        if (overflows.y.after) {
          y -= overflows.y.after;
          contentBox.y -= overflows.y.after;
        }
        {
          const overflows2 = getOverflow(contentBox, viewport);
          available.x = viewport.width - overflows2.x.before - overflows2.x.after;
          available.y = viewport.height - overflows2.y.before - overflows2.y.after;
          x += overflows2.x.before;
          contentBox.x += overflows2.x.before;
          y += overflows2.y.before;
          contentBox.y += overflows2.y.before;
        }
        break;
      }
      const axis = getAxis(placement.anchor);
      Object.assign(contentStyles.value, {
        "--v-overlay-anchor-origin": `${placement.anchor.side} ${placement.anchor.align}`,
        transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
        // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
        top: convertToUnit(pixelRound(y)),
        left: data.isRtl.value ? void 0 : convertToUnit(pixelRound(x)),
        right: data.isRtl.value ? convertToUnit(pixelRound(-x)) : void 0,
        minWidth: convertToUnit(axis === "y" ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
        maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
        maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
      });
      return {
        available,
        contentBox
      };
    }
    vue.watch(() => [preferredAnchor.value, preferredOrigin.value, props.offset, props.minWidth, props.minHeight, props.maxWidth, props.maxHeight], () => updateLocation());
    vue.nextTick(() => {
      const result = updateLocation();
      if (!result)
        return;
      const {
        available,
        contentBox
      } = result;
      if (contentBox.height > available.y) {
        requestAnimationFrame(() => {
          updateLocation();
          requestAnimationFrame(() => {
            updateLocation();
          });
        });
      }
    });
    return {
      updateLocation
    };
  }
  function pixelRound(val) {
    return Math.round(val * devicePixelRatio) / devicePixelRatio;
  }
  function pixelCeil(val) {
    return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
  }
  let clean = true;
  const frames = [];
  function requestNewFrame(cb) {
    if (!clean || frames.length) {
      frames.push(cb);
      run();
    } else {
      clean = false;
      cb();
      run();
    }
  }
  let raf = -1;
  function run() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const frame = frames.shift();
      if (frame)
        frame();
      if (frames.length)
        run();
      else
        clean = true;
    });
  }
  const scrollStrategies = {
    none: null,
    close: closeScrollStrategy,
    block: blockScrollStrategy,
    reposition: repositionScrollStrategy
  };
  const makeScrollStrategyProps = propsFactory({
    scrollStrategy: {
      type: [String, Function],
      default: "block",
      validator: (val) => typeof val === "function" || val in scrollStrategies
    }
  }, "VOverlay-scroll-strategies");
  function useScrollStrategies(props, data) {
    if (!IN_BROWSER)
      return;
    let scope;
    vue.watchEffect(async () => {
      scope == null ? void 0 : scope.stop();
      if (!(data.isActive.value && props.scrollStrategy))
        return;
      scope = vue.effectScope();
      await new Promise((resolve) => setTimeout(resolve));
      scope.active && scope.run(() => {
        var _a;
        if (typeof props.scrollStrategy === "function") {
          props.scrollStrategy(data, props, scope);
        } else {
          (_a = scrollStrategies[props.scrollStrategy]) == null ? void 0 : _a.call(scrollStrategies, data, props, scope);
        }
      });
    });
    vue.onScopeDispose(() => {
      scope == null ? void 0 : scope.stop();
    });
  }
  function closeScrollStrategy(data) {
    function onScroll(e) {
      data.isActive.value = false;
    }
    bindScroll(data.targetEl.value ?? data.contentEl.value, onScroll);
  }
  function blockScrollStrategy(data, props) {
    var _a;
    const offsetParent = (_a = data.root.value) == null ? void 0 : _a.offsetParent;
    const scrollElements = [.../* @__PURE__ */ new Set([...getScrollParents(data.targetEl.value, props.contained ? offsetParent : void 0), ...getScrollParents(data.contentEl.value, props.contained ? offsetParent : void 0)])].filter((el) => !el.classList.contains("v-overlay-scroll-blocked"));
    const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
    const scrollableParent = ((el) => hasScrollbar(el) && el)(offsetParent || document.documentElement);
    if (scrollableParent) {
      data.root.value.classList.add("v-overlay--scroll-blocked");
    }
    scrollElements.forEach((el, i) => {
      el.style.setProperty("--v-body-scroll-x", convertToUnit(-el.scrollLeft));
      el.style.setProperty("--v-body-scroll-y", convertToUnit(-el.scrollTop));
      if (el !== document.documentElement) {
        el.style.setProperty("--v-scrollbar-offset", convertToUnit(scrollbarWidth));
      }
      el.classList.add("v-overlay-scroll-blocked");
    });
    vue.onScopeDispose(() => {
      scrollElements.forEach((el, i) => {
        const x = parseFloat(el.style.getPropertyValue("--v-body-scroll-x"));
        const y = parseFloat(el.style.getPropertyValue("--v-body-scroll-y"));
        const scrollBehavior = el.style.scrollBehavior;
        el.style.scrollBehavior = "auto";
        el.style.removeProperty("--v-body-scroll-x");
        el.style.removeProperty("--v-body-scroll-y");
        el.style.removeProperty("--v-scrollbar-offset");
        el.classList.remove("v-overlay-scroll-blocked");
        el.scrollLeft = -x;
        el.scrollTop = -y;
        el.style.scrollBehavior = scrollBehavior;
      });
      if (scrollableParent) {
        data.root.value.classList.remove("v-overlay--scroll-blocked");
      }
    });
  }
  function repositionScrollStrategy(data, props, scope) {
    let slow = false;
    let raf2 = -1;
    let ric = -1;
    function update(e) {
      requestNewFrame(() => {
        var _a, _b;
        const start = performance.now();
        (_b = (_a = data.updateLocation).value) == null ? void 0 : _b.call(_a, e);
        const time = performance.now() - start;
        slow = time / (1e3 / 60) > 2;
      });
    }
    ric = (typeof requestIdleCallback === "undefined" ? (cb) => cb() : requestIdleCallback)(() => {
      scope.run(() => {
        bindScroll(data.targetEl.value ?? data.contentEl.value, (e) => {
          if (slow) {
            cancelAnimationFrame(raf2);
            raf2 = requestAnimationFrame(() => {
              raf2 = requestAnimationFrame(() => {
                update(e);
              });
            });
          } else {
            update(e);
          }
        });
      });
    });
    vue.onScopeDispose(() => {
      typeof cancelIdleCallback !== "undefined" && cancelIdleCallback(ric);
      cancelAnimationFrame(raf2);
    });
  }
  function bindScroll(el, onScroll) {
    const scrollElements = [document, ...getScrollParents(el)];
    scrollElements.forEach((el2) => {
      el2.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    vue.onScopeDispose(() => {
      scrollElements.forEach((el2) => {
        el2.removeEventListener("scroll", onScroll);
      });
    });
  }
  const VMenuSymbol = Symbol.for("vuetify:v-menu");
  const makeDelayProps = propsFactory({
    closeDelay: [Number, String],
    openDelay: [Number, String]
  }, "delay");
  function useDelay(props, cb) {
    let clearDelay = () => {
    };
    function runDelay(isOpening) {
      clearDelay == null ? void 0 : clearDelay();
      const delay = Number(isOpening ? props.openDelay : props.closeDelay);
      return new Promise((resolve) => {
        clearDelay = defer(delay, () => {
          cb == null ? void 0 : cb(isOpening);
          resolve(isOpening);
        });
      });
    }
    function runOpenDelay() {
      return runDelay(true);
    }
    function runCloseDelay() {
      return runDelay(false);
    }
    return {
      clearDelay,
      runOpenDelay,
      runCloseDelay
    };
  }
  const makeActivatorProps = propsFactory({
    target: [String, Object],
    activator: [String, Object],
    activatorProps: {
      type: Object,
      default: () => ({})
    },
    openOnClick: {
      type: Boolean,
      default: void 0
    },
    openOnHover: Boolean,
    openOnFocus: {
      type: Boolean,
      default: void 0
    },
    closeOnContentClick: Boolean,
    ...makeDelayProps()
  }, "VOverlay-activator");
  function useActivator(props, _ref) {
    let {
      isActive,
      isTop
    } = _ref;
    const vm = getCurrentInstance("useActivator");
    const activatorEl = vue.ref();
    let isHovered = false;
    let isFocused = false;
    let firstEnter = true;
    const openOnFocus = vue.computed(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
    const openOnClick = vue.computed(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      if (value === (props.openOnHover && isHovered || openOnFocus.value && isFocused) && !(props.openOnHover && isActive.value && !isTop.value)) {
        if (isActive.value !== value) {
          firstEnter = true;
        }
        isActive.value = value;
      }
    });
    const cursorTarget = vue.ref();
    const availableEvents = {
      onClick: (e) => {
        e.stopPropagation();
        activatorEl.value = e.currentTarget || e.target;
        if (!isActive.value) {
          cursorTarget.value = [e.clientX, e.clientY];
        }
        isActive.value = !isActive.value;
      },
      onMouseenter: (e) => {
        var _a;
        if ((_a = e.sourceCapabilities) == null ? void 0 : _a.firesTouchEvents)
          return;
        isHovered = true;
        activatorEl.value = e.currentTarget || e.target;
        runOpenDelay();
      },
      onMouseleave: (e) => {
        isHovered = false;
        runCloseDelay();
      },
      onFocus: (e) => {
        if (matchesSelector(e.target, ":focus-visible") === false)
          return;
        isFocused = true;
        e.stopPropagation();
        activatorEl.value = e.currentTarget || e.target;
        runOpenDelay();
      },
      onBlur: (e) => {
        isFocused = false;
        e.stopPropagation();
        runCloseDelay();
      }
    };
    const activatorEvents = vue.computed(() => {
      const events = {};
      if (openOnClick.value) {
        events.onClick = availableEvents.onClick;
      }
      if (props.openOnHover) {
        events.onMouseenter = availableEvents.onMouseenter;
        events.onMouseleave = availableEvents.onMouseleave;
      }
      if (openOnFocus.value) {
        events.onFocus = availableEvents.onFocus;
        events.onBlur = availableEvents.onBlur;
      }
      return events;
    });
    const contentEvents = vue.computed(() => {
      const events = {};
      if (props.openOnHover) {
        events.onMouseenter = () => {
          isHovered = true;
          runOpenDelay();
        };
        events.onMouseleave = () => {
          isHovered = false;
          runCloseDelay();
        };
      }
      if (openOnFocus.value) {
        events.onFocusin = () => {
          isFocused = true;
          runOpenDelay();
        };
        events.onFocusout = () => {
          isFocused = false;
          runCloseDelay();
        };
      }
      if (props.closeOnContentClick) {
        const menu = vue.inject(VMenuSymbol, null);
        events.onClick = () => {
          isActive.value = false;
          menu == null ? void 0 : menu.closeParents();
        };
      }
      return events;
    });
    const scrimEvents = vue.computed(() => {
      const events = {};
      if (props.openOnHover) {
        events.onMouseenter = () => {
          if (firstEnter) {
            isHovered = true;
            firstEnter = false;
            runOpenDelay();
          }
        };
        events.onMouseleave = () => {
          isHovered = false;
          runCloseDelay();
        };
      }
      return events;
    });
    vue.watch(isTop, (val) => {
      if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered))) {
        isActive.value = false;
      }
    });
    vue.watch(isActive, (val) => {
      if (!val) {
        setTimeout(() => {
          cursorTarget.value = void 0;
        });
      }
    }, {
      flush: "post"
    });
    const activatorRef = templateRef();
    vue.watchEffect(() => {
      if (!activatorRef.value)
        return;
      vue.nextTick(() => {
        activatorEl.value = activatorRef.el;
      });
    });
    const targetRef = templateRef();
    const target = vue.computed(() => {
      if (props.target === "cursor" && cursorTarget.value)
        return cursorTarget.value;
      if (targetRef.value)
        return targetRef.el;
      return getTarget(props.target, vm) || activatorEl.value;
    });
    const targetEl = vue.computed(() => {
      return Array.isArray(target.value) ? void 0 : target.value;
    });
    let scope;
    vue.watch(() => !!props.activator, (val) => {
      if (val && IN_BROWSER) {
        scope = vue.effectScope();
        scope.run(() => {
          _useActivator(props, vm, {
            activatorEl,
            activatorEvents
          });
        });
      } else if (scope) {
        scope.stop();
      }
    }, {
      flush: "post",
      immediate: true
    });
    vue.onScopeDispose(() => {
      scope == null ? void 0 : scope.stop();
    });
    return {
      activatorEl,
      activatorRef,
      target,
      targetEl,
      targetRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    };
  }
  function _useActivator(props, vm, _ref2) {
    let {
      activatorEl,
      activatorEvents
    } = _ref2;
    vue.watch(() => props.activator, (val, oldVal) => {
      if (oldVal && val !== oldVal) {
        const activator = getActivator(oldVal);
        activator && unbindActivatorProps(activator);
      }
      if (val) {
        vue.nextTick(() => bindActivatorProps());
      }
    }, {
      immediate: true
    });
    vue.watch(() => props.activatorProps, () => {
      bindActivatorProps();
    });
    vue.onScopeDispose(() => {
      unbindActivatorProps();
    });
    function bindActivatorProps() {
      let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
      let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
      if (!el)
        return;
      bindProps(el, vue.mergeProps(activatorEvents.value, _props));
    }
    function unbindActivatorProps() {
      let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
      let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
      if (!el)
        return;
      unbindProps(el, vue.mergeProps(activatorEvents.value, _props));
    }
    function getActivator() {
      let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activator;
      const activator = getTarget(selector, vm);
      activatorEl.value = (activator == null ? void 0 : activator.nodeType) === Node.ELEMENT_NODE ? activator : void 0;
      return activatorEl.value;
    }
  }
  function getTarget(selector, vm) {
    var _a, _b;
    if (!selector)
      return;
    let target;
    if (selector === "parent") {
      let el = (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$el) == null ? void 0 : _b.parentNode;
      while (el == null ? void 0 : el.hasAttribute("data-no-activator")) {
        el = el.parentNode;
      }
      target = el;
    } else if (typeof selector === "string") {
      target = document.querySelector(selector);
    } else if ("$el" in selector) {
      target = selector.$el;
    } else {
      target = selector;
    }
    return target;
  }
  function useHydration() {
    if (!IN_BROWSER)
      return vue.shallowRef(false);
    const {
      ssr
    } = useDisplay();
    if (ssr) {
      const isMounted = vue.shallowRef(false);
      vue.onMounted(() => {
        isMounted.value = true;
      });
      return isMounted;
    } else {
      return vue.shallowRef(true);
    }
  }
  const makeLazyProps = propsFactory({
    eager: Boolean
  }, "lazy");
  function useLazy(props, active) {
    const isBooted = vue.shallowRef(false);
    const hasContent = vue.computed(() => isBooted.value || props.eager || active.value);
    vue.watch(active, () => isBooted.value = true);
    function onAfterLeave() {
      if (!props.eager)
        isBooted.value = false;
    }
    return {
      isBooted,
      hasContent,
      onAfterLeave
    };
  }
  function useScopeId() {
    const vm = getCurrentInstance("useScopeId");
    const scopeId = vm.vnode.scopeId;
    return {
      scopeId: scopeId ? {
        [scopeId]: ""
      } : void 0
    };
  }
  const StackSymbol = Symbol.for("vuetify:stack");
  const globalStack = vue.reactive([]);
  function useStack(isActive, zIndex, disableGlobalStack) {
    const vm = getCurrentInstance("useStack");
    const createStackEntry = !disableGlobalStack;
    const parent = vue.inject(StackSymbol, void 0);
    const stack = vue.reactive({
      activeChildren: /* @__PURE__ */ new Set()
    });
    vue.provide(StackSymbol, stack);
    const _zIndex = vue.shallowRef(+zIndex.value);
    useToggleScope(isActive, () => {
      var _a;
      const lastZIndex = (_a = globalStack.at(-1)) == null ? void 0 : _a[1];
      _zIndex.value = lastZIndex ? lastZIndex + 10 : +zIndex.value;
      if (createStackEntry) {
        globalStack.push([vm.uid, _zIndex.value]);
      }
      parent == null ? void 0 : parent.activeChildren.add(vm.uid);
      vue.onScopeDispose(() => {
        if (createStackEntry) {
          const idx = vue.toRaw(globalStack).findIndex((v) => v[0] === vm.uid);
          globalStack.splice(idx, 1);
        }
        parent == null ? void 0 : parent.activeChildren.delete(vm.uid);
      });
    });
    const globalTop = vue.shallowRef(true);
    if (createStackEntry) {
      vue.watchEffect(() => {
        var _a;
        const _isTop = ((_a = globalStack.at(-1)) == null ? void 0 : _a[0]) === vm.uid;
        setTimeout(() => globalTop.value = _isTop);
      });
    }
    const localTop = vue.computed(() => !stack.activeChildren.size);
    return {
      globalTop: vue.readonly(globalTop),
      localTop,
      stackStyles: vue.computed(() => ({
        zIndex: _zIndex.value
      }))
    };
  }
  function useTeleport(target) {
    const teleportTarget = vue.computed(() => {
      const _target = target.value;
      if (_target === true || !IN_BROWSER)
        return void 0;
      const targetElement = _target === false ? document.body : typeof _target === "string" ? document.querySelector(_target) : _target;
      if (targetElement == null) {
        vue.warn(`Unable to locate target ${_target}`);
        return void 0;
      }
      let container = targetElement.querySelector(":scope > .v-overlay-container");
      if (!container) {
        container = document.createElement("div");
        container.className = "v-overlay-container";
        targetElement.appendChild(container);
      }
      return container;
    });
    return {
      teleportTarget
    };
  }
  function defaultConditional() {
    return true;
  }
  function checkEvent(e, el, binding) {
    if (!e || checkIsActive(e, binding) === false)
      return false;
    const root = attachedRoot(el);
    if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot && root.host === e.target)
      return false;
    const elements = (typeof binding.value === "object" && binding.value.include || (() => []))();
    elements.push(el);
    return !elements.some((el2) => el2 == null ? void 0 : el2.contains(e.target));
  }
  function checkIsActive(e, binding) {
    const isActive = typeof binding.value === "object" && binding.value.closeConditional || defaultConditional;
    return isActive(e);
  }
  function directive(e, el, binding) {
    const handler = typeof binding.value === "function" ? binding.value : binding.value.handler;
    el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
      checkIsActive(e, binding) && handler && handler(e);
    }, 0);
  }
  function handleShadow(el, callback) {
    const root = attachedRoot(el);
    callback(document);
    if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
      callback(root);
    }
  }
  const ClickOutside = {
    // [data-app] may not be found
    // if using bind, inserted makes
    // sure that the root element is
    // available, iOS does not support
    // clicks on body
    mounted(el, binding) {
      const onClick = (e) => directive(e, el, binding);
      const onMousedown = (e) => {
        el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
      };
      handleShadow(el, (app) => {
        app.addEventListener("click", onClick, true);
        app.addEventListener("mousedown", onMousedown, true);
      });
      if (!el._clickOutside) {
        el._clickOutside = {
          lastMousedownWasOutside: false
        };
      }
      el._clickOutside[binding.instance.$.uid] = {
        onClick,
        onMousedown
      };
    },
    unmounted(el, binding) {
      if (!el._clickOutside)
        return;
      handleShadow(el, (app) => {
        var _a;
        if (!app || !((_a = el._clickOutside) == null ? void 0 : _a[binding.instance.$.uid]))
          return;
        const {
          onClick,
          onMousedown
        } = el._clickOutside[binding.instance.$.uid];
        app.removeEventListener("click", onClick, true);
        app.removeEventListener("mousedown", onMousedown, true);
      });
      delete el._clickOutside[binding.instance.$.uid];
    }
  };
  function Scrim(props) {
    const {
      modelValue,
      color,
      ...rest
    } = props;
    return vue.createVNode(vue.Transition, {
      "name": "fade-transition",
      "appear": true
    }, {
      default: () => [props.modelValue && vue.createVNode("div", vue.mergeProps({
        "class": ["v-overlay__scrim", props.color.backgroundColorClasses.value],
        "style": props.color.backgroundColorStyles.value
      }, rest), null)]
    });
  }
  const makeVOverlayProps = propsFactory({
    absolute: Boolean,
    attach: [Boolean, String, Object],
    closeOnBack: {
      type: Boolean,
      default: true
    },
    contained: Boolean,
    contentClass: null,
    contentProps: null,
    disabled: Boolean,
    opacity: [Number, String],
    noClickAnimation: Boolean,
    modelValue: Boolean,
    persistent: Boolean,
    scrim: {
      type: [Boolean, String],
      default: true
    },
    zIndex: {
      type: [Number, String],
      default: 2e3
    },
    ...makeActivatorProps(),
    ...makeComponentProps(),
    ...makeDimensionProps(),
    ...makeLazyProps(),
    ...makeLocationStrategyProps(),
    ...makeScrollStrategyProps(),
    ...makeThemeProps(),
    ...makeTransitionProps$1()
  }, "VOverlay");
  const VOverlay = genericComponent()({
    name: "VOverlay",
    directives: {
      ClickOutside
    },
    inheritAttrs: false,
    props: {
      _disableGlobalStack: Boolean,
      ...makeVOverlayProps()
    },
    emits: {
      "click:outside": (e) => true,
      "update:modelValue": (value) => true,
      afterEnter: () => true,
      afterLeave: () => true
    },
    setup(props, _ref) {
      let {
        slots,
        attrs,
        emit
      } = _ref;
      const model = useProxiedModel(props, "modelValue");
      const isActive = vue.computed({
        get: () => model.value,
        set: (v) => {
          if (!(v && props.disabled))
            model.value = v;
        }
      });
      const {
        teleportTarget
      } = useTeleport(vue.computed(() => props.attach || props.contained));
      const {
        themeClasses
      } = provideTheme(props);
      const {
        rtlClasses,
        isRtl
      } = useRtl();
      const {
        hasContent,
        onAfterLeave: _onAfterLeave
      } = useLazy(props, isActive);
      const scrimColor = useBackgroundColor(vue.computed(() => {
        return typeof props.scrim === "string" ? props.scrim : null;
      }));
      const {
        globalTop,
        localTop,
        stackStyles
      } = useStack(isActive, vue.toRef(props, "zIndex"), props._disableGlobalStack);
      const {
        activatorEl,
        activatorRef,
        target,
        targetEl,
        targetRef,
        activatorEvents,
        contentEvents,
        scrimEvents
      } = useActivator(props, {
        isActive,
        isTop: localTop
      });
      const {
        dimensionStyles
      } = useDimension(props);
      const isMounted = useHydration();
      const {
        scopeId
      } = useScopeId();
      vue.watch(() => props.disabled, (v) => {
        if (v)
          isActive.value = false;
      });
      const root = vue.ref();
      const scrimEl = vue.ref();
      const contentEl = vue.ref();
      const {
        contentStyles,
        updateLocation
      } = useLocationStrategies(props, {
        isRtl,
        contentEl,
        target,
        isActive
      });
      useScrollStrategies(props, {
        root,
        contentEl,
        targetEl,
        isActive,
        updateLocation
      });
      function onClickOutside(e) {
        emit("click:outside", e);
        if (!props.persistent)
          isActive.value = false;
        else
          animateClick();
      }
      function closeConditional(e) {
        return isActive.value && globalTop.value && // If using scrim, only close if clicking on it rather than anything opened on top
        (!props.scrim || e.target === scrimEl.value);
      }
      IN_BROWSER && vue.watch(isActive, (val) => {
        if (val) {
          window.addEventListener("keydown", onKeydown);
        } else {
          window.removeEventListener("keydown", onKeydown);
        }
      }, {
        immediate: true
      });
      vue.onBeforeUnmount(() => {
        if (!IN_BROWSER)
          return;
        window.removeEventListener("keydown", onKeydown);
      });
      function onKeydown(e) {
        var _a, _b;
        if (e.key === "Escape" && globalTop.value) {
          if (!props.persistent) {
            isActive.value = false;
            if ((_a = contentEl.value) == null ? void 0 : _a.contains(document.activeElement)) {
              (_b = activatorEl.value) == null ? void 0 : _b.focus();
            }
          } else
            animateClick();
        }
      }
      const router = useRouter();
      useToggleScope(() => props.closeOnBack, () => {
        useBackButton(router, (next) => {
          if (globalTop.value && isActive.value) {
            next(false);
            if (!props.persistent)
              isActive.value = false;
            else
              animateClick();
          } else {
            next();
          }
        });
      });
      const top = vue.ref();
      vue.watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, (val) => {
        if (val) {
          const scrollParent = getScrollParent(root.value);
          if (scrollParent && scrollParent !== document.scrollingElement) {
            top.value = scrollParent.scrollTop;
          }
        }
      });
      function animateClick() {
        if (props.noClickAnimation)
          return;
        contentEl.value && animate(contentEl.value, [{
          transformOrigin: "center"
        }, {
          transform: "scale(1.03)"
        }, {
          transformOrigin: "center"
        }], {
          duration: 150,
          easing: standardEasing
        });
      }
      function onAfterEnter() {
        emit("afterEnter");
      }
      function onAfterLeave() {
        _onAfterLeave();
        emit("afterLeave");
      }
      useRender(() => {
        var _a;
        return vue.createVNode(vue.Fragment, null, [(_a = slots.activator) == null ? void 0 : _a.call(slots, {
          isActive: isActive.value,
          targetRef,
          props: vue.mergeProps({
            ref: activatorRef
          }, activatorEvents.value, props.activatorProps)
        }), isMounted.value && hasContent.value && vue.createVNode(vue.Teleport, {
          "disabled": !teleportTarget.value,
          "to": teleportTarget.value
        }, {
          default: () => [vue.createVNode("div", vue.mergeProps({
            "class": ["v-overlay", {
              "v-overlay--absolute": props.absolute || props.contained,
              "v-overlay--active": isActive.value,
              "v-overlay--contained": props.contained
            }, themeClasses.value, rtlClasses.value, props.class],
            "style": [stackStyles.value, {
              "--v-overlay-opacity": props.opacity,
              top: convertToUnit(top.value)
            }, props.style],
            "ref": root
          }, scopeId, attrs), [vue.createVNode(Scrim, vue.mergeProps({
            "color": scrimColor,
            "modelValue": isActive.value && !!props.scrim,
            "ref": scrimEl
          }, scrimEvents.value), null), vue.createVNode(MaybeTransition, {
            "appear": true,
            "persisted": true,
            "transition": props.transition,
            "target": target.value,
            "onAfterEnter": onAfterEnter,
            "onAfterLeave": onAfterLeave
          }, {
            default: () => {
              var _a2;
              return [vue.withDirectives(vue.createVNode("div", vue.mergeProps({
                "ref": contentEl,
                "class": ["v-overlay__content", props.contentClass],
                "style": [dimensionStyles.value, contentStyles.value]
              }, contentEvents.value, props.contentProps), [(_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
                isActive
              })]), [[vue.vShow, isActive.value], [vue.resolveDirective("click-outside"), {
                handler: onClickOutside,
                closeConditional,
                include: () => [activatorEl.value]
              }]])];
            }
          })])]
        })]);
      });
      return {
        activatorEl,
        scrimEl,
        target,
        animateClick,
        contentEl,
        globalTop,
        localTop,
        updateLocation
      };
    }
  });
  const Refs = Symbol("Forwarded refs");
  function getDescriptor(obj, key) {
    let currentObj = obj;
    while (currentObj) {
      const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
      if (descriptor)
        return descriptor;
      currentObj = Object.getPrototypeOf(currentObj);
    }
    return void 0;
  }
  function forwardRefs(target) {
    for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      refs[_key - 1] = arguments[_key];
    }
    target[Refs] = refs;
    return new Proxy(target, {
      get(target2, key) {
        if (Reflect.has(target2, key)) {
          return Reflect.get(target2, key);
        }
        if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
          return;
        for (const ref2 of refs) {
          if (ref2.value && Reflect.has(ref2.value, key)) {
            const val = Reflect.get(ref2.value, key);
            return typeof val === "function" ? val.bind(ref2.value) : val;
          }
        }
      },
      has(target2, key) {
        if (Reflect.has(target2, key)) {
          return true;
        }
        if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
          return false;
        for (const ref2 of refs) {
          if (ref2.value && Reflect.has(ref2.value, key)) {
            return true;
          }
        }
        return false;
      },
      set(target2, key, value) {
        if (Reflect.has(target2, key)) {
          return Reflect.set(target2, key, value);
        }
        if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
          return false;
        for (const ref2 of refs) {
          if (ref2.value && Reflect.has(ref2.value, key)) {
            return Reflect.set(ref2.value, key, value);
          }
        }
        return false;
      },
      getOwnPropertyDescriptor(target2, key) {
        var _a;
        const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
        if (descriptor)
          return descriptor;
        if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
          return;
        for (const ref2 of refs) {
          if (!ref2.value)
            continue;
          const descriptor2 = getDescriptor(ref2.value, key) ?? ("_" in ref2.value ? getDescriptor((_a = ref2.value._) == null ? void 0 : _a.setupState, key) : void 0);
          if (descriptor2)
            return descriptor2;
        }
        for (const ref2 of refs) {
          const childRefs = ref2.value && ref2.value[Refs];
          if (!childRefs)
            continue;
          const queue = childRefs.slice();
          while (queue.length) {
            const ref3 = queue.shift();
            const descriptor2 = getDescriptor(ref3.value, key);
            if (descriptor2)
              return descriptor2;
            const childRefs2 = ref3.value && ref3.value[Refs];
            if (childRefs2)
              queue.push(...childRefs2);
          }
        }
        return void 0;
      }
    });
  }
  const makeVMenuProps = propsFactory({
    // TODO
    // disableKeys: Boolean,
    id: String,
    ...omit(makeVOverlayProps({
      closeDelay: 250,
      closeOnContentClick: true,
      locationStrategy: "connected",
      openDelay: 300,
      scrim: false,
      scrollStrategy: "reposition",
      transition: {
        component: VDialogTransition
      }
    }), ["absolute"])
  }, "VMenu");
  const VMenu = genericComponent()({
    name: "VMenu",
    props: makeVMenuProps(),
    emits: {
      "update:modelValue": (value) => true
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const isActive = useProxiedModel(props, "modelValue");
      const {
        scopeId
      } = useScopeId();
      const uid = getUid();
      const id = vue.computed(() => props.id || `v-menu-${uid}`);
      const overlay = vue.ref();
      const parent = vue.inject(VMenuSymbol, null);
      const openChildren = vue.shallowRef(0);
      vue.provide(VMenuSymbol, {
        register() {
          ++openChildren.value;
        },
        unregister() {
          --openChildren.value;
        },
        closeParents(e) {
          setTimeout(() => {
            if (!openChildren.value && !props.persistent && (e == null || e && !isClickInsideElement(e, overlay.value.contentEl))) {
              isActive.value = false;
              parent == null ? void 0 : parent.closeParents();
            }
          }, 40);
        }
      });
      async function onFocusIn(e) {
        var _a, _b, _c;
        const before = e.relatedTarget;
        const after = e.target;
        await vue.nextTick();
        if (isActive.value && before !== after && ((_a = overlay.value) == null ? void 0 : _a.contentEl) && // We're the topmost menu
        ((_b = overlay.value) == null ? void 0 : _b.globalTop) && // It isn't the document or the menu body
        ![document, overlay.value.contentEl].includes(after) && // It isn't inside the menu body
        !overlay.value.contentEl.contains(after)) {
          const focusable = focusableChildren(overlay.value.contentEl);
          (_c = focusable[0]) == null ? void 0 : _c.focus();
        }
      }
      vue.watch(isActive, (val) => {
        if (val) {
          parent == null ? void 0 : parent.register();
          document.addEventListener("focusin", onFocusIn, {
            once: true
          });
        } else {
          parent == null ? void 0 : parent.unregister();
          document.removeEventListener("focusin", onFocusIn);
        }
      });
      function onClickOutside(e) {
        parent == null ? void 0 : parent.closeParents(e);
      }
      function onKeydown(e) {
        var _a, _b, _c;
        if (props.disabled)
          return;
        if (e.key === "Tab" || e.key === "Enter" && !props.closeOnContentClick) {
          if (e.key === "Enter" && e.target instanceof HTMLTextAreaElement)
            return;
          if (e.key === "Enter")
            e.preventDefault();
          const nextElement = getNextElement(focusableChildren((_a = overlay.value) == null ? void 0 : _a.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0);
          if (!nextElement) {
            isActive.value = false;
            (_c = (_b = overlay.value) == null ? void 0 : _b.activatorEl) == null ? void 0 : _c.focus();
          }
        } else if (["Enter", " "].includes(e.key) && props.closeOnContentClick) {
          isActive.value = false;
          parent == null ? void 0 : parent.closeParents();
        }
      }
      function onActivatorKeydown(e) {
        var _a;
        if (props.disabled)
          return;
        const el = (_a = overlay.value) == null ? void 0 : _a.contentEl;
        if (el && isActive.value) {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            focusChild(el, "next");
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            focusChild(el, "prev");
          }
        } else if (["ArrowDown", "ArrowUp"].includes(e.key)) {
          isActive.value = true;
          e.preventDefault();
          setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
        }
      }
      const activatorProps = vue.computed(() => vue.mergeProps({
        "aria-haspopup": "menu",
        "aria-expanded": String(isActive.value),
        "aria-owns": id.value,
        onKeydown: onActivatorKeydown
      }, props.activatorProps));
      useRender(() => {
        const overlayProps = VOverlay.filterProps(props);
        return vue.createVNode(VOverlay, vue.mergeProps({
          "ref": overlay,
          "id": id.value,
          "class": ["v-menu", props.class],
          "style": props.style
        }, overlayProps, {
          "modelValue": isActive.value,
          "onUpdate:modelValue": ($event) => isActive.value = $event,
          "absolute": true,
          "activatorProps": activatorProps.value,
          "onClick:outside": onClickOutside,
          "onKeydown": onKeydown
        }, scopeId), {
          activator: slots.activator,
          default: function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return vue.createVNode(VDefaultsProvider, {
              "root": "VMenu"
            }, {
              default: () => {
                var _a;
                return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
              }
            });
          }
        });
      });
      return forwardRefs({
        id,
        ΨopenChildren: openChildren
      }, overlay);
    }
  });
  const makeVCounterProps = propsFactory({
    active: Boolean,
    disabled: Boolean,
    max: [Number, String],
    value: {
      type: [Number, String],
      default: 0
    },
    ...makeComponentProps(),
    ...makeTransitionProps$1({
      transition: {
        component: VSlideYTransition
      }
    })
  }, "VCounter");
  const VCounter = genericComponent()({
    name: "VCounter",
    functional: true,
    props: makeVCounterProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const counter = vue.computed(() => {
        return props.max ? `${props.value} / ${props.max}` : String(props.value);
      });
      useRender(() => vue.createVNode(MaybeTransition, {
        "transition": props.transition
      }, {
        default: () => [vue.withDirectives(vue.createVNode("div", {
          "class": ["v-counter", {
            "text-error": props.max && !props.disabled && parseFloat(props.value) > parseFloat(props.max)
          }, props.class],
          "style": props.style
        }, [slots.default ? slots.default({
          counter: counter.value,
          max: props.max,
          value: props.value
        }) : counter.value]), [[vue.vShow, props.active]])]
      }));
      return {};
    }
  });
  const makeVFieldLabelProps = propsFactory({
    floating: Boolean,
    ...makeComponentProps()
  }, "VFieldLabel");
  const VFieldLabel = genericComponent()({
    name: "VFieldLabel",
    props: makeVFieldLabelProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      useRender(() => vue.createVNode(VLabel, {
        "class": ["v-field-label", {
          "v-field-label--floating": props.floating
        }, props.class],
        "style": props.style,
        "aria-hidden": props.floating || void 0
      }, slots));
      return {};
    }
  });
  const allowedVariants = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"];
  const makeVFieldProps = propsFactory({
    appendInnerIcon: IconValue,
    bgColor: String,
    clearable: Boolean,
    clearIcon: {
      type: IconValue,
      default: "$clear"
    },
    active: Boolean,
    centerAffix: {
      type: Boolean,
      default: void 0
    },
    color: String,
    baseColor: String,
    dirty: Boolean,
    disabled: {
      type: Boolean,
      default: null
    },
    error: Boolean,
    flat: Boolean,
    label: String,
    persistentClear: Boolean,
    prependInnerIcon: IconValue,
    reverse: Boolean,
    singleLine: Boolean,
    variant: {
      type: String,
      default: "filled",
      validator: (v) => allowedVariants.includes(v)
    },
    "onClick:clear": EventProp(),
    "onClick:appendInner": EventProp(),
    "onClick:prependInner": EventProp(),
    ...makeComponentProps(),
    ...makeLoaderProps(),
    ...makeRoundedProps(),
    ...makeThemeProps()
  }, "VField");
  const VField = genericComponent()({
    name: "VField",
    inheritAttrs: false,
    props: {
      id: String,
      ...makeFocusProps(),
      ...makeVFieldProps()
    },
    emits: {
      "update:focused": (focused) => true,
      "update:modelValue": (value) => true
    },
    setup(props, _ref) {
      let {
        attrs,
        emit,
        slots
      } = _ref;
      const {
        themeClasses
      } = provideTheme(props);
      const {
        loaderClasses
      } = useLoader(props);
      const {
        focusClasses,
        isFocused,
        focus,
        blur
      } = useFocus(props);
      const {
        InputIcon
      } = useInputIcon(props);
      const {
        roundedClasses
      } = useRounded(props);
      const {
        rtlClasses
      } = useRtl();
      const isActive = vue.computed(() => props.dirty || props.active);
      const hasLabel = vue.computed(() => !props.singleLine && !!(props.label || slots.label));
      const uid = getUid();
      const id = vue.computed(() => props.id || `input-${uid}`);
      const messagesId = vue.computed(() => `${id.value}-messages`);
      const labelRef = vue.ref();
      const floatingLabelRef = vue.ref();
      const controlRef = vue.ref();
      const isPlainOrUnderlined = vue.computed(() => ["plain", "underlined"].includes(props.variant));
      const {
        backgroundColorClasses,
        backgroundColorStyles
      } = useBackgroundColor(vue.toRef(props, "bgColor"));
      const {
        textColorClasses,
        textColorStyles
      } = useTextColor(vue.computed(() => {
        return props.error || props.disabled ? void 0 : isActive.value && isFocused.value ? props.color : props.baseColor;
      }));
      vue.watch(isActive, (val) => {
        if (hasLabel.value) {
          const el = labelRef.value.$el;
          const targetEl = floatingLabelRef.value.$el;
          requestAnimationFrame(() => {
            const rect = nullifyTransforms(el);
            const targetRect = targetEl.getBoundingClientRect();
            const x = targetRect.x - rect.x;
            const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
            const targetWidth = targetRect.width / 0.75;
            const width = Math.abs(targetWidth - rect.width) > 1 ? {
              maxWidth: convertToUnit(targetWidth)
            } : void 0;
            const style = getComputedStyle(el);
            const targetStyle = getComputedStyle(targetEl);
            const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
            const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
            const color = targetStyle.getPropertyValue("color");
            el.style.visibility = "visible";
            targetEl.style.visibility = "hidden";
            animate(el, {
              transform: `translate(${x}px, ${y}px) scale(${scale})`,
              color,
              ...width
            }, {
              duration,
              easing: standardEasing,
              direction: val ? "normal" : "reverse"
            }).finished.then(() => {
              el.style.removeProperty("visibility");
              targetEl.style.removeProperty("visibility");
            });
          });
        }
      }, {
        flush: "post"
      });
      const slotProps = vue.computed(() => ({
        isActive,
        isFocused,
        controlRef,
        blur,
        focus
      }));
      function onClick(e) {
        if (e.target !== document.activeElement) {
          e.preventDefault();
        }
      }
      function onKeydownClear(e) {
        var _a;
        if (e.key !== "Enter" && e.key !== " ")
          return;
        e.preventDefault();
        e.stopPropagation();
        (_a = props["onClick:clear"]) == null ? void 0 : _a.call(props, new MouseEvent("click"));
      }
      useRender(() => {
        var _a, _b, _c;
        const isOutlined = props.variant === "outlined";
        const hasPrepend = !!(slots["prepend-inner"] || props.prependInnerIcon);
        const hasClear = !!(props.clearable || slots.clear);
        const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
        const label = () => slots.label ? slots.label({
          ...slotProps.value,
          label: props.label,
          props: {
            for: id.value
          }
        }) : props.label;
        return vue.createVNode("div", vue.mergeProps({
          "class": ["v-field", {
            "v-field--active": isActive.value,
            "v-field--appended": hasAppend,
            "v-field--center-affix": props.centerAffix ?? !isPlainOrUnderlined.value,
            "v-field--disabled": props.disabled,
            "v-field--dirty": props.dirty,
            "v-field--error": props.error,
            "v-field--flat": props.flat,
            "v-field--has-background": !!props.bgColor,
            "v-field--persistent-clear": props.persistentClear,
            "v-field--prepended": hasPrepend,
            "v-field--reverse": props.reverse,
            "v-field--single-line": props.singleLine,
            "v-field--no-label": !label(),
            [`v-field--variant-${props.variant}`]: true
          }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value, roundedClasses.value, rtlClasses.value, props.class],
          "style": [backgroundColorStyles.value, props.style],
          "onClick": onClick
        }, attrs), [vue.createVNode("div", {
          "class": "v-field__overlay"
        }, null), vue.createVNode(LoaderSlot, {
          "name": "v-field",
          "active": !!props.loading,
          "color": props.error ? "error" : typeof props.loading === "string" ? props.loading : props.color
        }, {
          default: slots.loader
        }), hasPrepend && vue.createVNode("div", {
          "key": "prepend",
          "class": "v-field__prepend-inner"
        }, [props.prependInnerIcon && vue.createVNode(InputIcon, {
          "key": "prepend-icon",
          "name": "prependInner"
        }, null), (_a = slots["prepend-inner"]) == null ? void 0 : _a.call(slots, slotProps.value)]), vue.createVNode("div", {
          "class": "v-field__field",
          "data-no-activator": ""
        }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(props.variant) && hasLabel.value && vue.createVNode(VFieldLabel, {
          "key": "floating-label",
          "ref": floatingLabelRef,
          "class": [textColorClasses.value],
          "floating": true,
          "for": id.value,
          "style": textColorStyles.value
        }, {
          default: () => [label()]
        }), vue.createVNode(VFieldLabel, {
          "ref": labelRef,
          "for": id.value
        }, {
          default: () => [label()]
        }), (_b = slots.default) == null ? void 0 : _b.call(slots, {
          ...slotProps.value,
          props: {
            id: id.value,
            class: "v-field__input",
            "aria-describedby": messagesId.value
          },
          focus,
          blur
        })]), hasClear && vue.createVNode(VExpandXTransition, {
          "key": "clear"
        }, {
          default: () => [vue.withDirectives(vue.createVNode("div", {
            "class": "v-field__clearable",
            "onMousedown": (e) => {
              e.preventDefault();
              e.stopPropagation();
            }
          }, [vue.createVNode(VDefaultsProvider, {
            "defaults": {
              VIcon: {
                icon: props.clearIcon
              }
            }
          }, {
            default: () => [slots.clear ? slots.clear({
              ...slotProps.value,
              props: {
                onKeydown: onKeydownClear,
                onFocus: focus,
                onBlur: blur,
                onClick: props["onClick:clear"]
              }
            }) : vue.createVNode(InputIcon, {
              "name": "clear",
              "onKeydown": onKeydownClear,
              "onFocus": focus,
              "onBlur": blur
            }, null)]
          })]), [[vue.vShow, props.dirty]])]
        }), hasAppend && vue.createVNode("div", {
          "key": "append",
          "class": "v-field__append-inner"
        }, [(_c = slots["append-inner"]) == null ? void 0 : _c.call(slots, slotProps.value), props.appendInnerIcon && vue.createVNode(InputIcon, {
          "key": "append-icon",
          "name": "appendInner"
        }, null)]), vue.createVNode("div", {
          "class": ["v-field__outline", textColorClasses.value],
          "style": textColorStyles.value
        }, [isOutlined && vue.createVNode(vue.Fragment, null, [vue.createVNode("div", {
          "class": "v-field__outline__start"
        }, null), hasLabel.value && vue.createVNode("div", {
          "class": "v-field__outline__notch"
        }, [vue.createVNode(VFieldLabel, {
          "ref": floatingLabelRef,
          "floating": true,
          "for": id.value
        }, {
          default: () => [label()]
        })]), vue.createVNode("div", {
          "class": "v-field__outline__end"
        }, null)]), isPlainOrUnderlined.value && hasLabel.value && vue.createVNode(VFieldLabel, {
          "ref": floatingLabelRef,
          "floating": true,
          "for": id.value
        }, {
          default: () => [label()]
        })])]);
      });
      return {
        controlRef
      };
    }
  });
  function filterFieldProps(attrs) {
    const keys = Object.keys(VField.props).filter((k) => !isOn(k) && k !== "class" && k !== "style");
    return pick(attrs, keys);
  }
  const activeTypes = ["color", "file", "time", "date", "datetime-local", "week", "month"];
  const makeVTextFieldProps = propsFactory({
    autofocus: Boolean,
    counter: [Boolean, Number, String],
    counterValue: [Number, Function],
    prefix: String,
    placeholder: String,
    persistentPlaceholder: Boolean,
    persistentCounter: Boolean,
    suffix: String,
    role: String,
    type: {
      type: String,
      default: "text"
    },
    modelModifiers: Object,
    ...makeVInputProps(),
    ...makeVFieldProps()
  }, "VTextField");
  const VTextField = genericComponent()({
    name: "VTextField",
    directives: {
      Intersect
    },
    inheritAttrs: false,
    props: makeVTextFieldProps(),
    emits: {
      "click:control": (e) => true,
      "mousedown:control": (e) => true,
      "update:focused": (focused) => true,
      "update:modelValue": (val) => true
    },
    setup(props, _ref) {
      let {
        attrs,
        emit,
        slots
      } = _ref;
      const model = useProxiedModel(props, "modelValue");
      const {
        isFocused,
        focus,
        blur
      } = useFocus(props);
      const counterValue = vue.computed(() => {
        return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : (model.value ?? "").toString().length;
      });
      const max = vue.computed(() => {
        if (attrs.maxlength)
          return attrs.maxlength;
        if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string")
          return void 0;
        return props.counter;
      });
      const isPlainOrUnderlined = vue.computed(() => ["plain", "underlined"].includes(props.variant));
      function onIntersect(isIntersecting, entries) {
        var _a, _b;
        if (!props.autofocus || !isIntersecting)
          return;
        (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
      }
      const vInputRef = vue.ref();
      const vFieldRef = vue.ref();
      const inputRef = vue.ref();
      const isActive = vue.computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
      function onFocus() {
        var _a;
        if (inputRef.value !== document.activeElement) {
          (_a = inputRef.value) == null ? void 0 : _a.focus();
        }
        if (!isFocused.value)
          focus();
      }
      function onControlMousedown(e) {
        emit("mousedown:control", e);
        if (e.target === inputRef.value)
          return;
        onFocus();
        e.preventDefault();
      }
      function onControlClick(e) {
        onFocus();
        emit("click:control", e);
      }
      function onClear(e) {
        e.stopPropagation();
        onFocus();
        vue.nextTick(() => {
          model.value = null;
          callEvent(props["onClick:clear"], e);
        });
      }
      function onInput(e) {
        var _a;
        const el = e.target;
        model.value = el.value;
        if (((_a = props.modelModifiers) == null ? void 0 : _a.trim) && ["text", "search", "password", "tel", "url"].includes(props.type)) {
          const caretPosition = [el.selectionStart, el.selectionEnd];
          vue.nextTick(() => {
            el.selectionStart = caretPosition[0];
            el.selectionEnd = caretPosition[1];
          });
        }
      }
      useRender(() => {
        const hasCounter = !!(slots.counter || props.counter !== false && props.counter != null);
        const hasDetails = !!(hasCounter || slots.details);
        const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
        const {
          modelValue: _,
          ...inputProps
        } = VInput.filterProps(props);
        const fieldProps = filterFieldProps(props);
        return vue.createVNode(VInput, vue.mergeProps({
          "ref": vInputRef,
          "modelValue": model.value,
          "onUpdate:modelValue": ($event) => model.value = $event,
          "class": ["v-text-field", {
            "v-text-field--prefixed": props.prefix,
            "v-text-field--suffixed": props.suffix,
            "v-input--plain-underlined": isPlainOrUnderlined.value
          }, props.class],
          "style": props.style
        }, rootAttrs, inputProps, {
          "centerAffix": !isPlainOrUnderlined.value,
          "focused": isFocused.value
        }), {
          ...slots,
          default: (_ref2) => {
            let {
              id,
              isDisabled,
              isDirty,
              isReadonly,
              isValid: isValid2
            } = _ref2;
            return vue.createVNode(VField, vue.mergeProps({
              "ref": vFieldRef,
              "onMousedown": onControlMousedown,
              "onClick": onControlClick,
              "onClick:clear": onClear,
              "onClick:prependInner": props["onClick:prependInner"],
              "onClick:appendInner": props["onClick:appendInner"],
              "role": props.role
            }, fieldProps, {
              "id": id.value,
              "active": isActive.value || isDirty.value,
              "dirty": isDirty.value || props.dirty,
              "disabled": isDisabled.value,
              "focused": isFocused.value,
              "error": isValid2.value === false
            }), {
              ...slots,
              default: (_ref3) => {
                let {
                  props: {
                    class: fieldClass,
                    ...slotProps
                  }
                } = _ref3;
                const inputNode = vue.withDirectives(vue.createVNode("input", vue.mergeProps({
                  "ref": inputRef,
                  "value": model.value,
                  "onInput": onInput,
                  "autofocus": props.autofocus,
                  "readonly": isReadonly.value,
                  "disabled": isDisabled.value,
                  "name": props.name,
                  "placeholder": props.placeholder,
                  "size": 1,
                  "type": props.type,
                  "onFocus": onFocus,
                  "onBlur": blur
                }, slotProps, inputAttrs), null), [[vue.resolveDirective("intersect"), {
                  handler: onIntersect
                }, null, {
                  once: true
                }]]);
                return vue.createVNode(vue.Fragment, null, [props.prefix && vue.createVNode("span", {
                  "class": "v-text-field__prefix"
                }, [vue.createVNode("span", {
                  "class": "v-text-field__prefix__text"
                }, [props.prefix])]), slots.default ? vue.createVNode("div", {
                  "class": fieldClass,
                  "data-no-activator": ""
                }, [slots.default(), inputNode]) : vue.cloneVNode(inputNode, {
                  class: fieldClass
                }), props.suffix && vue.createVNode("span", {
                  "class": "v-text-field__suffix"
                }, [vue.createVNode("span", {
                  "class": "v-text-field__suffix__text"
                }, [props.suffix])])]);
              }
            });
          },
          details: hasDetails ? (slotProps) => {
            var _a;
            return vue.createVNode(vue.Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && vue.createVNode(vue.Fragment, null, [vue.createVNode("span", null, null), vue.createVNode(VCounter, {
              "active": props.persistentCounter || isFocused.value,
              "value": counterValue.value,
              "max": max.value,
              "disabled": props.disabled
            }, slots.counter)])]);
          } : void 0
        });
      });
      return forwardRefs({}, vInputRef, vFieldRef, inputRef);
    }
  });
  const makeVVirtualScrollItemProps = propsFactory({
    renderless: Boolean,
    ...makeComponentProps()
  }, "VVirtualScrollItem");
  const VVirtualScrollItem = genericComponent()({
    name: "VVirtualScrollItem",
    inheritAttrs: false,
    props: makeVVirtualScrollItemProps(),
    emits: {
      "update:height": (height) => true
    },
    setup(props, _ref) {
      let {
        attrs,
        emit,
        slots
      } = _ref;
      const {
        resizeRef,
        contentRect
      } = useResizeObserver(void 0, "border");
      vue.watch(() => {
        var _a;
        return (_a = contentRect.value) == null ? void 0 : _a.height;
      }, (height) => {
        if (height != null)
          emit("update:height", height);
      });
      useRender(() => {
        var _a, _b;
        return props.renderless ? vue.createVNode(vue.Fragment, null, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          itemRef: resizeRef
        })]) : vue.createVNode("div", vue.mergeProps({
          "ref": resizeRef,
          "class": ["v-virtual-scroll__item", props.class],
          "style": props.style
        }, attrs), [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
      });
    }
  });
  const UP = -1;
  const DOWN = 1;
  const BUFFER_PX = 100;
  const makeVirtualProps = propsFactory({
    itemHeight: {
      type: [Number, String],
      default: null
    },
    height: [Number, String]
  }, "virtual");
  function useVirtual(props, items) {
    const display = useDisplay();
    const itemHeight = vue.shallowRef(0);
    vue.watchEffect(() => {
      itemHeight.value = parseFloat(props.itemHeight || 0);
    });
    const first = vue.shallowRef(0);
    const last = vue.shallowRef(Math.ceil(
      // Assume 16px items filling the entire screen height if
      // not provided. This is probably incorrect but it minimises
      // the chance of ending up with empty space at the bottom.
      // The default value is set here to avoid poisoning getSize()
      (parseInt(props.height) || display.height.value) / (itemHeight.value || 16)
    ) || 1);
    const paddingTop = vue.shallowRef(0);
    const paddingBottom = vue.shallowRef(0);
    const containerRef = vue.ref();
    const markerRef = vue.ref();
    let markerOffset = 0;
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    vue.watchEffect(() => {
      resizeRef.value = containerRef.value;
    });
    const viewportHeight = vue.computed(() => {
      var _a;
      return containerRef.value === document.documentElement ? display.height.value : ((_a = contentRect.value) == null ? void 0 : _a.height) || parseInt(props.height) || 0;
    });
    const hasInitialRender = vue.computed(() => {
      return !!(containerRef.value && markerRef.value && viewportHeight.value && itemHeight.value);
    });
    let sizes = Array.from({
      length: items.value.length
    });
    let offsets = Array.from({
      length: items.value.length
    });
    const updateTime = vue.shallowRef(0);
    let targetScrollIndex = -1;
    function getSize(index) {
      return sizes[index] || itemHeight.value;
    }
    const updateOffsets = debounce(() => {
      const start = performance.now();
      offsets[0] = 0;
      const length = items.value.length;
      for (let i = 1; i <= length - 1; i++) {
        offsets[i] = (offsets[i - 1] || 0) + getSize(i - 1);
      }
      updateTime.value = Math.max(updateTime.value, performance.now() - start);
    }, updateTime);
    const unwatch = vue.watch(hasInitialRender, (v) => {
      if (!v)
        return;
      unwatch();
      markerOffset = markerRef.value.offsetTop;
      updateOffsets.immediate();
      calculateVisibleItems();
      if (!~targetScrollIndex)
        return;
      vue.nextTick(() => {
        IN_BROWSER && window.requestAnimationFrame(() => {
          scrollToIndex(targetScrollIndex);
          targetScrollIndex = -1;
        });
      });
    });
    vue.onScopeDispose(() => {
      updateOffsets.clear();
    });
    function handleItemResize(index, height) {
      const prevHeight = sizes[index];
      const prevMinHeight = itemHeight.value;
      itemHeight.value = prevMinHeight ? Math.min(itemHeight.value, height) : height;
      if (prevHeight !== height || prevMinHeight !== itemHeight.value) {
        sizes[index] = height;
        updateOffsets();
      }
    }
    function calculateOffset(index) {
      index = clamp(index, 0, items.value.length - 1);
      return offsets[index] || 0;
    }
    function calculateIndex(scrollTop) {
      return binaryClosest(offsets, scrollTop);
    }
    let lastScrollTop = 0;
    let scrollVelocity = 0;
    let lastScrollTime = 0;
    vue.watch(viewportHeight, (val, oldVal) => {
      if (oldVal) {
        calculateVisibleItems();
        if (val < oldVal) {
          requestAnimationFrame(() => {
            scrollVelocity = 0;
            calculateVisibleItems();
          });
        }
      }
    });
    function handleScroll() {
      if (!containerRef.value || !markerRef.value)
        return;
      const scrollTop = containerRef.value.scrollTop;
      const scrollTime = performance.now();
      const scrollDeltaT = scrollTime - lastScrollTime;
      if (scrollDeltaT > 500) {
        scrollVelocity = Math.sign(scrollTop - lastScrollTop);
        markerOffset = markerRef.value.offsetTop;
      } else {
        scrollVelocity = scrollTop - lastScrollTop;
      }
      lastScrollTop = scrollTop;
      lastScrollTime = scrollTime;
      calculateVisibleItems();
    }
    function handleScrollend() {
      if (!containerRef.value || !markerRef.value)
        return;
      scrollVelocity = 0;
      lastScrollTime = 0;
      calculateVisibleItems();
    }
    let raf2 = -1;
    function calculateVisibleItems() {
      cancelAnimationFrame(raf2);
      raf2 = requestAnimationFrame(_calculateVisibleItems);
    }
    function _calculateVisibleItems() {
      if (!containerRef.value || !viewportHeight.value)
        return;
      const scrollTop = lastScrollTop - markerOffset;
      const direction = Math.sign(scrollVelocity);
      const startPx = Math.max(0, scrollTop - BUFFER_PX);
      const start = clamp(calculateIndex(startPx), 0, items.value.length);
      const endPx = scrollTop + viewportHeight.value + BUFFER_PX;
      const end = clamp(calculateIndex(endPx) + 1, start + 1, items.value.length);
      if (
        // Only update the side we're scrolling towards,
        // the other side will be updated incidentally
        (direction !== UP || start < first.value) && (direction !== DOWN || end > last.value)
      ) {
        const topOverflow = calculateOffset(first.value) - calculateOffset(start);
        const bottomOverflow = calculateOffset(end) - calculateOffset(last.value);
        const bufferOverflow = Math.max(topOverflow, bottomOverflow);
        if (bufferOverflow > BUFFER_PX) {
          first.value = start;
          last.value = end;
        } else {
          if (start <= 0)
            first.value = start;
          if (end >= items.value.length)
            last.value = end;
        }
      }
      paddingTop.value = calculateOffset(first.value);
      paddingBottom.value = calculateOffset(items.value.length) - calculateOffset(last.value);
    }
    function scrollToIndex(index) {
      const offset = calculateOffset(index);
      if (!containerRef.value || index && !offset) {
        targetScrollIndex = index;
      } else {
        containerRef.value.scrollTop = offset;
      }
    }
    const computedItems = vue.computed(() => {
      return items.value.slice(first.value, last.value).map((item, index) => ({
        raw: item,
        index: index + first.value
      }));
    });
    vue.watch(items, () => {
      sizes = Array.from({
        length: items.value.length
      });
      offsets = Array.from({
        length: items.value.length
      });
      updateOffsets.immediate();
      calculateVisibleItems();
    }, {
      deep: true
    });
    return {
      containerRef,
      markerRef,
      computedItems,
      paddingTop,
      paddingBottom,
      scrollToIndex,
      handleScroll,
      handleScrollend,
      handleItemResize
    };
  }
  function binaryClosest(arr, val) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;
    let item = null;
    let target = -1;
    if (arr[high] < val) {
      return high;
    }
    while (low <= high) {
      mid = low + high >> 1;
      item = arr[mid];
      if (item > val) {
        high = mid - 1;
      } else if (item < val) {
        target = mid;
        low = mid + 1;
      } else if (item === val) {
        return mid;
      } else {
        return low;
      }
    }
    return target;
  }
  const makeVVirtualScrollProps = propsFactory({
    items: {
      type: Array,
      default: () => []
    },
    renderless: Boolean,
    ...makeVirtualProps(),
    ...makeComponentProps(),
    ...makeDimensionProps()
  }, "VVirtualScroll");
  const VVirtualScroll = genericComponent()({
    name: "VVirtualScroll",
    props: makeVVirtualScrollProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const vm = getCurrentInstance("VVirtualScroll");
      const {
        dimensionStyles
      } = useDimension(props);
      const {
        containerRef,
        markerRef,
        handleScroll,
        handleScrollend,
        handleItemResize,
        scrollToIndex,
        paddingTop,
        paddingBottom,
        computedItems
      } = useVirtual(props, vue.toRef(props, "items"));
      useToggleScope(() => props.renderless, () => {
        function handleListeners() {
          var _a, _b;
          let add = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
          const method = add ? "addEventListener" : "removeEventListener";
          if (containerRef.value === document.documentElement) {
            document[method]("scroll", handleScroll, {
              passive: true
            });
            document[method]("scrollend", handleScrollend);
          } else {
            (_a = containerRef.value) == null ? void 0 : _a[method]("scroll", handleScroll, {
              passive: true
            });
            (_b = containerRef.value) == null ? void 0 : _b[method]("scrollend", handleScrollend);
          }
        }
        vue.onMounted(() => {
          containerRef.value = getScrollParent(vm.vnode.el, true);
          handleListeners(true);
        });
        vue.onScopeDispose(handleListeners);
      });
      useRender(() => {
        const children = computedItems.value.map((item) => vue.createVNode(VVirtualScrollItem, {
          "key": item.index,
          "renderless": props.renderless,
          "onUpdate:height": (height) => handleItemResize(item.index, height)
        }, {
          default: (slotProps) => {
            var _a;
            return (_a = slots.default) == null ? void 0 : _a.call(slots, {
              item: item.raw,
              index: item.index,
              ...slotProps
            });
          }
        }));
        return props.renderless ? vue.createVNode(vue.Fragment, null, [vue.createVNode("div", {
          "ref": markerRef,
          "class": "v-virtual-scroll__spacer",
          "style": {
            paddingTop: convertToUnit(paddingTop.value)
          }
        }, null), children, vue.createVNode("div", {
          "class": "v-virtual-scroll__spacer",
          "style": {
            paddingBottom: convertToUnit(paddingBottom.value)
          }
        }, null)]) : vue.createVNode("div", {
          "ref": containerRef,
          "class": ["v-virtual-scroll", props.class],
          "onScrollPassive": handleScroll,
          "onScrollend": handleScrollend,
          "style": [dimensionStyles.value, props.style]
        }, [vue.createVNode("div", {
          "ref": markerRef,
          "class": "v-virtual-scroll__container",
          "style": {
            paddingTop: convertToUnit(paddingTop.value),
            paddingBottom: convertToUnit(paddingBottom.value)
          }
        }, [children])]);
      });
      return {
        scrollToIndex
      };
    }
  });
  function useScrolling(listRef, textFieldRef) {
    const isScrolling = vue.shallowRef(false);
    let scrollTimeout;
    function onListScroll(e) {
      cancelAnimationFrame(scrollTimeout);
      isScrolling.value = true;
      scrollTimeout = requestAnimationFrame(() => {
        scrollTimeout = requestAnimationFrame(() => {
          isScrolling.value = false;
        });
      });
    }
    async function finishScrolling() {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      await new Promise((resolve) => requestAnimationFrame(resolve));
      await new Promise((resolve) => requestAnimationFrame(resolve));
      await new Promise((resolve) => {
        if (isScrolling.value) {
          const stop = vue.watch(isScrolling, () => {
            stop();
            resolve();
          });
        } else
          resolve();
      });
    }
    async function onListKeydown(e) {
      var _a, _b;
      if (e.key === "Tab") {
        (_a = textFieldRef.value) == null ? void 0 : _a.focus();
      }
      if (!["PageDown", "PageUp", "Home", "End"].includes(e.key))
        return;
      const el = (_b = listRef.value) == null ? void 0 : _b.$el;
      if (!el)
        return;
      if (e.key === "Home" || e.key === "End") {
        el.scrollTo({
          top: e.key === "Home" ? 0 : el.scrollHeight,
          behavior: "smooth"
        });
      }
      await finishScrolling();
      const children = el.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
      if (e.key === "PageDown" || e.key === "Home") {
        const top = el.getBoundingClientRect().top;
        for (const child of children) {
          if (child.getBoundingClientRect().top >= top) {
            child.focus();
            break;
          }
        }
      } else {
        const bottom = el.getBoundingClientRect().bottom;
        for (const child of [...children].reverse()) {
          if (child.getBoundingClientRect().bottom <= bottom) {
            child.focus();
            break;
          }
        }
      }
    }
    return {
      onListScroll,
      onListKeydown
    };
  }
  const makeSelectProps = propsFactory({
    chips: Boolean,
    closableChips: Boolean,
    closeText: {
      type: String,
      default: "$vuetify.close"
    },
    openText: {
      type: String,
      default: "$vuetify.open"
    },
    eager: Boolean,
    hideNoData: Boolean,
    hideSelected: Boolean,
    listProps: {
      type: Object
    },
    menu: Boolean,
    menuIcon: {
      type: IconValue,
      default: "$dropdown"
    },
    menuProps: {
      type: Object
    },
    multiple: Boolean,
    noDataText: {
      type: String,
      default: "$vuetify.noDataText"
    },
    openOnClear: Boolean,
    itemColor: String,
    ...makeItemsProps({
      itemChildren: false
    })
  }, "Select");
  const makeVSelectProps = propsFactory({
    ...makeSelectProps(),
    ...omit(makeVTextFieldProps({
      modelValue: null,
      role: "combobox"
    }), ["validationValue", "dirty", "appendInnerIcon"]),
    ...makeTransitionProps$1({
      transition: {
        component: VDialogTransition
      }
    })
  }, "VSelect");
  const VSelect = genericComponent()({
    name: "VSelect",
    props: makeVSelectProps(),
    emits: {
      "update:focused": (focused) => true,
      "update:modelValue": (value) => true,
      "update:menu": (ue) => true
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        t
      } = useLocale();
      const vTextFieldRef = vue.ref();
      const vMenuRef = vue.ref();
      const vVirtualScrollRef = vue.ref();
      const _menu = useProxiedModel(props, "menu");
      const menu = vue.computed({
        get: () => _menu.value,
        set: (v) => {
          var _a;
          if (_menu.value && !v && ((_a = vMenuRef.value) == null ? void 0 : _a.ΨopenChildren))
            return;
          _menu.value = v;
        }
      });
      const {
        items,
        transformIn,
        transformOut
      } = useItems(props);
      const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
        const transformed = transformOut(v);
        return props.multiple ? transformed : transformed[0] ?? null;
      });
      const counterValue = vue.computed(() => {
        return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : model.value.length;
      });
      const form = useForm();
      const selectedValues = vue.computed(() => model.value.map((selection) => selection.value));
      const isFocused = vue.shallowRef(false);
      const label = vue.computed(() => menu.value ? props.closeText : props.openText);
      let keyboardLookupPrefix = "";
      let keyboardLookupLastTime;
      const displayItems = vue.computed(() => {
        if (props.hideSelected) {
          return items.value.filter((item) => !model.value.some((s) => props.valueComparator(s, item)));
        }
        return items.value;
      });
      const menuDisabled = vue.computed(() => props.hideNoData && !displayItems.value.length || props.readonly || (form == null ? void 0 : form.isReadonly.value));
      const computedMenuProps = vue.computed(() => {
        var _a;
        return {
          ...props.menuProps,
          activatorProps: {
            ...((_a = props.menuProps) == null ? void 0 : _a.activatorProps) || {},
            "aria-haspopup": "listbox"
            // Set aria-haspopup to 'listbox'
          }
        };
      });
      const listRef = vue.ref();
      const {
        onListScroll,
        onListKeydown
      } = useScrolling(listRef, vTextFieldRef);
      function onClear(e) {
        if (props.openOnClear) {
          menu.value = true;
        }
      }
      function onMousedownControl() {
        if (menuDisabled.value)
          return;
        menu.value = !menu.value;
      }
      function onKeydown(e) {
        var _a, _b;
        if (!e.key || props.readonly || (form == null ? void 0 : form.isReadonly.value))
          return;
        if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
          e.preventDefault();
        }
        if (["Enter", "ArrowDown", " "].includes(e.key)) {
          menu.value = true;
        }
        if (["Escape", "Tab"].includes(e.key)) {
          menu.value = false;
        }
        if (e.key === "Home") {
          (_a = listRef.value) == null ? void 0 : _a.focus("first");
        } else if (e.key === "End") {
          (_b = listRef.value) == null ? void 0 : _b.focus("last");
        }
        const KEYBOARD_LOOKUP_THRESHOLD = 1e3;
        function checkPrintable(e2) {
          const isPrintableChar = e2.key.length === 1;
          const noModifier = !e2.ctrlKey && !e2.metaKey && !e2.altKey;
          return isPrintableChar && noModifier;
        }
        if (props.multiple || !checkPrintable(e))
          return;
        const now = performance.now();
        if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
          keyboardLookupPrefix = "";
        }
        keyboardLookupPrefix += e.key.toLowerCase();
        keyboardLookupLastTime = now;
        const item = items.value.find((item2) => item2.title.toLowerCase().startsWith(keyboardLookupPrefix));
        if (item !== void 0) {
          model.value = [item];
          const index = displayItems.value.indexOf(item);
          IN_BROWSER && window.requestAnimationFrame(() => {
            var _a2;
            index >= 0 && ((_a2 = vVirtualScrollRef.value) == null ? void 0 : _a2.scrollToIndex(index));
          });
        }
      }
      function select(item) {
        let set = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        if (item.props.disabled)
          return;
        if (props.multiple) {
          const index = model.value.findIndex((selection) => props.valueComparator(selection.value, item.value));
          const add = set == null ? !~index : set;
          if (~index) {
            const value = add ? [...model.value, item] : [...model.value];
            value.splice(index, 1);
            model.value = value;
          } else if (add) {
            model.value = [...model.value, item];
          }
        } else {
          const add = set !== false;
          model.value = add ? [item] : [];
          vue.nextTick(() => {
            menu.value = false;
          });
        }
      }
      function onBlur(e) {
        var _a;
        if (!((_a = listRef.value) == null ? void 0 : _a.$el.contains(e.relatedTarget))) {
          menu.value = false;
        }
      }
      function onAfterLeave() {
        var _a;
        if (isFocused.value) {
          (_a = vTextFieldRef.value) == null ? void 0 : _a.focus();
        }
      }
      function onFocusin(e) {
        isFocused.value = true;
      }
      function onModelUpdate(v) {
        if (v == null)
          model.value = [];
        else if (matchesSelector(vTextFieldRef.value, ":autofill") || matchesSelector(vTextFieldRef.value, ":-webkit-autofill")) {
          const item = items.value.find((item2) => item2.title === v);
          if (item) {
            select(item);
          }
        } else if (vTextFieldRef.value) {
          vTextFieldRef.value.value = "";
        }
      }
      vue.watch(menu, () => {
        if (!props.hideSelected && menu.value && model.value.length) {
          const index = displayItems.value.findIndex((item) => model.value.some((s) => props.valueComparator(s.value, item.value)));
          IN_BROWSER && window.requestAnimationFrame(() => {
            var _a;
            index >= 0 && ((_a = vVirtualScrollRef.value) == null ? void 0 : _a.scrollToIndex(index));
          });
        }
      });
      vue.watch(() => props.items, (newVal, oldVal) => {
        if (menu.value)
          return;
        if (isFocused.value && !oldVal.length && newVal.length) {
          menu.value = true;
        }
      });
      useRender(() => {
        const hasChips = !!(props.chips || slots.chip);
        const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
        const isDirty = model.value.length > 0;
        const textFieldProps = VTextField.filterProps(props);
        const placeholder = isDirty || !isFocused.value && props.label && !props.persistentPlaceholder ? void 0 : props.placeholder;
        return vue.createVNode(VTextField, vue.mergeProps({
          "ref": vTextFieldRef
        }, textFieldProps, {
          "modelValue": model.value.map((v) => v.props.value).join(", "),
          "onUpdate:modelValue": onModelUpdate,
          "focused": isFocused.value,
          "onUpdate:focused": ($event) => isFocused.value = $event,
          "validationValue": model.externalValue,
          "counterValue": counterValue.value,
          "dirty": isDirty,
          "class": ["v-select", {
            "v-select--active-menu": menu.value,
            "v-select--chips": !!props.chips,
            [`v-select--${props.multiple ? "multiple" : "single"}`]: true,
            "v-select--selected": model.value.length,
            "v-select--selection-slot": !!slots.selection
          }, props.class],
          "style": props.style,
          "inputmode": "none",
          "placeholder": placeholder,
          "onClick:clear": onClear,
          "onMousedown:control": onMousedownControl,
          "onBlur": onBlur,
          "onKeydown": onKeydown,
          "aria-label": t(label.value),
          "title": t(label.value)
        }), {
          ...slots,
          default: () => vue.createVNode(vue.Fragment, null, [vue.createVNode(VMenu, vue.mergeProps({
            "ref": vMenuRef,
            "modelValue": menu.value,
            "onUpdate:modelValue": ($event) => menu.value = $event,
            "activator": "parent",
            "contentClass": "v-select__content",
            "disabled": menuDisabled.value,
            "eager": props.eager,
            "maxHeight": 310,
            "openOnClick": false,
            "closeOnContentClick": false,
            "transition": props.transition,
            "onAfterLeave": onAfterLeave
          }, computedMenuProps.value), {
            default: () => [hasList && vue.createVNode(VList, vue.mergeProps({
              "ref": listRef,
              "selected": selectedValues.value,
              "selectStrategy": props.multiple ? "independent" : "single-independent",
              "onMousedown": (e) => e.preventDefault(),
              "onKeydown": onListKeydown,
              "onFocusin": onFocusin,
              "onScrollPassive": onListScroll,
              "tabindex": "-1",
              "aria-live": "polite",
              "color": props.itemColor ?? props.color
            }, props.listProps), {
              default: () => {
                var _a, _b, _c;
                return [(_a = slots["prepend-item"]) == null ? void 0 : _a.call(slots), !displayItems.value.length && !props.hideNoData && (((_b = slots["no-data"]) == null ? void 0 : _b.call(slots)) ?? vue.createVNode(VListItem, {
                  "title": t(props.noDataText)
                }, null)), vue.createVNode(VVirtualScroll, {
                  "ref": vVirtualScrollRef,
                  "renderless": true,
                  "items": displayItems.value
                }, {
                  default: (_ref2) => {
                    var _a2;
                    let {
                      item,
                      index,
                      itemRef
                    } = _ref2;
                    const itemProps = vue.mergeProps(item.props, {
                      ref: itemRef,
                      key: index,
                      onClick: () => select(item, null)
                    });
                    return ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
                      item,
                      index,
                      props: itemProps
                    })) ?? vue.createVNode(VListItem, vue.mergeProps(itemProps, {
                      "role": "option"
                    }), {
                      prepend: (_ref3) => {
                        let {
                          isSelected
                        } = _ref3;
                        return vue.createVNode(vue.Fragment, null, [props.multiple && !props.hideSelected ? vue.createVNode(VCheckboxBtn, {
                          "key": item.value,
                          "modelValue": isSelected,
                          "ripple": false,
                          "tabindex": "-1"
                        }, null) : void 0, item.props.prependAvatar && vue.createVNode(VAvatar, {
                          "image": item.props.prependAvatar
                        }, null), item.props.prependIcon && vue.createVNode(VIcon, {
                          "icon": item.props.prependIcon
                        }, null)]);
                      }
                    });
                  }
                }), (_c = slots["append-item"]) == null ? void 0 : _c.call(slots)];
              }
            })]
          }), model.value.map((item, index) => {
            function onChipClose(e) {
              e.stopPropagation();
              e.preventDefault();
              select(item, false);
            }
            const slotProps = {
              "onClick:close": onChipClose,
              onKeydown(e) {
                if (e.key !== "Enter" && e.key !== " ")
                  return;
                e.preventDefault();
                e.stopPropagation();
                onChipClose(e);
              },
              onMousedown(e) {
                e.preventDefault();
                e.stopPropagation();
              },
              modelValue: true,
              "onUpdate:modelValue": void 0
            };
            const hasSlot = hasChips ? !!slots.chip : !!slots.selection;
            const slotContent = hasSlot ? ensureValidVNode(hasChips ? slots.chip({
              item,
              index,
              props: slotProps
            }) : slots.selection({
              item,
              index
            })) : void 0;
            if (hasSlot && !slotContent)
              return void 0;
            return vue.createVNode("div", {
              "key": item.value,
              "class": "v-select__selection"
            }, [hasChips ? !slots.chip ? vue.createVNode(VChip, vue.mergeProps({
              "key": "chip",
              "closable": props.closableChips,
              "size": "small",
              "text": item.title,
              "disabled": item.props.disabled
            }, slotProps), null) : vue.createVNode(VDefaultsProvider, {
              "key": "chip-defaults",
              "defaults": {
                VChip: {
                  closable: props.closableChips,
                  size: "small",
                  text: item.title
                }
              }
            }, {
              default: () => [slotContent]
            }) : slotContent ?? vue.createVNode("span", {
              "class": "v-select__selection-text"
            }, [item.title, props.multiple && index < model.value.length - 1 && vue.createVNode("span", {
              "class": "v-select__selection-comma"
            }, [vue.createTextVNode(",")])])]);
          })]),
          "append-inner": function() {
            var _a;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return vue.createVNode(vue.Fragment, null, [(_a = slots["append-inner"]) == null ? void 0 : _a.call(slots, ...args), props.menuIcon ? vue.createVNode(VIcon, {
              "class": "v-select__menu-icon",
              "icon": props.menuIcon
            }, null) : void 0]);
          }
        });
      });
      return forwardRefs({
        isFocused,
        menu,
        select
      }, vTextFieldRef);
    }
  });
  const makeDataTablePaginateProps = propsFactory({
    page: {
      type: [Number, String],
      default: 1
    },
    itemsPerPage: {
      type: [Number, String],
      default: 10
    }
  }, "DataTable-paginate");
  const VDataTablePaginationSymbol = Symbol.for("vuetify:data-table-pagination");
  function createPagination(props) {
    const page = useProxiedModel(props, "page", void 0, (value) => +(value ?? 1));
    const itemsPerPage = useProxiedModel(props, "itemsPerPage", void 0, (value) => +(value ?? 10));
    return {
      page,
      itemsPerPage
    };
  }
  function providePagination(options) {
    const {
      page,
      itemsPerPage,
      itemsLength
    } = options;
    const startIndex = vue.computed(() => {
      if (itemsPerPage.value === -1)
        return 0;
      return itemsPerPage.value * (page.value - 1);
    });
    const stopIndex = vue.computed(() => {
      if (itemsPerPage.value === -1)
        return itemsLength.value;
      return Math.min(itemsLength.value, startIndex.value + itemsPerPage.value);
    });
    const pageCount = vue.computed(() => {
      if (itemsPerPage.value === -1 || itemsLength.value === 0)
        return 1;
      return Math.ceil(itemsLength.value / itemsPerPage.value);
    });
    vue.watchEffect(() => {
      if (page.value > pageCount.value) {
        page.value = pageCount.value;
      }
    });
    function setItemsPerPage(value) {
      itemsPerPage.value = value;
      page.value = 1;
    }
    function nextPage() {
      page.value = clamp(page.value + 1, 1, pageCount.value);
    }
    function prevPage() {
      page.value = clamp(page.value - 1, 1, pageCount.value);
    }
    function setPage(value) {
      page.value = clamp(value, 1, pageCount.value);
    }
    const data = {
      page,
      itemsPerPage,
      startIndex,
      stopIndex,
      pageCount,
      itemsLength,
      nextPage,
      prevPage,
      setPage,
      setItemsPerPage
    };
    vue.provide(VDataTablePaginationSymbol, data);
    return data;
  }
  function usePagination() {
    const data = vue.inject(VDataTablePaginationSymbol);
    if (!data)
      throw new Error("Missing pagination!");
    return data;
  }
  function usePaginatedItems(options) {
    const vm = getCurrentInstance("usePaginatedItems");
    const {
      items,
      startIndex,
      stopIndex,
      itemsPerPage
    } = options;
    const paginatedItems = vue.computed(() => {
      if (itemsPerPage.value <= 0)
        return items.value;
      return items.value.slice(startIndex.value, stopIndex.value);
    });
    vue.watch(paginatedItems, (val) => {
      vm.emit("update:currentItems", val);
    });
    return {
      paginatedItems
    };
  }
  const makeVDataTableFooterProps = propsFactory({
    prevIcon: {
      type: String,
      default: "$prev"
    },
    nextIcon: {
      type: String,
      default: "$next"
    },
    firstIcon: {
      type: String,
      default: "$first"
    },
    lastIcon: {
      type: String,
      default: "$last"
    },
    itemsPerPageText: {
      type: String,
      default: "$vuetify.dataFooter.itemsPerPageText"
    },
    pageText: {
      type: String,
      default: "$vuetify.dataFooter.pageText"
    },
    firstPageLabel: {
      type: String,
      default: "$vuetify.dataFooter.firstPage"
    },
    prevPageLabel: {
      type: String,
      default: "$vuetify.dataFooter.prevPage"
    },
    nextPageLabel: {
      type: String,
      default: "$vuetify.dataFooter.nextPage"
    },
    lastPageLabel: {
      type: String,
      default: "$vuetify.dataFooter.lastPage"
    },
    itemsPerPageOptions: {
      type: Array,
      default: () => [{
        value: 10,
        title: "10"
      }, {
        value: 25,
        title: "25"
      }, {
        value: 50,
        title: "50"
      }, {
        value: 100,
        title: "100"
      }, {
        value: -1,
        title: "$vuetify.dataFooter.itemsPerPageAll"
      }]
    },
    showCurrentPage: Boolean
  }, "VDataTableFooter");
  const VDataTableFooter = genericComponent()({
    name: "VDataTableFooter",
    props: makeVDataTableFooterProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        t
      } = useLocale();
      const {
        page,
        pageCount,
        startIndex,
        stopIndex,
        itemsLength,
        itemsPerPage,
        setItemsPerPage
      } = usePagination();
      const itemsPerPageOptions = vue.computed(() => props.itemsPerPageOptions.map((option) => {
        if (typeof option === "number") {
          return {
            value: option,
            title: option === -1 ? t("$vuetify.dataFooter.itemsPerPageAll") : String(option)
          };
        }
        return {
          ...option,
          title: !isNaN(Number(option.title)) ? option.title : t(option.title)
        };
      }));
      useRender(() => {
        var _a;
        const paginationProps = VPagination.filterProps(props);
        return vue.createVNode("div", {
          "class": "v-data-table-footer"
        }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots), vue.createVNode("div", {
          "class": "v-data-table-footer__items-per-page"
        }, [vue.createVNode("span", null, [t(props.itemsPerPageText)]), vue.createVNode(VSelect, {
          "items": itemsPerPageOptions.value,
          "modelValue": itemsPerPage.value,
          "onUpdate:modelValue": (v) => setItemsPerPage(Number(v)),
          "density": "compact",
          "variant": "outlined",
          "hide-details": true
        }, null)]), vue.createVNode("div", {
          "class": "v-data-table-footer__info"
        }, [vue.createVNode("div", null, [t(props.pageText, !itemsLength.value ? 0 : startIndex.value + 1, stopIndex.value, itemsLength.value)])]), vue.createVNode("div", {
          "class": "v-data-table-footer__pagination"
        }, [vue.createVNode(VPagination, vue.mergeProps({
          "modelValue": page.value,
          "onUpdate:modelValue": ($event) => page.value = $event,
          "density": "comfortable",
          "first-aria-label": props.firstPageLabel,
          "last-aria-label": props.lastPageLabel,
          "length": pageCount.value,
          "next-aria-label": props.nextPageLabel,
          "previous-aria-label": props.prevPageLabel,
          "rounded": true,
          "show-first-last-page": true,
          "total-visible": props.showCurrentPage ? 1 : 0,
          "variant": "plain"
        }, paginationProps), null)])]);
      });
      return {};
    }
  });
  const VDataTableColumn = defineFunctionalComponent({
    align: {
      type: String,
      default: "start"
    },
    fixed: Boolean,
    fixedOffset: [Number, String],
    height: [Number, String],
    lastFixed: Boolean,
    noPadding: Boolean,
    tag: String,
    width: [Number, String],
    maxWidth: [Number, String],
    nowrap: Boolean
  }, (props, _ref) => {
    let {
      slots
    } = _ref;
    const Tag = props.tag ?? "td";
    return vue.createVNode(Tag, {
      "class": ["v-data-table__td", {
        "v-data-table-column--fixed": props.fixed,
        "v-data-table-column--last-fixed": props.lastFixed,
        "v-data-table-column--no-padding": props.noPadding,
        "v-data-table-column--nowrap": props.nowrap
      }, `v-data-table-column--align-${props.align}`],
      "style": {
        height: convertToUnit(props.height),
        width: convertToUnit(props.width),
        maxWidth: convertToUnit(props.maxWidth),
        left: convertToUnit(props.fixedOffset || null)
      }
    }, {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
      }
    });
  });
  const makeDataTableHeaderProps = propsFactory({
    headers: Array
  }, "DataTable-header");
  const VDataTableHeadersSymbol = Symbol.for("vuetify:data-table-headers");
  const defaultHeader = {
    title: "",
    sortable: false
  };
  const defaultActionHeader = {
    ...defaultHeader,
    width: 48
  };
  function priorityQueue() {
    let arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    const queue = arr.map((element) => ({
      element,
      priority: 0
    }));
    return {
      enqueue: (element, priority) => {
        let added = false;
        for (let i = 0; i < queue.length; i++) {
          const item = queue[i];
          if (item.priority > priority) {
            queue.splice(i, 0, {
              element,
              priority
            });
            added = true;
            break;
          }
        }
        if (!added)
          queue.push({
            element,
            priority
          });
      },
      size: () => queue.length,
      count: () => {
        let count = 0;
        if (!queue.length)
          return 0;
        const whole = Math.floor(queue[0].priority);
        for (let i = 0; i < queue.length; i++) {
          if (Math.floor(queue[i].priority) === whole)
            count += 1;
        }
        return count;
      },
      dequeue: () => {
        return queue.shift();
      }
    };
  }
  function extractLeaves(item) {
    let columns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (!item.children) {
      columns.push(item);
    } else {
      for (const child of item.children) {
        extractLeaves(child, columns);
      }
    }
    return columns;
  }
  function extractKeys(headers) {
    let keys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
    for (const item of headers) {
      if (item.key)
        keys.add(item.key);
      if (item.children) {
        extractKeys(item.children, keys);
      }
    }
    return keys;
  }
  function getDefaultItem(item) {
    if (!item.key)
      return void 0;
    if (item.key === "data-table-group")
      return defaultHeader;
    if (["data-table-expand", "data-table-select"].includes(item.key))
      return defaultActionHeader;
    return void 0;
  }
  function getDepth(item) {
    let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!item.children)
      return depth;
    return Math.max(depth, ...item.children.map((child) => getDepth(child, depth + 1)));
  }
  function parseFixedColumns(items) {
    let seenFixed = false;
    function setFixed(item) {
      let parentFixed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!item)
        return;
      if (parentFixed) {
        item.fixed = true;
      }
      if (item.fixed) {
        if (item.children) {
          for (let i = item.children.length - 1; i >= 0; i--) {
            setFixed(item.children[i], true);
          }
        } else {
          if (!seenFixed) {
            item.lastFixed = true;
          } else if (isNaN(+item.width)) {
            consoleError(`Multiple fixed columns should have a static width (key: ${item.key})`);
          }
          seenFixed = true;
        }
      } else {
        if (item.children) {
          for (let i = item.children.length - 1; i >= 0; i--) {
            setFixed(item.children[i]);
          }
        } else {
          seenFixed = false;
        }
      }
    }
    for (let i = items.length - 1; i >= 0; i--) {
      setFixed(items[i]);
    }
    function setFixedOffset(item) {
      let fixedOffset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (!item)
        return fixedOffset2;
      if (item.children) {
        item.fixedOffset = fixedOffset2;
        for (const child of item.children) {
          fixedOffset2 = setFixedOffset(child, fixedOffset2);
        }
      } else if (item.fixed) {
        item.fixedOffset = fixedOffset2;
        fixedOffset2 += parseFloat(item.width || "0") || 0;
      }
      return fixedOffset2;
    }
    let fixedOffset = 0;
    for (const item of items) {
      fixedOffset = setFixedOffset(item, fixedOffset);
    }
  }
  function parse(items, maxDepth) {
    const headers = [];
    let currentDepth = 0;
    const queue = priorityQueue(items);
    while (queue.size() > 0) {
      let rowSize = queue.count();
      const row = [];
      let fraction = 1;
      while (rowSize > 0) {
        const {
          element: item,
          priority
        } = queue.dequeue();
        const diff = maxDepth - currentDepth - getDepth(item);
        row.push({
          ...item,
          rowspan: diff ?? 1,
          colspan: item.children ? extractLeaves(item).length : 1
        });
        if (item.children) {
          for (const child of item.children) {
            const sort = priority % 1 + fraction / Math.pow(10, currentDepth + 2);
            queue.enqueue(child, currentDepth + diff + sort);
          }
        }
        fraction += 1;
        rowSize -= 1;
      }
      currentDepth += 1;
      headers.push(row);
    }
    const columns = items.map((item) => extractLeaves(item)).flat();
    return {
      columns,
      headers
    };
  }
  function convertToInternalHeaders(items) {
    const internalHeaders = [];
    for (const item of items) {
      const defaultItem = {
        ...getDefaultItem(item),
        ...item
      };
      const key = defaultItem.key ?? (typeof defaultItem.value === "string" ? defaultItem.value : null);
      const value = defaultItem.value ?? key ?? null;
      const internalItem = {
        ...defaultItem,
        key,
        value,
        sortable: defaultItem.sortable ?? (defaultItem.key != null || !!defaultItem.sort),
        children: defaultItem.children ? convertToInternalHeaders(defaultItem.children) : void 0
      };
      internalHeaders.push(internalItem);
    }
    return internalHeaders;
  }
  function createHeaders(props, options) {
    const headers = vue.ref([]);
    const columns = vue.ref([]);
    const sortFunctions = vue.ref({});
    const sortRawFunctions = vue.ref({});
    const filterFunctions = vue.ref({});
    vue.watchEffect(() => {
      var _a, _b, _c;
      const _headers = props.headers || Object.keys(props.items[0] ?? {}).map((key) => ({
        key,
        title: vue.capitalize(key)
      }));
      const items = _headers.slice();
      const keys = extractKeys(items);
      if (((_a = options == null ? void 0 : options.groupBy) == null ? void 0 : _a.value.length) && !keys.has("data-table-group")) {
        items.unshift({
          key: "data-table-group",
          title: "Group"
        });
      }
      if (((_b = options == null ? void 0 : options.showSelect) == null ? void 0 : _b.value) && !keys.has("data-table-select")) {
        items.unshift({
          key: "data-table-select"
        });
      }
      if (((_c = options == null ? void 0 : options.showExpand) == null ? void 0 : _c.value) && !keys.has("data-table-expand")) {
        items.push({
          key: "data-table-expand"
        });
      }
      const internalHeaders = convertToInternalHeaders(items);
      parseFixedColumns(internalHeaders);
      const maxDepth = Math.max(...internalHeaders.map((item) => getDepth(item))) + 1;
      const parsed = parse(internalHeaders, maxDepth);
      headers.value = parsed.headers;
      columns.value = parsed.columns;
      const flatHeaders = parsed.headers.flat(1);
      for (const header of flatHeaders) {
        if (!header.key)
          continue;
        if (header.sortable) {
          if (header.sort) {
            sortFunctions.value[header.key] = header.sort;
          }
          if (header.sortRaw) {
            sortRawFunctions.value[header.key] = header.sortRaw;
          }
        }
        if (header.filter) {
          filterFunctions.value[header.key] = header.filter;
        }
      }
    });
    const data = {
      headers,
      columns,
      sortFunctions,
      sortRawFunctions,
      filterFunctions
    };
    vue.provide(VDataTableHeadersSymbol, data);
    return data;
  }
  function useHeaders() {
    const data = vue.inject(VDataTableHeadersSymbol);
    if (!data)
      throw new Error("Missing headers!");
    return data;
  }
  const singleSelectStrategy = {
    showSelectAll: false,
    allSelected: () => [],
    select: (_ref) => {
      var _a;
      let {
        items,
        value
      } = _ref;
      return new Set(value ? [(_a = items[0]) == null ? void 0 : _a.value] : []);
    },
    selectAll: (_ref2) => {
      let {
        selected
      } = _ref2;
      return selected;
    }
  };
  const pageSelectStrategy = {
    showSelectAll: true,
    allSelected: (_ref3) => {
      let {
        currentPage
      } = _ref3;
      return currentPage;
    },
    select: (_ref4) => {
      let {
        items,
        value,
        selected
      } = _ref4;
      for (const item of items) {
        if (value)
          selected.add(item.value);
        else
          selected.delete(item.value);
      }
      return selected;
    },
    selectAll: (_ref5) => {
      let {
        value,
        currentPage,
        selected
      } = _ref5;
      return pageSelectStrategy.select({
        items: currentPage,
        value,
        selected
      });
    }
  };
  const allSelectStrategy = {
    showSelectAll: true,
    allSelected: (_ref6) => {
      let {
        allItems
      } = _ref6;
      return allItems;
    },
    select: (_ref7) => {
      let {
        items,
        value,
        selected
      } = _ref7;
      for (const item of items) {
        if (value)
          selected.add(item.value);
        else
          selected.delete(item.value);
      }
      return selected;
    },
    selectAll: (_ref8) => {
      let {
        value,
        allItems,
        selected
      } = _ref8;
      return allSelectStrategy.select({
        items: allItems,
        value,
        selected
      });
    }
  };
  const makeDataTableSelectProps = propsFactory({
    showSelect: Boolean,
    selectStrategy: {
      type: [String, Object],
      default: "page"
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    valueComparator: {
      type: Function,
      default: deepEqual
    }
  }, "DataTable-select");
  const VDataTableSelectionSymbol = Symbol.for("vuetify:data-table-selection");
  function provideSelection(props, _ref9) {
    let {
      allItems,
      currentPage
    } = _ref9;
    const selected = useProxiedModel(props, "modelValue", props.modelValue, (v) => {
      return new Set(wrapInArray(v).map((v2) => {
        var _a;
        return ((_a = allItems.value.find((item) => props.valueComparator(v2, item.value))) == null ? void 0 : _a.value) ?? v2;
      }));
    }, (v) => {
      return [...v.values()];
    });
    const allSelectable = vue.computed(() => allItems.value.filter((item) => item.selectable));
    const currentPageSelectable = vue.computed(() => currentPage.value.filter((item) => item.selectable));
    const selectStrategy = vue.computed(() => {
      if (typeof props.selectStrategy === "object")
        return props.selectStrategy;
      switch (props.selectStrategy) {
        case "single":
          return singleSelectStrategy;
        case "all":
          return allSelectStrategy;
        case "page":
        default:
          return pageSelectStrategy;
      }
    });
    function isSelected(items) {
      return wrapInArray(items).every((item) => selected.value.has(item.value));
    }
    function isSomeSelected(items) {
      return wrapInArray(items).some((item) => selected.value.has(item.value));
    }
    function select(items, value) {
      const newSelected = selectStrategy.value.select({
        items,
        value,
        selected: new Set(selected.value)
      });
      selected.value = newSelected;
    }
    function toggleSelect(item) {
      select([item], !isSelected([item]));
    }
    function selectAll(value) {
      const newSelected = selectStrategy.value.selectAll({
        value,
        allItems: allSelectable.value,
        currentPage: currentPageSelectable.value,
        selected: new Set(selected.value)
      });
      selected.value = newSelected;
    }
    const someSelected = vue.computed(() => selected.value.size > 0);
    const allSelected = vue.computed(() => {
      const items = selectStrategy.value.allSelected({
        allItems: allSelectable.value,
        currentPage: currentPageSelectable.value
      });
      return !!items.length && isSelected(items);
    });
    const showSelectAll = vue.computed(() => selectStrategy.value.showSelectAll);
    const data = {
      toggleSelect,
      select,
      selectAll,
      isSelected,
      isSomeSelected,
      someSelected,
      allSelected,
      showSelectAll
    };
    vue.provide(VDataTableSelectionSymbol, data);
    return data;
  }
  function useSelection() {
    const data = vue.inject(VDataTableSelectionSymbol);
    if (!data)
      throw new Error("Missing selection!");
    return data;
  }
  const makeDataTableSortProps = propsFactory({
    sortBy: {
      type: Array,
      default: () => []
    },
    customKeySort: Object,
    multiSort: Boolean,
    mustSort: Boolean
  }, "DataTable-sort");
  const VDataTableSortSymbol = Symbol.for("vuetify:data-table-sort");
  function createSort(props) {
    const sortBy = useProxiedModel(props, "sortBy");
    const mustSort = vue.toRef(props, "mustSort");
    const multiSort = vue.toRef(props, "multiSort");
    return {
      sortBy,
      mustSort,
      multiSort
    };
  }
  function provideSort(options) {
    const {
      sortBy,
      mustSort,
      multiSort,
      page
    } = options;
    const toggleSort = (column) => {
      if (column.key == null)
        return;
      let newSortBy = sortBy.value.map((x) => ({
        ...x
      })) ?? [];
      const item = newSortBy.find((x) => x.key === column.key);
      if (!item) {
        if (multiSort.value)
          newSortBy = [...newSortBy, {
            key: column.key,
            order: "asc"
          }];
        else
          newSortBy = [{
            key: column.key,
            order: "asc"
          }];
      } else if (item.order === "desc") {
        if (mustSort.value) {
          item.order = "asc";
        } else {
          newSortBy = newSortBy.filter((x) => x.key !== column.key);
        }
      } else {
        item.order = "desc";
      }
      sortBy.value = newSortBy;
      if (page)
        page.value = 1;
    };
    function isSorted(column) {
      return !!sortBy.value.find((item) => item.key === column.key);
    }
    const data = {
      sortBy,
      toggleSort,
      isSorted
    };
    vue.provide(VDataTableSortSymbol, data);
    return data;
  }
  function useSort() {
    const data = vue.inject(VDataTableSortSymbol);
    if (!data)
      throw new Error("Missing sort!");
    return data;
  }
  function useSortedItems(props, items, sortBy, options) {
    const locale = useLocale();
    const sortedItems = vue.computed(() => {
      var _a, _b;
      if (!sortBy.value.length)
        return items.value;
      return sortItems(items.value, sortBy.value, locale.current.value, {
        transform: options == null ? void 0 : options.transform,
        sortFunctions: {
          ...props.customKeySort,
          ...(_a = options == null ? void 0 : options.sortFunctions) == null ? void 0 : _a.value
        },
        sortRawFunctions: (_b = options == null ? void 0 : options.sortRawFunctions) == null ? void 0 : _b.value
      });
    });
    return {
      sortedItems
    };
  }
  function sortItems(items, sortByItems, locale, options) {
    const stringCollator = new Intl.Collator(locale, {
      sensitivity: "accent",
      usage: "sort"
    });
    const transformedItems = items.map((item) => [item, (options == null ? void 0 : options.transform) ? options.transform(item) : item]);
    return transformedItems.sort((a, b) => {
      var _a, _b;
      for (let i = 0; i < sortByItems.length; i++) {
        let hasCustomResult = false;
        const sortKey = sortByItems[i].key;
        const sortOrder = sortByItems[i].order ?? "asc";
        if (sortOrder === false)
          continue;
        let sortA = a[1][sortKey];
        let sortB = b[1][sortKey];
        let sortARaw = a[0].raw;
        let sortBRaw = b[0].raw;
        if (sortOrder === "desc") {
          [sortA, sortB] = [sortB, sortA];
          [sortARaw, sortBRaw] = [sortBRaw, sortARaw];
        }
        if ((_a = options == null ? void 0 : options.sortRawFunctions) == null ? void 0 : _a[sortKey]) {
          const customResult = options.sortRawFunctions[sortKey](sortARaw, sortBRaw);
          if (customResult == null)
            continue;
          hasCustomResult = true;
          if (customResult)
            return customResult;
        }
        if ((_b = options == null ? void 0 : options.sortFunctions) == null ? void 0 : _b[sortKey]) {
          const customResult = options.sortFunctions[sortKey](sortA, sortB);
          if (customResult == null)
            continue;
          hasCustomResult = true;
          if (customResult)
            return customResult;
        }
        if (hasCustomResult)
          continue;
        if (sortA instanceof Date && sortB instanceof Date) {
          return sortA.getTime() - sortB.getTime();
        }
        [sortA, sortB] = [sortA, sortB].map((s) => s != null ? s.toString().toLocaleLowerCase() : s);
        if (sortA !== sortB) {
          if (isEmpty(sortA) && isEmpty(sortB))
            return 0;
          if (isEmpty(sortA))
            return -1;
          if (isEmpty(sortB))
            return 1;
          if (!isNaN(sortA) && !isNaN(sortB))
            return Number(sortA) - Number(sortB);
          return stringCollator.compare(sortA, sortB);
        }
      }
      return 0;
    }).map((_ref) => {
      let [item] = _ref;
      return item;
    });
  }
  const makeVDataTableHeadersProps = propsFactory({
    color: String,
    sticky: Boolean,
    multiSort: Boolean,
    sortAscIcon: {
      type: IconValue,
      default: "$sortAsc"
    },
    sortDescIcon: {
      type: IconValue,
      default: "$sortDesc"
    },
    headerProps: {
      type: Object
    },
    ...makeDisplayProps(),
    ...makeLoaderProps()
  }, "VDataTableHeaders");
  const VDataTableHeaders = genericComponent()({
    name: "VDataTableHeaders",
    props: makeVDataTableHeadersProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        t
      } = useLocale();
      const {
        toggleSort,
        sortBy,
        isSorted
      } = useSort();
      const {
        someSelected,
        allSelected,
        selectAll,
        showSelectAll
      } = useSelection();
      const {
        columns,
        headers
      } = useHeaders();
      const {
        loaderClasses
      } = useLoader(props);
      function getFixedStyles(column, y) {
        if (!props.sticky && !column.fixed)
          return void 0;
        return {
          position: "sticky",
          left: column.fixed ? convertToUnit(column.fixedOffset) : void 0,
          top: props.sticky ? `calc(var(--v-table-header-height) * ${y})` : void 0
        };
      }
      function getSortIcon(column) {
        const item = sortBy.value.find((item2) => item2.key === column.key);
        if (!item)
          return props.sortAscIcon;
        return item.order === "asc" ? props.sortAscIcon : props.sortDescIcon;
      }
      const {
        backgroundColorClasses,
        backgroundColorStyles
      } = useBackgroundColor(props, "color");
      const {
        displayClasses,
        mobile
      } = useDisplay(props);
      const slotProps = vue.computed(() => ({
        headers: headers.value,
        columns: columns.value,
        toggleSort,
        isSorted,
        sortBy: sortBy.value,
        someSelected: someSelected.value,
        allSelected: allSelected.value,
        selectAll,
        getSortIcon
      }));
      const headerCellClasses = vue.computed(() => ["v-data-table__th", {
        "v-data-table__th--sticky": props.sticky
      }, displayClasses.value, loaderClasses.value]);
      const VDataTableHeaderCell = (_ref2) => {
        let {
          column,
          x,
          y
        } = _ref2;
        const noPadding = column.key === "data-table-select" || column.key === "data-table-expand";
        const headerProps = vue.mergeProps(props.headerProps ?? {}, column.headerProps ?? {});
        return vue.createVNode(VDataTableColumn, vue.mergeProps({
          "tag": "th",
          "align": column.align,
          "class": [{
            "v-data-table__th--sortable": column.sortable,
            "v-data-table__th--sorted": isSorted(column),
            "v-data-table__th--fixed": column.fixed
          }, ...headerCellClasses.value],
          "style": {
            width: convertToUnit(column.width),
            minWidth: convertToUnit(column.minWidth),
            maxWidth: convertToUnit(column.maxWidth),
            ...getFixedStyles(column, y)
          },
          "colspan": column.colspan,
          "rowspan": column.rowspan,
          "onClick": column.sortable ? () => toggleSort(column) : void 0,
          "fixed": column.fixed,
          "nowrap": column.nowrap,
          "lastFixed": column.lastFixed,
          "noPadding": noPadding
        }, headerProps), {
          default: () => {
            var _a;
            const columnSlotName = `header.${column.key}`;
            const columnSlotProps = {
              column,
              selectAll,
              isSorted,
              toggleSort,
              sortBy: sortBy.value,
              someSelected: someSelected.value,
              allSelected: allSelected.value,
              getSortIcon
            };
            if (slots[columnSlotName])
              return slots[columnSlotName](columnSlotProps);
            if (column.key === "data-table-select") {
              return ((_a = slots["header.data-table-select"]) == null ? void 0 : _a.call(slots, columnSlotProps)) ?? (showSelectAll.value && vue.createVNode(VCheckboxBtn, {
                "modelValue": allSelected.value,
                "indeterminate": someSelected.value && !allSelected.value,
                "onUpdate:modelValue": selectAll
              }, null));
            }
            return vue.createVNode("div", {
              "class": "v-data-table-header__content"
            }, [vue.createVNode("span", null, [column.title]), column.sortable && vue.createVNode(VIcon, {
              "key": "icon",
              "class": "v-data-table-header__sort-icon",
              "icon": getSortIcon(column)
            }, null), props.multiSort && isSorted(column) && vue.createVNode("div", {
              "key": "badge",
              "class": ["v-data-table-header__sort-badge", ...backgroundColorClasses.value],
              "style": backgroundColorStyles.value
            }, [sortBy.value.findIndex((x2) => x2.key === column.key) + 1])]);
          }
        });
      };
      const VDataTableMobileHeaderCell = () => {
        const headerProps = vue.mergeProps(props.headerProps ?? {} ?? {});
        const displayItems = vue.computed(() => {
          return columns.value.filter((column) => column == null ? void 0 : column.sortable);
        });
        const appendIcon = vue.computed(() => {
          const showSelectColumn = columns.value.find((column) => column.key === "data-table-select");
          if (showSelectColumn == null)
            return;
          return allSelected.value ? "$checkboxOn" : someSelected.value ? "$checkboxIndeterminate" : "$checkboxOff";
        });
        return vue.createVNode(VDataTableColumn, vue.mergeProps({
          "tag": "th",
          "class": [...headerCellClasses.value],
          "colspan": headers.value.length + 1
        }, headerProps), {
          default: () => [vue.createVNode("div", {
            "class": "v-data-table-header__content"
          }, [vue.createVNode(VSelect, {
            "chips": true,
            "class": "v-data-table__td-sort-select",
            "clearable": true,
            "density": "default",
            "items": displayItems.value,
            "label": t("$vuetify.dataTable.sortBy"),
            "multiple": props.multiSort,
            "variant": "underlined",
            "onClick:clear": () => sortBy.value = [],
            "appendIcon": appendIcon.value,
            "onClick:append": () => selectAll(!allSelected.value)
          }, {
            ...slots,
            chip: (props2) => {
              var _a;
              return vue.createVNode(VChip, {
                "onClick": ((_a = props2.item.raw) == null ? void 0 : _a.sortable) ? () => toggleSort(props2.item.raw) : void 0,
                "onMousedown": (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }, {
                default: () => [props2.item.title, vue.createVNode(VIcon, {
                  "class": ["v-data-table__td-sort-icon", isSorted(props2.item.raw) && "v-data-table__td-sort-icon-active"],
                  "icon": getSortIcon(props2.item.raw),
                  "size": "small"
                }, null)]
              });
            }
          })])]
        });
      };
      useRender(() => {
        return mobile.value ? vue.createVNode("tr", null, [vue.createVNode(VDataTableMobileHeaderCell, null, null)]) : vue.createVNode(vue.Fragment, null, [slots.headers ? slots.headers(slotProps.value) : headers.value.map((row, y) => vue.createVNode("tr", null, [row.map((column, x) => vue.createVNode(VDataTableHeaderCell, {
          "column": column,
          "x": x,
          "y": y
        }, null))])), props.loading && vue.createVNode("tr", {
          "class": "v-data-table-progress"
        }, [vue.createVNode("th", {
          "colspan": columns.value.length
        }, [vue.createVNode(LoaderSlot, {
          "name": "v-data-table-progress",
          "absolute": true,
          "active": true,
          "color": typeof props.loading === "boolean" ? void 0 : props.loading,
          "indeterminate": true
        }, {
          default: slots.loader
        })])])]);
      });
    }
  });
  const makeDataTableGroupProps = propsFactory({
    groupBy: {
      type: Array,
      default: () => []
    }
  }, "DataTable-group");
  const VDataTableGroupSymbol = Symbol.for("vuetify:data-table-group");
  function createGroupBy(props) {
    const groupBy = useProxiedModel(props, "groupBy");
    return {
      groupBy
    };
  }
  function provideGroupBy(options) {
    const {
      groupBy,
      sortBy
    } = options;
    const opened = vue.ref(/* @__PURE__ */ new Set());
    const sortByWithGroups = vue.computed(() => {
      return groupBy.value.map((val) => ({
        ...val,
        order: val.order ?? false
      })).concat(sortBy.value);
    });
    function isGroupOpen(group) {
      return opened.value.has(group.id);
    }
    function toggleGroup(group) {
      const newOpened = new Set(opened.value);
      if (!isGroupOpen(group))
        newOpened.add(group.id);
      else
        newOpened.delete(group.id);
      opened.value = newOpened;
    }
    function extractRows(items) {
      function dive(group) {
        const arr = [];
        for (const item of group.items) {
          if ("type" in item && item.type === "group") {
            arr.push(...dive(item));
          } else {
            arr.push(item);
          }
        }
        return arr;
      }
      return dive({
        type: "group",
        items,
        id: "dummy",
        key: "dummy",
        value: "dummy",
        depth: 0
      });
    }
    const data = {
      sortByWithGroups,
      toggleGroup,
      opened,
      groupBy,
      extractRows,
      isGroupOpen
    };
    vue.provide(VDataTableGroupSymbol, data);
    return data;
  }
  function useGroupBy() {
    const data = vue.inject(VDataTableGroupSymbol);
    if (!data)
      throw new Error("Missing group!");
    return data;
  }
  function groupItemsByProperty(items, groupBy) {
    if (!items.length)
      return [];
    const groups = /* @__PURE__ */ new Map();
    for (const item of items) {
      const value = getObjectValueByPath(item.raw, groupBy);
      if (!groups.has(value)) {
        groups.set(value, []);
      }
      groups.get(value).push(item);
    }
    return groups;
  }
  function groupItems(items, groupBy) {
    let depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    let prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
    if (!groupBy.length)
      return [];
    const groupedItems = groupItemsByProperty(items, groupBy[0]);
    const groups = [];
    const rest = groupBy.slice(1);
    groupedItems.forEach((items2, value) => {
      const key = groupBy[0];
      const id = `${prefix}_${key}_${value}`;
      groups.push({
        depth,
        id,
        key,
        value,
        items: rest.length ? groupItems(items2, rest, depth + 1, id) : items2,
        type: "group"
      });
    });
    return groups;
  }
  function flattenItems(items, opened) {
    const flatItems = [];
    for (const item of items) {
      if ("type" in item && item.type === "group") {
        if (item.value != null) {
          flatItems.push(item);
        }
        if (opened.has(item.id) || item.value == null) {
          flatItems.push(...flattenItems(item.items, opened));
        }
      } else {
        flatItems.push(item);
      }
    }
    return flatItems;
  }
  function useGroupedItems(items, groupBy, opened) {
    const flatItems = vue.computed(() => {
      if (!groupBy.value.length)
        return items.value;
      const groupedItems = groupItems(items.value, groupBy.value.map((item) => item.key));
      return flattenItems(groupedItems, opened.value);
    });
    return {
      flatItems
    };
  }
  const makeVDataTableGroupHeaderRowProps = propsFactory({
    item: {
      type: Object,
      required: true
    }
  }, "VDataTableGroupHeaderRow");
  const VDataTableGroupHeaderRow = genericComponent()({
    name: "VDataTableGroupHeaderRow",
    props: makeVDataTableGroupHeaderRowProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        isGroupOpen,
        toggleGroup,
        extractRows
      } = useGroupBy();
      const {
        isSelected,
        isSomeSelected,
        select
      } = useSelection();
      const {
        columns
      } = useHeaders();
      const rows = vue.computed(() => {
        return extractRows([props.item]);
      });
      return () => vue.createVNode("tr", {
        "class": "v-data-table-group-header-row",
        "style": {
          "--v-data-table-group-header-row-depth": props.item.depth
        }
      }, [columns.value.map((column) => {
        var _a, _b;
        if (column.key === "data-table-group") {
          const icon = isGroupOpen(props.item) ? "$expand" : "$next";
          const onClick = () => toggleGroup(props.item);
          return ((_a = slots["data-table-group"]) == null ? void 0 : _a.call(slots, {
            item: props.item,
            count: rows.value.length,
            props: {
              icon,
              onClick
            }
          })) ?? vue.createVNode(VDataTableColumn, {
            "class": "v-data-table-group-header-row__column"
          }, {
            default: () => [vue.createVNode(VBtn, {
              "size": "small",
              "variant": "text",
              "icon": icon,
              "onClick": onClick
            }, null), vue.createVNode("span", null, [props.item.value]), vue.createVNode("span", null, [vue.createTextVNode("("), rows.value.length, vue.createTextVNode(")")])]
          });
        }
        if (column.key === "data-table-select") {
          const modelValue = isSelected(rows.value);
          const indeterminate = isSomeSelected(rows.value) && !modelValue;
          const selectGroup = (v) => select(rows.value, v);
          return ((_b = slots["data-table-select"]) == null ? void 0 : _b.call(slots, {
            props: {
              modelValue,
              indeterminate,
              "onUpdate:modelValue": selectGroup
            }
          })) ?? vue.createVNode("td", null, [vue.createVNode(VCheckboxBtn, {
            "modelValue": modelValue,
            "indeterminate": indeterminate,
            "onUpdate:modelValue": selectGroup
          }, null)]);
        }
        return vue.createVNode("td", null, null);
      })]);
    }
  });
  const makeDataTableExpandProps = propsFactory({
    expandOnClick: Boolean,
    showExpand: Boolean,
    expanded: {
      type: Array,
      default: () => []
    }
  }, "DataTable-expand");
  const VDataTableExpandedKey = Symbol.for("vuetify:datatable:expanded");
  function provideExpanded(props) {
    const expandOnClick = vue.toRef(props, "expandOnClick");
    const expanded = useProxiedModel(props, "expanded", props.expanded, (v) => {
      return new Set(v);
    }, (v) => {
      return [...v.values()];
    });
    function expand(item, value) {
      const newExpanded = new Set(expanded.value);
      if (!value) {
        newExpanded.delete(item.value);
      } else {
        newExpanded.add(item.value);
      }
      expanded.value = newExpanded;
    }
    function isExpanded(item) {
      return expanded.value.has(item.value);
    }
    function toggleExpand(item) {
      expand(item, !isExpanded(item));
    }
    const data = {
      expand,
      expanded,
      expandOnClick,
      isExpanded,
      toggleExpand
    };
    vue.provide(VDataTableExpandedKey, data);
    return data;
  }
  function useExpanded() {
    const data = vue.inject(VDataTableExpandedKey);
    if (!data)
      throw new Error("foo");
    return data;
  }
  const makeVDataTableRowProps = propsFactory({
    index: Number,
    item: Object,
    cellProps: [Object, Function],
    onClick: EventProp(),
    onContextmenu: EventProp(),
    onDblclick: EventProp(),
    ...makeDisplayProps()
  }, "VDataTableRow");
  const VDataTableRow = genericComponent()({
    name: "VDataTableRow",
    props: makeVDataTableRowProps(),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const {
        displayClasses,
        mobile
      } = useDisplay(props, "v-data-table__tr");
      const {
        isSelected,
        toggleSelect,
        someSelected,
        allSelected,
        selectAll
      } = useSelection();
      const {
        isExpanded,
        toggleExpand
      } = useExpanded();
      const {
        toggleSort,
        sortBy,
        isSorted
      } = useSort();
      const {
        columns
      } = useHeaders();
      useRender(() => vue.createVNode("tr", {
        "class": ["v-data-table__tr", {
          "v-data-table__tr--clickable": !!(props.onClick || props.onContextmenu || props.onDblclick)
        }, displayClasses.value],
        "onClick": props.onClick,
        "onContextmenu": props.onContextmenu,
        "onDblclick": props.onDblclick
      }, [props.item && columns.value.map((column, i) => {
        const item = props.item;
        const slotName = `item.${column.key}`;
        const headerSlotName = `header.${column.key}`;
        const slotProps = {
          index: props.index,
          item: item.raw,
          internalItem: item,
          value: getObjectValueByPath(item.columns, column.key),
          column,
          isSelected,
          toggleSelect,
          isExpanded,
          toggleExpand
        };
        const columnSlotProps = {
          column,
          selectAll,
          isSorted,
          toggleSort,
          sortBy: sortBy.value,
          someSelected: someSelected.value,
          allSelected: allSelected.value,
          getSortIcon: () => ""
        };
        const cellProps = typeof props.cellProps === "function" ? props.cellProps({
          index: slotProps.index,
          item: slotProps.item,
          internalItem: slotProps.internalItem,
          value: slotProps.value,
          column
        }) : props.cellProps;
        const columnCellProps = typeof column.cellProps === "function" ? column.cellProps({
          index: slotProps.index,
          item: slotProps.item,
          internalItem: slotProps.internalItem,
          value: slotProps.value
        }) : column.cellProps;
        return vue.createVNode(VDataTableColumn, vue.mergeProps({
          "align": column.align,
          "class": {
            "v-data-table__td--expanded-row": column.key === "data-table-expand",
            "v-data-table__td--select-row": column.key === "data-table-select"
          },
          "fixed": column.fixed,
          "fixedOffset": column.fixedOffset,
          "lastFixed": column.lastFixed,
          "maxWidth": !mobile.value ? column.maxWidth : void 0,
          "noPadding": column.key === "data-table-select" || column.key === "data-table-expand",
          "nowrap": column.nowrap,
          "width": !mobile.value ? column.width : void 0
        }, cellProps, columnCellProps), {
          default: () => {
            var _a, _b, _c, _d, _e;
            if (slots[slotName] && !mobile.value)
              return (_a = slots[slotName]) == null ? void 0 : _a.call(slots, slotProps);
            if (column.key === "data-table-select") {
              return ((_b = slots["item.data-table-select"]) == null ? void 0 : _b.call(slots, slotProps)) ?? vue.createVNode(VCheckboxBtn, {
                "disabled": !item.selectable,
                "modelValue": isSelected([item]),
                "onClick": vue.withModifiers(() => toggleSelect(item), ["stop"])
              }, null);
            }
            if (column.key === "data-table-expand") {
              return ((_c = slots["item.data-table-expand"]) == null ? void 0 : _c.call(slots, slotProps)) ?? vue.createVNode(VBtn, {
                "icon": isExpanded(item) ? "$collapse" : "$expand",
                "size": "small",
                "variant": "text",
                "onClick": vue.withModifiers(() => toggleExpand(item), ["stop"])
              }, null);
            }
            const displayValue = vue.toDisplayString(slotProps.value);
            return !mobile.value ? displayValue : vue.createVNode(vue.Fragment, null, [vue.createVNode("div", {
              "class": "v-data-table__td-title"
            }, [((_d = slots[headerSlotName]) == null ? void 0 : _d.call(slots, columnSlotProps)) ?? column.title]), vue.createVNode("div", {
              "class": "v-data-table__td-value"
            }, [((_e = slots[slotName]) == null ? void 0 : _e.call(slots, slotProps)) ?? displayValue])]);
          }
        });
      })]));
    }
  });
  const makeVDataTableRowsProps = propsFactory({
    loading: [Boolean, String],
    loadingText: {
      type: String,
      default: "$vuetify.dataIterator.loadingText"
    },
    hideNoData: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    noDataText: {
      type: String,
      default: "$vuetify.noDataText"
    },
    rowProps: [Object, Function],
    cellProps: [Object, Function],
    ...makeDisplayProps()
  }, "VDataTableRows");
  const VDataTableRows = genericComponent()({
    name: "VDataTableRows",
    inheritAttrs: false,
    props: makeVDataTableRowsProps(),
    setup(props, _ref) {
      let {
        attrs,
        slots
      } = _ref;
      const {
        columns
      } = useHeaders();
      const {
        expandOnClick,
        toggleExpand,
        isExpanded
      } = useExpanded();
      const {
        isSelected,
        toggleSelect
      } = useSelection();
      const {
        toggleGroup,
        isGroupOpen
      } = useGroupBy();
      const {
        t
      } = useLocale();
      const {
        mobile
      } = useDisplay(props);
      useRender(() => {
        var _a, _b;
        if (props.loading && (!props.items.length || slots.loading)) {
          return vue.createVNode("tr", {
            "class": "v-data-table-rows-loading",
            "key": "loading"
          }, [vue.createVNode("td", {
            "colspan": columns.value.length
          }, [((_a = slots.loading) == null ? void 0 : _a.call(slots)) ?? t(props.loadingText)])]);
        }
        if (!props.loading && !props.items.length && !props.hideNoData) {
          return vue.createVNode("tr", {
            "class": "v-data-table-rows-no-data",
            "key": "no-data"
          }, [vue.createVNode("td", {
            "colspan": columns.value.length
          }, [((_b = slots["no-data"]) == null ? void 0 : _b.call(slots)) ?? t(props.noDataText)])]);
        }
        return vue.createVNode(vue.Fragment, null, [props.items.map((item, index) => {
          var _a2;
          if (item.type === "group") {
            const slotProps2 = {
              index,
              item,
              columns: columns.value,
              isExpanded,
              toggleExpand,
              isSelected,
              toggleSelect,
              toggleGroup,
              isGroupOpen
            };
            return slots["group-header"] ? slots["group-header"](slotProps2) : vue.createVNode(VDataTableGroupHeaderRow, vue.mergeProps({
              "key": `group-header_${item.id}`,
              "item": item
            }, getPrefixedEventHandlers(attrs, ":group-header", () => slotProps2)), slots);
          }
          const slotProps = {
            index,
            item: item.raw,
            internalItem: item,
            columns: columns.value,
            isExpanded,
            toggleExpand,
            isSelected,
            toggleSelect
          };
          const itemSlotProps = {
            ...slotProps,
            props: vue.mergeProps({
              key: `item_${item.key ?? item.index}`,
              onClick: expandOnClick.value ? () => {
                toggleExpand(item);
              } : void 0,
              index,
              item,
              cellProps: props.cellProps,
              mobile: mobile.value
            }, getPrefixedEventHandlers(attrs, ":row", () => slotProps), typeof props.rowProps === "function" ? props.rowProps({
              item: slotProps.item,
              index: slotProps.index,
              internalItem: slotProps.internalItem
            }) : props.rowProps)
          };
          return vue.createVNode(vue.Fragment, {
            "key": itemSlotProps.props.key
          }, [slots.item ? slots.item(itemSlotProps) : vue.createVNode(VDataTableRow, itemSlotProps.props, slots), isExpanded(item) && ((_a2 = slots["expanded-row"]) == null ? void 0 : _a2.call(slots, slotProps))]);
        })]);
      });
      return {};
    }
  });
  const makeVTableProps = propsFactory({
    fixedHeader: Boolean,
    fixedFooter: Boolean,
    height: [Number, String],
    hover: Boolean,
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeTagProps(),
    ...makeThemeProps()
  }, "VTable");
  const VTable = genericComponent()({
    name: "VTable",
    props: makeVTableProps(),
    setup(props, _ref) {
      let {
        slots,
        emit
      } = _ref;
      const {
        themeClasses
      } = provideTheme(props);
      const {
        densityClasses
      } = useDensity(props);
      useRender(() => vue.createVNode(props.tag, {
        "class": ["v-table", {
          "v-table--fixed-height": !!props.height,
          "v-table--fixed-header": props.fixedHeader,
          "v-table--fixed-footer": props.fixedFooter,
          "v-table--has-top": !!slots.top,
          "v-table--has-bottom": !!slots.bottom,
          "v-table--hover": props.hover
        }, themeClasses.value, densityClasses.value, props.class],
        "style": props.style
      }, {
        default: () => {
          var _a, _b, _c;
          return [(_a = slots.top) == null ? void 0 : _a.call(slots), slots.default ? vue.createVNode("div", {
            "class": "v-table__wrapper",
            "style": {
              height: convertToUnit(props.height)
            }
          }, [vue.createVNode("table", null, [slots.default()])]) : (_b = slots.wrapper) == null ? void 0 : _b.call(slots), (_c = slots.bottom) == null ? void 0 : _c.call(slots)];
        }
      }));
      return {};
    }
  });
  const makeDataTableItemsProps = propsFactory({
    items: {
      type: Array,
      default: () => []
    },
    itemValue: {
      type: [String, Array, Function],
      default: "id"
    },
    itemSelectable: {
      type: [String, Array, Function],
      default: null
    },
    rowProps: [Object, Function],
    cellProps: [Object, Function],
    returnObject: Boolean
  }, "DataTable-items");
  function transformItem(props, item, index, columns) {
    const value = props.returnObject ? item : getPropertyFromItem(item, props.itemValue);
    const selectable = getPropertyFromItem(item, props.itemSelectable, true);
    const itemColumns = columns.reduce((obj, column) => {
      if (column.key != null)
        obj[column.key] = getPropertyFromItem(item, column.value);
      return obj;
    }, {});
    return {
      type: "item",
      key: props.returnObject ? getPropertyFromItem(item, props.itemValue) : value,
      index,
      value,
      selectable,
      columns: itemColumns,
      raw: item
    };
  }
  function transformItems(props, items, columns) {
    return items.map((item, index) => transformItem(props, item, index, columns));
  }
  function useDataTableItems(props, columns) {
    const items = vue.computed(() => transformItems(props, props.items, columns.value));
    return {
      items
    };
  }
  function useOptions(_ref) {
    let {
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
    } = _ref;
    const vm = getCurrentInstance("VDataTable");
    const options = vue.computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      groupBy: groupBy.value,
      search: search.value
    }));
    let oldOptions = null;
    vue.watch(options, () => {
      if (deepEqual(oldOptions, options.value))
        return;
      if (oldOptions && oldOptions.search !== options.value.search) {
        page.value = 1;
      }
      vm.emit("update:options", options.value);
      oldOptions = options.value;
    }, {
      deep: true,
      immediate: true
    });
  }
  const defaultFilter = (value, query, item) => {
    if (value == null || query == null)
      return -1;
    return value.toString().toLocaleLowerCase().indexOf(query.toString().toLocaleLowerCase());
  };
  const makeFilterProps = propsFactory({
    customFilter: Function,
    customKeyFilter: Object,
    filterKeys: [Array, String],
    filterMode: {
      type: String,
      default: "intersection"
    },
    noFilter: Boolean
  }, "filter");
  function filterItems(items, query, options) {
    var _a;
    const array = [];
    const filter = (options == null ? void 0 : options.default) ?? defaultFilter;
    const keys = (options == null ? void 0 : options.filterKeys) ? wrapInArray(options.filterKeys) : false;
    const customFiltersLength = Object.keys((options == null ? void 0 : options.customKeyFilter) ?? {}).length;
    if (!(items == null ? void 0 : items.length))
      return array;
    loop:
      for (let i = 0; i < items.length; i++) {
        const [item, transformed = item] = wrapInArray(items[i]);
        const customMatches = {};
        const defaultMatches = {};
        let match = -1;
        if (query && !(options == null ? void 0 : options.noFilter)) {
          if (typeof item === "object") {
            const filterKeys = keys || Object.keys(transformed);
            for (const key of filterKeys) {
              const value = getPropertyFromItem(transformed, key);
              const keyFilter = (_a = options == null ? void 0 : options.customKeyFilter) == null ? void 0 : _a[key];
              match = keyFilter ? keyFilter(value, query, item) : filter(value, query, item);
              if (match !== -1 && match !== false) {
                if (keyFilter)
                  customMatches[key] = match;
                else
                  defaultMatches[key] = match;
              } else if ((options == null ? void 0 : options.filterMode) === "every") {
                continue loop;
              }
            }
          } else {
            match = filter(item, query, item);
            if (match !== -1 && match !== false) {
              defaultMatches.title = match;
            }
          }
          const defaultMatchesLength = Object.keys(defaultMatches).length;
          const customMatchesLength = Object.keys(customMatches).length;
          if (!defaultMatchesLength && !customMatchesLength)
            continue;
          if ((options == null ? void 0 : options.filterMode) === "union" && customMatchesLength !== customFiltersLength && !defaultMatchesLength)
            continue;
          if ((options == null ? void 0 : options.filterMode) === "intersection" && (customMatchesLength !== customFiltersLength || !defaultMatchesLength))
            continue;
        }
        array.push({
          index: i,
          matches: {
            ...defaultMatches,
            ...customMatches
          }
        });
      }
    return array;
  }
  function useFilter(props, items, query, options) {
    const filteredItems = vue.ref([]);
    const filteredMatches = vue.ref(/* @__PURE__ */ new Map());
    const transformedItems = vue.computed(() => (options == null ? void 0 : options.transform) ? vue.unref(items).map((item) => [item, options.transform(item)]) : vue.unref(items));
    vue.watchEffect(() => {
      const _query = typeof query === "function" ? query() : vue.unref(query);
      const strQuery = typeof _query !== "string" && typeof _query !== "number" ? "" : String(_query);
      const results = filterItems(transformedItems.value, strQuery, {
        customKeyFilter: {
          ...props.customKeyFilter,
          ...vue.unref(options == null ? void 0 : options.customKeyFilter)
        },
        default: props.customFilter,
        filterKeys: props.filterKeys,
        filterMode: props.filterMode,
        noFilter: props.noFilter
      });
      const originalItems = vue.unref(items);
      const _filteredItems = [];
      const _filteredMatches = /* @__PURE__ */ new Map();
      results.forEach((_ref) => {
        let {
          index,
          matches
        } = _ref;
        const item = originalItems[index];
        _filteredItems.push(item);
        _filteredMatches.set(item.value, matches);
      });
      filteredItems.value = _filteredItems;
      filteredMatches.value = _filteredMatches;
    });
    function getMatches(item) {
      return filteredMatches.value.get(item.value);
    }
    return {
      filteredItems,
      filteredMatches,
      getMatches
    };
  }
  const makeDataTableProps = propsFactory({
    ...makeVDataTableRowsProps(),
    hideDefaultFooter: Boolean,
    hideDefaultHeader: Boolean,
    width: [String, Number],
    search: String,
    ...makeDataTableExpandProps(),
    ...makeDataTableGroupProps(),
    ...makeDataTableHeaderProps(),
    ...makeDataTableItemsProps(),
    ...makeDataTableSelectProps(),
    ...makeDataTableSortProps(),
    ...makeVDataTableHeadersProps(),
    ...makeVTableProps()
  }, "DataTable");
  const makeVDataTableProps = propsFactory({
    ...makeDataTablePaginateProps(),
    ...makeDataTableProps(),
    ...makeFilterProps(),
    ...makeVDataTableFooterProps()
  }, "VDataTable");
  const VDataTable = genericComponent()({
    name: "VDataTable",
    props: makeVDataTableProps(),
    emits: {
      "update:modelValue": (value) => true,
      "update:page": (value) => true,
      "update:itemsPerPage": (value) => true,
      "update:sortBy": (value) => true,
      "update:options": (value) => true,
      "update:groupBy": (value) => true,
      "update:expanded": (value) => true,
      "update:currentItems": (value) => true
    },
    setup(props, _ref) {
      let {
        attrs,
        slots
      } = _ref;
      const {
        groupBy
      } = createGroupBy(props);
      const {
        sortBy,
        multiSort,
        mustSort
      } = createSort(props);
      const {
        page,
        itemsPerPage
      } = createPagination(props);
      const {
        columns,
        headers,
        sortFunctions,
        sortRawFunctions,
        filterFunctions
      } = createHeaders(props, {
        groupBy,
        showSelect: vue.toRef(props, "showSelect"),
        showExpand: vue.toRef(props, "showExpand")
      });
      const {
        items
      } = useDataTableItems(props, columns);
      const search = vue.toRef(props, "search");
      const {
        filteredItems
      } = useFilter(props, items, search, {
        transform: (item) => item.columns,
        customKeyFilter: filterFunctions
      });
      const {
        toggleSort
      } = provideSort({
        sortBy,
        multiSort,
        mustSort,
        page
      });
      const {
        sortByWithGroups,
        opened,
        extractRows,
        isGroupOpen,
        toggleGroup
      } = provideGroupBy({
        groupBy,
        sortBy
      });
      const {
        sortedItems
      } = useSortedItems(props, filteredItems, sortByWithGroups, {
        transform: (item) => item.columns,
        sortFunctions,
        sortRawFunctions
      });
      const {
        flatItems
      } = useGroupedItems(sortedItems, groupBy, opened);
      const itemsLength = vue.computed(() => flatItems.value.length);
      const {
        startIndex,
        stopIndex,
        pageCount,
        setItemsPerPage
      } = providePagination({
        page,
        itemsPerPage,
        itemsLength
      });
      const {
        paginatedItems
      } = usePaginatedItems({
        items: flatItems,
        startIndex,
        stopIndex,
        itemsPerPage
      });
      const paginatedItemsWithoutGroups = vue.computed(() => extractRows(paginatedItems.value));
      const {
        isSelected,
        select,
        selectAll,
        toggleSelect,
        someSelected,
        allSelected
      } = provideSelection(props, {
        allItems: items,
        currentPage: paginatedItemsWithoutGroups
      });
      const {
        isExpanded,
        toggleExpand
      } = provideExpanded(props);
      useOptions({
        page,
        itemsPerPage,
        sortBy,
        groupBy,
        search
      });
      provideDefaults({
        VDataTableRows: {
          hideNoData: vue.toRef(props, "hideNoData"),
          noDataText: vue.toRef(props, "noDataText"),
          loading: vue.toRef(props, "loading"),
          loadingText: vue.toRef(props, "loadingText")
        }
      });
      const slotProps = vue.computed(() => ({
        page: page.value,
        itemsPerPage: itemsPerPage.value,
        sortBy: sortBy.value,
        pageCount: pageCount.value,
        toggleSort,
        setItemsPerPage,
        someSelected: someSelected.value,
        allSelected: allSelected.value,
        isSelected,
        select,
        selectAll,
        toggleSelect,
        isExpanded,
        toggleExpand,
        isGroupOpen,
        toggleGroup,
        items: paginatedItemsWithoutGroups.value.map((item) => item.raw),
        internalItems: paginatedItemsWithoutGroups.value,
        groupedItems: paginatedItems.value,
        columns: columns.value,
        headers: headers.value
      }));
      useRender(() => {
        const dataTableFooterProps = VDataTableFooter.filterProps(props);
        const dataTableHeadersProps = VDataTableHeaders.filterProps(props);
        const dataTableRowsProps = VDataTableRows.filterProps(props);
        const tableProps = VTable.filterProps(props);
        return vue.createVNode(VTable, vue.mergeProps({
          "class": ["v-data-table", {
            "v-data-table--show-select": props.showSelect,
            "v-data-table--loading": props.loading
          }, props.class],
          "style": props.style
        }, tableProps), {
          top: () => {
            var _a;
            return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
          },
          default: () => {
            var _a, _b, _c, _d, _e, _f;
            return slots.default ? slots.default(slotProps.value) : vue.createVNode(vue.Fragment, null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideDefaultHeader && vue.createVNode("thead", {
              "key": "thead"
            }, [vue.createVNode(VDataTableHeaders, dataTableHeadersProps, slots)]), (_b = slots.thead) == null ? void 0 : _b.call(slots, slotProps.value), vue.createVNode("tbody", null, [(_c = slots["body.prepend"]) == null ? void 0 : _c.call(slots, slotProps.value), slots.body ? slots.body(slotProps.value) : vue.createVNode(VDataTableRows, vue.mergeProps(attrs, dataTableRowsProps, {
              "items": paginatedItems.value
            }), slots), (_d = slots["body.append"]) == null ? void 0 : _d.call(slots, slotProps.value)]), (_e = slots.tbody) == null ? void 0 : _e.call(slots, slotProps.value), (_f = slots.tfoot) == null ? void 0 : _f.call(slots, slotProps.value)]);
          },
          bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && vue.createVNode(vue.Fragment, null, [vue.createVNode(VDivider, null, null), vue.createVNode(VDataTableFooter, dataTableFooterProps, {
            prepend: slots["footer.prepend"]
          })])
        });
      });
      return {};
    }
  });
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "tasks-list",
    setup(__props) {
      const extractedData = extractTasks();
      const headers = [
        { key: "title", title: "作业名称" },
        { key: "course", title: "课程" },
        { key: "leftTime", title: "剩余时间" },
        { key: "status", title: "状态" },
        { key: "action", title: "操作" }
      ];
      const search = vue.ref("");
      const getCourseLinkHref = (item) => {
        const courseId = item.courseId;
        const clazzId = item.clazzId;
        const requestUrl = new URL(API_VISIT_COURSE);
        requestUrl.searchParams.append("courseid", courseId);
        requestUrl.searchParams.append("clazzid", clazzId);
        requestUrl.searchParams.append("pageHeader", "8");
        return requestUrl.href;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(VCard, {
          title: "作业列表",
          variant: "flat"
        }, {
          text: vue.withCtx(() => [
            vue.createVNode(VTextField, {
              modelValue: search.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
              label: "搜索",
              "prepend-inner-icon": "search",
              variant: "outlined",
              "hide-details": "",
              "single-line": ""
            }, null, 8, ["modelValue"])
          ]),
          default: vue.withCtx(() => [
            vue.createVNode(VDataTable, {
              items: vue.unref(extractedData),
              search: search.value,
              hover: "",
              headers,
              sticky: "",
              "items-per-page": "-1",
              "hide-default-footer": ""
            }, {
              "item.action": vue.withCtx(({ item }) => [
                vue.createVNode(VBtn, {
                  variant: item.uncommitted ? "tonal" : "plain",
                  color: "primary",
                  href: getCourseLinkHref(item),
                  target: "_blank"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(item.uncommitted ? "立即完成" : "查看详情"), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "href"])
              ]),
              _: 1
            }, 8, ["items", "search"])
          ]),
          _: 1
        });
      };
    }
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$1);
      };
    }
  });
  const aliases = {
    collapse: "keyboard_arrow_up",
    complete: "check",
    cancel: "cancel",
    close: "close",
    delete: "cancel",
    // delete (e.g. v-chip close)
    clear: "cancel",
    success: "check_circle",
    info: "info",
    warning: "priority_high",
    error: "warning",
    prev: "chevron_left",
    next: "chevron_right",
    checkboxOn: "check_box",
    checkboxOff: "check_box_outline_blank",
    checkboxIndeterminate: "indeterminate_check_box",
    delimiter: "fiber_manual_record",
    // for carousel
    sortAsc: "arrow_upward",
    sortDesc: "arrow_downward",
    expand: "keyboard_arrow_down",
    menu: "menu",
    subgroup: "arrow_drop_down",
    dropdown: "arrow_drop_down",
    radioOn: "radio_button_checked",
    radioOff: "radio_button_unchecked",
    edit: "edit",
    ratingEmpty: "star_border",
    ratingFull: "star",
    ratingHalf: "star_half",
    loading: "cached",
    first: "first_page",
    last: "last_page",
    unfold: "unfold_more",
    file: "attach_file",
    plus: "add",
    minus: "remove",
    calendar: "event",
    treeviewCollapse: "arrow_drop_down",
    treeviewExpand: "arrow_right",
    eyeDropper: "colorize"
  };
  const md = {
    // Not using mergeProps here, functional components merge props by default (?)
    component: (props) => vue.h(VLigatureIcon, {
      ...props,
      class: "material-icons"
    })
  };
  const appendApp = () => {
    const vuetify = createVuetify({
      // components,
      // directives,
      icons: {
        defaultSet: "md",
        aliases,
        sets: {
          md
        }
      }
    });
    vue.createApp(_sfc_main).use(vuetify).mount(
      (() => {
        const app = document.createElement("div");
        document.body.append(app);
        return app;
      })()
    );
  };
  if (urlDetection() === "homework") {
    wrapElements();
    removeStyles();
    appendApp();
  }
  if (urlDetection() === "home") {
    addMenuItem();
  }

})(Vue);