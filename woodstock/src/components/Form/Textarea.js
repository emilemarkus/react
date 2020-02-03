import React  from 'react';
import './Form.css';


const Textarea = ({ labelizer, namer, placeholder }) => {
    return (
        <div className="form-group">
            <p>
                <label className='form-label'>{labelizer}</label>
            </p>
            <p>
                <textarea class="form-input input-textarea"  name={namer} placeholder={placeholder} cols='50' rows='10' >MESSAGE</textarea>
            </p>
        </div>
    )
}

export default Textarea;