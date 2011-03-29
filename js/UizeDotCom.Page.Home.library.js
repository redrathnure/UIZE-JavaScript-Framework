/*______________
|       ______  |   B U I L T     O N     U I Z E     F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |   This JavaScript application is developed using the object
|   /    / /    |   oriented UIZE JavaScript framework as its foundation.
|  /    / /  /| |
| /____/ /__/_| |    ONLINE : http://www.uize.com
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeDotCom.Page.Home.library Library Module
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2009-2011 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*?
	Introduction
		The =UizeDotCom.Page.Home.library= module is a library module that bundles together various JavaScript modules used by the very important homepage of the UIZE JavaScript Framework's Web site.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	required:'UizeDotCom.Page.library',
	builder:function () {
		

Uize.module({name:'Uize.Fx.xShadows',required:['Uize.Color','Uize.Node'],builder:function(_a){var _b=function(){},_c,_d='Uize.Fx.xShadows.toShadow(VALUE)';function _e(){if(_c){_c.lastIndex=0;}else{var _f='(#[0-9a-f]{1,6}|(?:rgba?|hsla?)\\s*\\(.+?\\)|[a-z]+)?',_g='(?:(-?(?:\\d\\.?|\\.\\d)\\d*)(em|ex|px|in|cm|mm|pt|pc|))',_h='\\s+',_i='\\s*';_c=new RegExp('(?:^|)'+_i+'(?:'+_f+_h+_g+_h+_g+'(?:'+_h+_g+')?'+'|'+_g+_h+_g+'(?:'+_h+_g+')?'+'(?:'+_h+_f+')?'+')'+_i+'(?:$|,)','g');}}function _j(_k){if(Uize.isArray(_k))_k=_k.join(',');var _l=[],_m;_e();while(_m=_c.exec(_k)){var _n=_m[8],_o=_n?8:2,_p={offsetX:+_m[_o],offsetXUnit:_m[_o+1]||'px',offsetY:+_m[_o+2],offsetYUnit:_m[_o+3]||'px'},_q=_m[_n?14:1],_r=_m[_o+4];if(_q)_p.color=Uize.Color.to(_q,'RGB array');if(_r){_p.blurRadius= +_r;_p.blurRadiusUnit=_m[_o+5]||'px';}_l.push(_p);}return _l;}_b.toShadow=function(_s){var _t=[];for(var _u= -1,_v=_s.length,_p;++_u<_v;)_t.push((_p=_s[_u]).offsetX+_p.offsetXUnit+' '+_p.offsetY+_p.offsetYUnit+
('blurRadius'in _p?(' '+_p.blurRadius+_p.blurRadiusUnit):'')+('color'in _p?(' '+Uize.Color.to(_p.color,'#hex')):''));return _t.join(',');};_a.defineStylePropertiesProfile({test:'boxShadow',remappedProperty:Uize.Node.isSafari?'WebkitBoxShadow':Uize.Node.isMozilla?'MozBoxShadow':'boxShadow',decoder:_j,encoderExpression:_d});_a.defineStylePropertiesProfile({test:'textShadow',decoder:_j,encoderExpression:_d});return _b;}});


Uize.module({name:'Uize.Widget.HoverFader',required:['Uize.Fx','Uize.Fade.xFactory','Uize.Node'],builder:function(c_a){var c_b=c_a.subclass(),c_c=c_b.prototype;c_c.c_d=function(c_e,c_f,c_g){c_f!=(c_g.reverse||false)?Uize.Fx.fadeStyle(c_e,this.c_h,this.c_i,0,c_g):Uize.Fx.fadeStyle(c_e,this.c_i,this.c_h,0,c_g);};c_c.c_j=function(c_e){this.c_d(c_e,true,this.c_k);};c_c.c_l=function(c_e){this.c_d(c_e,false,this.c_m);};c_c.tickle=function(c_g){var c_n=this;if(c_n.isWired){var c_o=c_n.c_o,c_p=c_o.length-1,c_q;Uize.Fade.fade(function(c_r){if(c_q==null)c_q=c_r-1;var c_s=c_r>c_q?1: -1;while(c_q!=c_r)c_n.c_l(c_o[c_q+=c_s]);},0,c_p,0,c_g==null||typeof c_g!='object'?{quantization:1,duration:c_p*(c_g==null?100:c_g)}:Uize.copyInto({quantization:1,duration:750},c_g));}};c_c.wireUi=function(){var c_n=this,c_o=c_n.c_o;if(!c_n.isWired&&c_o){c_n.wireNode(c_n.c_o=Uize.Node.find(c_o),{mouseover:function(){c_n.c_j(this)},mouseout:function(){c_n.c_l(this)}});c_a.prototype.wireUi.call(c_n);}};function c_t(){var c_u=this.c_u;
this.c_k=c_u?Uize.copyInto({},c_u,this.c_v):this.c_v;this.c_m=c_u?Uize.copyInto({},c_u,{reverse:!c_u.reverse},this.c_w):this.c_w;}c_b.registerProperties({c_h:{name:'defaultStyle',value:{color:'fff',backgroundColor:'000'}},c_v:{name:'fadeIn',onChange:c_t,value:{duration:250}},c_u:{name:'fadeInOut',onChange:c_t},c_w:{name:'fadeOut',onChange:c_t,value:{duration:350}},c_i:{name:'hoverStyle',value:{color:'000',backgroundColor:'fff'}},c_o:'nodes'});return c_b;}});


Uize.module({name:'Uize.Json',builder:function(){var _a=function(){},_b,_c=true,_d=false,_e='string',_f=[];var _g='       ',_h=_g.replace(/ /g,_g).replace(/ /g,_g),_i={RegExp:1,Date:1,String:1,Number:1,Boolean:1},_j={'break':1,'boolean':1,'case':1,'catch':1,'continue':1,'const':1,'debugger':1,'default':1,'delete':1,'do':1,'else':1,'export':1,'false':1,'finally':1,'for':1,'function':1,'if':1,'import':1,'in':1,'instanceof':1,'new':1,'null':1,'return':1,'switch':1,'this':1,'throw':1,'true':1,'try':1,'typeof':1,'var':1,'void':1,'while':1,'with':1};_a.from=function(_k){return _k?eval('('+_k+')'):null;};_a.to=function(_l,_m){_m=(typeof _m=='string'?_n[_m]:_m)||_n.nice;function _o(_p,_q){var _r=_m[_p];return typeof _r==_e?_r:_q;}var _s=[],_t=_o('indentChars','\t'),_u=_o('linebreakChars','\n'),_v=_o('quoteChar','\''),_w=new RegExp(_v,'g'),_x='\\'+_v,_y=_m.sortKeys===true,_z=_m.padKeys===true,_A=_m.keyDelimiter||':',_B={left:0,center:0.5,right:1}[_m.keyAlign||'left'],_C=_m.whenToQuoteKeys||'auto';
function _D(_E){return _h.substr(0,_E)}function _F(_e){return(_v+_e.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(_w,_x)+_v);}function _G(_H,_I,_J,_K){var _L=0,_M=typeof _H;function _N(_O,_K){_s.push(_J+(_L++ ?'':_I)+_O+(_K?',':''));}if(_H==_b||_M=='number'||_M=='boolean'){_N(_H,_K);}else if(_M==_e){_N(_F(_H),_K);}else if(_M=='object'){var _P=_H.constructor,_Q=_P==Object||_P==Array,_R;if(!_Q)_R=(((_P+'').match(typeof _P=='object'?/\[object\s+([^\]]+)\]/:/^\s*function\s+([^\(]+)\s*\(/)||_f)[1])||'';if(_Q||_R=='Object'||_R=='Array'){var _S=_J+_t;if(_H instanceof Array||(_H&&Uize.isFunction(_H.splice))){var _T=_H.length;if(_T){var _U=_T-1;_N('[');for(var _V= -1;++_V<_T;)_G(_H[_V],'',_S,_V<_U);_N(']',_K);}else{_N('[]',_K);}}else{var _W=[];for(var _X in _H)_W.push(_X);var _Y=_W.length;if(_Y){_y&&_W.sort();function _Z(_0){return(isNaN(+_0)?(/[^\w\$]|^\d/.test(_0)||_j[_0]):_0!= +_0+''||_0<0);}var _1=_C=='always';if(!_1&&_C=='auto all'){for(var _2= -1;++_2<_Y&& !_1;)_1=_1||_Z(_W[_2]);}
var _3=[];for(var _2= -1;++_2<_Y;){var _0=_W[_2];_3[_2]=(_1||_Z(_0))?_F(_0):_0;}var _4=0;if(_z){for(var _2= -1;++_2<_Y;)_4=Math.max(_4,_3[_2].length);}var _5=_Y-1;_N('{');for(var _2= -1;++_2<_Y;){var _6='',_7=_3[_2];if(_z){var _8=_4-_7.length,_9=Math.round(_B*_8);_6=_D(_9);_7+=_D(_8-_9);}_G(_H[_W[_2]],_7+_A,_S+_6,_2<_5);}_N('}',_K);}else{_N('{}',_K);}}}else{if(_i[_R]){_N('new '+_R+' ('+(_R=='String'?_F(_H):_H.valueOf())+')',_K);}else{_N('{}',_K);}}}}_G(_l,'','');return _s.join(_u);};var _ba={indentChars:'\t',keyAlign:'left',keyDelimiter:':',linebreakChars:'\n',padKeys:_d,quoteChar:'\'',sortKeys:_d,whenToQuoteKeys:'auto'},_bb={whenToQuoteKeys:'always',quoteChar:'"'},_bc={indentChars:'',linebreakChars:''},_n=_a.encodingOptionsPresets={mini:Uize.copyInto({},_ba,_bc),miniStrict:Uize.copyInto({},_ba,_bc,_bb),nice:_ba,strict:Uize.copyInto({},_ba,_bb)};return _a;}});


Uize.module({name:'Uize.String',builder:function(){var _a=function(){},_b;var _c=[],_d=new RegExp('[^ \\n\\r\\t\\f\\x0b\\xa0\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u200b\\u2028\\u2029\\u3000]'),_e={9:1,10:1,11:1,12:1,13:1,32:1,160:1,8192:1,8193:1,8194:1,8195:1,8196:1,8197:1,8198:1,8199:1,8200:1,8201:1,8202:1,8203:1,8232:1,8233:1,12288:1},_f='--'.split(/-/)!=3||'1-2'.split(/(-)/).join('|')!='1|-|2';var _g,_h;function _i(_j){if(!_h)_h=(_g='          '.replace(/ /g,'          ')).length;if(_j>_h)_h=(_g=_k(_g,Math.floor(_j/_h))+_g.substr(0,_j%_h)).length;return _g.substr(0,_j);}function _l(_m,_n,_o){if(!_n)return true;var _p=_m.length,_q=_n.length,_r=_o?_p-_q:0,_s=_r+_q-1;return(_q<=_p&&_m.charCodeAt(_r)==_n.charCodeAt(0)&&(_q==1||(_m.charCodeAt(_s)==_n.charCodeAt(_q-1)&&(_q==2||(_q==_p?_n==_m:_o?_m.indexOf(_n,_r)==_r:_m.lastIndexOf(_n,_s)==0)))));}_a.contains=function(_m,_n){return(_n.length<=_m.length&&(_a.startsWith(_m,_n)||_a.endsWith(_m,_n)||_m.indexOf(_n)> -1));};
_a.endsWith=function(_m,_n){return _l(_m,_n,true);};var _t=_a.hasPadding=function(_m){var _p=_m.length;return!!(_p&&(_e[_m.charCodeAt(0)]||_e[_m.charCodeAt(_p-1)]));};_a.hugJoin=function(_u,_v,_w,_x){return(_u.length?(''+_v+_u.join(''+_w+(_x!=_b?_x:'')+_v)+_w):'');};_a.joinUsingSuffixPriority=function(_v,_w,_y){var _z=_w.length;return(_y<_z?_w.substr(0,_y):_y==_z?_w:_A(_v,_y-_z)+_w);};var _A=_a.limitLength=function(_m,_y){var _B='...',_C=_B.length;return(_y<1?'':_y<=_C?_m.slice(0,_y):_m.length>_y?(_m.substr(0,_y-_C)+_B):_m);};var _D=[],_k=_a.repeat=function(_m,_E){if(_E<1|| !_m)return'';if(_E==1)return _m;if(_m==' ')return _i(_E);_D.length=_E+1;return _D.join(_m);};_a.split=function(_m,_F,_G){if(_f&&_F instanceof RegExp){if(_G==_b)_G=Infinity;if(!_G)return[];_m+='';_F=new RegExp(_F.source,'g'+(_F.multiline?'m':'')+(_F.ignoreCase?'i':''));var _p=_m.length;if(_p){var _H=[],_I=1,_J,_K=0;while(_I&&_K<_p&&_H.length<_G){if((_I=_F.exec(_m))&& !(_J=_I[0]))_I.index=_K+1;_H.push(_m.slice(_K,_I?_I.index:_p));if(_I){
_I.length>1&&_I.index<_p&&_H.push.apply(_H,_I.slice(1));_K=_F.lastIndex=_I.index+_J.length;_J&&_K==_p&&_H.push('');}}return _H;}else{return _F.test('')?[]:[''];}}else{return _m.split(_F,_G);}};_a.splitInTwo=function(_m,_F){if(_F instanceof RegExp)_F=(_m.match(_F)||_c)[0];var _L=_F!=_b?_m.indexOf(_F): -1;return(_L> -1?[_m.substr(0,_L),_m.substr(_L+_F.length)]:[_m,'']);};_a.startsWith=_l;_a.toCamel=function(_M,_N){return((Uize.isArray(_M)?_M.join(' '):_M).toLowerCase().replace(/^\W+/,'').replace(/\W+$/,'').replace(_N?/(^|\W+)./g:/\W+./g,function(_I){return _I.slice(-1).toUpperCase()}));};_a.trim=function(_m,_O){if(!_t(_m))return _m;var _P=_O==1?0:_m.search(_d),_Q=_m.length-1;if(_P== -1)return'';if(_O!= -1)while(_e[_m.charCodeAt(_Q)])_Q--;return _m.slice(_P,_Q+1);};_a.trimLeft=function(_m){return _a.trim(_m,-1);};_a.trimRight=function(_m){return _a.trim(_m,1);};return _a;}});


Uize.module({name:'Uize.Template',required:['Uize.Url','Uize.Json','Uize.String'],builder:function(){var _a=function(){},_b=true,_c=false,_d='string',_e=Uize.String,_f=_e.splitInTwo,_g=_e.trim;var _h={},_i=/^\s*=/,_j=/^\s*@/,_k=/^\s*\./,_l=/^!\s*/,_m=/(\r|\n|\r\n)[ \t]*$/,_n=/^[ \t]*(\r|\n|\r\n)[ \t]*/,_o='->',_p={};function _q(_r,_s,_t,_u){if(_s){_s=_s.split(_o);for(var _v= -1,_w=_s.length,_x,_y,_z,_A;++_v<_w;){if(_y=_g((_x=_f(_s[_t?_w-_v-1:_v],'{'))[0])){if(_z=_l.test(_y))_y=_y.replace(_l,'');if(_A=_a.encodings[_y]){if(_t)_z= !_z;var _B=_g(_x[1]),_C=_z?'from':'to',_D=_A[_C];_u&&_u(_y+':'+_C,_D.required);_r=_D.expansion(_r,_B?('{'+_B):'');}}}}return _r;}_a.compile=function(_E,_F){_F=_F||_h;var _G=[],_H={},_I={},_J={},_K=_F.openerToken||'<%',_L=_F.closerToken||'%>',_M=_F.gobbleWhitespace!==_c,_N=_E.length,_O='var output = [];',_P='return output.join (\'\');',_Q=[_O],_R=[],_S=0,_T,_U=_b,_V,_W,_X,_Y,_Z;function _0(_W){if(_R.length){_Q.push('output.push ('+_R.join(',')+');');_R=[];}_Q.push(_W);}
function required(_1){if(_1){if(typeof _1==_d)_1=_1.split(',');for(var _2= -1,_3=_1.length,_4;++_2<_3;){if(!_H[_4=_1[_2]]){_G.push(_4);_H[_4]=1;}}}}function input(_5){Uize.copyInto(_J,_5);}function startBlock(_6,_7){_0('function '+_6+' ('+(_7||'')+') {'+_O);}function endBlock(){_0(_P+'}');}while(_U){_T=_E.indexOf(_K,_S);if(_T<0)_T=_N;_V=_E.slice(_S,_T);if(_U=_T<_N){_S=_E.indexOf(_L,_T+=2);_Y=_i.test(_W=_E.slice(_T,_S));_Z=_Y||_k.test(_W);_X= !_Z&&_j.test(_W);_S+=2;}if(_V){if(_M&&_U&& !_Z&&_m.test(_V)&&_n.test(_E.substr(_S)))_V=_V.replace(_m,'');_V&&_R.push('\''+_V.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/\'/g,'\\\'')+'\'');;}if(_U){if(_Z){var _8=_f(_Y?_W.replace(_i,''):'input'+_W,_o);_R.push(_q(_g(_8[0]),_8[1],_c,function(_9,_ba){if(!_I[_9]){required(_ba);_I[_9]=1;}}));}else if(_X){eval(_W.replace(_j,''));}else{_0(_W);}}}_0(_P);var _bb=_Q.join('\n'),_bc=new Function('input',_bb);return(_F.result=='full'?{input:_J,required:_G,code:_bb,templateFunction:_bc}:_bc);};
_a.encode=function(_bd,_s,_t){var _be=(_t?'! ':'')+_s;return((_p[_be]||(_p[_be]=new Function('e','return '+_q('e',_s,_t))))(_bd));};_a.decode=function(_bf,_A){return _a.encode(_bf,_A,_b)};var _bg=_a.encoders={},_bh=_a.decoders={},_bi=_a.defineStandardEncoding=function(_y,_bj,_bk,_bl){var _bm=_bj+'.'+_bl+' (',_bn=_bj+'.'+_bk+' (';if(_bj=='Uize.Json'||_bj=='Uize.Url'){var _bo=eval(_bj);_bg[_y]={encoder:_bo[_bk]};_bh[_y]={decoder:_bo[_bl]};}_a.encodings[_y]={to:{required:_bj,expansion:function(_bp,_bq){return _bn+_bp+(_bq&&',')+_bq+')'}},from:{required:_bj,expansion:function(_bp,_bq){return _bm+_bp+(_bq&&',')+_bq+')'}}};};_a.encodings={};_bi('iso8601','Uize.Date','toIso8601','fromIso8601');_bi('json','Uize.Json','to','from');_bi('miniJson','Uize.Json','to','from');_a.encodings.miniJson.to.expansion=function(_bp){return'Uize.Json.to ('+_bp+',\'mini\')'};_bg.miniJson.encoder=function(_br){return Uize.Json.to(_br,'mini')};_bi('tagAttributes','Uize.Xml','toAttributes','fromAttributes');
_bi('tagAttributeValue','Uize.Xml','toAttributeValue','fromAttributeValue');_bi('url','Uize.Url','resolve','from');_bi('urlParams','Uize.Url','toParams','fromParams');_bi('urlPiece','Uize.Url','toPiece','fromPiece');return _a;}});


