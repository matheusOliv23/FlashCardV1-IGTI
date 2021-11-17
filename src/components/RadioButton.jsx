import { getNewId } from "../services/idService";

export default function RadioButton({
  id = getNewId,
  name,
  children: buttonDescription,
  btnChecked = false,
  onBtnClickRadio = null,
}) {
  function handleBtnChange() {
    if (onBtnClickRadio) {
      onBtnClickRadio();
    }
  }
  return (
    <div className="flex flex-row items-center">
      <input
        id={id}
        type="radio"
        name={name}
        checked={btnChecked}
        onChange={handleBtnChange}
      />
      <label htmlFor={id}>{buttonDescription}</label>
    </div>
  );
}
