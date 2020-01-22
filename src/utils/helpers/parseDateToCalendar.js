export const parseDateToCalendar = data => {
  const dataToParse = [...data];

  return dataToParse.map(item => {
    return {
      ...item,
      start: new Date(item.start),
      end: new Date(item.end)
    }
  });
};
