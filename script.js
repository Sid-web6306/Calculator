function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
// printHistory('91');
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==" "){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormatNumber(num);
	}
}
// printOutput("562215623");
function getFormatNumber(num){
	if(num=="-"){
		return "";
	}
	var n=Number(num);
	var value=n.toLocaleString("en");
	return value;
}
// printOutput("562215623");
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
	operator[i].addEventListener("click",function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output=output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output){
				output=reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
						var result=eval(history);
						printOutput(result);
						printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
				
			}
		}
	});
}


var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
	number[i].addEventListener("click",function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){
			output=output+this.id;
			printOutput(output);
		}
	});
}