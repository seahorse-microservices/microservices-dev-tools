
const doAdd = require('./doAdd');

test("calls math.add", () => {
  expect(doAdd.pepe(1, 2)).toBe(3);
 // expect(sum(1, 2)).toBe(3);
});
