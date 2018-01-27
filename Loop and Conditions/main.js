/******************************************************/
var fonts = ['Arial', 'Calibri', 'Comic Sans MS', 'Helvetica', 'Times New Roman'];
var fontElement = document.getElementById("fonts");
var fontHTML = fontElement.innerHTML;
fonts.forEach(function(font){
  var option = document.createElement("option");
  option.value = font;
  option.style.fontFamily = font;
  option.innerText = font;
  fontElement.appendChild(option);
});
/******************************************************/

/******************************************************/
var sizeElement = document.getElementById("sizes");
var multiplier1 = 7;
var multiplier2 = 0;
for(var i = 0; i < 13; i++){
	var fontValue = 0;
  var option = document.createElement("option");
	if(i === 2){
  	fontValue = (i + 1) + 8;
  }
  if(i < 9){
  	fontValue = (i * 2) + 8;
  }else{
    fontValue = (4 * (multiplier1 + multiplier2) + 8);
    multiplier1 += multiplier2;
    if(multiplier2 === 0){
    	multiplier2 = 3;
    }else{
    	multiplier2 *= 2;
    }
  }
  option.value = fontValue;
  option.style.fontSize = fontValue + 'pt';
  option.innerText = fontValue;
  sizeElement.appendChild(option);
}
/******************************************************/

function updateOutput(){
	var output = document.getElementById("output");
 	var fonts = document.getElementById("fonts");
  var sizes = document.getElementById("sizes");
  var fontVal = fonts.value;
  var sizeVal = sizes.value;
  var str = '';
  if(fontVal !== 'Font'){
  	str += 'Font chosen is ' + fontVal + '. ';
    output.style.fontFamily = fontVal;
  }
  if(sizeVal !== 'Size'){
  	str += 'Size chosen is ' + sizeVal + '. ';
    output.style.fontSize = sizeVal + 'pt';
  }
  output.innerText = str;
}