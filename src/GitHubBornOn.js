import React, { useEffect, useState } from 'react';
// Import the API category from AWS Amplify
import { API } from 'aws-amplify'

export const GitHubBornOn = () => {
    const [userData, updateUserData] = useState([])

    // Create additional state to hold user input for limit and start properties
    const [input, updateUserName] = useState({ userName: 'bciancio' })

    useEffect(() => {
        fetchBornOnDate()
    }, [])


    async function fetchBornOnDate() {
        const { userName } = input
        const data = await API.get('cryptoapi', `/born?username=${userName}`)
        console.log("🚀 ~ file: GitHubBornOn.js ~ line 19 ~ fetchBornOnDate ~ data", data)
        updateUserData(data.user)
    }


    // {Object.keys(userData).map((element) => {
    //     return (
    //         <div key={element}>
    //             {element} : {userData[element]}
    //         </div>
    //     )
    // })}
    return <>
        {userData.login} was created on {userData.created_at}
    </>
}