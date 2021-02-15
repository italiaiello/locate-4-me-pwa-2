export const renderPins = (type, showOrangePins, showPurplePins, showBluePins, showRedPins) => {
    switch(type) {
        case '1 Hour Parking':
        case '2 Hour Parking':
        case '3 Hour Parking':
        case '4 Hour Parking':
            if (showOrangePins) {
                return true
            }
            return false
        case 'Paid Parking':
            if (showPurplePins) {
                return true
            }
            return false
        case 'Free Parking':
            if (showBluePins) {
                return true
            }
            return false
        case 'Spot Taken':
            if (showRedPins) {
                return true
            }
            return false
        default:
            return <>Invalid Type</>
    }
}