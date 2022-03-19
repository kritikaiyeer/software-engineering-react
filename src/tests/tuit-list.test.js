import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits, createTuit} from "../services/tuits-service";
import {createUser} from "../services/users-service";
import axios from "axios";

const ripley = {
  username: 'ellenripley',
  password: 'lv426',
  email: 'ellenripley@aliens.com'
};

const MOCKED_TUITS = [
  {
      tuit: "alice's tuit",
  },
  {
      tuit: "bob's  tuit",
  },
  {
      tuit: "charlie's tuit",
  },
  
]

test('tuit list renders static tuit array', () => {
  render(
    <HashRouter>
      <Tuits tuits={MOCKED_TUITS}/>
    </HashRouter>);
  const linkElement = screen.getByText(/alice's tuit/i);
  expect(linkElement).toBeInTheDocument();
});

test('tuit list renders async', async () => {
  
  const newUser = await createUser(ripley)
  MOCKED_TUITS.map(tuit =>
    createTuit(
      newUser._id,
      tuit
    )
  )
  const tuits = await findAllTuits();


  render(
    <HashRouter>
      <Tuits tuits={tuits}/>
    </HashRouter>);
  const linkElement = screen.getByText(/alice's tuit/i);
  expect(linkElement).toBeInTheDocument();
});

