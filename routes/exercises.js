// Build our API routes using the Express Router.
// export the express Router to the main server.js, where we can use it to template routes.

const exerciseRouter = require('express').Router();

//  @route      GET /api/exercises
//  @descr      Get all exercises in the db
//  @access     Public
exerciseRouter.get('/', async (req, res) => {
  try {
    res.send({
      msg: 'Get all exercises from the database.',
    });
  } catch (err) {
    console.error(err.message);
    // Error response goes here.
  }
});

//  @route      GET /api/exercises/exerciseID
//  @descr      Get all exercises in the db
//  @access     Public
exerciseRouter.get('/:exerciseID', async (req, res) => {
  try {
    res.send({
      msg: `Get exercise with ID of ${req.params.exerciseID}.`,
    });
  } catch (err) {
    console.error(err.message);
    // Error response goes here.
  }
});

//  @route      POST /api/exercises
//  @descr      Create a new exercise
//  @access     Private (admin)
exerciseRouter.post('/', async (req, res) => {
  try {
    res.send({
      msg: 'Create a new exercise.',
    });
  } catch (err) {
    console.error(err.message);
    // Error response goes here.
  }
});

//  @route      PUT /api/exercises/:exerciseID
//  @descr      Create a new exercise
//  @access     Private (admin)
exerciseRouter.put('/:exerciseID', async (req, res) => {
  try {
    res.send({
      msg: `Update exercise with id of ${req.params.exerciseID} (admin only).`,
    });
  } catch (err) {
    console.error(err.message);
    // Error response goes here.
  }
});

//  @route      DELETE /api/exercises/:exerciseID
//  @descr      Create a new exercise
//  @access     Private (admin)
exerciseRouter.delete('/:exerciseID', async (req, res) => {
  try {
    res.send({
      msg: `Delete exercise with id of ${req.params.exerciseID} (admin only).`,
    });
  } catch (err) {
    console.error(err.message);
    // Error response goes here.
  }
});

module.exports = exerciseRouter;
