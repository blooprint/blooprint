import generateMenuHierarchy from '../components/Restaurant/generateMenuHierarchy'

const initialState = {
	restaurantInfo: [],
	restaurantHours: [],
	menus: [],
	openedMenuIndex: 0,
	openedSectionIndex: 0,
	freshLoaded: true
}

export default function restaurant(state = initialState, action) {
	switch(action.type) {

		case 'SET_SPREADSHEET_DATA':

			return {
				...state,
				restaurantInfo: action.data[0],
                restaurantHours: action.data[1],
                menus: generateMenuHierarchy(action.data[2])
			}

		case 'SET_OPENED_MENU':
			return {
				...state,
				freshLoaded: true,
				openedMenuIndex: action.index
			}

		case 'SET_OPENED_SECTION_INDEX':
			return {
				...state,
				freshLoaded: false,
				openedSectionIndex: action.index
			}


		default:
			return state

	}
}
