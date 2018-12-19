(() => {
  const holidays = [
      ['1/1/2019', 'Tuesday', `New Year's Day`],
      ['1/7/2019', 'Monday', `Orthodox Christmas Day`],
      ['3/8/2019', 'Friday', `International Women's Day`],
      ['4/29/2019', 'Monday', `Easter Day`],
      ['5/1/2019', 'Wednesday', `Labor Day Holiday`],
      ['5/9/2019', 'Thursday', `Victory Day / Memorial Day`],
      ['6/17/2019', 'Monday', `Pentecost`],
      ['6/28/2019', 'Friday', `Constitution Day`],
      ['8/26/2019', 'Monday', `Independence Day`],
      ['10/14/2019', 'Monday', `Defenders' Day`],
      ['12/25/2019', 'Wednesday', `Catholic Christmas Day`]
  ];

  const searchByDate = function (array, date) {
      let result = '';
      array.forEach((element) => {
          if (date === element[0])
            result = element[2];
      });
      return result;
  };
  
  const searchByName = function (array, name) {
    let result = '';
    array.forEach((element)=>{
      if (name  === element[2])
        result = element[0]
    });
    return result;      
  };
  
  const searchByWeekDay = function (array, weekDay) {
      let result = [];
      array.forEach((element)=>{
        if(weekDay === element[1])
          result.push(element[2]);
      })
      return result;
  };

  console.log(searchByDate(holidays, '1/1/2019'));
  console.log(searchByName(holidays, 'Constitution Day'));
  console.log(searchByWeekDay(holidays, 'Monday'));

// +++++++++++++++++++++++++++++++++++++++++++++++++
//  Задание по LMS
// ===============
// Напиши функцию map(fn, array), которая принимает на вход 
// функцию и массив, и обрабатывает каждый элемент массива 
// этой функцией, возвращая новый массив

  const map =  (callback, array) => {
    const result = [];
    for(let i = 0; i < array.length; ++i) 
      result.push(callback(array[i]));

    return result;
  }
  
  const  sqr = map((element)=>{
    return element * element;
  }, [2,10,5]);

  console.log(sqr);  
 
})();

