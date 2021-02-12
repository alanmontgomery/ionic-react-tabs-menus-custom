import { IonHeader, IonContent, IonToolbar, IonTitle, IonMenuToggle, IonItem, IonIcon, IonMenu, IonLabel, IonList } from '@ionic/react';
import { useSideMenu } from "../main/SideMenuProvider";

const SideMenu = (props) => {

	const { type = "overlay" } = props;
	const mainContent = props.children;
	const menuOptions = useSideMenu();

	return (
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

								if (menuOption.url !== null) {
									return (

										<IonMenuToggle key={ i } autoHide={ true }>
											<IonItem routerLink={ menuOption.url } lines="full">
												<IonIcon slot="start" icon={ menuOption.icon } />
												<IonLabel>{ menuOption.text }</IonLabel>
											</IonItem>
										</IonMenuToggle>
									);
								}
							}
						})}
					</IonList>
				}
			</IonContent>
		</IonMenu>
	);
};

export default SideMenu;
