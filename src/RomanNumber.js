function RomanNumber(Arabic) {
  association = {
    'value':  [ 100, 90,   50,  40,   10,  9,     5,  4,     1 ],
    'symbol': [ 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
  }
  function closure(Arabic,index) {
    if(Arabic >= association.value[index] ) {
      return association.symbol[index] + closure(Arabic-association.value[index], index);
    }
    if(index >= association.value.length) {
      return "";
    }
    return closure(Arabic,index+1);
  }
  return closure(Arabic,0);
}

