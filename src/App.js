import { useState } from "react";
import "./App.css";

function Header(props) {
  return (
    <a
      href="/"
      onClick={(event) => {
        event.preventDefault();
        props.onChangeId();
      }}
    >
      <h2>WEB</h2>
    </a>
  );
}
function Nav(props) {
  const lst = [];
  for (let i = 1; i < props.topics.length; i++) {
    let t = props.topics[i];
    lst.push(
      <li key={t.title}>
        <a
          href={"/read/" + t.title}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeId(t.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return <ol>{lst}</ol>;
}
function Article(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
function App() {
  const [now_id, set_id] = useState(0);
  const topics = [
    { id: 0, title: "web", desc: "web is ..." },
    { id: 1, title: "html", desc: "html is ..." },
    { id: 2, title: "css", desc: "css is ..." },
    { id: 3, title: "js", desc: "js is ..." },
  ];
  return (
    <div>
      <Header
        onChangeId={() => {
          set_id(0);
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeId={(id) => {
          set_id(id);
        }}
      ></Nav>
      <Article
        title={topics[now_id].title}
        desc={topics[now_id].desc}
      ></Article>
    </div>
  );
}

export default App;
