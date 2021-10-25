import { IoIosShuffle } from "react-icons/io";
import { IoRepeat } from "react-icons/io5";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import { MdRepeatOne } from "react-icons/md";
import { MdEqualizer } from "react-icons/md";
import { MdPauseCircleFilled } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { TiMediaPause } from "react-icons/ti";

export function MusicPlayerControls() {

  return (
    <div className="music_player--controls">
      <div className="music_player--controls--wrapper">
        <div className="music_player--controls_btn--group">
          <div className="music_player--controls_btn--group1">
            <IoIosShuffle fontSize="2em"/>
            <MdRepeatOne fontSize="2em"/>
          </div>
          <div className="music_player--controls_btn--group-main">
            <div className="btn-outer">
              <div className="btn-inner">
                <MdNavigateBefore fontSize="2em"/>
              </div>
            </div>
            <div className="btn-outer">
              <div className="btn-inner">
              <TiMediaPause fontSize="3em"/>
              </div>
            </div>
            <div className="btn-outer">
              <div className="btn-inner">
              <MdNavigateNext fontSize="2em"/>
              </div>
            </div>
          </div>
          <div className="music_player--controls_btn--group1">
            <IoRepeat fontSize="2em"/>
            <MdEqualizer fontSize="2em"/>
          </div>
        </div>
        <div className="progressBar--wrapper">
          <audio src="https://wynk.in/u/n9DVif4L6" preload="metadata"></audio>

          <div className="box">
          <input
            type="range"
            min="0"
            max="100"
            title="Player Status Bar"
            aria-label="Player Status Bar"
            className="music_player--controls-slider"
            value="52"
          />
          <div id="value" className="value"> </div>
        </div>
          <div className="time"><span>2:01:00</span><span>4:16:00</span></div>
        </div>
      </div>
      <div className="music_player--controls-pipe--wrapper">
        <IoRemoveOutline className="music_player--controls-pipe"
        fontSize="6rem"/>
      </div>
    </div>
  );
}
