function getnumber(num) {
    var result=document.getElementById('show');
    result.value +=num;//7+3

}



function clearesult() {
    var result=document.getElementById('show');
    result.value=" ";
    
}

function getresult() {
    var result=document.getElementById('show');
    result.value=eval(result.value);
    
}