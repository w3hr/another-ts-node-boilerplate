import { SayHello, SayHelloCapitalize, SayHelloLower, SayHelloUpper, StringTools } from '../src/index';

test('Greeter SayHello', () => {
  expect(SayHello('ludwig')).toBe('Hello ludwig');
});

test('Greeter SayHelloCapitalize', () => {
  expect(SayHelloCapitalize('ludwig')).toBe('Hello Ludwig');
});

test('Greeter SayHelloLower', () => {
  expect(SayHelloLower('LUDWIG')).toBe('Hello ludwig');
});

test('Greeter SayHelloUpper', () => {
  expect(SayHelloUpper('ludwig')).toBe('Hello LUDWIG');
});

//  test that we can make an instance of an class StringTools
test('Test make instance of StringTools', () => {
  expect(new StringTools('TestString')).toBeInstanceOf(StringTools);
});
//  and not of an String (example)
test('Test make instance of StringTools', () => {
  expect(new StringTools('TestString')).not.toBeInstanceOf(String);
});