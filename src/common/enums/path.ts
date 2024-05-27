export enum path {
  base = '/',
  cards = '/cards',
  decks = '/decks',
  error = '/error',
  forgotPassword = '/forgot-password',
  newPassword = '/new-password',
  profile = '/profile',
  signIn = '/signIn',
  signUp = '/signUp',
}

// dynamic path

export const dynamicPathDeckById = (deckId: string) => `v1/${path.decks}/${deckId}` //get & post & delete
export const dynamicPathCardsInDeck = (deckId: string) => `v1/${path.decks}/${deckId}/cards` //get & post
export const dynamicPathLearnCardInDeck = (deckId: string) => `v1/${path.decks}/${deckId}/learn` //get & post

export const dynamicPathCardById = (cardId: string) => `v1/${path.cards}/${cardId}` //get & post & delete