Uize.module({name:'Uize.Tooltip',required:['Uize.Node','Uize.Fade'],builder:function(){var _a=function(){},_b=true,_c=false,_d,_e=Uize.Node;var _f=Uize.getGuid(),_g=[],_h,_i=16;function _j(_k){return _e.getById(Uize.isFunction(_k)?_k():_k);}function _l(){_m()}function _n(_o){if(_o!=_h){if(_o){if(_h){_p.stop();_q();}if(!_o._r){_e.wire(document.body,'scroll',_l,_f);_e.wire(document.documentElement,'mousemove',_l,_f);}_h=_o;_e.setStyle(_h._s,{position:'absolute',zIndex:5000,left:-50000,top:-50000});_e.display(_h._s);_m();}else{_p.get('duration')>0?_p.start():_q();}}else if(_o){_p.stop();_e.setOpacity(_h._s,1);}}_a.showTooltip=function(_k,_t,_r){if(_k=_j(_k)){if(_t!==_c){_g.push({_s:_k,_r:_r});}else{for(var _u=_g.length;--_u> -1;)if(_g[_u]._s==_k)break;_u> -1&&_g.splice(_u,1);}_n(_g[_g.length-1]);}};_a.hideTooltip=function(_k){_a.showTooltip(_k,_c)};var _m=_a.positionTooltip=function(_k,_v){_h&&(_k===_d?(_k=_h._s):_h._s==_j(_k))&&_e.setAbsPos(_k,_e.getEventAbsPos(_v),_i);};
var _p=_a.fade=new Uize.Fade({duration:0});function _q(){_h._r||_e.unwireEventsByOwnerId(_f);_e.display(_h._s,_c);_e.setOpacity(_h._s,1);_h=null;}_p.wire({'Changed.value':function(){_e.setOpacity(_h._s,1-_p.get('progress'))},Done:_q});return _a;}});


