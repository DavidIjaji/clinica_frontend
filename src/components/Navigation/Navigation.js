import "./Navigation.css";
import Menu from "../Menu/Menu";
import { Navbar} from 'reactstrap';
function Navigation() {
  return (
    <Navbar className="large-nav">
      <Menu></Menu>
    </Navbar>
  );
}

export default Navigation;
