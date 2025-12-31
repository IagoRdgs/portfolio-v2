type containerProps = {
    children: React.ReactNode,
    className?: string
};

export default function Container({ children, className } : containerProps) {
    return <div className={`w-full max-w-7xl mx-auto px-6 ${className}`}>
        {children}
    </div>
}