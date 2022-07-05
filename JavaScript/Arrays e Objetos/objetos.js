// entre {} podemos filtral apenas oq queremos do objeto

const user = {
    id: 42,
    displayName: 'jpet',
    fullName: {
        firstName: 'John',
        lastName: 'Peter'
    }
}

function userId({id}){
    return id;
}

function userName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user); // 42   

userName(user); // John Peter 
