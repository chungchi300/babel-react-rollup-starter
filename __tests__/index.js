import {double} from 'helper/weightCalculation';
import {total} from 'helper/priceCalculation';
test('total', () => {
  expect(total(2 * 100, 0.8)).toBe(160);
  expect(double(100)).toBe(200);
});
