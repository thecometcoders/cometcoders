

import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase.js';
import {useEffect, useState} from "react";

import MEETING_NOTE_DATA from "../../meeting-note-data-data";

import {addCollectionAndDocuments} from "../../firebase.js";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {Box, Container, Divider, Stack, Typography} from "@mui/material";


const AccountabilityMeetings = () => {

  const [meetingNotes, setMeetingNotes] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "meeting-notes"))
      .then((querySnapshot)=>{
        const newData = querySnapshot.docs
          .map((doc) => (doc.data()));
        setMeetingNotes(newData);
        console.log(newData);
      })
  }
  useEffect(()=>{
    fetchPost();
  }, [])

  useEffect(() => {
    addCollectionAndDocuments('meeting-notes', MEETING_NOTE_DATA)
  },[])

  if (!meetingNotes.length) return <h2>Loading....</h2>;

  return (

    <Container >

      <div>
        {meetingNotes.map(month => {
          if (!month) return null;
          return (
            <div>
              <Divider><Typography variant="body2" color="text.secondary">{month.month}</Typography></Divider>
              <Stack spacing={2}>
              {month.posts
                .filter(post => post && post.date)
                .map(post => {
                  if (!post) return null;
                  return (
                    <Card >
                      <CardHeader title={post.date} />
                      {post.image && <CardMedia component="img" image={post.image} /> }
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {post.notes}
                        </Typography>
                        {post.attendees
                          .filter(attendee => attendee && attendee.name)
                          .map(attendee => {
                            if (!attendee) return null;
                            return (
                              <>
                                <Typography variant="h6">
                                  {attendee.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  Accomplished: {attendee.accomplishments && attendee.accomplishments.join(", ")}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  Committing to: {attendee.commitments && attendee.commitments.join(", ")}
                                </Typography>
                              </>
                            )
                          })}
                      </CardContent>
                    </Card>
                  )
                })}
              </Stack>
            </div>
          )
        })}
      </div>

    </Container>

  )
}

export default AccountabilityMeetings
