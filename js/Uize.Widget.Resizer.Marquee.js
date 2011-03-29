/*
	UIZE JAVASCRIPT FRAMEWORK 2011-02-20

	http://www.uize.com/reference/Uize.Widget.Resizer.Marquee.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Resizer.Marquee',required:'Uize.Node',builder:function(d_a){var d_b=true,d_c=false,d_d=Uize.Node;var d_e=[.5,.5],d_f={};var d_g=d_a.subclass(function(){var d_h=this;function d_i(){d_h.d_j();d_h.d_k();}d_h.wire({'Changed.inDrag':d_i,'Changed.creatingNew':d_i,'Changed.fixedX':d_i,'Changed.fixedY':d_i,'Changed.activeHandleEffectivePointIdX':d_i,'Changed.activeHandleEffectivePointIdY':d_i});}),d_l=d_g.prototype;d_l.d_j=function(){var d_h=this;if(d_h.isWired){var d_m=d_h.get('inDrag'),d_n=d_h.get('creatingNew'),d_o=d_h.get('fixedX'),d_p=d_h.get('fixedY'),d_q=d_h.get('activeHandleEffectivePointIdX'),d_r=d_h.get('activeHandleEffectivePointIdY'),d_s=d_g.pointIdsMap;for(var d_t in d_s){if(d_t!='move'){var d_u=d_s[d_t];d_h.displayNode(d_t,(!d_n&&(!d_o||d_u[0]==.5)&&(!d_p||d_u[1]==.5)&&(!d_h.d_v|| !d_m||(d_u[0]==d_q&&d_u[1]==d_r))));}}}};d_l.d_k=function(){var d_h=this;if(d_h.isWired){var d_w=d_h.get('left'),d_x=d_h.get('top'),d_y=d_h.get('width')-1,d_z=d_h.get('height')-1,
d_s=d_g.pointIdsMap,d_A=d_h.d_A||d_f;for(var d_t in d_s){if(d_t!='move'){var d_u=d_s[d_t],d_B=d_h.getNode(d_t),d_C=d_d.getDimensions(d_B),d_D=d_A[d_t]||d_e;d_d.setStyle(d_B,{left:d_w+d_u[0]*d_y-(d_C.width-1)*d_D[0],top:d_x+d_u[1]*d_z-(d_C.height-1)*d_D[1]});}}}};d_l.updateUi=function(){var d_h=this;if(d_h.isWired){d_a.prototype.updateUi.call(d_h);d_h.d_k();}};d_l.wireUi=function(){var d_h=this;if(!d_h.isWired){if(d_h.d_E){var d_F=d_h.getNode('shell');d_d.setStyle(d_F,{cursor:'crosshair'});function d_G(d_H){if(d_h.get('enabledInherited')){d_H||(d_H=event);var d_t=d_h.get('aspectRatio')==null?'northWest':'southEast',d_I=d_d.getCoords(d_F),d_J=d_d.getEventAbsPos(d_H);d_h.set({creatingNew:d_b});d_h.setPositionDuringDrag(d_J.left-d_I.left,d_J.top-d_I.top,d_h.get('minWidth'),d_h.get('minHeight'));return d_h.children[d_t].initiate(d_H);}}d_h.wireNode(d_F,{mousedown:d_G,touchstart:d_G});}d_a.prototype.wireUi.call(d_h);d_h.d_j();}};d_g.registerProperties({d_A:'handlesAlign',d_v:{name:'hideOtherHandlesInDrag',value:d_b
},d_E:{name:'shellLive',value:d_b}});d_g.set({areaNodes:['move','border'],html:{process:function(input){function d_K(d_t){return('<img id="'+input.idPrefix+'-'+d_t+'" src="'+input.blankGif+'"'+(input.handleCssClass?(' class="'+input.handleCssClass+'"'):'')+' style="position:absolute; z-index:1000; display:none;'+(input.handleCssClass?'':' width:19px; height:19px; background:#888; border:1px solid #fff; opacity:.5; filter:alpha(opacity=50);')+'"/>');}return('<div id="'+input.idPrefix+'-border" style="position:absolute; left:0px; top:0px; width:200px; height:200px; border:1px solid #000; background:url('+input.blankGif+'); z-index:999;"></div>'+'<a id="'+input.idPrefix+'-move" href="javascript://" style="display:block; position:absolute; left:0px; top:0px; width:200px; height:200px; border:1px dashed #fff; z-index:1000; background:url('+input.blankGif+');"></a>'+d_K('northWest')+d_K('north')+d_K('northEast')+d_K('west')+d_K('east')+d_K('southWest')+d_K('south')+d_K('southEast'));}},nodeMap:{shell:''}});
return d_g;}});