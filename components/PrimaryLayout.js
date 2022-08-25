import Header from './NavBar/Header'

export default function PrimaryLayout({ children }) {
  return (
    <div className='min-h-screen grid grid-cols-1 grid-rows-[64px_1fr]'>
      <Header />
      <main className='bg-slate-50'>
        {children}
      </main>
    </div>
  )
}
