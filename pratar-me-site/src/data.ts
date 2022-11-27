import { writable } from "svelte/store";
import { User, Conversation, Message } from "./types";

// PROD: delete default data from stores
export const selfUser = writable<User>(
  new User("Test User", "UserTest@instance.pratar", undefined)
);
export const friends = writable<Array<User>>();
export const conversations = writable<Array<Conversation>>([
  new Conversation("Test Conversation", undefined, undefined, [
    new Message(
      selfUser,
      0,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iure magnam aut et recusandae. Dolorum expedita itaque tenetur commodi provident porro assumenda ipsam labore, quas enim molestiae est architecto sapiente."
    ),
  ]),
]);
