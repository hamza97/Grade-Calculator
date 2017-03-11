function myFunction() {
    var person = prompt("Please enter your Name:", "Name");
    var a = +prompt("Please enter your Marks:","Marks");
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
    else if(a<=40){
    alert("Hi " + person + ", You're Failed... :(");
}
    else if(a !== null){
    alert("No input is found.");
}
}