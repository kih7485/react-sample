import React from 'react';

function SearchForm({value, onChange, onReset, onSubmit}) {
    const handleSubmit = event => {
        event.preventDefault();
        console.log(event, "target")
        onSubmit();
    }
    const handleReset = () => {
        onReset();
    }
    const handleChangeInput = (event) => {
        onChange(event.target.value);
    } 
    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <input
                type="text"
                placeholder="검색어를 입력하세요."
                autoFocus
                value={value}
                onChange={handleChangeInput}
            />
            {value?.length > 0 && (<button type="reset" className="btn-reset" onClick={handleReset} />)}
        </form>
    );
}

export default SearchForm;
