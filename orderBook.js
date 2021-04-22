const reconcileOrder = (existingBook, incomingOrder) => {

    for (let i = 0; i < existingBook.length; i++) {
    let order = existingBook[i]

    // line 7 checking for buy/sell

    if (order.type !== incomingOrder.type) {
      console.log(order, incomingOrder)

      // checking for same quantity and price

      if (
        order.quantity === incomingOrder.quantity &&
        order.price === incomingOrder.price
      ) {
        console.log(order, incomingOrder)
        existingBook.splice(i, 1)
        i--
        incomingOrder = {}
      }
    }
  }
  if (incomingOrder.type) {
    existingBook.push(incomingOrder)
  }

  return existingBook
}

module.exports = reconcileOrder
