const initialState = {
	viewHome: true,
	viewBreakfast: false,
	viewLunchDinner: false,
	viewDessert: false,
	restaurantInfo: [],
	restaurantHours: [],
	breakfastSpecials: [],
	breakfastItems: [],
	lunchSpecials: [],
	lunchItems: [],
	dinnerSpecials: [],
	dinnerItems: [],
	dessert: [],

	menuHierarchy: {}
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

			// // console.log('\n\nreducer\t',action.data)
			// var toReturn = Object.assign({}, ...state)
			// for(var x = 0; x < action.data.length; x++) {
			// 	toReturn = Object.assign({}, toReturn, action.data[x])
			// 	console.log('toReturn\t',toReturn)
			// }
			// console.log('FINAL toReturn\t',toReturn)

			var menuArray = []
			for ( var x = 0; x < action.data.length; x++){
				menuArray.push(action.data[x])
			}
			console.log('FINAL toReturn\t',menuArray)

			//	TODO: create menuHierarchy object in store


			return {  // TODO: return only { ...state, menuHierarchy: menuArray }
				...state,
                restaurantInfo: action.data[0],
                restaurantHours: action.data[1],
                breakfastSpecials: action.data[2],
                breakfastItems: action.data[3],
                lunchSpecials: action.data[4],
                lunchItems: action.data[5],
                dinnerSpecials: action.data[6],
                dinnerItems: action.data[7],
                dessert: action.data[8]
			}

		case 'VIEW_BREAKFAST':
			console.log('reducer working')
			return {
		        ...state,
		        viewBreakfast: true,
		        viewHome: false,
		        viewLunchDinner: false,
		        viewDessert: false
		    }

		case 'VIEW_LUNCH_DINNER':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: false,
		        viewLunchDinner: true,
		        viewDessert: false
		    }

		case 'VIEW_DESSERT':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: false,
		        viewLunchDinner: false,
		        viewDessert: true
		    }

		case 'VIEW_HOME':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: true,
		        viewLunchDinner: false,
		        viewDessert: false
		    }


		default:
			return state

	}
}
