require('../src/big-grouped-table');

test('expect the html element big-grouped-table to be defined', () => {
  expect(customElements.get('big-grouped-table')).toBeDefined();
});

test('expect big-grouped-table to have a setData function', () => {
  const BigGroupedTable = customElements.get('big-grouped-table');

  const el = new BigGroupedTable();
  expect(el.setData).toBeDefined();
});