Uize.module({name:'Uize.Widget.AutoTooltip',required:['Uize.Tooltip','Uize.String'],builder:function(c_a){var c_b,c_c='auto',c_d='title';var c_e=c_a.subclass(),c_f=c_e.prototype;c_f.c_g=function(){var c_h=this;if(c_h.isWired){var c_i=c_h.c_i;c_i&&c_h.buildHtml(c_i);Uize.Tooltip.showTooltip(c_h.getNode(),!!c_i);}};c_f.c_j=function(){var c_h=this,c_k={},c_l={};if(c_h.isWired){c_h.wireNode(c_h.c_m=Uize.Node.find(c_h.c_m),{mouseover:function(){var c_n=this,c_o=c_n.id||(c_n.id=Uize.getGuid()),c_p=c_k[c_o];if(c_p===c_b){var c_q=c_h.c_q;if(c_q==c_c)c_q=c_n.title?c_d:'alt';var c_r=c_n.getAttribute(c_q);c_p=c_k[c_o]=c_r?c_h.c_s(c_r):null;if(c_p&&c_q==c_d)c_l[c_o]=c_n.title;}if(c_l[c_o])c_n.title='';c_h.set({c_i:c_p});},mouseout:function(){var c_n=this,c_t=c_l[c_n.id];if(c_t)c_n.title=c_t;c_h.set({c_i:null});}});}};c_f.updateUi=function(){this.c_g();};c_f.wireUi=function(){var c_h=this;if(!c_h.isWired){c_a.prototype.wireUi.call(c_h);c_h.c_j();}};c_e.registerProperties({c_i:{name:'data',onChange:c_f.c_g},c_q:{
name:'dataAttribute',value:'auto'},c_s:{name:'dataDecoder',value:function(c_u){var c_v={},c_w=[],c_x=/(([A-Z0-9 ]+:.+?)((\s*\|\s*)|$))([A-Z ]+:|$)/,c_y=this.c_y||function(c_z){return c_z};while(c_u){var c_A=c_u.match(c_x)||c_w,c_B=c_A[2];if(c_B){var c_C=Uize.String.splitInTwo(c_B,/\s*:\s*/);c_v[c_y(c_C[0])]=c_C[1];c_u=c_u.substr(c_A[1].length);}else{c_u='';}}return c_v;}},c_y:{name:'dataKeyTransformer',value:Uize.String.toCamel},c_m:{name:'nodes',onChange:c_f.c_j}});return c_e;}});


