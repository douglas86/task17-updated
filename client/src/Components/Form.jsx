import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
    const [list, setList] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3001`, { list: list }).then((res) => {
            console.log(res);
        });

        window.location.reload();
    };

    console.log(list);

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setList(e.target.value)}
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Form;
