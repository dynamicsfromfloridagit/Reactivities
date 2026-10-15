import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

function App() {
  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default App


/*
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";


function App() {
  //const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

 const {activities, isPending} = useActivities();

   const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find(x => x.id === id));
  }

  const handleCancelSelect = () => {
    setSelectedActivity(undefined);
  }

const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelect();
    setEditMode(true);
  }

const handleFormClose = () => {
    setEditMode(false);
  }


  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelect}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
          ></ActivityDashboard>
        )}
      </Container>
    </Box>
  );
}

export default App
*/