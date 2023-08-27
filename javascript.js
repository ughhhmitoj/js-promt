let userName = prompt("Who's there?", '');
if (userName === 'Kajal' || 'kajal' || 'KAJAL'){
    let pass = prompt ("Password?",'');

    if (pass === 'Amitoj'){
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
