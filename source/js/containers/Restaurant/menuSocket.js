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

            // grab from single list
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
                            console.log('\n\nsome')
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
