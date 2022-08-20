import * as React from 'react';
import { useMemo, useState } from 'react';

export const UseMemoFactorialCounter = () => {
   const [a, setA] = useState<number>(3)
   const [b, setB] = useState<number>(3)
   let resultA = 1;
   let resultB = 1;

   resultA = useMemo(() => {
      let tempResultA = 1;
      for (let i = 1; i <= a; i++) {
         tempResultA *= i;
      }
      return tempResultA;
   }, [a])
   for (let i = 1; i <= b; i++) {
      resultB *= i;
   }

   return <>
      <hr />
      <input type={'number'} value={a} onChange={(e) => setA(+e.currentTarget.value)}></input>
      <input type={'number'} value={b} onChange={(e) => setB(+e.currentTarget.value)}></input>
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
      <hr />
   </>
}

const NewMessagesCounter = (props: { count: number }) => {
   return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
   console.log('USERS')
   return <div>
      {props.users.map((u, i) => <div key={i}>{u}</div>)}
   </div>
}

const Users = React.memo(UsersSecret)

export const LikeUseCallback = () => {
   console.log('Like UseCallback!')
   const [counter, setCounter] = useState(0);
   const [users, setUsers] = useState(['Alex', 'Dima', 'Misha', 'Den']);
   const newArray: Array<string> = useMemo(() => {
      let newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
      return newArray;
   }, [users]);
   const addUser = () => {
      let newUsers = [...users, 'Artem' + new Date().getTime()]
      setUsers(newUsers)
   }
   return <>
      <button onClick={() => { setCounter(counter + 1) }}>+</button>
      <button onClick={addUser}>add userss</button>
      {counter}
      <Users users={newArray} />
      <hr />
   </>
}
