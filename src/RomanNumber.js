function RomanNumber(Arabic) {
  //return old(Arabic);
  association = {
    'value': [100],
    'symbol': ['C']
  }
  return asdf(Arabic,association,0);
}

function asdf(Arabic,association,index) {
  if(Arabic>=association.value[index] ) {
    return association.symbol[index] + asdf(Arabic-association.value[index],association,index +1)
  }
  return old(Arabic);
}

function old(Arabic) {
 //if(Arabic >=100) {
 //   return "C" + RomanNumber(Arabic -100);
 // }
  if(Arabic >=50){
    return "L" + RomanNumber(Arabic -50);
  }
  if(Arabic ==40) {
    return RomanNumber(Arabic-50) + "L";
  }
  if(Arabic >=10 || Arabic == -10){
    return "X" + RomanNumber(Arabic -10);
  }
  if(Arabic == 9) {
    return RomanNumber(Arabic-10) + "X";
  }
  if(Arabic >= 5){
    return "V" + RomanNumber(Arabic -5);
  }
  if(Arabic == 4) {
    return RomanNumber(Arabic -5) + "V";
  }
  if(Arabic >=1 || Arabic ==-1){
    return "I" + RomanNumber(Arabic -1);
  }
  return ""

}


