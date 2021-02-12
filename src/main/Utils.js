import { beerOutline, golfOutline, pulseOutline, restaurantOutline } from "ionicons/icons";

export const getInboxItems = () => {
    
    return [

        {   
            sender: "Github",
            subject: "Host your code here",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            time: "3 mins ago",
            unread: true
        },
        {
            sender: "Ionic",
            subject: "Amazing cross platform apps on the web",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            time: "2 hrs ago",
            unread: false
        },
        {
            sender: "Capacitor",
            subject: "This is why capacitor is awesome",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            time: "Yesterday",
            unread: false
        },
        {
            sender: "ReactJS",
            subject: "Get ready for React 2021",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            time: "Yesterday",
            unread: true
        },
        {
            sender: "ContextAPI",
            subject: "Global state management!",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            time: "2 days ago",
            unread: true
        },
        {
            sender: "Javascript",
            subject: "The best language",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            time: "3 days ago",
            unread: false
        },
        {
            sender: "Mobile app development",
            subject: "Bring your solutions to mobile",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            time: "4 days ago",
            unread: false
        }
    ];
}

export const getPlaceItems = () => {

    const places = [
        {
            name: "Rusty Tavern",
            rating: 8,
            type: "pub",
            icon: beerOutline
        },
        {
            name: "Meat Mall",
            rating: 5,
            type: "restaurant",
            icon: restaurantOutline
        },
        {
            name: "Lousy Lager",
            rating: 10,
            type: "pub",
            icon: beerOutline
        },
        {
            name: "Hole in one",
            rating: 4,
            type: "golf",
            icon: golfOutline
        },
        {
            name: "Relief center",
            rating: 9,
            type: "hospital",
            icon: pulseOutline
        },
        {
            name: "Yummy yams",
            rating: 2,
            type: "restaurant",
            icon: restaurantOutline
        },
        {
            name: "Under power of others",
            rating: 7,
            type: "golf",
            icon: golfOutline
        },
        {
            name: "Belfast General",
            rating: 10,
            type: "hospital",
            icon: pulseOutline
        },
    ];

    return places;
}