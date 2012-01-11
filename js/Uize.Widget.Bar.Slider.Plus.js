/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-10

	http://www.uize.com/reference/Uize.Widget.Bar.Slider.Plus.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Bar.Slider.Plus',required:'Uize.Widget.Button',builder:function(e_a){var e_b=true,e_c=false;var e_d=e_a.subclass(null,function(){var e_e=this;function e_f(e_g){function e_h(e_i){return Math.round(e_i*Math.pow(10,14))/Math.pow(10,14);}var e_j=e_g.domEvent,e_k=e_j.shiftKey?e_e.e_l:(e_j.ctrlKey?e_e.e_m:e_e.e_n),e_o=e_e.get('minValue'),e_p=(e_e.get('maxValue')-e_o)/e_k,e_q=e_g.source.get('name')=='stepToMin'? -1:1;e_e.set({value:(Math[e_q<0?'ceil':'floor'](e_h((e_e-e_o)/e_p))+e_q)*e_p+e_o});}e_e.e_r('setToMin',function(){e_e.set({value:e_e.get('minValue')})});e_e.e_r('setToMax',function(){e_e.set({value:e_e.get('maxValue')})});e_e.e_r('stepToMin',e_f);e_e.e_r('stepToMax',e_f);e_e.wire('Changed.value',function(){e_e.e_s()});e_e.e_s();}),e_t=e_d.prototype;e_t.e_r=Uize.Widget.Button.addChildButton;e_t.e_s=function(){var e_e=this,e_u=e_e.children,e_i= +e_e,e_v=e_i!=e_e.get('minValue')?'inherit':false,e_w=e_i!=e_e.get('maxValue')?'inherit':false;e_u.setToMin.set({enabled:e_v});
e_u.setToMax.set({enabled:e_w});e_u.stepToMin.set({enabled:e_v});e_u.stepToMax.set({enabled:e_w});};e_d.registerProperties({e_l:{name:'stepsCoarse',value:2},e_m:{name:'stepsFine',value:25},e_n:{name:'stepsNormal',value:5}});return e_d;}});