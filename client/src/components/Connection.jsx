import axios from 'axios'
import { useState } from 'react'

const Connection = () => {
    // const [info, setinfo] = useState([])
    const [item, setitem] = useState('')
    // const endpoint = 'http://localhost:5000/home'
    const url = 'http://localhost:5000/submit'
    // const fetchInfo = () => {
    //     axios.get(endpoint)
    //     .then((result)=>{
    //         console.log(result);
    //         let data = result.data
    //         setinfo(data)
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

    const submitInfo = () => {
        if(item === '') {
            alert("Fill in values")
        } else {
            // console.log(name);
            let obj = { item }
            axios.post(url, obj)
            .then(()=>console.log('sent'))
            .catch(err=>console.log(err))
        }
        
    }
    return (
        <>
            <h1>Connection</h1>
            {/* <button onClick={fetchInfo}>Get information</button> */}
            <input type="text" name='item' value={item} onChange={(e)=>{setitem(e.target.value)}} />
            <button onClick={submitInfo}>Submit</button>
            {/* {
                info.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <p>{item.age}</p>
                        </div>
                    )
                })
            } */}
        </>
    )
}

export default Connection