import Card from "./components/Card";
import Header from "./components/Header";
import "./sass/app.scss";
import data from "./data";

function App() {
  const deneme = "REACT";

  return (
    <div className="App">
      <Header />
      {
        data.map(( {id, name, job, img, comment} ) => (
          <Card key={id} name={name} job={job} img={img} comment={comment} />
        )  )
      }
    </div>
  );
}

export default App;
