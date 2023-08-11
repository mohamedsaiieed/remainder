import {Container} from 'react-bootstrap'
import {dates} from './date';
import DateCount from './components/DateCount';
import DateList from './components/DateList';
import DateAction from './components/DateAction';
import { useState } from 'react';

function App() {
  const [personDate,setpersonDate] = useState(dates)

  const onDel = () => {
    setpersonDate([])
  };

  const onView = () => {
    setpersonDate(dates)
  }

    return (
    <div className="font body">
      <Container className='py-2'>

      <DateCount dates={personDate}/>
      <DateList dates={personDate}/>
      <DateAction dateDel={onDel} dateView={onView}/>

      </Container>
    </div>
  );
}

export default App;
