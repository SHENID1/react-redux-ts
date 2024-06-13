import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";


const App = () => {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (isLoading) return <h1>Loading...</h1>
    if (error !== "") return <h1>{error}</h1>
    return (
        <div>
            {JSON.stringify(users, null, 2)}
        </div>
    );
};

export default App;