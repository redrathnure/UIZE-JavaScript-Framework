/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-04

	http://www.uize.com/reference/Uize.Widget.PopupPalette.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.PopupPalette',required:['Uize.Node','Uize.Fade','Uize.Widget.Button'],builder:function(c_a){var c_b=true,c_c=false,c_d=null,c_e=Uize.Node;var c_f=c_a.subclass(null,function(){var c_g=this;c_g.fade=Uize.Fade({duration:750,curve:Uize.Fade.celeration(0,1)});c_g.fade.wire({'Changed.value':function(){c_g.setNodeOpacity('palette',c_g.fade)},Done:function(){c_g.c_h(c_g.c_i)}});var c_j=c_g.c_j=c_g.c_k('selector',function(){c_g.toggle('shown')}),c_l;c_j.set({clickToDeselect:c_b});c_g.c_m();function c_n(c_o){var c_p=c_o.name=='Over',c_q=c_g.c_q;function c_r(){c_g.set({c_i:c_b})}if(c_p){if(c_q===c_b||c_q===0)c_r();else if(c_q>0)c_l=setTimeout(c_r,c_q);c_g.c_s()}else{clearTimeout(c_l);c_g.c_t();}}c_j.wire({Down:c_u,Over:c_n,Out:c_n});c_v[c_g.instanceId]=c_g;}),c_w=c_f.prototype,c_v={};c_w.c_m=function(){this.c_j.set({selected:this.c_i})};c_w.c_x=function(){return this.c_i&&(this.c_q!==c_c||this.c_y);};c_w.c_s=function(){this.c_x()&&this.c_z();this.fire('Over');};c_w.c_t=function(){
this.c_x()&&this.c_A();this.fire('Out');};c_w.c_k=Uize.Widget.Button.addChildButton;c_w.c_h=function(c_B){var c_g=this;c_g.displayNode('palette',c_B);c_B&&c_g.setNodeStyle('palette',{filter:''});c_g.fire({name:'Palette '+(c_B?'Shown':'Dismissed'),bubble:c_b});};c_w.c_z=function(){var c_g=this;if(c_g.c_C){clearTimeout(c_g.c_C);c_g.c_C=null;}};c_w.c_A=function(){var c_g=this;c_g.c_z();c_g.c_C=setTimeout(function(){c_g.set({c_i:c_c})},250);};c_w.kill=function(){delete c_v[this.instanceId];c_a.prototype.kill.call(this);};c_w.wireUi=function(){var c_g=this;if(!c_g.isWired){c_g.wireNode('palette',{mousedown:c_u,mouseup:function(c_o){c_g.c_D&&c_o.target!=c_g.getNode('palette')&&c_g.set({c_i:c_c});},mouseover:function(){c_g.c_s()},mouseout:function(){c_g.c_t()}});c_g.wireNode('paletteClose','click',function(){c_g.set({c_i:c_c})});if(c_g.c_E!='none'){var c_F=document.body,c_G=c_g.getNode('palette');if(c_G&&c_G.parentNode!=c_F){c_F.insertBefore(c_G,c_F.childNodes[0]);c_g.setNodeStyle(c_G,{zIndex:10000,
position:'absolute',left:'',top:'',right:'',bottom:'',width:c_g.getNodeStyle(c_G,'width')});}}c_a.prototype.wireUi.call(c_g);}};c_f.registerProperties({c_H:{name:'exclusive',value:c_b},c_y:{name:'hideWhenOut',value:c_c},c_D:{name:'hideOnClick',value:c_b},c_E:{name:'positioning',value:'none'},c_i:{name:'shown',onChange:function(){var c_g=this,c_i=c_g.c_i,c_E=c_g.c_E;c_g.c_j&&c_g.c_m();if(c_g.isWired){c_g.c_z();if(c_i){c_g.fire('Before Palette Shown');c_g.c_H&&c_I(c_g);if(c_E!='none'){var c_G=c_g.getNode('palette'),c_J=Uize.isFunction(c_E)?c_E(c_G):c_g.c_j.getNode();function c_K(c_L){c_g.showNode('palette',!c_L);c_g.displayNode('palette',c_L);}if(c_e.isNode(c_J)){c_K(c_b);c_e.setAbsPosAdjacentTo(c_G,c_J);c_K(c_c);}}}if(c_g.fade.get('duration')>0){c_i&&c_g.displayNode('palette');c_g.fade.start({startValue:c_i?0:1,endValue:c_i?1:0});}else{c_g.c_h(c_i);}}},value:c_c},c_q:{name:'showWhenOver',value:c_c}});function c_I(c_M){for(var c_N in c_v){var c_O=c_v[c_N];c_O!=c_M&&c_O.c_H&&c_O.set({c_i:c_c});}}
function c_u(){c_P=c_b}if(typeof navigator!='undefined'){var c_P=c_c,c_Q=document.onmousedown;document.onmousedown=function(c_o){if(!c_o)c_o=event;c_P?(c_P=c_c):c_I();Uize.isFunction(c_Q)&&c_Q(c_o);};}return c_f;}});