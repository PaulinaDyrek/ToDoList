export function getSubheading(numberOfTasks) {
  switch (true) {
    case numberOfTasks > 1:
      return `${numberOfTasks} tasks`;
    case numberOfTasks === 1:
      return `${numberOfTasks} task`;
    case numberOfTasks === 0:
      return "";
  }
}
