import React, { useEffect, useState } from 'react'
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import { useRouter } from 'next/navigation';

export default function Blog() {

  const router = useRouter()

  const [data, setData] = useState(null);

  useEffect(() => {
    // Safely access localStorage after the component is mounted
    const userData = localStorage.getItem('userData'); // Make sure 'userData' is a string
    setData(userData);
    console.log(userData)
  }, []);


  if (data === "") {
    // Show a loading state until localStorage is checked
    router.push('/signin')
    return <div>Loading...</div>;
  }


  return (

    <>
      {data != "" ?
        <>
          <Header />
          <div>Blog</div>
          <Footer />
        </>
        : (router.push('/signin'))
      }
    </>

  )
}
