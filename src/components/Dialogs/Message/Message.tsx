import React from 'react';

type PropsType = {
    id: number
    message: string
}

const Message:React.FC<PropsType> = ({message, id}) => {

    return (
        <div>
            {message}
        </div>
    )
}

export default Message;