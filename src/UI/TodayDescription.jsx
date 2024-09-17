import './TodayDescription.css'

function TodayDescription( { todayDescription } ) {
    let time = new Date(Date.now());
    const monthsNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const dayNames = [
        'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
    ];
    const month = monthsNames[time.getMonth()];
    const day = dayNames[time.getDay()];
    const timeString = time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0');
    const dateString = day + ' ' + time.getDate() + ' de ' + month + ' ' + time.getFullYear();

    return (
        <>
            <div className={'temperature'}>
                <p className={'temperatureText'}> {todayDescription.temperature + '° C'}</p>
            </div>
            <div className={'weatherDescription'}>
                <p>- {todayDescription.description} -</p>
            </div>
            <div className={'currentTime'}>
                <p>{`${timeString} > ${dateString}`}</p>
            </div>

        </>
    )
}

export default TodayDescription;