function myFunction() {
    var person = prompt("Please enter your Name:", "");
    var a = +prompt("Please enter your Marks:","");
    if(a>=90){
    alert("Wow " + person + ", You've got Excellent Marks. :)");
}
    else if(a>=80){
    alert("Hi " + person + ", Your Grade is A+");
}
    else if(a>=70){
    alert("Hi " + person + ", Your Grade is A.");
}
    else if(a>=60){
    alert("Hi " + person + ", Your Grade is B.");
}
    else if(a>=50){
    alert("Hi " + person + ", Your Grade is C.");
}
    else if(a<=40 && a>0){
    alert("Hi " + person + ", You're Failed... :(");
}
    else if(person == ""){
    alert("No input is found.");
}
}
