import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEl, appEl, resetEl } from "../../store/actions/action";

const MainPage = () => {
  const dispatch = useDispatch();
  const list = useSelector((s) => s.list);
  const listEl = useSelector((s) => s.listEl);
  const [text, setText] = useState("");
  const [app, setApp] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <input
        type="text"
        onChange={(e) => {
           
          setApp(e.target.value);
        }}
        value={app}
      />
      <button
        onClick={() => {
       
          dispatch(addEl(text));
          dispatch(appEl(app));
          setText("");
          setApp("");
        }}
      >
        add
      </button>
      <button onClick={() => {dispatch(resetEl())}}>clear list</button>
      <header style={{ display: "flex" }}>
        {list.map((el) => {
          return <div>{el}</div>;
        })}
        {listEl.map((ele) => {
          return <div style={{ paddingLeft: "5px" }}>{ele}</div>;
        })}
      </header>
    </div>
  );
};

export default MainPage;
