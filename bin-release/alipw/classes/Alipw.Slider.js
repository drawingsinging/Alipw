Alipw.Slider=Alipw.extend(Alipw.Component,{width:200,type:"horizontal",valueFrom:"head",value:0,values:null,step:0,showFill:true,minValue:0,maxValue:100,baseCls:"alipw-slider",constructor:function(){Alipw.Slider.superclass.constructor.apply(this,arguments)},commitProperties:function(){Alipw.Slider.superclass.commitProperties.apply(this,arguments);if(!this.values){this.values=new Array()}if(this.values.length==0&&this.step){var a=parseInt((this.maxValue-this.minValue)/this.step);this.values=new Array();for(var b=1;b<=a;b++){this.values.push(this.minValue+b*this.step)}}},initialize:function(){Alipw.Slider.superclass.initialize.apply(this,arguments);this.sliderDragManager=new Object()},createDom:function(){Alipw.Slider.superclass.createDom.apply(this,arguments);this.el.append(['<div class="'+this.baseCls+'-wrap">','<div class="'+this.baseCls+'-track">','<span class="'+this.baseCls+'-track-left">','<span class="'+this.baseCls+'-track-right">','<span class="'+this.baseCls+'-track-center">',"</span>","</span>","</span>",'<div class="'+this.baseCls+'-track-fill">','<span class="'+this.baseCls+'-track-fill-left">','<span class="'+this.baseCls+'-track-fill-right">','<span class="'+this.baseCls+'-track-fill-center">',"</span>","</span>","</span>","</div>","</div>",'<div class="'+this.baseCls+'-block">','<span class="'+this.baseCls+'-block-left">','<span class="'+this.baseCls+'-block-right">','<span class="'+this.baseCls+'-block-center">','<span class="'+this.baseCls+'-block-bg">',"</span>","</span>","</span>","</span>","</div>","</div>"].join(""));if(this.type=="vertical"){this.el.find("."+this.baseCls+"-wrap").addClass("alipw-slider-vertical")}this._block=this.el.find("."+this.baseCls+"-block");this._fill=this.el.find("."+this.baseCls+"-track-fill");this._track=this.el.find("."+this.baseCls+"-track");var a=this;this._track.setHeight=function(b){if(a.type!=="vertical"){return}var e=a.el.find("."+a.baseCls+"-track-center");var f=e.height();var c=a.el.find("."+a.baseCls+"-track").outerHeight();var g=c-f;e.height(b-g)};this._fill.setHeight=function(b){if(a.type!=="vertical"){return}var e=a.el.find("."+a.baseCls+"-track-fill-center");var f=e.height();var c=a.el.find("."+a.baseCls+"-track-fill").outerHeight();var g=c-f;e.height(b-g)};this._block.setHeight=function(b){if(a.type!=="vertical"){return}var e=a.el.find("."+a.baseCls+"-block-center");var f=e.height();var c=a.el.find("."+a.baseCls+"-block").outerHeight();var g=c-f;e.height(b-g)};this._block.centerBg=function(){var c=a.el.find("."+a.baseCls+"-block-center").height();var b=a.el.find("."+a.baseCls+"-block-bg");b.css("margin-top",parseInt((c-b.height())/2))}},renderComplete:function(){Alipw.Slider.superclass.renderComplete.apply(this,arguments);var a=this;if(!this.showFill){this._fill.hide()}if(this.valueFrom=="foot"){if(this.type=="vertical"){this._fill.css({top:"auto",bottom:"0"})}else{this._fill.css({left:"auto",right:"0"})}}this._block.hover(function(b){$(b.currentTarget).addClass(a.baseCls+"-block-hover")},function(b){$(b.currentTarget).removeClass(a.baseCls+"-block-hover")});this._track.bind("mousedown",jQuery.proxy(this.trackMouseDownHander_Slider,this));this._block.bind("mousedown",function(b){b.preventDefault();$(b.currentTarget).addClass(a.baseCls+"-block-down");a.getReady_Slider(b)});jQuery(document).bind("mousemove",jQuery.proxy(this.move_Slider,this));jQuery(document).bind("mouseup",jQuery.proxy(this.release_Slider,this));jQuery(document).bind("mouseup",function(b){a._block.removeClass(a.baseCls+"-block-down")});this.setValue(this.value)},_doLayout:function(){Alipw.Slider.superclass._doLayout.apply(this,arguments);if(this.width){if(this.type=="vertical"){this.el.height(this.width)}else{this.el.width(this.width)}}if(this.type=="vertical"){this._track.setHeight(this.width);this._block.centerBg()}},setValue:function(a){this.applyValue_Slider(a)},applyValue_Slider:function(b,a){if(b>this.maxValue){b=this.maxValue}else{if(b<this.minValue){b=this.minValue}}this.adjustBlockPosition_Slider(b);if(b!=this.value){this.value=b;this.fireEvent("valueChange",{value:b},false);if(a){this.fireEvent("change",{value:b},false)}}},adjustBlockPosition_Slider:function(a){var b=this.getCoordXByValue_Slider(a);if(this.type=="vertical"){this._block.offset({top:b});this._block.css("top",parseInt(this._block.css("top"))+"px");if(this.valueFrom=="foot"){this._fill.setHeight(this.el.offset().top+this.el.height()-b-parseInt(this._block.outerHeight()/2))}else{this._fill.setHeight(b-this.el.offset().top+parseInt(this._block.outerHeight()/2))}}else{this._block.offset({left:b});this._block.css("left",parseInt(this._block.css("left"))+"px");if(this.valueFrom=="foot"){this._fill.width(this.el.offset().left+this.el.width()-b-parseInt(this._block.outerWidth()/2))}else{this._fill.width(b-this.el.offset().left+parseInt(this._block.outerWidth()/2))}}},getReady_Slider:function(a){if(!this.enabled){return}a.preventDefault();this.sliderDragManager.ready=true;this.sliderDragManager._dx=this._block.offset().left-a.pageX;this.sliderDragManager._dy=this._block.offset().top-a.pageY},move_Slider:function(c){if(!this.enabled||!this.sliderDragManager.ready){return}c.preventDefault();var a=this.type=="vertical";if(!this.sliderDragManager.dragging){this.sliderDragManager.dragging=true}var b=this.getValueByCoord_Slider(a?(c.pageY+this.sliderDragManager._dy):(c.pageX+this.sliderDragManager._dx));this.applyValue_Slider(b,true)},release_Slider:function(a){if(!this.enabled){return}this.sliderDragManager.dragging=false;this.sliderDragManager.ready=false},getCoordXByValue_Slider:function(d){var a=this.type=="vertical";var c=a?this._block.outerHeight():this._block.outerWidth();var b=a?this.el.offset().top:this.el.offset().left;var f=a?this.el.height():this.el.width();var e;if(this.valueFrom=="head"){e=b+((d-this.minValue)/(this.maxValue-this.minValue))*(f-c)}else{if(this.valueFrom=="foot"){e=b+f-c-((d-this.minValue)/(this.maxValue-this.minValue))*(f-c)}}e=parseInt(e);return e},getValueByCoord_Slider:function(b){var l=this.type=="vertical";var e=l?this._block.outerHeight():this._block.outerWidth();var j=l?this.el.offset().top:this.el.offset().left;var a=l?this.el.height():this.el.width();if(b<j){b=j}else{if(b+e>j+a){b=j+a-e}}var k;if(this.valueFrom=="head"){k=this.minValue+(this.maxValue-this.minValue)*((b-j)/(a-e))}else{if(this.valueFrom=="foot"){k=this.minValue+(this.maxValue-this.minValue)*((j+a-e-b)/(a-e))}}var h=-1;var g;if(this.values.length>0){for(var c=0,f=this.values.length;c<f;c++){if(this.values[c]>this.minValue&&this.values[c]<this.maxValue){if(h==-1||Math.abs(k-this.values[c])<h){h=Math.abs(k-this.values[c]);g=this.values[c]}}}if(Math.abs(k-this.minValue)<h){h=Math.abs(k-this.minValue);g=this.minValue}if(Math.abs(k-this.maxValue)<h){h=Math.abs(k-this.maxValue);g=this.maxValue}k=g}return k},trackMouseDownHander_Slider:function(d){var a=this.type=="vertical";var b=[this._block.outerWidth(),this._block.outerHeight()];var c=this.getValueByCoord_Slider(a?(d.pageY-parseInt(b[1]/2)):(d.pageX-parseInt(b[0]/2)));this.applyValue_Slider(c,true)}});