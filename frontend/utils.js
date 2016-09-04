const formatScore = score => (Math.round(parseInt(score, 10)))/10

const capitalise = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

export {
  formatScore,
  capitalise
}
