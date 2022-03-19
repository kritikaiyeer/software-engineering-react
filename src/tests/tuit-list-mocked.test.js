import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits, createTuit} from "../services/tuits-service";
import {createUser} from "../services/users-service";
import axios from "axios";

jest.mock('axios');
const MOCKED_TUITS = [
    {
        _id: "1",
        tuit: "alice's tuit",
    },
    {
      _id: "2",
        tuit: "bob's  tuit",
    },
    {
      _id: "3",
        tuit: "charlie's tuit",
    },
    
  ]
test('tuit list renders async', async () => {
    axios.get.mockImplementation(() =>
    Promise.resolve({ data: {tuits: MOCKED_TUITS} }));

    const response = await findAllTuits();
    const tuits = response.tuits;
  
    render(
      <HashRouter>
        <Tuits tuits={tuits}/>
      </HashRouter>);
    const linkElement = screen.getByText(/alice's tuit/i);
    expect(linkElement).toBeInTheDocument();
  });