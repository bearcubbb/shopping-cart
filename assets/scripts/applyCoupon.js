const totalPrice = document.querySelector('#totalPrice');

price1Item = document.getElementsByClassName('price__items')[0].innerHTML.replace('$', '');
price1Item = Number(price1Item);

price2Item = document.getElementsByClassName('price__items')[1].innerHTML.replace('$', '');
price2Item = Number(price2Item);

price3Item = document.getElementsByClassName('price__items')[2].innerHTML.replace('$', '');
price3Item = Number(price3Item);

price4Item = document.getElementsByClassName('price__items')[3].innerHTML.replace('$', '');
price4Item = Number(price4Item);

const applyCoupon = () => {
    const total = price1Item + price2Item + price3Item + price4Item;
    const discountedTotal = total * 0.8;
    totalPrice.innerHTML = `$${discountedTotal}`;
    document.getElementById('couponButton').disabled = true;
}
document.getElementById('couponButton').addEventListener('click', applyCoupon);

/*console.log(typeof (price4Item));*/
