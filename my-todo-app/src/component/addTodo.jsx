function AddTodo() {
    return (
        <div className='row row-item'>
            <div className='col-4'>
                <input type="text" placeholder='Enter Todo App' />
            </div>
            <div className='col-4'>
                <input type="date" />
            </div>
            <div className='col-2'>
            <button type="button" className="btn btn-success button-item">Add</button>
            </div>
        </div>
    );
}

export default AddTodo;