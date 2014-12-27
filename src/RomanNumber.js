function RomanNumber(Arabic) {
  association = {
    'value':  [ 100, 50,  40,   10,  9,     5,  4,     1],
    'symbol': [ 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
  }
  return asdf(Arabic,association,0);
}

function asdf(Arabic,association,index) {
  if(Arabic >= association.value[index] ) {
    return association.symbol[index] + asdf(Arabic-association.value[index], association, index);
  }
  if(index >= association.value.length) {
    return "";
  }
  return asdf(Arabic,association,index+1);
}
