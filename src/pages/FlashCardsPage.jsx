import React, { useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import RadioButton from "../components/RadioButton";
import { todosFlashCards } from "../data/todosFlashCards";
import { helperShuffleArray } from "../helpers/arrayHelpers";

export default function FlashCardsPage() {
  const [cards, setCards] = useState(todosFlashCards);
  const [showTitle, setShowTitle] = useState(true);

  function handleBtnClick() {
    const embaralhados = helperShuffleArray(cards);
    setCards(embaralhados);
  }

  function handleRadioTitle() {
    // setShowTitle(true);
    const updatedCards = [...cards].map((card) => ({
      ...card,
      showTitle: true,
    }));

    setCards(updatedCards);
    setShowTitle(true);
  }
  function handleRadioDescri() {
    //setShowTitle(false);
    const updatedCards = [...cards].map((card) => ({
      ...card,
      showTitle: false,
    }));

    setCards(updatedCards);
    setShowTitle(false);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...cards];
    const cardIndex = updatedCards.findIndex((card) => cardId === card.id);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;

    setCards(updatedCards);
  }

  return (
    <div>
      <div>
        <Header>FlashCards</Header>
        <Main>
          <div className="text-center mb-4">
            <Button onBtnClick={handleBtnClick}>Embaralhar cards</Button>
          </div>

          <div className="flex flex-row items-center justify-center space-x-4 m-4">
            <RadioButton
              id="idShowTitulo"
              name="showInfo"
              btnChecked={showTitle}
              onBtnClickRadio={handleRadioTitle}
            >
              Mostrar título
            </RadioButton>
            <RadioButton
              id="idShowDescri"
              name="showInfo"
              btnChecked={!showTitle}
              onBtnClickRadio={handleRadioDescri}
            >
              Mostrar descrição
            </RadioButton>
          </div>

          <FlashCards>
            {cards.map(({ id, title, description, showTitle }) => {
              return (
                <FlashCard
                  key={id}
                  id={id}
                  titulo={title}
                  descricao={description}
                  showFlashTitle={showTitle}
                  onToggleFlashCard={handleToggleFlashCard}
                />
              );
            })}
          </FlashCards>
        </Main>
      </div>
    </div>
  );
}
