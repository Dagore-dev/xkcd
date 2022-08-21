import Header from './NavBar/Header'

export default function PrimaryLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}
