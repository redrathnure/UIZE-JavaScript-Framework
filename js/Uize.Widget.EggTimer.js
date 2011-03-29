/*
	UIZE JAVASCRIPT FRAMEWORK 2011-02-20

	http://www.uize.com/reference/Uize.Widget.EggTimer.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.EggTimer',required:'Uize.Widget.Count',builder:function(c_a){var c_a=Uize.Widget,c_b=c_a.subclass(function(){var c_c=this;c_c.c_d=null;c_c.c_e=false;c_c.c_f=function(){c_c.advance()};}),c_g=c_b.prototype;c_g.advance=function(){var c_c=this;if(c_c.c_e){c_c.children.seconds.down();c_c.c_d=setTimeout(c_c.c_f,1000);}};c_g.resetTo=function(c_h){var c_c=this;c_c.c_e=false;c_c.set({startTime:c_h});c_c.c_i&&c_c.children.seconds.setCount(c_h.seconds);c_c.c_j&&c_c.children.minutes.setCount(c_h.minutes);c_c.c_k&&c_c.children.hours.setCount(c_h.hours);c_c.c_l&&c_c.children.days.setCount(c_h.days);};c_g.reset=function(){this.resetTo(this.c_m);};c_g.resume=function(){var c_c=this;c_c.c_e=true;c_c.c_d=setTimeout(c_c.c_f,1000);};c_g.stop=function(){this.c_e=false;};c_g.wireUi=function(){var c_c=this;if(!c_c.isWired){var c_n=c_c.get('idPrefix');function c_o(c_p,c_q,c_r){var c_s=c_c.addChild(c_p,Uize.Widget.Count,{digits:2,limit:c_r,numbersImagesPath:c_c.c_t,numbersFiletype:c_c.c_u});
c_s.wireUi();c_s.setCount(c_q);return c_s;}function c_v(){if((!c_c.c_j||(c_c.c_j&& !c_c.children.minutes.getCount()))&&(!c_c.c_k||(c_c.c_k&& !c_c.children.hours.getCount()))&&(!c_c.c_l||(c_c.c_l&& !c_c.children.days.getCount()))){c_c.c_e=false;c_c.fire('zero');if(c_c.c_w!='')document.location.href=c_c.c_w;}}c_c.c_i&&c_o('seconds',c_c.c_m.seconds,59).wire({zero:c_v,limit:function(){c_c.c_j&&c_c.children.minutes.down()}});c_c.c_j&&c_o('minutes',c_c.c_m.minutes,59).wire('limit',function(){c_c.c_k&&c_c.children.hours.down()});c_c.c_k&&c_o('hours',c_c.c_m.hours,23).wire('limit',function(){c_c.c_l&&c_c.children.days.down()});c_c.c_l&&c_o('days',c_c.c_m.days,99);c_a.prototype.wireUi.call(c_c);if(c_c.c_x)c_c.resume();}};c_b.registerProperties({c_x:{name:'autoStart',value:false},c_m:{name:'startTime',value:{days:0,hours:0,minutes:0,seconds:0}},c_r:{name:'limit',value:{days:0,hours:0,minutes:0,seconds:0}},c_l:{name:'showDays',value:true},c_k:{name:'showHours',value:true},c_j:{name:'showMinutes',value:true},c_i:{
name:'showSeconds',value:true},c_w:{name:'redirectUrl',value:''},c_y:{name:'direction',value:'down'},c_t:{name:'numbersImagesPath',value:''},c_u:{name:'numbersFiletype',value:'gif'}});return c_b;}});