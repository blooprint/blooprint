import client_data from '../../../assets/restaurant/clients'

export const menuSocket = (app) => {

    var ioServer = app.listen(process.env.PORT || 1235, listen);
    var io = require('socket.io')(ioServer);

    function listen() {
        var host = ioServer.address().address;
        var port = ioServer.address().port;
        console.log('socket.io listening at http://' + host + ':' + port);
    }

    io.sockets.on('connection', function (socket) {

        socket.on('getMenuData', function() {

            console.log('\nreceiving NCFR menu data from spreadsheet')

            var gsjson = require('google-spreadsheet-to-json');

            var spreadsheet_document = ''
            var all_menu_sections = ''
            if (process.env.NODE_ENV != "production") { // development
                spreadsheet_document = client_data.template.motherload
                all_menu_sections = [0,1,2]
                // spreadsheet_document = client_data.template.menu
                // all_menu_sections = client_data.template.sections
            }
            else { // production
                spreadsheet_document = client_data.client_00000.menu
                all_menu_sections = client_data.client_00000.sections
            }

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
        })

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
        });
    });
}