Uize.module({name:'Uize.Widget.Button',required:'Uize.Node',builder:function(c_a){var c_b,c_c=true,c_d=false,c_e=Uize.Node;var c_f=c_a.subclass(null,function(){var c_g=this;function c_h(){if(c_g.isWired){c_g.c_i()||c_g.set({c_j:''});c_g.c_h();}}c_g.wire({'Changed.busyInherited':c_h,'Changed.enabledInherited':c_h});}),c_k=c_f.prototype;var c_l,c_m={},c_n={grayed:16,'':8,over:4,active:2,playing:1},c_o='(Grayed|Over|Active|Playing)',c_p=new RegExp(c_o),c_q=new RegExp('(?:(?:(\\S+)\\s+\\1'+c_o+'))','g'),c_r=new RegExp('\\S*'+c_o+'\\b','g'),c_s=/\b(disabled|over|active|playing)\b/,c_t={},c_u={mouseover:['over','Over'],mouseout:['','Out'],mousedown:['down','Down'],mouseup:['over','Up'],click:['over','Click']};c_k.c_v=c_d;c_k.c_i=function(){var c_g=this;return!!(c_g.get('enabledInherited')&& !c_g.get('busyInherited')&&(!c_g.c_w||c_g.c_x||c_g.c_y));};c_k.c_z=function(){this.c_A!=c_b&&this.isWired&&this.setNodeInnerHtml('text',this.c_A);};var c_h=c_k.c_h=function(){var c_g=this;if(c_g.isWired){var c_B=c_g.c_B,
c_C=c_g.get('enabledInherited'),c_D=c_g.get('busyInherited'),c_E=(!c_C?16:0)|(!c_g.c_j||c_D?8:0)|(c_g==c_l?4:0)|(c_g.c_j=='down'||c_g.c_w?2:0)|(c_g.c_F?1:0),c_G=c_g.c_H[c_E];if(c_G==c_b){for(var c_I= -1,c_J=c_g.c_J,c_K=c_J.length;++c_I<c_K;){var c_L=c_J[c_I];if(c_E&c_n[c_L]){c_G=c_L;break;}}c_g.c_H[c_E]=c_G;}if(c_g.c_M=='classes'){var c_N=c_B.className,c_O='';if(c_g.c_P=='disambiguated'){var c_Q=c_g.c_Q;if(c_Q==c_b){var c_R=c_N.match(c_q);if(c_R){c_Q=c_R[c_R.length-1].split(' ',2)[0];}else{c_R=c_N.replace(c_r,'').match(/(\S+)\s*$/);if(c_R)c_Q=c_R[c_R.length-1];}if(c_g.c_Q=c_Q=c_Q||'')c_g.c_S=c_t[c_Q]||(c_t[c_Q]=new RegExp(c_Q+'(\\s+'+c_Q+c_o+')?'));}var c_T=c_G?' '+c_Q+Uize.capFirstChar(c_G):'';c_O=c_Q?c_N.replace(c_g.c_S,c_Q+c_T):c_N.replace(c_p,'')+c_T;}else{var c_U=c_G=='grayed'?'disabled':c_G;c_O=c_s.test(c_N)?c_N.replace(c_s,c_U):c_N+(c_U?' ':'')+c_U;}if(c_O!=c_N)c_B.className=c_O;}else if(c_g.c_M=='frames'){c_g.c_V.style.top='-'+(c_g.c_W.c_X[c_G]*c_g.c_Y.height)+'px';}if(c_g.c_Z&&Uize.Tooltip){
var c_0=c_g.c_j=='over'&&c_C&& !c_g.c_w;c_0!=c_g.c_v&&Uize.Tooltip.showTooltip(c_g.c_Z,c_g.c_v=c_0);}c_g.get('busyInherited')?c_e.setStyle(c_B,{cursor:'wait'}):c_e.showClickable(c_B,c_g.c_i());}};c_k.c_1=function(c_2){var c_g=this;if(c_g.isWired){var c_3=c_2.type,c_4=c_3=='click',c_i=c_g.c_i();if(!c_g.c_5){c_g.c_5=c_c;function c_1(c_2){c_g.c_1(c_2)}c_g.wireNode(c_g.c_B,{mouseout:c_1,mousedown:c_1,mouseup:c_1});}if(c_4)c_2.cancelBubble=c_c;if(c_i){var c_6=c_u[c_3];c_g.set({c_j:c_6[0]});c_g.fire({name:c_6[1],domEvent:c_2});c_4&&(c_g.c_w?c_g.c_x:c_g.c_7)&&c_g.set({c_w:!c_g.c_w});}}};c_k.updateUi=function(){this.c_h();this.c_z();};c_k.wireUi=function(){var c_g=this;if(!c_g.isWired){c_g.c_V=c_b;var c_B=c_g.c_B=c_g.getNode();if(c_B){var c_8=c_B.childNodes;if(c_8.length&&(c_8.length>1||c_8[0].nodeType!=3)&&(c_g.c_V=c_g.getNode('frames'))){c_g.c_M='frames';c_g.c_Y=c_e.getDimensions(c_g.c_V.parentNode);}if(c_g.c_9&&c_B.tagName=='A'&& !c_B.onclick)c_B.onclick=c_e.returnTrue;function c_1(c_2){c_g.c_1(c_2)}c_g.wireNode(
c_B,{mouseover:c_1,click:c_1});if(c_g.c_A==c_b){var c_ba=c_g.getNode('text');c_ba&&c_g.set({c_A:c_ba.innerHtml});}c_a.prototype.wireUi.call(c_g);}}};c_f.addChildButton=function(c_bb,c_bc){var c_g=this,c_bd;function c_be(){c_bd.wire('Click',function(c_bf){if(c_bc)typeof c_bc=='string'?c_g.fire(c_bc):c_bc(c_bf);c_g.fire(c_bf);});}if(c_g==c_f){c_bd=new c_f({idPrefix:c_bb,name:c_bb,c_9:c_c});c_be();(window[c_bd.instanceId]=c_bd).wireUi();}else{c_bd=c_g.children[c_bb];if(!c_bd){c_bd=c_g.addChild(c_bb,c_f);c_be();}}return c_bd;};c_f.registerProperties({c_y:{name:'allowClickWhenSelected',onChange:c_h},c_7:'clickToSelect',c_x:{name:'clickToDeselect',onChange:c_h},c_P:{name:'classNamingForStates',value:'disambiguated'},c_W:{name:'frameOrder',onChange:function(){var c_W=this.c_W;if(!c_W.c_X){for(var c_bg= -1,c_bh=c_W.length,c_X=c_W.c_X={};++c_bg<c_bh;)c_X[c_W[c_bg]]=c_bg;}},value:['grayed','','over','active','playing']},c_9:{name:'followLink',value:c_d},c_M:{name:'mode',value:'classes'},c_F:{name:'playing',
onChange:c_h,value:c_d},c_w:{name:'selected',onChange:c_h,value:c_d},c_j:{name:'state',onChange:function(){var c_g=this;if(!c_g.c_j){if(c_l==c_g)c_l=c_b;}else if(c_g.c_j=='over'){c_l&&c_l!=c_g&&c_l.set({c_j:''});c_l=c_g;}c_g.isWired&&c_g.c_h();},value:''},c_J:{name:'statePrecedence',onChange:function(){var c_g=this,c_bi=c_g.c_J.c_bj||(c_g.c_J.c_bj=c_g.c_J.join(','));c_g.c_H=c_m[c_bi]||(c_m[c_bi]={});c_g.isWired&&c_g.c_h();},value:['playing','active','grayed','over','']},c_A:{name:'text',onChange:c_k.c_z},c_Z:'tooltip'});return c_f;}});


