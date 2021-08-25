import React from "react";
import image_1 from "../../images/image_1.svg";
import image_2 from "../../images/image_2.svg";
import image_3 from "../../images/image_3.svg";

const PublicWorking = () => {
	return (
		<section className="working_section">
			<h4 className="working_section_heading">
				Zero Hassle. <br /> Easy Working
			</h4>
			<div className="working">
				<div className="working_box">
					<h4 className="working_box_heading"> 3 Easy Steps </h4>
					<h3 className="working_box_sub_heading"> Step 1 </h3>
					<img
						className="working_box_image"
						src={image_1}
						alt="image_1"
					/>
					<h2 className="working_box_headline">
						Give Your Mobile Number To your Local Shop At Payment
					</h2>
				</div>
				<div className=" working_box">
					<h4 className="working_box_heading"> 3 Easy Steps </h4>
					<h3 className="working_box_sub_heading"> Step 2 </h3>
					<img
						className="working_box_image"
						src={image_2}
						alt="image_2"
					/>
					<h2 className="working_box_headline">
						Get Assured Cashback Magically
					</h2>
				</div>
				<div className=" working_box">
					<h4 className="working_box_heading"> 3 Easy Steps </h4>
					<h3 className="working_box_sub_heading"> Step 3 </h3>
					<img
						className="working_box_image"
						src={image_3}
						alt="image_3"
					/>
					<h2 className="working_box_headline">
						Redeem At Any Local Nearby Coopinn Merchant
					</h2>
				</div>
			</div>
		</section>
	);
};

export default PublicWorking;
