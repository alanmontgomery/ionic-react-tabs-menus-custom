# ionic-react-tabs-menus-custom
Rough example of using React Context API to control the side menu and custom page content, tabs etc

# **View in mobile view as an iOS device in web**

# Run
`ionic serve`

- Custom TabMenu with TabRoutes
- Changing side menu with react context api hook
- Easy custom Side Menu per tab

## Example of side menu options to pass to the side menu context
```js
const sideMenuOptions = [
	{
		text: "Unread",
		icon: mailUnreadOutline,
		url: null,
		clickEvent: () => handleModal(0)
	},
	{
		text: "Archived",
		icon: archiveOutline,
		url: null,
		clickEvent: () => handleModal(1)
	}
];
```
- url can be like `/tabs/tab1`
- clickEvent can be a clickEvent which is local to the current tab like showing a modal or doing something else
