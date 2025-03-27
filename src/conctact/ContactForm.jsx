
import {useImmer} from "use-immer"

const initialData = {
    nama: "",
    Absen: ""
}
export default function ContactForm(){

    const[contact,setContact]  = useImmer(initialData)

    function handleNameChange(e){
       setContact(draft => {
        draft.nama = e.target.value
       })
    }

    function handleAbsenChange(e){
      setContact(draft => {
        draft.Absen = e.target.value
       })
    }

    return(
        <>
        <div>
          <h1>contact form</h1>
          <form>
            <input type="text" placeholder="Name" value={contact.nama} onChange={handleNameChange}/>
            <br />
            <input type="text" placeholder="Absen" value={contact.Absen} onChange={handleAbsenChange}/>
          </form>
          <h1>contact detail</h1>

          <p>nama: {contact.nama}</p>
          <p>absen: {contact.Absen}</p>
        </div>
        </>
    )
}