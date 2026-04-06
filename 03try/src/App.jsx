import './App.css';
import Card from '../components/Card';
import Card1 from '../components/Card1';
function App() {
  // Tailwind CSS and props passing

  return (
    <>
      <h1>Hello CSS</h1>
      <Card userName="sager" btnText="Visit me" />
      <Card userName="ujjwal" btnText="Visit me" />
      <Card1 userName="sager" btnText="Visit me" />
      <Card1 userName="ujjwal" btnText="Visit me" />
     
    </>
  );
}

export default App;