import React from 'react';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="menuTitle">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index} className="text-white">{item.name}</li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;