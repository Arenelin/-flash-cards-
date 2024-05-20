export enum path {
  decks = '/decks',
  error = '/error',
  forgotPassword = '/forgot-password',
  newPassword = '/new-password',
  signIn = '/signIn',
  signUp = '/signUp',
}

// dynamic path

export const decksById = (id: string) => `${path.decks}/${id}`
