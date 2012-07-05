/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-04

	http://www.uize.com/reference/Uize.Test.Uize.Date.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.Date',required:['Uize.Class','Uize.Class.Value'],builder:function(){function c_a(c_b){return+c_b}function c_c(c_b){return c_b+''}function c_d(c_b){return Uize.Date.toIso8601(c_b)}function c_e(c_f,c_g,c_h,c_i,c_j,c_k,c_l){var c_b=new Date(+c_f+(c_f<100&&400),(+c_g||1)-1,+c_h||1,+c_i||0,+c_j||0,+c_k||0,+c_l||0);c_f<100&&c_b.setFullYear(c_f);return c_b;}var c_m=new Date,c_n=24*60*60*1000,c_o=c_e(2001,9,11,8,46,40),c_p=new Date(NaN),c_q=c_e(9,1,1),c_r=c_e(99,1,1),c_s=c_e(999,1,1),c_t=c_e(9999,1,1),c_u=c_e(2001,1,1),c_v=c_e(2001,12,1),c_w=c_e(2001,1,1),c_x=c_e(2001,1,31),c_y=c_e(2001,1,1,23,59,59,999),c_z=c_e(2001,1,2,0,0,0,0),c_A=c_e(2001,6,15),c_B=c_e(2001,12,31,23,59,59,999),c_C=c_e(2002,1,1,0,0,0,0),c_D={minValue:c_z,maxValue:c_B},c_E={minValue:c_z},c_F={minValue:c_B},c_G={minValue:c_z,maxValue:c_z},c_H={};function c_I(c_J,c_K){return{title:c_J,test:function(){var c_L=new Date,c_M=Uize.Date.resolve.apply(Uize.Date,c_K);return this.expectInstanceOf(Date,c_M)&&c_L-c_M<10;}};}
