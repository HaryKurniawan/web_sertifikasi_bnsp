import React from 'react';

function FormField({ label, id, name, value, onChange, placeholder, type = 'text', required = false, isTextarea = false }) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            {isTextarea ? (
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    );
}

export default FormField;
