export enum path {
  base = '/',
  decks = '/decks',
  error = '/error',
  forgotPassword = '/forgot-password',
  newPassword = '/new-password',
  profile = '/profile',
  signIn = '/signIn',
  signUp = '/signUp',
}

// dynamic path

export const dynamicPathDeckById = (id: string) => `${path.decks}/${id}`
