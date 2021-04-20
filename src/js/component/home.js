import React from "react";
import * as CryptoCharts from "cryptocharts";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

//create your first component
export function Home() {
	CryptoCharts.roiComparison({
		chart_id: "mychart",
		cryptocompare_tickers: ["BTC", "ETH"],
		iconomi_tickers: ["BLX", "CAR"],
		last_days: 90
	});
	return (
		<div className="text-center mt-5">
			<div className="row">
				<div className="col">
					<TradingViewWidget
						symbol="BTCUSD"
						theme={Themes.DARK}
						locale="es"
						autosize
					/>
				</div>
				<div className="col">
					<TradingViewWidget
						symbol="ETHE"
						theme={Themes.DARK}
						locale="es"
						autosize
					/>
				</div>
				<div className="col">
					<TradingViewWidget
						symbol="XRPUSD"
						theme={Themes.DARK}
						locale="es"
						autosize
					/>
				</div>
			</div>

			<div id="mychart"></div>
		</div>
	);
}
