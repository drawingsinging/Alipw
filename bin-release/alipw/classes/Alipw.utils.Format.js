Alipw.utils.Format=function(){var a={date:function(e,l){e=new Date(e);if(isNaN(e)||e=="Invalid Date"){return"Invalid Date"}var j=e.getFullYear().toString();var h=(e.getMonth()+1).toString();var k=e.getDate().toString();var c=j.substr(2,2);var f=j;var m=h.length<2?"0"+h:h;var i=h;var g=k.length<2?"0"+k:k;var b=k;var d=l;d=d.replace(/YYYY/g,f);d=d.replace(/YY/g,c);d=d.replace(/MM/g,m);d=d.replace(/M/g,i);d=d.replace(/DD/g,g);d=d.replace(/D/g,b);return d}};return a}();