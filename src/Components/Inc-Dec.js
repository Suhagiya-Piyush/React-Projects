import React, {useState} from "react";

const IncDec = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        if(count === 0){
            setCount(0)
        }else{
            setCount(count - 1);
        }
    }

    const Reset = () => {
        setCount(0);
    }

    return(
        <div className="min-h-[90vh] bg-slate-200 py-10 flex justify-center">
            <div className="border-4 border-black max-h-[250px] rounded-3xl py-8 px-4">
                <h1 className="font-bold text-5xl bg-slate-50 min-w-[40vw] h-16 mx-auto flex justify-center items-center rounded-2xl">{count}</h1>
                <div className="mt-10">
                    <button onClick={Increment} className="border border-black rounded-lg bg-blue-200 hover:bg-blue-600 hover:text-white transition py-1 px-4 text-2xl font-semibold mx-4 my-2">Increment</button>
                    <button onClick={Decrement} className="border border-black rounded-lg bg-blue-200 hover:bg-blue-600 hover:text-white transition py-1 px-4 text-2xl font-semibold mx-4 my-2">Decrement</button>
                    <button onClick={Reset} className="border border-black rounded-lg bg-red-200 hover:bg-red-600 hover:text-white transition py-1 px-4 text-2xl font-semibold mx-4 my-2">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default IncDec;