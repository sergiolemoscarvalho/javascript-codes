function getAdmins(map){

    let admins = [];
    for([key, value] of map){
        if( value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;

}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Alba', 'Admin');
usuarios.set('Laura', 'User');
usuarios.set('Ana', 'Admin');
usuarios.set('Carol', 'Admin');
usuarios.set('Alana', 'User');

console.log(getAdmins(usuarios));