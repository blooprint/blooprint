export function setSpreadsheetData(restaurantInfo, restaurantHours, breakfastSpecials, breakfastItems, lunchSpecials, lunchItems, dinnerSpecials, dinnerItems,dessert) {
    return {
        type: 'SET_SPREADSHEET_DATA',
        restaurantInfo,
        restaurantHours,
        breakfastSpecials,
        breakfastItems,
        lunchSpecials,
        lunchItems,
        dinnerSpecials,
        dinnerItems,
        dessert
    }
}
export function setSpreadsheetDataNew(data) {
    return {
        type: 'SET_SPREADSHEET_DATA_NEW',
        data
    }
}
export function action_viewBreakfast() {
    return {
        type: 'VIEW_BREAKFAST'
    }
}
export function action_viewLunchDinner() {
    return {
        type: 'VIEW_LUNCH_DINNER'
    }
}
export function action_viewDessert() {
    return {
        type: 'VIEW_DESSERT'
    }
}
export function action_viewDrinks() {
    return {
        type: 'VIEW_DRINKS'
    }
}
export function action_viewHome() {
    return {
        type: 'VIEW_HOME'
    }
}
export function setOpenedMenu(index) {
    return {
        type: 'SET_OPENED_MENU',
        index
    }
}
export function setOpenedSectionIndex(index) {
    return {
        type: 'SET_OPENED_SECTION_INDEX',
        index
    }
}
