import './Query.scss';

export default function Query(props) {

  return (
    <div className='resp'>
      <div className='res'>
        <div className='rest'>
          <h1>{props.pair}</h1>
          <p>{props.value}</p>
        </div>
      </div>
    </div>
  );
}