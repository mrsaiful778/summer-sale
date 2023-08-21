function ClickOne(target) {
    const element = target.childNodes[5].childNodes[7].innerText;
    const p = document.createElement('p');
    p.innerText = element;
    const name = document.getElementById('receive');
    name.appendChild(p);
}
let result = 0;
function ClickTwo(target){
    const prices = target.childNodes[5].childNodes[9].childNodes[0].innerText;
    const price = parseFloat(prices);
    result = result + price;
    const receiveTotal = document.getElementById('first-total');
    receiveTotal.innerText = result;
    const mBtn = document.getElementById('Make-btn');
    if(result > 0){
        mBtn.removeAttribute('disabled');
    }else{
        mBtn.setAttribute('disabled')
    }
    const aBtn = document.getElementById('apply-btn');
    if(result >= 200){
        aBtn.removeAttribute('disabled');
    }else{
        aBtn.setAttribute('disabled', true);
    }
    const lastTotalTextCondition = document.getElementById('last-total');
    lastTotalTextCondition.innerText = result;
}

function applyBtnClick(target){
    const input = document.getElementById('input');
    const totals = document.getElementById('first-total').innerText;
    const discountTwenty = document.getElementById('discount');
    const lastTotalTextCondition = document.getElementById('last-total');
    const total = parseFloat(totals);
    if(input.value === 'SELL200'){
        const discount = total * 0.2;
        discountTwenty.innerText = discount.toFixed(2);
        const lastTotal = total - discount;
        lastTotalTextCondition.innerText = lastTotal;
    }

}






