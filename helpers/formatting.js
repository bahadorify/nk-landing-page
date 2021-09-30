/**
 * Format a currency amount
 * @param {Number} amount the amount in some currency
 * @param {Object} options formatting options
 *
 */
export function formatAmount(
  amount,
  options = {
    delimiter: " ",
    hasTrailingComma: false
  }
) {
  // round number to nearest int and convert to str
  const str = `${Math.ceil(amount)}`;

  // slice number in groups of three digits
  // starting from the remainder of its length by 3
  const strArray = [];
  let idx = str.length % 3;
  strArray.push(str.slice(0, idx));

  let digits = str.slice(idx, idx + 3);
  while (digits) {
    strArray.push(digits);
    idx = idx + 3;
    digits = str.slice(idx, idx + 3);
  }
  if (!strArray[0]) strArray.shift();

  // use formatting options
  const { delimiter, hasTrailingComma } = options;
  let formatted = strArray.join(delimiter);
  if (hasTrailingComma) formatted = formatted + ",-";

  return formatted;
}

export function unformat(amount) {
  const unformatted = amount.split(" ").join("");
  return Number(unformatted);
}

export function europify(number) {
  return `${number}`.replace(".", ",");
}

export function range(start, end, step = 1) {
  let list = [];
  for (let i = start; i <= end; i += step) {
    list.push(i);
  }
  return list;
}
