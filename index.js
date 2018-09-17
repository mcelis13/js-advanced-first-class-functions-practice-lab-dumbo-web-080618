// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
};

function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver){
    if(driver.hometown === location){
      console.log(driver.name);
    }
  });
};


function driversByRevenue(drivers){
  var newArray = drivers.slice();
  return newArray.sort(function(ele, nextEle){
    return ele.revenue - nextEle.revenue;
  });
};

function driversByName(drivers){
  var newArray = drivers.slice();
  return newArray.sort(function(ele, nextEle){
    return ele['name'].localeCompare(nextEle['name']);
  });
};

function totalRevenue(drivers){
  return drivers.reduce(function(accumulator, nextEle){
    return accumulator + nextEle.revenue;
  }, 0);
};

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
};
