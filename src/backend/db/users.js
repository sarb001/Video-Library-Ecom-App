import {v4 as uuid} from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "testuser",
    lastName: "singh",
    email: "testuser@gmail.com",
    password: "testuser@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
