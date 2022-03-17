import {
  createTuit,
  deleteTuit,
  deleteAllTuit,
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
    return deleteUsersByUsername(ripley.username);
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
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
    return deleteUsersByUsername(ripley.username);
  })

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
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

// describe('can retrieve all tuits with REST API', () => {
//   // sample users we'll insert to then retrieve
//   const usernames = [
//     "larry", "curley", "moe"
//   ];

//   const tuitMock = {
//     tuit: "hey this a test tuit now!"
//   }

//   // setup data before test
//   beforeAll(() =>
//     // insert several known users
//     Promise.all(usernames.map(username =>
//       createUser({
//         username,
//         password: `${username}123`,
//         email: `${username}@stooges.com`
//       })
//     ))
//   );

//   // clean up after ourselves
//   afterAll(() =>
//     // delete the users we inserted
//     Promise.all(usernames.map(username =>
//       deleteUsersByUsername(username)
//     ))
//   );

//   test('can retrieve all tuits from REST API', async () => {
//     // retrieve all the users
//     const users = await findAllUsers();
//     const stat = await deleteAllTuit();
//     console.log(stat);
//     // add tuits for each user created
//     users.forEach(async (user) => {
//        await createTuit(user._id,tuitMock);
//     })

//     const tuits = await findAllTuits();

//     // compare the actual users in database with the ones we sent
//     tuits.forEach(tuit => {
//       const user = users.find(user => user === tuit.postedBy);
//       expect(tuit.postedBy).toEqual(user);
//       expect(tuit.tuit).toEqual(tuitMock.tuit);
//     });
//   });
// });