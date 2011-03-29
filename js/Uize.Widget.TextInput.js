/*
	UIZE JAVASCRIPT FRAMEWORK 2011-02-20

	http://www.uize.com/reference/Uize.Widget.TextInput.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.TextInput',required:['Uize.Node','Uize.Node.Event','Uize.Tooltip'],builder:function(c_a){var c_b=true,c_c=false,c_d=null,c_e;var c_f=c_a.subclass(),c_g=c_f.prototype;c_g.validate=c_g.c_h=function(){var c_i=this,c_j=c_i.c_j,c_k=c_i+'',c_l=c_k.length,c_m=c_l>=c_i.c_n&&c_l<=c_i.c_o&&(c_j==c_d||(c_j instanceof RegExp?c_j.test(c_k):(Uize.isFunction(c_j)?c_j(c_k):c_k==c_j))),c_p= !c_m&&c_i.c_m==c_m;c_i.c_m!=c_m?c_i.set({c_m:c_m}):c_m?0:c_i.c_q();};c_g.c_q=function(){if(this.isWired){var c_i=this,c_r=c_i.c_s&& !c_i.c_m;c_i.setNodeProperties([c_i.c_t,'label'],{className:c_r?'error':'good'});c_i.setNodeStyle('warningIcon',{display:c_r?'inline':'none'});}};c_g.blur=function(){this.c_t&&this.c_t.blur()};c_g.focus=function(){this.c_t&&this.c_t.focus()};c_g.selectWarningMessage=function(){return this.c_u()};c_g.updateUi=function(){var c_i=this,c_t=c_i.c_t;if(c_i.isWired&&c_t){c_t.disabled= !c_i.get('enabled');if(c_t.value!=c_i.c_k)c_t.value=c_i.c_k;}(c_i.c_v^c_i.c_w)||c_i.c_h();};
c_g.wireUi=function(){var c_i=this;if(!c_i.isWired){c_i.c_t=c_i.getNode('input');if(c_i.c_t){c_i.c_x=c_i.c_t.tagName=='INPUT';c_i.wireNode(c_i.c_t,{keydown:function(c_y){if(c_i.c_x&&Uize.Node.Event.isKeyEnter(c_y)&&c_i.fire({name:'Ok',domEvent:c_y}).cancelSubmit){var c_z=c_i.c_t.form;if(c_z){c_i.c_A=c_z.onsubmit;c_i.c_B=c_b;c_z.onsubmit=Uize.Node.returnFalse;}}},keypress:function(c_y){c_i.c_C=c_i.fire({name:'Key Press',domEvent:c_y}).abort&&Uize.Node.Event.abort(c_y);},keyup:function(c_y){if(c_i.c_C){c_i.c_C=c_c;}else{if(c_i.c_B){c_i.c_t.form.onsubmit=c_i.c_A;c_i.c_A=c_i.c_B=c_e;}Uize.Node.Event.isKeyEscape(c_y)&&c_i.fire({name:'Cancel',domEvent:c_y});c_i.set({c_k:c_i.c_t.value});c_i.updateUi();c_i.c_D&&c_i.set({showWarning:c_b});}c_i.fire({name:'Key Up',domEvent:c_y});},blur:function(){c_i.c_E&&c_i.setNodeProperties(c_i.c_t,{className:c_i.c_t.className.replace(c_i.c_F,c_i.c_E)});c_i.c_w=c_b;c_i.c_v&&c_i.c_k==c_i.c_t.value?c_i.c_h():c_i.set({c_k:c_i.c_t.value});c_i.set({c_G:c_c});c_i.fire('Blur');c_i.c_w=c_c;
},focus:function(){c_i.c_F&&c_i.setNodeProperties(c_i.c_t,{className:c_i.c_t.className.replace(c_i.c_E,c_i.c_F)});c_i.c_t.value&&c_i.set({c_k:c_i.c_t.value});c_i.set({c_G:c_b});c_i.fire('Focus');}});}c_i.wireNode('warningIcon',{mouseover:function(){Uize.Node.setInnerHtml(c_i.c_H,c_i.c_u());Uize.Tooltip.showTooltip(c_i.c_H,c_b);},mouseout:function(){Uize.Tooltip.hideTooltip(c_i.c_H)}});c_a.prototype.wireUi.call(c_i);}};c_f.registerProperties({c_E:{name:'blurClass',value:''},c_D:{name:'deferUiWarning',value:c_c},c_F:{name:'focusClass',value:''},c_G:{name:'inFocus',value:c_c},c_m:{name:'isValid',onChange:function(){this.c_q()},value:c_c},c_o:{name:'maxLength',value:Infinity},c_n:{name:'minLength',value:0},c_u:{name:'selectWarningMessage'},c_s:{name:'showWarning',onChange:function(){this.c_q()},value:c_c},c_H:'tooltip',c_v:{name:'validateOnExit',value:c_c},c_j:{name:'validator',value:null},c_k:{name:'value',conformer:function(c_k){c_k+='';var c_i=this,c_o=c_i.c_o;if(c_i.c_I=='LAN'&&/[^a-z0-9]/.test(c_k))
c_k=c_k.toLowerCase().replace(/[^a-z0-9]/g,'');if(c_k.length>c_o)c_k=c_k.slice(0,c_o);return c_k;},onChange:c_g.updateUi,value:''},c_J:{name:'warningMessages',value:c_d},c_I:'filterType'});return c_f;}});