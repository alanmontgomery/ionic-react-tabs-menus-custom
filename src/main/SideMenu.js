import React, { useState, useEffect } from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonMenuToggle, IonItem, IonIcon, IonMenu, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { BrowserRouter } from 'react-router-dom';
import { useSideMenu } from "../main/SideMenuProvider";

const SideMenu = (props) => {

	const { type = "overlay" } = props;
	const mainContent = props.children;
	const menuOptions = useSideMenu();

	return (
		<BrowserRouter>
			<IonMenu contentId={ menuOptions.pageName } side={ menuOptions.side } type={ type }>
				<IonHeader collapse="condense">
					<IonToolbar translucent>
						<IonTitle>Menu</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonContent id="main">

					{ mainContent }

					{ menuOptions !== null &&
						<IonList>
							{ menuOptions && menuOptions.options.map((menuOption, i) => {
								
								if (menuOption.url === null) {

									return (

										<IonMenuToggle key={ i } autoHide={ true }>
											<IonItem onClick={ menuOption.clickEvent } lines="full" detail={ true }>
												<IonIcon slot="start" icon={ menuOption.icon } />
												<IonLabel>{ menuOption.text }</IonLabel>
											</IonItem>
										</IonMenuToggle>
									);
								} else {

									return (

										<IonMenuToggle key={ i } autoHide={ true }>
											<IonItem routerLink={ menuOption.url } routerDirection="none" lines="full">
												<IonIcon slot="start" icon={ menuOption.icon } />
												<IonLabel>{ menuOption.text }</IonLabel>
											</IonItem>
										</IonMenuToggle>
									);
								}
							})}
						</IonList>
					}
				</IonContent>
			</IonMenu>
        </BrowserRouter>
	);
};

export default SideMenu;
