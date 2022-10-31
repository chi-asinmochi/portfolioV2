import React from 'react'
import Construction from '../components/Construction'
import DynamicHeader from '../components/DynamicHeader'


function Contact() {

    return (
        <>
            <DynamicHeader big={false} current='contact' inView={true}></DynamicHeader>
            <Construction></Construction>
        </>
    )
}

export default Contact

