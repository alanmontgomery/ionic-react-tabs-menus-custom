import { IonGrid, IonRow, IonCol, IonModal, IonButtons, IonButton, IonIcon, IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import { chevronBack } from "ionicons/icons";

export const Modal = props => (

	<IonModal isOpen={ props.showModal }>
		<IonHeader>
			<IonToolbar>
				<IonTitle>{ props.modalOptions.text }</IonTitle>
				<IonButtons slot="start">
					<IonButton onClick={ () => props.close(false) }>
						<IonIcon size="large" icon={ chevronBack } style={{ marginLeft: "-0.7rem" }} />
					</IonButton>
				</IonButtons>
			</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonGrid>
					<IonRow className="ion-text-center ion-margin-top">
						<IonCol size="12">
							<IonIcon style={{ fontSize: "5rem" }} icon={ props.modalOptions.icon } />
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
	</IonModal>
);