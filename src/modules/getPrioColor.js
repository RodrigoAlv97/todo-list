export const getPrioColor = (prio) => {

  switch (prio) {
    case 'Low':
      return '#73ff77'
      break;
    
      case 'Medium':
      return '#ffff73'
        break;

        case 'High':
          return '#ff7373'
      break;

    default:
      break;
  }


}