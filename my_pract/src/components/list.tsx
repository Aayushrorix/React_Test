// // Code For list, keys, Time
import React, { useState, useEffect } from 'react';

function useTime() {
  const [time, setTime] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

interface MyPrintProps {
  name: string;
}

function MyPrint(props: MyPrintProps) {
  return <li> This is a {props.name} </li>;
}

export default function List() {
  const cars: string[] = ["BMW", "Volvo", "Swift", "Baleno"];
  const time: Date = useTime();

  // or if cars is an array of objects:
  // const cars = [
  //   { id: 1, name: "BMW" },
  //   { id: 2, name: "Volvo" },
  //   { id: 3, name: "Swift" },
  //   { id: 4, name: "Baleno" }
  // ];

  return (
    <>
      <h1> The Car List </h1>
      <ul>
        {cars.map((car, index) => (
          <MyPrint key={index} name={car} />
        ))}
        {/* If cars is an array of objects, use car.id as the key */}
        {/* cars.map((car) => <MyPrint key={car.id} name={car.name} />) */}
        {time.toLocaleTimeString()}
      </ul>
    </>
  );
}