function c_N(c_J,c_O,c_K,c_P){return{title:c_J,test:function(){var c_M=Uize.Date[c_O].apply(Uize.Date,c_K);return(this.expectInstanceOf(Date,c_M)&&c_M.getFullYear()==c_P.getFullYear()&&c_M.getMonth()==c_P.getMonth()&&c_M.getDate()==c_P.getDate());}};}function c_Q(c_J,c_K,c_P){return c_N(c_J,'resolve',c_K,c_P);}function c_R(c_J,c_S,c_T,c_U,c_V){return{title:c_J,test:function(){var c_L=new Date;return this.expect(c_U,Uize.Date.isRecent((c_V||Uize.returnX)(new Date(+c_L+c_S*c_n)),c_T,c_L));}}}function c_W(c_J,c_X,c_V){return{title:c_J,test:function(){var c_Y={minValue:c_z,maxValue:c_z};c_Y[c_X]=c_V(c_z);return(!Uize.Date.inRange(c_y,c_Y)&&Uize.Date.inRange(c_z,c_Y)&& !Uize.Date.inRange(c_A,c_Y));}}}function c_Z(c_J,c_K,c_0){return{title:c_J,test:function(){var c_Y=Uize.Date.getRangeAround.apply(Uize.Date,c_K);return!(c_Y.minValue-c_0.minValue||c_Y.maxValue-c_0.maxValue);}};}function c_1(c_2,c_3,c_4,c_5){var c_0={minValue:c_3,maxValue:c_5};return{
title:'Tests for getting a '+c_2+' sized range around dates that fall at the beginning, in the middle, and at the end of a '+c_2,test:[c_Z('Test getting a '+c_2+' sized range around a date that is at the beginning of a '+c_2,[c_3,c_2],c_0),c_Z('Test getting a '+c_2+' sized range around a date that is within a '+c_2,[c_4,c_2],c_0),c_Z('Test getting a '+c_2+' sized range around a date that is at the end of a '+c_2,[c_5,c_2],c_0)]};}function c_6(c_7,c_8){return{title:'Test that date to get range around is defaulted to now when its value is '+c_8,test:function(){var c_9=Uize.Date.getRangeAround(new Date,'month'),c_ba=Uize.Date.getRangeAround(c_7,'month');return!(c_9.minValue-c_ba.minValue||c_9.maxValue-c_ba.maxValue);}};}return Uize.Test.declare({title:'Test for Uize.Date Module',test:[Uize.Test.requiredModulesTest('Uize.Date'),Uize.Test.staticMethodsTest([['Uize.Date.convert',[['Test that converting 1 year to months produces the result 12',[1,'years','months'],12],
['Test that converting 1 month to weeks produces the result 4.348121428571429',[1,'months','weeks'],4.348121428571429],['Test that converting 1 week to days produces the result 7',[1,'weeks','days'],7],['Test that converting 1 day to hours produces the result 24',[1,'days','hours'],24],['Test that converting 1 hour to minutes produces the result 60',[1,'hours','minutes'],60],['Test that converting 1 minute to seconds produces the result 60',[1,'minutes','seconds'],60],['Test that converting 1 second to milliseconds produces the result 1000',[1,'seconds','ms'],1000],['Test that converting 1 month to years produces the result 1/12',[1,'months','years'],1/12],['Test that converting 1 day to weeks produces the result 1/7',[1,'days','weeks'],1/7],['Test that converting 1 hour to days produces the result 1/24',[1,'hours','days'],1/24],['Test that converting 1 minute to hours produces the result 1/60',[1,'minutes','hours'],1/60],['Test that converting 1 second to minutes produces the result 1/60',
[1,'seconds','minutes'],1/60],['Test that converting 1 millisecond to seconds produces the result 1/1000',[1,'ms','seconds'],1/1000],['Test that the value to be converted can be a string type',['2','hours','seconds'],7200],['Test that the values for all the parameters can be Uize class instances',[Uize.Class.Value({value:'2'}),Uize.Class.Value({value:'hours'}),Uize.Class.Value({value:'seconds'})],7200]]],['Uize.Date.isLeapYear',[['Test that a year that is not perfectly divisible by 4 is not considered a leap year',2001,false],['Test that a year that is perfectly divisible by 4, but is not perfectly divisible by 100, is considered a leap year',2004,true],['Test that a year that is perfectly divisible by 4, but that is perfectly divisible by 100 and not perfectly divisible by 400, is not considered a leap year',1900,false],['Test that a year that is perfectly divisible by 4, but is perfectly divisible by 100, but is also perfectly divisible by 400, is considered a leap year',2000,true]]],
['Uize.Date.getDaysInMonth',[['Test that January has 31 days in a non-leap year',[0,2001],31],['Test that February has 28 days in a non-leap year',[1,2001],28],['Test that March has 31 days in a non-leap year',[2,2001],31],['Test that April has 30 days in a non-leap year',[3,2001],30],['Test that May has 31 days in a non-leap year',[4,2001],31],['Test that June has 30 days in a non-leap year',[5,2001],30],['Test that July has 31 days in a non-leap year',[6,2001],31],['Test that August has 31 days in a non-leap year',[7,2001],31],['Test that September has 30 days in a non-leap year',[8,2001],30],['Test that October has 31 days in a non-leap year',[9,2001],31],['Test that November has 30 days in a non-leap year',[10,2001],30],['Test that December has 31 days in a non-leap year',[11,2001],31],['Test that January has 31 days in a leap year',[0,2000],31],['Test that February has 29 days in a leap year',[1,2000],29],['Test that March has 31 days in a leap year',[2,2000],31],
['Test that April has 30 days in a leap year',[3,2000],30],['Test that May has 31 days in a leap year',[4,2000],31],['Test that June has 30 days in a leap year',[5,2000],30],['Test that July has 31 days in a leap year',[6,2000],31],['Test that August has 31 days in a leap year',[7,2000],31],['Test that September has 30 days in a leap year',[8,2000],30],['Test that October has 31 days in a leap year',[9,2000],31],['Test that November has 30 days in a leap year',[10,2000],30],['Test that December has 31 days in a leap year',[11,2000],31]]],['Uize.Date.fromIso8601',[c_N('Test that an ISO8601 date string formatted in the typical YYYY-MM-DD manner is decoded correctly','fromIso8601',['2001-09-11'],c_o),['Test that a date string that is not formatted as ISO8601 produces the result undefined','THIS IS NOT A VALID ISO8601 DATE STRING',undefined],c_N('Test that an ISO8601 formatted date string is allowed to have three digits for the year','fromIso8601',['999-01-02'],c_e(999,1,2)),c_N(
'Test that an ISO8601 formatted date string with a year less than 100 is not considered in the 20th century when more than two digits are specified for year','fromIso8601',['099-01-02'],c_e(99,1,2)),c_N('Test that an ISO8601 formatted date string is allowed to have two digits for the year','fromIso8601',['99-01-02'],c_e(1999,1,2)),['Test that a date string that has only one year digit is not considered a valid ISO8601 formatted date','1-01-02',undefined],c_N('Test that an ISO8601 formatted date string is allowed to have more than four digits for the year','fromIso8601',['12345-01-02'],c_e(12345,1,2)),c_N('Test that an ISO8601 formatted date string is allowed to have only one digit for the month','fromIso8601',['2000-1-02'],c_e(2000,1,2)),c_N('Test that an ISO8601 formatted date string is allowed to have only one digit for the day','fromIso8601',['2000-01-2'],c_e(2000,1,2)),['Test that a date string that has more than two month digits is not considered a valid ISO8601 formatted date','2000-001-02',undefined],
['Test that a date string that has more than two day digits is not considered a valid ISO8601 formatted date','2000-01-002',undefined],c_N('Test that an ISO8601 date string can be surrounded by extraneous text and still parsed correctly','fromIso8601',['AN ISO8601 DATE ----> 2001-09-11 <---- AN ISO8601 DATE'],c_o),{title:'Test that the returned Date object instance has its hours, minutes, seconds, and milliseconds all set to 0',test:function(){var c_M=Uize.Date.fromIso8601('2001-09-11');return(!c_M.getHours()&& !c_M.getMinutes()&& !c_M.getSeconds()&& !c_M.getMilliseconds());}}]],['Uize.Date.resolve',[['Test that the specified default date is returned when undefined is specified for the dateSTRorOBJ parameter',[undefined,c_m],c_m],['Test that the specified default date is returned when null is specified for the dateSTRorOBJ parameter',[null,c_m],c_m],['Test that the specified default date is returned when an empty string is specified for the dateSTRorOBJ parameter',['',c_m],c_m],c_I(
'Test that specifying undefined as the default date results in the default being defaulted to a date initialized to now',['',undefined]),['Test that specifying null as the default date results in null being used as the default date',[undefined,null],null],['Test that the specified default date is returned when an empty string is specified for the dateSTRorOBJ parameter',['',c_m],c_m],{title:'Test that the specified default date is not used when a valid date to resolve is specified',test:function(){return Uize.Date.resolve('Thu Apr 01 2010 18:45:01 GMT-0700 (Pacific Daylight Time)',c_m)!=c_m;}},c_Q('Test that the date to resolve can be an ISO8601 formatted date',[c_o.getFullYear()+'-'+(c_o.getMonth()+1)+'-'+c_o.getDate()],c_o),c_Q('Test that when an integer is specified for the date to resolve, a Date object instance is created with its time in milliseconds initialized to the specified number',[+c_o],c_o),c_Q(
'Test that when the number 0 is specified for the date to resolve, a Date object instance is created with its time in milliseconds initialized to 0 (rather than defaulting to now)',[0],new Date(0)),c_Q('Test that an instance of the Date object resolves to a new Date object instance, set to the same time',[c_o],c_o),c_Q('Test that a correctly formatted valid date string resolves to a Date object instance initialized to the correct time',[c_o+''],c_o),{title:'Test that a badly formatted date string resolves to a Date object instance initialized to the time NaN',test:function(){var c_M=Uize.Date.resolve('THIS IS NOT A VALID DATE STRING');return this.expectInstanceOf(Date,c_M)&&this.expectSameAs(NaN,+c_M);}},c_I('Test that calling with no parameters produces a date object initialized to now',[])]],['Uize.Date.toIso8601',[['Test that date to encode can be specified as a Date object instance',c_o,'2001-09-11'],['Test that date to encode can be specified as a string',c_o+'','2001-09-11'],
['Test that date to encode can be specified as a string in ISO8601 format','2001-09-11','2001-09-11'],['Test that date to encode can be specified as a millisecond integers number',[+c_o],'2001-09-11'],['Test that leading zeros are added to year, month, and date, when necessary',new Date('Thu Feb 01 0111 00:00:00 GMT-0800 (Pacific Standard Time)'),'0111-02-01'],{title:'Test that now is the default when date to encode is not specfied',test:function(){return Uize.Date.toIso8601()==Uize.Date.toIso8601(new Date())}},['Test that an invalid date is formatted in ISO8601 as ????-??-??',NaN,'????-??-??']]],['Uize.Date.inRange',[['Test that a date that occurs before the start of a date range is not considered in that range',[c_y,c_D],false],['Test that a date that occurs at the start of a date range is considered in that range',[c_z,c_D],true],['Test that a date that occurs in the middle of a date range is considered in that range',[c_A,c_D],true],
['Test that a date that occurs at the end of a date range is considered in that range',[c_B,c_D],true],['Test that a date that occurs after the end of a date range is not considered in that range',[c_C,c_D],false],['Test that the date to test can be specified as a string',[c_z+'',c_G],true],['Test that the date to test can be specified as a string in ISO8601 format',['2001-01-02',c_G],true],['Test that the date to test can be specified as a millisecond integers number',[+c_z,c_G],true],['Test that start of a date range is defaulted to -Infinity when its value is undefined',[-Infinity,{maxValue:c_B}],true],['Test that start of a date range is defaulted to -Infinity when its value is null',[-Infinity,{minValue:null,maxValue:c_B}],true],['Test that start of a date range is defaulted to -Infinity when its value is an empty string',[-Infinity,{minValue:'',maxValue:c_B}],true],['Test that, even when a date range has no minValue, a date that occurs before the end of that range is considered in that range',
[c_A,{maxValue:c_B}],true],['Test that, even when a date range has no minValue, a date that occurs at the end of that range is considered in that range',[c_B,{maxValue:c_B}],true],['Test that, even when a date range has no minValue, a date that occurs after the end of that range is not considered in that range',[c_C,{maxValue:c_B}],false],['Test that end of a date range is defaulted to Infinity when its value is undefined',[Infinity,{minValue:c_z}],true],['Test that end of a date range is defaulted to Infinity when its value is null',[Infinity,{minValue:c_z,maxValue:null}],true],['Test that end of a date range is defaulted to Infinity when its value is an empty string',[Infinity,{minValue:c_z,maxValue:''}],true],['Test that, even when a date range has no maxValue, a date that occurs before the start of that range is not considered in that range',[c_y,{minValue:c_z}],false],['Test that, even when a date range has no maxValue, a date that occurs at the start of that range is considered in that range',
[c_z,{minValue:c_z}],true],['Test that, even when a date range has no maxValue, a date that occurs after the start of that range is considered in that range',[c_A,{minValue:c_z}],true],['Test that -Infinity falls into the unbounded date range (ie. all of time)',[-Infinity,c_H],true],['Test that Infinity falls into the unbounded date range (ie. all of time)',[Infinity,c_H],true],['Test that an invalid date doesn\'t fall anywhere in an unbounded date range (ie. all of time)',[new Date(NaN),c_H],false],c_W('Test that minValue of date range can be specified as a string','minValue',c_c),c_W('Test that minValue of date range can be specified as a string in ISO8601 format','minValue',c_d),c_W('Test that minValue of date range can be specified as a millisecond integers number','minValue',c_a),c_W('Test that maxValue of date range can be specified as a string','maxValue',c_c),c_W('Test that maxValue of date range can be specified as a string in ISO8601 format','maxValue',c_d),c_W(
'Test that maxValue of date range can be specified as a millisecond integers number','maxValue',c_a),{title:'Test that date to test is defaulted to now when its value is undefined',test:function(){return Uize.Date.inRange(undefined,{minValue:new Date,maxValue:new Date})}},{title:'Test that date to test is defaulted to now when its value is null',test:function(){return Uize.Date.inRange(null,{minValue:new Date,maxValue:new Date})}},{title:'Test that date to test is defaulted to now when its value is an empty string',test:function(){return Uize.Date.inRange('',{minValue:new Date,maxValue:new Date})}}]],['Uize.Date.isRecent',[c_R('Test that now is considered to be in the zero day recency window',0,0,true),c_R('Test that yesterday is not considered to be in the zero day recency window',-.9,0,false),c_R('Test that tomorrow is considered to be in the zero day recency window',.9,0,true),c_R('Test that two days from now is considered to be in the zero day recency window',1.9,0,true),c_R(
'Test that now is considered to be in the one day recency window',0,1,true),c_R('Test that yesterday is considered to be in the one day recency window',-.9,1,true),c_R('Test that two days ago is not considered to be in the one day recency window',-1.9,1,false),c_R('Test that tomorrow is considered to be in the one day recency window',.9,1,true),c_R('Test that now is not considered to be in the negative one day recency window',0,-1,false),c_R('Test that yesterday is not considered to be in the negative one day recency window',-.9,-1,false),c_R('Test that tomorrow is not considered to be in the negative one day recency window',.9,-1,false),c_R('Test that two days from now is considered to be in the negative one day recency window',1.9,-1,true),c_R('Test that the date to test for recency can be specified as a string',1,1,true,c_c),c_R('Test that the date to test for recency can be specified as a string in ISO8601 format',1,1,true,c_d),c_R(
'Test that the date to test for recency can be specified as a millisecond integers number',1,1,true,c_a)]],['Uize.Date.getRangeAround',[c_1('millennium',c_e(2000,1,1,0,0,0,0),c_e(2500,1,1,0,0,0,0),c_e(2999,12,31,23,59,59,999)),c_1('century',c_e(2000,1,1,0,0,0,0),c_e(2050,1,1,0,0,0,0),c_e(2099,12,31,23,59,59,999)),c_1('decade',c_e(2000,1,1,0,0,0,0),c_e(2005,1,1,0,0,0,0),c_e(2009,12,31,23,59,59,999)),c_1('year',c_e(2000,1,1,0,0,0,0),c_e(2000,6,1,0,0,0,0),c_e(2000,12,31,23,59,59,999)),c_1('quarter',c_e(2000,1,1,0,0,0,0),c_e(2000,2,1,0,0,0,0),c_e(2000,3,31,23,59,59,999)),c_1('month',c_e(2000,1,1,0,0,0,0),c_e(2000,1,15,0,0,0,0),c_e(2000,1,31,23,59,59,999)),c_1('week',c_e(2000,1,2,0,0,0,0),c_e(2000,1,5,0,0,0,0),c_e(2000,1,8,23,59,59,999)),c_1('day',c_e(2000,1,1,0,0,0,0),c_e(2000,1,1,12,0,0,0),c_e(2000,1,1,23,59,59,999)),c_1('am/pm',c_e(2000,1,1,0,0,0,0),c_e(2000,1,1,6,0,0,0),c_e(2000,1,1,11,59,59,999)),c_1('hour',c_e(2000,1,1,0,0,0,0),c_e(2000,1,1,0,30,0,0),c_e(2000,1,1,0,59,59,999)),c_1('minute',
c_e(2000,1,1,0,0,0,0),c_e(2000,1,1,0,0,30,0),c_e(2000,1,1,0,0,59,999)),c_1('second',c_e(2000,1,1,0,0,0,0),c_e(2000,1,1,0,0,0,500),c_e(2000,1,1,0,0,0,999)),c_1('millisecond',c_e(2000,1,1,0,0,0,0),c_e(2000,1,1,0,0,0,0),c_e(2000,1,1,0,0,0,0)),c_Z('Test that the date to get range around can be specified as a string',[c_z+'','millisecond'],c_G),c_Z('Test that the date to get range around can be specified as a string in ISO8601 format',['2001-01-02','millisecond'],c_G),c_Z('Test that the date to get range around can be specified as a string',[+c_z,'millisecond'],c_G),c_Z('Test that range size is defaulted to a month when its value is undefined',[c_e(2000,1,15),undefined],{minValue:c_e(2000,1,1),maxValue:c_e(2000,1,31,23,59,59,999)}),c_Z('Test that range size is defaulted to a month when its value is undefined',[c_e(2000,1,15),null],{minValue:c_e(2000,1,1),maxValue:c_e(2000,1,31,23,59,59,999)}),c_Z('Test that range size is defaulted to a month when its value is undefined',[c_e(2000,1,15),''],
{minValue:c_e(2000,1,1),maxValue:c_e(2000,1,31,23,59,59,999)}),c_6(undefined,'undefined'),c_6(null,'null'),c_6('','an empty string')]],['Uize.Date.equal',[['Test that a date is equal to itself down to the precision of a second',[c_o,c_o,'second'],true],['Test that a date is equal to itself down to the precision of a minute',[c_o,c_o,'minute'],true],['Test that a date is equal to itself down to the precision of an hour',[c_o,c_o,'hour'],true],['Test that a date is equal to itself down to the precision of am/pm',[c_o,c_o,'am/pm'],true],['Test that a date is equal to itself down to the precision of a day',[c_o,c_o,'day'],true],['Test that a date is equal to itself down to the precision of a week',[c_o,c_o,'week'],true],['Test that a date is equal to itself down to the precision of a month',[c_o,c_o,'month'],true],['Test that a date is equal to itself down to the precision of a quarter',[c_o,c_o,'quarter'],true],['Test that a date is equal to itself down to the precision of a year',[c_o,c_o,'year'],true],
['Test that a date is equal to itself down to the precision of a decade',[c_o,c_o,'decade'],true],['Test that a date is equal to itself down to the precision of a century',[c_o,c_o,'century'],true],['Test that a date is equal to itself down to the precision of a millennium',[c_o,c_o,'millennium'],true],['Test that two different dates are considered equal to the precision of a second',['2009/09/10 18:19:25','2009/09/10 18:19:25','second'],true],['Test that two different dates are considered equal to the precision of a minute',['2009/09/10 18:19:25','2009/09/10 18:19:26','minute'],true],['Test that two different dates are considered equal to the precision of an hour',['2009/09/10 18:19:25','2009/09/10 18:20:26','hour'],true],['Test that two different dates are considered equal to the precision of am/pm',['2009/09/10 18:19:25','2009/09/10 19:20:26','am/pm'],true],['Test that two different dates are considered equal to the precision of a day',['2009/09/10 18:19:25','2009/09/10 01:20:26','day'],true],
['Test that two different dates are considered equal to the precision of a week',['2009/09/10 18:19:25','2009/09/11 01:20:26','week'],true],['Test that two different dates are considered equal to the precision of a month',['2009/09/10 18:19:25','2009/09/30 01:20:26','month'],true],['Test that two different dates are considered equal to the precision of a quarter',['2009/09/10 18:19:25','2009/08/11 01:20:26','quarter'],true],['Test that two different dates are considered equal to the precision of a year',['2009/09/10 18:19:25','2009/12/11 01:20:26','year'],true],['Test that two different dates are considered equal to the precision of a decade',['2009/09/10 18:19:25','2008/12/11 01:20:26','decade'],true],['Test that two different dates are considered equal to the precision of a century',['2009/09/10 18:19:25','2050/12/11 01:20:26','century'],true],['Test that two different dates are considered equal to the precision of a millennium',['2009/09/10 18:19:25','2500/12/11 01:20:26','millennium'],true],
['Test that two different dates are considered unequal, at the precision of a second',['2009/09/10 18:19:25','2009/09/10 18:19:26','second'],false],['Test that two different dates are considered unequal, at the precision of a minute',['2009/09/10 18:19:25','2009/09/10 18:20:25','minute'],false],['Test that two different dates are considered unequal, at the precision of an hour',['2009/09/10 18:19:25','2009/09/10 19:19:25','hour'],false],['Test that two different dates are considered unequal, at the precision of am/pm',['2009/09/10 18:19:25','2009/09/10 01:19:25','am/pm'],false],['Test that two different dates are considered unequal, at the precision of a day',['2009/09/10 18:19:25','2009/09/11 18:19:25','day'],false],['Test that two different dates are considered unequal, at the precision of a week',['2009/09/10 18:19:25','2009/09/30 18:19:25','week'],false],['Test that two different dates are considered unequal, at the precision of a month',['2009/09/10 18:19:25','2009/08/10 18:19:25','month'],false],
['Test that two different dates are considered unequal, at the precision of a quarter',['2009/09/10 18:19:25','2009/12/10 18:19:25','quarter'],false],['Test that two different dates are considered unequal, at the precision of a year',['2009/09/10 18:19:25','2008/09/10 18:19:25','year'],false],['Test that two different dates are considered unequal, at the precision of a decade',['2009/09/10 18:19:25','2050/09/10 18:19:25','decade'],false],['Test that two different dates are considered unequal, at the precision of a century',['2009/09/10 18:19:25','2500/09/10 18:19:25','century'],false],['Test that two different dates are considered unequal, at the precision of a millennium',['2009/09/10 18:19:25','1999/09/10 18:19:25','millennium'],false],['Test that calling with no parameters produces the result true (because now is the default for both dates)',[],true],{title:'Test that day is the default unit of precision, when not specified explicitly',test:function(){return(
Uize.Date.equal('2009/09/10 18:19:25','2009/09/10 01:02:03')&& !Uize.Date.equal('2009/09/10 18:19:25','2009/09/11 18:19:25'));}},['Test that dates to compare can be specified as Date object instances',[new Date('2009/09/10 18:19:25'),new Date('2009/09/11 18:19:25'),'month'],true],['Test that dates to compare can be specified as millisecond integers',[+new Date('2009/09/10 18:19:25'),+new Date('2009/09/11 18:19:25'),'month'],true],['Test that dates to compare can be specified in ISO8601 format',['2009-09-10','2009-09-11','month'],true]]]])]});}});