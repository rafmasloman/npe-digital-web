const Button = ({ text, width, btnType, height, action }) => {
  const btnColor =
    btnType === 'primary'
      ? 'bg-blue-primary text-white hover:border-blue-primary hover:text-blue-primary hover:bg-white'
      : 'border-2 border-blue-primary text-blue-primary font-medium hover:border-dark-blue-primary hover:text-dark-blue-primary hover:bg-white';

  return (
    <div className="w-fit">
      <button
        onClick={action}
        className={`${btnColor} text-sm  rounded-lg px-5 py-2 xl:px-8 xl:py-3 xl:rounded-lg  font-primary xl:text-lg hover:border-1.5 `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
