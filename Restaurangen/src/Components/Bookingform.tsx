export default function Bookingform(isAvaible: boolean | string, date: Date, time: string, guests: string) {
  console.log(isAvaible, date, time, guests);

  const notAvaible = <p>Tyvärr har vi inte tillräckligt många lediga bord detta datumet och tiden, testa en annan dag eller annan tid</p>
  const BookingForm = (<div>
    <p>Det finns lediga bord detta datumet och tiden, vi behöver bara några uppgifter från dig</p>
    
    </div>)

    return (
        <div>
            {isAvaible === true ? BookingForm : isAvaible === false ? notAvaible : isAvaible === '' ? '' : ''}
        </div>
    )
}