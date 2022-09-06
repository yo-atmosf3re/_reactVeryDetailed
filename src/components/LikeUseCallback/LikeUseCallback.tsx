
import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';

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

export const LikeUseCallback = () => {
   console.log('Like UseCallback!')
   const [counter, setCounter] = useState(0);
   const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);

   const memoizedAddBook = useMemo(() => {
      return () => {
         console.log(books)
         let newUsers = [...books, 'Angular' + new Date().getTime()]
         setBooks(newUsers)
      }
   }, [books]);

   const memoizedAddBook2 = useCallback(() => {
      console.log(books)
      let newUsers = [...books, 'Angular' + new Date().getTime()]
      setBooks(newUsers)
   }, [books]);
   return <>
      <button onClick={() => { setCounter(counter + 1) }}>+</button>
      {counter}
      <Books addBook={memoizedAddBook2} />
      <hr />
   </>
}

type BookSecretPropsType = {
   addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
   console.log('Books')
   return <div>
      <button onClick={props.addBook}>add userss</button>
   </div>
}

const Books = React.memo(BooksSecret)



