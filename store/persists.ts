import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value)
    },
    removeItem() {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

export const authConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['user', 'isLoggedIn'],
}

export const articlesConfig = {
  key: 'articles',
  storage: storage,
  whitelist: ['total'],
}

export const allPersists = { authConfig, articlesConfig }
