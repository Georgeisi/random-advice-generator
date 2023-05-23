import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";

function App() {
  // hooks
  // useState

  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Asynchronous
    //
    // fetch("https://api.adviceslip.com/advice")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
    let getData = async () => {
      let res = await fetch("https://api.adviceslip.com/advice");
      let finalRes = await res.json();
      console.log(finalRes);
      setAdvice(finalRes);
      setLoading(false);
    };
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  return (
    <div className="App">
      {!loading && <Homepage adviceData={advice} />}
      {loading && <Loading  newLoading={loading}/>}
    </div>
  );
}

export default App;
