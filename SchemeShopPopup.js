import React, { useState, useEffect } from 'react';
import useStylesSchemeAndControls from './SchemeAndControlsStyles';


const SchemeShopPopup = function (props){ 
	let id = props.data.id
	let name = props.shopMap[id]?.title ? props.shopMap[id]?.title : ''
	let translateX = props.data.translateX
	let translateY = props.data.translateY	
	let transform = `translate(${translateX} ${translateY})`
	let webkitTransform = {
		'WebkitTransform': `translate(${translateX}, ${translateY})`,
	}
	let tempSplit = id?.split('_') || ['','']
	let raw = tempSplit[0]
	let stand = tempSplit[1]
	const classes = useStylesSchemeAndControls();


	return(
			<g style={webkitTransform} transform={transform} className="cls-3-inner-test">
				<foreignObject height="1" width="1" style={{ overflow:'visible' }}>
						<div className={classes.popup_wrap}>
							<p className={classes.popup_inner}>
								Блок {raw}
							</p>
							<div className={classes.popup_inner_wrap}>
								<p className={`${classes.popup_inner} ${classes.popup_mod}`}>
									Место №{stand}
								</p>
								{name && <p className={`${classes.popup_inner} ${classes.popup_mod}`}>
									{name.length > 15 ? name.substring(0,15) + '...' : name}
								</p>}
							</div>
						</div>
				</foreignObject>								
				<path d="M 37.5,52 V 76" stroke="#3c4553"/>
				<ellipse cx="37.5" cy="77.5" rx="6" ry="1.5" fill="#3c4553"/>
			</g>
	)
}

export default SchemeShopPopup;