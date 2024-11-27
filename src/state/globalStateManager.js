export const statePropsEnum = {
  playerHp: "playerHp",
  isDoubleJumpUnlocked: "isDoubleJumpUnlocked",
  playerInBossFight: "playerInBossFight",
  isBossDefeated: "isBossDefeated",
};

// Estado inicial del juego
const initialState = {
  playerHp: 3,
  maxPlayerHp: 3,
  isDoubleJumpUnlocked: false,
  playerInBossFight: false,
  isBossDefeated: false,
};

function initStateManager() {
  const state = { ...initialState }; // Clonamos el estado inicial

  return {
    // Devuelve el estado actual como un objeto inmutable
    current() {
      return { ...state };
    },
    // Permite modificar una propiedad específica del estado
    set(property, value) {
      state[property] = value;
    },
    // Reinicia el estado al inicial
    reset() {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
    },
  };
}

export const state = initStateManager();
