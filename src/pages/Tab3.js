import { useEffect, useState } from "react";
import { useSideMenuUpdate, useSideMenu } from "../main/SideMenuProvider";
import { beerOutline, golfOutline, mailOutline, personOutline, pulseOutline, restaurantOutline } from "ionicons/icons";

import './Tab3.css';
import CustomPage from "../main/CustomPage";

import { PageHeader } from "../components/PageHeader";
import { Modal } from "../components/Modal";
import { IonPage, IonGrid, IonList, IonItem, IonLabel, IonAvatar, IonIcon, IonBadge } from '@ionic/react';

import { getPlaceItems } from "../main/Utils";

const Tab3 = props => {

	const pageName = "Places";
	const setSideMenu = useSideMenuUpdate();

	const initialPlaceItems = getPlaceItems();
	const [ showModal, setShowModal ] = useState(false);
	const [ modalOptions, setModalOptions ] = useState(false);
	const [ placeItems, setPlaceItems ] = useState(initialPlaceItems);

	const handleModal = async (index) => {

		await setModalOptions(sideMenuOptions[index]);
		setShowModal(true);
	}

	const handleClick = async (item) => {

		await setModalOptions(item);
		setShowModal(true);
	}

	const search = (e) => {

		const searchVal = e.target.value;
		setPlaceItems(initialPlaceItems);

		if (searchVal !== "") {
			
			const newItems = initialPlaceItems.filter((item, index) => {
				if (item.name.toLowerCase().includes(searchVal.toLowerCase())) {

					item.originalIndex = index;
					return true;
				}
			});
			
			setPlaceItems(newItems);
		} else {

			setPlaceItems(initialPlaceItems);
		}
	}
	
	//	Access other side menu options here
	const sideMenu = useSideMenu();

	const sideMenuOptions = [
		
		{ 
			text: "Go to Profile", 
			icon: personOutline, 
			url: "/tabs/tab1"
		},
		{ 
			text: "Go to Inbox", 
			icon: mailOutline, 
			url: "/tabs/tab2"
		},
		{},
		{
			text: "Pubs",
			icon: beerOutline,
			url: null,
			clickEvent: () => handleModal(3)
		},
		{
			text: "Restaurants",
			icon: restaurantOutline,
			url: null,
			clickEvent: () => handleModal(4)
		},
		{
			text: "Golf Courses",
			icon: golfOutline,
			url: null,
			clickEvent: () => handleModal(5)
		},
		{
			text: "Hospitals",
			icon: pulseOutline,
			url: null,
			clickEvent: () => handleModal(6)
		}
	];

	useEffect(() => {
		
		if (props.location.pathname === "/tabs/tab3") {
			
			setSideMenu({ options: sideMenuOptions, side: "start", pageName: pageName });
		}
	}, [ props.location ]);

	return (
		<IonPage id={ pageName }>
			<CustomPage name={ pageName } sideMenu={ true } sideMenuPosition="start" searchbar={ true } searchbarEvent={ search }>
				<IonGrid>
					<PageHeader count={ sideMenuOptions.length } pageName={ pageName } />

					<IonList>
						{ placeItems.map((item, index) => {

							return (
								<IonItem onClick={ () => handleClick(item) } key={ `placeItem_${ index }`} detail={ true } lines="full">
									<IonAvatar>
										<IonIcon size="large" icon={ item.icon } />
									</IonAvatar>
									<IonLabel style={{ padding: "1rem" }}>
										<h2>{ item.name }</h2>
									</IonLabel>
									<IonBadge color="dark" slot="end">
										{ item.rating } / 10
									</IonBadge>
								</IonItem>
							);
						})}
					</IonList>
				</IonGrid>

				{ (showModal && modalOptions) &&
					<Modal showModal={ showModal } modalOptions={ modalOptions } close={ () => setShowModal(false) } />
				}
			</CustomPage>
		</IonPage>
	);
};

export default Tab3;
