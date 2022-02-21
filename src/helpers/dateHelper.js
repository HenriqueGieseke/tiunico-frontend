const dateHelper = (date) => {
  const dateRegular = new Date(date).toLocaleDateString();

  const dateMonthWord = new Date(date).toLocaleString('default', {
    month: 'long',
  });

  const yearNumber = new Date(date).getFullYear();

  const dateTime = new Date(date).toLocaleTimeString();
  const finalDateTime = dateTime.substring(0, dateTime.length - 3);

  const dayNumber = new Date(date).getDate();

  const weekDayAbbreviation = () => {
    const dateWeekDay = new Date(date).toLocaleDateString('default', {
      weekday: 'long',
    });
    const abbreviation = dateWeekDay.slice(0, 3);
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const finalAbbreviation = capitalizeFirstLetter(abbreviation);

    return finalAbbreviation;
  };
  const weekDay = weekDayAbbreviation();

  const monthNumber = () => {
    let month = new Date(date).getMonth();
    month++;
    const monthString = String(month);
    if (monthString.length === 1) {
      return `0${monthString}`;
    } else {
      return monthString;
    }
  };
  const finalMonthNumber = monthNumber();

  return {
    dateRegular,
    dateMonthWord,
    weekDay,
    finalDateTime,
    dayNumber,
    finalMonthNumber,
    yearNumber,
  };
};

export { dateHelper };
