import { useState } from "react";

import "./App.css";
import { FaInfoCircle } from "react-icons/fa";
import data from "./data.json";

function App() {
	const [asnActive, setAsnActive] = useState(true);

	const toggleData = () => {
		setAsnActive(false);
	};

	const toggleAsn = () => {
		setAsnActive(true);
	};

	return (
		<div className="App">
			<h1>UI Test</h1>
			<button
				className={`data-btn  ${asnActive ? "inactive" : "active"}`}
				onClick={toggleData}
			>
				Data Centre
			</button>
			<button
				className={`asn-btn  ${asnActive ? "active" : "inactive"}`}
				onClick={toggleAsn}
			>
				ASN
			</button>

			{asnActive ? (
				<div style={{ color: "white" }} className="main-content">
					<table className="table-auto">
						<tbody>
							<tr className="heading-row ">
								<th>
									<div className="flex items-center  gap-1">
										ASN <FaInfoCircle className="ml-1 icon" />
										<span className="tool-tip">Lorem Ipsum</span>
									</div>
								</th>
								<th>
									<div className="flex items-center">
										Average score
										<FaInfoCircle className="ml-1 icon" />
										<span className="tool-tip">Lorem Ipsum</span>
									</div>
								</th>
								<th>
									<div className="flex items-center">
										Data Centres
										<FaInfoCircle className="ml-1 icon" />
										<span className="tool-tip">Lorem Ipsum</span>
									</div>
								</th>
								<th>
									<div className="flex items-center gap-1">
										Population{" "}
										<span className="text-xs text-[#a1a1a1]">{"(1983)"}</span>{" "}
										<FaInfoCircle className="ml-1 icon" />
										<span className="tool-tip">Lorem Ipsum</span>
									</div>
								</th>
								<th>
									<div className="flex items-center gap-1">
										Delinquent{" "}
										<span className="text-xs text-[#a1a1a1]">{`(12 | ${(
											(12 / 1983) *
											100
										).toFixed(2)}%)`}</span>{" "}
										<FaInfoCircle className="ml-1 icon" />
										<span className="tool-tip">Lorem Ipsum</span>
									</div>
									<div className="flex items-center gap-1">
										Private{" "}
										<span className="text-xs text-[#a1a1a1]">{`(271 | ${(
											(271 / 1983) *
											100
										).toFixed(2)}%)`}</span>{" "}
										<FaInfoCircle className="ml-1 icon" />
										<span className="tool-tip">Lorem Ipsum</span>
									</div>
								</th>
								<th>
									<div className="flex items-center gap-1">
										Active Stake{" "}
										<span className="text-xs text-[#a1a1a1]">
											{"(384,322,582)"}
										</span>
										<FaInfoCircle className="ml-1 icon" />
										<span className="tool-tip">Lorem Ipsum</span>
									</div>
								</th>
							</tr>
							{data.map((data) => (
								<tr
									key={data.id}
									style={{
										background: data.id % 2 === 0 ? "#140636" : "#09011f",
									}}
								>
									<td style={{ color: "white" }}>
										<span style={{ color: "#e297f7" }}>{data.asn.number} </span>
										<br />
										{data.asn.name}
									</td>
									<td align="center">
										{" "}
										<div
											className="container"
											style={{
												background: data.id % 2 === 0 ? "#140636" : "#09011f",
											}}
										>
											<div className="outer"></div>
											<div
												className="inner"
												style={{
													background: data.id % 2 === 0 ? "#140636" : "#09011f",
												}}
											></div>
										</div>{" "}
										<hr
											style={{ rotate: `${(data.avg_score / 10) * 180}deg` }}
										/>
										{data.avg_score}{" "}
									</td>
									<td>
										{" "}
										{data.data_centres.map((centre) => (
											<ul className="list-none p-0">
												<li style={{ color: "#e297f7" }}>{centre}</li>
											</ul>
										))}{" "}
									</td>
									<td>{data.population}</td>
									<td>
										{" "}
										<span
											style={{
												color: data.delinquent === 0 ? "" : "#e297f7",
											}}
										>
											{data.delinquent}{" "}
											{data.delinquent === 0 ? (
												""
											) : (
												<span className="text-xs text-[#a1a1a1]">{` (${(
													(data.delinquent / data.population) *
													100
												).toFixed(2)}%)`}</span>
											)}
										</span>{" "}
										<br />{" "}
										<span
											style={{
												color: data.private === 0 ? "" : "#e297f7",
											}}
										>
											{data.private}
											{data.private === 0 ? (
												""
											) : (
												<span className="text-xs text-[#a1a1a1]">{` (${(
													(data.private / data.population) *
													100
												).toFixed(2)}%)`}</span>
											)}
										</span>{" "}
									</td>
									<td>
										{data.active_stake}

										<span className="text-xs text-[#a1a1a1]">{` (${(
											(parseInt(data.active_stake.replace(/,/g, "")) /
												384322582) *
											100
										).toFixed(2)}%)`}</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div style={{ color: "white" }}>Data Centre</div>
			)}
		</div>
	);
}

export default App;
