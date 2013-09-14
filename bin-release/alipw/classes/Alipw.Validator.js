Alipw.Validator=Alipw.extend(Alipw.BoxComponent,{zIndex:100,conditions:null,correctMsg:"Correct!",msgPosition:"right",target:null,targetAttr:"value",triggerEvents:"change",baseCls:"alipw-validator",autoRender:false,success:false,isPending:false,pendingIndex:null,constructor:function(){Alipw.Validator.superclass.constructor.apply(this,arguments)},initialize:function(){Alipw.Validator.superclass.initialize.apply(this,arguments)},commitProperties:function(){Alipw.Validator.superclass.commitProperties.apply(this,arguments);this.targetEl=Alipw.convertEl(this.target);if(typeof(this.triggerEvents)=="string"){this.triggerEvents=[this.triggerEvents]}for(var b=0,a=this.triggerEvents.length;b<a;b++){this.targetEl.bind(this.triggerEvents[b],jQuery.proxy(this.validate,this))}},createDom:function(){Alipw.Validator.superclass.createDom.apply(this,arguments);var a=['<div class="'+this.baseCls+'-wrap">','<div class="'+this.baseCls+'-errorMsg"></div>','<div class="'+this.baseCls+'-correctMsg">'+this.correctMsg+"</div>",'<div class="'+this.baseCls+'-pendingMsg"></div>',"</div>"].join("");this.el.append(a)},renderComplete:function(){Alipw.Validator.superclass.renderComplete.apply(this,arguments);if(!this.renderTo){this.el.css("position","absolute");$(window).bind("resize",jQuery.proxy(this.setPosition_Validator,this))}},validate:function(){if(this.isPending){return this.success}if(!this.rendered){this.render()}this.setVisible(true);if(!this.renderTo){this.setPosition_Validator()}var e=this.el.find("."+this.baseCls+"-wrap");var g=true;var d=0,b=this.conditions.length;if(Alipw.isSet(this.pendingIndex)){d=this.pendingIndex+1}var f=function(h){this.isPending=false;e.removeClass(this.baseCls+"-wrap-correct");e.removeClass(this.baseCls+"-wrap-pending");e.addClass(this.baseCls+"-wrap-error");this.el.find("."+this.baseCls+"-errorMsg").html(this.conditions[h].errorMsg);g=false;this.pendingIndex=null;this.success=false;this.fireEvent("validateComplete",{},false)};for(d;d<b;d++){if(this.conditions[d].exp){if(!this.targetEl.attr(this.targetAttr).match(this.conditions[d].exp)){e.removeClass(this.baseCls+"-wrap-correct");e.removeClass(this.baseCls+"-wrap-pending");e.addClass(this.baseCls+"-wrap-error");this.el.find("."+this.baseCls+"-errorMsg").html(this.conditions[d].errorMsg);g=false;break}}else{if(this.conditions[d].url&&this.conditions[d].fn){this.isPending=true;this.pendingIndex=d;this.success="validating";e.removeClass(this.baseCls+"-wrap-correct");e.removeClass(this.baseCls+"-wrap-error");e.addClass(this.baseCls+"-wrap-pending");this.el.find("."+this.baseCls+"-pendingMsg").html(this.conditions[d].pendingMsg||"");var c=this.conditions[d].valueParamName||"value";var a=new Object();a[c]=this.targetEl.attr(this.targetAttr);jQuery.ajax({url:this.conditions[d].url,method:this.conditions[d].method||"GET",data:a,success:jQuery.proxy(function(h){this.isPending=false;if(this.conditions[d].fn.call(this.conditions[d],h)==false){f.call(this,d)}else{this.validate()}},this),error:jQuery.proxy(function(){f.call(this,d)},this)});return this.success}}}this.pendingIndex=null;if(g){e.removeClass(this.baseCls+"-wrap-pending");e.removeClass(this.baseCls+"-wrap-error");e.addClass(this.baseCls+"-wrap-correct");this.el.find("."+this.baseCls+"-correctMsg").html(this.correctMsg);this.success=true}else{this.success=false}this.fireEvent("validateComplete",{},false);return this.success},reset:function(){this.success=false;var a=this.el.find("."+this.baseCls+"-wrap");a.removeClass(this.baseCls+"-wrap-error");a.removeClass(this.baseCls+"-wrap-correct");this.setVisible(false)},setPosition_Validator:function(){var a,c;var b=this.targetEl.offset();if(this.msgPosition=="top"){a=b.left;c=b.top-this.el.outerHeight()}else{if(this.msgPosition=="right"){a=b.left+this.targetEl.outerWidth();c=b.top}else{if(this.msgPosition=="bottom"){a=b.left;c=b.top+this.targetEl.outerHeight()}else{if(this.msgPosition=="left"){a=b.left-this.el.outerWidth();c=b.top}}}}this.el.css({left:a+"px",top:c+"px"})}});