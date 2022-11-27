export class User {
  name: string;
  userName: string;
  pfp: string;

  constructor(name, userName, pfp) {
    this.name = name;
    this.userName = userName;
    this.pfp = pfp;
  }
}

export class Message {
  author:User;
  timestamp:number;
  body:string;

  constructor(author, timestamp, body) {
    this.author = author;
    this.timestamp = timestamp;
    this.body = body;
  }
}

export class Conversation {
  title:string;
  icon:string;
  members:Array<User>;
  messages:Array<Message>;

  constructor(title, icon, members, messages) {
    this.title = title;
    this.icon = icon;
    this.members = members;
    this.messages = messages
  }
}
