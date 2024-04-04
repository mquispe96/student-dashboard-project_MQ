const customSort = arr => arr.sort((a, b) => {
    const seasonOrder = { Winter: 0, Fall: 1, Summer: 2, Spring: 3 };
    const [seasonA, yearA] = a.split(' ');
    const [seasonB, yearB] = b.split(' ');
    if (yearA !== yearB) {
      return Number(yearB) - Number(yearA);
    } else {
      return seasonOrder[seasonA] - seasonOrder[seasonB];
    }
  });

  export default customSort;