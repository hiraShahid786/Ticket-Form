import React from 'react';
import './NewServiceRequest.scss'
import Button from 'devextreme-react/button';

const NewServiceRequest: React.FC = () => {
    return (
        <>
        <div className='background'>
            <div className='requestBox' >
                <div className='text'>I need something</div>
            <Button
            className='newRequest'
                text="New Service Request"
                type="default"
                stylingMode="contained"
                width={200}
                onClick={() => alert('New Service Request')}
            />
        </div>
        </div>
        </>
        
    );
};

export default NewServiceRequest;
