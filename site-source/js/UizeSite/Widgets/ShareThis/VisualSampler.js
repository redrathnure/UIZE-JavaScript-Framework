/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeSite.Widgets.ShareThis.VisualSampler Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013-2015 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =UizeSite.Widgets.ShareThis.VisualSampler= class implements a visual sampler widget for the =UizeSite.Widgets.ShareThis.Widget= class.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'UizeSite.Widgets.ShareThis.VisualSampler',
	superclass:'Uize.Widgets.VisualSampler.Widget',
	required:'UizeSite.Widgets.ShareThis.Widget',
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addSample ();
			},

			set:{
				samplerWidgetClass:UizeSite.Widgets.ShareThis.Widget
			}
		});
	}
});

