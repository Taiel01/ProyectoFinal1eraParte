import { PipeTrueFalsePipe } from './pipe-true-false.pipe';

describe('PipeTrueFalsePipe', () => {
  it('create an instance', () => {
    const pipe = new PipeTrueFalsePipe();
    expect(pipe).toBeTruthy();
  });
});
