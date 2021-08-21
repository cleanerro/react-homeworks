import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRv6dZvShX3_LSqgdJdwYZDL6MsrHYy5tjioGjaSFan1RfjUNJVi_A4PdSC-jUs_VxfDo&usqp=CAU',
    name: 'Roma Stepaniuk',
    message: 'Hello!  I am front-end developer!! ',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homework 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить
            <AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
