import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {clearData, fetchData, inputId, incrementId, decrementId} from './features/dataSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>No image</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Trigger Thunk</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input value={data.objectId} onChange={(e) => {
        dispatch(inputId(Number(e.target.value)))
      }} />
      <div>
        <h1>{data.objectId}</h1>
        {renderImg()}
      </div>
    </div>
  );
}

export default App;
