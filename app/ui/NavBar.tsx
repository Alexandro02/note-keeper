import Link from "next/link"

const Navbar = () => {
  const links = [
    { href: "/myAccount", label: "My Account" },
    { href: "/", label: "Home" },
    { href: "/myNotes", label: "My Notes" },
  ]

  return (
    <ul className="flex justify-between py-5 text-2xl">
      {
        links.map(({ href, label }, key) => (
          <li key={key} className="duration-200 transition-discrete ease-in hover:border-b-amber-300 border-b-2">
            <Link href={href}>{label}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Navbar