/*
	UIZE JAVASCRIPT FRAMEWORK 2011-03-24

	http://www.uize.com/reference/Uize.Color.xUtil.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Color.xUtil',required:'Uize.Array.Sort',builder:function(_a){var _b,_c=_a.prototype;var _d=new _a,_e=new _a,_f={};function _g(_h,_i,_j){return _h+(_i-_h)*_j}function _k(_l,_m){if(_l==_b)_l=_m;return Uize.isArray(_l)?_l:[_l,_l,_l,_l];}_c.blend=function(_n,_o,_j){if(isNaN(_j= +_j))_j=.5;_d.from(_n);_e.from(_o);var _p=_d.tuple,_q=_e.getTuple(_d.encoding);_a.setTuple(this.tuple,_g(_p[0],_q[0],_j),_g(_p[1],_q[1],_j),_g(_p[2],_q[2],_j),_g(_p[3],_q[3],_j));return this;};_c.equal=function(_r){_d.from(_r).setEncoding(this.encoding);var _s=this.tuple,_p=_d.tuple;return(!Math.round(_s[0]-_p[0])&& !Math.round(_s[1]-_p[1])&& !Math.round(_s[2]-_p[2])&& !Math.round(_s[3]-_p[3]));};_c.random=function(){for(var _t=_a.colorSpaces[_a.encodings[this.encoding].colorSpace].tuple,_u=_t.length,_s=this.tuple;--_u>=0;){var _v=_t[_u],_w=_v.min;_s[_u]=_w+Math.random()*(_v.max-_w);}return this;};_a.blend=function(_n,_o,_j,_x){return _d.blend(_n,_o,_j).to(_x||_d.encoding);};_a.equal=function(_n,_o){
return _e.from(_n).equal(_o);};_a.makeCombinations=function(_n,_o,_y,_z,_A){_y=_k(_y,2);_z=_k(_z,0);_A=_A||'color';_d.from(_n);_e.from(_o);var _B=[],_p=_d.tuple,_q=_e.getTuple(_d.encoding),_C=_y[0],_D=_y[1],_E=_y[2],_r=new Uize.Color(_d),_F=_r.tuple;function _G(_u,_j){_F[_u]=_g(_p[_u],_q[_u],_z[_u]?_g(_j,Math.random(),_z[_u]):_j);}for(var _H= -1;++_H<_C;){for(var _I= -1;++_I<_D;){for(var _J= -1;++_J<_E;){_G(0,_H/(_C-1));_G(1,_I/(_D-1));_G(2,_J/(_E-1));_B.push(_r.to(_A));}}}return _B;};_a.mix=function(_K,_x){var _L=_K.length;if(!_L)return new _a;var _M=0,_N=0,_O=0,_P=0,_Q=_d.from(_K[0]).encoding;for(var _R=_L;--_R>=0;){var _p=_d.from(_K[_R]).getTuple(_Q);_M+=_p[0];_N+=_p[1];_O+=_p[2];_P+=_p[3];}_L=_L||1;_a.setTuple(_d.tuple,_M/_L,_N/_L,_O/_L,_P/_L);return _d.to(_x||'color');};_a.random=function(_x){return _d.setEncoding(_x).random().to(_x);};var _S=new Function('tuple','componentNo','return tuple [componentNo]');_a.sort=function(_K,_T,_U){if(_K.length>1){_U=_k(_U,1);var _V=_U[0]==1&&_U[1]==1&&_U[2]==1&&
(_U[3]==1||_U[3]===_b)?_S:function(_s,_u){return(_U[_u]*(_s[_u]-_W[_u])/_X[_u]);},_x=_d.from(_T).encoding,_Y=_a.colorSpaces[_a.encodings[_x].colorSpace].tuple,_W=[_Y[0].min,_Y[1].min,_Y[2].min,(_Y[3]||_f).min],_X=[_Y[0].max-_W[0],_Y[1].max-_W[1],_Y[2].max-_W[2],(_Y[3]||_f).max-_W[3]],_p=_d.tuple,_Z=_V(_p,0),_0=_V(_p,1),_1=_V(_p,2);function _2(_3,_4,_5,_6){return Math.sqrt((_5-_3)*(_5-_3)+(_6-_4)*(_6-_4));}Uize.Array.Sort.sortBy(_K,function(_r){var _q=_e.from(_r).getTuple(_x);return _2(0,_1,_2(_Z,_0,_V(_q,0),_V(_q,1)),_V(_q,2));})}return _K;};}});