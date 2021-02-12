import { useEffect, useState } from "react";
import { useSideMenuUpdate, useSideMenu } from "../main/SideMenuProvider";
import { beerOutline, golfOutline, mailOutline, personOutline, pulseOutline, restaurantOutline } from "ionicons/icons";

import './Tab3.css';
import CustomPage from "../main/CustomPage";

import { PageHeader } from "../components/PageHeader";
import { Modal } from "../components/Modal";
import { IonPage, IonGrid } from '@ionic/react';

const Tab3 = props => {

	const pageName = "Places";
	const setSideMenu = useSideMenuUpdate();

	const [ showModal, setShowModal ] = useState(false);
	const [ modalOptions, setModalOptions ] = useState(false);

	const handleModal = async (index) => {

		await setModalOptions(sideMenuOptions[index]);
		setShowModal(true);
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
			clickEvent: () => handleModal(0)
		},
		{
			text: "Restaurants",
			icon: restaurantOutline,
			url: null,
			clickEvent: () => handleModal(1)
		},
		{
			text: "Golf Courses",
			icon: golfOutline,
			url: null,
			clickEvent: () => handleModal(2)
		},
		{
			text: "Hospitals",
			icon: pulseOutline,
			url: null,
			clickEvent: () => handleModal(3)
		}
	];

	useEffect(() => {
		
		if (props.location.pathname === "/tabs/tab3") {
			
			setTimeout(() => {
				setSideMenu({ options: sideMenuOptions, side: "start", pageName: pageName });
			}, 20);
		}
	}, [ props.location ]);

	return (
		<IonPage id={ pageName }>
			<CustomPage name={ pageName } sideMenu={ true } sideMenuPosition="start">
				<IonGrid>
					<PageHeader count={ sideMenuOptions.length } pageName={ pageName } />
				</IonGrid>

				{ (showModal && modalOptions) &&
					<Modal showModal={ showModal } modalOptions={ modalOptions } close={ () => setShowModal(false) } />
				}
			</CustomPage>
		</IonPage>
	);
};

export default Tab3;
