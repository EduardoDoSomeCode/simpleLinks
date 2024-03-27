import MainComponent from "./mainWrapperComponent";
import { useState } from "react";
import MainListCardReact from "./MainListCard";


const MainPresentationComponent = ({ linksToSend }) => {
  const [modeDisplay, setModeDisplay] = useState(true);

  const setStateToFalse = () => {
    setModeDisplay(true);
  };
  const setStateToTrue = () => {
    setModeDisplay(false);
  };

  return (
    <>
      <button onClick={setStateToFalse}>changeStateToFalse</button>
      <button onClick={setStateToTrue}>changeStateToTrue</button>

      {modeDisplay ? (
        <MainComponent links={linksToSend} />
      ) : (
        <MainListCardReact linksToRender={linksToSend} />
      )
      }
    </>
  );
};

export default MainPresentationComponent;
