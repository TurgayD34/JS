// function show(){
//     let username, usernames;
//     username = document.getElementById('username').value;
//     usernames = document.getElementsByName('test')[2];
//     // usernames.style.display = "block";
//     usernames.innerHTML = username;
// }

function show(){
    let username, usernames, i, j;
    usernames = document.getElementsByName('test');
    for(i = 0; i < usernames.length; i++)
    usernames[i].style.display = "block";

    for(j = 0; j < usernames.length; j++)
    usernames[j].innerHTML = (j+1) + ". Name Elemani"
    // usernames[0].innerHTML = "Javascript";
    // usernames[1].innerHTML = "Angular JS";
    // usernames[2].innerHTML = "React JS";
    // usernames[3].innerHTML = "Vue JS";

}