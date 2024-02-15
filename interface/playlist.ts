import User from "./user";
import Song from "./song";

export default interface Playlist {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    songs: Song[]; 
    user: User;
    userId: number;
  }
  