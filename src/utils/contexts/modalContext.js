import React, { createContext, useEffect, useState } from "react";

export const ModalContext = createContext('');

export function ModalContextProvider({ children }) {
  const [modalCard, setModalCard] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const closeModal = () => {
    setModalActive(false);
    setModalCard(null);
  };

  useEffect(() => {
    if (modalCard) {
      setModalActive(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalCard, modalActive]);

  return (
    <ModalContext.Provider
      value={{ modalCard, setModalCard, modalActive, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}
