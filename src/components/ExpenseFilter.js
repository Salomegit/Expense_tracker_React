    import React,{useState} from 'react';

    import './ExpeseFilter.css';

    const [date,setDate] = useState(initialDate)

    const clickHandler = () => {
        setDate("Updated")
        console.log(initialDate);

    }

    const ExpensesFilter = () => {
    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select>
            <option value='2022' onClick={clickHandler}>2022</option>
            <option value='2021' onClick={clickHandler}>2021</option>
            <option value='2020' onClick=>2020</option>
            <option value='2019' >2019</option>
            </select>
        </div>
        </div>
    );
    };

    export default ExpensesFilter;