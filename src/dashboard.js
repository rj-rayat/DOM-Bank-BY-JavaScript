document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
   const bankName = document.getElementById('bank-name-option').value;
   const account = document.getElementById('account-number').value;
   const amount = document.getElementById('amount').value;
   const userPin = document.getElementById('pin-number').value;

   const pin = "1234"
  if(bankName == "Select Bank"){
    alert("Bank is not selected")
    return;
   }else if (account.length < 11){
    alert("Number should be more then 11 Digit")
    return
   }else if(amount.length < 1){
    alert("no Money can't be add")
    return;
   }else if(userPin != pin){
    alert("Plz put correct pin")
    return;
   }else{
    const currentBalance = parseInt(document.getElementById('current-balance').innerText)
    const userAmount = parseInt(amount)
    const totalBalance = currentBalance + userAmount

    document.getElementById('current-balance').innerText= totalBalance
   }

})

function toggleButton (id){
  document.getElementById('add-money-form').classList.add("hidden")
  document.getElementById("cashout-form").classList.add("hidden")
  document.getElementById(id).classList.remove("hidden")
  
}


function activeButton(id){
  document.getElementById("add-money-feature-btn").classList.remove("bg-amber-300")
  document.getElementById("cashout-btn").classList.remove("bg-amber-300")
  document.getElementById(id).classList.add("bg-amber-300")
}

document.getElementById('add-money-feature-btn').addEventListener('click', function(){
  toggleButton("add-money-form")
  activeButton("add-money-feature-btn")
})
document.getElementById('cashout-btn').addEventListener('click', function(){
  toggleButton("cashout-form")
  activeButton("cashout-btn")
})



// Cashout Function 

document.getElementById("cashout-form-btn").addEventListener("click", function(e){
    e.preventDefault()
   const account = document.getElementById('agent-number').value;
   const amount = document.getElementById('cashout-amount').value;
   const userPin = document.getElementById('cashout-pin-number').value;

   const pin = "1234"
 
   if (account.length < 11){
    alert("Number should be more then 11 Digit")
    return
   }else if(amount.length < 1){
    alert("no Money can't be Cashout")
    return;
   }else if(userPin != pin){
    alert("Plz put correct pin")
    return;
   }else{
    const currentBalance = parseInt(document.getElementById('current-balance').innerText)
    const userAmount = parseInt(amount)
    const totalBalance = currentBalance - userAmount

    document.getElementById('current-balance').innerText= totalBalance
   }

})