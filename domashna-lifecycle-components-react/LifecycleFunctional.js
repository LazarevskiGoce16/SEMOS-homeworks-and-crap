import { useEffect, useState } from 'react';
import { movies } from '../App';    

export const LifecycleFunctional = () => {
    const [counter, setCounter] = useState(0);
    const [incrementor, setIncrementor] = useState(0);
    const [showMovies, setShowMovies] = useState(false);

    useEffect(() => {
        console.log("LifecycleFunctional -> componentDidMount");
        return () => {
            console.log("LifecycleFunctional -> componentWillUnmount")
        }
    }, []); 

    console.log("LifecycleFunctional -> render");

    const increment = () => {
        setCounter((count) => (count + incrementor));
        setIncrementor((incrementor) => (incrementor + 1));
    };

    const movieLinks = () => {
        let b = showMovies ? false : true;
      setShowMovies(b);
    };

    return (<div>
        <h2>Lifecycle Functional Component</h2>
        <p>Counter value: {counter}</p>
        <button 
            onClick={() => increment()}
        >Increment</button>
        <br />
        <br />
        <button
            onClick={() => movieLinks()}
        >Movies</button>
        <br />
        {showMovies && movies.map((obj) => {
          return (
            <div>
              <a href={obj.imdbLink}>{obj.name}</a> <br />
              <img alt="movieLogo" src={obj.imageUrl}/>
            </div>
          )
        })}
    </div>);
};
