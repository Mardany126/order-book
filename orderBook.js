const reconcileOrder = (existingBook, incomingOrder) => {
  let matchingOrder = null

  for (i = 0; i < existingBook.length; i++) {
    let order = existingBook[i]
    if (order.type !== incomingOrder.type) {
      console.log(order, incomingOrder)
    }
  }

  existingBook.push(incomingOrder)
  return existingBook
}

module.exports = reconcileOrder
