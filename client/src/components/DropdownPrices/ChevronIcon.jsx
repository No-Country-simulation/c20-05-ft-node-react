const ChevronIcon = ({ isOpen = false, className = '' }) => {
    return (
        <svg
            className={`ml-2 w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${className}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
};

export default ChevronIcon;
