import React from 'react'

const validation = (props) => {
    let valiMessage = 'Text long enough'

    if (PushSubscriptionOptions.inputLength <=5) {
        valiMessage = 'Text too short';
    }


    return (
        <div>
            {/* { 
                props.inputLength > 5 ?<p>Text long enough</p>:<p>Text too short</p>
            } */}
            {/* or recommend way*/}

            <p>{valiMessage}</p>



        </div>

    );

};

export default validation