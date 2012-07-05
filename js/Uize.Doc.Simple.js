/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-04

	http://www.uize.com/reference/Uize.Doc.Simple.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Doc.Simple',required:['Uize.Data.Simple','Uize.String','Uize.Templates.List','Uize.Array.Sort','Uize.Xml'],builder:function(){var _a,_b='string',_c=function(){},_d=Uize.String.limitLength;var _e='[-\\*~:\\.]',_f=new RegExp(_e),_g=new RegExp('^\\s*'+_e+'\\s*$'),_h='([@#\\+a-zA-Z]|\\d+)',_i=new RegExp(_h),_j=new RegExp('^([<\\(\\{\\[]*\\s*'+_h+'?\\s*[>\\)\\}\\]]*\\s*'+_e+'*\\s+)'),_k=/\s*~{2,}\s*/,_l=/^\s*<<\s*([^<]*?)\s*>>\s*[\n\r]/,_m={html:function(_n){return _n.code;},image:function(_n){var _o=_n.indent,_p=_n.indentChars,_q=Uize.Xml.toAttributeValue(_n.title||''),_r=Uize.Xml.toAttributeValue(_n.subtitle||''),_s=_q&&_r,_t=Uize.Xml.toAttributeValue(_n.url),_u=_q+(_s&&' (')+_r+(_s&&')');return[_o+'<div class="image">',_o+_o+'<a href="'+_t+'">',_o+_o+_o+'<img'+' src="'+_t+'"'+' title="'+_u+'"'+' alt="'+_u+'"'+(_n.width?' width="'+Uize.Xml.toAttributeValue(_n.width)+'"':'')+(_n.height?' height="'+Uize.Xml.toAttributeValue(_n.height)+'"':'')+'/>',_o+_o+'</a>',_o+_o+'<div>',(_q&&
