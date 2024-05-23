export enum path {
  decks = '/decks',
  error = '/error',
  forgotPassword = '/forgot-password',
  newPassword = '/new-password',
  signIn = '/signIn',
  signUp = '/signUp',
}

export enum orderBy {
  CreatedBy = 'created',
  LastUpdated = 'updated',
  Name = 'name',
}
// dynamic path

export const decksById = (id: string) => `${path.decks}/${id}`
