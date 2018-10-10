import React from 'react';

const Detail = props => {
	var list = [
			{
				id: 1,
				product_image: '/images/butao.jpg',
				product_name: 'Butao King',
				price : 550,
				product_desc: 'Proin vulputate felis at purus convallis, eget commodo risus commodo. Curabitur erat ex, efficitur rutrum rutrum vel, commodo in est. Sed metus erat, accumsan sit amet ultricies sed, malesuada eget est.'
			},
			{
				id: 2,
				product_image: '/images/black.jpg',
				product_name: 'Black King',
				price: 600,
				product_desc: 'Ut molestie varius massa quis consequat. Phasellus malesuada suscipit finibus. Donec vehicula mi metus. Aliquam venenatis tellus eu ante vulputate, quis scelerisque nunc placerat.'
			},
			{
				id: 3,
				product_image: '/images/green.jpg',
				product_name: 'Green King',
				price: 550,
				product_desc: 'Donec vel ligula vestibulum, aliquam arcu semper, posuere leo. Praesent ac pellentesque leo. Etiam lacinia ipsum rhoncus leo rhoncus tempor. Sed sit amet dolor vel justo lobortis malesuada vitae nec eros. Curabitur ac urna hendrerit, vehicula diam non, viverra augue. Phasellus at fringilla massa.'
			},
			{
				id: 4,
				product_image: '/images/gyoza.jpg',
				product_name: 'Gyoza',
				price: 150,
				product_desc: 'In eleifend tristique dui sed euismod. Ut sit amet leo sed ex ornare accumsan vitae in tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin id est commodo ipsum luctus ultricies quis et arcu. Fusce pharetra luctus sem vitae mattis.'
			}
		]

	var itemNumber = props.match.params.id;
	var itemName = list[itemNumber-1].product_name;
	var itemPrice = list[itemNumber-1].price;
	var itemDesc = list[itemNumber-1].product_desc;
	var itemImg = list[itemNumber-1].product_image;

	return (
		<div className="product-detail">
			<div className="column">
				<div className="image"><img src={itemImg} alt="" /></div>
			</div>
			<div className="column columnEnd">
				<h2>{itemName}</h2>
				<p><b>Price:</b> {itemPrice} yen</p>
				<p><b>Description:</b> {itemDesc}</p>
				<div className="addToCart"><a>Add to Cart</a></div>
			</div>
		</div>
	);
}

export default Detail;