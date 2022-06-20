(function($){var smoothScroll=null;const math={lerp:(a,b,n)=>{return(1-n)*a+n*b},norm:(value,min,max)=>{return(value-min)/(max-min)}};const config={height:window.innerHeight,width:window.innerWidth};class Smooth{constructor(){this.bindMethods();this.data={ease:coefSpeed_inertiaScroll||0.05,current:0,last:0};this.dom={el:main,content:mainWrap};this.rAF=null;this.init()}
bindMethods(){['scroll','run','resize'].forEach((fn)=>this[fn]=this[fn].bind(this))}
setStyles(){Object.assign(this.dom.el.style,{position:'fixed',top:0,left:0,height:'100%',width:'100%',overflow:'hidden'})}
setWidth(){heightAdminBar=0;if($('body').is('.admin-bar')&&!elementorFrontend.isEditMode()){heightAdminBar=45}
var larghezza=window.innerWidth;var altezza=this.dom.el.offsetHeight+heightAdminBar;var larghezzaTotale=(this.dom.el.offsetHeight)+(larghezza*(sectionsAvailable.length));var altezza=larghezzaTotale-this.dom.el.offsetWidth;sizeTotalScroll=altezza;document.body.style.height=`${altezza}px`;var l=larghezza*(sectionsAvailable.length);wrapperSezioni.width(`${l}px`);sectionsAvailable.each(function(i,el){$(this).width(larghezza)})}
setHeight(){heightAdminBar=0;if($('body').is('.admin-bar')&&!elementorFrontend.isEditMode()){heightAdminBar=45}
var height=this.dom.content.offsetHeight-heightAdminBar;sizeTotalScroll=height;document.body.style.height=`${height}px`}
resize(){if(directionScroll=='vertical'){this.setHeight()}else if(directionScroll=='horizontal'){this.setWidth()}
this.scroll()}
preload(){imagesLoaded(this.dom.content,(instance)=>{if(directionScroll=='vertical'){this.setHeight()}else if(directionScroll=='horizontal'){this.setWidth()}})}
scroll(){this.data.current=window.scrollY}
run(){this.data.last=math.lerp(this.data.last,this.data.current,this.data.ease);this.data.last=Math.floor(this.data.last*100)/100;if(this.data.last<.1){this.data.last=0}
const skewVal=skew_inertiaScroll;const scaleVal=bounce_inertiaScroll;const diff=this.data.current-this.data.last;const acc=diff/config.width;const velo=+acc;const bounce=1-Math.abs(velo*scaleVal)
const skew=velo*(skewVal);var percentOfScroll=(this.data.current/sizeTotalScroll)*100;if(directionScroll=='vertical'){var verticalmovement=this.data.last;this.dom.content.style.transform=`translate3d(0, -${verticalmovement}px, 0) skewY(${skew}deg) scaleY(${bounce})`;this.dom.content.style.transformOrigin=`50% ${percentOfScroll}% 0`}else if(directionScroll=='horizontal'){var horizontalmovement=this.data.last;this.dom.content.style.transform=`translate3d(-${horizontalmovement}px, 0, 0) skewX(${skew}deg) scaleY(${bounce})`;this.dom.content.style.transformOrigin=`${percentOfScroll}% 50% 0`}
this.requestAnimationFrame()}
on(){this.setStyles();if(directionScroll=='vertical'){this.setHeight()}else if(directionScroll=='horizontal'){this.setWidth()}
this.addEvents();this.requestAnimationFrame()}
off(){this.cancelAnimationFrame();this.removeEvents()}
requestAnimationFrame(){this.rAF=requestAnimationFrame(this.run)}
cancelAnimationFrame(){cancelAnimationFrame(this.rAF)}
destroy(){document.body.style.height='';this.data=null;this.removeEvents();this.cancelAnimationFrame()}
resize(){if(directionScroll=='vertical'){this.setHeight()}else if(directionScroll=='horizontal'){this.setWidth()}}
addEvents(){window.addEventListener('resize',this.resize,{passive:!0});window.addEventListener('scroll',this.scroll,{passive:!0})}
removeEvents(){window.removeEventListener('resize',this.resize,{passive:!0});window.removeEventListener('scroll',this.scroll,{passive:!0})}
init(){this.preload();this.on()}}
var settings_page={};var sectionsAvailable=[];var sezioni='';var wrapperSezioni=null;var heightAdminBar=0;var sizeTotalScroll=0;is_pageScroll=!1;var is_scrollify=!1,titleStyle='',navStyle='default';var is_scrollEffects=!1;var currentPostId;var is_enable_dceScrolling,is_enable_scrollify,is_enable_scrollEffects,is_enable_inertiaScroll;var datalax=['data-lax-opacity','data-lax-translate','data-lax-translate-x','data-lax-translate-y','data-lax-scale','data-lax-scale-x','data-lax-scale-y','data-lax-skew','data-lax-skew-x','data-lax-skew-y','data-lax-rotate','data-lax-rotate-x','data-lax-rotate-y','data-lax-brightness','data-lax-contrast','data-lax-hue-rotate','data-lax-blur','data-lax-invert','data-lax-saturate','data-lax-grayscale','data-lax-bg-pos','data-lax-bg-pos-x','data-lax-bg-pos-y','data-lax-anchor']
var is_inertiaScroll=!1;var directionScroll='vertical';var coefSpeed_inertiaScroll=0.05;const body=document.body;var main={};var mainWrap={};var skew_inertiaScroll=20;var bounce_inertiaScroll=0;let sx=0;let sy=0;let dx=sx;let dy=sy;var requestId;var init_Scrollify=function(){$('body').addClass('dce-scrollify dce-scrolling');if(settings_page.custom_class_section_sfy){$customClass=settings_page.custom_class_section_sfy;if('.'===settings_page.custom_class_section_sfy[0]){$customClass=settings_page.custom_class_section_sfy.substring(1)}}else{$customClass='elementor-section:not(.elementor-inner-section)'}
target_sections='.elementor-'+currentPostId;if(!target_sections){target_sections=''}
if(!$('.elementor-section-wrap').length){$('body .elementor').wrapInner('<div class="elementor-section-wrap"></div>')}
sezioni=target_sections+'.elementor .elementor-section-wrap .'+$customClass;wrapperSezioni=$(target_sections+'.elementor .elementor-section-wrap');$(target_sections).addClass('scroll-direction-'+settings_page.directionScroll);$.scrollify({section:sezioni,sectionName:'id',interstitialSection:settings_page.interstitialSection,easing:"easeOutExpo",scrollSpeed:Number(settings_page.scrollSpeed.size)||1100,offset:Number(settings_page.offset.size)||0,scrollbars:Boolean(settings_page.scrollBars),setHeights:Boolean(settings_page.setHeights),overflowScroll:Boolean(settings_page.overflowScroll),updateHash:Boolean(settings_page.updateHash),touchScroll:Boolean(settings_page.touchScroll),before:function(i,panels){var ref=panels[i].attr("data-id");$(".dce-scrollify-pagination .nav__item--current").removeClass("nav__item--current");$(".dce-scrollify-pagination").find("a[href=\"#"+ref+"\"]").addClass("nav__item--current")},afterRender:function(){is_scrollify=!0;if(settings_page.enable_scrollify_nav||elementorFrontend.isEditMode()){var scrollify_pagination='';createNavigation(settings_page.snapscroll_nav_style);$("body").on("click",".dce-scrollify-pagination a",function(){$.scrollify.move($(this).attr("href"));return!1});if(!Boolean(settings_page.enable_scrollify_nav)){handleScrollify_enablenavigation('')}
if(Boolean(settings_page.enable_scrollEffects)){handleScrollEffects(settings_page.enable_scrollEffects)}}}});$.scrollify.update()};var createNavigationTitles=function($style,$reload=!1){titleStyle=$style;if($reload){createNavigation(settings_page.snapscroll_nav_style)}};var createNavigation=function($style){navStyle=$style;if($('.dce-scrollify-pagination').length>0)
$('.dce-scrollify-pagination').remove();var newPagination='';var activeClass;var titleString;createNavigationTitles(settings_page.snapscroll_nav_title_style);newPagination='<ul class="dce-scrollify-pagination nav--'+$style+'">';if($style=='ayana'){newPagination+='<svg class="hidden"><defs><symbol id="icon-circle" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.215"></circle></symbol></defs></svg>'}
if($style=='desta'){newPagination+='<svg class="hidden"><defs><symbol id="icon-triangle" viewBox="0 0 24 24"><path d="M4.5,19.8C4.5,19.8,4.5,19.8,4.5,19.8V4.2c0-0.3,0.2-0.5,0.4-0.7c0.2-0.1,0.5-0.1,0.8,0l13.5,7.8c0.2,0.1,0.4,0.4,0.4,0.7c0,0.3-0.2,0.5-0.4,0.7L5.7,20.4c-0.1,0.1-0.3,0.1-0.5,0.1C4.8,20.6,4.5,20.2,4.5,19.8z M6,5.6v12.8L17.2,12L6,5.6z"/></symbol></defs></svg>'}
$(sezioni).each(function(i){activeClass='';if(i===0){activeClass="nav__item--current"}
if(titleStyle=='number'){var prefN='';if(i<9){prefN='0'}
titleString=prefN+(i+1)}else if(titleStyle=='classid'){titleString=$(this).attr("id")||'no id';titleString=titleString.replace(/_|-|\./g,' ')}else{titleString=''}
if($style=='default'){newPagination+='<li><a class="'+activeClass+'" href="#'+$(this).attr("data-id")+'"></a></li>'}else{$itemInner='';$itemTitle='<span class="nav__item-title">'+titleString+'</span>';if($style=='etefu'){$itemInner='<span class="nav__item-inner"></span>'}else if($style=='ayana'){$itemTitle='<svg class="nav__icon"><use xlink:href="#icon-circle"></use></svg>'}else if($style=='totit'){var navIcon=settings_page.scrollify_nav_icon.value;if(navIcon)
$itemInner='<i class="nav__icon '+navIcon+'" aria-hidden="true"></i>'}else if($style=='desta'){$itemInner='<svg class="nav__icon"><use xlink:href="#icon-triangle"></use></svg>'}else if($style=='magool'||$style=='ayana'||$style=='timiro'){$itemTitle=''}
newPagination+='<li><a href="#'+$(this).attr("data-id")+'" class="'+activeClass+' nav__item" aria-label="'+(i+1)+'">'+$itemInner+$itemTitle+'</a></li>'}});newPagination+="</ul>";$("body").append(newPagination)};var init_ScrollEffects=function(){$('body').addClass('dce-pageScroll dce-scrolling');if(settings_page.custom_class_section){$customClass=settings_page.custom_class_section}else{$customClass='elementor-section'}
target_sections='.elementor-'+currentPostId;if(!target_sections){target_sections=''}
if(!$('.elementor-section-wrap').length){$('body .elementor').wrapInner('<div class="elementor-section-wrap"></div>')}
sezioni=target_sections+'.elementor .elementor-section-wrap > .'+$customClass;sectionsAvailable=$(sezioni);wrapperSezioni=$(target_sections+'.elementor .elementor-section-wrap');$(target_sections).addClass('scroll-direction-'+settings_page.directionScroll);animationType=settings_page.animation_effects||['spin'];var animationType_string=[];if(animationType.length)
animationType_string=animationType.join(' ');var xx=0;if(settings_page.remove_first_scrollEffects){xx=1}
sectionsAvailable.each(function(){if($(this).index()>=xx)
sectionsAvailable.addClass('lax')});setStyleEffects(animationType_string);lax.addPreset("scaleDown",function(){return{"data-lax-scale":"0 1, vh 0",}});lax.addPreset("zoomInOut",function(){return{"data-lax-scale":"-vh 0, 0 1, vh 0",}});lax.addPreset("leftToRight",function(){return{"data-lax-translate-x":"-vh -vw,0 0, 0 1, vh vw",}});lax.addPreset("rightToLeft",function(){return{"data-lax-translate-x":"-vh vw,0 0, 0 1, vh -vw",}});lax.addPreset("opacity",function(){return{"data-lax-opacity":"-vh 0, 0 1, vh 0",}});lax.addPreset("fixed",function(){return{"data-lax-translate-y":"-vh elh, 0 0",}});lax.addPreset("parallax",function(){return{"data-lax-translate-y":"0 0, elh elh",}});lax.addPreset("rotation",function(){return{"data-lax-rotate":"0 0, vh -30",}});lax.addPreset("spin",function(){return{"data-lax-rotate":"-vh 180, 0 0, vh -180",}});lax.setup();const updateLax=()=>{if(lax&&typeof lax!=='undefined')
lax.update(window.scrollY);requestId=window.requestAnimationFrame(updateLax)};requestId=window.requestAnimationFrame(updateLax);is_scrollEffects=!0};var initInertiaScroll=function(){if(settings_page.custom_class_section){$customClass=settings_page.custom_class_section}else{$customClass='elementor-section'}
if(typeof(settings_page.coefSpeed_inertiaScroll.size)!=='undefined')
coefSpeed_inertiaScroll=Number(settings_page.coefSpeed_inertiaScroll.size);if(typeof(settings_page.skew_inertiaScroll.size)!=='undefined')
skew_inertiaScroll=Number(settings_page.skew_inertiaScroll.size);if(typeof(settings_page.bounce_inertiaScroll.size)!=='undefined')
bounce_inertiaScroll=Number(settings_page.bounce_inertiaScroll.size);if(typeof(settings_page.directionScroll)!=='undefined')
directionScroll=settings_page.directionScroll||'vertical';target_sections='.elementor-'+currentPostId;if(!target_sections){target_sections=''}
if(!$('.elementor-section-wrap').length){$('body .elementor').wrapInner('<div class="elementor-section-wrap"></div>')}
sezioni=target_sections+'.elementor .elementor-section-wrap .'+$customClass;sectionsAvailable=$(sezioni);wrapperSezioni=$(target_sections+'.elementor .elementor-section-wrap');if($('.elementor-template-canvas').length){main=document.querySelector(target_sections);mainWrap=document.querySelector(target_sections+'.elementor .elementor-section-wrap')}else{if(settings_page.automatic_wrapper){if(!$('#outer-wrap').length){$('body .elementor').wrapInner('<div id="outer-wrap"><div id="wrap"></div></div>')}
main=document.querySelector('#outer-wrap');mainWrap=document.querySelector('#wrap')}else{main=document.querySelector(settings_page.scroll_viewport)||document.querySelector('#outer-wrap');mainWrap=document.querySelector(settings_page.scroll_contentScroll)||document.querySelector('#wrap')}}
if(directionScroll=='horizontal'){wrapperSezioni.css('display','flex')}
$(target_sections).addClass('scroll-direction-'+directionScroll);sectionsAvailable.addClass('inertia-scroll');if(smoothScroll){smoothScroll.destroy()}
smoothScroll=new Smooth();is_inertiaScroll=!0};function reloadScrolling(){if(settings_page.enable_dceScrolling){handlescroll_viewport('');handlescroll_viewport('yes')}}
function removeScrollEffects(){$('body').removeClass('dce-pageScroll');if(sectionsAvailable.length)
sectionsAvailable.removeClass('lax');clearStyleEffects();if(lax&&typeof lax!=='undefined')
lax.removeElement();window.cancelAnimationFrame(requestId);is_scrollEffects=!1}
function setStyleEffects(effect){if(effect){var xx=0;if(settings_page.remove_first_scrollEffects)
xx=1;sectionsAvailable.each(function(){if($(this).index()>=xx)
$(this).attr('data-lax-preset',effect)})}}
function clearStyleEffects(){for(var i=0;i<datalax.length;i++){if(sectionsAvailable.length)
sectionsAvailable.removeAttr(datalax[i])}
if(lax&&typeof lax!=='undefined')
lax.updateElements();if(sectionsAvailable.length)
sectionsAvailable.removeAttr('style')}
function removeInertiaScroll(){$('body').removeClass('dce-inertiaScroll');if(sectionsAvailable.length)
sectionsAvailable.removeClass('inertia-scroll');sectionsAvailable.each(function(i,el){$(this).removeAttr('style')});wrapperSezioni.removeAttr('style');smoothScroll.destroy();is_inertiaScroll=!1;$(main).removeAttr('style');$(mainWrap).removeAttr('style')}
function handlescroll_viewport(newValue){if(newValue){is_pageScroll=!0}else{is_pageScroll=!1}
if(settings_page.enable_scrollEffects)
handleScrollEffects(newValue);if(settings_page.enable_scrollify)
handleScrollify(newValue);if(settings_page.enable_inertiaScroll)
handleInertiaScroll(newValue)}
function handleScrollify(newValue){if(newValue){if(is_scrollify){$.scrollify.enable()}
init_Scrollify();handleScrollify_enablenavigation(settings_page.enable_scrollify_nav)}else{$.scrollify.destroy();if(sectionsAvailable.length){sectionsAvailable.removeAttr('style')}
handleScrollify_enablenavigation('');is_scrollify=!1}}
function handleScrollify_speed(newValue){$.scrollify.setOptions({scrollSpeed:newValue.size})}
function handleScrollify_interstitialSection(newValue){$.scrollify.setOptions({scrollSpeed:newValue})}
function handleScrollify_offset(newValue){$.scrollify.setOptions({offset:newValue.size})}
function handleScrollify_ease(newValue){$.scrollify.setOptions({easing:newValue})}
function handleScrollify_setHeights(newValue){$.scrollify.setOptions({setHeights:newValue?!0:!1})}
function handleScrollify_overflowScroll(newValue){$.scrollify.setOptions({overflowScroll:newValue?!0:!1})}
function handleScrollify_updateHash(newValue){$.scrollify.setOptions({updateHash:newValue?!0:!1})}
function handleScrollify_touchScroll(newValue){$.scrollify.setOptions({touchScroll:newValue?!0:!1})}
function handleScrollify_scrollBars(newValue){$.scrollify.setOptions({scrollbars:newValue?!0:!1})}
function handleScrollify_enablenavigation(newValue){if(newValue){$('body').addClass('dce-scrollify').find('.dce-scrollify-pagination').show()}else{$('body').removeClass('dce-scrollify').find('.dce-scrollify-pagination').hide()}}
function handleScrollify_navstyle(newValue){if(newValue){createNavigation(newValue)}}
function handleScrollify_titlestyle(newValue){if(newValue){createNavigationTitles(newValue,!0)}}
function handleScrollEffects(newValue){if(newValue){if(is_scrollEffects){removeScrollEffects()}
setTimeout(function(){init_ScrollEffects()},500)}else{removeScrollEffects()}}
function handleScrollEffects_animations(newValue){var animationType_string=newValue.join(' ');if(newValue.length){removeScrollEffects();init_ScrollEffects();setStyleEffects(animationType_string);lax.updateElements()}
lax.updateElements();reloadScrolling()}
function handleScrollEffects_removefirst(newValue){removeScrollEffects();init_ScrollEffects()}
function handleInertiaScroll(newValue){if(newValue){if(is_inertiaScroll){removeInertiaScroll()}
setTimeout(function(){if(settings_page.enable_inertiaScroll)
initInertiaScroll()},100)}else{removeInertiaScroll()}}
function handleInertiaScroll_direction(newValue){directionScroll=newValue;if(newValue){if(is_inertiaScroll){removeInertiaScroll()}
setTimeout(function(){if(settings_page.enable_inertiaScroll)
initInertiaScroll()},100)}else{removeInertiaScroll()}}
$(window).on('elementor/frontend/init',function(){if(typeof elementorFrontendConfig.settings.page!=='undefined'){settings_page=elementorFrontendConfig.settings.page;currentPostId=elementorFrontendConfig.post.id;is_enable_dceScrolling=settings_page.enable_dceScrolling;is_enable_scrollify=settings_page.enable_scrollify;is_enable_scrollEffects=settings_page.enable_scrollEffects;is_enable_inertiaScroll=settings_page.enable_inertiaScroll;var responsive_scrollEffects=settings_page.responsive_scrollEffects;var responsive_snapScroll=settings_page.responsive_snapScroll;var responsive_inertiaScroll=settings_page.responsive_inertiaScroll;var deviceMode=$('body').attr('data-elementor-device-mode');if(is_enable_scrollEffects&&is_enable_dceScrolling&&$.inArray(deviceMode,responsive_scrollEffects)>=0){init_ScrollEffects()}
if(is_enable_scrollify&&is_enable_dceScrolling&&$.inArray(deviceMode,responsive_snapScroll)>=0){init_Scrollify()}
if(is_enable_inertiaScroll&&is_enable_dceScrolling&&$.inArray(deviceMode,responsive_inertiaScroll)>=0){initInertiaScroll()}
if(elementorFrontend.isEditMode()){if(elementor){settings_page=elementor.settings.page.model.attributes;elementor.settings.page.addChangeCallback('enable_dceScrolling',handlescroll_viewport);elementor.settings.page.addChangeCallback('enable_scrollify',handleScrollify);elementor.settings.page.addChangeCallback('scrollSpeed',handleScrollify_speed);elementor.settings.page.addChangeCallback('offset',handleScrollify_offset);elementor.settings.page.addChangeCallback('ease_scrollify',handleScrollify_ease);elementor.settings.page.addChangeCallback('setHeights',handleScrollify_setHeights);elementor.settings.page.addChangeCallback('overflowScroll',handleScrollify_overflowScroll);elementor.settings.page.addChangeCallback('updateHash',handleScrollify_updateHash);elementor.settings.page.addChangeCallback('scrollBars',handleScrollify_scrollBars);elementor.settings.page.addChangeCallback('touchScroll',handleScrollify_touchScroll);elementor.settings.page.addChangeCallback('enable_scrollify_nav',handleScrollify_enablenavigation);elementor.settings.page.addChangeCallback('snapscroll_nav_style',handleScrollify_navstyle);elementor.settings.page.addChangeCallback('snapscroll_nav_title_style',handleScrollify_titlestyle);elementor.settings.page.addChangeCallback('enable_scrollEffects',handleScrollEffects);elementor.settings.page.addChangeCallback('animation_effects',handleScrollEffects_animations);elementor.settings.page.addChangeCallback('remove_first_scrollEffects',handleScrollEffects_removefirst);elementor.settings.page.addChangeCallback('enable_inertiaScroll',handleInertiaScroll);elementor.settings.page.addChangeCallback('directionScroll',handleInertiaScroll_direction);elementor.settings.page.addChangeCallback('coefSpeed_inertiaScroll',handleInertiaScroll);elementor.settings.page.addChangeCallback('skew_inertiaScroll',handleInertiaScroll);elementor.settings.page.addChangeCallback('bounce_inertiaScroll',handleInertiaScroll)}}}})})(jQuery)