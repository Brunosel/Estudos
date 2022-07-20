function getAdmin(map) {
    let Admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            Admins.push(key);
        }
    }
    return Admins;
}

const users = new Map();

users.set('Luiz', 'Admin');
users.set('Pedro', 'Admin');
users.set('Jorge', 'User');
users.set('Yasmin', 'Admin');

console.log(getAdmin(users));