let healthIndicator = "";
export const Warlock = {
  name: "Чародей",
  health: 70,
};
export const Master = {
  name: "Мастер",
  health: 30,
};
export const Witch = {
  name: "Ведьма",
  health: 10,
};

export default function indicator(hero) {
  if (hero.health > 50) {
    healthIndicator = " healthy";
  } else if ((hero.health <= 50) && (hero.health >= 15)) {
    healthIndicator = " wounded";
  } else {
    healthIndicator = " critical";
  }
  return hero.name + healthIndicator;
}

indicator(Master);