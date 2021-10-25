import songCover from "../../assets/images/song-img.png";
import { MdPlaylistAdd } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { MdShare } from 'react-icons/md'

export function MusicPlayerWindow() {
  return (
    <div className="music_player--ui">
      <div className="music_player--ui--left">
        <img src={songCover} alt="Purple Haze" />{" "}
      </div>

      <div className="music_player--ui--right">
        <small style={{ color: "#9E9E9E" }}> Now Playing </small>

        <div className="song-details">
          <h1 className="song-title"> Purple Haze </h1>
          <h3 className="song-singer"> Jimi Hendrix </h3>
          <p className="song-album"> Woodstock </p>
        </div>

        <div className="music_player--ui_btn-group">
          <button
            title="Like"
            aria-label="Like"
            className="music_player--ui_btn--icons btn--like"
          >
            <MdFavorite color="#6941CA" fontSize="2em"/>
          </button>
          <button className="music_player--ui_btn--icons">
            <MdPlaylistAdd  fontSize="2em"/>
          </button>
          <button className="music_player--ui_btn--icons">
            <MdShare  fontSize="2em"/>
          </button>
        </div>
      </div>
    </div>
  );
}
