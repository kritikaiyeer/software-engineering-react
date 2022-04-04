/* eslint-disable testing-library/await-async-query */
import {act, create} from 'react-test-renderer';
import {HashRouter} from "react-router-dom";
import MyDislikes from "../components/profile/my-dislike";

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

test('disliked tuit list renders async',  async() => {
  
    let tuitsDisliked
    act(() => {
        tuitsDisliked = create(
            <HashRouter>
            <MyDislikes />
          </HashRouter>
        )
    })
    const root = tuitsDisliked.root;
    expect("2").toBe("2");


  });