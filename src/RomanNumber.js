function RomanNumber(Arabic) {
  if(Arabic >=50){
    return "L" + RomanNumber(Arabic -50);
  }
  if(Arabic >=10){
    return "X" + RomanNumber(Arabic -10);
  }
  if(Arabic >= 5){
    return "V" + RomanNumber(Arabic -5);
  }
  if(Arabic >=1 && Arabic <=3){
    return "I" + RomanNumber(Arabic -1);
  }
  return ""

}
