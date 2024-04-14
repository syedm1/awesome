// const randomDateTime = moment(today).set({
//   hour: startTime.hour(),
//   minute: Math.floor(
//     Math.random() * (endTime.minute() - startTime.minute() + 1) +
//       startTime.minute()
//   ),
// });

// return randomDateTime.format(FORMAT);

const specificDateTimes = [
  '12-04-2024 01:30',
  '12-04-2024 03:15',
  '12-04-2024 04:45',
  '12-04-2024 16:00',
];

export const dummyTasks = [
  {
    title: 'Task 1',
    description: 'This is task 1',
    priority: 'low',
    categoryTags: 'test',
    dueDate: 'today',
    taskType: 'basic',
    taskStartDateTime: specificDateTimes[0],
  },
  {
    title: 'Task 2',
    description: 'This is task 2',
    priority: 'low',
    categoryTags: 'test',
    dueDate: 'today',
    taskType: 'basic',
    taskStartDateTime: specificDateTimes[1],
  },
  {
    title: 'Task 3',
    description: 'This is task 3',
    priority: 'low',
    categoryTags: 'test',
    dueDate: 'today',
    taskType: 'basic',
    taskStartDateTime: '16-12-2023 01:30',
  },
  {
    title: 'Task 3-d1',
    description: 'This is task 3',
    priority: 'low',
    categoryTags: 'test',
    dueDate: 'today',
    taskType: 'basic',
    taskStartDateTime: '16-12-2023 01:10',
  },
  {
    title: 'Task 3 -d2',
    description: 'This is task 3',
    priority: 'low',
    categoryTags: 'test',
    dueDate: 'today',
    taskType: 'basic',
    taskStartDateTime: '16-12-2023 01:30',
  },
  {
    title: 'Task 4',
    description: 'This is task 4',
    priority: 'low',
    categoryTags: 'test',
    dueDate: 'today',
    taskType: 'basic',
    taskStartDateTime: '15-12-2023 01:30',
  },
];
