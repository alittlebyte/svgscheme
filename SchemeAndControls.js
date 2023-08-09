import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import ButtonEx from '../UI/ButtonEx/ButtonEx';
import { useRouter } from 'next/router';
import useStylesSchemeAndControls from './SchemeAndControlsStyles';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Icon from '../UI/Icon/Icon';
import { _Scheme } from '../../helpers/pages-url-helper';

import SchemePavilion1Floor1 from './SchemePavilion1Floor1';
import SchemePavilion1Floor2 from './SchemePavilion1Floor2';
import SchemePavilion2Floor1 from './SchemePavilion2Floor1';
import SchemePavilion2Floor2 from './SchemePavilion2Floor2';
import SchemePavilion3Floor1 from './SchemePavilion3Floor1';
import SchemePavilion3Floor2 from './SchemePavilion3Floor2';

const css = `
			.cls-1,.cls-19,.cls-2{
				fill:#fff;
			}
			.cls-1{
				fill-rule:evenodd;
			}
			.cls-10,.cls-11,.cls-12,.cls-13,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{
				stroke:#fff;
			}
			.cls-10,.cls-11,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{
				stroke-miterlimit:10;
			}
			.cls-3,.cls-3-1{
				fill:#e6e7e9;
			}
			.cls-3-inner{
				visibility: hidden;
			}
			.cls-3:hover{
				fill:#F8B200;
				cursor:pointer;
			}
			.taken{
				fill:#7A7F8C;
			}
			.taken-focus{
				fill:#F8B200;
			}
			.cls-3:hover + .cls-3-inner, .taken-focus + .cls-3-inner{
				visibility: visible;
			}
			.cls-4{
				fill:url(#linear-gradient);
			}
			.cls-5{
				fill:#d6d8db;
			}
			.cls-13,.cls-21,.cls-6{
				fill:#c3c7cf;
			}
			.cls-7{
				fill:url(#linear-gradient-2);
			}
			.cls-8{
				fill:url(#linear-gradient-3);
			}
			.cls-9{
				fill:url(#linear-gradient-4);
			}
			.cls-10{
				fill:url(#linear-gradient-5);
			}
			.cls-11{
				fill:url(#linear-gradient-6);
			}
			.cls-12{
				fill:#8e94a2;
			}
			.cls-12,.cls-13{
				stroke-linejoin:round;
			}
			.cls-14{
				fill:#050910;
			}
			.cls-15{
				fill:none;
				stroke:#3c4553;
			}
			.cls-16{
				fill:#3c4553;
			}
			.cls-17{
				fill:#7a7f8c;
			}
			.cls-18{
				mask:url(#mask);
			}
			.cls-20{
				isolation:isolate;
			}
			.cls-22{
				fill:#313945;
			}
			.cls-23{
				fill:#d59000;
			}
			.cls-24{
				fill:#f6f6f6;
			}
			.cls-25{
				fill:#fcce01;
			}
			g{
				fill:none;
			}
			g text{
				font-size:10px;
				line-height:16px;
				fill:#050910;
			}
			g text:last-child{
				fill:#ffffff;
			}
			.cls-3-inner-test{
				pointer-events:none;
			}

`


