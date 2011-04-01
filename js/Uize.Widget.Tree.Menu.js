/*
	UIZE JAVASCRIPT FRAMEWORK 2011-04-01

	http://www.uize.com/reference/Uize.Widget.Tree.Menu.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Tree.Menu',required:'Uize.Node',builder:function(d_a){var d_b,d_c=true,d_d=false,d_e=Uize.Node;var d_f=Uize.pathToResources+'Uize_Widget_Tree_Menu/',d_g=10000;var d_h=d_a.subclass(d_b,function(){var d_i=this;d_i.wire('Changed.items',function(){d_i.setExpandedDepth(0)});}),d_j=d_h.prototype;d_j.d_k=function(d_l){var d_i=this,d_m=d_i.d_m;if(!d_m[d_l]){function d_n(d_l){d_i.wireNode(d_l+'TitleLink','mouseover',function(){d_i.collapseAllBut(d_l)});}var d_o=d_l?d_i.getItemFromSpecifier(d_l).items:d_i.get('items');if(d_o&&d_o.length){for(var d_p= -1,d_q=d_o.length;++d_p<d_q;)d_n(d_l+(d_l&&'x')+d_p);}function d_r(){if(d_i.d_s)d_i.d_s=clearTimeout(d_i.d_s);}function d_t(){d_r();d_i.setExpandedDepth(0);}function d_u(){d_r();d_i.d_s=setTimeout(d_t,d_i.d_v);}d_i.wireNode(d_l+(d_l&&'Children'),{mouseover:d_r,mouseout:d_u,click:d_t});d_m[d_l]=d_c;}};d_j.d_w=function(d_x,d_y){var d_i=this;return((d_y?d_i.d_z:d_i.d_A)+(d_x.expanded?(' '+(d_y?d_i.d_B:d_i.d_C)):'')+(d_h.itemHasChildren(d_x)?(
' '+(d_y?d_i.d_D:d_i.d_E)):''));};d_j.setItemExpanded=function(d_l,d_F){var d_i=this,d_x=d_i.getItemFromSpecifier(d_l);if(typeof d_F!='boolean')d_F=d_x.expanded===d_d;if(d_F!=d_x.expanded){var d_y=d_l.split(d_i.get('itemDelimiter')).length-1;d_x.expanded=d_F;d_i.setNodeProperties(d_l+'TitleLink',{className:d_i.d_w(d_x,d_y)});d_F&&d_i.d_k(d_l);if(d_h.itemHasChildren(d_x)){var d_G=d_i.getNode(d_l+'Children');d_i.displayNode(d_G,d_F);if(d_F){d_i.globalizeNode(d_G);d_i.setNodeStyle(d_G,{zIndex:d_g+d_y});d_e.setAbsPosAdjacentTo(d_G,d_i.getNode(d_l+'TitleLink'),d_y?'x':'y');}}}};d_j.wireUi=function(){var d_i=this;if(!d_i.isWired){d_i.d_m={};d_i.d_k('');d_a.prototype.wireUi.call(d_i);}};d_h.registerProperties({d_v:{name:'dismissDelay',value:400},d_H:'menuCssClass',d_I:'menuDividerClass',d_C:'menuItemActiveCssClass',d_E:'menuItemChildrenIndicatorCssClass',d_A:'menuItemCssClass',d_J:'subMenuCssClass',d_K:'subMenuDividerClass',d_B:'subMenuItemActiveCssClass',d_D:'subMenuItemChildrenIndicatorCssClass',
d_z:'subMenuItemCssClass'});d_h.set({html:{process:function(input){var d_i=this,d_L=input.idPrefix,d_M=[];d_i.traverseTree({itemHandler:function(d_x,d_l,d_y){d_M.push(d_h.itemIsDivider(d_x)?('<div class="'+(d_y?input.subMenuDividerClass:input.menuDividerClass)+'" href="javascript://">&nbsp;</div>'):('<a id="'+d_L+'-'+d_l+'TitleLink" class="'+d_i.d_w(d_x,d_y)+'" href="'+(d_x.link||'javascript://')+'"'+(d_x.link?'':' style="cursor:default;"')+'>'+d_x.title+'</a>'));},beforeSubItemsHandler:function(d_x,d_l,d_y){d_M.push('<div id="'+d_L+'-'+d_l+'Children" class="'+input.subMenuCssClass+'">');},afterSubItemsHandler:function(){d_M.push('</div>\n')}});return('<div id="'+d_L+'" class="'+input.menuCssClass+'">'+d_M.join('')+'<br style="clear:both;"/>'+'</div>\n');}}});return d_h;}});