import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Child from "./Child";
import ChildA from "./ChildA";
import ChildB from './ChildB';

function Parent()
{
    return(
        <div className='Breadcrums'>
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
            <h2>Luminogics </h2>
            <Child />
            <ChildA />
            <ChildB />
        </div>
    )
}

export default Parent;