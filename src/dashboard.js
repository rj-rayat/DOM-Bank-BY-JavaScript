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
    document.getElementById("my_modal_3").showModal()
    document.getElementById("modal-heading").innerText = "Successfully Added"

     const transSection = document.getElementById("transaction-section")
    const date = new Date()
    const localDate = date.toString

    const div = document.createElement("div")
    div.classList.add("shadow-lg")
    div.classList.add("rounded-xl")
    div.classList.add("rounded-xl")
    div.classList.add("p-2.5")
    div.classList.add("border")
    div.classList.add("border-warning")
    div.classList.add("mt-2")
    div.classList.add("border-outline")

    

    const p = document.createElement("p")
    p.innerText = `${userAmount} tk added at ${date}`
    div.appendChild(p)

   
    transSection.appendChild(div)
   }

})

function toggleButton (id){
  document.getElementById('add-money-form').classList.add("hidden")
  document.getElementById("cashout-form").classList.add("hidden")
  document.getElementById("transaction-section").classList.add("hidden")
  document.getElementById(id).classList.remove("hidden")
  
}


function activeButton(id){
  document.getElementById("add-money-feature-btn").classList.remove("bg-amber-300")
  document.getElementById("cashout-btn").classList.remove("bg-amber-300")
  document.getElementById("transaction-feature-btn").classList.remove("bg-amber-300")
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
document.getElementById('transaction-feature-btn').addEventListener('click', function(){
  toggleButton("transaction-section")
  activeButton("transaction-feature-btn")
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
    
    document.getElementById("my_modal_3").showModal()
    document.getElementById("modal-heading").innerText = "Cashout Successfully"

    const transSection = document.getElementById("transaction-section")
    const date = new Date()
    const localDate = date.toString

    const div = document.createElement("div")
    div.classList.add("shadow-lg")
    div.classList.add("rounded-xl")
    div.classList.add("rounded-xl")
    div.classList.add("p-2.5")
    div.classList.add("border")
    div.classList.add("border-warning")
    div.classList.add("mt-2")
    div.classList.add("border-outline")

    

    const p = document.createElement("p")
    p.innerText = `${userAmount} tk cashout at ${date}`
    div.appendChild(p)

   
    transSection.appendChild(div)
   }

})