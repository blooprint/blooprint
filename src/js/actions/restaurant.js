export function setSpreadsheetData(data) {
    return {
        type: 'SET_SPREADSHEET_DATA',
        data
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
export function setHasOpened() {
    return {
        type: 'SET_HAS_OPENED'
    }
}
