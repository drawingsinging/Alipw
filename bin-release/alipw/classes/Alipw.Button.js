Alipw.Button=Alipw.extend(Alipw.BoxComponent,{handler:null,scope:null,minHeight:22,minWidth:10,maxHeight:65,gridScale:true,iconCls:"",label:"Button",baseCls:"alipw-button",defaultEl:"a",constructor:function(){Alipw.Button.superclass.constructor.apply(this,arguments)},commitProperties:function(){Alipw.Button.superclass.commitProperties.apply(this,arguments)},initialize:function(){Alipw.Button.superclass.initialize.apply(this,arguments)},createDom:function(){Alipw.Button.superclass.createDom.apply(this,arguments);this.el.attr("href","#");var a=jQuery('<span class="'+this.baseCls+'-wrap"></span>');this.el.append(a);if(this.gridScale){a.append(["<table>",'<tr class="'+this.baseCls+'-top">','<td class="'+this.baseCls+'-left"></td>','<td class="'+this.baseCls+'-center"></td>','<td class="'+this.baseCls+'-right"></td>',"</tr>",'<tr class="'+this.baseCls+'-middle">','<td class="'+this.baseCls+'-left"></td>','<td class="'+this.baseCls+'-center">','<span class="'+this.baseCls+'-icon"></span>','<span class="'+this.baseCls+'-text"></span>',"</td>",'<td class="'+this.baseCls+'-right"></td>',"</tr>",'<tr class="'+this.baseCls+'-bottom">','<td class="'+this.baseCls+'-left"></td>','<td class="'+this.baseCls+'-center"></td>','<td class="'+this.baseCls+'-right"></td>',"</tr>","</table>"].join(""))}else{a.append(['<span class="'+this.baseCls+'-icon"></span>','<span class="'+this.baseCls+'-text"></span>'].join(""))}this.addEventListener("click",this.defaultClickHandler,this,true);if(this.handler){this.addEventListener("click",this.handler,this.scope||this,true)}},renderComplete:function(){Alipw.Button.superclass.renderComplete.apply(this,arguments);this.el.find("."+this.baseCls+"-text").html(this.label);this.setIconCls(this.iconCls);if(this.label){this.el.find("."+this.baseCls+"-text").show()}else{this.el.find("."+this.baseCls+"-text").hide()}},_doLayout:function(){Alipw.Button.superclass._doLayout.apply(this,arguments);var a;var b=this.el.find("."+this.baseCls+"-wrap");if(this.gridScale){a=this.el.find("."+this.baseCls+"-middle ."+this.baseCls+"-center")}else{a=b}if(this.width&&this.width!="auto"){var c=b.outerWidth(true)-a.width();a.width(this.width-c)}if(this.height&&this.height!="auto"){var c=b.outerHeight(true)-a.height();a.height(this.height-c)}},setIconCls:function(b){var a=this.el.find("."+this.baseCls+"-icon");if(this.iconCls){a.removeClass(this.iconCls)}this.iconCls=b;a.addClass(b);if(b){a.show()}else{a.hide()}},defaultClickHandler:function(a){a.preventDefault()}});