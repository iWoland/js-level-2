const goods = [
{ title: 'Shirt', price: 150 },
{ title: 'Socks', price: 50 },
{ title: 'Jacket', price: 350 },
{ title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price) => {
	return `<div class="goods-item"><img src="noimage.jpg"><h3>${title}</h3><p>${price}</p></div>`;
};
const renderGoodsList = (list) => {
	let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
	document.querySelector('.goods-list').innerHTML = goodsList.join('');
}
 // Ответ на задание 3: Между элементами по умолчанию выводится запятая, но с помощью метода join можно указать пустой сепаратор.
window.onload = () => {
    renderGoodsList(goods);
};
// Ответ на задание 2: Не понятно, что еще тут можно сократить.
