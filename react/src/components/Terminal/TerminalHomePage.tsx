import { FC, useEffect, useState } from "react";

const TerminalHomePage:FC = () => {

    const [status, setStatus] = useState('open')


    const openStatus = () => {
return (
    <>
 <p>Open</p>
    <div className="h-4 w-4 bg-green rounded-full"></div>
    </>
)
    }
    const closedStatus = () => {
return (
    <>
    <p>Closed</p>
       <div className="h-4 w-4 bg-red-600 rounded-full"></div>
       </>
)
    }
    return (
       <div className="mt-8 ">
        <div className="w-11/12 h-5/6 m-auto p-2 text-center ">
<div className="flex gap-4 justify-center items-center mb-4 border-2 border-gray w-3/5 m-auto p-2 rounded-md">
    <p className="font-medium">Status:</p>
    {status === 'open' ? openStatus() : closedStatus()}

</div>
<h3 className="font-medium text-lg text-red-600 ">Emergencies</h3>
<div className="bg-white p-2">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam obcaecati distinctio esse velit illum iste incidunt, rerum, quibusdam magni molestias beatae animi, quae modi consectetur soluta excepturi dignissimos asperiores!</p>
</div>


        </div>
       </div>
    )
}

export default TerminalHomePage;
