import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, Typography, Grid, Box, Avatar, Container, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

const StudentProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) { console.log(response) }
  else if (error) { console.log(error) }

  const sclassName = currentUser.sclassName
  const studentSchool = currentUser.school
  const formatDate = (date) => {
    if (!date) return 'Not provided';
    const parsedDate = new Date(`${date}T00:00:00`);
    return Number.isNaN(parsedDate.getTime()) ? date : parsedDate.toLocaleDateString();
  };

  return (
    <>
      <Container maxWidth="md">
        <StyledPaper elevation={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Avatar alt="Student Avatar" sx={{ width: 150, height: 150 }}>
                  {String(currentUser.name).charAt(0)}
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="h5" component="h2" textAlign="center">
                  {currentUser.name}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  Student Roll No: {currentUser.rollNum}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  Class: {sclassName?.sclassName || 'Not provided'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  School: {studentSchool?.schoolName || 'Not provided'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </StyledPaper>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Date of Birth:</strong> {formatDate(currentUser.dateOfBirth)}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Gender:</strong> {currentUser.gender || 'Not provided'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Email:</strong> {currentUser.email || 'Not provided'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Phone:</strong> {currentUser.phone || 'Not provided'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Address:</strong> {currentUser.address || 'Not provided'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>Emergency Contact:</strong> {currentUser.emergencyContact || 'Not provided'}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Fee Payments
            </Typography>
            {(currentUser.feePayments || []).length === 0
              ? <Typography>No payments recorded yet.</Typography>
              : (currentUser.feePayments || []).map((payment) => (
                <Typography key={payment._id} component="p">
                  {new Date(payment.paidAt).toLocaleDateString()} - {Number(payment.amount).toFixed(2)}
                  {payment.note ? ` - ${payment.note}` : ''}
                </Typography>
              ))}
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default StudentProfile

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
`;