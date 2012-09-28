/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.RunUnitTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.RunUnitTests',required:['Uize.Wsh','Uize.Test','Uize.Build.Util'],builder:function(){var _a=function(){};function _b(_c){return Uize.Url.from(_c).fileName;}function _d(_e,_f,_g){(_f=new RegExp(_f.source,'g'+(_f.multiline?'m':'')+(_f.ignoreCase?'i':''))).lastIndex=_g||0;return _f.exec(_e);}_a.perform=function(_h){var _i=/\.js$/i,_j=/\.library\.js$/i,_k=/^[a-zA-Z_\$][a-zA-Z0-9_\$]*\.Test($|\.)/,_l=Uize.Wsh.getFiles(env.moduleFolderPath,function(_c){return _i.test(_c)&& !_j.test(_c)},_b).sort(),_m=Uize.lookup(_l);var _n={},_o=[];function _p(_q){if(!_n[_q]){_n[_q]=1;if(_q){var _r;try{Uize.moduleLoader(_q,function(_s){_r=_s});}catch(_t){}if(_r){var _u=_q.substr(0,_q.lastIndexOf('.')),_v=new RegExp('Uize\\s*\\.\\s*module\\s*\\(\\s*\\{\\s*name\\s*:\\s*([\'"])'+Uize.escapeRegExpLiteral(_q)+'\\1'),_w=_d(_r,_v);_u&&_p(_u);if(_w){var _x=_w.index+_w[0].length,_y=/superclass\s*:\s*(['"])([^'"]*)\1/,_z=_d(_r,_y,_x),_A=/required\s*:\s*((['"])([^'"]*)\2|(\[[^\]]*\]))/,_B=_d(_r,_A,_x);
_z&&_p(_z[2]);if(_B){if(_B[4]){var _C=[];try{_C=eval('('+_B[4]+')')}catch(_t){}Uize.forEach(_C,_p);}else{_p(_B[3]);}}}_o.push(_q);}}}}Uize.forEach(_l,function(_q){_k.test(_q)||_p(_q);});var _D,_E=Uize.Test.declare({title:'Unit Tests Suite',test:Uize.map(_o,function(_q){return(_m[_D=_q.match(/([^\.]*)(\.|$)/)[1]+'.Test.'+_q]?Uize.Test.testModuleTest(_D):Uize.Test.requiredModulesTest(_q));})});Uize.Build.Util.runUnitTests(_E,_h.silent=='true');};return _a;}});