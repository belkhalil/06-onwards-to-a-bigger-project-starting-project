import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [{
    "id": "1254",
    "title": "meetup",
    "image": "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "address": "someAddress"

},
{
    "id": "12545",
    "title": "meetup 25",
    "image": "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "address": "someAddress 2"

}]

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
    
}
export default HomePage;