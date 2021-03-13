import { useEffect, useState } from "react";
import { IonButton, IonCol, IonGrid, IonPage, IonRow, IonText } from '@ionic/react';
import { cogOutline, eyeOutline, logOutOutline, mailOutline, mapOutline, settingsOutline } from 'ionicons/icons';

import './Tab1.css';
import CustomPage from "../main/CustomPage";

import { PageHeader } from "../components/PageHeader";
import { Modal } from "../components/Modal";
import { useSideMenuUpdate, useSideMenu } from "../main/SideMenuProvider";
import { Link } from "react-router-dom";
import { showTabMenu } from "../main/Utils";

const Tab1 = props => {

	const pageName = "Profile";
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
			text: "Go to Inbox", 
			icon: mailOutline, 
			url: "/tabs/tab2"
		},
		{ 
			text: "Go to Places", 
			icon: mapOutline, 
			url: "/tabs/tab3"
		},
		{},
		{ 
			text: "Account Settings", 
			icon: settingsOutline, 
			url: null,
			clickEvent: () => handleModal(3)
		},
		{ 
			text: "Settings sub page", 
			icon: cogOutline, 
			url: "/tabs/tab1/settings"
		},
		{ 
			text: "Privacy", 
			icon: eyeOutline, 
			url: null,
			clickEvent: () => handleModal(5)
		},
		{ 
			text: "Logout", 
			icon: logOutOutline, 
			url: null,
			clickEvent: () => handleModal(6)
		}
	];

	useEffect(() => {

		if (props.location.pathname === "/tabs/tab1") {
			
			setSideMenu({ options: sideMenuOptions, side: "start", pageName: pageName });
			showTabMenu(true);
		}
	}, [ props.location ]);

	return (
		<IonPage id={ pageName }>
			<CustomPage name={ pageName } sideMenu={ true } sideMenuPosition="start">
				<IonGrid>
					
					<PageHeader count={ sideMenuOptions.length } pageName={ pageName } />

					<IonRow className="ion-text-center">
						<IonCol size="12">
							<Link to="/tabs/tab1/settings">
								<IonButton size="small" color="primary">Settings Sub Page</IonButton>
							</Link>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center">
						<IonCol size="12">
							<IonText color="primary">
								<p>Contact me on twitter if you need anything else :)</p>
								<a href="https://twitter.com/intent/tweet?screen_name=93alan&ref_src=twsrc%5Etfw" className="twitter-mention-button" data-size="large" data-related="93alan,93alan" data-dnt="true" data-show-count="false">Tweet to @93alan</a>
							</IonText>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center">
						<IonCol size="12">
							<IonText>
								<h4>Check out Mobile DevCast</h4>
								<p>A podcast dedicated to mobile app development and web native technology like ionic & capacitor!</p>
								<IonText color="warning">
									<a style={{ color: "yellow" }} href="https://mobiledevcast.com" target="_blank" rel="noreferrer">https://mobiledevcast.com</a>
								</IonText>
							</IonText>
						</IonCol>
					</IonRow>
				</IonGrid>

				{ (showModal && modalOptions) &&
					<Modal showModal={ showModal } modalOptions={ modalOptions } close={ () => setShowModal(false) } />
				}
			</CustomPage>
		</IonPage>
	);
};

export default Tab1;
