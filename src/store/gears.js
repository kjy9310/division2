const gears = () => {
  const initialValues = {
    mask: {},
    chest: {},
    backpack: {},
    gloves: {},
    holster: {},
    kneepads: {},
  };
  const data = initialValues;

  const setItem = ((name, value) => {
    data[name] = value;
  });
  return { data, setItem };
};
const Gears = gears();
export default Gears;
