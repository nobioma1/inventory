import faker from 'faker';

faker.seed(123);

const initialState = {
  category: [
    { key: 'Phone', value: 'Phone', text: 'Phone' },
    { key: 'Tablet', value: 'Tablet', text: 'Tablet' },
    { key: 'Battery', value: 'Battery', text: 'Battery' },
  ],
  inventory: [],
};

const count = 10;
for (let index = 0; index < count; index++) {
  let rand = Math.floor(Math.random() * initialState.category.length);
  initialState.inventory.push({
    id: faker.random.uuid(),
    productName: faker.commerce.productName(),
    description: faker.commerce.productAdjective(),
    serial: faker.random.uuid(),
    category: initialState.category[rand].value,
  });
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
