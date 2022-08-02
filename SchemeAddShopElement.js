import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { _Shops } from '../../helpers/pages-url-helper';


const SchemeAddShopElement = function (props){ 
	let id = props.data[0]
	let name = props.shopMap[id]?.title ? props.shopMap[id]?.title : ''
	let translateX = props.data[1]
	let translateY = props.data[2]
	let path = props.data[3]
	let tempSplit = id.split('_')
	let raw = tempSplit[0]
	let stand = tempSplit[1]
	let takenFocus = props.shopMap[id]?.takenFocus
	let slug = props.shopMap[id]?.slug

	let handleHover = () => {
		props.setCurrentlyHovered({...props.currentlyHovered, id:id, raw:raw, stand:stand, translateX:translateX, translateY:translateY, name:name})
	}

	useEffect(() => {
		props.shopResult.forEach(shop => {
			let shopId = shop.raw?.toUpperCase() + '_' + shop.stand
			if(shopId === id){
				let name = shop.shop.title
				let pav = shop.pavilion
				let floor = shop.floor
				let tempObj = {id:id,translateX:translateX,translateY:translateY,raw:raw,stand:stand,pavilion:pav,floor:floor,name:name}
				props.setFocusedShopResult(oldResult => [...oldResult,tempObj])
			}
		})
	},[props.shopResult])

	if(slug){
		return(
			<g onMouseEnter={() => handleHover()} onPointerOver={() => handleHover()} onMouseOut={() => props.setCurrentlyHovered({})} onPointerOut={() => props.setCurrentlyHovered({})}>
        		<Link href={`${ _Shops }/${slug}`}>
					<path className={`cls-3 ${takenFocus ? "taken-focus" : ''}`} d={path}/>
				</Link>
			</g>
		)		
	}

	return(
		<g onMouseEnter={() => handleHover()} onPointerOver={() => handleHover()} onMouseOut={() => props.setCurrentlyHovered({})} onPointerOut={() => props.setCurrentlyHovered({})}>
			<path className={`cls-3 ${takenFocus ? "taken-focus" : ''}`} d={path}/>
		</g>
	)
}

export default SchemeAddShopElement;