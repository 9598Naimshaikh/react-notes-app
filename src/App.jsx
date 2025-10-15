import { Plus, X } from 'lucide-react';
import { useState } from 'react';

export default function App() {

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // alert("Form Submitted");

    let copyTask = [...tasks];
    copyTask.push({ title, desc });
    setTasks(copyTask);


    setTitle("");
    setDesc("");
  }

  const deleteHandler = (index) => {
    let copyTask = [...tasks];
    copyTask.splice(index, 1);
    setTasks(copyTask);
  }

  return <>
    <div className="relative bg-zinc-900 text-white w-full min-h-screen p-10">
      <div className="max-w-[1200px] mx-auto my-0 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

        <div
          onClick={() => {
            setShow(!show);
            // console.log(show);
          }}
          className="card cursor-pointer hover:scale-105 duration-300 min-h-20 bg-zinc-800 border-white border-dashed border-2 rounded-2xl flex items-center justify-center flex-col gap-1 p-5">
          <Plus className='w-10 h-10 rounded-full bg-blue-500' />
          <p className='text-zinc-300 tracking-wide'>Add a new note</p>
        </div>

        {/* POPUP form for adding notes */}
        {show && (
          <div className="popup bg-zinc-800 z-10 absolute top-1/2 left-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 border border-white rounded-2xl p-5">
            <h3 className='text-xl font-bold tracking-wide mb-4 text-zinc-300'>Add a new Notes.</h3>
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              action="" className='flex flex-col gap-4 items-center'>
              <input
                value={title}
                onChange={(e) => {
                  // console.log(e.target.value);
                  setTitle(e.target.value);
                }}
                className='w-full rounded-md border border-white/60 px-4 py-2' type="text" name="title" id="" placeholder='Enter Heading...' />

              <textarea
                value={desc}
                onChange={(e) => {
                  // console.log(e.target.value);
                  setDesc(e.target.value);
                }}
                className='w-full rounded-md border border-white/60 px-4 py-2' name="description" id="" rows="10" placeholder='Enter description here...'></textarea>

              <button type="submit" className='bg-blue-500 px-4 py-2 rounded-xl w-full font-bold tracking-wide'>Add note</button>
            </form>
          </div>
        )}

        {tasks.map((item, index) => {
          return <>
            <div className="card relative cursor-pointer hover:scale-105 duration-300 min-h-20 bg-zinc-800 border-white/30 border-2 rounded-2xl flex flex-col gap-1 p-5">
                <h1 className="text-2xl font-bold tracking-wide">{item.title}</h1>
                <p className="text-zinc-300 font-medium tracking-wide">{item.desc}</p>
                <div 
                onClick={() => {
                  deleteHandler(index);
                }}
                className="text-red-500 bg-zinc-400/20 rounded-full font-bold absolute top-2 right-2">
                  <X className='w-8 h-8'/>
                </div>
            </div>
          </>
        })}

      </div>
    </div>
  </>
}