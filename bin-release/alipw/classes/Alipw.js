var Alipw=function(){var d=navigator.userAgent.toLowerCase();var c=d.match(/msie ([\d.]+)/)?d.match(/msie ([\d.]+)/)[1]:undefined;var g=typeof(c)!="undefined";var l=c&&parseInt(c)==6;var j=c&&parseInt(c)==7;var i=c&&parseInt(c)==8;var h=c&&parseInt(c)==9;var m=/applewebkit/.test(d);var e=d.match(/opera\/([\d.]+)/);var f;var q;var n;var o;var p;var a;var b=[];var k={initialize:function(){Alipw.utils=new Object();var s=Alipw.getFileInfo();Alipw.rootPath=s.rootPath;Alipw.classPath=s.classPath;Alipw.mode=s.mode;var r=Alipw.rootPath;if(typeof(jQuery)=="undefined"){document.write('<script type="text/javascript" src="'+r+"alipw/baselib/baselib-all.js?v="+Alipw.build+'"><\/script>')}else{document.write('<script type="text/javascript" src="'+r+"alipw/baselib/jquery/jquery.easing.js?v="+Alipw.build+'"><\/script>')}document.write('<link rel="stylesheet" type="text/css" href="'+r+"alipw/resources/css/style.css?v="+Alipw.build+'" />');Alipw.onDOMReady(function(){if(Alipw.theme){jQuery(document.body).addClass("alipw-theme-"+Alipw.theme)}})},build:"@ALIPW_BUILD@",version:"2.0",ieVersion:c,isIE:g,isIE6:l,isIE7:j,isIE8:i,isIE9:h,isWebKit:m,isOpera:e,theme:"default",useShims:false,apply:function(t,u,s){if(s){Alipw.apply(t,s)}if(t&&u&&typeof u=="object"){for(var r in u){t[r]=u[r]}}return t},override:function(r,t){if(t){var s=r.prototype;Alipw.apply(s,t);if(Alipw.ie()&&t.hasOwnProperty("toString")){s.toString=t.toString}}},extend:function(){var s=function(u){for(var t in u){this[t]=u[t]}};var r=Object.prototype.constructor;return function(y,v,x){if(typeof v=="object"){x=v;v=y;y=x.constructor!=r?x.constructor:function(){v.apply(this,arguments)}}var u=function(){},w,t=v.prototype;u.prototype=t;w=y.prototype=new u();w.constructor=y;y.superclass=t;if(t.constructor==r){t.constructor=v}y.override=function(z){Alipw.override(y,z)};w.superclass=w.supr=(function(){return t});w.override=s;Alipw.override(y,x);y.extend=function(z){return Alipw.extend(y,z)};return y}}(),getDoc:function(){if(!f){f=jQuery(window.document)}return f},getWin:function(){if(!q){q=jQuery(window)}return q},getBody:function(){if(!n){n=jQuery(window.document.body)}return n},getComp:function(r){return Alipw.ComponentManager.getComponent(r)},getModule:function(s){var r=Alipw.ComponentManager.getComponent(s);if(r instanceof Alipw.Module){return r}return null},getNonvisual:function(s){var r=Alipw.Nonvisual.getInstance(s);if(r){return r}return null},getInstance:function(s){var r;r=Alipw.getComp(s);if(r){return r}r=Alipw.getNonvisual(s);if(r){return r}return null},addModuleScript:function(r){Alipw.Module.__moduleScriptFn=r;r.__Alipw_needToReload=true},adjustImgSize:function(t,x,y,s){if(typeof(s)=="undefined"){s=true}var w=new Image();w.src=t.src;var v=w.width;var u=w.height;if(!t._adjustSizeTryTime){t._adjustSizeTryTime=0}if((v==0||u==0)&&t._adjustSizeTryTime<100){t._adjustSizeTryTime++;setTimeout(function(){Alipw.adjustImgSize(t,x,y,s)},10);return}if(v<=x&&u<=y){t.style.width=v+"px";t.style.height=u+"px";if(s){t.style.paddingLeft=t.style.paddingRight=parseInt((x-v)/2)+"px";t.style.paddingTop=t.style.paddingBottom=parseInt((y-u)/2)+"px"}}else{var r=x;var z=(x*u)/v;if(z>y){z=parseInt(y);r=parseInt((y*v)/u)}t.style.width=r+"px";t.style.height=z+"px";if(s){t.style.paddingLeft=t.style.paddingRight=parseInt((x-r)/2)+"px";t.style.paddingTop=t.style.paddingBottom=parseInt((y-z)/2)+"px"}}},isSet:function(r){if(typeof(r)!="undefined"&&r!=null){return true}else{return false}},ie:function(){var r=navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/);return r?r[1]:undefined},getPath:function(){if(!o){var u=document.getElementsByTagName("script");var s;for(var t=0,r=u.length;t<r;t++){s=u[t].src.toString().match(/(.*)alipw\/classes\//i);if(s){o=s[1];break}}}return o},getFileInfo:function(){if(!p){var u=document.getElementsByTagName("script");var s;for(var t=0,r=u.length;t<r;t++){s=u[t].src.toString().match(/(.*)alipw\/classes\/(.+)\.js/i);if(s){p={rootPath:s[1],classPath:s[1]+"alipw/classes/",mode:s[2].replace("alipw-","")}}}}return p},removeItemFromArray:function(u,s){for(var t=0,r=s.length;t<r;t++){if(s[t]==u){s.splice(t,1);t--;r=s.length}}},indexOfArray:function(u,s){for(var t=0,r=s.length;t<r;t++){if(s[t]===u){return t}}return -1},getDocWidth:function(){if(Alipw.ie()){if(document.compatMode=="BackCompat"){return document.body.scrollWidth}else{return document.documentElement.scrollWidth}}else{return jQuery(document).width()}},getDocHeight:function(){if(Alipw.ie()){if(document.compatMode=="BackCompat"){return document.body.scrollHeight}else{return document.documentElement.scrollHeight}}else{return jQuery(document).height()}},isInNode:function(s,r){var u=r.getElementsByTagName("*");for(var t=0;t<u.length;t++){if(u[t]==s){return true}}return false},isReady:function(){return Alipw.isDOMReady&&Alipw.ClassManager.getStatus()=="complete"},isDOMReady:false,onDOMReady:function(s){var v=false;var w=[];var x;var r=function(y){if(Alipw.isDOMReady){y.call(document)}else{w.push(function(){return y.call(this)})}return this};var t=function(){for(var y=0;y<w.length;y++){w[y].apply(document)}w=null};var u=function(y){if(Alipw.isDOMReady){return}Alipw.isDOMReady=true;t.call(window);if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",u,false)}else{if(document.attachEvent){document.detachEvent("onreadystatechange",u);if(window==window.top){clearInterval(x);x=null}}}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",u,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if((/loaded|complete/).test(document.readyState)){u()}});if(window==window.top){x=setInterval(function(){try{Alipw.isDOMReady||document.documentElement.doScroll("left")}catch(y){return}u()},5)}}}return r}(),onReady:function(r){Alipw.onDOMReady(function(){if(Alipw.ClassManager.getStatus()=="complete"){r()}else{b.push(r)}})},onLoad:function(r){jQuery(window).bind("load",function(){if(Alipw.isReady()){r()}else{Alipw.onReady(r)}})},importClass:function(){if(Alipw.mode=="all"){return}Alipw.ClassManager.loadClass.apply(Alipw.ClassManager,arguments)},each:function(s,v,u){if(!(v instanceof Function)){return}if(s instanceof Array){for(var t=0,r=s.length;t<r;t++){if(v.call(u,t,s[t])==false){break}}}else{if(s instanceof Object){for(var t in s){if(v.call(u,t,s[t])==false){break}}}}},clone:function(s,r){return jQuery.extend(r,{},ect)},createFuncProxy:function(s,r){return function(){s.apply(r,arguments)}},getScrollbarSize:function(s){if(!Alipw.isReady()){return{}}if(s||!a){var r=document.body,t=document.createElement("div");t.style.width=t.style.height="100px";t.style.overflow="scroll";t.style.position="absolute";r.appendChild(t);a={width:t.offsetWidth-t.clientWidth,height:t.offsetHeight-t.clientHeight};r.removeChild(t)}return a},getHash:function(){var r=window.location.href;if(r.indexOf("#")==-1){return""}return r.replace(/^[^\#]*#/,"")},loadScript:function(v){var t=v.url;var r=v.success;var u=document.getElementsByTagName("head")[0];var s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("src",t);if(Alipw.isIE){s.onreadystatechange=function(){if(s.readyState=="complete"||s.readyState=="loaded"){if(r instanceof Function){r.call()}}}}else{s.onload=function(){if(r instanceof Function){r.call()}}}u.appendChild(s);return s},getWinProxy:function(){if(!Alipw.WinProxy.initialized){Alipw.WinProxy.initialize()}return Alipw.WinProxy},getObjectByName:function(s){var v=s.split(".");var u;for(var t=0,r=v.length;t<r;t++){if(!u&&t==0){u=window[v[t]]}else{if(u){u=u[v[t]]}else{break}}}return u},isNumeric:function(r){return !isNaN(parseFloat(r))&&isFinite(r)},isIntegral:function(r){return !isNaN(r)&&parseInt(r).toString()==r.toString()},classLoadedHandler:function(){for(var s=0,r=b.length;s<r;s++){b[s]()}b=[]},convertEl:function(s){var r;if(typeof(s)=="string"&&s.substr(0,1)!="#"){r=jQuery("#"+s)}else{r=jQuery(s);if(r.length>1){r=jQuery(r[0])}}return r}};return k}();Alipw.initialize();var A=Alipw;