
function Button ({size, bgColor, textColor, children}) {
    return (
        <button className={`${bgColor} text-${textColor} text-${size} font-bold py-2 px-4 rounded`}>
        {children}
    </button>
    )
};

export default Button;