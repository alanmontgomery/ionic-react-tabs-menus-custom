# ionic-react-tabs-menus-custom
Rough example of using React Context API to control the side menu and custom page content, tabs etc

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

## Adding a new tab to the tab menu
1. Go to `AllRoutes.js`
2. Add an object to the `tabRoutes` array specifying a label, component, icon, path and a few flags

## Adding a new tab child to the tab menu
1. Go to `AllRoutes.js`
2. Add an object to the `tabChildrenRoutes` array specifying a label, component, icon, path and a few flags

## Adding a new sub-page to app
1. Go to `AllRoutes.js`
2. Add an object to the `subPageRoutes` array specifying a label, component, icon, path setting `isTab` bool to false

## Changing the side menu per tab
1. Find the `sideMenuOptions` within the main tab JS file, e.g. `Tab1.js`
2. Alter one of the objects in the array or add one
3. Alternatively, remove or add a new menu completely
4. Specify the side you want the side menu button to appear in the `useEffect` on the main tab

## Adding a back button, action button with associated properties
1. Look at `CustomPage.js` and what props it expects
2. You can easily add a back button, action button (like add, search or something which could open a modal or navigate to a page) to the toolbar

## Example of side menu options to pass to the side menu context
```js
const sideMenuOptions = [
	{
		text: "Go to Profile",
		icon: personOutline,
		url: "/tabs/tab1"
	},
	{
		text: "Unread",
		icon: mailUnreadOutline,
		url: null,
		clickEvent: () => handleModal(1)
	},
	{
		text: "Archived",
		icon: archiveOutline,
		url: null,
		clickEvent: () => handleModal(2)
	}
];
```
- url can be like `/tabs/tab1`
- clickEvent can be a clickEvent which is local to the current tab like showing a modal or doing something else
