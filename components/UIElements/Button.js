
function Button ({size, bgColor, textColor, children, click}) {
    return (
        <button className={`${bgColor} text-${textColor} text-${size} font-bold py-2 px-4 rounded`} onClick={click}>
        {children}
    </button>
    )
};

export default Button;