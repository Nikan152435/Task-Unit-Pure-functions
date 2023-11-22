import indicator, { Warlock, Master, Witch } from '../app';

test("Определение состояния здоровья героя", () => {
  expect(indicator(Warlock)).toBe("Чародей healthy");
});

test("Определение состояния здоровья героя", () => {
  expect(indicator(Master)).toBe("Мастер wounded");
});

test("Определение состояния здоровья героя", () => {
  expect(indicator(Witch)).toBe("Ведьма critical");
});