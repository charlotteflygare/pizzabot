const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

//Bot interaction
alert("Hey! Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza")

const pizzaName = [vegetarian, hawaiian, pepperoni]

const orderName =  prompt("Enter the name of the pizza you want to order today ", "")


const checkPizza = (theOrderName) => {
  if (theOrderName != vegetarian && theOrderName != hawaiian && theOrderName != pepperoni) {
    alert("Sorry, we don't have that pizza")
    return false;
  } else  {  //ingen jämförelse
    return true;
  }
}

const res = checkPizza(orderName)

if (res) {
const orderQuantity = prompt("How many " + orderName + " do you want? ")

//Vi anväder globala variabler
const calculateOrderTotal = () => {
  return orderQuantity * pizzaPrice
}

const orderTotal =  calculateOrderTotal()


const calculateCookingTime = () => {
    if (orderQuantity <= 2) {
      return(10)
  }
    else if (orderQuantity >= 6) {
      return(20)
}   else {
      return(15)
}
}

const cookingTime = calculateCookingTime()
alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. " + "The pizzas will take" + cookingTime + " minutes.")

}
