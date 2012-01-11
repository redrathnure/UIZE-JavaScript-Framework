/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-10

	http://www.uize.com/reference/Uize.Widget.ImageWipe.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.ImageWipe',required:['Uize.Node','Uize.Node.Util','Uize.Fade','Uize.Array.Order'],builder:function(c_a){var c_b=null,c_c=Uize.Node;var c_d=c_a.subclass(function(c_e){var c_f=this;c_f.c_g=[];c_f.c_h=[0,0];c_f.c_i=0;c_f.c_j=[];c_f.fade=Uize.Fade();c_f.fade.wire('Changed.value',function(){for(var c_k= -1,c_g=c_f.c_g,c_l=c_g.length,c_m=c_f.c_m,c_n=c_f.c_n,c_o=c_f.fade*(100+(c_l-1)*c_n);++c_k<c_l;){var c_p=c_g[c_k],c_q=c_p.c_r,c_s=c_p.c_t,c_u=c_p.c_v,c_w=Uize.constrain(c_o-c_k*c_n,0,100)/100,c_x;for(var c_y= -1,c_z;++c_y<4;){if((c_z=Math.round(c_q[c_y]+(c_s[c_y]-c_q[c_y])*c_w))!==c_u[c_y]){c_u[c_y]=c_z;c_x=true;}}var c_A=c_m[c_k];c_x&&c_c.setClipRect(c_A,c_u[1],c_u[2],c_u[3],c_u[0]);var c_B=c_f.c_C?c_w:1;c_B!==c_p.c_B&&c_c.setOpacity(c_A,c_p.c_B=c_B);}});}),c_D=c_d.prototype;c_D.prepareForNextItem=function(c_E,c_F){var c_G=this.c_m;if(c_G){c_c.display(c_G,false);c_c.display(c_G[0]);c_c.setStyle(c_G[0],{clip:'rect(auto, auto, auto, auto)',opacity:1});}
