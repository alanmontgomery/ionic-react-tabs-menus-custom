import { archiveOutline, beerOutline, cogOutline, eyeOutline, golfOutline, logOutOutline, mailOutline, mailUnreadOutline, mapOutline, personOutline, pulseOutline, refreshOutline, restaurantOutline, settingsOutline } from "ionicons/icons";
import { buildSideMenuObject } from "./Utils";

export const tab1SideMenu = [

    buildSideMenuObject(false, "Go to Inbox", mailOutline, "/tabs/tab2"),
    buildSideMenuObject(false, "Go to Places", mapOutline, "/tabs/tab3"),
    buildSideMenuObject(true),
    buildSideMenuObject(false, "Account Settings", settingsOutline, null),
    buildSideMenuObject(false, "Settings Sub Page", cogOutline, "/tabs/tab1/settings"),
    buildSideMenuObject(false, "Privacy", eyeOutline, null),
    buildSideMenuObject(false, "Logout", logOutOutline, null)
];

export const tab2SideMenu = [

    buildSideMenuObject(false, "Go to Profile", personOutline, "/tabs/tab1"),
    buildSideMenuObject(false, "Go to Places", mapOutline, "/tabs/tab3"),
    buildSideMenuObject(true),
    buildSideMenuObject(false, "Unread", mailUnreadOutline, null),
    buildSideMenuObject(false, "Archived", archiveOutline, null),
    buildSideMenuObject(false, "Change timestamp style", refreshOutline, null)
];

export const tab3SideMenu = [

    buildSideMenuObject(false, "Go to Profile", personOutline, "/tabs/tab1"),
    buildSideMenuObject(false, "Go to Inbox", mailOutline, "/tabs/tab2"),
    buildSideMenuObject(true),
    buildSideMenuObject(false, "Pubs", beerOutline, null),
    buildSideMenuObject(false, "Restaurants", restaurantOutline, null),
    buildSideMenuObject(false, "Golf Courses", golfOutline, null),
    buildSideMenuObject(false, "Hospitals", pulseOutline, null)
];