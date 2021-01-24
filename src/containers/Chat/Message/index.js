import React, { useEffect } from "react";
import {getMessagesData} from "../../../ustils/globalUtils";

import apiService from "../../../ustils/apiRequests";
// import data from "../../mockJson/message#5532.json"
function Message(props) {

    useEffect(()=>{
        apiService.get(encodeURIComponent('../mockData/message#342.json'),[{responseType: 'json'}]).then(res => console.log(res))

    },[])
    return(
        <div>message</div>
    )
}

export default Message;