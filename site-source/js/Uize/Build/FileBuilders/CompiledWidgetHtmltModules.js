/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Build.FileBuilders.CompiledWidgetHtmltModules Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 3
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Build.FileBuilders.CompiledWidgetHtmltModules= module defines a file builder for widget HTML template (=.htmlt=) modules.

		*DEVELOPERS:* `Chris van Rensburg`

		Functions defined in the file builder are called as instance methods on an instance of a subclass of the =Uize.Services.FileBuilderAdapter= class, so the functions can access instance methods implemented in this class.
*/

Uize.module ({
	name:'Uize.Build.FileBuilders.CompiledWidgetHtmltModules',
	required:[
		'Uize.Build.Util',
		'Uize.Parse.Xml.NodeList',
		'Uize.Parse.Xml.TagAttribute',
		'Uize.Json',
		'Uize.Str.Split'
	],
	builder:function () {
		var
			/*** Variables for Scruncher Optimization ***/
				_undefined,

			/*** General Variables ***/
				_replacementTokenOpener = '{{[[',
				_replacementTokenCloser = ']]}}',
				_replacementTokenRegExp = new RegExp (
					Uize.escapeRegExpLiteral (_replacementTokenOpener) +
					'(.+?)' +
					Uize.escapeRegExpLiteral (_replacementTokenCloser),
					'g'
				)
		;

		/*** Utility Functions ***/
			function _sourceUrlFromTempUrl (m,_pathname) {
				return m.sourceUrlFromTempUrl (_pathname).replace (/\.js$/,'.htmlt');
			}

		return Uize.package ({
			description:'Compiled widget HTML template modules, generated from source .htmlt files',
			urlMatcher:function (_urlParts) {
				var _pathname = _urlParts.pathname;
				return (
					_urlParts.fileType == 'js' &&
					this.isTempUrl (_pathname) &&
					this.fileExists ({path:_sourceUrlFromTempUrl (this,_pathname)})
				);
			},
			builderInputs:function (_urlParts) {
				return {source:_sourceUrlFromTempUrl (this,_urlParts.pathname)};
			},
			builder:function (_inputs,_urlParts) {
				var
					m = this,
					_params = m.params,
					_moduleName = Uize.Build.Util.moduleNameFromModulePath (
						_urlParts.pathname
							.slice ((_params.tempPath + '/' + _params.modulesFolder + '/').length)
							.replace (/\.js$/i,'')
					),
					_result
				;
				Uize.require (
					_moduleName.replace (/\.Html$/,'.Widget'),
					function (_widgetClass) {
						var
							_nodeListParser = new Uize.Parse.Xml.NodeList (m.readFile ({path:_inputs.source})),
							_replacements = {}
						;

						function _ensureNodeAttribute (_node,_attributeName,_attributeValue) {
							var _attribute = _findAttribute (_node,_attributeName);
							_attribute ||
								_node.tagAttributes.attributes.push (
									_attribute = new Uize.Parse.Xml.TagAttribute (_attributeName + '=""')
								)
							;
							if (_attributeValue != _undefined)
								_attribute.value.value = _attributeValue
							;
							return _attribute;
						}

						/*** find root tag node and give it special treatment for id and class attributes ***/
							function _findAttribute (_node,_attributeName) {
								return Uize.findRecord (
									_node.tagAttributes.attributes,
									function (_attribute) {return _attribute.name.name == _attributeName}
								);
							}

							var _rootNode = Uize.findRecord (
								_nodeListParser.nodes,
								function (_node) {
									if (!_node.tagName) return false;
									var _idAttribute = _findAttribute (_node,'id');
									return !_idAttribute || !_idAttribute.value.value;
								}
							);
							if (_rootNode) {
								_ensureNodeAttribute (_rootNode,'id','');
								_ensureNodeAttribute (_rootNode,'class','*');
							}

						/*** build a lookup of HTML bindings by node ID ***/
							var _bindingsById = {};
							Uize.forEach (
								_widgetClass.mBindings_html,
								function (_bindings) {
									Uize.forEach (
										_bindings,
										function (_binding) {
											if (_binding.bindingType) {
												var _id = _binding.nodeName;
												(_bindingsById [_id] || (_bindingsById [_id] = [])).push (_binding);
											}
										}
									);
								}
							);

						/*** recurse parser object tree, process tag nodes and build replacements lookup ***/
							function _processNode (_node) {
								if (_node.tagName) {
									Uize.forEach (
										_node.tagAttributes.attributes,
										function (_attributeParser) {
											function _addReplacement (_attribute,_replacementName,_replacementValue) {
												_replacements [_replacementName] = _replacementValue;
												_attribute.value.value =
													_replacementTokenOpener + _replacementName + _replacementTokenCloser
												;
											}

											var _attributeName = _attributeParser.name.name;
											if (_attributeName == 'id' || _attributeName == 'class') {
												var _attributeValue = _attributeParser.value.value;
												_addReplacement (
													_attributeParser,
													_attributeName + ' ~ ' + _attributeValue,
													_attributeName == 'id'
														? '_idPrefix' + (_attributeValue && ' + \'-' + _attributeValue + '\'')
														: (
															_attributeValue == '*'
																? 'm.rootNodeCssClasses ()'
																: 'm.cssClass (\'' + _attributeValue + '\')'
														)
												);

												/*** translate node's HTML bindings into replacements ***/
													if (_attributeName == 'id') {
														var _bindings = _bindingsById [_attributeValue];
														if (_bindings) {
															var _styleExpressionParts = [];
															Uize.forEach (
																_bindings,
																function (_binding) {
																	var _bindingType = _binding.bindingType;
																	if (_bindingType.slice (0,6) == 'style.') {
																		var _stylePropertyName = _bindingType.slice (6);
																		_styleExpressionParts.push (
																			Uize.Json.to (
																				_stylePropertyName.replace (
																					/* TODO: put this into a separate Uize.Str.* module */
																					/([a-z])([A-Z])/g,
																					function (_match,_lowerCaseLetter,_upperCaseLetter) {
																						return (
																							_lowerCaseLetter +
																							'-' +
																							_upperCaseLetter.toLowerCase ()
																						);
																					}
																				) +
																				':'
																			) +
																			' + ' +
																			'i[' + Uize.Json.to (_binding.propertyName) + ']'
																		);
																	}
																}
															);
															if (_styleExpressionParts.length) {
																var _styleAttribute = _ensureNodeAttribute (_node,'style');
																_addReplacement (
																	_styleAttribute,
																	'style ~ ' + _attributeValue,
																	Uize.Json.to (_styleAttribute.value.value) + ' + ' +
																		_styleExpressionParts.join (' + ')
																);
															}
														}
													}
											}
										}
									);
								}
								var _childNodes = _node.childNodes;
								_childNodes && Uize.forEach (_childNodes.nodes,_processNode);
							}
							_processNode ({childNodes:_nodeListParser});

						/*** re-serialize processed parser object tree, split HTML by replacement tokens ***/
						console.log (_replacements);
							var _templateExpression =
								Uize.map (
									Uize.Str.Split.split (_nodeListParser.serialize (),_replacementTokenRegExp),
									function (_segment,_segmentNo) {
										return _segmentNo % 2 ? _replacements [_segment] : Uize.Json.to (_segment);
									}
								).join (' + ')
							;

						_result = Uize.Build.Util.moduleAsText ({
							name:_moduleName,
							builder:[
								'function () {',
								'	\'use strict\';',
								'',
								'	return Uize.package ({',
								'		process:function (i) {',
								'			var m = this, _idPrefix = i.idPrefix;',
								'			return ' + _templateExpression + ';',
								'		}',
								'	});',
								'}'
							].join ('\n')
						});
					}
				);

				return _result;
			}
		});
	}
});
