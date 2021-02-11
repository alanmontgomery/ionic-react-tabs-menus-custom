//	Main Tabs
import Tab1 from "../pages/Tab1"
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";

//	Tab icons
import { personOutline, mailOutline, mapOutline } from "ionicons/icons";

//  Import custom tab menu
import TabMenu from "./TabMenu";

//	Array of objects representing tab pages
export const tabs = [

    { label: "Profile", component: Tab1, icon: personOutline, path: "/tabs/tab1", default: true, isTab: true },
    { label: "Inbox", component: Tab2, icon: mailOutline, path: "/tabs/tab2", default: false, isTab: true },
    { label: "Places", component: Tab3, icon: mapOutline, path: "/tabs/tab3", default: false, isTab: true }
];

//	Render tab menu
export const Tabs = () => ( <TabMenu tabs={ tabs } position="bottom" /> );