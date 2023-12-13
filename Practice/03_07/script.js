/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car = {
  name: "Ford",
  model: "F150",
  year: "2018",
  color: "Blue",
  engine: {
    cylinders: 6,
    size: 3.5,
    turbo: true,
  },
};
console.log(car);
console.log(car.engine);
