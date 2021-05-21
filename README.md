# ionic-react-tabs-menus-custom
An example project of using React Context API to control the side menu in an Ionic app using React along with ALOT of cool features and tidy ways of doing things (see below)

# Run
`npm install`
then
`ionic serve`

_Check out this Twitter thread for some explanations (hopefully it doesn't outdate)_
https://twitter.com/93alan/status/1370754596801552391

- Custom TabMenu with Routes
- Custom Tab Children pages
- Custom Sub pages
- Navigate to a url (page) or perform an action by click event
- Changing side menu with react context api hook
- Easy custom Side Menu per tab
- Add an object to tabRoutes array in `AllRoutes.js` to add a new tab to the main tab bar

__Other things included__
- Example of rendering a list/items based on array of objects
- Layout for email style inbox / simple list of items
- Example of searching a list using filter() function
- Example of changing component rendered based on state
- Navigating to pages throughout the app `/tabs/tab1` from side menu, and content area
- Navigating to modals (or showing modals) throughout the app from different places in the app including side menu
- Navigating to sub pages from a list from a main page, e.g. `/tabs/tab2/1` making use of the `useParams` and `useIonViewWillEnter` hooks
- Accessing properties associated to the current side menu setup in a tab page using context api

## Adding a new tab to the tab menu and main app routing
1. Go to `AllRoutes.js`
2. Add an object to the `tabRoutes` array specifying a label, component, icon, path and a few flags

## Adding a new tab child to the main app routing
1. Go to `AllRoutes.js`
2. Add an object to the `tabChildrenRoutes` array specifying a label, component, icon, path and a few flags

## Adding a new sub-page to app routing
1. Go to `AllRoutes.js`
2. Add an object to the `subPageRoutes` array specifying a label, component, icon, path setting `isTab` bool to false

## Changing the side menu per tab
1. Find the relative `sideMenu` within the `PageSideMenus.js` file, e.g. `tab1SideMenu`
2. Alter one of the objects in the array or add one by changing the params passed to the `buildSideMenuObject` function or call the function for a new one
3. Alternatively, remove or add a new menu completely by creating a new array
4. Specify the side you want the side menu button to appear in the `useEffect` on the main tab component

## Adding a back button, action button with associated properties
1. Look at `CustomPage.js` and what props it expects
2. You can easily add a back button, action button (like add, search or something which could open a modal or navigate to a page) to the toolbar

## Example of side menu options found in `PageSideMenus.js` this is then imported via AllRoutes.js
```js
export const tab1SideMenu = [

    buildSideMenuObject(false, "Go to Inbox", mailOutline, "/tabs/tab2"),
    buildSideMenuObject(false, "Go to Places", mapOutline, "/tabs/tab3"),
    buildSideMenuObject(true),
    buildSideMenuObject(false, "Account Settings", settingsOutline, null),
    buildSideMenuObject(false, "Settings Sub Page", cogOutline, "/tabs/tab1/settings"),
    buildSideMenuObject(false, "Privacy", eyeOutline, null),
    buildSideMenuObject(false, "Logout", logOutOutline, null)
];
```
- url can be like `/tabs/tab1`
- clickEvent can be a function, can be a global function call from within `PageSideMenus.js`, alternatively find your side menu option in a loop/filter on the main component and reassign the clickEvent object property

If you'd like to support, you can <a className="link" href="https://www.buymeacoffee.com/ionicreacthub" target="_blank" rel="noopener">buy me a coffee</a> ☕️
