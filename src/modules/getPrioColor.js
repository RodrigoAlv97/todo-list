export const getPrioColor = (prio) => {

  switch (prio) {
    case 'Low':
      return 'Green'
      break;
    
      case 'Medium':
      return 'Yellow'
        break;

        case 'High':
          return 'red'
      break;

    default:
      break;
  }


}