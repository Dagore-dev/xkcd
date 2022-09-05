export default function PrimaryContainer({ children }) {
  return (
    <div className="flex flex-col justify-evenly items-center p-5 min-h-full md:w-3/5 md:mx-auto shadow-xl">
      {children}
    </div>
  )
}
