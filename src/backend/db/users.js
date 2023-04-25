import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "test",
    lastName: "123",
    email: "test123@gmail.com",
    password: "test123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];

/* {
"firstName": "Adarsh",
    "lastName": "Balika",
    "email": "adarshbalika@gmail.com",
    "password": "adarshbalika",
} */