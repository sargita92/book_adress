import BookAddress from "../../Components/BookAddress";
import Header from "../../Components/Header";
import GlobalStyle from "../../Styles/globalStyles";
import { Container } from "./style";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from "../../Components/Contact";

function Main() {
  return (
    <Container>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/contact/new" component={Contact} />
          <Route path="/contact/:id" component={Contact} />
          <Route path="/" component={BookAddress} />
        </Switch>
      </Router>
    </Container>
  );
}

export default Main;
