var Pager=function(){var a=new Clazz({config:{index:-1,total:-1,max:-1},inherit:Component},function(t){this.setConfig(t);this.__init()});a.extend({__init:function t(){this.attributes=util.extend(true,{},this.config);this._previousAttributes=null;this.changed={}},set:function t(e,i){i=i||{};this.changed={};this._previousAttributes=util.extend(true,{},this.attributes,e);for(var n in e){if(this.attributes[n]!==e[n]){this.changed[n]=this.attributes[n]=e[n]}}if(this.hasChanged()&&!i.silent){this.fire("change",this.changed)}},get:function t(e){return this.attributes[e]},previousAttributes:function t(){return this._previousAttributes},hasChanged:function t(e){var i=false;if(e){i=e in this.changed}else{for(var n in this.changed){i=true;break}}return i},toJSON:function t(){return util.extend(true,{},this.attributes)}});var s=function(){var o='{{ if(total > 1){ }}\r\n<div class="pager">\r\n\t<div class="page-num">\r\n\t\t<a href="javascript:void(\'{{=txt_prev}}\')" class="prev J-prev{{- index === 0 ? \' page-dis\' : \'\' }}" rel="nofollow"><i class="icon ob-icon micon">&#xe009;</i>{{=html_prev}}</a>\r\n\t\t\r\n\t\t{{ if(start > 0){ }}\r\n\t\t\t<a href="javascript:void(\'{{=beforeGoto}}1{{=afterGoto}}\')" class="J-pager-item" rel="nofollow" index="0">1</a>\r\n\t\t{{ } }}\r\n\t\t\r\n\t\t{{ if(start > 1){ }}\r\n\t\t\t<strong class="omit">···</strong>\r\n\t\t{{ } }}\r\n\t\t\r\n\t\t{{ for(var i = start; i < end; i++){ }}\r\n\t\t\t{{ if(i === index){  }}\r\n\t\t\t\t<strong>{{= i + 1 }}</strong>\r\n\t\t\t{{ }else{ }}\r\n\t\t\t\t<a href="javascript:void(\'{{=beforeGoto}}{{= i + 1 }}{{=afterGoto}}\')" class="J-pager-item" rel="nofollow" index="{{= i }}">{{= i + 1 }}</a>\r\n\t\t\t{{ } }}\r\n\t\t{{ } }}\r\n\t\t\r\n\t\t{{ if(end < total - 1){ }}\r\n\t\t\t<strong class="omit">···</strong>\r\n\t\t{{ } }}\r\n\t\t\r\n\t\t{{ if(end < total){ }}\r\n\t\t\t<a href="javascript:void(\'{{=beforeGoto}}{{= total }}{{=afterGoto}}\')" class="J-pager-item" rel="nofollow" index="{{= total - 1 }}">{{= total }}</a>\r\n\t\t{{ } }}\r\n\t\t\r\n\t\t<a href="javascript:void(\'{{=txt_next}}\')" class="next J-next{{- index === total - 1 ? \' page-dis\' : \'\' }}" rel="nofollow">{{=html_next}}<i class="icon ob-icon micon">&#xe008;</i></a>\r\n\t</div>\r\n</div>\r\n{{ } }}';var t=function t(e){var i=this;this.model=e.model;this.$el=$(e.el);this.template=typeof e.template==="function"?e.template:template(e.template||o);this._text=e.text;var n=e.events||{"click .J-pager-item":"changeItem","click .J-next":"next","click .J-nextAll":"nextAll","click .J-prev":"prev","click .J-prevAll":"prevAll"};this.initialize();for(var r in n){void function(e){var t=e.split(/\s+/);this.$el.delegate(t[1],t[0],function(t){i[n[e]].call(i,t)})}.call(this,r)}};t.prototype={initialize:function t(){this.render()},computedPages:function t(e,i,n){var r=e-Math.floor(n/2);r=r<0?0:r;var o=r+n;o=o>i?i:o;r=o-n;r=r<0?0:r;return{start:r,end:o}},render:function t(){if(this.model){var e=this.model.toJSON();util.extend(true,e,this.computedPages(e.index,e.total,e.max),this._text);this.$el.html(this.template(e))}},changeItem:function t(e){e.preventDefault();this.model.set({index:parseInt(e.target.getAttribute("index"))||0})},next:function t(e){e.preventDefault();var i=this.model.get("total")-1;var n=this.model.get("index");this.model.set({index:n+1>i?i:n+1})},nextAll:function t(e){e.preventDefault();this.model.set({index:this.model.get("total")-1})},prev:function t(e){e.preventDefault();var i=this.model.get("index");this.model.set({index:i-1<0?0:i-1})},prevAll:function t(e){e.preventDefault();this.model.set({index:0})}};return t}();var t=new Abstract({go:function t(e){},next:function t(e){},set:function t(e){}});var e={index:0,max:10,total:0,holder:null,tmpl:null,silent:false,text:{txt_prev:"上一页",html_prev:"上一页",txt_next:"下一页",html_next:"下一页",beforeGoto:"第",afterGoto:"页"}};var i=new Clazz(t,{config:e,inherit:Component},function(t){var e=this.setConfig(t);var i=this.elems.$wrap=$('<div class="J-pager-wrap"></div>');$(e.holder).replaceWith(i);var n=new a({index:0,max:e.max||8,total:e.total||0});var r=new s({model:n,el:i,template:e.tmpl,text:this.config.text});var o=this;n.on("change",function(t){r.render();if(n.hasChanged("index")){o.fire("go",{from:n.previousAttributes().index,index:n.get("index")})}o.fire("change",{from:n.previousAttributes().index,index:n.get("index"),model:n.toJSON()})});this._.model=n;this._.view=r;this.go(e.index||0,e.silent)});i.extend({go:function t(e,i){if(e<this.config.total&&e>=0){this._.model.set({index:e})}},next:function t(e){var i=(this._.model.get("index")+e+this.config.total*10)%this.config.total;this.go(i);this.fire("next",{step:e,from:this._.model.get("index"),index:i})},set:function t(e,i){this.setConfig(e);this._.model.set(e,i);this.fire("config",{config:e})},render:function t(){this._.view.render()}});return i}.call(this);
//# sourceMappingURL=../../../../__sources__/common/js/assets/pager/pager_ff6634f6.js.map
