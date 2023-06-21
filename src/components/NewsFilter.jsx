import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { Topics } from "../components/Topics";
import "./style.css";
export const NewsFilter = ({ setTopic, topic }) => {
  const [chooseOption, setChooseOption] = useState("");
  useEffect(() => {
    setChooseOption(topic);
  }, [topic]);
  return (
    <form>
      <Topics value={chooseOption} setValue={setTopic} />
    </form>
  );
};

NewsFilter.propTypes = {
  topic: propTypes.string.isRequired,
  setTopic: propTypes.func.isRequired,
};
