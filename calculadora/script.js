function insertData(data){
  var stringAtual = document.calc.txt.value

  if(stringAtual === '0'){
    document.calc.txt.value = data;
  }else{
    document.calc.txt.value += data;
  }
}