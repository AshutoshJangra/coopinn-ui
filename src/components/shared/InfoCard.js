import react from "react";
import welcome from "../../images/welcome.svg";

const InfoCard = ({ data, role }) => {
	return data ? (
		<div className="info_card">
			<div className="info_card_row1">
				<h1 className="info_card_row1_id">
					{role === "user" ? data.userNum : data.sellerName}
				</h1>

				<div className="info_card_row1_code">
					<h4 className="info_card_row1_code_headline">
						{role === "user" ? "Passcode" : ""}
					</h4>
					<h2 className="info_card_row1_code_value">
						{role === "user" ? data.passcode : ""}
					</h2>
				</div>
			</div>
			<div className="info_card_row2">
				<div className="info_card_row2_cl1">
					<h4 className="info_card_row2_cl1_headline">
						{role === "user" ? "Total Shopping" : "total Sale"}
					</h4>
					<h2 className="info_card_row2_cl1_value">
						{role === "user" ? data.totalShopping : data.totalSale}
					</h2>
				</div>

				<div className="info_card_row2_break" />

				<div className="info_card_row2_cl2">
					<h4 className="info_card_row2_cl2_headline">
						{role === "user" ? "Total Rewards" : "Credits Given"}
					</h4>
					<h2 className="info_card_row2_cl2_value">
						{role === "user"
							? Math.round(data.totalRewards)
							: Math.round(data.totalRewardGiven)}
					</h2>
				</div>
			</div>
		</div>
	) : (
		<div> Please Wait... </div>
	);
};

export default InfoCard;
