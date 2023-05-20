import { Card } from "../UI/Card";
import { MealItems } from "../MealItems/MealItems";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Fish",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chicken",
    description: "Delicious grilled chicken",
    price: 16.99,
  },
  {
    id: "m3",
    name: "Pasta",
    description: "Classic pasta with tomato sauce",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Salad",
    description: "Fresh and healthy salad",
    price: 9.99,
  },
  {
    id: "m5",
    name: "Burger",
    description: "Juicy beef patty with toppings",
    price: 14.99,
  },
  {
    id: "m6",
    name: "Pizza",
    description: "Delicious cheesy pizza",
    price: 18.99,
  },
];

export const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItems
    // id={meal.id}
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className="meals max-w-[60rem] w-[90%] my-[2rem] mx-auto">
      <Card>
        <ul className=" list-none m-0 p-0">{mealList}</ul>
      </Card>
    </section>
  );
};
