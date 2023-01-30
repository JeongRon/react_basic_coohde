import "./App.css";

function Header() {
  return (
    <a href="/">
      <h2>WEB</h2>
    </a>
  );
}
function Nav() {
  return (
    <ol>
      <li>
        <a href="/html">html</a>
      </li>
      <li>
        <a href="/css">css</a>
      </li>
      <li>
        <a href="/js">js</a>
      </li>
    </ol>
  );
}
function Article() {
  return (
    <div>
      <h3>WEB</h3>
      <p>Web descriptions</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