(_o+_o+_o+'<span class="imageTitle">'+_q+'</span>')),(_r&&(_o+_o+_o+'<span class="imageSubtitle">'+_r+'</span>')),_o+_o+'</div>',_o+'</div>'].join('\n');},samplecode:function(_n){return'<pre class="sample-code">'+_v(_n.code||'')+'</pre>';},table:function(_n){var _o=_n.indent,_p=_n.indentChars,_w=[_o+'<table class="data">'],_x=_n.title,_y=_n.data,_z=_y.length;_x&&_w.push(_o+_p+'<tr class="title">',_o+_p+_p+'<td'+(_z?(' colspan="'+_y[0].length+'"'):'')+'>'+_v(_x)+'</td>',_o+_p+'</tr>');for(var _A= -1,_B;++_A<_z;){_w.push(_o+_p+'<tr'+(_A?'':' class="heading"')+'>');_B=_y[_A];for(var _C= -1,_D=_B.length,_E;++_C<_D;)_w.push(_o+_p+_p+'<td>'+_v(_B[_C])+'</td>');_w.push(_o+_p+'</tr>');}_w.push(_o+'</table>');return _w.join('\n');}},_F={47:1,92:1};var _G={};function _H(_I){return(_G[_I]||(_G[_I]=Uize.map(_I.split('_'),'+value')));}var _J=_c.build=function(_K){function _L(_M,_N){var _O=_K[_M];return typeof _O==_b?_O:_N;}var _P=_K.data,_Q=Uize.copyInto(Uize.lookup(_a,0,true),_K.urlDictionary),_R=_K.pathToRoot||'',
_p=_L('indentChars','\t'),_S=_L('headingNumberingSeparator','. '),_T=_L('headingNumberingDelimiter','.'),_U=Uize.defaultNully(_K.maxCssClassLevel,9),_V=[],_W=[0],_X=[],_Y={items:[]},_Z={};if(typeof _P==_b)_P=Uize.Data.Simple.parse({simple:_P,parseName:false,ignoreWhitespaceLines:true});function _0(_P){var _1=_P.children;if(_1.length){var _2=Uize.lookup(_a,0,true);for(var _3= -1;++_3<_1.length;){var _4=_1[_3],_5=_4.children;if(_5.length){var _6=_4.value,_7=_2[_6];if(_7){_7.children=_7.children.concat(_5);_1.splice(_3,1);_3--;}else{_2[_6]=_4;}}}Uize.forEach(_1,_0,true);}}_K.canonicalizePeerSections!==false&&_0(_P);var _8=_K.sectionsToSort;if(_8){var _9=Uize.lookup(_8);function _ba(_P){var _1=_P.children;if(_1.length){_9[_P.value]&&Uize.Array.Sort.sortBy(_1,'value.value');Uize.forEach(_1,_ba,true);}}_ba(_P);}var _bb=Uize.lookup(_a,0,true),_bc=Uize.lookup(_a,0,true),_bd=[0];function _be(_bf,_bg,_bh){var _I=_bf[_bg];if(_I){var _bi=_I,_bj=_bi.length;_I=_bi[0];if(_bh&&_bj>1){var _bk,_bl;
for(var _bm= -1,_bn;++_bm<_bj;){var _V=_H(_I=_bi[_bm]);if(!(_bn= !_bk)){for(var _bo= -1,_bp=_V.length;++_bo<_bp;){var _bq=Math.abs(_V[_bo]-(_bh[_bo]||0))-Math.abs((_bl[_bo]||0)-(_bh[_bo]||0));if(_bq<0){_bn=true;break;}else if(_bq>0){_bn=false;break;}}}if(_bn){_bk=_I;_bl=_V;}}_I=_bk;}}return _I;}function _br(_P,_bs,_bt){var _1=_P.children;if(_1.length){_bd[_bs]++;var _I=_bs?_bt+(_bt&&'_')+_bd[_bs]:'';for(var _bu= -1,_bv=(_P.value+'').split(_k),_bw=_bv.length,_bx,_by;++_bu<_bw;){(_bb[_bx=_bv[_bu]]||(_bb[_bx]=[])).push(_I);(_bc[_by=_bx.toLowerCase()]||(_bc[_by]=[])).push(_I);}_bd[_bs+1]=0;for(var _3= -1,_bz=_1.length;++_3<_bz;)_br(_1[_3],_bs+1,_I);}}_br(_P,0,'');function _bA(_bB,_V){function _bC(_bD,_bE,_bF,_bG,_bH){if(!_V)return _bE;var _bI=_bG=='url';if(_bG&& !_bI){if(_bG=='text')_bH=_bE;var _I=_be(_bb,_bH,_V)||_be(_bc,_bH.toLowerCase(),_V);_I?(_bH='#'+_I):((_bH=_Q[_bH]||'')&&(_bI=true));}if(_F[_bH.charCodeAt(0)])_bH=_R+_bH.slice(1);return(_bD+(_bH?('<a href="'+_bH+'"'+(_bI&&/^[a-zA-Z]+:/.test(_bH)
?' target="_blank" class="externalSiteLink"':'')+'>'+_bE+'</a>'):_bE)+_bF);}return(_bB.replace(/^#(\S*)/,function(_bJ,_bK){return _bC('<a name="'+_bK+'">','','</a>')}).replace(/\B\*.+?\*\B/g,function(_bJ){return _bC('<b>',_bJ.slice(1,-1),'</b>','text')}).replace(/\b__.+?__\b/g,function(_bJ){return _bC('<b><i>',_bJ.slice(2,-2),'</i></b>','text')}).replace(/\b_.+?_\b/g,function(_bJ){return _bC('<i>',_bJ.slice(1,-1),'</i>','text')}).replace(/\B==.+?==\B/g,function(_bJ){return _bC('<code><b>',_bJ.slice(2,-2),'</b></code>','text')}).replace(/\B=.+?=\B/g,function(_bJ){return _bC('<code>',_bJ.slice(1,-1),'</code>','text')}).replace(/\B`.+?`\B/g,function(_bJ){return _bC('',_bJ.slice(1,-1),'','text')}).replace(/\[\[(#.+?|[a-zA-Z]+:.+?|.+?\.(?:htm|html|jpg|gif|png)(?:[\?#][^\]]*)?)\]\[(.+?)\]\]/g,function(_bJ,_bL,_bM){return _bC('',_bM,'','url',_bL)}).replace(/\[\[(.+?)\]\[(.+?)\]\]/g,function(_bJ,_bN,_bM){return _bC('',_bM,'','section',_bN)}).replace(/\[\[(#.+?|[a-zA-Z]+?:.+?)\]\]/g,
function(_bJ,_bL){return _bC('',_bL,'','url',_bL)}).replace(/\[\[(.+?)\]\]/g,function(_bJ,_bN){return _bC('',_bN,'','text')}));}function _bO(_P,_bs,_bP,_bQ,_bR,_bS){function _bT(_bU,_o){_X.push((_o!==false?_bQ:'')+_bU);}function _bV(_bW){var _bX=_bs+ !!_bW;if(_W[_bX]){_bT((_bW?_p:'')+'</table>');_W[_bX]=0;}}var _1=_P.children,_bY=_P.value,_bZ;if(!_1.length){if(/\r|\n|\r\n/.test(_bY)){var _b0;_bV();var _b1,_b2,_b3=_bY.match(_l);if(_b3){var _b4=_b3[1].toLowerCase(),_b5=_b4=='metadata';if(_b5||(_b1=_m[_b4])){_b2=Uize.Data.Simple.parse({simple:_bY.slice(_b3[0].length),collapseChildren:true,ignoreWhitespaceLines:true});_b5&&Uize.copyInto(_Z,_b2);}}else{_b1=_m.samplecode;_b2={code:_bY};}if(_b1){_b2.indent=_bQ;_b2.indentChars=_p;_b0=_b1(_b2);}if(_b0!=_a){_bT('');_bT(_b0,false);_bT('');}}else if(/^={3,}$/.test(_bY)){_bV();_bT('<hr class="thick"/>');}else if(/^-{3,}$/.test(_bY)){_bV();_bT('<hr class="thin"/>');}else if((_bZ=_bY.match(_j))&&/[^\w\s\d]/.test(_bZ[1])){var _b6=_bZ[1],_b7=_b6.match(_i);_W[_bs]||
_bT('<table class="list">');if(_b7){var _b8=_b7[1],_b9='';if(/[#\+]|\d+/.test(_b8)){_b9=_W[_bs]+1+'';}else if(/[@a-z]/i.test(_b8)){_b9='abcdefghijklmnopqrstuvwxyz'.charAt(_W[_bs]);if(/[A-Z]/.test(_b8))_b9=_b9.toUpperCase();}_b6=_b6.replace(_i,_b9)}else{_b6=_g.test(_b6)?_b6.replace(_f,'<span class="bullet"></span>'):_v(_b6);}_bT('<tr valign="top">'+'<td><span style="white-space:nowrap;">'+_b6+'</span></td>'+'<td>'+_bA(_bY.replace(_j,''),_V)+'</td>'+'</tr>');_W[_bs]++;}else{_bV();var _ca=_bA(_bY,_V);if(/[A-Z]/.test(_ca)&& !/[a-z]/.test(_ca))_ca='<span class="allCaps">'+_ca+'</span>';_bT('<p>'+_ca+'</p>');_bT('');}}else{_bV();_V[_bs-1]++;var _cb=_bY.search(_k),_cc=_cb> -1?_bY.slice(0,_cb):_bY,_cd=Math.min(_bs,_U),_ce=_bs>0&&true,_cf=_ce?_V.join('_'):'',_cg=(_V.length?_V.join(_T)+_S:'')+_cc,_ch=(_bR?(_bR+' -> '):'')+_cg,_ci=' title="'+Uize.Xml.toAttributeValue(_ch)+'"',_cj=_ce?((_bS?(_bS+_T):'')+'<a href="#'+_cf+'"'+_ci+'>'+_V[_bs-1]+'</a>'):'',_ck={title:_cg||'Contents',description:_1[0].children.length?''
:_d(_bA(_1[0].value),400),link:_cf?('#'+_cf):'',items:[]};_bP.items.push(_ck);if(_bY){var _cl='h'+Math.min(_bs,5),_cm=_cj+_S;_bT('<a name="'+_cf+'"></a>');_bT('<'+_cl+' class="heading'+_cd+'"'+_ci+'>'+(_cj?'<span class="headingNumber">'+_cm+'</span>':'')+_cc+'</'+_cl+'>');}_bT('<div class="contents'+_cd+'">');_V[_bs]=_W[_bs+1]=0;for(var _3= -1,_bz=_1.length;++_3<_bz;)_bO(_1[_3],_bs+1,_ck,_bQ+_p,_ch,_cj);_bV(true);/\S/.test(_X[_X.length-1])||_X.pop();_bT('</div>');_bT('');_V.length=_bs;}}_bO(_P,0,_Y,'','','');var _cn=_Y.items,_co=(_K.contentsList!==false&&(_cn.length&&(_cn.length>1||_cn[0].items.length))?('<div id="page_contents" class="contents-tree-shell">\n'+Uize.Templates.List.process({items:_cn})+'\n'+'</div>\n'+'\n'):'')+_X.join('\n');return(_K.result=='full'?{html:_co,contentsTreeItems:_cn,metaData:_Z}:_co);};_c.toDocument=function(_cp,_cq){return _J(Uize.copyInto({data:_cp},_cq));};var _v=_c.toSampleCode=function(_cr){
return _cr.replace(/\t/g,'  ').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};return _c;}});