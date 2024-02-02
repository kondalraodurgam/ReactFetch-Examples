import React, {useState,useEffect} from 'react'
import axios from 'axios';

function App(){
	const [users,  setUser] = useState([]);
	// useEffect(()=>{
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then((result)=>result.json())
	// 	.then((data)=>{
	// 		console.log("users",data)
	// 		setUser(data)
	// 	}).catch((err)=>{
	// 		console.log("error feting userData",err);
	// 	})
	// },[])

	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then((result)=>{
			setUser(result.data)
		}).catch((err)=>{
			console.log('err Handling',err)
		})
	},[])
  return (
    <div>
      <h2 style={{textAlign:'center'}}>User Details Table</h2>
     <table style={{ borderCollapse: 'collapse', margin: 'auto', width: '60%', border: '1px solid #ddd' }}>
      <thead>
		<tr style={{ border: '1px solid #ddd', backgroundColor: 'black', color: 'white' }}>
			<th>name</th>
			<th>username</th>
			<th>email</th>
		</tr>
      </thead>
      <tbody style={{textAlign:'center'}}>
		{
			users.length && users.map((item)=>(
				<tr  key={item.id} style={{ border: '1px solid #ddd', backgroundColor: 'black', color: 'white' }}>
					<td>{item.name}</td>
					<td>{item.username}</td>
					<td>{item.email}</td>
				</tr>
			))
		}	  
      </tbody>
     </table>
    </div>
  )
}

export default App