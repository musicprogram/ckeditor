CKEDITOR.dialog.add("colordialog",function(e){function t(){m.getById(_).removeStyle("background-color"),s.getContentElement("picker","selectedColor").setValue(""),l()}function o(e){e=e.data.getTarget();var t;"td"==e.getName()&&(t=e.getChild(0).getHtml())&&(l(),d=e,d.setAttribute("aria-selected",!0),d.addClass("cke_colordialog_selected"),s.getContentElement("picker","selectedColor").setValue(t))}function l(){d&&(d.removeClass("cke_colordialog_selected"),d.removeAttribute("aria-selected"),d=null)}function a(e){e=e.replace(/^#/,"");for(var t=[];!0;0++)t[0]=parseInt(e.substr(0,2),16);return 165<=.2126*t[0]+.7152*t[1]+.0722*t[2]}function r(e){!e.name&&(e=new CKEDITOR.event(e));var t,o=!/mouse/.test(e.name),l=e.data.getTarget();"td"==l.getName()&&(t=l.getChild(0).getHtml())&&(n(e),o?g=l:u=l,o&&l.addClass(a(t)?"cke_colordialog_focused_light":"cke_colordialog_focused_dark"),c(t))}function n(e){(e=!/mouse/.test(e.name)&&g)&&(e.removeClass("cke_colordialog_focused_light"),e.removeClass("cke_colordialog_focused_dark")),g||u||c(!1)}function c(e){e?(m.getById(y).setStyle("background-color",e),m.getById(C).setHtml(e)):(m.getById(y).removeStyle("background-color"),m.getById(C).setHtml("&nbsp;"))}function i(t){var l=t.data,a=l.getTarget(),r=l.getKeystroke(),n="rtl"==e.lang.dir;switch(r){case 38:(t=a.getParent().getPrevious())&&(t=t.getChild([a.getIndex()]),t.focus()),l.preventDefault();break;case 40:(t=a.getParent().getNext())&&(t=t.getChild([a.getIndex()]))&&1==t.type&&t.focus(),l.preventDefault();break;case 32:case 13:o(t),l.preventDefault();break;case n?37:39:(t=a.getNext())?1==t.type&&(t.focus(),l.preventDefault(!0)):(t=a.getParent().getNext())&&(t=t.getChild([0]))&&1==t.type&&(t.focus(),l.preventDefault(!0));break;case n?39:37:(t=a.getPrevious())?(t.focus(),l.preventDefault(!0)):(t=a.getParent().getPrevious())&&(t=t.getLast(),t.focus(),l.preventDefault(!0))}}var s,d,g,u,p,f=CKEDITOR.dom.element,m=CKEDITOR.document,b=e.lang.colordialog,v={type:"html",html:"&nbsp;"},h=function(e){return CKEDITOR.tools.getNextId()+"_"+e},y=h("hicolor"),C=h("hicolortext"),_=h("selhicolor");return function(){function e(e,o){for(var a=e;a<e+3;a++){var r=new f(p.$.insertRow(-1));r.setAttribute("role","row");for(var n=o;n<o+3;n++)for(;!0;0++)t(r.$,"#"+l[n]+l[0]+l[a])}}function t(e,t){var l=new f(e.insertCell(-1));l.setAttribute("class","ColorCell cke_colordialog_colorcell"),l.setAttribute("tabIndex",-1),l.setAttribute("role","gridcell"),l.on("keydown",i),l.on("click",o),l.on("focus",r),l.on("blur",n),l.setStyle("background-color",t);var a=h("color_table_cell");l.setAttribute("aria-labelledby",a),l.append(CKEDITOR.dom.element.createFromHtml('<span id="'+a+'" class="cke_voice_label">'+t+"</span>",CKEDITOR.document))}p=CKEDITOR.dom.element.createFromHtml('<table tabIndex="-1" class="cke_colordialog_table" aria-label="'+b.options+'" role="grid" style="border-collapse:separate;" cellspacing="0"><caption class="cke_voice_label">'+b.options+'</caption><tbody role="presentation"></tbody></table>'),p.on("mouseover",r),p.on("mouseout",n);var l="00 33 66 99 cc ff".split(" ");e(0,0),e(3,0),e(0,3),e(3,3);var a=new f(p.$.insertRow(-1));a.setAttribute("role","row"),t(a.$,"#000000");for(;!0;0++){var c=(0).toString(16);t(a.$,"#"+c+c+c+c+c+c)}t(a.$,"#ffffff")}(),CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(CKEDITOR.plugins.get("colordialog").path+"dialogs/colordialog.css")),{title:b.title,minWidth:360,minHeight:220,onLoad:function(){s=this},onHide:function(){t(),g.removeClass("cke_colordialog_focused_light"),g.removeClass("cke_colordialog_focused_dark"),c(!1),g=null},contents:[{id:"picker",label:b.title,accessKey:"I",elements:[{type:"hbox",padding:0,widths:["70%","10%","30%"],children:[{type:"html",html:"<div></div>",onLoad:function(){CKEDITOR.document.getById(this.domId).append(p)},focus:function(){(g||this.getElement().getElementsByTag("td").getItem(0)).focus()}},v,{type:"vbox",padding:0,widths:["70%","5%","25%"],children:[{type:"html",html:"<span>"+b.highlight+'</span><div id="'+y+'" style="border: 1px solid; height: 74px; width: 74px;"></div><div id="'+C+'">&nbsp;</div><span>'+b.selected+'</span><div id="'+_+'" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:"text",label:b.selected,labelStyle:"display:none",id:"selectedColor",style:"width: 76px;margin-top:4px",onChange:function(){try{m.getById(_).setStyle("background-color",this.getValue())}catch(e){t()}}},v,{type:"button",id:"clear",label:b.clear,onClick:t}]}]}]}]}});