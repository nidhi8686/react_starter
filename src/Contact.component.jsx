import React,{ useState } from 'react'


export default function Contact(props) {
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [unversity,setUnversity] = useState("");


    // const [university,setUniversityName] = useState("");
    // const [address,setAddress] =useState("");
    var submitDetails = (e)=>{
       e.preventDefault();
    //    var first = e.target.elements.fname.value;
    //    var last=e.target.elements.lname.value;
    // var university=e.target.elements.univer.value;
    // var address=e.target.elements.address.value;
    var first= `${firstname}`;
    var last = `${lastname}`;
    var university=`${unversity}`;
    // var university=`${university}`;
    // var address=`${address}`;
           console.log(first + " "+ last+" "+university);
          fetch("api", {
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
             fname : first,
             lname : last,
             uni : university,
            //  add : address
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <React.Fragment>

            <h3>{props.sendName}</h3>
            <button onClick={ props.sendfun }>props fun</button>
            {/* <h3 style={{color:"red",backgroundColor:"yellow"}}>Contact</h3>
            <img src={process.env.PUBLIC_URL+"/logo192.png"}/> */}
            <form onSubmit={ submitDetails }>
            <h3>react from </h3>
            <input type="text"
            value={firstname}
            placeholder="Enter your name"
            name="fname"
            onChange={e => setFirstName(e.target.value)}/>
            <br/>
             <input type="text"
            value={lastname} 
            name="lname"
            onChange={e => setLastName(e.target.value)}/>
            <br/>
            <input type="text"
            value={unversity}
            placeholder="Enter your unversity name"
            name="unversity"
            onChange={e => setUnversity(e.target.value)}/>
{/* 
            <input type="text"
            value={university}
            name="univer"
            placeholder="university name"
            onChange={e => setUniversityName(e.target.value)} /> 

            <input type="text"
            value={address}
            name="address"
            placeholder="address"
            onChange={ e => setAddress(e.target.value)} /> */}
            <button type="submit">submit</button>
            </form>
        </React.Fragment>
    )
}
