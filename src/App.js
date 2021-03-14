import React from "react";
import { IonApp } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//	Import NavRoutes which holds tabs and sub pages
import NavRoutes from "./main/nav/NavRoutes";
import { SideMenuProvider } from "./main/SideMenuProvider";

const App = () => {

	return (
		
			<IonApp>
				<SideMenuProvider>
					<NavRoutes />
				</SideMenuProvider>
			</IonApp>
	);
}

export default App;
