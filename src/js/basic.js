export function checkHealth(entity) {
  if (entity.health > 50) {
    return 'healthy';
  } if ((entity.health > 15) && (entity.health < 50)) {
    return 'wounded';
  }
  return 'critical';
}

export function sortListHeroes(lst) {
  return lst.sort((a, b) => b.health - a.health);
}
