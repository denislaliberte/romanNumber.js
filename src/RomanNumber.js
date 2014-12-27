function RomanNumber(Arabic) {
  if(Arabic >=10){
    return "X" + RomanNumber(Arabic -10);
  }
  else if(Arabic >= 5){
    return "V" + RomanNumber(Arabic -5);
  }
  else if(Arabic >=1 && Arabic <=3){
    return "I" + RomanNumber(Arabic -1);
  }
  return ""

}
