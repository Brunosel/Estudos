const pessoa = {
    firstName: 'Bruno',
    lastName: 'Seleguim',
    id: 1,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    getId: function() {
        return this.id;
    }
}

console.log(pessoa.fullName());