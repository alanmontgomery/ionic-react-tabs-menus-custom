import { useEffect, useState } from "react";
import { archiveOutline, mailUnreadOutline, mapOutline, personOutline } from 'ionicons/icons';
import { useSideMenuUpdate, useSideMenu } from "../main/SideMenuProvider";

import './Tab2.css';
import CustomPage from "../main/CustomPage";

import { PageHeader } from "../components/PageHeader";
import { Modal } from "../components/Modal";
import { IonGrid, IonPage } from '@ionic/react';

const Tab2 = props => {

	const pageName = "Inbox";
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
			text: "Go to Places", 
			icon: mapOutline, 
			url: "/tabs/tab3"
		},
		{},
		{
			text: "Unread",
			icon: mailUnreadOutline,
			url: null,
			clickEvent: () => handleModal(0)
		},
		{
			text: "Archived",
			icon: archiveOutline,
			url: null,
			clickEvent: () => handleModal(1)
		}
	];

	useEffect(() => {
		
		if (props.location.pathname === "/tabs/tab2") {
			
			setSideMenu({ options: sideMenuOptions, side: "start", pageName: pageName });
		}
	}, [ props.location ]);

	return (
		<IonPage id={ pageName }>
			<CustomPage name={ pageName } sideMenu={ true } sideMenuPosition="end">
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

export default Tab2;
