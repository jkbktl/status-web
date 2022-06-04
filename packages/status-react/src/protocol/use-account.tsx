import { useCallback, useState ,useEffect} from 'react'
import { useClient } from './provider'

// return {
//   name: 'Satoshi',
//   publicKey: '71C7656EC7ab88b098defB751B7401B5f6d8976F',
//   imageUrl:
//     'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1620&q=80',
// }

export const useAccount = () => {
  const client = useClient()

  const [account, setAccount] = useState<any>()
  console.log("file: use-account.tsx > line 15 > useAccount > account", account)


  useEffect(() => {
    // load account
  },[])

  const createAccount = useCallback(() => {
    const account =  client.createAccount()
    console.log("createAccount > account", account)


    setAccount(account)
    // TODO: save account



    return account
  }, [])

  const deleteAccount = useCallback(() => {
    // client.deleteAccount()
    setAccount(undefined)
  }, [])

  return [account, { createAccount, deleteAccount }] as const
}
