/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-04

	http://www.uize.com/reference/Uize.Widget.Drag.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Drag',required:['Uize.Node','Uize.Node.Event'],builder:function(c_a){var c_b,c_c=true,c_d=false,c_e=Uize.Node,c_f=c_e.getEventAbsPos,c_g=c_e.isIe;var c_h,c_i=c_d,c_j=c_d;if(typeof navigator!='undefined'){var c_k=c_e.ieMajorVersion;c_i=c_g&&c_k<9;c_j=(!c_g||c_k>6)&&navigator.userAgent.indexOf('Firefox/2')<0;}var c_l=c_a.subclass(function(){var c_m=this;c_m.eventStartPos=c_m.c_n=[0,0];c_m.eventPos=c_m.c_o=[0,0];c_m.c_p=[0,0];c_m.c_q=c_m.c_r=0;c_m.eventDeltaPos=c_m.c_s=[0,0];}),c_t=c_l.prototype;c_t.c_u=function(){this.c_v=null;this.fire('Drag Rest');};c_t.c_w=function(){this.c_v&&clearTimeout(this.c_v);this.c_v=null;};c_t.c_x=function(){var c_m=this;if(c_m.isWired){var c_y=c_m.getNode();c_m.c_z?c_e.setStyle(c_m.c_A?[c_y,c_h]:c_y,{cursor:c_m.get('enabledInherited')?c_m.c_z:'not-allowed'}):c_m.set({c_z:c_e.getStyle(c_y,'cursor')});}};c_t.initiate=c_t.mousedown=function(c_B,c_C){var c_m=this,c_n=c_m.c_n,c_o=c_m.c_o,c_p=c_m.c_p;function c_D(c_B){if(c_m.c_A){if(c_m.c_E){c_m.c_E.stop();
