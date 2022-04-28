import Splty from './Splty';

const SpltiesList = ({ splties, handleUpdate }) => {
  return (
    <div className="splties-container">
      <ul className="m-auto w-80 text-sm font-medium text-white border rounded-lg dark:bg-cyan-500 dark:border-cyan-400 dark:text-white ">
        {splties && splties.length > 0
          ? splties.map((splty) => (
              <Splty
                key={splty.id}
                name={splty.name}
                id={splty.id}
                handleUpdate={() => handleUpdate(splty.id)}
              ></Splty>
            ))
          : ''}
      </ul>
    </div>
  );
};

export default SpltiesList;
