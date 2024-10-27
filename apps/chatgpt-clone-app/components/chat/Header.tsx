import MobileMenu from "./MobileMenu";
import ModelSelect from "./ModelSelect";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="flex items-center p-2 sticky top-0 bg-white z-10">
      <MobileMenu>
        <Sidebar />
      </MobileMenu>
      <ModelSelect />
    </header>
  )
}

export default Header;