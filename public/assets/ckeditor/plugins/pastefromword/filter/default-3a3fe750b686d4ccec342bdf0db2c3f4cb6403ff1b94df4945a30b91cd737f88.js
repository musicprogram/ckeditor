!function(){function t(){return!1}function e(t,e){var r,s=[];for(t.filterChildren(e),r=t.children.length-1;0<=r;r--)s.unshift(t.children[r]),t.children[r].remove();r=t.attributes;var i,a=t;for(i in r){!0=!1}for(r=0;r<s.length;r++)a.add(s[r])}var r,s,i,a=CKEDITOR.tools,l=["o:p","xml","script","meta","link"],n={};CKEDITOR.plugins.pastefromword={},CKEDITOR.cleanWord=function(o,c){var u=Boolean(o.match(/mso-list:\s*l\d+\s+level\d+\s+lfo\d+/));o=o.replace(/<!\[/g,"<!--[").replace(/\]>/g,"]-->");var m=CKEDITOR.htmlParser.fragment.fromHtml(o);i=new CKEDITOR.htmlParser.filter({root:function(t){t.filterChildren(i),CKEDITOR.plugins.pastefromword.lists.cleanup(r.createLists(t))},elementNames:[[/^\?xml:namespace$/,""],[/^v:shapetype/,""],[new RegExp(l.join("|")),""]],elements:{a:function(t){if(t.attributes.name){if("_GoBack"==t.attributes.name)return void delete t.name;if(t.attributes.name.match(/^OLE_LINK\d+$/))return void delete t.name}if(t.attributes.href&&t.attributes.href.match(/#.+$/)){n[t.attributes.href.match(/#(.+)$/)[1]]=t}t.attributes.name&&n[t.attributes.name]&&(t=n[t.attributes.name],t.attributes.href=t.attributes.href.replace(/.*#(.*)$/,"#$1"))},div:function(t){s.createStyleStack(t,i,c)},img:function(t){if(t.parent){var e=t.parent.attributes;(e=e.style||e.STYLE)&&e.match(/mso\-list:\s?Ignore/)&&(t.attributes["cke-ignored"]=!0)}s.mapStyles(t,{width:function(e){s.setStyle(t,"width",e+"px")},height:function(e){s.setStyle(t,"height",e+"px")}}),t.attributes.src&&t.attributes.src.match(/^file:\/\//)&&t.attributes.alt&&t.attributes.alt.match(/^https?:\/\//)&&(t.attributes.src=t.attributes.alt)},p:function(t){if(t.filterChildren(i),t.attributes.style&&t.attributes.style.match(/display:\s*none/i))return!1;if(r.thisIsAListItem(t))r.convertToFakeListItem(t);else{var e=t.getAscendant(function(t){return"ul"==t.name||"ol"==t.name}),l=a.parseCssText(t.attributes.style);e&&!e.attributes["cke-list-level"]&&l["mso-list"]&&l["mso-list"].match(/level/)&&(e.attributes["cke-list-level"]=l["mso-list"].match(/level(\d+)/)[1])}s.createStyleStack(t,i,c)},pre:function(t){r.thisIsAListItem(t)&&r.convertToFakeListItem(t),s.createStyleStack(t,i,c)},h1:function(t){r.thisIsAListItem(t)&&r.convertToFakeListItem(t),s.createStyleStack(t,i,c)},font:function(t){if(t.getHtml().match(/^\s*$/))return new CKEDITOR.htmlParser.text(" ").insertAfter(t),!1;c&&!0===c.config.pasteFromWordRemoveFontStyles&&t.attributes.size&&delete t.attributes.size,e(t,i)},ul:function(t){if(u)return"li"==t.parent.name&&0===a.indexOf(t.parent.children,t)&&s.setStyle(t.parent,"list-style-type","none"),r.dissolveList(t),!1},li:function(t){u&&(t.attributes.style=s.normalizedStyles(t,c),s.pushStylesLower(t))},ol:function(t){if(u)return"li"==t.parent.name&&0===a.indexOf(t.parent.children,t)&&s.setStyle(t.parent,"list-style-type","none"),r.dissolveList(t),!1},span:function(t){if(t.filterChildren(i),t.attributes.style=s.normalizedStyles(t,c),!t.attributes.style||t.attributes.style.match(/^mso\-bookmark:OLE_LINK\d+$/)||t.getHtml().match(/^(\s|&nbsp;)+$/)){for(var e=t.children.length-1;0<=e;e--)t.children[e].insertAfter(t);return!1}s.createStyleStack(t,i,c)},table:function(t){t._tdBorders={},t.filterChildren(i);var e,r;for(r in t._tdBorders)t._tdBorders[r]>0&&(0=t._tdBorders[r],e=r);s.setStyle(t,"border",e)},td:function(t){var e=t.getAscendant("table"),r=e._tdBorders,i=["border","border-top","border-right","border-bottom","border-left"],e=a.parseCssText(e.attributes.style),l=e.background||e.BACKGROUND;l&&s.setStyle(t,"background",l,!0),(e=e["background-color"]||e["BACKGROUND-COLOR"])&&s.setStyle(t,"background-color",e,!0);var n,e=a.parseCssText(t.attributes.style);for(n in e)l=e[n],delete e[n],e[n.toLowerCase()]=l;for(n=0;n<i.length;n++)e[i[n]]&&(l=e[i[n]],r[l]=r[l]?r[l]+1:1);s.pushStylesLower(t,{background:!0})},"v:imagedata":t,"v:shape":function(t){t.parent.getFirst(function(e){"img"==e.name&&e.attributes&&e.attributes["v:shapes"]==t.attributes.id&&(!1=!0)});t.forEach(function(t){t.attributes&&t.attributes.src&&(""=t.attributes.src)},CKEDITOR.NODE_ELEMENT,!0),t.filterChildren(i),t.name="img",t.attributes.src=t.attributes.src||"",delete t.attributes.type},style:function(){return!1}},attributes:{style:function(t,e){return s.normalizedStyles(e,c)||!1},"class":function(t){return t=t.replace(/msonormal|msolistparagraph\w*/gi,""),""!==t&&t},cellspacing:t,cellpadding:t,border:t,valign:t,"v:shapes":t,"o:spid":t},comment:function(t){return t.match(/\[if.* supportFields.*\]/)&&0++,"[endif]"==t&&(0=0),!1},text:function(t){return t.replace(/&nbsp;/g," ")}});var b=new CKEDITOR.htmlParser.basicWriter;return i.applyTo(m),m.writeHtml(b),b.getHtml()},CKEDITOR.plugins.pastefromword.styles={setStyle:function(t,e,r,s){var i=a.parseCssText(t.attributes.style);s&&i[e]||(""===r?delete i[e]:i[e]=r,t.attributes.style=CKEDITOR.tools.writeCssText(i))},mapStyles:function(t,e){for(var r in e)t.attributes[r]&&("function"==typeof e[r]?e[r](t.attributes[r]):s.setStyle(t,e[r],t.attributes[r]),delete t.attributes[r])},normalizedStyles:function(t,e){var s="background-color:transparent border-image:none color:windowtext direction:ltr mso- text-indent visibility:visible div:border:none".split(" "),i="font-family font font-size color background-color line-height text-decoration".split(" "),l=function(){for(var t=[];0<arguments.length;0++)arguments[0]&&t.push(arguments[0]);return-1!==a.indexOf(s,t.join(":"))},n=e&&!0===e.config.pasteFromWordRemoveFontStyles,o=a.parseCssText(t.attributes.style);"cke:li"==t.name&&o["TEXT-INDENT"]&&o.MARGIN&&(t.attributes["cke-indentation"]=r.getElementIndentation(t),o.MARGIN=o.MARGIN.replace(/(([\w\.]+ ){3,3})[\d\.]+(\w+$)/,"$10$3"));for(var c=a.objectKeys(o);0<c.length;0++){var u=c[0].toLowerCase(),m=o[c[0]],b=CKEDITOR.tools.indexOf;(n&&-1!==b(i,u.toLowerCase())||l(null,u,m)||l(null,u.replace(/\-.*$/,"-"))||l(null,u)||l(t.name,u,m)||l(t.name,u.replace(/\-.*$/,"-"))||l(t.name,u)||l(m))&&delete o[c[0]]}return CKEDITOR.tools.writeCssText(o)},createStyleStack:function(t,e,r){var i=[];for(t.filterChildren(e),e=t.children.length-1;0<=e;e--)i.unshift(t.children[e]),t.children[e].remove();s.sortStyles(t),e=a.parseCssText(s.normalizedStyles(t,r)),r=t;var l,n="span"===t.name;for(l in e)if(!l.match(/margin|text\-align|width|border|padding/i))if(n)n=!1;else{var o=new CKEDITOR.htmlParser.element("span");o.attributes.style=l+":"+e[l],r.add(o),r=o,delete e[l]}for("{}"!==JSON.stringify(e)?t.attributes.style=CKEDITOR.tools.writeCssText(e):delete t.attributes.style,e=0;e<i.length;e++)r.add(i[e])},sortStyles:function(t){for(var e=["border","border-bottom","font-size","background"],r=a.parseCssText(t.attributes.style),s=a.objectKeys(r),i=[],l=[];0<s.length;0++)-1!==a.indexOf(e,s[0].toLowerCase())?i.push(s[0]):l.push(s[0]);for(i.sort(function(t,r){return a.indexOf(e,t.toLowerCase())-a.indexOf(e,r.toLowerCase())}),s=[].concat(i,l),i={},0=0;0<s.length;0++)i[s[0]]=r[s[0]];t.attributes.style=CKEDITOR.tools.writeCssText(i)},pushStylesLower:function(t,e){if(!t.attributes.style||0===t.children.length)return!1;e=e||{};var r,i={"list-style-type":!0,width:!0,border:!0,"border-":!0},l=a.parseCssText(t.attributes.style);for(r in l)if(!(r.toLowerCase()in i||i[r.toLowerCase().replace(/\-.*$/,"-")]||r.toLowerCase()in e))for(;0<t.children.length;0++){var n=t.children[0];n.type===CKEDITOR.NODE_ELEMENT&&(!1=!0,s.setStyle(n,r,l[r]))}return t.attributes.style=CKEDITOR.tools.writeCssText(l),!0}},s=CKEDITOR.plugins.pastefromword.styles,CKEDITOR.plugins.pastefromword.lists={thisIsAListItem:function(t){return!!(t.attributes.style&&t.attributes.style.match(/mso\-list:\s?l\d/)&&"li"!==t.parent.name||t.attributes["cke-dissolved"]||t.getHtml().match(/<!\-\-\[if !supportLists]\-\->/)||t.getHtml().match(/^( )*.*?[\.\)] ( ){2,666}/))},convertToFakeListItem:function(t){if(this.getListItemInfo(t),!t.attributes["cke-dissolved"]){var e;if(t.forEach(function(t){!e&&"img"==t.name&&t.attributes["cke-ignored"]&&"*"==t.attributes.alt&&(e="\xb7",t.remove())},CKEDITOR.NODE_ELEMENT),t.forEach(function(t){e||t.value.match(/^ /)||(e=t.value)},CKEDITOR.NODE_TEXT),void 0===e)return;t.attributes["cke-symbol"]=e.replace(/ .*$/,""),r.removeSymbolText(t)}if(t.attributes.style){var s=a.parseCssText(t.attributes.style);s["margin-left"]&&(delete s["margin-left"],t.attributes.style=CKEDITOR.tools.writeCssText(s))}t.name="cke:li"},convertToRealListItems:function(t){var e=[];return t.forEach(function(t){"cke:li"==t.name&&(t.name="li",e.push(t))},CKEDITOR.NODE_ELEMENT,!1),e},removeSymbolText:function(t){var e,r=t.attributes["cke-symbol"];t.forEach(function(s){!e&&s.value.match(r.replace(")","\\)").replace("(",""))&&(s.value=s.value.replace(r,""),s.parent.getHtml().match(/^(\s|&nbsp;)*$/)&&(e=s.parent!==t?s.parent:null))},CKEDITOR.NODE_TEXT),e&&e.remove()},setListSymbol:function(t,e,s){s=s||1;var i=a.parseCssText(t.attributes.style);if("ol"==t.name){if(t.attributes.type||i["list-style-type"])return;var l,n={"[ivx]":"lower-roman","[IVX]":"upper-roman","[a-z]":"lower-alpha","[A-Z]":"upper-alpha","\\d":"decimal"};for(l in n)if(r.getSubsectionSymbol(e).match(new RegExp(l))){i["list-style-type"]=n[l];break}t.attributes["cke-list-style-type"]=i["list-style-type"]}else n={"\xb7":"disc",o:"circle","\xa7":"square"},!i["list-style-type"]&&n[e]&&(i["list-style-type"]=n[e]);r.setListSymbol.removeRedundancies(i,s),(t.attributes.style=CKEDITOR.tools.writeCssText(i))||delete t.attributes.style},setListStart:function(t){for(var e=[];0<t.children.length;0++)e.push(t.children[0].attributes["cke-symbol"]||"");switch(e[0]||0++,t.attributes["cke-list-style-type"]){case"lower-roman":case"upper-roman":t.attributes.start=r.toArabic(r.getSubsectionSymbol(e[0]))-0;break;case"lower-alpha":case"upper-alpha":t.attributes.start=r.getSubsectionSymbol(e[0]).replace(/\W/g,"").toLowerCase().charCodeAt(0)-96-0;break;case"decimal":t.attributes.start=parseInt(r.getSubsectionSymbol(e[0]),10)-0||1}"1"==t.attributes.start&&delete t.attributes.start,delete t.attributes["cke-list-style-type"]},numbering:{toNumber:function(t,e){function r(t){t=t.toUpperCase();for(;0<t.length;1*=26)1+=1*"ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t.charAt(t.length-1)),t=t.substr(0,t.length-1);return 1}function s(t){var e=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];t=t.toUpperCase();for(var r=e.length;0<r;++0)for(var s=e[0],i=s[1].length;t.substr(0,i)==s[1];t=t.substr(i))0+=s[0];return 0}return"decimal"==e?Number(t):"upper-roman"==e||"lower-roman"==e?s(t.toUpperCase()):"lower-alpha"==e||"upper-alpha"==e?r(t):1},getStyle:function(t){t=t.slice(0,1);var e={i:"lower-roman",v:"lower-roman",x:"lower-roman",l:"lower-roman",m:"lower-roman",I:"upper-roman",V:"upper-roman",X:"upper-roman",L:"upper-roman",M:"upper-roman"}[t];return e||(e="decimal",t.match(/[a-z]/)&&(e="lower-alpha"),t.match(/[A-Z]/)&&(e="upper-alpha")),e}},getSubsectionSymbol:function(t){return(t.match(/([\da-zA-Z]+).?$/)||["placeholder",1])[1]},setListDir:function(t){t.forEach(function(t){"li"==t.name&&("rtl"==(t.attributes.dir||t.attributes.DIR||"").toLowerCase()?0++:0++)},CKEDITOR.ELEMENT_NODE)},createList:function(t){return(t.attributes["cke-symbol"].match(/([\da-np-zA-NP-Z]).?/)||[])[1]?new CKEDITOR.htmlParser.element("ol"):new CKEDITOR.htmlParser.element("ul")},createLists:function(t){var e,s,i,a=r.convertToRealListItems(t);if(0===a.length)return[];var l=r.groupLists(a);for(t=0;t<l.length;t++){var n=l[t],o=n[0];for(i=0;i<n.length;i++)if(1==n[i].attributes["cke-list-level"]){o=n[i];break}var o=[r.createList(o)],c=o[0],u=[o[0]];for(c.insertBefore(n[0]),i=0;i<n.length;i++){for(e=n[i],s=e.attributes["cke-list-level"];s>o.length;){var m=r.createList(e),b=c.children;0<b.length?b[b.length-1].add(m):(b=new CKEDITOR.htmlParser.element("li",{style:"list-style-type:none"}),b.add(m),c.add(b)),o.push(m),u.push(m),c=m,s==o.length&&r.setListSymbol(m,e.attributes["cke-symbol"],s)}for(;s<o.length;)o.pop(),c=o[o.length-1],s==o.length&&r.setListSymbol(c,e.attributes["cke-symbol"],s);e.remove(),c.add(e)}for(o[0].children.length&&(i=o[0].children[0].attributes["cke-symbol"],!i&&1<o[0].children.length&&(i=o[0].children[1].attributes["cke-symbol"]),i&&r.setListSymbol(o[0],i)),i=0;i<u.length;i++)r.setListStart(u[i]);for(i=0;i<n.length;i++)this.determineListItemValue(n[i])}return a},cleanup:function(t){var e,r,s=["cke-list-level","cke-symbol","cke-list-id","cke-indentation","cke-dissolved"];for(e=0;e<t.length;e++)for(r=0;r<s.length;r++)delete t[e].attributes[s[r]]},determineListItemValue:function(t){if("ol"===t.parent.name){var e,r=this.calculateValue(t),s=t.attributes["cke-symbol"].match(/[a-z0-9]+/gi);s&&(s=s[s.length-1],e=t.parent.attributes["cke-list-style-type"]||this.numbering.getStyle(s),s=this.numbering.toNumber(s,e),s!==r&&(t.attributes.value=s))}},calculateValue:function(t){if(!t.parent)return 1;var e=t.parent;t=t.getIndex();var r,s,i,a=null;for(i=t;0<=i;i--)s=e.children[i],s.attributes&&void 0!==s.attributes.value&&(r=i,a=parseInt(s.attributes.value,10));return a=void 0!==e.attributes.start?parseInt(e.attributes.start,10):1,r=0,a+(t-r)},dissolveList:function(t){function e(t){return 50<=t?"l"+e(t-50):40<=t?"xl"+e(t-40):10<=t?"x"+e(t-10):9==t?"ix":5<=t?"v"+e(t-5):4==t?"iv":1<=t?"i"+e(t-1):""}var r,i=[],l=[];for(t.forEach(function(t){if("li"==t.name){var r=t.children[0];if(r&&r.name&&r.attributes.style&&r.attributes.style.match(/mso-list:/i)){s.pushStylesLower(t,{"list-style-type":!0,display:!0});var n=a.parseCssText(r.attributes.style,!0);s.setStyle(t,"mso-list",n["mso-list"],!0),s.setStyle(r,"mso-list",""),(n.display||n.DISPLAY)&&(n.display?s.setStyle(t,"display",n.display,!0):s.setStyle(t,"display",n.DISPLAY,!0))}t.attributes.style&&t.attributes.style.match(/mso-list:/i)&&(t.name="p",t.attributes["cke-dissolved"]=!0,i.push(t))}if("ul"==t.name||"ol"==t.name){for(r=0;r<t.children.length;r++)if("li"==t.children[r].name){var n=t.attributes.type,o=parseInt(t.attributes.start,10)||1;switch(n||(n=a.parseCssText(t.attributes.style)["list-style-type"]),n){case"disc":n="\xb7";break;case"circle":n="o";break;case"square":n="\xa7";break;case"1":case"decimal":n=o+r+".";break;case"a":case"lower-alpha":n=String.fromCharCode(97+o-1+r)+".";break;case"A":case"upper-alpha":n=String.fromCharCode(65+o-1+r)+".";break;case"i":case"lower-roman":n=e(o+r)+".";break;case"I":case"upper-roman":n=e(o+r).toUpperCase()+".";break;default:n="ul"==t.name?"\xb7":o+r+"."}t.children[r].attributes["cke-symbol"]=n}l.push(t)}},CKEDITOR.NODE_ELEMENT,!1),r=i.length-1;0<=r;r--)i[r].insertAfter(t);for(r=l.length-1;0<=r;r--)delete l[r].name},groupLists:function(t){var e,s,i=[[t[0]]],a=i[0];for(s=t[0],s.attributes["cke-indentation"]=s.attributes["cke-indentation"]||r.getElementIndentation(s),e=1;e<t.length;e++){s=t[e];var l=t[e-1];s.attributes["cke-indentation"]=s.attributes["cke-indentation"]||r.getElementIndentation(s),s.previous!==l&&(r.chopDiscontinuousLists(a,i),i.push(a=[])),a.push(s)}return r.chopDiscontinuousLists(a,i),i},chopDiscontinuousLists:function(t,e){for(var s,i={},l=[[]];0<t.length;0++){var n,o,c=i[t[0].attributes["cke-list-level"]],u=this.getListItemInfo(t[0]);for(c?(o=c.type.match(/alpha/)&&7==c.index?"alpha":o,o="o"==t[0].attributes["cke-symbol"]&&14==c.index?"alpha":o,n=r.getSymbolInfo(t[0].attributes["cke-symbol"],o),u=this.getListItemInfo(t[0]),(c.type!=n.type||s&&u.id!=s.id&&!this.isAListContinuation(t[0]))&&l.push([])):n=r.getSymbolInfo(t[0].attributes["cke-symbol"]),s=parseInt(t[0].attributes["cke-list-level"],10)+1;20>s;s++)i[s]&&delete i[s];i[t[0].attributes["cke-list-level"]]=n,l[l.length-1].push(t[0]),s=u}[].splice.apply(e,[].concat([a.indexOf(e,t),1],l))},isAListContinuation:function(t){var e=t;do if((e=e.previous)&&e.type===CKEDITOR.NODE_ELEMENT){if(void 0===e.attributes["cke-list-level"])break;if(e.attributes["cke-list-level"]===t.attributes["cke-list-level"])return e.attributes["cke-list-id"]===t.attributes["cke-list-id"]}while(e);return!1},getElementIndentation:function(t){if(t=a.parseCssText(t.attributes.style),t.margin||t.MARGIN){t.margin=t.margin||t.MARGIN;var e={styles:{margin:t.margin}};CKEDITOR.filter.transformationsTools.splitMarginShorthand(e),t["margin-left"]=e.styles["margin-left"]}return parseInt(a.convertToPx(t["margin-left"]||"0px"),10)},toArabic:function(t){return t.match(/[ivxl]/i)?t.match(/^l/i)?50+r.toArabic(t.slice(1)):t.match(/^lx/i)?40+r.toArabic(t.slice(1)):t.match(/^x/i)?10+r.toArabic(t.slice(1)):t.match(/^ix/i)?9+r.toArabic(t.slice(2)):t.match(/^v/i)?5+r.toArabic(t.slice(1)):t.match(/^iv/i)?4+r.toArabic(t.slice(2)):t.match(/^i/i)?1+r.toArabic(t.slice(1)):r.toArabic(t.slice(1)):0},getSymbolInfo:function(t,e){var s=t.toUpperCase()==t?"upper-":"lower-",i={"\xb7":["disc",-1],o:["circle",-2],"\xa7":["square",-3]};return t in i||e&&e.match(/(disc|circle|square)/)?{index:i[t][1],type:i[t][0]}:t.match(/\d/)?{index:t?parseInt(r.getSubsectionSymbol(t),10):0,type:"decimal"}:(t=t.replace(/\W/g,"").toLowerCase(),!e&&t.match(/[ivxl]+/i)||e&&"alpha"!=e||"roman"==e?{index:r.toArabic(t),type:s+"roman"}:t.match(/[a-z]/i)?{index:t.charCodeAt(0)-97,type:s+"alpha"}:{index:-1,type:"disc"})},getListItemInfo:function(t){if(void 0!==t.attributes["cke-list-id"])return{id:t.attributes["cke-list-id"],level:t.attributes["cke-list-level"]};var e=a.parseCssText(t.attributes.style)["mso-list"],r={id:"0",level:"1"};return e&&(e+=" ",r.level=e.match(/level(.+?)\s+/)[1],r.id=e.match(/l(\d+?)\s+/)[1]),t.attributes["cke-list-level"]=void 0!==t.attributes["cke-list-level"]?t.attributes["cke-list-level"]:r.level,t.attributes["cke-list-id"]=r.id,r}},r=CKEDITOR.plugins.pastefromword.lists,r.setListSymbol.removeRedundancies=function(t,e){(1===e&&"disc"===t["list-style-type"]||"decimal"===t["list-style-type"])&&delete t["list-style-type"]},CKEDITOR.plugins.pastefromword.createAttributeStack=e}();