export default function orderByProps(pers, sortObj) {
  const arrayFromArguments = [];
  const arrayNotFromArguments = [];

  for (const key in pers) {
    if (sortObj.includes(key)) {
      arrayFromArguments.push({ key, value: pers[key] });
    } else {
      arrayNotFromArguments.push({ key, value: pers[key] });
    }
  }

  arrayNotFromArguments.sort((a, b) => ((a.key > b.key) ? 1 : -1));
  return [...arrayFromArguments, ...arrayNotFromArguments];
}