c_m.c_E=c_b;}c_F=c_c;if(c_m.c_v){c_m.c_w();c_m.c_u();}c_m.set({c_G:c_d,c_A:c_d,c_H:c_d,c_I:c_d});c_m.fire({name:'Drag Done',domEvent:c_B});c_m.set({c_J:c_d,c_K:c_d});if(c_I){c_m.unwireNode(c_C?'':c_B.target,{touchmove:null,touchend:null,touchcancel:null});}}}function c_L(c_M,c_N,c_O,c_P){c_m.set(c_M,c_c);(c_m.c_E=Uize.Fade.fade(c_Q,[c_o[0],c_o[1]],c_N,c_O,c_P)).wire('Done',function(){c_D(c_B)});}function c_R(c_B){if(c_m.c_S&&Uize.Fade&&Uize.Fade.fade){var c_T=c_o[0]-c_p[0],c_U=c_o[1]-c_p[1];if(c_T||c_U){var c_V=Math.sqrt(Math.pow(c_T,2)+Math.pow(c_U,2)),c_W=c_m.c_S(c_V/((c_m.c_q-c_m.c_r)||1)*1000),c_X=1+(c_W.distance/c_V);c_L('inReleaseTravel',[c_p[0]+c_T*c_X,c_p[1]+c_U*c_X],c_W.duration*1000,{curve:c_W.curve});return;}}c_D(c_B);}function c_Q(c_Y,c_Z){c_m.c_r=c_m.c_q;c_m.c_q=Uize.now();c_p[0]=c_o[0];c_p[1]=c_o[1];var c_s=[(c_o[0]=c_Y)-c_n[0],(c_o[1]=c_Z)-c_n[1]],c_0=[Math.abs(c_s[0]),Math.abs(c_s[1])];for(var c_1= -1;++c_1<2;)c_m.c_s[c_1]=(c_m.c_2=='both'||c_0[c_1]>c_0[1-c_1]||(c_0[c_1]==c_0[1-c_1]&&c_1==1))
?c_s[c_1]:0;c_m.fire('Drag Update');c_m.c_w();c_m.c_v=setTimeout(function(){c_m.c_u()},c_m.c_3);}function c_4(c_B){if(!c_F&& !c_m.c_J){if(!c_m.c_K){if(!c_I){c_l.resizeShield(c_h);c_e.display(c_h);}c_m.set({c_K:c_c});c_m.fire({name:'Drag Start',domEvent:c_B});}var c_5=c_f(c_B);c_Q(c_5.left,c_5.top);}}function c_6(c_B){c_m.set({c_J:c_c});if(c_m.c_7&&Uize.Fade&&Uize.Fade.fade){c_L('inCancel',c_n,500,c_m.c_7);}else{c_Q(c_n[0],c_n[1]);c_D(c_B);}}if(c_m.c_G||c_m.c_H)c_D(c_B);if(!c_m.c_A&&c_m.get('enabledInherited')){var c_I= !!c_B.targetTouches;c_m.set({c_A:c_c,c_I:c_I});c_m.c_x();Uize.Node.Event.abort(c_B);c_m.c_2=c_B.shiftKey?'one':'both';c_m.fire({name:'Before Drag Start',domEvent:c_B});var c_5=c_f(c_B);c_n[0]=c_o[0]=c_p[0]=c_5.left;c_n[1]=c_o[1]=c_p[1]=c_5.top;c_m.c_q=c_m.c_r=Uize.now();var c_F=c_d,c_8;if(!c_I)c_8={onkeyup:document.onkeyup,onmousemove:document.onmousemove,onmouseup:document.onmouseup};if(c_I){c_m.wireNode(c_C?'':c_B.target,{touchmove:function(c_B){c_B.preventDefault();c_4(c_B);},
touchend:function(c_B){c_B.preventDefault();c_R(c_B);},touchcancel:function(c_B){c_B.preventDefault();c_6(c_B);}});}else{function c_9(c_B){Uize.copyInto(document,c_8);c_e.display(c_h,c_d);c_m.c_J||c_R(c_B);}document.onmousemove=function(c_B){c_B||(c_B=window.event);c_i&&c_B.button==0?c_m.c_A&&c_9(c_B):c_4(c_B);return c_d;};document.onmouseup=function(c_B){c_9(c_B||window.event);return c_d;};document.onkeyup=function(c_B){Uize.Node.Event.isKeyEscape(c_B)&&c_m.c_A&&c_6(c_B);};}}return c_d;};c_t.updateUi=function(){var c_m=this;c_m.isWired&& !c_m.get('enabledInherited')||c_m.c_z&&c_m.c_x();};c_t.wireUi=function(){var c_m=this;if(!c_m.isWired){var c_ba=c_m.getNode();if(c_ba){c_ba.onmousedown=Uize.returnFalse;function c_bb(c_B){return c_m.initiate(c_B,c_c)}c_m.wireNode(c_ba,{mousedown:c_bb,touchstart:c_bb});}if(!c_h){c_h=c_l.insertShield({zIndex:50000});c_j||c_e.wire(window,'resize',function(){c_l.resizeShield(c_h)});}c_m.wire({'Changed.enabledInherited':function(){c_m.c_x()}});c_a.prototype.wireUi.call(c_m);}};
c_l.insertShield=function(c_bc){var c_bd={display:'none',position:'absolute'};if(c_g)c_bd.background='url('+c_l.getBlankImageUrl()+')';var c_be=document.createElement('div');c_e.setStyle(c_be,Uize.copyInto(c_bd,c_bc));c_be.Uize_Widget_Drag_a=c_c;document.body.appendChild(c_be);c_l.resizeShield(c_be);return c_be;};c_l.resizeShield=function(c_be){if(c_j){c_e.setStyle(c_be,{left:'0',top:'0',width:'100%',height:'100%',position:'fixed'});}else{var c_bf=c_e.getStyle(c_be,'display'),c_bg=document.documentElement,c_bh=document.body;c_e.display(c_be,c_d);c_e.setStyle(c_be,{left:0,top:0,width:c_bg.scrollWidth,height:Math.max(typeof window.innerHeight=='number'?window.innerHeight:(c_bg&&c_bg.clientHeight?c_bg.clientHeight:(c_bh&&c_bh.clientHeight?c_bh.clientHeight:0)),c_bg.scrollHeight),display:c_bf});}};c_l.registerProperties({c_bi:{name:'animation',onChange:function(){this.set({c_7:this.c_bi?{duration:500}:c_b})}},c_7:'cancelFade',c_z:{name:'cursor',onChange:c_t.c_x},c_J:'dragCancelled',c_3:{name:'dragRestTime',
value:250},c_K:'dragStarted',c_G:'inCancel',c_A:'inDrag',c_H:'inReleaseTravel',c_I:'isTouch',c_S:'releaseTravel'});return c_l;}});