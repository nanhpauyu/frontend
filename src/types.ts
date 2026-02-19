export interface People {
  id: string;
  name: string;
  age: string;
  intro: string;
  location: string;
  imageUrl: string;
  like: boolean;
  isOnline: boolean;
  match:boolean;
  messages?: Message[];
}
export interface PeopleList {
  peopleList: People[];
}

export interface CardProps {
  name: string;
  age: string;
  intro: string;
  location: string;
  imageUrl: string;
}

export interface AvatarProps {
  name: string;
  isOnline: boolean;
  imageUrl: string;
  size: number;
}

export interface Message {
  id: string;
  sender:string;
  text: string;
  timestamp: string;
  isRead: boolean;
}

export interface MessageList{
  messageList:Message[]
}