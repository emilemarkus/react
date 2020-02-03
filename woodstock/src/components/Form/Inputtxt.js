import React  from 'react';
import './Form.css';


const Inputtxt = ({ labelizer, typer = 'file', namer, placeholder }) => {
    return (
        <div className="form-group">
            <p>
                <label className='form-label'>{labelizer}</label>
            </p>
            <p>
                <input class="form-input input-text" type={typer} name={namer} placeholder={placeholder} />
            </p>
        </div>
    )
}

export default Inputtxt;