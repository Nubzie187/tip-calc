const buttons = document.querySelectorAll(".button");
const tipOne = document.getElementById("tip-one");
const tipTwo = document.getElementById("tip-two");
const tipThree = document.getElementById("tip-three");
const totalBtn = document.getElementById("total");
let tipAmount = document.getElementById("tip-amount");
let totalBill = document.getElementById("total-bill");
let billAmount = document.getElementById("bill-amount");

buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        switch(btn){
            case tipOne:  
                tipAmount.value = .08;
                break;
            case tipTwo:  
                tipAmount.value = .15;              
                break;
            case tipThree: 
                tipAmount.value = .20.toFixed(2);               
                break;
            case totalBtn:
                totalButton();
                break;
        }
    })
});

function totalButton(){
    totalBtn.addEventListener('click', function(){
        let bill = Number(billAmount.value);
        let tip = Number(tipAmount.value);
        let total = tip * bill + bill;

        totalBill.value = `$${total}`;
    });
}
