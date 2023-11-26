import React,{useEffect,useState} from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import API from '../../services/API'
import moment from 'moment'
import { useSelector } from 'react-redux'
const OrganisationPage = () => {
    const {user} = useSelector(state => state.auth)
  const [data,setData]= useState([])
  const getDonars = async () => {
    try{
        if(user?.role === 'donar'){
            const {data} = await API.get('/inventory/get-organisation')
            // console.log(data)
            if(data?.success){
              setData(data?.organisations)
            }
        }
        if(user?.role === 'hospital'){
            const {data} = await API.get('/inventory/get-orgnaisation-for-hospital')
            // console.log(data)
            if(data?.success){
              setData(data?.organisations)
            }
        }
    } catch(error){
      console.log('Error', error)
    }
  }
  useEffect(()=>{
    getDonars();
  },[user])
  return (
    <>
    <Layout>
    <table className="table" >
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((record)=> (
      <tr key={record._id}>
      <td>{record.organisationName}</td>
      <td>{record.email}</td>
      <td>{record.phone}</td>
      <td>{moment(record.createdAt).format('DD/MM/YYYY')}</td>
    </tr>
    ))}
    
   
  </tbody>
</table>
    </Layout>
    
      
    </>
  )
}

export default OrganisationPage
