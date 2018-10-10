import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShopList extends Component {
	clickMe = (e) => {
		let dataID = e.currentTarget.dataset.id;
		alert(dataID);
	}

	render() {
		var list = [
			{
				id: 1,
				product_image: '/images/butao.jpg',
				product_name: 'Butao King',
				price : 550
			},
			{
				id: 2,
				product_url: '',
				product_image: '/images/black.jpg',
				product_name: 'Black King',
				price: 600
			},
			{
				id: 3,
				product_url: '',
				product_image: '/images/green.jpg',
				product_name: 'Green King',
				price: 550
			},
			{
				id: 4,
				product_url: '',
				product_image: '/images/gyoza.jpg',
				product_name: 'Gyoza',
				price: 150
			}
		]
		var menuList = list.map((i) => {
			return (
				<div className="column" key={i.id.toString()}>
					<Link to={"/list/" + i.id} className="product" data-id={i.id.toString()}>
						<div className="image"><img src={i.product_image} alt="" /></div>
						<p className="menuName">{i.product_name}</p>
						<p>{i.price} yen</p>
					</Link>
				</div>
			);
		});

		return (
			<div>
				<h2 className="title1">Our Menu</h2>
				<div className="shopList">
					{menuList}
				</div>
			</div>
		);
	}
}

export default ShopList;
