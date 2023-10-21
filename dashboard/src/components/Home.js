import React, { useState, useEffect } from 'react';
const Home = () => {
    const [people, setPeople] = useState('');

    useEffect(() => {
        console.log('Fetching names');
        const fetchName = async () => {
            try {
                const response = await fetch('/api/names');
                const data = await response.json();
                console.log(data);
                setPeople(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchName();
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {people && people.map((person, i) => (
                    <li key={i}>{person.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home;