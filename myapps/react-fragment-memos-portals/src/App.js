import FragmentComponent from './fragment/FragmentComponent';
import Table from './fragment/Table';
import Parent from './memos/Parent';
import Modal from './memos/portals/Modal';

function App() {
  return (
    <div className="App">
     <FragmentComponent />
     <Table />
     <Parent />
     <Modal />
    </div>
  );
}

export default App;
