import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightblue',
    height: '250px',
    width: '200px',
    padding: '10px',
    // float:'left',
    // display:'block'
  }
  const nayoks = ['Razzak khan', 'Jasim pk', 'Manna mia', 'Muhin', 'Minal']
  const products = [
    { name: 'Photoshop', Price: '$1200' },
    { name: 'PDF Reader', Price: '$1150' },
    { name: 'ADD killer', Price: '$2100' },
    { name: 'Mosquto killer', Price: '$7500' },
    { name: 'Vangga plate', Price: '$7100' },
    { name: 'Illustrator', Price: '$1800' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>i'm a react persone</h1>

        <Counter></Counter>

        <ul style={productStyle}>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        <ul style={productStyle}>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count+1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('Calling Effect')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>

    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightblue',
    height: '250px',
    width: '200px',
    padding: '10px',
    // float:'left',
    // display:'block'
  }
  const { name, Price } = props.product;
  // console.log(name, Price)
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>Price:{Price}</h5>
      <button >Buy now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{
      border: '2px solid yellow',
      width: '400px',
      margin: '20px',
      padding: '20px',
      borderRadius: '20px'
    }}>
      <h4>My Name: {props.name}</h4>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
