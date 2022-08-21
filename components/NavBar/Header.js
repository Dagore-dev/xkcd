import ResponsiveNavbar from './ResponsiveNavBar'
import NavItem from './NavItem'
import SiteTitle from './SiteTitle'

export default function Header() {
  return (
    <header className='w-full h-16 bg-indigo-600 drop-shadow-lg sticky top-0' >
      <ResponsiveNavbar siteTitle={<SiteTitle />}>
        <NavItem name='Home' route='/' />
        <NavItem name='About' route='/about' />
        <NavItem name='Search' route='/search' />
      </ResponsiveNavbar>
    </header>
  )
}
