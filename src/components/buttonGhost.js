export default function ButtonGhost({ children, className, size = "", ...props }) {
  return (
    <a href="#" className={`${size === 'sm' ? 'text-base' : 'text-lg'} inline-block mt-8 px-4 py-2 font-bold border top-0 border-humsci-gold hover:bg-white hover:text-cardinal-red-dark transition-all duration-300 ${className}`} {...props}>
      {children}
    </a>
  );
}