export const setItemInStorage = (name, data) => localStorage?.setItem(name, JSON.stringify(data))

export const getItemFromStorage = (name) => localStorage?.getItem(name)

export const getParsedItemFromStorage = (name) => JSON.parse(localStorage?.getItem(name))

export const removeItemFromStorage = (name) => localStorage?.removeItem(name)
