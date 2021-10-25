import "./styles.css";
import {
  MusicPlayerWindow,
  MusicPlayerControls
} from "./components/index";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <MusicPlayerWindow />
        <MusicPlayerControls />
      </div>
    </div>
  );
}