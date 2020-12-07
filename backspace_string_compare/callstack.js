const one = () => {
  two()
}
const two = () => {
  return "Allo"
}

one()