Uize.module({name:'Uize.Widget.Scrolly',required:['Uize.Fade','Uize.Widget.Button'],builder:function(c_a){var c_b=true,c_c=false;var c_d=c_a.subclass(function(){var c_e=this;c_e.fade=new Uize.Fade({duration:400,curve:Uize.Fade.celeration(0,1),quantization:1});c_e.fade.wire('Changed.value',function(){c_e.isWired&&c_e.setNodeProperties('view',c_e.fade.valueOf());});},function(){var c_e=this;function c_f(c_g,c_h,c_i){c_e.c_j(c_g,function(c_k){var c_l=c_k.domEvent.shiftKey?Infinity:1,c_m={};if(c_h)c_m.c_n=c_e.c_n+c_h*c_l;if(c_i)c_m.c_o=c_e.c_o+c_i*c_l;c_e.set(c_m);})}c_f('left',-1,0);c_f('right',1,0);c_f('up',0,-1);c_f('down',0,1);}),c_p=c_d.prototype;c_p.c_j=Uize.Widget.Button.addChildButton;c_p.c_q=function(c_r,c_s,c_t){var c_e=this;c_e.isWired&&c_e.displayNode([c_e.children[c_s].getNode(),c_e.children[c_t].getNode()],c_e.c_u||c_e.get('isScrollable'+c_r));};c_p.c_v=function(c_w){if(this.isWired){var c_x=this.getNode('view'),c_y=c_w=='X'?'Width':'Height';this.set('maxPage'+c_w,c_x?Math.max(
Math.ceil(c_x['scroll'+c_y]/c_x['offset'+c_y])-1,0):0);}};c_p.c_z=function(c_A,c_w){this.c_v(c_w);return(Uize.isNumber(c_A= +c_A)?Uize.constrain(c_A,0,this.get('maxPage'+c_w)||0):this.get('page'+c_w));};c_p.c_B=function(c_w){var c_C=this.get('page'+c_w),c_D=this.children;function c_E(c_g,c_F){var c_G=c_D[c_g];c_G&&c_G.set({enabled:c_F?'inherit':c_c});}c_E(c_w=='X'?'left':'up',c_C);c_E(c_w=='X'?'right':'down',(this.get('maxPage'+c_w)-c_C+1||2)>1);};c_p.updateUi=function(){this.c_v('X');this.c_v('Y');};function c_H(){var c_e=this;if(c_e.isWired){var c_x=c_e.getNode('view');c_e.fade.start({startValue:{scrollLeft:c_x.scrollLeft,scrollTop:c_x.scrollTop},endValue:{scrollLeft:c_e.c_n*c_x.offsetWidth,scrollTop:c_e.c_o*c_x.offsetHeight}});}}function c_I(){this.c_B('X')}function c_J(){this.c_B('Y')}function c_K(){this.c_q('X','left','right')}function c_L(){this.c_q('Y','up','down')}c_d.registerProperties({c_M:{name:'isScrollableX',onChange:c_K,value:c_c},c_N:{name:'isScrollableY',onChange:c_L,value:c_c},c_O:{
name:'maxPageX',onChange:[function(){this.set({c_M:(this.c_O+1||2)>1});},c_I]},c_P:{name:'maxPageY',onChange:[function(){this.set({c_N:(this.c_P+1||2)>1});},c_J]},c_n:{name:'pageX',conformer:function(c_Q){return this.c_z(c_Q,'X')},onChange:[c_H,c_I],value:0},c_o:{name:'pageY',conformer:function(c_Q){return this.c_z(c_Q,'Y')},onChange:[c_H,c_J],value:0},c_u:{name:'showButtonsWhenNotScrollable',onChange:[c_K,c_L],value:c_b}});return c_d;}});


