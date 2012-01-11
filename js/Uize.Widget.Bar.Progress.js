/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-10

	http://www.uize.com/reference/Uize.Widget.Bar.Progress.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Bar.Progress',required:'Uize.Fade',builder:function(d_a){var d_b=true,d_c=false,d_d=null;var d_e=d_a.subclass(function(){var d_f=this;d_f.d_g=d_f.d_h=0;d_f.d_i=Uize.Fade({duration:4000});d_f.d_i.wire('Changed.value',function(){d_f.set({value:+d_f.d_i})});}),d_j=d_e.prototype;d_j.d_k=function(){this.showNode('',this.d_l);};d_j.wireUi=function(){var d_f=this;if(!d_f.isWired){d_a.prototype.wireUi.call(d_f);d_f.d_k();}};d_e.registerProperties({d_l:{name:'inProgress',onChange:function(){var d_f=this,d_m= +new Date;if(d_f.d_l)d_f.d_n=d_m;if(!d_f.d_l&&typeof d_f.d_n=='number'){d_f.d_g++;d_f.d_h+=d_m-d_f.d_n;}if(d_f.isWired){function d_o(){if(d_f.d_p){clearTimeout(d_f.d_p);d_f.d_p=d_d;}d_f.d_k();}if(d_f.d_l){d_f.d_i.start({duration:(d_f.d_g>0?d_f.d_h/d_f.d_g:3000)*d_f.d_q});d_o();}else{d_f.d_i.stop();d_f.d_i.set({value:100});d_f.d_p=setTimeout(d_o,d_f.d_r);}}},value:d_c},d_q:{name:'paddingFactor',value:1.5},d_r:{name:'vanishTime',value:250}});d_e.set({html:{process:function(input){
var output=[];output.push("<div id=\"",input.idPrefix,"\" style=\"position:relative; visibility:hidden; left:0px; top:0px; width:",input.width||87,"px; height:",input.height||12,"px; background:#888; border:2px solid #888;\">\n	<div id=\"",input.idPrefix,"-track\" style=\"position:absolute; left:0px; top:0px; width:100%; height:100%;\">\n		<img src=\"",input.pathToResources,"Uize_Widget_Bar_Progress/track-bg.gif\" style=\"position:absolute; left:0px; top:0px; width:100%; height:100%;\"/>\n		<img id=\"",input.idPrefix,"-full\" src=\"",input.pathToResources,"Uize_Widget_Bar_Progress/full-bg.gif\" style=\"position:absolute; left:0px; top:0px; width:100%; height:100%;\"/>\n		<img id=\"",input.idPrefix,"-knob\" src=\"",input.blankGif,"\" style=\"position:absolute; left:0px; top:0px; width:1px; height:100%; background:#f00;\"/>\n	</div>\n</div>\n");return output.join("");}},orientation:'horizontal'});return d_e;}});