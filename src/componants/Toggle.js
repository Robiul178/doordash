import React from 'react';

const Toggle = () => {
    return (
        <div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <input type="checkbox" className="toggle toggle-accent" />
                </label>
            </div>
        </div>
    );
};

export default Toggle;