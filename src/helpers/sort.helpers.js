const arraySort = (array) => {
  if (!!array.length) {
    array.sort((a, b) => a.registration_timestamp > b.registration_timestamp);
      return array
    }
  return array;
};

export default arraySort