

function TodoItem({todoName, todoDate}) {

    return <div className='row row-item'>
        <div className='col-4'>
            {todoName}
        </div>
        <div className='col-4'>
            {todoDate}
        </div>
        <div className='col-2'>
            <button type="button" className="btn btn-danger">Delete</button>
        </div>
    </div>
}

export default TodoItem;