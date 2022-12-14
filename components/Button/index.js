import Link from 'next/link';
import { useState } from 'react';

const Button = ({ text, color, status, height, action, type, url }) => {
  const [btnState, setBtn] = useState(false);

  function handleCategory() {
    setBtn((btnState) => !btnState);
  }

  let toggleCheck =
    status === 'active' ? 'bg-blue-primary text-white' : 'bg-white';
  const btnColor =
    color === 'primary'
      ? 'bg-blue-primary text-white hover:border-blue-primary hover:text-blue-primary hover:bg-white'
      : 'border-2 border-blue-primary text-blue-primary font-medium hover:border-dark-blue-primary hover:text-dark-blue-primary hover:bg-white';

  return (
    <div className="">
      {type === 'submit' ? (
        <button
          onClick={action}
          className={`${btnColor} w-full text-sm  rounded-lg px-5 py-2 xl:px-6 xl:py-3 xl:rounded-lg  font-primary xl:text-lg border-1.5 `}
          type={type}
        >
          {text}
        </button>
      ) : type === 'filter' ? (
        <button
          onClick={action}
          className={`${toggleCheck}   text-sm  rounded-lg px-5 py-2 xl:px-6 xl:py-1.5 xl:rounded-lg  font-primary xl:text-lg  `}
          type={type}
        >
          {text}
        </button>
      ) : (
        <Link href={`${url}`}>
          <button
            onClick={action}
            className={`${btnColor} text-sm  rounded-lg px-5 py-2 xl:px-6 xl:py-3 xl:rounded-lg  font-primary xl:text-lg border-blue-primary border-1.5 `}
            type={type}
          >
            {text}
          </button>
        </Link>
      )}
    </div>
  );
};

export default Button;
