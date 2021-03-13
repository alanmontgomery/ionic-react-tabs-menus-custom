//	Main Tabs
import Tab1 from "../pages/Tab1"
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";

//  Sub pages from tabs
import Settings from "../pages/Settings";
import InboxItem from "../pages/InboxItem";

//	Tab icons
import { personOutline, mailOutline, mapOutline } from "ionicons/icons";

//  Import custom tab menu
import TabMenu from "./TabMenu";
import SubRoutes from "./SubRoutes";

//	Array of objects representing tab pages
export const tabRoutes = [

    { label: "Profile", component: Tab1, icon: personOutline, path: "/tabs/tab1", default: true, isTab: true },
    { label: "Inbox", component: Tab2, icon: mailOutline, path: "/tabs/tab2", default: false, isTab: true },
    { label: "Places", component: Tab3, icon: mapOutline, path: "/tabs/tab3", default: false, isTab: true }
];

//  Array of objects representing sub pages
const subPageRoutes = [

    { component: Settings, path: "/tabs/tab1/settings", default: false, isTab: false },
    { component: InboxItem, path: "/inbox/:id", default: false, isTab: false },
];

//  Render sub routes
export const SubPages = () => ( <SubRoutes routes={ subPageRoutes } /> );

//	Render tab menu
export const Tabs = () => ( <TabMenu tabs={ tabRoutes } subPages={ subPageRoutes } position="bottom" /> );