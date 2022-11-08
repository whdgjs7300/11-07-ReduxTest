import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo } from "../module/memos";
const Memo = () => {


    const [name,setName] = useState("");
    const [text,setText] = useState("");

    const memoList = useSelector((state)=>state.memoList)
    const dispatch = useDispatch()

    const addMemo= (e) =>{
        e.preventDefault();
        dispatch(addmemo({
            date :  new Date(),
            name : name,
            test : test
        }))
    }
    return ( 

    <div>
        <h1>방명록을 작성해주세요</h1>
        <hr />
        <form onSubmit={addMemo} >
            <label htmlFor="">이름</label>
            <input type="text" size={5} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            <input type="submit" value="작성" />
        </form>
        <hr />
        <ul>
            {memoList.map((memo)=>(
                <li>
                    {memo.name} : {memo.text} {memo.date.getMonth()+1}/{memo.date.getDate()}
                </li>))}
        </ul>
    </div> 
    );
}

export default Memo;