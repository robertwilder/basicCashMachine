
let pin = 1234;
let Balence = 1000

const security =(withdrawlAmount, pin) => {
if(pin == 1234 && withdrawlAmount <= Balence){
    console.log("Dispence Money")
    balence = balence - withdrawal;
    console.log(`New balence = ${balence}`)
}
else if(pin == 1234 && withdrawlAmount >= Balence){
    console.log("insufficient funds")
}
else { 
    console.log("Access Denied");
}
}
security (500, 1234)





