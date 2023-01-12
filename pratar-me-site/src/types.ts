export class User {
  name: string;
  userName: string;
  icon : string;

  constructor(name, userName, icon) {
    this.name = name;
    this.userName = userName;
    this.icon = icon;
  }
}

export class Message {
  author:User;
  date:EpochTimeStamp;
  body:string;

  constructor(author, date, body) {
    this.author = author;
    this.date = date;
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
