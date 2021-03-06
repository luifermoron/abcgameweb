// Utils Funtions

function setClientBySocketId(socketID, client) {
    for (var i = 0; i < listClientes.length; i++) {
        if (listClientes[i].socket.id === socketID) {
            listClientes[i].client = client;
            break;
        }
    }
}

function getClientBySocketId(socketID) {
    for (var i = 0; i < listClientes.length; i++)
        if (listClientes[i].socket.id === socketID)
            return listClientes[i];
    return null;
}

function getIndexPartidaForPlaying(nivel, id) {
    for (var i = 0; i < listPartidas.length; i++)
        if (listPartidas[i].player1 !== null &&
            listPartidas[i].player1.socket.id !== id &&
            listPartidas[i].unidad.nivel === nivel &&
            listPartidas[i].player2 === null)
            return i;
    return -1;
}

function haveGame(socketID) {
    for (var i = 0; i < listPartidas.length; i++)
        if ((listPartidas[i].player1 !== null &&
            listPartidas[i].player1.socket.id === socketID) ||
            (listPartidas[i].player2 !== null &&
            listPartidas[i].player2.socket.id === socketID))
            return i;
    return -1;
}

function deleteClientFromList(socketID) {
    for (var i = 0; i < listClientes.length; i++) {
        if (listClientes[i].socket.id === socketID) {
            listClientes.splice(i, 1);
            break;
        }
    }
}

function getIndexPartidaById(partidaID) {
    for (var i = 0; i < listPartidas.length; i++) {
        if (listPartidas[i].id === partidaID) {
            return i;
        }
    }
    return -1;
}

function deletePartidaBySocketId(socketID) {
    for (var i = 0; i < listPartidas.length; i++) {
        if (listPartidas[i].player1 !== null &&
            listPartidas[i].player1.socket.id === socketID) {
            listPartidas.splice(i, 1);
        }
    }
}

module.exports.setClientBySocketId = setClientBySocketId;
module.exports.getClientBySocketId = getClientBySocketId;
module.exports.getIndexPartidaForPlaying = getIndexPartidaForPlaying;
module.exports.haveGame = haveGame;
module.exports.deleteClientFromList = deleteClientFromList;
module.exports.getIndexPartidaById = getIndexPartidaById;
module.exports.deletePartidaBySocketId = deletePartidaBySocketId;