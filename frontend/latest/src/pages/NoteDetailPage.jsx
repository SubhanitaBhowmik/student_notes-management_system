import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';

const NoteDetailPage = () => {
  const [note,setNote] = useState(null);
  const [loading,setLoading] = useState(true);
  const[saving,setSaving] = useState(false)

  const navigate = useNavigate()

  const {id} = useParams();
  useEffect(()=>{
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
    

  },[id]);

  console.log({note});

  if(loading){
    
  }
  
  
  return (
    <div>
    <h1>notes details</h1>
    </div>
  )
}

export default NoteDetailPage
