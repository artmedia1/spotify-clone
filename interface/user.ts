import Playlist from "./playlist";

export default interface User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    playlists?: Playlist[];  
  }
  