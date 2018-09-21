  const vegetarian = "Vegetarian Pizza"
  const hawaiian = "Hawaiian Pizza"
  const pepperoni = "Pepperoni Pizza"

  const pizzaPrice = 80

  //Put your Javscript code here:

  //Bot interaction

  //Welcome message, alert with a string
  alert("Hey! Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza")

  //Constant variable orderName which gives us a ordername
  const orderName = prompt("Enter the name of the pizza you want to order today ", "")

  //A function with an statement which checks if the pizza is on the menu or not
  const checkOrderName = (theOrderName) => {
    if (theOrderName != vegetarian && theOrderName != hawaiian && theOrderName != pepperoni) {
      alert("Sorry, we don't have that pizza")
      return false;
    } else { //ingen jämförelse
      return true;
    }
  }

  //Calling the function checkOrderName with variable orderName
  const res = checkOrderName(orderName)

  if (res) {
    const orderQuantity = prompt("How many " + orderName + " do you want? ")

    //A funciton which calculates the totalcost of how many pizzas we order
    const totalCost = () => {
      return orderQuantity * pizzaPrice
    }

    //Calling the function orderTotal with global variable
    const orderTotal = totalCost()

    //A function with an statement which checks hos long the cookingtime takes depending on the pizza quantity
    const calculateCookingTime = () => {
      if (orderQuantity <= 2) {
        return (10)
      } else if (orderQuantity >= 6) {
        return (20)
      } else {
        return (15)
      }
    }

    //Calling the function cookingTime with global variable
    const cookingTime = calculateCookingTime()
    alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. " + "The pizzas will take " + cookingTime + " minutes.")
  }
