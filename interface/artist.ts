import Song from "./song";

export default interface Artist {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    songs: Song[];
    name: string;
  }
  