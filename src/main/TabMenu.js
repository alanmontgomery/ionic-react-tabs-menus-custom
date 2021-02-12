import React from "react";
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import SideMenu from "./SideMenu";

const TabMenu = (props) => {

	return (
		<IonReactRouter contentId="main">

			<SideMenu />

			<IonTabs>
				<IonRouterOutlet id="main">

					{ props.tabs.map((tab, i) => {

						if (tab.isTab) {
							return <Route key={ i } path={ tab.path } component={ tab.component } exact={ true }/>;
						} else {

							return <Route key={ i } path={ tab.path } component={ tab.component } exact={ false } />;
						}
					})}

					<Redirect exact from="/" to={ props.tabs.filter(t => t.default)[0].path.toString() }/>
				</IonRouterOutlet>

				<IonTabBar slot={ props.position }>

					{ props.tabs.map((tab, i) => {

						if (tab.isTab) {

							return (
								<IonTabButton key={ `tab_${ i + 1 }` } tab={ `tab_${ i + 1 }` } href={ tab.path }>
									<IonIcon icon={ tab.icon } />
									{ tab.label && <IonLabel>{ tab.label }</IonLabel> }
								</IonTabButton>
							);
						}
					})}
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	);
};

export default TabMenu;