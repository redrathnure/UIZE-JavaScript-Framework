/*
	UIZE JAVASCRIPT FRAMEWORK 2011-02-20

	http://www.uize.com/reference/Uize.Widget.SlideShow.AutoAdvance.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.SlideShow.AutoAdvance',required:'Uize.Widget.Button',builder:function(d_a){var d_b=d_a.subclass(null,function(){var d_c=this;(d_c.d_d=d_c.d_e('play',function(){d_c.toggle('playing')})).set({playing:d_c.d_f});function d_g(d_h){d_c.children[d_h].wire('Click',function(){d_c.d_f&&d_c.stopThenResume()});}d_g('previous');d_g('next');d_g('first');d_g('last');}),d_i=d_b.prototype;d_i.d_e=Uize.Widget.Button.addChildButton;d_i.d_j=function(){var d_c=this;if(d_c.d_k){clearTimeout(d_c.d_k);d_c.d_k=null;}};d_i.d_l=function(){var d_c=this;if(d_c.d_m){clearTimeout(d_c.d_m);d_c.d_m=null;}};d_i.d_n=function(){var d_c=this;d_c.d_j();d_c.advance(1);};d_i.wipeDone=function(){var d_c=this;if(d_c.d_f){d_c.d_j();d_c.d_k=setTimeout(function(){d_c.d_n()},d_c.d_o);}};d_i.stopThenResume=function(){var d_c=this;d_c.set({d_f:false});d_c.d_m=setTimeout(function(){d_c.set({d_f:true})},d_c.d_p);};d_b.registerProperties({d_p:{name:'idleResumeTime',value:1000},d_o:{name:'interSlideTime',value:4000},d_f:{
name:'playing',onChange:function(){var d_c=this;if(d_c.d_f){d_c.d_l();d_c.d_j();d_c.d_k=setTimeout(function(){d_c.d_n()},d_c.d_o);}else{d_c.d_j();d_c.d_l();}d_c.d_d&&d_c.d_d.set({playing:d_c.d_f});},value:false}});return d_b;}});