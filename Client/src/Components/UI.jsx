import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import { SportsSoccer, Event, EmojiEvents, Schedule, Group } from '@mui/icons-material';
import MatchesList from './MatchesList';

const UI = () => {
  return (
    <Box
    sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #E0F7FA 0%, #BBDEFB 50%, #E1BEE7 100%)', overflow: 'hidden', width: '100%' }}>
      {/* Animated Background Elements */}
      <Box sx={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: '-10rem', right: '-10rem', width: { xs: '15rem', md: '20rem' }, height: { xs: '15rem', md: '20rem' }, background: 'radial-gradient(circle, rgba(0, 200, 83, 0.2), transparent)', borderRadius: '50%', filter: 'blur(4rem)', animation: 'pulse 4s infinite' }} />
        <Box sx={{ position: 'absolute', bottom: '-10rem', left: '-10rem', width: { xs: '15rem', md: '20rem' }, height: { xs: '15rem', md: '20rem' }, background: 'radial-gradient(circle, rgba(33, 150, 243, 0.2), transparent)', borderRadius: '50%', filter: 'blur(4rem)', animation: 'pulse 4s infinite 1s' }} />
      </Box>

      {/* Header */}
      <AppBar position="sticky"  sx={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        , boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 }, py: 1.5, maxWidth: 'none', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
            <Box sx={{ p: 1.5, background: 'linear-gradient(90deg, #00C853, #1976D2)', borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <EmojiEvents sx={{ fontSize: { xs: 28, md: 32 }, color: 'white' }} />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, background: 'linear-gradient(90deg, #00C853, #1976D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
                Premier League
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Live Match Schedule</Typography>
            </Box>
          </Box>
          
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container disableGutters sx={{ width: '100vw', px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}>
          <Chip
            icon={<Event color='success' />}
            label="2024-25 Season"
            // color="primary"
            sx={{
              mt:2,
              mb: 3,
              px: 2,
              py: 3,
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontWeight: 'medium',
              background: 'rgba(255, 255, 255, 0.75)',
              color:'rgb(22, 22, 22)',
              backdropFilter: 'blur(4px)',
              borderRadius: '16px',
              fontFamily:'Helvetica'
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: '#1A237E',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              lineHeight: 1.2,
            }}
          >
            Upcoming{' '}
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #00C853, #1976D2, #AB47BC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Football Matches
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: { xs: '100%', md: '48rem' },
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Never miss a moment of Premier League action. Get real-time updates on upcoming fixtures, team lineups, and match schedules.
          </Typography>
        </Box>

        {/* Stats Grid */}
        {/* <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 6, md: 8 }, width: '100%', mx: 0 }}>
          {[
            { icon: <EmojiEvents sx={{ fontSize: { xs: 28, md: 32 }, color: 'white' }} />, value: '20', label: 'Premier Teams', gradient: 'linear-gradient(90deg, #00C853, #4CAF50)' },
            { icon: <Event sx={{ fontSize: { xs: 28, md: 32 }, color: 'white' }} />, value: '38', label: 'Match Rounds', gradient: 'linear-gradient(90deg, #1976D2, #2196F3)' },
            { icon: <Schedule sx={{ fontSize: { xs: 28, md: 32 }, color: 'white' }} />, value: 'Live', label: 'Real-time Data', gradient: 'linear-gradient(90deg, #AB47BC, #BA68C8)' },
            { icon: <Group sx={{ fontSize: { xs: 28, md: 32 }, color: 'white' }} />, value: '380', label: 'Total Matches', gradient: 'linear-gradient(90deg, #EC407A, #F06292)' },
          ].map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' },
                  borderRadius: 2,
                  width: '100%',
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: { xs: 3, md: 4 } }}>
                  <Box sx={{ p: 2, background: stat.gradient, borderRadius: 2, mb: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1A237E', mb: 1, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}

        {/* Matches List */}
        <MatchesList />
      </Container>

      {/* Footer */}
      <Box sx={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255, 255, 255, 0.2)', mt: { xs: 6, md: 8 }, py: 4, width: '100vw' }}>
        <Container sx={{ textAlign: 'center', px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <SportsSoccer sx={{ fontSize: { xs: 20, md: 24 }, color: '#00C853' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1A237E', fontSize: { xs: '1.125rem', md: '1.25rem' } }}>
              Football Matches
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
            Powered by{' '}
            <a
              href="https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00C853', fontWeight: 'medium', textDecoration: 'none' }}
            >
              football-data.org
            </a>
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: { xs: '0.625rem', md: '0.75rem' } }}>
            API: https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED
          </Typography>
        </Container>
      </Box>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </Box>
  );
};

export default UI;