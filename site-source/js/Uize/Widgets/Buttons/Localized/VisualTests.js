/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.Buttons.Localized.VisualTests Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2014-2015 UIZE
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
		The =Uize.Widgets.Buttons.Localized.VisualTests= class implements a visual tests widget base class for localized button widget classes.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widgets.Buttons.Localized.VisualTests',
	superclass:'Uize.Widgets.VisualTests.Widget',
	required:[
		'Uize.Widgets.StateValues',
		'Uize.Widgets.Buttons.Localized.Widget'
	],
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addStateCombinationTestCases ({
					locale:Uize.Widgets.StateValues.locale,
					size:Uize.Widgets.StateValues.size
				});
				this.addStateCombinationTestCases ({
					enabled:[true,false],
					selected:[false,true]
				});
			},

			staticProperties:{
				widgetClass:Uize.Widgets.Buttons.Localized.Widget
			}
		});
	}
});

