import Header from './Header'

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
