const { uuid } = require('uuidv4');
const contacts = [
  {
    id: uuid(),
    name: 'Dhemeson Siqueira',
    email: 'dhemeson@gmail.com',
    phone: '0800000000',
    category_id: uuid(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve, rejects) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
