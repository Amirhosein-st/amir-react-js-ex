import './style.css';

const tasks = [
    <div className='item'>
        <p className='text'>کار 1</p>
        <button className='x-btn'>&#10006;</button>
    </div>,
    <div className='item'>
        <p className='text'>کار 2</p>
        <button className='x-btn'>&#10006;</button>
    </div>,
    <div className='item'>
        <p className='text'>کار 3</p>
        <button className='x-btn'>&#10006;</button>
    </div>,
    <div className='item'>
        <p className='text'>کار 4</p>
        <button className='x-btn'>&#10006;</button>
    </div>,
    <div className='item'>
        <p className='text'>کار 5</p>
        <button className='x-btn'>&#10006;</button>
    </div>,
    <div className='item'>
        <p className='text'
            title='خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی'>
            خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی
        </p>
        <button className='x-btn'>&#10006;</button>
    </div>,
    <div className='item'>
        <p className='text'>کار 7</p>
        <button className='x-btn'>&#10006;</button>
    </div>,
    <div className='item'>
        <p className='text'>کار 8</p>
        <button className='x-btn'>&#10006;</button>
    </div>,
    <div className='item'>
        <p className='text'>کار 9</p>
        <button className='x-btn'>&#10006;</button>
    </div>,
    <div className='item'>
        <p className='text'>کار 10</p>
        <button className='x-btn'>&#10006;</button>
    </div>
]


function Main() {

    return (
        <main className='main'>
            {tasks}
        </main>
    )
}

export default Main