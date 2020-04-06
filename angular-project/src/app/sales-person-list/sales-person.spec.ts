import { SalesPerson } from './sales-person';

describe('SalesPerson', () => {
  it('should create an instance', () => {
    expect(new SalesPerson("a", "b", "c", 1)).toBeTruthy();
  });
});
