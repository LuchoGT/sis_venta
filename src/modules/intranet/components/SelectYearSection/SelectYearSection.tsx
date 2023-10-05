import './SelectYearSection.scss'

export const SelectYearSection = () => {
  return (
    <select name="year" id="year" className="select-year">
      <option value="">Año y Sección</option>
      <option value="volvo">1</option>
      <option value="saab">2</option>
      <option value="opel">3</option>
      <option value="audi">4</option>
    </select>
  );
};
