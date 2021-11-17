import React, { useState, useEffect } from "react";

export default function FlashCard({
  titulo,
  descricao,
  showFlashTitle = true,
  onToggleFlashCard = null,
  id,
}) {
  //const [showTitulo, setShowTitulo] = useState(showFlashTitle);

  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
    //setShowTitulo(!showTitulo);
    // setShowTitulo((currentShowTitulo) => !currentShowTitulo);
  }

  // useEffect(() => {
  //   setShowTitulo(showFlashTitle);
  // }, [showFlashTitle]);

  const fonSizeClassName = showFlashTitle ? "text-xl" : "text-md";
  return (
    <div
      className={`shadow-lg m-2 p-4 w-80 h-48 cursor-pointer
       flex flex-row items-center ${fonSizeClassName} justify-center`}
      style={{ fontFamily: "'Roboto'" }}
      onClick={handleCardClick}
    >
      {showFlashTitle ? titulo : descricao}
    </div>
  );
}
