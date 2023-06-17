/**
 * @file: js_uti.js
 * @version: 1.1.1
 * @author: Ubaldo SBRASCIA
 * @date: 2022-08-25
 * @copyright: Copyright (c) 2022-2022, ubaldo.sbrascia@gmail.com. All rights reserved.
 * @license: Licensed under The MIT License. 
 * @website: 
 */
 
//-------------------------------------------------------------------------------------------- 
//-------------------------------------------------------------------------------------------- 

  function utidt_sub(dtinp,val)
  {
	return dtinp.setDate(dtinp.getDate() - val);
  }
  function utidt_DaysSub(date, days) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - days,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    );
  }  
  function utidt_DaysAdd(date, days) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + days,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    );
  }  
  function utidt_yyyy_mm_dd(dtinp)
  {
	return (dtinp.getFullYear() + "-" + ("0"+(dtinp.getMonth()+1)).slice(-2) + "-" + ("0"+dtinp.getDate()).slice(-2)); //  + " " + ("0"+dtinp.getHours()).slice(-2) + ":" + ("0"+dtinp.getMinutes()).slice(-2);
  }
  function utidt_yyyy_mm_dd_hh_mm(dtinp)
  {
	var sDate = utidt_yyyy_mm_dd(dtinp);
	return sDate + " " + ("0"+dtinp.getHours()).slice(-2) + ":" + ("0"+dtinp.getMinutes()).slice(-2);
  }
  function utidt_yyyy_mm_dd_hh_mm_ini(dtinp)
  {
	var sDate = utidt_yyyy_mm_dd(dtinp);
	return sDate + " " + "12:01";
  }
  function utidt_yyyy_mm_dd_hh_mm_end(dtinp)
  {
	var sDate = utidt_yyyy_mm_dd(dtinp);
	return sDate + " " + "12:00";
  }
  //function utidt_yyyy_mm_dd_hh_mm_ss(dtinp)
  //{ 
  //	return (dtinp.getFullYear() + "-" + ("0"+(dtinp.getMonth()+1)).slice(-2) + "-" + ("0" + dtinp.getDate()).slice(-2) + " " + ("0" + dtinp.getHours()).slice(-2) + ":" + ("0" + dtinp.getMinutes()).slice(-2);
  //}

//-------------------------------------------------------------------------------------------- 
//-------------------------------------------------------------------------------------------- 
