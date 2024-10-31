import Card from './component/Card.jsx'
import Button from './component/button.jsx'


function App() {
  

  return (
    <>
      <Button></Button>
      <div className="CardContainor">
        <Card username="Chandu" clickhere="ClickMe"/>
        <Card username="Shweta" clickhere="ClickMe"/>
      </div>
    </>
  )
}

export default App
