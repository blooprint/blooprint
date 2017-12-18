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
import client_data from '../../../assets/restaurant/clients'
var gsjson = require('google-spreadsheet-to-json');

export const menuSocket = (app) => {

    var ioServer = app.listen(process.env.PORT || 1235, listen);
    var io = require('socket.io')(ioServer);

    function listen() {
        var host = ioServer.address().address;
        var port = ioServer.address().port;
        console.log('socket.io listening at http://' + host + ':' + port);
    }

    io.sockets.on('connection', function (socket) {
        socket.on('getMenuData', function(paramName) {
            var spreadsheet_document = client_data.client_list
            var all_menu_sections = [0]

            gsjson({
                spreadsheetId: spreadsheet_document,
                worksheet: all_menu_sections
            })
            .then(function(data) {
                data[0].map((lineitem, index) => {
                    if(lineitem.name === paramName) {
                        spreadsheet_document = lineitem.sheet_id
                        all_menu_sections = [0,1,2]
                        gsjson({
                            spreadsheetId: spreadsheet_document,
                            worksheet: all_menu_sections
                        })
                        .then(function(data) {
                            socket.emit('mountMenuData', data)
                        })
                        .catch(function(err) {
                            console.log(err.message);
                            console.log(err.stack);
                        });
                    }
                })
            })
            .catch(function(err) {
                console.log(err.message);
                console.log(err.stack);
            });
        })

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
        });
    });
}
