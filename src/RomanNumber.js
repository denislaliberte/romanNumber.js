function RomanNumber(Arabic) {
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
