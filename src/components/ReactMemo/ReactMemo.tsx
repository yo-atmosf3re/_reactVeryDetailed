import React, { useState } from "react";

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

export const Example = () => {
   console.log('EXAMPLE')
   const [counter, setCounter] = useState(0);
   const [users, setUsers] = useState(['Alex', 'Dima', 'Misha', 'Den']);
   const addUser = () => {
      let newUsers = [...users, 'Artem' + new Date().getTime()]
      setUsers(newUsers)
   }
   return <>
      <button onClick={() => { setCounter(counter + 1) }}>+</button>
      <button onClick={addUser}>add userss</button>
      <NewMessagesCounter count={counter} />
      <Users users={users} />
   </>
}