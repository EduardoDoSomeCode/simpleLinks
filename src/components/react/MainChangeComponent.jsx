import MainComponent from "./mainWrapperComponent";
import { useState } from "react";
import MainListCardReact from "./MainListCard";
import "../css/buttons.css";

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
      <div style={{ display: "flex",  justifyContent:"flex-end" , paddingBottom:"1rem", paddingTop:"1rem"}}>
        <button
          onClick={setStateToFalse}
          className="btn btn-left_rounded"
        >
          <img src={"/simpleLinks/rectsvg.svg"} className="btn-img" />
        </button>
        <button
          onClick={setStateToTrue}
          className="btn btn-right_rounded"

        >
          <img src={"/simpleLinks/LL.svg"} className="btn-img" />
        </button>
      </div>
      <span>
    
</span>
      {modeDisplay ? (
        <MainComponent links={linksToSend} />
      ) : (
        <MainListCardReact linksToRender={linksToSend} />
      )}


    </>
  );
};

export default MainPresentationComponent;
