export default function Button({ children: description, onBtnClick = null }) {
  function handleBtnClick() {
    if (onBtnClick) {
      onBtnClick();
    }
  }

  return (
    <button className="bg-blue-200 p-2 m-1 rounded-md" onClick={handleBtnClick}>
      {description}
    </button>
  );
}
