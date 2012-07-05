/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-04

	http://www.uize.com/reference/Uize.Widget.Tree.Select.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Tree.Select',required:'Uize.Node',builder:function(d_a){var d_b=null,d_c=true,d_d=false;var d_e=d_a.subclass(function(d_f){var d_g=this;d_g.d_h=d_b;d_g.d_i=0;d_g.d_j=d_d;d_g.wire('Changed.items',function(){function d_k(d_l,d_m){d_g.d_i=Math.max(d_g.d_i,d_m);if(d_e.itemHasChildren(d_l)){for(var d_n= -1,d_o=d_l.items,d_p=d_o.length;++d_n<d_p;)d_k(d_o[d_n],d_m+1);}}var d_q={items:d_g.get('items')};d_g.d_h=[[d_q]];d_g.d_i=0;d_k(d_q,0);d_g.d_r();d_g.d_s(0);});}),d_t=d_e.prototype;d_t.d_r=function(){var d_g=this;if(d_g.isWired){for(var d_u=0;++d_u<=d_g.d_v;)d_g.displayNode('level'+d_u,d_u<=d_g.d_i);}};d_t.d_s=function(d_w){var d_g=this;if(d_g.isWired){var d_x=d_g.d_h[d_w],d_y=d_g.getNode('level'+d_w),d_z=d_w+1;function d_A(d_B,d_C){d_B.disabled= !d_C;d_g.displayNode(d_B,d_C||d_g.d_D);}for(var d_u=d_z-1;++d_u<=d_g.d_i;){var d_B=d_g.getNode('level'+d_u);d_B.options.length=0;d_A(d_B,d_d);}var d_E=d_y?d_y.selectedIndex-1:0,d_F=d_x[d_E],d_G=d_e.itemHasChildren(d_F),d_j=d_E> -1&& !d_G;
d_g.setNodeProperties('submitButton',{disabled:!d_j});if(d_G){function d_H(d_I){d_J.options[d_J.options.length]=new Option(d_I);}d_g.d_h.length=d_z+1;d_g.d_h[d_z]=d_F.items;var d_J=d_g.getNode('level'+d_z);d_H(d_g.d_K);Uize.forEach(d_F.items,function(d_l){d_H(d_l.title)});d_A(d_J,d_c);}if(d_j!=d_g.d_j){d_g.fire('Selection '+(d_j?'Complete':'Incomplete'));d_g.d_j=d_j;}}};d_t.updateUi=d_t.d_r;d_t.wireUi=function(){var d_g=this;if(!d_g.isWired){function d_L(d_u){return function(){d_g.d_s(d_u)}}for(var d_u=0;++d_u<=d_g.d_v;)d_g.wireNode('level'+d_u,'change',d_L(d_u));d_a.prototype.wireUi.call(d_g);d_g.d_s(0);}};d_e.registerProperties({d_D:{name:'displayDisabledSelects',value:d_c},d_K:{name:'chooseText',value:'--- SELECT ONE ---'},d_v:{name:'maxLevels',value:20}});return d_e;}});