c_c.display(this.c_m=c_F.getElementsByTagName('IMG'));};c_D.setCurrentItem=function(c_E){var c_f=this,c_H=c_f.c_H,c_I=c_f.c_I,c_h=c_f.c_h;c_f.c_J=c_f.c_E;c_f.c_E=c_E;var c_K=[],c_L=[];function c_M(c_N){return c_N*(c_N+1)/2}var c_O=(c_h[0]/c_H)*c_f.c_P/100,c_Q=(c_h[0]-c_O*c_H)/c_M(c_H-1);for(var c_R= -1;++c_R<c_H;){c_K[c_R]=c_O;c_O+=c_Q;}var c_S=(c_h[1]/c_I)*c_f.c_T/100,c_U=(c_h[1]-c_S*c_I)/c_M(c_I-1);for(var c_V= -1;++c_V<c_I;){c_L[c_V]=c_S;c_S+=c_U;}function c_W(c_X){var c_Y;if(typeof c_X=='number'){c_Y=c_X;}else if(typeof c_X=='object'){var c_Z,c_0;if(c_X.keyedTo=='column'){c_Z=c_R;c_0=c_H-1;}else if(c_X.keyedTo=='row'){c_Z=c_V;c_0=c_I-1;}else if(c_X.keyedTo=='pane'){c_Z=c_1;c_0=c_H*c_I-1;}else if(c_X.keyedTo=='random'){c_Z=Math.random();c_0=1;}if(c_X.inverse===true)c_Z=c_0-c_Z;if(typeof c_X.wraps=='number')c_Z=(c_X.wrapMode==='triangle'&&Math.floor(c_Z*c_X.wraps/(c_0+1))%2==1?(c_0-c_Z):c_Z)*c_X.wraps%(c_0+1);c_Y=c_X.start+(c_X.end-c_X.start)*c_Z/Math.max(c_0,1);}return c_Y;}function c_2(c_3,c_4,c_5){
return c_3+(c_4-c_3)*c_5/100;}var c_6=c_f.c_g.length=0,c_1,c_7,c_8,c_9,c_ba,c_bb,c_bc;for(var c_V= -1;++c_V<c_I;){var c_bd=0;for(var c_R= -1;++c_R<c_H;){c_1=c_V*c_H+c_R;c_7=c_W(c_f.c_be);c_8=c_W(c_f.c_bf);c_ba=c_W(c_f.c_bg);c_bb=c_W(c_f.c_bh);c_bc=c_W(c_f.c_bi);c_9=c_W(c_f.c_bj);var c_bk=c_bd+c_K[c_R],c_bl=c_6+c_L[c_V],c_bm=c_2(c_bd,0,c_bc),c_bn=c_2(c_6,0,c_bc),c_bo=c_2(c_bk,c_h[0],c_bc),c_bp=c_2(c_bl,c_h[1],c_bc),c_bq=(c_bo-c_bm)*c_ba/100,c_br=(c_bp-c_bn)*c_bb/100,c_bs=c_bm+(c_bo-c_bm-c_bq)*c_7,c_bt=c_bs+c_bq,c_bu=c_bn+(c_bp-c_bn-c_br)*c_8,c_bv=c_bu+c_br,c_r=[c_bs,c_bu,c_bt,c_bv],c_t=[c_2(c_bd,0,c_9),c_2(c_6,0,c_9),c_2(c_bk,c_h[0],c_9),c_2(c_bl,c_h[1],c_9)];c_f.c_g[c_1]={c_v:[],c_r:[c_r[0],c_r[1],c_r[2],c_r[3]],c_t:[c_t[0],c_t[1],c_t[2],c_t[3]]};c_bd+=c_K[c_R];}c_6+=c_L[c_V];}Uize.Array.Order.reorder(c_f.c_g,c_f.c_bw,false);c_f.fade.start({startValue:0,endValue:1});};c_D.wireUi=function(){this.setNodeStyle('',{overflow:'hidden'});c_a.prototype.wireUi.call(this);};c_d.registerProperties({c_be:{name:'alignX',
value:{start:1,end:0,keyedTo:'column'}},c_bf:{name:'alignY',value:.5},c_bj:{name:'allToFull',value:0},c_bx:'background',c_C:{name:'dissolve',value:false},c_H:{name:'divisionsX',value:16},c_I:{name:'divisionsY',value:1},c_by:{name:'duration',onChange:function(){this.fade.set({duration:this.c_by})},value:3000},c_P:{name:'firstPaneSizeX',value:100},c_T:{name:'firstPaneSizeY',value:100},c_bw:{name:'paneOrderScheme',value:'inside out'},c_n:{name:'paneProgressDelay',value:10},c_bi:{name:'paneSeedContext',value:0},c_bg:{name:'paneSeedSizeX',value:0},c_bh:{name:'paneSeedSizeY',value:100},c_bz:{name:'src|value',onChange:function(){var c_f=this;if(c_f.isWired){if(c_f.fade.get('inProgress')){c_f.fade.set({value:1});c_f.fade.stop();}var c_E=c_f.getNode('item'+c_f.c_i),c_bA=1-c_f.c_i,c_F=c_f.getNode('item'+c_bA);c_f.prepareForNextItem(c_E,c_F);var c_m=c_f.c_m;function c_bB(){var c_bC=c_f.c_j[c_f.c_bz],c_bD=c_m.length,c_bz=c_f.c_bz,c_bE=0;function c_bF(){this.Uize_Widget_ImageWipe_src=c_bz;c_f.unwireNode(this);
if(++c_bE==c_bD){c_E.style.zIndex='0';c_F.style.zIndex='1';c_f.c_i=c_bA;c_f.setCurrentItem(c_F);}}for(var c_bG= -1;++c_bG<c_bD;){var c_A=c_m[c_bG];if(c_A.Uize_Widget_ImageWipe_src===c_bz){c_bF();}else{c_f.wireNode(c_A,{load:c_bF,error:c_bF,abort:c_bF});c_A.src=c_bz;}}}if(c_f.c_j[c_f.c_bz]){c_bB();}else{var c_bH=new Image;c_bH.onload=c_bH.onerror=c_bH.onabort=function(){c_bH=null;c_f.c_j[c_f.c_bz]={c_bI:c_f.c_bI||this.width,c_bJ:c_f.c_bJ||this.height};c_bB();};c_bH.src=c_f.c_bz;}}}}});c_d.set({html:{process:function(input){var c_f=this,c_bK=c_f.getNode(),c_bL=c_c.getDimensions(c_bK),c_bx=input.background||c_c.Util.getEffectiveBgColor(c_bK),c_bM=[];c_f.c_h=[c_bL.width,c_bL.height];for(var c_bN= -1;++c_bN<2;){c_bM.push('<div id="'+input.idPrefix+'-item'+c_bN+'" style="position:absolute; margin:0px; padding:0px; left:0px; top:0px; width:'+c_bL.width+'px; height:'+c_bL.height+'px; overflow:hidden;">');for(var c_k= -1;++c_k<input.divisionsX*input.divisionsY;)
c_bM.push('<img src="'+c_d.getBlankImageUrl()+'" style="position:absolute; left:0px; top:0px; width:'+c_f.c_h[0]+'px; height:'+c_f.c_h[1]+'px; background:'+c_bx+';"/>');c_bM.push('</div>');}return c_bM.join('');}}});return c_d;}});