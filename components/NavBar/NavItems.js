import NavItem from "./NavItem";

export default function NavItems() {
  return (
    <>
      <NavItem name='Home' route='/' />
      <NavItem name='About' route='/about' />
      <NavItem name='Search' route='/search' />
    </>
  )
}