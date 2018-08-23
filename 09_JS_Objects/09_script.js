  //creation of objects and retrieval//
  var employee ={
    name:'john',
    age:40,
    deng:'manager',
    address:{
        city:'hyderabad',
        state:'ts'

    }

  };
  console.log(employee);
  console.log(employee.name);
  console.log(employee.address);

  //add property for employee object //
  employee.salary=50000;
  //employee obg with salary//
  console.log(employee);
  //add a property for address obj of employee//
  employee.address.country='india';
  //brackets notation for dynamic values//
  var prop='name';
  console.log(employee.prop);
  console.log(employee[prop]);
  prop='age';
  console.log(employee[prop]);
  //delete a property//
  delete employee.address;
  console.log(employee);
