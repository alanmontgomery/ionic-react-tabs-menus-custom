import { useEffect, useState } from "react";
import { IonButton, IonCol, IonGrid, IonPage, IonRow, IonText } from '@ionic/react';
import { eyeOutline, logOutOutline, settingsOutline } from 'ionicons/icons';

import './Tab1.css';
import CustomPage from "../main/CustomPage";

import { PageHeader } from "../components/PageHeader";
import { Modal } from "../components/Modal";
import { useSideMenuUpdate, useSideMenu } from "../main/SideMenuProvider";
import { Link } from "react-router-dom";

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
			text: "Account Settings", 
			icon: settingsOutline, 
			url: null,
			clickEvent: () => handleModal(0)
		},
		{ 
			text: "Privacy", 
			icon: eyeOutline, 
			url: null,
			clickEvent: () => handleModal(1)
		},
		{ 
			text: "Logout", 
			icon: logOutOutline, 
			url: null,
			clickEvent: () => handleModal(2)
		}
	];

	useEffect(() => {

		if (props.location.pathname === "/tabs/tab1") {
			
			setSideMenu({ options: sideMenuOptions, side: "start", pageName: pageName });
		}
	}, [ props.location ]);

	return (
		<IonPage id={ pageName }>
			<CustomPage name={ pageName } sideMenu={ true } sideMenuPosition="start">
				<IonGrid>
					
					<PageHeader count={ sideMenuOptions.length } pageName={ pageName } />

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
							<Link to="/tabs/tab1/settings">
								<IonButton size="large" color="primary">Settings Sub Page</IonButton>
							</Link>
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
