import { FC } from "react";

const Departures:FC = () => {
    return (
        <div className="mt-8">
        <table className="w-11/12 h-5/6 bg-gray m-auto">
        <thead>
<tr>
  <th className="border-2 p-2">Time</th>
  <th className="border-2 p-2">Airlines</th>
  <th className="border-2 p-2">Call Sign</th>
  <th className="border-2 p-2">Gate</th>
  <th className="border-2 p-2">Airport</th>
</tr>
</thead>
<tbody>
<tr>
    <td className=" border-2 p-2  text-center">12:23</td>
    <td className=" border-2 p-2 text-center">DFK</td>
    <td className=" border-2 p-2 text-center">JAJDJ</td>
    <td className=" border-2 p-2 text-center">3346</td>
    <td className=" border-2 p-2 text-center">SKF</td>
</tr>
<tr>
    <td className=" border-2 p-2  text-center">12:23</td>
    <td className=" border-2 p-2 text-center">DFK</td>
    <td className=" border-2 p-2 text-center">JAJDJ</td>
    <td className=" border-2 p-2 text-center">3346</td>
    <td className=" border-2 p-2 text-center">SKF</td>
</tr>
<tr>
    <td className=" border-2 p-2  text-center">12:23</td>
    <td className=" border-2 p-2 text-center">DFK</td>
    <td className=" border-2 p-2 text-center">JAJDJ</td>
    <td className=" border-2 p-2 text-center">3346</td>
    <td className=" border-2 p-2 text-center">SKF</td>
</tr>
<tr>
    <td className=" border-2 p-2  text-center">12:23</td>
    <td className=" border-2 p-2 text-center">DFK</td>
    <td className=" border-2 p-2 text-center">JAJDJ</td>
    <td className=" border-2 p-2 text-center">3346</td>
    <td className=" border-2 p-2 text-center">SKF</td>
</tr>



</tbody>
        </table>
      </div>
    )
}

export default Departures;
