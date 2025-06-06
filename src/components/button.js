export default function Button({ children, className, size = "", ...props }) {
  return (
    <a href="#" className={`${size === 'sm' ? 'text-base' : 'text-lg'} inline-block px-4 py-2 font-bold border top-0 border-cardinal-red-dark bg-cardinal-red-dark text-white hover:bg-white hover:text-cardinal-red-dark transition-all duration-300 ${className}`} {...props}>
      {children}
    </a>
  );
}