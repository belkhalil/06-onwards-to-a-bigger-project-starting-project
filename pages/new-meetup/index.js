import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage(){
    const addMeetupHandler = (entredMeetup)=>{
        console.log(entredMeetup);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>

}

export default NewMeetupPage;