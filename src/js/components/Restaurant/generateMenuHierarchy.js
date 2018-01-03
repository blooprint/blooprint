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
    var currentSectionItemsArray = []
    var currentMenuSectionsArray = []
    var hierarchy = []
    var prevMenu = ''
    var prevSection = ''
    const appendcurrentSectionItemsArray = (tableline) => {
        var item = {
            menu: tableline.menu,
            section: tableline.section,
            itemtext: tableline.itemtext,
            itemsubtext: tableline.itemsubtext,
            price: tableline.price,
            sectioncomment: tableline.sectioncomment,
            menucomment: tableline.menucomment
        }
        currentSectionItemsArray.push(item)
    }
    data.map((tableline, index) => {
        var currentMenu = tableline.menu
        var currentSection = tableline.section
        if(data[index+1] === undefined) {
            if(currentSection == prevSection) {
                appendcurrentSectionItemsArray(tableline)
            }
            else {
                currentMenuSectionsArray.push(currentSectionItemsArray)
                currentSectionItemsArray = []
                appendcurrentSectionItemsArray(tableline)
                if(currentMenu != prevMenu){
                    hierarchy.push(currentMenuSectionsArray)
                    currentMenuSectionsArray = []
                }
            }
            currentMenuSectionsArray.push(currentSectionItemsArray)
            hierarchy.push(currentMenuSectionsArray)
        }
        else {
            if(currentSection == prevSection) {
                appendcurrentSectionItemsArray(tableline)
            }
            else {
                if(index == 0) {
                    appendcurrentSectionItemsArray(tableline)
                }
                else {
                    currentMenuSectionsArray.push(currentSectionItemsArray)
                    currentSectionItemsArray = []
                    appendcurrentSectionItemsArray(tableline)

                    if(currentMenu != prevMenu){
                        hierarchy.push(currentMenuSectionsArray)
                        currentMenuSectionsArray = []
                    }
                }
            }
        }
        prevMenu = currentMenu
        prevSection = currentSection
    })
    return hierarchy
}
export default generateMenuHierarchy
