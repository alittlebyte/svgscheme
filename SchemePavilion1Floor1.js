import React, { useState, useEffect } from 'react';
import SchemeAddShopElement from './SchemeAddShopElement';
import SchemeShopPopup from './SchemeShopPopup';


const SchemePavilion1Floor1 = function (props){ 
	const [currentlyHovered, setCurrentlyHovered] = useState({})
	let [userAgent, setUserAgent] = useState('')

	useEffect(() => {
		setUserAgent(navigator.userAgent.toLowerCase())
	}, [typeof window !== undefined])


	return(
		<svg width={userAgent.indexOf("macintosh") != -1 ? '90vw' : 'auto'} height="55vw" viewBox="-100 0 2600 1400" version="1.1" id="svg1001">
			<defs>
				<style>
					{props.css}
				</style>
				<linearGradient id="linear-gradient" x1="566.68" y1="121.08" x2="725.08" y2="121.08" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#c3c7cf" id="stop510"/>
					<stop offset="1" stopColor="#d6d8db" id="stop512"/>
				</linearGradient>
				<linearGradient id="linear-gradient-2" x1="181.31" y1="257.43" x2="353.14" y2="257.43" xlinkHref="#linear-gradient"/>
				<linearGradient id="linear-gradient-3" x1="404.05" y1="492.99" x2="679.11" y2="492.99" xlinkHref="#linear-gradient"/>
				<linearGradient id="linear-gradient-4" x1="1680.38" y1="787.75" x2="1896.76" y2="787.75" xlinkHref="#linear-gradient"/>
				<linearGradient id="linear-gradient-5" x1="843.16" y1="739.37" x2="1198.14" y2="739.37" xlinkHref="#linear-gradient"/>
				<linearGradient id="linear-gradient-6" x1="1316.23" y1="973.09" x2="1648.56" y2="973.09" xlinkHref="#linear-gradient"/>
		    <mask id="mask" x="1786.93" y="893.22" width="26.73" height="28" maskUnits="userSpaceOnUse">
		      <g id="path-18-inside-1_0_1">
		        <path className="cls-1" d="M1793.43,901.22a3,3,0,1,0-3-3A3,3,0,0,0,1793.43,901.22Zm-2.5,1a2,2,0,0,0-2,2v7h2v8h5v-8h2v-7a2,2,0,0,0-2-2Zm14.5-1a3,3,0,1,0-3-3A3,3,0,0,0,1805.43,901.22Zm2.5,18v-6h3l-3.06-9.61a2,2,0,0,0-1.9-1.39h-1.08a2,2,0,0,0-1.9,1.39l-3.06,9.61h3v6Z"/>
		      </g>
		    </mask>
			</defs>
			<g id="Layer_2">
				<g id="Scheme">
					<polygon className="cls-2" points="2320.33 1024.88 1746.86 1355.97 1.01 348 574.47 16.91 2320.33 1024.88"/>
					<polygon className="cls-3-1" points="1896.76 780.34 1896.76 764.01 1928.58 782.38 1928.58 798.7 1896.76 780.34"/>
					<polygon className="cls-3-1" points="725.08 103.87 725.08 87.54 756.9 105.91 756.9 122.23 725.08 103.87"/>
					<polygon className="cls-3-1" points="869.34 849.33 869.34 833 837.51 814.63 837.51 830.96 869.34 849.33"/>
					<path className="cls-5" d="M566.68 101.41 566.68 117.74 464.15 176.94 464.15 160.61 566.68 101.41z"/>
					<path className="cls-4" d="M639.52,136.93a12.48,12.48,0,0,1-11.32,0l-61.52-35.52v16.33l61.52,35.52a12.48,12.48,0,0,0,11.32,0l85.56-49.39V87.54Z"/>
					<path className="cls-6" d="M671.34,161.84c-1.56-.91-2.34-2.09-2.34-3.27V174.9c0,1.18.78,2.36,2.34,3.27l37.48,21.63V183.47Z"/>
					<path className="cls-6" d="M775.28 221.85 775.28 238.18 708.82 199.8 708.82 183.47 775.28 221.85z"/>
					<path className="cls-5" d="M464.15 160.61 464.15 176.94 353.14 241.04 353.14 224.71 464.15 160.61z"/>
					<path className="cls-6" d="M853.77 267.16 853.77 283.49 775.28 238.18 775.28 221.85 853.77 267.16z"/>
					<path className="cls-7" d="M270.41,272.47a12.48,12.48,0,0,1-11.32,0l-77.78-44.9V243.9l77.78,44.9a12.46,12.46,0,0,0,11.31,0L353.14,241V224.71Z"/>
					<path className="cls-6" d="M462.03 389.64 462.03 405.97 396.98 368.41 396.98 352.08 462.03 389.64z"/>
					<path className="cls-6" d="M931.56 312.07 931.56 328.4 853.77 283.49 853.77 267.16 931.56 312.07z"/>
					<path className="cls-6" d="M302.23,297.38c-1.57-.91-2.35-2.09-2.35-3.27v16.33c0,1.18.78,2.36,2.35,3.27L397,368.41V352.08Z"/>
					<path className="cls-6" d="M1012.87 359.02 1012.87 375.35 931.56 328.4 931.56 312.07 1012.87 359.02z"/>
					<path className="cls-6" d="M377.89,408c-1.57-.9-2.35-2.08-2.35-3.26v16.32c0,1.19.78,2.37,2.35,3.27l26.16,15.11V423.12Z"/>
					<path className="cls-5" d="M943.57,362.29,802.86,443.53v16.33l140.71-81.24c1.57-.91,2.35-2.09,2.35-3.27V359C945.92,360.2,945.14,361.38,943.57,362.29Z"/>
					<path className="cls-5" d="M802.86 443.53 802.86 459.86 679.11 531.3 679.11 514.97 802.86 443.53z"/>
					<path className="cls-8" d="M626.79,545.18a12.49,12.49,0,0,1-11.31,0L404.05,423.12v16.33L615.48,561.52a12.49,12.49,0,0,0,11.31,0l52.32-30.21V515Z"/>
					<path className="cls-6" d="M1214.4 475.37 1214.4 491.7 1012.87 375.35 1012.87 359.02 1214.4 475.37z"/>
					<path className="cls-6" d="M658.61,570.09c-1.56-.91-2.34-2.09-2.34-3.27v16.33c0,1.18.78,2.36,2.34,3.27L843.16,693V676.64Z"/>
					<path className="cls-6" d="M1305.61 528.03 1305.61 544.37 1214.4 491.7 1214.4 475.37 1305.61 528.03z"/>
					<path className="cls-6" d="M1395.42 579.89 1395.42 596.22 1305.61 544.37 1305.61 528.03 1395.42 579.89z"/>
					<path className="cls-5" d="M1358,601.52l-159.81,92.27v16.33L1358,617.85a4,4,0,0,0,2.34-3.26V598.26A4,4,0,0,1,1358,601.52Z"/>
					<path className="cls-6" d="M1562.3 676.23 1562.3 692.56 1395.42 596.22 1395.42 579.89 1562.3 676.23z"/>
					<path className="cls-6" d="M1680.38 744.41 1680.38 760.74 1562.3 692.56 1562.3 676.23 1680.38 744.41z"/>
					<path className="cls-9" d="M1811.2,813.4a12.46,12.46,0,0,1-11.31,0l-119.51-69v16.33l119.51,69a12.46,12.46,0,0,0,11.31,0l85.56-49.39V764Z"/>
					<path className="cls-5" d="M1768.07,838.31l-119.51,69v16.33l119.51-69c1.56-.91,2.34-2.09,2.34-3.27V835C1770.41,836.22,1769.63,837.4,1768.07,838.31Z"/>
					<path className="cls-10" d="M1041.16,784.42a12.52,12.52,0,0,1-11.31,0L843.16,676.64V693l186.69,107.78a12.52,12.52,0,0,0,11.31,0l157-90.63V693.79Z"/>
					<path className="cls-6" d="M1073,809.32c-1.57-.9-2.35-2.08-2.35-3.26v16.33c0,1.18.78,2.36,2.35,3.26l150.61,87V896.28Z"/>
					<path className="cls-6" d="M1316.23 949.76 1316.23 966.09 1223.59 912.61 1223.59 896.28 1316.23 949.76z"/>
					<path className="cls-11" d="M1451.28,1021.2a12.46,12.46,0,0,1-11.31,0l-123.74-71.44v16.33L1440,1037.53a12.46,12.46,0,0,0,11.31,0l197.28-113.9V907.3Z"/>
					<path className="cls-6" d="M84.44 379.84 84.44 396.17 1 348 1 331.67 84.44 379.84z"/>
					<path className="cls-5" d="M227.27,297.38,84.44,379.84v16.33l142.83-82.46c1.56-.91,2.34-2.09,2.34-3.27V294.11C229.61,295.29,228.83,296.47,227.27,297.38Z"/>
					<path className="cls-6" d="M137.48 410.46 137.48 426.79 84.44 396.17 84.44 379.84 137.48 410.46z"/>
					<path className="cls-6" d="M205.35 449.65 205.35 465.98 137.48 426.79 137.48 410.46 205.35 449.65z"/>
					<path className="cls-6" d="M268.99 486.39 268.99 502.72 205.35 465.98 205.35 449.65 268.99 486.39z"/>
					<path className="cls-6" d="M329.1 521.1 329.1 537.43 268.99 502.72 268.99 486.39 329.1 521.1z"/>
					<path className="cls-6" d="M498.8 619.08 498.8 635.4 329.1 537.43 329.1 521.1 498.8 619.08z"/>
					<path className="cls-12" d="M551.13 649.29 551.13 665.62 498.8 635.4 498.8 619.08 551.13 649.29z"/>
					<path className="cls-13" d="M641.64 597.03 551.13 649.29 498.8 619.08 589.31 566.82 641.64 597.03z"/>
					<path className="cls-6" d="M765.38 772.99 765.38 789.32 551.13 665.62 551.13 649.29 765.38 772.99z"/>
					<path className="cls-6" d="M837.51 814.63 837.51 830.96 765.38 789.32 765.38 772.99 837.51 814.63z"/>
					<path className="cls-5" d="M922.37,765.64l-84.85,49V831l84.86-49a4,4,0,0,0,2.34-3.27V762.37A4,4,0,0,1,922.37,765.64Z"/>
					<path className="cls-5" d="M2320.32 1008.55 2320.32 1024.88 2209.31 1088.97 2209.31 1072.64 2320.32 1008.55z"/>
					<path className="cls-6" d="M1663.41,942c-1.56-.91-2.34-2.09-2.34-3.27v16.33c0,1.18.78,2.36,2.34,3.27l59.4,34.29V976.3Z"/>
					<path className="cls-13" d="M1888.28 950.99 1783.62 1011.41 1722.81 976.3 1827.46 915.87 1888.28 950.99z"/>
					<path className="cls-12" d="M1783.62 1011.41 1783.62 1027.74 1722.81 992.63 1722.81 976.3 1783.62 1011.41z"/>
					<path className="cls-5" d="M2209.31 1072.64 2209.31 1088.97 2126.58 1136.74 2126.58 1120.41 2209.31 1072.64z"/>
					<path className="cls-6" d="M2049.5 1164.91 2049.5 1181.24 1783.62 1027.74 1783.62 1011.41 2049.5 1164.91z"/>
					<path className="cls-5" d="M2126.58 1120.41 2126.58 1136.74 2049.5 1181.24 2049.5 1164.91 2126.58 1120.41z"/>
					<path className="cls-6" d="M1091.37 961.19 1091.37 977.52 869.34 849.33 869.34 833 1091.37 961.19z"/>
					<path className="cls-6" d="M1355.12 1113.47 1355.12 1129.8 1091.37 977.52 1091.37 961.19 1355.12 1113.47z"/>
					<path className="cls-6" d="M1746.86 1339.64 1746.86 1355.97 1355.12 1129.8 1355.12 1113.47 1746.86 1339.64z"/>
					<path className="cls-5" d="M2017.68 1183.28 2017.68 1199.61 1746.86 1355.97 1746.86 1339.64 2017.68 1183.28z"/>
					<SchemeAddShopElement data={["4B_47", 498.42511, 137.38382, "M667.1,196.13,505.17,289.62l-100.42-58L561,141.42a12.52,12.52,0,0,1,11.31,0z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4B_46", 365.28621, 214.365, "M505.17,289.62,397,352.08l-94.75-54.7c-3.13-1.81-3.13-4.73,0-6.54l102.52-59.19z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4B_45", 533.77999, 219.26501, "M745.58 241.44 475.47 397.4 462.03 389.64 396.98 352.08 505.17 289.62 667.1 196.13 745.58 241.44z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4B_44", 684.395, 234.775, "M844.58 298.6 698.21 383.11 599.21 325.95 745.58 241.44 844.58 298.6z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4B_42", 601.66504, 342.95999, "M802.86 443.53 679.11 514.97 475.47 397.4 599.21 325.95 698.21 383.11 802.86 443.53z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4B_43", 504.0802, 390.56299, "M679.11,515l-52.32,30.21a12.49,12.49,0,0,1-11.31,0L404.05,423.12,430.21,408,462,389.64l13.44,7.76z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4B_41", 784.31501, 293.565, "M943.58,355.76c3.12,1.8,3.12,4.72,0,6.53L802.86,443.53,698.21,383.11,844.58,298.6z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3B_40", 817.82121, 483.41, "M1053.88,555l-48.08,27.76-162.64,93.9L658.61,570.09c-3.13-1.81-3.13-4.73,0-6.54L863.67,445.16z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3B_39", 979.96498, 389.69013, "M1171.26,487.21,1053.88,555,863.67,445.16l111.72-64.5a12.48,12.48,0,0,1,11.32,0z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3B_38", 983.15003, 606.71619, "M1198.14,693.79l-157,90.63a12.52,12.52,0,0,1-11.31,0L843.16,676.64l162.64-93.9z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3B_37", 1145.3454, 513.015, "M1358,595c3.12,1.8,3.12,4.73,0,6.53l-159.81,92.27-192.34-111L1053.88,555l117.38-67.77z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2B_36", 1202.8331, 719.96501, "M1409.56,788.91l-186,107.37-150.61-87c-3.13-1.8-3.12-4.72,0-6.53l180.31-104.1z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2B_35", 1364.99, 626.26387, "M1551.69,706.85l-142.13,82.06-156.27-90.22,136.48-78.8a12.5,12.5,0,0,1,11.3,0z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2B_34", 1333.875, 786.93499, "M1519.16 832.59 1316.23 949.76 1223.59 896.28 1409.56 788.91 1426.53 779.11 1519.16 832.59z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2B_33", 1497.93, 692.22, "M1644.33 760.33 1519.16 832.59 1426.53 779.11 1551.69 706.85 1644.33 760.33z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2B_32", 1444.895, 850.03483, "M1648.56,907.3l-197.28,113.9a12.46,12.46,0,0,1-11.31,0l-123.74-71.44,202.94-117.17z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2B_31", 1607.04, 756.32501, "M1768.07,831.77c3.12,1.81,3.12,4.73,0,6.54l-119.51,69-129.39-74.71,125.15-72.26z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2A_30", 1231, 933.70501, "M1445.63 1061.21 1355.12 1113.47 1091.37 961.19 1181.88 908.94 1445.63 1061.21z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2A_29", 988.10502, 794.4588, "M1181.88,908.94l-90.51,52.25L869.33,833l84.86-49a12.52,12.52,0,0,1,11.31,0z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3A_27", 666.01, 607.51, "M855.89 720.73 765.38 772.99 551.13 649.29 641.64 597.03 855.89 720.73z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3A_28", 807.30004, 690.19001, "M922.37,759.11c3.12,1.8,3.12,4.73,0,6.53l-84.86,49L765.39,773l90.5-52.26z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["5A_20", 77.558732, 235.39, "M227.27,290.84c3.13,1.81,3.13,4.73,0,6.54L84.44,379.84,1,331.67l148.49-85.73z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4A_21", 118.70994, 291.525, "M227.98 358.21 137.48 410.46 84.44 379.84 174.95 327.59 227.98 358.21z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4A_22", 179.17005, 326.43, "M295.86 397.4 205.35 449.65 137.48 410.46 227.98 358.21 295.86 397.4z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4A_23", 244.925, 364.395, "M359.5 434.14 268.99 486.39 205.35 449.65 295.86 397.4 359.5 434.14z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4A_24", 306.80002, 400.12002, "M419.61 468.84 329.1 521.1 268.99 486.39 359.5 434.14 419.61 468.84z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4A_25", 421.705, 466.46, "M589.31 566.82 498.8 619.08 329.1 521.1 419.61 468.84 589.31 566.82z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["5C_18", 515.40005, 3.0950027, "M725.08,87.54l-85.56,49.39a12.48,12.48,0,0,1-11.32,0l-61.52-35.52-102.53,59.2-83.43-48.17L574.46.58z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["5B_18/1", 329.42497, 91.075012, "M464.15 160.61 353.14 224.71 269.7 176.53 380.72 112.44 464.15 160.61z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["5B_19", 229.72501, 147.65993, "M353.14,224.71l-82.73,47.76a12.48,12.48,0,0,1-11.32,0l-77.78-44.9,88.39-51z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>

					{/*Блок передвинут сюда для корректного отображения относительно элемента ниже*/}
					<rect className="cls-14" x="696.47" y="9.72" width="56" height="56" rx="8"/>
					<path className="cls-1" d="M724.76,26l-12,12,1.42,1.42,12-12Zm5.71,2.71h-1v7h-7v7h-7v7h2v-5h7v-7h7v-7h5v-2Z"/>
					<path className="cls-15" d="M724.47,65.72v48"/>
					<ellipse className="cls-16" cx="724.47" cy="115.22" rx="6" ry="1.5"/>
					{/**/}

					<SchemeAddShopElement data={["4C_17/1", 696.985, 67.19, "M800,130.81l-91.21,52.66-37.48-21.63c-3.12-1.81-3.12-4.73,0-6.54l85.56-49.39z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4C_17", 750.16005, 98.830001, "M866.5 169.19 775.28 221.85 708.82 183.47 800.03 130.81 866.5 169.19z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4C_16", 822.635, 140.675, "M944.99 214.5 853.77 267.16 775.28 221.85 866.5 169.19 944.99 214.5z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["4C_15", 900.76996, 185.785, "M1022.77 259.41 931.56 312.07 853.77 267.16 944.99 214.5 1022.77 259.41z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3C_14", 980.32, 231.715, "M1104.08 306.36 1012.87 359.02 931.56 312.07 1022.77 259.41 1104.08 306.36z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3C_13", 1121.74, 313.365, "M1305.61 422.71 1214.4 475.37 1012.87 359.02 1104.08 306.36 1305.61 422.71z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3C_12", 1268.115, 397.87, "M1396.83 475.37 1305.61 528.03 1214.4 475.37 1305.61 422.71 1396.83 475.37z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["3C_11", 1358.625, 450.13001, "M1486.64 527.22 1395.42 579.89 1305.61 528.03 1396.83 475.37 1486.64 527.22z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2C_10", 1486.965, 524.22499, "M1653.51 623.57 1562.3 676.23 1395.42 579.89 1486.64 527.22 1653.51 623.57z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2C_9", 1629.45, 606.49, "M1771.6 691.75 1680.38 744.41 1562.3 676.23 1653.51 623.57 1771.6 691.75z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["2C_8", 1751.07, 675.70483, "M1896.76,764,1811.2,813.4a12.46,12.46,0,0,1-11.31,0l-119.51-69,91.22-52.67z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["1C_6", 1934.215, 793.875, "M2125.86 896.28 2014.85 960.37 1817.57 846.47 1928.58 782.38 2125.86 896.28z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["1C_5", 2130.085, 906.96, "M2320.32 1008.55 2209.31 1072.64 2014.85 960.37 2125.86 896.28 2320.32 1008.55z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["1B_4", 1948.36, 905.94, "M2209.31 1072.64 2126.58 1120.41 1910.91 995.89 1938.48 979.97 1762.41 878.32 1817.57 846.47 2014.85 960.37 2209.31 1072.64z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["1B_3", 1707.015, 849.80501, "M1827.46,915.87,1722.81,976.3,1663.41,942c-3.12-1.81-3.12-4.73,0-6.54l99-57.15z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["1B_2", 1917.6, 980.45, "M1938.48 979.97 1910.91 995.89 2126.58 1120.41 2049.5 1164.91 1783.62 1011.41 1888.28 950.99 1938.48 979.97z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					<SchemeAddShopElement data={["1A_1", 1648.9, 1071.867, "M2017.68,1183.28l-270.82,156.36-391.74-226.17,265.16-153.1a12.49,12.49,0,0,1,11.31,0z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>

					<path className="cls-17" d="M1799.93,931.22h0a24,24,0,0,1,24,24h0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24h0A24,24,0,0,1,1799.93,931.22Z"/>
					<path className="cls-1" d="M1796.93,945.22h-5v2h4v3.06a8,8,0,1,0,8.4,11l1.71,3.41a1,1,0,0,0,1.34.44l4-2-.9-1.79-3.1,1.56-2.56-5.11a1,1,0,0,0-.89-.55h-6v-5h7v-2h-7v-5Zm-1,12V952.3a6,6,0,1,0,6.75,7.63,5.65,5.65,0,0,0,.17-.71h-6.92v-2Z"/>
					<path className="cls-17" d="M1799.93,883.22h0a24,24,0,0,1,24,24h0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24h0A24,24,0,0,1,1799.93,883.22Z"/>
					<g className="cls-18" mask="url(#mask)">
						<rect className="cls-19" x="1786.93" y="911.22" width="2" height="2"/>
						<rect className="cls-19" x="1790.93" y="909.22" width="2" height="2"/>
						<rect className="cls-19" x="1788.93" y="919.22" width="2" height="2"/>
						<rect className="cls-19" x="1795.93" y="919.22" width="2" height="2"/>
						<rect className="cls-19" x="1793.93" y="909.22" width="2" height="2"/>
						<rect className="cls-19" x="1797.93" y="911.22" width="2" height="2"/>
						<rect className="cls-19" x="1805.93" y="911.22" width="2" height="2"/>
						<rect className="cls-19" x="1807.93" y="919.22" width="2" height="2"/>
						<polygon className="cls-19" points="1810.93 913.22 1810.93 915.22 1813.66 915.22 1812.84 912.61 1810.93 913.22"/>
						<polygon className="cls-19" points="1807.87 903.61 1809.78 903 1809.78 903 1807.87 903.61"/>
						<polygon className="cls-19" points="1802.99 903.61 1801.08 903 1801.08 903 1802.99 903.61"/>
						<polygon className="cls-19" points="1799.93 913.22 1798.02 912.61 1797.19 915.22 1799.93 915.22 1799.93 913.22"/>
						<rect className="cls-19" x="1802.93" y="911.22" width="2" height="2"/>
						<rect className="cls-19" x="1800.93" y="919.22" width="2" height="2"/>
						<path className="cls-19" d="M1794.43,898.22a1,1,0,0,1-1,1v4a5,5,0,0,0,5-5Z"/>
						<path className="cls-19" d="M1793.43,897.22a1,1,0,0,1,1,1h4a5,5,0,0,0-5-5Z"/>
						<path className="cls-19" d="M1792.43,898.22a1,1,0,0,1,1-1v-4a5,5,0,0,0-5,5Z"/>
						<path className="cls-19" d="M1793.43,899.22a1,1,0,0,1-1-1h-4a5,5,0,0,0,5,5Z"/>
						<path className="cls-19" d="M1790.93,904.22v-4a4,4,0,0,0-4,4Z"/>
						<rect className="cls-19" x="1786.93" y="904.22" width="4" height="7"/>
						<rect className="cls-19" x="1788.93" y="909.22" width="2" height="4"/>
						<rect className="cls-19" x="1788.93" y="911.22" width="4" height="8"/>
						<rect className="cls-19" x="1790.93" y="917.22" width="5" height="4"/>
						<rect className="cls-19" x="1793.93" y="911.22" width="4" height="8"/>
						<rect className="cls-19" x="1795.93" y="909.22" width="2" height="4"/>
						<rect className="cls-19" x="1795.93" y="904.22" width="4" height="7"/>
						<path className="cls-19" d="M1795.93,904.22h4a4,4,0,0,0-4-4Z"/>
						<rect className="cls-19" x="1790.93" y="900.22" width="5" height="4"/>
						<path className="cls-19" d="M1806.43,898.22a1,1,0,0,1-1,1v4a5,5,0,0,0,5-5Z"/>
						<path className="cls-19" d="M1805.43,897.22a1,1,0,0,1,1,1h4a5,5,0,0,0-5-5Z"/>
						<path className="cls-19" d="M1804.43,898.22a1,1,0,0,1,1-1v-4a5,5,0,0,0-5,5Z"/>
						<path className="cls-19" d="M1805.43,899.22a1,1,0,0,1-1-1h-4a5,5,0,0,0,5,5Z"/>
						<rect className="cls-19" x="1805.93" y="913.22" width="4" height="6"/>
						<rect className="cls-19" x="1807.93" y="911.22" width="3" height="4"/>
						<rect className="cls-19" x="1807.4" y="903.37" width="4" height="10.08" transform="translate(-190.24 591.27) rotate(-17.65)"/>
						<path className="cls-19" d="M1806,904.22h0l3.81-1.21a4,4,0,0,0-3.81-2.79Z"/>
						<rect className="cls-19" x="1804.89" y="900.22" width="1.08" height="4"/>
						<path className="cls-19" d="M1804.89,904.22h0v-4a4,4,0,0,0-3.81,2.79Z"/>
						<rect className="cls-19" x="1796.42" y="906.42" width="10.08" height="4" transform="translate(389.68 2349.71) rotate(-72.35)"/>
						<rect className="cls-19" x="1799.93" y="911.22" width="3" height="4"/>
						<rect className="cls-19" x="1800.93" y="913.22" width="4" height="6"/>
						<rect className="cls-19" x="1802.93" y="917.22" width="5" height="4"/>
					</g>
					<rect className="cls-14" x="399.47" y="290.91" width="56" height="56" rx="8"/>
					<path className="cls-1" d="M427.76,307.2l-12,12,1.42,1.41,12-12Zm5.71,2.71h-1v7h-7v7h-7v7h2v-5h7v-7h7v-7h5v-2Z"/>
					<path className="cls-15" d="M427.47,346.91v48"/>
					<ellipse className="cls-16" cx="427.47" cy="396.41" rx="6" ry="1.5"/>

					{/*Блок передвинут сюда для корректного отображения относительно элемента выше*/}
					<SchemeAddShopElement data={["4B_7", 365.37625, 329.82636, "M430.21,408l-26.16,15.11L377.89,408c-3.13-1.8-3.13-4.73,0-6.53l14.84-8.57a12.48,12.48,0,0,1,11.32,0z"]} shopMap={props.shopMap} setCurrentlyHovered={(id) => setCurrentlyHovered(id)} shopResult={props.shopResult} setFocusedShopResult={(shop) => props.setFocusedShopResult(shop)}/>
					{/**/}

					<rect className="cls-14" x="566.47" y="488.91" width="56" height="56" rx="8"/>
					<path className="cls-1" d="M594.76,505.2l-12,12,1.42,1.41,12-12Zm5.71,2.71h-1v7h-7v7h-7v7h2v-5h7v-7h7v-7h5v-2Z"/>
					<path className="cls-15" d="M594.47,544.91v48"/>
					<ellipse className="cls-16" cx="594.47" cy="594.41" rx="6" ry="1.5"/>
					<rect className="cls-14" x="1491.72" y="927.16" width="56" height="56" rx="8"/>
					<path className="cls-1" d="M1520,943.45l-12,12,1.42,1.41,12-12Zm5.71,2.71h-1v7h-7v7h-7v7h2v-5h7v-7h7v-7h5v-2Z"/>
					<path className="cls-15" d="M1519.72,983.16v48"/>
					<ellipse className="cls-16" cx="1519.72" cy="1032.66" rx="6" ry="1.5"/>
					<rect className="cls-14" x="1775.16" y="762.59" width="56" height="56" rx="8"/>
					<path className="cls-1" d="M1803.45,778.89l-12,12,1.42,1.41,12-12Zm5.71,2.7h-1v7h-7v7h-7v7h2v-5h7v-7h7v-7h5v-2Z"/>
					<path className="cls-15" d="M1803.16,818.59v48"/>
					<ellipse className="cls-16" cx="1803.16" cy="868.09" rx="6" ry="1.5"/>
					<path className="cls-17" d="M557.72,568.93h0a24,24,0,0,1,24,24h0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24h0A24,24,0,0,1,557.72,568.93Z"/>
					<path className="cls-1" d="M546.54,583.91l4.83.88,2.37,11.83.21,1.07,1-.3,10.56-3.08a3,3,0,0,0,2.16-2.88v-3.5H554l-.84-4.2-.13-.67-.67-.12-5.5-1Zm9,11.25-1-5.23h11.28v1.5a1,1,0,0,1-.72,1Zm-2.77,6.77a1,1,0,1,0-1-1A1,1,0,0,0,552.72,601.93Zm0,2a3,3,0,1,0-3-3A3,3,0,0,0,552.72,603.93Zm10-2a1,1,0,1,0-1-1A1,1,0,0,0,562.72,601.93Zm0,2a3,3,0,1,0-3-3A3,3,0,0,0,562.72,603.93Z"/>
					<g className="cls-20">
						<path className="cls-14" d="M1907.7,1445.47a.87.87,0,0,1,0,1.64l-11.32,6.53a3.13,3.13,0,0,1-2.83,0l-11.31-6.53a.87.87,0,0,1,0-1.64l11.31-6.53a3.14,3.14,0,0,1,2.83,0Zm-10.6,5.31,1.41-.82-3.53-2,2.48-1.43c1.75-1,1.75-2.66,0-3.67a7,7,0,0,0-6.37,0l-2.47,1.43-.71.41-.71.4,9.9,5.72"/>
						<path className="cls-19" d="M1909.12,1444.65c1.57.91,1.57,2.37,0,3.27l-11.31,6.53a6.27,6.27,0,0,1-5.66,0l-11.31-6.53c-1.57-.9-1.57-2.36,0-3.26l11.32-6.54a6.27,6.27,0,0,1,5.66,0Zm-12.73,9,11.32-6.53a.87.87,0,0,0,0-1.64l-11.31-6.53a3.14,3.14,0,0,0-2.83,0l-11.31,6.53a.87.87,0,0,0,0,1.64l11.31,6.53a3.13,3.13,0,0,0,2.83,0"/>
						<path className="cls-14" d="M1928.92,1443c3.12,1.81,3.13,4.73,0,6.53l-28.29,16.34a12.51,12.51,0,0,1-11.32,0L1861,1449.55c-3.12-1.8-3.12-4.73,0-6.53l28.29-16.33a12.49,12.49,0,0,1,11.31,0Zm-31.11,11.43,11.31-6.53c1.57-.9,1.57-2.36,0-3.27l-11.31-6.53a6.27,6.27,0,0,0-5.66,0l-11.32,6.54c-1.56.9-1.56,2.36,0,3.26l11.31,6.53a6.27,6.27,0,0,0,5.66,0"/>
						<path className="cls-19" d="M1897.46,1446.49l-2.48,1.43,3.53,2-1.41.82-9.9-5.72.71-.4.71-.41,2.47-1.43a7,7,0,0,1,6.37,0C1899.21,1443.83,1899.21,1445.48,1897.46,1446.49Zm-3.89.62,2.47-1.43a1.08,1.08,0,0,0,0-2,3.94,3.94,0,0,0-3.54,0l-2.47,1.43,3.54,2"/>
						<path className="cls-14" d="M1896,1443.63a1.08,1.08,0,0,1,0,2l-2.47,1.43-3.54-2,2.47-1.43A3.94,3.94,0,0,1,1896,1443.63Z"/>
					</g>
					<g className="cls-20">
						<polygon className="cls-21" points="2184.02 1352.08 2177.14 1356.05 2168.95 1351.32 2175.83 1347.35 2184.02 1352.08"/>
						<polygon className="cls-21" points="2149.16 1372.2 2141.83 1376.43 2107.89 1356.84 2136.81 1340.14 2170.75 1359.74 2163.42 1363.97 2136.4 1348.37 2122.15 1356.6 2149.16 1372.2"/>
						<path className="cls-21" d="M2079.19,1382.87a8.62,8.62,0,0,1,.14-7.45,15.38,15.38,0,0,1,6.61-6.53,29.82,29.82,0,0,1,8.81-3.27,40.77,40.77,0,0,1,10.19-.91,38.68,38.68,0,0,1,9.91,1.54l-4.07,5.28a23.33,23.33,0,0,0-9.32-1.09,19.82,19.82,0,0,0-8.61,2.44,8.8,8.8,0,0,0-3.84,3.9,5,5,0,0,0,0,4.42,9.16,9.16,0,0,0,3.9,3.86,19.16,19.16,0,0,0,6.74,2.28,25.81,25.81,0,0,0,7.7.05,19.13,19.13,0,0,0,6.69-2.25c2.42-1.39,3.82-3,4.21-4.93a5.85,5.85,0,0,0-1.9-5.44l9.14-2.35a9.85,9.85,0,0,1,2.68,5.72,9.17,9.17,0,0,1-1.5,5.88,16.6,16.6,0,0,1-5.75,5.09,32.47,32.47,0,0,1-11.31,3.82,43.19,43.19,0,0,1-12.89.08,31.27,31.27,0,0,1-11.19-3.69Q2080.82,1386.58,2079.19,1382.87Z"/>
					</g>
					<g className="cls-20">
						<path className="cls-21" d="M1985.5,1375.24l16.06-9.27a18.9,18.9,0,0,1,6.44-2.19,23.39,23.39,0,0,1,7.28-.08,17,17,0,0,1,6.33,2,8.07,8.07,0,0,1,3,2.71,4.3,4.3,0,0,1,.59,3.11,21,21,0,0,1,6.19.08,15.46,15.46,0,0,1,5.44,1.83,8.06,8.06,0,0,1,3.61,3.66,4.76,4.76,0,0,1-.22,4.2,9.26,9.26,0,0,1-3.85,3.74l-16.92,9.77Zm36.16,2-9.28,5.35,7.78,4.5,9.28-5.36a2.65,2.65,0,0,0,1.63-2.2,2.87,2.87,0,0,0-1.72-2.24,7.51,7.51,0,0,0-3.84-1,7.35,7.35,0,0,0-3.85.92m-14.31-7.22-8.37,4.84,7.79,4.49,8.37-4.83c1.09-.63,1.63-1.36,1.63-2.19a2.82,2.82,0,0,0-1.72-2.25,8.35,8.35,0,0,0-7.7-.06"/>
						<polygon className="cls-21" points="1955.74 1392.43 1979.64 1378.63 1986.38 1382.52 1969.82 1392.09 1976.78 1396.11 1990.68 1388.08 1997.2 1391.85 1983.3 1399.87 1990.27 1403.89 2006.83 1394.33 2013.58 1398.22 1989.68 1412.02 1955.74 1392.43"/>
						<path className="cls-21" d="M2088.14,1398a8.45,8.45,0,0,1-.1,7.42q-1.71,3.7-6.56,6.51a32.17,32.17,0,0,1-11.27,3.78,43.18,43.18,0,0,1-12.84.06,31.22,31.22,0,0,1-11.18-3.69q-4.76-2.74-6.34-6.43a8.65,8.65,0,0,1,.08-7.42,15.32,15.32,0,0,1,6.57-6.5,32.05,32.05,0,0,1,11.26-3.79,41.71,41.71,0,0,1,12.86-.05,30.74,30.74,0,0,1,11.13,3.66Q2086.51,1394.28,2088.14,1398ZM2068,1410.16a18.77,18.77,0,0,0,6.65-2.23,8.6,8.6,0,0,0,3.81-3.81,5.19,5.19,0,0,0-.1-4.44,9.2,9.2,0,0,0-3.93-3.9,19.39,19.39,0,0,0-6.7-2.24,25.16,25.16,0,0,0-7.65,0,18.53,18.53,0,0,0-6.66,2.17,8.63,8.63,0,0,0-3.8,3.87,5.09,5.09,0,0,0,.1,4.39,9.29,9.29,0,0,0,3.94,3.84,19.83,19.83,0,0,0,6.74,2.32,26.52,26.52,0,0,0,7.6.06"/>
						<path className="cls-21" d="M1976.05,1413.73a9.05,9.05,0,0,1-1.49,5.87,16.53,16.53,0,0,1-5.75,5.1,32.4,32.4,0,0,1-11.31,3.81,42.86,42.86,0,0,1-12.89.09,31.47,31.47,0,0,1-11.19-3.69q-4.76-2.75-6.38-6.46a8.63,8.63,0,0,1,.13-7.44,15.56,15.56,0,0,1,6.61-6.54,29.94,29.94,0,0,1,8.83-3.26,40.15,40.15,0,0,1,10.18-.91,38.18,38.18,0,0,1,9.91,1.54l-4.07,5.28a23.33,23.33,0,0,0-9.32-1.1,20,20,0,0,0-8.61,2.45,8.8,8.8,0,0,0-3.84,3.9,5.09,5.09,0,0,0,0,4.41,9.24,9.24,0,0,0,3.9,3.87,19.41,19.41,0,0,0,6.75,2.27,26.08,26.08,0,0,0,7.69.06,19.34,19.34,0,0,0,6.69-2.25c2.42-1.39,3.82-3,4.22-4.94a5.84,5.84,0,0,0-1.91-5.43l9.14-2.36A9.77,9.77,0,0,1,1976.05,1413.73Z"/>
						<path className="cls-21" d="M2036.88,1423.49l-8,4.62,11.72,6.77-7.33,4.23-33.94-19.59,15.34-8.86a21.17,21.17,0,0,1,7.34-2.5,25.58,25.58,0,0,1,8.14-.11,19.56,19.56,0,0,1,7.19,2.38,9,9,0,0,1,4.08,4.13,5.36,5.36,0,0,1-.13,4.73A10.73,10.73,0,0,1,2036.88,1423.49Zm-14.75.73,7.64-4.41c1.33-.77,2-1.63,2-2.59s-.55-1.84-1.85-2.59a8.27,8.27,0,0,0-4.44-1,8.89,8.89,0,0,0-4.48,1.18l-7.64,4.41,8.73,5"/>
						<polygon className="cls-21" points="1963.34 1440.3 1992.25 1423.6 2026.19 1443.2 2018.86 1447.43 1991.85 1431.83 1977.59 1440.06 2004.61 1455.66 1997.27 1459.89 1963.34 1440.3"/>
					</g>
					<polygon className="cls-21" points="2412.67 1167.8 2404.44 1172.56 2370.5 1152.96 2377.83 1148.73 2401.4 1162.34 2392.72 1140.13 2400.91 1135.4 2434.85 1155 2427.52 1159.23 2403.99 1145.65 2412.67 1167.8"/>
					<polygon className="cls-21" points="2378.52 1187.52 2371.19 1191.75 2337.25 1172.16 2344.59 1167.92 2358.12 1175.74 2361.42 1173.83 2358.16 1160.08 2366.94 1155.02 2371.02 1172.26 2400.88 1174.61 2392.1 1179.68 2368.3 1177.8 2364.99 1179.71 2378.52 1187.52"/>
					<path className="cls-21" d="M2357.56,1193.46a9.1,9.1,0,0,1-1.49,5.88,16.56,16.56,0,0,1-5.74,5.09,32.46,32.46,0,0,1-11.32,3.82,42.86,42.86,0,0,1-12.89.08,31.15,31.15,0,0,1-11.18-3.69q-4.76-2.75-6.39-6.45a8.62,8.62,0,0,1,.14-7.45,15.46,15.46,0,0,1,6.6-6.53,30,30,0,0,1,8.83-3.27,40.61,40.61,0,0,1,10.18-.91,38.82,38.82,0,0,1,9.92,1.54l-4.08,5.28a23.31,23.31,0,0,0-9.32-1.1,20,20,0,0,0-8.6,2.45,8.77,8.77,0,0,0-3.85,3.9,5.06,5.06,0,0,0,.05,4.41,9.1,9.1,0,0,0,3.89,3.87,19.21,19.21,0,0,0,6.75,2.27,26.08,26.08,0,0,0,7.69.06,19.47,19.47,0,0,0,6.7-2.25q3.62-2.09,4.21-4.94a5.89,5.89,0,0,0-1.9-5.43l9.13-2.35A9.78,9.78,0,0,1,2357.56,1193.46Z"/>
					<path className="cls-21" d="M2317.12,1223,2302,1231.7l-33.94-19.6,7.33-4.23,11.41,6.58,7.78-4.49a21.76,21.76,0,0,1,7.47-2.59,26.16,26.16,0,0,1,8.28-.13,20,20,0,0,1,7.2,2.38,9.86,9.86,0,0,1,4.25,4.23,5.44,5.44,0,0,1-.18,4.81A10.65,10.65,0,0,1,2317.12,1223Zm-14.52.6,7.42-4.29c1.42-.82,2.15-1.72,2.17-2.72s-.58-1.9-1.94-2.68a8.51,8.51,0,0,0-4.62-1.1,9.47,9.47,0,0,0-4.71,1.25l-7.42,4.29,9.1,5.25"/>
					<polygon className="cls-21" points="2115.76 1300.04 2122.68 1304.04 2111.19 1310.67 2138.2 1326.27 2130.87 1330.5 2103.86 1314.91 2092.31 1321.57 2085.39 1317.57 2115.76 1300.04"/>
					<path className="cls-21" d="M2075.75,1362.33l-11.18-2.74-13.85,8,4.71,6.48-7.56,4.37-19.82-27.75,7.2-4.16,48.1,11.42Zm-28.78.11,8.69-5-15.12-3.71,6.43,8.73"/>
					<path className="cls-21" d="M2109.21,1336.85a9,9,0,0,1-1.5,5.88,16.57,16.57,0,0,1-5.74,5.09,32.46,32.46,0,0,1-11.32,3.82,43.18,43.18,0,0,1-12.89.08,31.15,31.15,0,0,1-11.18-3.69q-4.76-2.74-6.39-6.45a8.68,8.68,0,0,1,.14-7.45,15.52,15.52,0,0,1,6.6-6.53,30.05,30.05,0,0,1,8.83-3.27,40.27,40.27,0,0,1,10.19-.91,38.75,38.75,0,0,1,9.91,1.54l-4.08,5.28a23.49,23.49,0,0,0-9.32-1.1,20.06,20.06,0,0,0-8.6,2.45,8.82,8.82,0,0,0-3.85,3.9,5.06,5.06,0,0,0,0,4.41,9.12,9.12,0,0,0,3.9,3.87,19.57,19.57,0,0,0,6.74,2.28,26.08,26.08,0,0,0,7.69,0,19.19,19.19,0,0,0,6.7-2.25q3.63-2.08,4.21-4.94a5.84,5.84,0,0,0-1.9-5.43l9.14-2.35A9.84,9.84,0,0,1,2109.21,1336.85Z"/>
					<path className="cls-21" d="M2175.78,1295.13a8.51,8.51,0,0,1-.1,7.42,15.24,15.24,0,0,1-6.56,6.5,32,32,0,0,1-11.27,3.79,43.24,43.24,0,0,1-12.85.06,31.35,31.35,0,0,1-11.18-3.69q-4.76-2.74-6.34-6.43a8.62,8.62,0,0,1,.09-7.42,15.32,15.32,0,0,1,6.57-6.5,32.12,32.12,0,0,1,11.26-3.8,42.33,42.33,0,0,1,12.86,0,30.81,30.81,0,0,1,11.13,3.66A14.54,14.54,0,0,1,2175.78,1295.13Zm-20.19,12.17a18.7,18.7,0,0,0,6.65-2.22,8.67,8.67,0,0,0,3.8-3.81,5.23,5.23,0,0,0-.09-4.44,9.18,9.18,0,0,0-3.94-3.9,19.53,19.53,0,0,0-6.7-2.25,24.78,24.78,0,0,0-7.64,0,18.46,18.46,0,0,0-6.66,2.16,8.62,8.62,0,0,0-3.8,3.87,5.12,5.12,0,0,0,.09,4.39,9.31,9.31,0,0,0,3.94,3.85,20,20,0,0,0,6.74,2.32,26.58,26.58,0,0,0,7.61,0"/>
					<polygon className="cls-21" points="2213.39 1282.86 2186.37 1267.27 2172.12 1275.5 2199.13 1291.09 2191.8 1295.33 2157.86 1275.73 2186.78 1259.04 2220.72 1278.63 2213.39 1282.86"/>
					<path className="cls-21" d="M2251.14,1251.61a8.41,8.41,0,0,1-.09,7.42q-1.71,3.71-6.56,6.51a32,32,0,0,1-11.27,3.78,43.24,43.24,0,0,1-12.85.06,31.15,31.15,0,0,1-11.18-3.69q-4.76-2.75-6.34-6.43a8.69,8.69,0,0,1,.09-7.42,15.32,15.32,0,0,1,6.57-6.5,32.05,32.05,0,0,1,11.26-3.79,41.64,41.64,0,0,1,12.85,0,30.61,30.61,0,0,1,11.14,3.66Q2249.5,1247.89,2251.14,1251.61ZM2231,1263.79a18.91,18.91,0,0,0,6.65-2.23,8.57,8.57,0,0,0,3.8-3.81,5.16,5.16,0,0,0-.09-4.44,9.16,9.16,0,0,0-3.94-3.89,19.33,19.33,0,0,0-6.7-2.26,25.48,25.48,0,0,0-7.65,0,18.54,18.54,0,0,0-6.65,2.17,8.53,8.53,0,0,0-3.8,3.87,5.12,5.12,0,0,0,.09,4.39,9.41,9.41,0,0,0,3.94,3.84,19.69,19.69,0,0,0,6.74,2.32,26.22,26.22,0,0,0,7.61.06"/>
					<path className="cls-21" d="M2236.34,1230.42l24.66-14.24,33.94,19.6-7.33,4.23-27-15.6-10.63,6.14,11.86,7.84a25.32,25.32,0,0,1,6.74,5.88c1.24,1.73,1.51,3.36.82,4.91s-2.37,3-5,4.57l-.18.11-7.78-3.71.18-.11a5.25,5.25,0,0,0,2.45-2.24c.26-.72,0-1.53-.86-2.43a26.12,26.12,0,0,0-4.62-3.61Z"/>
					<polygon className="cls-21" points="2450.12 1146.18 2441.88 1150.94 2407.94 1131.34 2415.28 1127.11 2438.85 1140.72 2430.16 1118.52 2438.36 1113.79 2472.3 1133.38 2464.97 1137.61 2441.44 1124.03 2450.12 1146.18"/>
					<path className="cls-21" d="M2421.07,1110.86q3.43,2.4,3.21,5.09c-.15,1.77-1.52,3.39-4.12,4.89a17.88,17.88,0,0,1-8.51,2.4,18.46,18.46,0,0,1-8.77-1.87l5.7-3.3a8.83,8.83,0,0,0,3.53.79,6.21,6.21,0,0,0,3.17-.84c1-.56,1.45-1.17,1.45-1.83a2.86,2.86,0,0,0-1.36-2Z"/>
					<path className="cls-22" d="M2068.73,1206.81l-2.83,8.17-5-2.86,2.83-8.16Z"/>
					<path className="cls-22" d="M2051.77,1197l-2.84,8.16-4.95-2.85,2.84-8.17Z"/>
					<path className="cls-17" d="M2044,1202.33l4.95,2.85-14.14,1.64-5-2.86Z"/>
					<path className="cls-22" d="M2060.25,1201.92l-2.83,8.16-5-2.85,2.83-8.17Z"/>
					<path className="cls-17" d="M2052.47,1207.23l5,2.85-14.14,1.64-5-2.86Z"/>
					<path className="cls-17" d="M2061,1212.12l5,2.86-14.14,1.63-5-2.86Z"/>
					<path className="cls-14" d="M2160,1186.83l2.33-1.35V1194l-3.81,2.2V1192l-11.67,6.74V1203l-3.8,2.19v-8.53l1.48-.85a10.09,10.09,0,0,0,1-2.88,32,32,0,0,0,.51-4.48l.58-10.57,13.39-7.73Zm-3.93,2.26v-12.43l-5.89,3.4-.36,6.17a41.74,41.74,0,0,1-.42,4.22,13.66,13.66,0,0,1-.75,2.93l7.42-4.29"/>
					<polygon className="cls-14" points="2123.12 1191.4 2116.54 1205.7 2123.12 1212.4 2118.41 1215.12 2114.05 1210.66 2109.68 1220.16 2104.97 1222.88 2111.55 1208.58 2104.97 1201.87 2109.68 1199.15 2114.05 1203.61 2118.41 1194.11 2123.12 1191.4"/>
					<path className="cls-14" d="M2137.28,1184.38a4.49,4.49,0,0,1,3.47,1.93A7.65,7.65,0,0,1,2142,1191a16.63,16.63,0,0,1-1.28,6.17,22.55,22.55,0,0,1-3.47,5.95,17.06,17.06,0,0,1-4.78,4.22,8.2,8.2,0,0,1-4.77,1.3,4.65,4.65,0,0,1-3.47-1.95A7.74,7.74,0,0,1,2123,1202a16.41,16.41,0,0,1,1.28-6.14,22.9,22.9,0,0,1,3.47-5.95,17.29,17.29,0,0,1,4.77-4.21A8.1,8.1,0,0,1,2137.28,1184.38Zm0,12.62a10.38,10.38,0,0,0,.75-3.74,4.87,4.87,0,0,0-.75-2.84,2.74,2.74,0,0,0-2-1.21,4.54,4.54,0,0,0-2.8.72,10,10,0,0,0-2.81,2.52,13.57,13.57,0,0,0-2,3.54,10.21,10.21,0,0,0-.73,3.69,5.16,5.16,0,0,0,.73,2.92,2.87,2.87,0,0,0,2,1.22,4.81,4.81,0,0,0,2.81-.75,10.16,10.16,0,0,0,2.8-2.49,14,14,0,0,0,2-3.58"/>
					<path className="cls-14" d="M2099.57,1236.8v-1.26l3.73-2.15v21l-4,2.28v-14.19l-4,2.33v-4.29l3.16-1.82a2.17,2.17,0,0,0,.79-.77A2.13,2.13,0,0,0,2099.57,1236.8Z"/>
					<path className="cls-14" d="M2096.33,1224.42a14.44,14.44,0,0,1-2.28,3.84,11.72,11.72,0,0,1-3.2,2.77l-8.1,4.68v-21l3.93-2.27v7.06l4.17-2.41a5.7,5.7,0,0,1,3.2-.92,2.85,2.85,0,0,1,2.28,1.18,4.92,4.92,0,0,1,.83,3A11.07,11.07,0,0,1,2096.33,1224.42Zm-3.83.7a4.74,4.74,0,0,0,.73-2.46c0-.85-.25-1.37-.73-1.6a1.89,1.89,0,0,0-1.84.28l-4,2.29v5.64l4-2.3a5,5,0,0,0,1.84-1.85"/>
					<polygon className="cls-14" points="2085.4 1259.23 2085.4 1255.87 2092.91 1251.54 2092.91 1254.89 2085.4 1259.23"/>
					<path className="cls-14" d="M2091.53,1240.66a2.24,2.24,0,0,1,1.73.91,3.59,3.59,0,0,1,.65,2.27,8.23,8.23,0,0,1-.65,3.07,11.6,11.6,0,0,1-1.73,2.93,8.76,8.76,0,0,1-2.37,2.07,4.19,4.19,0,0,1-2.38.67,2.42,2.42,0,0,1-1.75-.92,3.94,3.94,0,0,1-.63-2.32,8.24,8.24,0,0,1,.63-3,11.61,11.61,0,0,1,1.75-2.91,8.76,8.76,0,0,1,2.38-2.1A4.24,4.24,0,0,1,2091.53,1240.66Zm-1,6.8a3.81,3.81,0,0,0,.59-2,1.28,1.28,0,0,0-.59-1.27,1.31,1.31,0,0,0-1.35.14,4,4,0,0,0-1.36,1.42,3.91,3.91,0,0,0-.56,1.93,1.4,1.4,0,0,0,.56,1.29,1.28,1.28,0,0,0,1.36-.13,3.67,3.67,0,0,0,1.35-1.43"/>
					<polygon className="cls-14" points="2077.59 1262.28 2077.59 1248.23 2081.52 1245.96 2081.52 1266.95 2077.08 1269.52 2069.15 1260.04 2069.15 1274.09 2065.23 1276.36 2065.23 1255.37 2069.61 1252.84 2077.59 1262.28"/>
					<path className="cls-14" d="M2077.06,1238.18a10.18,10.18,0,0,1-2.77,2.41l-9.06,5.24v-21l8.61-5a4.88,4.88,0,0,1,2.73-.77,2.59,2.59,0,0,1,2,1.07,4.16,4.16,0,0,1,.75,2.62,8.47,8.47,0,0,1-.45,2.65,11.53,11.53,0,0,1-1.29,2.58,2.31,2.31,0,0,1,1.62,1,3.9,3.9,0,0,1,.61,2.31,9.31,9.31,0,0,1-.73,3.5A12.64,12.64,0,0,1,2077.06,1238.18Zm-8,1.5,5-2.87a3.87,3.87,0,0,0,1.45-1.52,4,4,0,0,0,.59-2.06,1.42,1.42,0,0,0-.59-1.37,1.33,1.33,0,0,0-1.45.14l-5,2.86v4.82m0-13.11v4.82l4.48-2.58a4.19,4.19,0,0,0,1.46-1.52,4.26,4.26,0,0,0,.57-2.07,1.47,1.47,0,0,0-.57-1.38,1.39,1.39,0,0,0-1.46.14l-4.48,2.59"/>
					<polygon className="cls-14" points="2102.9 1203.07 2102.9 1224.08 2098.97 1226.34 2098.97 1205.34 2102.9 1203.07"/>
					<polygon className="cls-23" points="130.95 221.22 130.95 221.22 130.95 221.22 130.95 221.22"/>
					<polygon className="cls-17" points="150.04 222.45 135.9 224.08 130.95 221.23 145.09 219.59 150.04 222.45"/>
					<polygon className="cls-23" points="139.43 226.12 139.44 226.12 139.43 226.12 139.43 226.12"/>
					<polygon className="cls-17" points="158.52 227.34 144.38 228.98 139.43 226.12 153.57 224.49 158.52 227.34"/>
					<polygon className="cls-23" points="147.92 231.02 147.93 231.02 147.92 231.02 147.92 231.02"/>
					<polygon className="cls-17" points="167.01 232.24 152.87 233.88 147.92 231.03 162.06 229.39 167.01 232.24"/>
					<polygon className="cls-22" points="144.38 228.98 141.55 237.15 136.6 234.29 139.43 226.12 144.38 228.98"/>
					<polygon className="cls-22" points="152.87 233.88 150.03 242.04 145.09 239.19 147.92 231.03 152.87 233.88"/>
					<polygon className="cls-22" points="135.89 224.08 133.07 232.25 128.12 229.39 130.95 221.23 135.89 224.08"/>
					<path className="cls-14" d="M210,129.43l2.32-1.34v8.52l-3.8,2.2v-4.24l-11.64,6.71v4.25l-3.8,2.19V139.2l1.47-.85a9.73,9.73,0,0,0,1-2.87,33.5,33.5,0,0,0,.52-4.49l.57-10.54L210,112.74Zm-3.92,2.27V119.28l-5.88,3.39-.37,6.17c-.1,1.72-.24,3.12-.41,4.21a14,14,0,0,1-.75,2.92l7.41-4.27"/>
					<g className="cls-20">
						<path className="cls-14" d="M187.35,127a4.52,4.52,0,0,1,3.47,1.94,7.71,7.71,0,0,1,1.28,4.66,16.75,16.75,0,0,1-1.28,6.16,22.44,22.44,0,0,1-3.47,5.95,17.23,17.23,0,0,1-4.76,4.2,8.15,8.15,0,0,1-4.77,1.3,4.6,4.6,0,0,1-3.46-1.95,7.67,7.67,0,0,1-1.29-4.67,16.43,16.43,0,0,1,1.29-6.14,23,23,0,0,1,3.46-6,17.27,17.27,0,0,1,4.77-4.2A8.12,8.12,0,0,1,187.35,127Zm.05,12.61a10.18,10.18,0,0,0,.76-3.73,4.8,4.8,0,0,0-.76-2.84,2.67,2.67,0,0,0-2-1.2,4.49,4.49,0,0,0-2.78.71,9.83,9.83,0,0,0-2.81,2.52,13.57,13.57,0,0,0-2,3.54,10.12,10.12,0,0,0-.73,3.68,5.1,5.1,0,0,0,.73,2.91,2.87,2.87,0,0,0,2,1.22,4.77,4.77,0,0,0,2.81-.77,9.8,9.8,0,0,0,2.78-2.46,13.66,13.66,0,0,0,2-3.58"/>
						<polygon className="cls-14" points="173.21 134 166.66 148.27 173.21 154.97 168.52 157.68 164.16 153.23 159.8 162.71 155.11 165.42 161.66 151.15 155.11 144.45 159.8 141.74 164.16 146.19 168.52 136.71 173.21 134"/>
					</g>
					<path className="cls-14" d="M155,188.32l-3.2,5.23,6.9-4v4.28l-12.23,7.06v-4.17l6.23-10.21a19.69,19.69,0,0,0,1.4-2.66,5.09,5.09,0,0,0,.44-1.92,1.51,1.51,0,0,0-.7-1.51,1.72,1.72,0,0,0-1.72.22,5.06,5.06,0,0,0-1.94,2.07,8.15,8.15,0,0,0-.87,3.15l-3.61,1.3a14.64,14.64,0,0,1,2-6.35,12.1,12.1,0,0,1,4.43-4.47,6.12,6.12,0,0,1,3.25-1,2.73,2.73,0,0,1,2.25,1.11,4.85,4.85,0,0,1,.82,3,10.35,10.35,0,0,1-.81,3.84A33.2,33.2,0,0,1,155,188.32Z"/>
					<path className="cls-14" d="M147.3,162.91a10.91,10.91,0,0,1-.83,4.06,14.09,14.09,0,0,1-2.27,3.83,11.68,11.68,0,0,1-3.19,2.77l-8.09,4.67v-21l3.92-2.26v7l4.17-2.4a5.67,5.67,0,0,1,3.19-.92,2.81,2.81,0,0,1,2.27,1.17A4.86,4.86,0,0,1,147.3,162.91Zm-4.65,4.76a4.67,4.67,0,0,0,.72-2.47c0-.83-.23-1.37-.72-1.59a1.89,1.89,0,0,0-1.84.28l-4,2.29v5.62l4-2.29a5,5,0,0,0,1.84-1.84"/>
					<polygon className="cls-14" points="135.56 201.72 135.56 198.37 143.07 194.03 143.07 197.38 135.56 201.72"/>
					<path className="cls-14" d="M141.68,183.17a2.22,2.22,0,0,1,1.72.92,3.51,3.51,0,0,1,.66,2.27,8.13,8.13,0,0,1-.66,3.07,11,11,0,0,1-1.72,2.91,8.62,8.62,0,0,1-2.37,2.07,4.24,4.24,0,0,1-2.37.67,2.39,2.39,0,0,1-1.75-.91,4,4,0,0,1-.62-2.33,8.17,8.17,0,0,1,.62-3,11.67,11.67,0,0,1,1.75-2.91,8.73,8.73,0,0,1,2.37-2.1A4.34,4.34,0,0,1,141.68,183.17Zm-1,6.79a3.82,3.82,0,0,0,.57-2,1.28,1.28,0,0,0-.57-1.26,1.32,1.32,0,0,0-1.36.14,3.9,3.9,0,0,0-1.35,1.43,3.71,3.71,0,0,0-.56,1.91,1.39,1.39,0,0,0,.56,1.3,1.28,1.28,0,0,0,1.35-.14,3.69,3.69,0,0,0,1.36-1.43"/>
					<polygon className="cls-14" points="127.77 204.77 127.77 190.74 131.69 188.47 131.69 209.43 127.25 211.99 119.34 202.53 119.34 216.56 115.42 218.83 115.42 197.87 119.8 195.33 127.77 204.77"/>
					<path className="cls-14" d="M127.23,180.71a10.1,10.1,0,0,1-2.76,2.4l-9,5.23v-21l8.59-5a5,5,0,0,1,2.74-.76,2.57,2.57,0,0,1,2,1.06,4.24,4.24,0,0,1,.74,2.62A8,8,0,0,1,129,168a10.83,10.83,0,0,1-1.28,2.6,2.28,2.28,0,0,1,1.62,1,3.88,3.88,0,0,1,.61,2.31,9.22,9.22,0,0,1-.73,3.49A12.81,12.81,0,0,1,127.23,180.71Zm-8,1.49,5-2.87a3.93,3.93,0,0,0,1.46-1.51,4.22,4.22,0,0,0,.57-2.06,1.44,1.44,0,0,0-.57-1.37,1.35,1.35,0,0,0-1.46.13l-5,2.87v4.81m0-13.08v4.8l4.48-2.58a4,4,0,0,0,1.45-1.51,4.17,4.17,0,0,0,.58-2.07,1.45,1.45,0,0,0-.58-1.37,1.35,1.35,0,0,0-1.45.14l-4.48,2.59"/>
					<polygon className="cls-14" points="153.04 145.65 153.04 166.62 149.12 168.88 149.12 147.91 153.04 145.65"/>

					{props.focusedShopResult.length > 0 && 
						props.focusedShopResult.map((shop,id) => <SchemeShopPopup key={id} data={shop} shopMap={props.shopMap}/>)
					}

					{currentlyHovered?.id && 
						<SchemeShopPopup data={currentlyHovered} shopMap={props.shopMap}/>
					}
					
				</g>
			</g>
		</svg>
	)
}

export default SchemePavilion1Floor1;