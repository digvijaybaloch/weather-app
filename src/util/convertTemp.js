// (F − 32) × 5/9 = C
// F = C *9/5 + 32


const convertTemp = (selectedTemp, temp) => {
 if(selectedTemp === "F" ){
  return (temp*(9/5))+32
 }else{
  return (temp-32)*5/9
 }
}

export {
 convertTemp
};