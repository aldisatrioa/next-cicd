import { useState } from 'react';
import Card from '../components/card'

export default function Home() {

  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');

  const addTodo = () => {
    if (!title) {
      alert('Isi terlebih dahulu')
      return
    }
    setItems([...items, {
      id: Math.random() * 123,
      title: title,
      description: 'Test'
    }])
    setTitle('')
  }

  const deleteTodo = (id) => {
    setItems(items.filter((e) => e.id != id))
  }

  return (
    <div>
      <div className='flex p-8 justify-center space-x-2'>
        <input data-testid='input' onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder='Todo..' className='rounded-lg p-2 bg-stale-200 border border-indigo-400 focus:outline-4 outline-indigo-600' />
        <button data-testid='add-btn' onClick={addTodo} className='bg-indigo-500 p-4 rounded-xl text-white focus:outline-2 outline-indigo-500'>Add</button>
      </div>
      {items.length > 0 ? (<div className="grid grid-rows-4 grid-flow-col gap-4 p-4">
        {items.map((props) => (
          <Card key={props.id}
            title={props.title}
            description={props.description}
            onDelete={() => deleteTodo(props.id)} />
        ))}
      </div>) : (<h1 className='text-2xl text-center' role='empty-message'>No items found..</h1>)}

    </div>
  )
}
