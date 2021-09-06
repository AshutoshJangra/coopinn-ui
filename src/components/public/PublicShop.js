import React from "react";
import shop from "../../images/shop.svg";
const PublicShop = () => {
	return (
		<section className="shop_section">
			<h4 className="shop_section_heading">What Makes Us Unique ?</h4>
			<h4 className="shop_section_subheading">
				Use the rewards at any shops from ever growing premium
				ecosystem.
			</h4>
			<div className="shop">
				<h4 className="shop_heading">Newly Added</h4>

				<div className="shop_box">
					<img
						className="shop_box_image"
						src={shop}
						alt="shop image"
					/>

					<div className="shop_box_content">
						<h2 className="shop_box_content_heading">
							<h4 className="shop_box_content_heading_1">
								Nature Grocer
							</h4>
							<h3 className="shop_box_content_heading_2">
								Grocery
							</h3>
						</h2>
						<h2 className="shop_box_content_address">
							664R, 8 Marla, Model Town, Panipat 132103
						</h2>
					</div>
				</div>
				<div className=" shop_box">
					<img
						className="shop_box_image"
						src={shop}
						alt="shop image"
					/>
					<div className="shop_box_content">
						<h2 className="shop_box_content_heading">
							<h4 className="shop_box_content_heading_1">
								S.K General Store
							</h4>
							<h3 className="shop_box_content_heading_2">
								Gifts and General Items
							</h3>
						</h2>

						<h2 className="shop_box_content_address">
							Jattal Rd, 8 Marla Colony Chowk, Panipat 132103
						</h2>
					</div>
				</div>
				<div className=" shop_box">
					<img
						className="shop_box_image"
						src={shop}
						alt="shop image"
					/>
					<div className="shop_box_content">
						<h2 className="shop_box_content_heading">
							<h4 className="shop_box_content_heading_1">
								Hot Grill Pizza
							</h4>
							<h3 className="shop_box_content_heading_2">
								{" "}
								Pizza{" "}
							</h3>
						</h2>

						<h2 className="shop_box_content_address">
							Model Town Road, Opp. Om Parkash Jain Clinic, Model
							Town, Panipat 132103
						</h2>
					</div>
				</div>
				<div className=" shop_box">
					<img
						className="shop_box_image"
						src={shop}
						alt="shop image"
					/>
					<div className="shop_box_content">
						<h2 className="shop_box_content_heading">
							<h4 className="shop_box_content_heading_1">
								Ravindra Medical
							</h4>
							<h3 className="shop_box_content_heading_2">
								Medicine
							</h3>
						</h2>

						<h2 className="shop_box_content_address">
							Near Inder Dairy, Ajad Nagar, Panipat 132103
						</h2>
					</div>
				</div>
				<div className=" shop_box">
					<img
						className="shop_box_image"
						src={shop}
						alt="shop image"
					/>
					<div className="shop_box_content">
						<h2 className="shop_box_content_heading">
							<h4 className="shop_box_content_heading_1">
								Jangra Paints and Hardware
							</h4>
							<h3 className="shop_box_content_heading_2">
								Hardware and Sanitary
							</h3>
						</h2>

						<h2 className="shop_box_content_address">
							Gohana Road, Near H.P Petrol Pump, Panipat 132103{" "}
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PublicShop;
