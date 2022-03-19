import {
  createTuit,
  deleteTuit,
  deleteTuitByContent,
  findTuitById,
  findAllTuits
} from "../services/tuits-service";
import { createUser, deleteUsersByUsername, findAllUsers } from "../services/users-service";

describe('can create tuit with REST API', () => {
  // sample user to insert
  const tuitMock = {
    tuit: 'Hey this is a test tuit'
  };
  const ripley = {
    username: 'ellenripley',
    password: 'lv426',
    email: 'ellenripley@aliens.com'
  };

  // setup test before running test
  beforeAll(() => {
    // remove any/all tuits to make sure we create it in the test
    const satt = deleteTuitByContent(tuitMock.tuit);
    return deleteUsersByUsername(ripley.username);
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    const satt = deleteTuitByContent(tuitMock.tuit);
    return  deleteUsersByUsername(ripley.username);
  })

  test('can insert new tuits with REST API', async () => {
    // insert new user in the database
    const newUser = await createUser(ripley)
    const newTuit = await createTuit(newUser._id,tuitMock);

    // verify inserted user's properties match parameter user
    expect(newTuit.tuit).toEqual(tuitMock.tuit);
    expect(newTuit.postedBy).toEqual(newUser._id);
  });
});

describe('can delete tuit wtih REST API', () => {
  // sample user to insert
  const tuitMock = {
    tuit: 'Hey this is a test tuit'
  };
  const ripley = {
    username: 'ellenripley',
    password: 'lv426',
    email: 'ellenripley@aliens.com'
  };

  // setup test before running test
  beforeAll(() => {
    // remove any/all tuits to make sure we create it in the test
    return deleteUsersByUsername(ripley.username);
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return  deleteUsersByUsername(ripley.username);
  })
  test('can delete tuits with REST API', async () => {
    // insert new user in the database
    const newUser = await createUser(ripley)
    const newTuit = await createTuit(newUser._id,tuitMock);
    const status = await deleteTuit(newTuit._id);

    // verify inserted user's properties match parameter user
    expect(status.deletedCount).toBeGreaterThanOrEqual(1);
  });
});

describe('can retrieve a tuit by their primary key with REST API', () => {
  // sample user to insert
  const tuitMock = {
    tuit: 'Hey this is a test tuit'
  };
  const ripley = {
    username: 'ellenripley',
    password: 'lv426',
    email: 'ellenripley@aliens.com'
  };

  // setup test before running test
  beforeAll(() => {
    // remove any/all tuits to make sure we create it in the test
    const satt = deleteTuitByContent(tuitMock.tuit);
    return deleteUsersByUsername(ripley.username);
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    const satt = deleteTuitByContent(tuitMock.tuit);
    return  deleteUsersByUsername(ripley.username);
  })
  test('can retrieve tuit from REST API by primary key', async () => {
    // insert new user in the database
    const newUser = await createUser(ripley)
    const newTuit = await createTuit(newUser._id,tuitMock);
    

    // verify inserted user's properties match parameter user
    expect(newTuit.tuit).toEqual(tuitMock.tuit);
    expect(newTuit.postedBy).toEqual(newUser._id);

    const existingTuit = await findTuitById(newTuit._id);
    expect(existingTuit.tuit).toEqual(tuitMock.tuit);
    expect(existingTuit.postedBy).toEqual(newUser);

  });
});
  describe('can retrieve all tuits with REST API', () => {

    const ripley = {
      username: 'ellenripley',
      password: 'lv426',
      email: 'ellenripley@aliens.com'
    };
  
    const tuitMocked = [
      {
        tuit: "test1"
      },
      {
        tuit: "test2"
      },
      {
        tuit: "test3"
      },
    ]
  
    beforeAll(async () => {
      tuitMocked.forEach(tuiter => {
        deleteTuitByContent(tuiter.tuit);
      })
      return deleteUsersByUsername(ripley.username);
    })
  
    afterAll(() => {
      // remove any data we created
      tuitMocked.forEach(tuiter => {
        deleteTuitByContent(tuiter.tuit);
      })
      deleteUsersByUsername(ripley.username);
    })
  
    test('can retrieve all tuits with REST API', async () => {
      const newUser = await createUser(ripley);
      tuitMocked.map(tuit =>
        createTuit(
          newUser._id,
          tuit
        )
      )
  
      const newTuits = await findAllTuits();
      // there should be a minimum number of tuits
      expect(newTuits.length).toBeGreaterThanOrEqual(newTuits.length);
  
      // let's check each tuit we inserted
      const tuitsWeInserted = newTuits.filter(
        tuit => tuitMocked.indexOf(tuit.tuit) >= 0);
  
      tuitsWeInserted.forEach(tuiter => {
        const tuit = newTuits.find(tuit => tuit === tuiter.tuit);
        expect(tuiter.tuit).toEqual(tuit);
        expect(tuiter.postedBy._id).toEqual(newUser._id);
      });
    })
  });
