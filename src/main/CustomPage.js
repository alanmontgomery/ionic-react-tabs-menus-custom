import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonBackButton, IonIcon } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';

const CustomPage = (props) => {

	const mainContent = props.children;
	const { 
		name, 
		sideMenu = false, 
		sideMenuPosition = "end", 
		backButton = false,
		backButtonIcon = chevronBack,
		backButtonText = " ", 
		backButtonPath,
		actionButton = false,
		actionButtonPosition,
		actionButtonIcon,
		actionButtonIconSize,
		actionButtonClickEvent,
		contentClass
	} = props;
    
    return (
        <>
            <IonHeader translucent={ true }>
                <IonToolbar>

					<IonTitle>{ name }</IonTitle>

                    { backButton &&
                        <IonButtons slot="start">
                            <IonBackButton icon={ backButtonIcon } text={ backButtonText } defaultHref={ backButtonPath } />   
                        </IonButtons>
					}

					{ (actionButton && actionButtonIcon) &&
                        <IonButtons slot={ actionButtonPosition }>
                            <IonIcon style={{ fontSize: actionButtonIconSize }} icon={ actionButtonIcon } onClick={ actionButtonClickEvent }></IonIcon>
                        </IonButtons>
                    }

                    { sideMenu &&
                        <IonButtons slot={ sideMenuPosition }>
                            <IonMenuButton />
                        </IonButtons>
					}
                </IonToolbar>
            </IonHeader>

            <IonContent className={ contentClass } fullscreen>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{ name }</IonTitle>
                    </IonToolbar>
                </IonHeader>
                { mainContent }
            </IonContent>
        </>
    );
};

export default CustomPage;