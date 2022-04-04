import Tuit from "./tuit";
import {render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";

test('', () => {
  render(
    <HashRouter>
      <Tuit tuit={{
        _id: '123',
        postedOn: '2022-01-01',
        postedBy: {username: 'alice'},
        stats: {}
      }} likeTuit={() => {}} deleteTuit={() => {}}/>
    </HashRouter>);
}); 