import React, {useState} from 'react';

const RequestComponent = ({title, component}: { title: string, component: JSX.Element }) => {
    const [showComponent, setShowComponent] = useState(false);

    return (
        <div className="cursor-pointer p-1">
            <p onClick={() => setShowComponent(!showComponent)}>
                {title}
            </p>
            {showComponent && component}
        </div>
    );
};

export default RequestComponent;