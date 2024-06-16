export const getNextSongId = (() => {
  let initSongId: number = 43;

  const newId = () => {
    let convertIdToString = initSongId.toString();
    initSongId++;
    return convertIdToString;
  };

  return newId;
})();
