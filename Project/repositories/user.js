// http://randomuser.me/api/

import axios  from "axios"
const SEVER_NAME = 'randomuser.me'
const getUserDetail = async () => {
    try{
        // alert('you press getUserDetail')
        let response = await axios.get(`http://${SEVER_NAME}/api`)
        if(response.status != 200)
        {
            throw 'failed request'
        }
        if(response.data.results.length > 0 )
        {
            let responseUser =response.data.results[0]
            let user = {}
            // debugger
            user.dateofbirth = new Date(responseUser.dob.date)
            user.email = responseUser.email ?? ' '
            user.gender = responseUser.gender ?? 'male'
            user.userId = `${responseUser.id.name} ${responseUser.id.value}`
            user.address =`${responseUser.location.state}, ${responseUser.location.street.name}`
            user.username = responseUser.login.username ?? ' '
            user.url = responseUser.picture.large ?? ' '
            user.phone = responseUser.phone ?? ' '
            user.registerdate = new Date(responseUser.registered.date)
            return user
        }
        else 
            throw 'User not found'
    }catch(error)
    {
        throw error 
    }
}
const login = ({email , password}) =>{

}

export default {
    getUserDetail,
    login
}