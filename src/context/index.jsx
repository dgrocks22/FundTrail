import React ,{useContext,createContext}from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from "@thirdweb-dev/react";
import { ethers} from "ethers";
const StateContext = createContext();
export const StateContextProvider =({children})=>{
    const{contract} =useContract('0xb6Df795f460fe84FB5D11b92A6B97E4eBAEF6d3d');
    const {mutateAsync : createCampaign} =useContractWrite(contract, 'createCampaign');
    const address =useAddress();
    const connect= useMetamask();
    const publishCampaign =async(form)=>{
        try{
            const data = await createCampaign([
                address, //owner
                form.title, //title
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
    
            ])
            console.log("contract call success",data)
        }
        catch(error){
            console.log("contract call failure",error)
        }
    }
    return(
        <StateContext.Provider
        value={{
            address,
            contract,
            createCampaign: publishCampaign
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext= ()=> useContext(StateContext);