import generateMenuHierarchy from '../components/Restaurant/generateMenuHierarchy'

const initialState = {
	viewHome: true,
	viewBreakfast: false,
	viewLunchDinner: false,
	viewDessert: false,
	viewDrinks: false,
	breakfastSpecials: [],
	breakfastItems: [],
	lunchSpecials: [],
	lunchItems: [],
	dinnerSpecials: [],
	dinnerItems: [],
	dessert: [],

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
                restaurantInfo: action.restaurantInfo,
                restaurantHours: action.restaurantHours,
                breakfastSpecials: action.breakfastSpecials,
                breakfastItems: action.breakfastItems,
                lunchSpecials: action.lunchSpecials,
                lunchItems: action.lunchItems,
                dinnerSpecials: action.dinnerSpecials,
                dinnerItems: action.dinnerItems,
                dessert: action.dessert
            }

		case 'SET_SPREADSHEET_DATA_NEW':

			return {
				...state,
				restaurantInfo: action.data[0],
                restaurantHours: action.data[1],
                menus: generateMenuHierarchy(action.data[2])
			}

		case 'VIEW_BREAKFAST':
			console.log('reducer working')
			return {
		        ...state,
		        viewBreakfast: true,
		        viewHome: false,
		        viewLunchDinner: false,
		        viewDessert: false,
				viewDrinks: false
		    }

		case 'VIEW_LUNCH_DINNER':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: false,
		        viewLunchDinner: true,
		        viewDessert: false,
				viewDrinks: false
		    }

		case 'VIEW_DESSERT':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: false,
		        viewLunchDinner: false,
		        viewDessert: true,
				viewDrinks: false
		    }

		case 'VIEW_DRINKS':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: false,
		        viewLunchDinner: false,
		        viewDessert: true,
				viewDrinks: true
		    }

		case 'VIEW_HOME':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: true,
		        viewLunchDinner: false,
		        viewDessert: false,
				viewDrinks: false
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
