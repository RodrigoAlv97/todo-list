export const getPrioColor = (prio) => {

  switch (prio) {
    case 'Low':
      return '#d4fdbe'
      break;
    
      case 'Medium':
      return '#fdf4be'
        break;

        case 'High':
          return '#fdcbbe'
      break;

    default:
      break;
  }


}