const SchemeAndControls = function (props){
	const classes = useStylesSchemeAndControls();
	const router = useRouter();
	const svg = useRef(null);

	const [query, setQuery] = useState([]);
	const [shopMap, setShopMap] = useState({})
	const [searchInput, setSearchInput] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [shopResult, setShopResult] = useState([])
	const [focusedShopResult, setFocusedShopResult] = useState([])
	const [activeNav, setActiveNav] = useState({pav:[], floor:[]})
	const [searchMode, setSearchMode] = useState(false)
	const [pavFloor, setPavFloor] = useState({ pav: 1, floor: 1 });	
	const [ending, setEnding] = useState('');



	// Вызов данных из API и обработка

	useEffect(() => {
		props.getSchemeAction(pavFloor.floor, pavFloor.pav)
	},[pavFloor])

	let fillShopMap = () => {
		let tempObj = {}
		props.schemeMap.forEach(i => {
			let tempId = `${i.raw.toUpperCase()}_${i.stand}`
			tempObj = {...tempObj, [tempId]:{title:i.shop.title, slug:i.shop.slug}}
		})
		setShopMap(tempObj)
	}

	useEffect(() => fillShopMap(), [props.schemeMap])


	{/*Присвоение динамических пропов в строку или template literals в будущем компоненте перегоняется в lowercase, вследствие чего он отрисовывается как HTML-строка. Пока работает только так*/}
	const components = {
		default: SchemePavilion1Floor1,
		'1_1': SchemePavilion1Floor1,
		'1_2': SchemePavilion1Floor2,
		'2_1': SchemePavilion2Floor1,
		'2_2': SchemePavilion2Floor2,
		'3_1': SchemePavilion3Floor1,
		'3_2': SchemePavilion3Floor2,
	}

	const SchemeVariant = components[`${pavFloor.pav}_${pavFloor.floor}` || 'default'];


	useEffect(() =>{ 
		switch(true){
			case searchResults.length >= 5:
				setEnding('ОВ')
				break;
			case searchResults.length === 1 && searchResults.length !== 11 || searchResults.length % 11 === 0:
				setEnding('')
				break;
			case searchResults.length >= 2 && searchResults.length < 5:
				setEnding('А')
				break;
			default:
				break;
		}
	},[searchResults])



	// Поиск и выдача результатов

	let handleSearchMode = () => {
		router.push(`${ _Scheme }`)
		setQuery([])
		setSearchMode(!searchMode)
		setSearchResults([])
		setFocusedShopResult([])
		setSearchInput('')
		setActiveNav({pav:[], floor:[]})
		cleanFocused()
	}; {/* Чистка всего, чего только можно, при тыке на кнопку поиска (которая крестик - лупа без функционала!) */}

	let cleanFocused = () => { 
		shopResult.forEach(i => {
			let tempId = `${i.raw?.toUpperCase()}_${i.stand}`
			delete shopMap[tempId]?.takenFocus 
		})
		setShopResult([])
	}; {/* Очистка выделения с элементов */}

	let handleSearch = (e) => {
		setSearchInput(e.target.value)
		if(e.target.value.length > 2){
			setSearchMode(true)
			props.getSchemeSearchAction(e.target.value)
		}
		if(e.target.value.length === 0){
			handleSearchMode()
		}
	}; {/* Первичный поиск по ТЗ: если в инпуте больше 3х букв, запускаем запрос к АПИ */}

	useEffect(() => {
		setSearchResults(props.searchResults)
	},[props.searchResults]); {/* При поиске необходима динамичная подмена пропов - обычный setState внутри функции отработает только после повторного изменения и вернёт уже старый результат поиска. Потому разделил */}

	let handleSearchShop = (i) => {
		setSearchInput(i.title)
		props.getSchemeShopAction(i.id)
	}; {/* Подставка имени в инпут */}

	useEffect(() => {
		if(props.shopResult.length > 0){
			setShopResult(props.shopResult)
			setPavFloor({pav:props.shopResult[0].pavilion, floor:props.shopResult[0].floor})
		}
		return() => {
			setSearchResults([])
		}
	},[props.shopResult]); {/* Пересылка результатов поиска во временную переменную, скрытие вкладки поиска */}

	useEffect(() => {
		if(shopResult.length > 0){
			let tempPav = [];
			let tempFloor = [];
			shopResult.forEach(i => {
				let tempId = `${i.raw?.toUpperCase()}_${i.stand}`;
				setShopMap(shopMap => ({...shopMap, [tempId]:{...shopMap[tempId], takenFocus: true}}));  {/* Назначить пару ключ-значение в многоуровневом объекте в Реакте можно только так */}
				tempPav.push(parseInt(i.pavilion));
				tempFloor.push(parseInt(i.floor));
			})
			setActiveNav({pav:tempPav, floor:tempFloor})
			let tempResult = focusedShopResult.filter(itm => itm.pavilion == pavFloor.pav && itm.floor == pavFloor.floor && itm.raw.length > 0)
			setFocusedShopResult(prevShop => tempResult); {/* Надстройка от бага: после поднятия состояния с выделенными магазинами они начали отрисовываться на всех схемах сразу - даже там, где ничего не было */}
		}
	},[props.schemeMap]); {/* Назначение спецкласса для выделения элементам, ограничение перехода по павильонам в соответствии с ТЗ */}



	// Переход из магазина на схему

	useEffect(() => {
		if(Object.keys(router.query).length > 0){
			setQuery(prevQuery => [...prevQuery, router.query])
		}
	},[router.query]); {/* Запись результатов query, самый странный setState - но назначение объекта массиву в нём действует только так */}

	useEffect(() => {
		if(query.length > 0){
			setSearchMode(true)
			let pavilions = query[0].pavilions.split(",")
			let floors = query[0].floors.split(",")
			let raws = query[0].raws.split(",")
			let stands = query[0].stands.split(",")
			setSearchInput(query[0].title)
			setPavFloor({pav:pavilions[0], floor:floors[0]})
			pavilions.forEach((pav,i) => {
				let queryShopResult = {}
				queryShopResult.raw = raws[i]
				queryShopResult.stand = stands[i]
				queryShopResult.pavilion = pavilions[i]
				queryShopResult.floor = floors[i]
				queryShopResult.shop = {}
				queryShopResult.shop.title = query[0].title
				queryShopResult.shop.slug = query[0].slug
				console.log(queryShopResult)
				setShopResult(prevShop => [...prevShop, queryShopResult])
			})
		}
	},[query]); {/* query - особый случай, по сути тут сборка его пропов в отформатированный объект по образцу shopResult'а и последующая работа как с результатом поиска */}



	return (
		<>
			<div className={classes.search_wrap}>
				<input disabled={shopResult.length} placeholder="ПОИСК ПО БРЕНДАМ И МАГАЗИНАМ" value={searchInput} onChange={handleSearch} className={classes.search_input}/>
					<button className={classes.search_icon__wrap} onClick={searchMode ? handleSearchMode : null}>
						<Icon name={!searchMode ? 'search-header' : 'cancel'} className={classes.search_icon}/>
					</button>
				{(searchMode && !searchResults.length && !shopResult.length) &&
					<div className={classes.search_results}>
						<span className={classes.search_results__item}>По указанному запросу ничего не найдено</span>
					</div>
				}
				{searchResults.length > 0 && 
					<div className={classes.search_results}>
					{searchResults?.map((i) => 
						<span key={i.id} className={classes.search_results__item} onClick={() => handleSearchShop(i)}>{i.title}</span>
					)}
					</div>
				}
				{(searchMode && searchResults.length > 0) && 
					<div className={classes.search_counter}>
						{searchResults.length} МАГАЗИН{ending}
					</div>
				}
			</div>

			{/*
			{shopResult.some(i => i?.raw?.length < 2 || !focusedShopResult.length) &&
				<div className={classes.scheme_err}> ВНИМАНИЕ! Часть найденных магазинов содержит в себе ошибочные/неполные данные и может отображаться не полностью или некорректно </div>
			}
			*/}

			<TransformWrapper
				maxScale={6}
				wheel={{ disabled: true, step: 0.5 }}
				doubleClick={{ disabled: true }}
			>
				{({ zoomIn, zoomOut }) => (
					<>
						<TransformComponent>
							<SchemeVariant
								className={classes.scheme_main}
								css={css}
								shopMap={shopMap}
								shopResult={shopResult}
								focusedShopResult={focusedShopResult}
								setFocusedShopResult={setFocusedShopResult}
								searchMode={searchMode}
							/>
						</TransformComponent>

						<div className={classes.right_nav}>
							<div className={classes.right_nav__wrap}>
								<ButtonEx onClick={() => zoomIn()} typeVisual="circle-pagination" nameIcon="plus" />
							</div>
							<div className={classes.right_nav__wrap}>
								<ButtonEx onClick={() => zoomOut()} typeVisual="circle-pagination" nameIcon="minus" />
							</div>
							<div className={classes.right_nav__wrap}>
								<ButtonEx typeVisual="circle-pagination" nameIcon="print" />
							</div>
						</div>
					</>
				)}
			</TransformWrapper>

			<div className={classes.pagination}>
				<div className={classes.pagination_item}>
					<div>
						<ButtonEx typeVisual="rectangle-pagination" disabled text={"Павильон"}/>
					</div>
					<div>
						<ButtonEx onClick={() => setPavFloor({...pavFloor, pav:1}) } disabled={activeNav.pav.length > 0 && !activeNav.pav.includes(1) ? true : false} className={pavFloor.pav == 1 && 'active_pav'} typeVisual="rectangle-pagination" text={"1"}/>
					</div>
					<div>
						<ButtonEx onClick={() => setPavFloor({...pavFloor, pav:2}) } disabled={activeNav.pav.length > 0 && !activeNav.pav.includes(2) ? true : false} className={pavFloor.pav == 2 && 'active_pav'} typeVisual="rectangle-pagination" text={"2"}/>
					</div>
					<div>
						<ButtonEx onClick={() => setPavFloor({...pavFloor, pav:3}) } disabled={activeNav.pav.length > 0 && !activeNav.pav.includes(3) ? true : false} className={pavFloor.pav == 3 && 'active_pav'} typeVisual="rectangle-pagination" text={"3"}/>
					</div>
				</div>				
				<div className={classes.pagination_item}>
					<div>
						<ButtonEx typeVisual="rectangle-pagination" disabled text={"Этаж"}/>
					</div>
					<div>
						<ButtonEx onClick={() => setPavFloor({...pavFloor, floor:1}) } disabled={activeNav.floor.length > 0 && !activeNav.floor.includes(1) ? true : false} className={pavFloor.floor == 1 && 'active_floor'} typeVisual="rectangle-pagination" text={"1"}/>
					</div>
					<div>
						<ButtonEx onClick={() => setPavFloor({...pavFloor, floor:2}) } disabled={activeNav.floor.length > 0 && !activeNav.floor.includes(2) ? true : false} className={pavFloor.floor == 2 && 'active_floor'} typeVisual="rectangle-pagination" text={"2"}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default SchemeAndControls;
