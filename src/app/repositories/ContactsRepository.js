const { v4 : uuid } = require('uuid');
let contacts = [
  {
    id: uuid(),
    name: 'Dhemeson Siqueira',
    email: 'dhemeson@gmail.com',
    phone: '0800000000',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Loran Siqueira',
    email: 'Loran@gmail.com',
    phone: '0800000000',
    category_id: uuid(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve, rejects) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve, rejects) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve, rejects) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
