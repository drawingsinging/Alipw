Alipw.Nonvisual=function(){var b=new Object();var c=0;var a=function(){c++;return"Alipw-nonvisual-"+c};var d=function(e){this.config=e||(new Object());this.commitProperties(e);b[this.id]=this;if(this.autoInit){this.initialize()}};d.getInstance=function(f){var e=b[f];if(e){return e}return null};d.prototype={autoInit:true,initialized:false,enabled:true,listeners:null,commitProperties:function(){Alipw.apply(this,this.config);if(!this.id){this.id=a()}},initialize:function(){this.evtProxy=jQuery(new Object());this.initialized=true;if(this.listeners){for(var e in this.listeners){if(this.listeners[e] instanceof Function){this.addEventListener(e,this.listeners[e],this)}}}},addEventListener:function(g,f,e){Alipw.EventManager.addListener(this,g,f,e,false)},removeEventListener:function(f,e){Alipw.EventManager.removeListener(this,f,e,false)},fireEvent:function(e,f){return Alipw.EventManager.fireEvent(this,e,f,false,false)},regEvents:function(e){},update:function(){},destroy:function(){if(this.destroyed){return}this.fireEvent("destroy");delete b[this.id];this.destroyed=true},enable:function(){this.enabled=true},disable:function(){this.enabled=false}};return d}();