import { writable, get } from "svelte/store";
import { Conversation, User, type Message } from "./types";

// PROD: delete default data from stores
export const selfUser = writable<User>(new User("", "", "", "", []));
export const conversations = writable<Array<Conversation>>([new Conversation("", "", [], [])]);
export const currentConvo = writable<Conversation>(get(conversations)[0]);

/* 
[
  new Conversation("Test Conversation 1", undefined, [get(selfUser), get(selfUser)], [
    new Message(
      get(selfUser),
      0,
      "Lorem ipsum dolor sit amet."
    ),
    new Message(
      undefined,
      0,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iure magnam aut et recusandae. Dolorum expedita itaque tenetur commodi provident porro assumenda ipsam labore, quas enim molestiae est architecto sapiente."
    ),
  ]),
  new Conversation("Test Conversation 2", undefined, [get(selfUser), get(selfUser)], [
    new Message(
      get(selfUser),
      0,
      "Jag lära mig svenska darför att jag vill att åka till sverige nästa år"
    ),
    new Message(
      undefined,
      0,
      "Varför lära sig svenska?"
    ),
    new Message(
      get(selfUser),
      0,
      "Hallå! Jag mår mycket bra! Jag lärar mig svenska just nu"
    ),
    new Message(
      undefined,
      0,
      "Hejsan! Hur Mår du?"
    ),
  ]),
  new Conversation("Test Conversation 3", undefined, [get(selfUser), get(selfUser)], [
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
    new Message(
      get(selfUser),
      0,
      "Perhaps"
    ),
    new Message(
      undefined,
      0,
      "Frank Norris is cool"
    ),
  ]),
]
*/