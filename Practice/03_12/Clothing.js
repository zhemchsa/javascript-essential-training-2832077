/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Clothing {
    constructor(
        // Defines parameters:
        name,
        color,
        size,
        material,
        price,
        quantity
    ) {
        // Define properties:
        this.name = name;
        this.color = color;
        this.size = size;
        this.material = material;
        this.price = price;
        this.quantity = quantity;
    }
    buyClothing(quantity) {
        this.quantity = quantity;
    }
    newPrice(price) {
        this.price = price;
    }

}
export default Clothing;