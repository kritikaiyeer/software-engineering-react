import Tuits from "./index";
import tuits from "./tuits-data.json"
import {act, create} from "react-test-renderer";

test('tuits render', () => {
  let tuits
  act(() => {
    create(<Tuits tuits={tuits} refreshTuits={() => {}}/>)
  })
}) 