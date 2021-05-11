import React from 'react';

import Exercise from './Exercise';

const ExerciseList = (props) => {
  const exercises = [
    {
      exerciseID: 1,
      title: 'One-Arm Kettlebell Swing',
      videoURL: 'https://www.youtube.com/watch?v=0L0cOOpyPpA',
    },
    {
      exerciseID: 2,
      title: 'Turkish Get Down',
      videoURL: 'https://www.youtube.com/watch?v=8Qb5IIcaTG8',
    },
    {
      exerciseID: 3,
      title: 'Kettlebell Snatch',
      videoURL: 'https://www.youtube.com/watch?v=6SvawOLVTbo',
    },
  ];

  return (
    <div className="exercise-list">
      {exercises.map((exercise) => {
        console.log(exercise);
        return (
          <div>
            <Exercise
              key={exercise.exerciseID}
              title={exercise.title}
              videoURL={exercise.videoURL}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExerciseList;
