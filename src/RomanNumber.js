function RomanNumber(Arabic) {
  if(Arabic ==0) {
    return "";
  }else if(Arabic >=10){
    return "X" + RomanNumber(Arabic -10);
  }
  else if(Arabic >= 5){
    return "V" + RomanNumber(Arabic -5);
  }
  else {
    return "I" + RomanNumber(Arabic -1);
  }

}
