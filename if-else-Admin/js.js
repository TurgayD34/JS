const admin__email = "td@gmail.com"
const admin__pass = 1234;
let email = "td1@gmail.com";
let pass = 1234;

if((admin__email == email) && (admin__pass == pass)){
    console.log(`Welcome Admin`);
}
else{
    console.log(`Email or pass is wrong`);
}

// *****************************************************

if(admin__email == email && admin__pass == pass){
    console.log(`Welcome Admin`);
}else if(admin__email == email && admin__pass != pass){
    console.log(`Pass is wrong`);
}else if(admin__email != email && admin__pass == pass){
    console.log(`Email is wrong`);
}else{
    console.log(`Email and pass are wrong`);
}