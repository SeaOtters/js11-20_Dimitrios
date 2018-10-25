
//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += countClumps ([1,2,2,3,4,4]);
    //document.getElementById("output").innerHTML += sleepIn(true, false);
    //document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}


function firstLast6(array){
    var n = false;
    if(array[array.length-1] == 6){
        n = true;
    }else if(array[0] == 6){
        n = true;
    }
    return n
}


function has23(array){
    var n = false;
    if(array[array.length-1] == 2 || array[array.length-1] == 3){
        n = true;
    }else if(array[0] == 2 || array[0] == 3){
        n = true;
    }
    return n;
}


function fix23(array){
    if(array[array.length-3] == 2 && array[array.length-2] == 3){
        array[array.length-2] = 0;
    }else if(array[array.length-2] == 2 && array[array.length-1] == 3){
        array[array.length-1] = 0;
    }
    return array;
}

function countYZ(str){
    var str = str.toLowerCase();
    var y = 0;
    var x = str.length;

    for(var i = 1; i < x; i++){
        if(str[i] == " " && (str[i - 1] == "y" || str[i - 1] == "z")){
            y ++;
        }
    }
    if(str[x - 1] == "y" || str[x - 1] == "z"){
        y = y + 1;
    }
    return y;
}


function endOther(string, answer) {
    string = string.toLowerCase();
    answer = answer.toLowerCase();
    if(string.endsWith (answer) || answer.endsWith (string)) {
        return true;
    }else{
        return false;
    }
}

function starOut(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i - 1] != "*" && string[i + 1] != "*" && string[i] != ("*")) {
            result = result + string[i];
        }
    }
    return result;
}

function getSandwich(string){
    if (string.indexOf("bread") == string.lastIndexOf("bread")){
        return "";
    }
    if(string.indexOf("bread") != -1 && string.lastIndexOf("bread")!= -1 ){
        return string.substring(string.indexOf("bread") + 5 , string.lastIndexOf("bread"));
    }
}

function canBalance(array){
   var result = 0;
   var result2 = 0;
   for(var i = 0; i < array.length; i ++){
       result += array[i];
       result2 = 0;
       for(var x = i+1; a < array.length; a++){
           result2 +- array[x];
       }
       if(result == result2){
           return true;
       }
   }
}

function canBalance(array){
    var result = 0;
    var result2 = 0;
    for(var i = 0; i < array.length; i ++){
        result += array[i];
        result2 = 0;
        for(var x = i+1; x < array.length; x++){
            result2 += array[x];
        }
        if(result == result2){
            return true;
        }
    }
    return false;
}

function countClumps(array){
    var result = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == array[i - 1] && array[i] != array[i + 1]) {
            result += 1;
        }
    }
    return result;
}

function evenlySpaced(a,b,c) {
    var max = Math.max(a, b, c);
    var min = Math.min(a, b, c);
    var other = (max + min) / 2;
    if (other == a || other == b || other == c) {
        return true;
    }
    return false;
}
