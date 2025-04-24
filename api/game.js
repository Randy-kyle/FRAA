export function getAllGames() {
  return [
    {
      id: 1,
      title: "Love Quest",
      category: "RPG",
      thumb: "/assets/images/love-quest.jpg"
    },
    {
      id: 2,
      title: "Strip Fighter",
      category: "Action",
      thumb: "/assets/images/strip-fighter.jpg"
    }
  ];
}

export function getGameDetail(id) {
  const games = getAllGames();
  return games.find(game => game.id == id);
}
