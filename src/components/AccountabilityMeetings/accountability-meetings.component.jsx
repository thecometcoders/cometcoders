import {collection, getDocs} from "firebase/firestore";
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
  const [totalPosts, setTotalPosts] = useState([])

  useEffect(() => {
    const count = countPosts(meetingNotes);
    setTotalPosts(count);
  }, [meetingNotes]);

  function countPosts(months) {
    let count = 0;
    months.forEach(month => {
      count += month.posts.length;
    });
    return count;
  }

  const fetchPost = async () => {
    await getDocs(collection(db, "meeting-notes"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => (doc.data()));

        // Sort months
        newData.sort((a, b) => new Date(b.month) - new Date(a.month));

        // Sort posts in each month
        newData.forEach(month => {
          month.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        });

        setMeetingNotes(newData);
      })
  }
  useEffect(() => {
    fetchPost();
  }, [])
  useEffect(() => {
    addCollectionAndDocuments('meeting-notes', MEETING_NOTE_DATA)
  }, [])


  // Render a loading screen when the post data has not arrive yet
  if (!meetingNotes.length) return <h2>Loading....</h2>;

  return (

    <Container sx={{width: '100%'}} >

      <Box>
        {meetingNotes.map(month => {
          if (!month) return null;
          return (
            <div>
              <Divider sx={{
                "&::before, &::after": {
                  borderColor: "primary.main",
                },
              }}><Typography variant="primary" color={"primary.main"}>{new Date(month.month).toLocaleString('en', { month: 'long' })}</Typography></Divider>
              <Stack spacing={2} alignItems={"center"}>
                {month.posts
                  .filter(post => post && post.date)
                  .map((post, index) => {
                    if (!post) return null;
                    return (

                      <Card
                        sx={{maxWidth: 600}}
                      >
                        <CardHeader title={
                          <><Typography variant="subheading">Comet Log #{totalPosts-index}</Typography>
                          <Typography variant="body2">{post.date}</Typography></>
                        }/>


                        {post.image && <CardMedia component="img" image={post.image}/>}
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
                                  <Typography variant="subheading">
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
      </Box>

    </Container>

  )
}

export default AccountabilityMeetings
