function makeFunc() {
    const name = "Dwi Ananda Rizky";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();