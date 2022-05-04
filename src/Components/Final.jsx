import { useEffect } from "react";
import { Box, Card, Typography, CardContent, Container } from "@mui/material";

const Final = ({ setUserProfile, userProfile }) => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
         <Typography
                sx={{ fontSize: 20, color: "#09279a", fontWeight: "bold" }}
                gutterBottom
              >
                2 step Verification User Profile
              </Typography>
      {userProfile?.userObj && (
        <Container>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 20, color: "#09279a", fontWeight: "bold" }}
                gutterBottom
              >
                First Name: {userProfile?.userObj.firstName}
              </Typography>
              <Typography
                sx={{ fontSize: 14, color: "#09279a", fontWeight: "bold" }}
                variant="body2"
              ></Typography>

              <Typography
                sx={{ fontSize: 20, color: "#09279a", fontWeight: "bold" }}
                gutterBottom
              >
                Last Name: {userProfile?.userObj.lastName}
              </Typography>
              <Typography
                sx={{ fontSize: 20, color: "#09279a", fontWeight: "bold" }}
                gutterBottom
              >
                Email: {userProfile?.userObj.email}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      )}
    </Box>
  );
};

export default Final;