Uize.module({name:'UizeDotCom.Page.Home',required:['Uize.Node.Event','Uize.Widget.HoverFader','Uize.Widget.Scrolly','Uize.Widget.AutoTooltip','Uize.Template','Uize.Fx','Uize.Fx.xShadows','Uize.Curve','Uize.Curve.Rubber'],builder:function(e_a){var e_b=e_a.subclass(null,function(){var e_c=this;e_c.addChild('demosScrolly',Uize.Widget.Scrolly).fade.set({curve:Uize.Curve.Rubber.easeOutBounce(3,.5),duration:1000});e_c.addChild('demoInfoTooltip',Uize.Widget.AutoTooltip,{nodes:{className:/\bdemosItem\b/},html:true});e_c.addChild('borderHoverFader',Uize.Widget.HoverFader,{nodes:{className:/\b(subPod|demosItem)\b/},defaultStyle:{borderColor:'788'},hoverStyle:{borderColor:'f'},fadeIn:{duration:800,curve:{borderColor:[Uize.Curve.easeOutPow(9),Uize.Curve.easeInPow(2),Uize.Curve.easeInPow(6)]}},fadeOut:{duration:1200,curve:{borderColor:[Uize.Curve.easeOutPow(4),null,Uize.Curve.easeInPow(3)]}}});e_c.addChild('podHeadingHoverFader',Uize.Widget.HoverFader,{nodes:{className:/\bpodHeading\b/},defaultStyle:{color:'fff',
backgroundColor:'3a4950'},hoverStyle:{color:'000',backgroundColor:'fff'},fadeIn:{duration:500,curve:{color:Uize.Curve.easeInPow(2),backgroundColor:[Uize.Curve.easeInPow(3),Uize.Curve.easeOutPow(1.2),Uize.Curve.easeOutPow(2.3)]}},fadeOut:{duration:700,curve:{color:Uize.Curve.easeOutPow(7),backgroundColor:[Uize.Curve.easeOutPow(1.5),Uize.Curve.easeInPow(1.5),Uize.Curve.easeInPow(1.3)]}}});}),e_d=e_b.prototype;e_d.wireUi=function(){var e_c=this;if(!e_c.isWired){e_a.prototype.wireUi.call(e_c);Uize.Fx.fadeStyle(page.getNode('mantleImage'),{opacity:.01,clip:[50,450,50,450]},{opacity:1,clip:[0,900,100,0]},2000,{curve:Uize.Curve.easeInOutPow(4)}).wire('Done',function(){e_c.children.podHeadingHoverFader.tickle(350)});}};e_b.set({showFooter:false,showShareThisPanel:false});return e_b;}});
		Uize.module ({name:'UizeDotCom.Page.Home.library'});
	}
});

