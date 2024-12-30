import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'

export default function customer() {

  const Router = useRouter()
  
      const [data, setData] = useState(null);
  
      useEffect(() => {
          // Safely access localStorage after the component is mounted
          const userData = localStorage.getItem('userData'); // Make sure 'userData' is a string
          setData(userData);
          console.log(userData)
      }, []);
  
  
      useEffect(() => {
          if (data === "") {
              Router.push('/signin');
          }
      }, [data, Router]);
  
  

  return (
    <>
      {data != "" ? <div>customer</div> : (Router.push('/signin'))}
    </>
    
  )
}
