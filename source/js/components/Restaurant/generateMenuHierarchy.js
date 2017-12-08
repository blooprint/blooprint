/**
*   Copyright (C) 2017 - Dave Daggett - Blooprint, LLC
*
*   This program is free software; you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation; either version 3 of the License, or
*   (at your option) any later version.
*
*   This program is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with this program; if not, write to the Free Software Foundation,
*   Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301  USA
*/
const generateMenuHierarchy = function(data) {

    var currentSectionArray = []
    var currentMenuArray = []
    var hierarchy = []

    var prevMenu = ''
    var prevSection = ''

    const appendCurrentSectionArray = (tableline) => {
        var item = {
            menu: tableline.menu,
            section: tableline.section,
            itemtext: tableline.itemtext,
            itemsubtext: tableline.itemsubtext,
            price: tableline.price
        }
        currentSectionArray.push(item)
    }

    data.map((tableline) => {

        var currentMenu = tableline.menu
        var currentSection = tableline.section

        if(currentSection !== prevSection) {
            if(currentSectionArray.length != 0) currentMenuArray.push(currentSectionArray)
            currentSectionArray = []
            appendCurrentSectionArray(tableline)

            if(currentMenu !== prevMenu) {
                if(currentMenuArray.length != 0) hierarchy.push(currentMenuArray)
                currentMenuArray = []
            }
        }
        else {
            appendCurrentSectionArray(tableline)
        }
        prevMenu = currentMenu
        prevSection = currentSection
    })
    return hierarchy
}

export default generateMenuHierarchy
