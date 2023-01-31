import { useState } from "react";
import "./App.css";

function Header(props) {
  return (
    <a
      href="/"
      onClick={(event) => {
        event.preventDefault();
        props.onChangeId();
        props.onChangeMode("Read");
      }}
    >
      <h2>{props.title}</h2>
    </a>
  );
}
function Nav(props) {
  const lst = [];
  for (let i = 1; i < props.topics.length; i++) {
    let t = props.topics[i];
    lst.push(
      <li key={t.id}>
        <a
          href={"/read/" + t.title}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeId(t.id);
            props.onChangeMode("Read");
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return <ol>{lst}</ol>;
}
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const update_title = event.target.title.value;
        const update_body = event.target.body.value;
        props.onResult(update_title, update_body);
      }}
    >
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="Update" />
      </p>
    </form>
  );
}
function Article(props) {
  let content = null;
  if (props.mode === "Read") {
    content = (
      <div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    );
  } else if (props.mode === "Create") {
    content = (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    );
  } else if (props.mode === "Update") {
    content = (
      <Update
        title={props.title}
        desc={props.desc}
        onResult={(_title, _desc) => {
          props.onUpdate(_title, _desc);
        }}
      ></Update>
    );
  }
  return content;
}
function Mode(props) {
  let content = null;
  if (props.mode === "Read") {
    if (props.id === 0) {
      content = (
        <input
          type="button"
          value="Create"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode("Create");
          }}
        ></input>
      );
    } else {
      content = (
        <div>
          <input
            type="button"
            value="Update"
            onClick={(event) => {
              event.preventDefault();
              props.onChangeMode("Update");
            }}
          ></input>
          <input
            type="button"
            value="Delete"
            onClick={(event) => {
              event.preventDefault();
              props.onChangeMode("Delete");
            }}
          ></input>
        </div>
      );
    }
  }
  return content;
}
function App() {
  const [now_mode, set_mode] = useState("Read");
  const [now_id, set_id] = useState(0);
  const [topics, set_topics] = useState([
    { id: 0, title: "Web", desc: "web is ..." },
    { id: 1, title: "html", desc: "html is ..." },
    { id: 2, title: "css", desc: "css is ..." },
    { id: 3, title: "js", desc: "js is ..." },
  ]);
  return (
    <div>
      <Header
        title={topics[0].title}
        onChangeId={() => {
          set_id(0);
        }}
        onChangeMode={(mode) => {
          set_mode(mode);
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeId={(id) => {
          set_id(id);
        }}
        onChangeMode={(mode) => {
          set_mode(mode);
        }}
      ></Nav>

      <Article
        mode={now_mode}
        title={topics[now_id].title}
        desc={topics[now_id].desc}
        onCreate={(_title, _desc) => {
          const tmp_topics = [...topics];
          const _id = topics.length;
          tmp_topics.push({ id: _id, title: _title, desc: _desc });
          set_topics(tmp_topics);
          set_id(_id);
          set_mode("Read");
        }}
        onUpdate={(_title, _desc) => {
          const tmp_topics = [...topics];
          tmp_topics[now_id].title = _title;
          tmp_topics[now_id].desc = _desc;
          set_topics(tmp_topics);
          set_mode("Read");
        }}
      ></Article>
      <Mode
        id={now_id}
        mode={now_mode}
        onChangeMode={(mode) => {
          set_mode(mode);
          if (mode === "Delete") {
            const tmp_topics = [];
            for (let i = 0; i < topics.length; i++)
              if (topics[i].id !== now_id) tmp_topics.push(topics[i]);
            for (let i = 0; i < tmp_topics.length; i++) tmp_topics[i].id = i;
            set_topics(tmp_topics);
            set_id(0);
            set_mode("Read");
          }
        }}
      ></Mode>
    </div>
  );
}

export default App;
