import React from 'react';

import Exercise from './Exercise';

const ExerciseList = (props) => {
  const exercises = [
    {
      exerciseID: 1,
      title: 'One-Arm Kettlebell Swing',
      videoURL:
        'https://www.youtube.com/watch?v=0L0cOOpyPpA&list=PLGGOclTSYWJgrdDnOLctzLvOUiHsEPsP0&index=4&t=4s',
    },
    {
      exerciseID: 2,
      title: 'Turkish Get-Up',
      videoURL:
        'https://www.youtube.com/watch?v=SpN-wEogszg&list=PLGGOclTSYWJgrdDnOLctzLvOUiHsEPsP0&index=1&t=67s',
    },
    {
      exerciseID: 3,
      title: 'Kettlebell Snatch',
      videoURL: 'https://www.youtube.com/watch?v=6SvawOLVTbo',
    },
  ];

  return (
    <div className="ExerciseList">
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
