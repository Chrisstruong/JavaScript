function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  const myHouse = new House(10)
  
  console.log(myHouse instanceof House)
  
  // Only change code below this line