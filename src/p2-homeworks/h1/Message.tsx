import React from 'react'
import s from './Message.module.css'


type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: messagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.circle}> </div>

            <div className={s.triangle}> </div>
            <div className={s.messagebox}>
                <div  className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
