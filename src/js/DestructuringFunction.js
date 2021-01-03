export default function destructuringFunction(object) {
  const { special } = object;

  return special.map((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    return {
      id, name, icon, description,
    };
  });
}
