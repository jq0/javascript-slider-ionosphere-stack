// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 4.4
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack(t,e,n){function i(e,n,i,s,o){t.support.transform&&t.support.transition?(n.transform||(n.transform=""),n.left&&(n.transform+=" translate3d("+(n.left?n.left:0)+"px,0,0)"),delete n.left,n.transition=i+"ms all "+s+"ms cubic-bezier(0.770, 0.000, 0.175, 1.000)",e.css(n),o&&e.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",o)):i?e.animate(n,i,"easeInOutExpo",o):e.css(n)}var s=jQuery,o=s(this),a=s("li",n),d=s("<div>").addClass("ws_effect").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(n.parent());this.go=function(r,f,l){var h=a.length>2?(r-f+1)%a.length:1;Math.abs(l)>=1&&(h=l>0?0:1),h=!!h^!!t.revers;var p=(t.revers?1:-1)*n.width();a.each(function(t){h&&t!=f&&(this.style.zIndex=Math.max(0,this.style.zIndex-1))});var u=s(".ws_list",n),c=s("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(s(e.get(h?r:f)).clone()),v=s("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(s(e.get(h?f:r)).clone());t.responsive<3&&(c.find("img").css("width","100%"),v.find("img").css("width","100%")),i(c,{left:h?p:0}),i(v,{left:h?0:.5*-p}),h?(v.appendTo(d),c.appendTo(d)):(c.insertAfter(u),v.insertAfter(u)),h?t.fadeOut&&u.fadeOut(t.duration):(u.stop(!0,!0).hide().css({left:-r+"00%"}),t.fadeOut?u.fadeIn(t.duration):u.show()),setTimeout(function(){i(c,{left:h?0:p},t.duration,t.duration*(h?0:.1),function(){o.trigger("effectEnd"),c.remove(),v.remove()}),i(v,{left:(h?1:0)*n.width()*.5},t.duration,t.duration*(h?.1:0))},0)}}// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 4.4
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
wowReInitor(jQuery("#wowslider-container1"),{effect:"stack",prev:"",next:"",duration:17*100,delay:25*100,width:960,height:360,autoPlay:true,playPause:false,stopOnHover:false,loop:false,bullets:true,caption:true,captionEffect:"move",controls:true,onBeforeStep:0,images:0});