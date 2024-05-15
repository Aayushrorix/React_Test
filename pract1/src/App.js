import logo from './logo.svg';
import './App.css';
import React,{useEffect ,useRef, useState} from 'react';
import Todo from './components/todo'


function App(){
  return(
    <Todo/>
  )
}



// const App = () => {
//   const [toggle, setToggle] = React.useState(true);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   return <Toggler toggle={toggle} onToggle={handleToggle} />;
// };

// const Toggler = ({ toggle, onToggle }) => {
//   return (
//     <div>
//       <button type="button" onClick={onToggle}>
//         Toggle
//       </button>

//       {toggle && <div>Hello React</div>}
//     </div>
//   );
// };

// function App() {
//   // const [count, setCount] = useState(0);
//   // const [calculation, setCalculation] = useState(0);

//   // useEffect(() => {
//   //   setCalculation(() => count * 2);
//   // }, [count]); // <- add the count variable here

//   // return (
//   //   <>
//   //     <p>Count: {count}</p>
//   //     <button onClick={() => setCount((c) => c + 1)}>+</button>
//   //     <p>Calculation: {calculation}</p>
//   //   </>
//   // );



//   // const [count, setCount] = useState(0);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setCount((count) => count + 1);
//   //   }, 1000);
//   // });

//   // return <h1>I've rendered {count} times!</h1>;

  

  
//   const [count, setCount] = useState(0);
//   const [showMsg, setShowMsg] = useState('none');
//   const [transactions, setTransaction] = useState([])
//   let [id,setId] = useState(1)
//   const [note, setNote] = useState('');

//   function inncrementer(){
//     setCount(count + 1)
//     console.log(count)
//   }

//   function decrementer(){
//     setCount(count - 1)
//     console.log(count)
//   }

//   function Pay(){
//     setShowMsg('block')
//     setCount(0)
//     setNote("")
//     setTimeout(()=>{
//       setShowMsg('none')
//     },2000)
//     setTransaction([...transactions, { id: id, amount: count, note: note }]);
//     setId(id + 1) 
//   }


//   useEffect(()=>{
//     document.querySelector('title').textContent = count;
//   },[count])

//   // useEffect(()=>{
//   //   setNote(note)
//   // },[note])

//   function ShowTransactions(props){
//     return <li> ID : {props.id}     Amount : {props.amount}     Note : {props.note}</li>
//   }
  
//   return (
//     <div className='App-header'>
//       <div>
//         <h1 style={{border:'1px solid white'}}> {count} </h1>
//       </div>
//       <div>
//         <button onClick={decrementer} style={{margin:'20px'}} disabled={count === 0}>
//           -
//         </button>
//         <button onClick={inncrementer} style={{margin:'20px'}}>
//           +
//         </button>
//       </div>
//       <hr/>
//       <input placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)}/>
//       <button onClick={Pay} disabled={count===0}>Pay</button>
//       <div style={{display:showMsg}}>
//         <h3>Payed Successfully!</h3>
//       </div>
//       <hr/>
//       <div>
//         <h2> Transactions</h2>
//         <ul>
//           {transactions.map((transaction, index)=> (
//             <ShowTransactions id={transaction.id} amount={transaction.amount} note={transaction.note}/>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );

//   // const [color, setColor] = useState("red");

//   // return (
//   //   <>
//   //     <h1 style={{color:color}}>My favorite color is {color}!</h1>
//   //     <button
//   //       type="button"
//   //       style={{color:"blue"}}
//   //       onClick={() => setColor("blue")}
//   //     >Blue</button>
//   //     <button
//   //       type="button"
//   //       style={{color:"red"}}
//   //       onClick={() => setColor("red")}
//   //     >Red</button>
//   //     <button
//   //       type="button"
//   //       style={{color:"pink"}}
//   //       onClick={() => setColor("pink")}
//   //     >Pink</button>
//   //     <button
//   //       type="button"
//   //       style={{color:"green"}}
//   //       onClick={() => setColor("green")}
//   //     >Green</button>
//   //   </>
//   // );
// }

export default App;



// import logo from './logo.svg';
// import './App.css';
// import React,{useRef} from 'react';




// function App() {
//   let count = useRef(0)

//   function inncrementer(){
//     count.current = count.current + 1
//     alert(count.current)
//   }

//   function decrementer(){
//     if(count.current === 0){
//       count.current = 0
//     }
//     else{
//       count.current = count.current - 1
//     }
//     alert(count.current)
//   }

  
//   return (
//     <div className="App-header">
//       <div>
//         <h1> {count.current} </h1>
//       </div>
//       <div>
//         <button onClick={decrementer}>
//           -
//         </button>
//         <button onClick={inncrementer}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
