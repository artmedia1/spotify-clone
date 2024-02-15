import User from "./user";
import Playlist from "./playlist";
import Artist from "./artist";

export default interface Song {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    artist: Artist;
    artistId: number;
    playlists: Playlist[];
    duration: number;
    url: string;
  }
  