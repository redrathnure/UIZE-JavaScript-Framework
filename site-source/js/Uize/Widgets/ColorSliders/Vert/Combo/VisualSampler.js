/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.ColorSliders.Vert.Combo.VisualSampler Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2015 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 5
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Widgets.ColorSliders.Vert.Combo.VisualSampler= class implements a visual sampler widget for the =Uize.Widgets.ColorSliders.Vert.Combo.Widget= class.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widgets.ColorSliders.Vert.Combo.VisualSampler',
	superclass:'Uize.Widgets.VisualSampler.Widget',
	required:'Uize.Widgets.ColorSliders.Vert.Combo.Widget',
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addSample ({
				});
			},

			set:{
				samplerWidgetClass:Uize.Widgets.ColorSliders.Vert.Combo.Widget
			}
		});
	}
});

