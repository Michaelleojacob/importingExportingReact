import MyComponent from '../MyComponent/MyComponent';
import MyFunctionalComponent from '../MyComponent/MyFunctionalComponent';

export default function App() {
  return (
    <div>
      <MyComponent title={'Miggels'} />
      {/* //* what is the difference between  */}
      {/* //* title={'Miggels'} and title='Miggels' */}
      {/* <MyComponent title="Miggels" /> */}

      <MyFunctionalComponent title="Migs" />
    </div>
  );
}
