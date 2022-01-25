import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Initial D']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Initial D']); //agregar un dato al array
    //     // setCategories(cats => [...cats, 'Initial D']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {categories.map(category => (
                    // return <li key={category}>{category}</li>;
                    <GifGrid 
                        category={category}
                        key={category}
                    />
                ))}
            </ol>
        </>
    )
}

export default GifExpertApp;
