import { FC } from "react";

const Departures:FC = (props) => {

    const data = props.data
    console.log(data)

    const departures = () => {

        if(data !== undefined) {
            return (
                 data.map((item) => {
    return (
     <tr>
        <td className=" border-2 p-2  text-center">{item.time}</td>
        <td className=" border-2 p-2 text-center">{item.airline}</td>
        <td className=" border-2 p-2 text-center">{item.callSign}</td>
        <td className=" border-2 p-2 text-center">{item.gate}</td>
        <td className=" border-2 p-2 text-center">{item.airport}</td>
    </tr>
    )

       })
            )

        }
    }


    return (
        <div className="mt-8">
        <table className="w-11/12 h-5/6 bg-gray m-auto">
        <thead>
<tr className="bg-blue">
  <th className="border-2 border-black text-white p-2">Time</th>
  <th className="border-2 border-black text-white p-2">Airline</th>
  <th className="border-2 border-black text-white p-2">Call Sign</th>
  <th className="border-2 border-black text-white p-2">Gate</th>
  <th className="border-2 border-black text-white p-2">Airport</th>
</tr>
</thead>
<tbody>
{departures()}
</tbody>
        </table>
      </div>
    )
}

export default Departures;
