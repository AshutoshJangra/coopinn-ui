import react from "react";

const Transactions = ({ data, role }) => {
	console.log(data, role);

	return data ? (
		<div className="transactions">
			{data.map((tran) => {
				return (
					<div className="transactions_box">
						<div className="transactions_box_row">
							<h2 className="transactions_box_row_name">
								{role === "user"
									? tran.sellerName
									: tran.custNumber}
							</h2>
							<h4 className="transactions_box_row_date">
								{tran.date}
							</h4>
						</div>
						<div className="transactions_box_row">
							<h4 className="transactions_box_row_bill">
								+{tran.bill}
							</h4>
							<h4 className="transactions_box_row_debit">
								-{tran.debit}
							</h4>
						</div>
					</div>
				);
			})}
		</div>
	) : (
		<div> Please Wait... </div>
	);
};

export default Transactions;
