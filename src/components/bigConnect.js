import { useContext, useState } from 'react';
import {
  useAccount,
  useConnect,
  useDisconnect,
} from 'wagmi'
import { DataContext } from '@/constants/dataContext';

export default function BigConnect() {

  const { connect, connectors, isLoading, pendingConnector } =
    useConnect();
  const { address, isConnected } = useAccount()
  const [buttonstatus, setButtonstatus] = useState("Try Coffee Vending")
  const { disconnect } = useDisconnect()
  const handleClick = async () => {
    setButtonstatus("Checking NFT..")
    try {
      const response = await fetch('/api/action/nftownership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers
        },
        body: JSON.stringify({
          // Add any data you want to send in the POST request body
          // For instance:
          // address,
          // metadataurl
        }),
      });

      if (response.ok) {
        // Request was successful
        setButtonstatus("You are Clear to Go!")
        const data = await response.json();
        setTimeout(() => {
          setButtonstatus("Hurray Vend Now :)");
        }, 3000);
        // Handle the response data
      } else {
        // Request failed
        // Handle the error
        throw new Error('API request failed');
      }
    } catch (error) {
      setButtonstatus("You are Clear to Go!")
      // Handle fetch errors or exceptions
      console.error('Error:', error);
    }
  }

  const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
  //   const { setIsNft , setIsSigned , setLoading , setPopup } = useContext(DataContext)

  if (isConnected) {

    return (
      <div className='flex justify-center md:justify-start'>
        <button onClick={handleClick} className='bg-[#29642B] rounded-full lg:p-5 lg:px-32 md:p-4 md:px-12 p-3 px-11 font-bold font-Outfit text-lg relative '>{buttonstatus}</button>
      </div>
    )
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button
          title='Connect your Wallet!'
          disabled
          key={connector.id}
          // onClick={
          //   console.log("Button clicked")
          // }
          className='bg-[#312964] rounded-full lg:p-5 lg:px-32 p-3 px-14 font-bold font-Outfit text-lg relative'
        >
          Inactive
        </button>
      ))}
    </div>

  )
}
