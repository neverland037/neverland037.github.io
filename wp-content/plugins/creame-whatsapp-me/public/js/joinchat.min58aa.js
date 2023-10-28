!function(f,m,v,b){"use strict";function t(){f(v).trigger("joinchat:starting");var t,e,n=1e3*b.settings.button_delay,i=1e3*b.settings.message_delay,a=!!b.settings.message_hash,o=!!b.$(".joinchat__box").length,s=parseInt(b.store.getItem("joinchat_views")||1)>=b.settings.message_views,h=(b.store.getItem("joinchat_hashes")||"").split(",").filter(Boolean),c=void 0!==b.settings.is_viewed?b.settings.is_viewed:-1!==h.indexOf(b.settings.message_hash||"none");function r(){clearTimeout(e),b.chatbox_show()}function _(){b.save_hash(),b.chatbox_hide()}var l,g,d=!c&&(b.settings.message_badge||!a||!i||!s);function u(){var t=(v.activeElement.type||"").toLowerCase();0<=["date","datetime","email","month","number","password","search","tel","text","textarea","time","url","week"].indexOf(t)?b.chatbox?(b.chatbox_hide(),setTimeout(function(){b.hide()},400)):b.hide():b.show()}setTimeout(function(){b.show(d)},n),a&&i&&!c&&(b.settings.message_badge?e=setTimeout(function(){b.$(".joinchat__badge").addClass("joinchat__badge--in")},n+i):s&&(e=setTimeout(r,n+i))),o&&!b.is_mobile&&b.$(".joinchat__button").on("mouseenter",function(){t=setTimeout(r,1500)}).on("mouseleave",function(){clearTimeout(t)}),b.$(".joinchat__button").on("click",function(){o&&!b.chatbox?r():Date.now()>b.showed_at+600&&(_(),b.open_whatsapp())}),b.$(".joinchat__close").on("click",_),b.$("#joinchat_optin").on("change",function(){b.$div.toggleClass("joinchat--optout",!this.checked)}),b.$(".joinchat__box__scroll").on("mousewheel DOMMouseScroll",function(t){t.preventDefault();t=t.originalEvent.wheelDelta||-t.originalEvent.detail;this.scrollTop+=30*(t<0?1:-1)}),b.is_mobile&&(f(v).on("focus blur","input, textarea",function(t){f(t.target).closest(b.$div).length||(clearTimeout(l),l=setTimeout(u,200))}),f(m).on("resize",function(){clearTimeout(g),g=setTimeout(function(){b.$div[0].style.setProperty("--vh",m.innerHeight+"px")},200)}).trigger("resize"));var p,h=new URL(m.location);"#joinchat"==h.hash&&(b.show(),setTimeout(r,700)),h.searchParams.has("joinchat")&&(a=1e3*(parseInt(h.searchParams.get("joinchat"))||0),setTimeout(function(){b.show()},a),setTimeout(r,700+a)),f(v).on("click",'.joinchat_open, .joinchat_app, a[href="#joinchat"], a[href="#whatsapp"]',function(t){t.preventDefault(),!o||b.optin()&&!f(this).is('.joinchat_open, a[href="#joinchat"]')?b.open_whatsapp(f(this).data("phone"),f(this).data("message")):r()}),f(v).on("click",".joinchat_close",function(t){t.preventDefault(),b.chatbox_hide()}),o&&"IntersectionObserver"in m&&(0<(s=f(".joinchat_show, .joinchat_force_show")).length&&(p=new IntersectionObserver(function(t){f.each(t,function(){if(0<this.intersectionRatio&&(!c||f(this.target).hasClass("joinchat_force_show")))return r(),p.disconnect(),!1})}),s.each(function(){p.observe(this)}))),b.settings.qr&&b.can_qr&&!b.is_mobile?b.$(".joinchat__qr").append(b.qr(b.whatsapp_link(void 0,void 0,!1))):b.$(".joinchat__qr").remove(),o&&b.$div.css("--peak","url(#joinchat__message__peak)"),f(v).trigger("joinchat:start"),b.is_ready=!0}b=f.extend({$div:null,settings:null,store:null,chatbox:!1,showed_at:0,is_ready:!1,is_mobile:!!navigator.userAgent.match(/Android|iPhone|BlackBerry|IEMobile|Opera Mini/i),can_qr:m.QrCreator&&"function"==typeof QrCreator.render},b),(m.joinchat_obj=b).$=function(t){return f(t||this.$div,this.$div)},b.send_event=function(n){var t,e,i,a;(n=f.extend({event_category:"JoinChat",event_label:"",event_action:"",chat_channel:"whatsapp",chat_id:"--",is_mobile:this.is_mobile?"yes":"no",page_location:location.href,page_title:v.title||"no title"},n)).event_label=n.event_label||n.link||"",n.event_action=n.event_action||n.chat_channel+": "+n.chat_id,delete n.link,!1!==f(v).triggerHandler("joinchat:event",[n])&&(a=m[this.settings.ga_tracker]||m.ga||m.__gaTracker,t=m[this.settings.data_layer]||m[m.gtm4wp_datalayer_name]||m.dataLayer,"function"==typeof a&&"function"==typeof a.getAll&&(a("set","transport","beacon"),a.getAll().forEach(function(t){t.send("event",n.event_category,n.event_action,n.event_label)})),f.each(n,function(t,e){n[t]="string"==typeof e?e.substring(0,100):e}),"function"==typeof gtag&&"object"==typeof t&&(e=this.settings.ga_event||"generate_lead",delete(i=f.extend({transport_type:"beacon"},n)).page_location,delete i.page_title,t.forEach(function(t){"config"==t[0]&&t[1]&&"G-"==t[1].substring(0,2)&&(i.send_to=t[1],gtag("event",e,i))}),this.settings.gads&&gtag("event","conversion",{send_to:this.settings.gads})),a=n.event_category,delete n.event_category,"object"==typeof t&&t.push(f.extend({event:a},n)),"function"==typeof fbq&&fbq("trackCustom",a,n))},b.whatsapp_link=function(t,e,n){return e=void 0!==e?e:this.settings.message_send||"",((n=void 0!==n?n:this.settings.whatsapp_web&&!this.is_mobile)?"https://web.whatsapp.com/send?phone=":"https://wa.me/")+encodeURIComponent(t||this.settings.telephone)+(e?(n?"&text=":"?text=")+encodeURIComponent(e):"")},b.show=function(t){this.$div.addClass("joinchat--show"+(t?" joinchat--tooltip":""))},b.hide=function(){this.$div.removeClass("joinchat--show")},b.chatbox_show=function(){this.chatbox||(this.chatbox=!0,this.showed_at=Date.now(),this.$div.addClass("joinchat--chatbox"),this.settings.message_badge&&this.$(".joinchat__badge").hasClass("joinchat__badge--in")&&this.$(".joinchat__badge").toggleClass("joinchat__badge--in joinchat__badge--out"),f(v).trigger("joinchat:show"))},b.chatbox_hide=function(){this.chatbox&&(this.chatbox=!1,this.$div.removeClass("joinchat--chatbox joinchat--tooltip"),this.settings.message_badge&&this.$(".joinchat__badge").removeClass("joinchat__badge--out"),f(v).trigger("joinchat:hide"))},b.save_hash=function(){var t=this.settings.message_hash||"none",e=(this.store.getItem("joinchat_hashes")||"").split(",").filter(Boolean);-1===e.indexOf(t)&&(e.push(t),this.store.setItem("joinchat_hashes",e.join(",")))},b.open_whatsapp=function(t,e){t=t||this.settings.telephone,e=void 0!==e?e:this.settings.message_send||"";t={link:this.whatsapp_link(t,e),chat_channel:"whatsapp",chat_id:t,chat_message:e},e=new RegExp("^https?://(wa.me|(api|web|chat).whatsapp.com|"+location.hostname.replace(".",".")+")/.*","i");!1!==f(v).triggerHandler("joinchat:open",[t])&&(e.test(t.link)?(this.send_event(t),m.open(t.link,"joinchat","noopener")):console.error("Joinchat: the link doesn't seem safe, it must point to the current domain or whatsapp.com"))},b.optin=function(){return!this.$div.hasClass("joinchat--optout")},b.qr=function(t,e){var n=v.createElement("CANVAS");return QrCreator.render(f.extend({text:t,radius:.4,background:"#FFF",size:200},b.settings.qr||{},e||{}),n),n};function e(){n&&n.apply(this,arguments),n=null}var n;n=function(){if(b.$div=f(".joinchat"),b.$div.length){b.settings=b.$div.data("settings");try{localStorage.setItem("test",1),localStorage.removeItem("test"),b.store=localStorage}catch(t){b.store={_data:{},setItem:function(t,e){this._data[t]=String(e)},getItem:function(t){return this._data.hasOwnProperty(t)?this._data[t]:null}}}if("object"!=typeof b.settings)try{b.settings=JSON.parse(b.$div.attr("data-settings"))}catch(t){b.settings=void 0,console.error("Joinchat: can't get settings")}var n;b.settings&&b.settings.telephone&&(b.is_mobile||!b.settings.mobile_only?t():(b.hide(),f(v).on("click",'.joinchat_open, .joinchat_app, a[href="#joinchat"], a[href="#whatsapp"]',function(t){t.preventDefault(),b.open_whatsapp(f(this).data("phone"),f(this).data("message"))})),b.can_qr&&!b.is_mobile?f(".joinchat-button__qr").each(function(){f(this).append(b.qr(b.whatsapp_link(f(this).data("phone"),f(this).data("message"),!1)))}):f(".wp-block-joinchat-button figure").remove(),void 0!==b.settings.sku&&(n=b.settings.message_send,f("form.variations_form").on("found_variation reset_data",function(t,e){e=e&&e.sku||b.settings.sku;b.$(".joinchat__box sku").text(e),b.settings.message_send=n.replace(/<sku>.*<\/sku>/g,e)}))),b.store.setItem("joinchat_views",parseInt(b.store.getItem("joinchat_views")||0)+1)}};f(e),f(m).on("load",e),v.addEventListener("DOMContentLoaded",e)}(jQuery,window,document,window.joinchat_obj||{});