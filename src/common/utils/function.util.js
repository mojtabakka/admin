export function AddMinutesToDate(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

export function isEmptyArray(data) {
  return !(isArray(data) ? data.length : false);
}

export function isEmptyObject(data) {
  return !(isObject(data) ? Object.keys(data).length : false);
}
export function isObject(data) {
  return data !== null && typeof data === "object" && !isArray(data);
}
export const { isArray } = Array;

export function groupBy(list, key) {
  const result = {};
  list.forEach((item) => {
    const changeResultToArray = Object.keys(result).map((key) => [
      key,
      result[key],
    ]);
    const findKey = changeResultToArray.find((data) => {
      return data[0] === item[key];
    });

    if (!findKey) {
      result[item[key]] = [item];
    } else {
      result[item[key]].push(item);
    }
  });
  return Object.keys(result).map((key) => {
    return { [key]: result[key] };
  });
}

export function isFunction(data) {
  return typeof data === "function";
}
