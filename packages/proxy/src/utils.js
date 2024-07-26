export function removeList(list, value) {
  const index = list.findIndex(item => item === value)
  if (index === -1) return
  list.splice(index, 1)
}
