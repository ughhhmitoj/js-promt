let userName = toLowerCase(prompt("Who's there?", ''));
if (userName === 'kajal'){
    let pass = toLowerCase(prompt ("Password?",''));

    if (pass === 'amitoj'){
        alert("I Love You!")
    } else if (pass === '' || pass === null){
        alert("Wrong Password.Please Refresh this Page to Try again");
    } else{
        alert("Wrong Password. Please Refresh this Page to Try again");
    }
} else if (userName === "" || userName === null){
    alert("Canceled. Please Refresh this Page to Try again");
} else {
    alert("Fuck off!" + " " + userName)
}
