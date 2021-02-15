export const getPinColor = (type) => {
    switch(type) {
        case '1 Hour Parking':
        case '2 Hour Parking':
        case '3 Hour Parking':
        case '4 Hour Parking':
            return 'orange'
        case 'Paid Parking':
            return 'purple'
        case 'Free Parking':
            return 'blue'
        case 'Spot Taken':
            return 'red'
        default:
            return <>Invalid Type</>
    }
}