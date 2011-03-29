/*
	UIZE JAVASCRIPT FRAMEWORK 2011-02-20

	http://www.uize.com/reference/Uize.Wsh.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Wsh',builder:function(){var _a=function(){},_b;function _c(_d){return((typeof _d=='object'&&_d&&_d.fileSystemObject)||_a._e||(_a._e=new ActiveXObject('Scripting.FileSystemObject')));}_a.fileExists=function(_f){return _c().FileExists(_f);};_a.getFiles=function(_g,_h,_i){var _j=_h==_b?function(){return true}:_h instanceof RegExp?function(_f){return _h.test(_f)}:_h;if(_i==_b)_i=function(_f){return _f};var _k=[],_l=new Enumerator(_c().getFolder(_g).files),_f;while(!_l.atEnd()){_j(_f=_l.item().Path)&&_k.push(_i(_f));_l.moveNext();}return _k;};var _m=_a.getScriptFolderPath=function(){return WScript.ScriptFullName.slice(0,-WScript.ScriptName.length-1);};var _n=_a.readFile=function(_d){var _e=_c(_d),_o=typeof _d=='string'?_d:_d.path;if(_e.GetFile(_o).Size){var _p=_e.OpenTextFile(_o,1),_q=_p.ReadAll();_p.Close();return _q;}return'';};var _r=_a.writeFile=function(_d){var _o=_d.path,_e=_c(_d);var _g=_o.substr(0,_o.lastIndexOf('\\'));if(!_e.FolderExists(_g)){var _s=_g.split('\\'),_t=_s[0];for(
var _u=0,_v=_s.length;++_u<_v;){_t+='\\'+_s[_u];_e.FolderExists(_t)||_e.CreateFolder(_t);}}var _p=_e.CreateTextFile(_o);_p.Write(_d.text);_p.Close();};_a.buildFiles=function(_d){var _w=_d.alwaysBuild,_x=_d.dryRun,_e=_c(_d),_y=WScript.ScriptName,_z=WScript.ScriptFullName,_A=_d.doNotEnter,_B=[];if(Uize.isArray(_A))_A=new RegExp('\\\\('+_A.join('|')+')(\\W|$)');function _C(_f){return+new Date(_e.GetFile(_f).DateLastModified);}function _D(_g){var _E=_e.getFolder(_g),_F=new Enumerator(_E.SubFolders),_G=_A&&_A.test(_g)?false:_d.targetFolderPathCreator(_g);if(typeof _G=='string'){var _l=new Enumerator(_E.files);while(!_l.atEnd()){var _H=_l.item().Path;if(_H!=_z){var _I=_H.substr(_H.lastIndexOf('\\')+1),_J=_d.targetFilenameCreator(_I);if(_J){var _K=_G+'\\'+_J,_L=_w?'ALWAYS BUILD':(_e.FileExists(_K)?(_C(_H)>_C(_K)?'WAS OUT OF DATE':''):'DIDN\'T EXIST'),_M,_N='';if(_L){var _O=new Date,_P=_d.fileBuilder(_I,_n(_H)),_Q=_P.outputText;_N=_P.logDetails||'';!_x&&_Q!=_b&&_r({path:_K,text:_Q});_M=new Date-_O;}_B.push(
(_L?'***** ':'')+_H+'\n'+'\tTARGET FILE: '+_K+'\n'+'\t'+(_L?('BUILT ('+_L+'), BUILD DURATION: '+_M+'ms'):'no action, file is current')+'\n'+_N+'\n');}}_l.moveNext();}}if(_G!==false){while(!_F.atEnd()){_D(_F.item().Path);_F.moveNext();}}}_D(_m());_r({path:_d.logFileName||_y.replace(/\.js$/,'.log'),text:_B.join('')});};function _R(_S,_T,_U){return((_R._V||(_R._V=new ActiveXObject('wscript.shell'))).Popup(_S+'',0,_T,_U));}if(typeof alert=='undefined')alert=function(_S){_R(_S,'Windows Script Host Alert',0|48);};if(typeof confirm=='undefined')confirm=function(_S){return _R(_S,'Please Confirm...',1|32)==1;};return _a;}});