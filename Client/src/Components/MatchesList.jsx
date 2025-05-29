import { AccessTime, FlashOn, Group, LocationOn } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Chip, Grid, Skeleton, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';


const MatchesList = () => {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);
  
  const splitISODate=(isoString)=>{
    const dateObj = new Date(isoString);
    return(dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }))
     
  }

  
  const splitTime=(isoString)=>{
    const dateObj = new Date(isoString);
    return(dateObj.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    )
  }
  
  
useEffect(() => {
  
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(import.meta.env.VITE_BACKEND_URL);
      console.log('Response:', res.data);
      return setProducts(res.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally{
      setLoading(false);
    }
  };

  fetchData();
}, []);

  
  return (
    
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
          <Box
            sx={{
              p: 1.5,
              background: 'linear-gradient(90deg, #00C853, #1976D2)',
              borderRadius: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            <FlashOn sx={{ fontSize: { xs: 20, md: 24 }, color: 'white' }} />
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#1A237E',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Next Fixtures
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', md: '0.875rem' } }}
            >
              Premier League 2024-25 Season
            </Typography>
          </Box>
        </Box>
        <Chip
          icon={<Group />}
          label="Live Schedule"
          variant="outlined"
          sx={{ display: { xs: 'none', md: 'flex' }, height: '32px', fontSize: { xs: '0.75rem', md: '0.875rem' } }}
        />
      </Box>
              {loading?(
                Array.from(new Array(3)).map((_, index) => (
    <Card key={index} sx={{ borderRadius: 2, mb: 2, p: 2 }}>
      <Skeleton variant="text" width={120} height={30} />
      <Grid container spacing={2} alignItems="center" mt={1}>
        <Grid size={{xs:4}}>
          <Box display="flex" alignItems="center" gap={2}>
            <Skeleton variant="circular" width={64} height={64} />
            <Box>
              <Skeleton variant="text" width={100} height={20} />
              <Skeleton variant="text" width={80} height={15} />
            </Box>
          </Box>
        </Grid>
        <Grid size={{xs:4}} textAlign="center">
          <Skeleton variant="text" width={100} height={20} sx={{ mx: 'auto' }} />
          <Skeleton variant="text" width={60} height={15} sx={{ mx: 'auto', mt: 1 }} />
          <Skeleton variant="text" width={80} height={15} sx={{ mx: 'auto', mt: 1 }} />
        </Grid>
        <Grid size={{xs:4}}>
          <Box display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
            <Box textAlign="right">
              <Skeleton variant="text" width={100} height={20} />
              <Skeleton variant="text" width={80} height={15} />
            </Box>
            <Skeleton variant="circular" width={64} height={64} />
          </Box>
        </Grid>
      </Grid>
    </Card>
  ))
              ):(
                products.length===0?(
                  <Typography
    variant="h6"
    sx={{
      textAlign: 'center',
      color: 'text.secondary',
      mt: 4,
    }}
  >
    No upcoming matches found.
  </Typography>
                ):(
                  products.map((match,index) => {
        // const { date, time } = formatDate(match.dateEvent, match.timeEvent);
        // const status = getMatchStatus(match.dateEvent);

        return (
          <Card
            key={index}
            sx={{
              background: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.5s',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                transform: 'scale(1.02)',
              },
              overflow: 'hidden',
              borderRadius: 2,
            }}
          >
            {/* Match Header */}
            <CardContent
              sx={{
                background:
                  'linear-gradient(90deg, rgba(0, 200, 83, 0.1), rgba(33, 150, 243, 0.1))',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                p: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip
                    label={`Round ${match.round || 'TBD'}`}
                    size="small"
                    sx={{
                      fontWeight: 'medium',
                      fontSize: { xs: '0.75rem', md: '0.875rem' },
                      height: '28px',
                    }}
                  />
                  {getStatusBadge(status)}
                </Box> */}
                {/* <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                >
                  {match.league}
                </Typography> */}
              </Box>
            </CardContent>

            {/* Match Content */}
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Grid container alignItems="center" spacing={{ xs: 2, md: 3 }}>
                {/* Home Team */}
                <Grid
                  size={{xs:12,md:4}}
                 
                  sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 } }}
                >
                  <Avatar
                    src={match?.HomeTeam?.image}
                    alt={`${match?.HomeTeam?.name} badge`}
                    sx={{
                      width: { xs: 48, md: 64 },
                      height: { xs: 48, md: 64 },
                      p: 1,
                      bgcolor: 'white',
                      border: '2px solid white',
                      boxShadow: 2,
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                    imgProps={{
                      onError: (e) =>
                        (e.target.src = '/placeholder.svg?height=64&width=64'),
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#1A237E',
                        fontSize: { xs: '1rem', md: '1.25rem' },
                      }}
                    >
                      {match?.HomeTeam?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'success.main',
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                      }}
                    >
                      Home Team
                    </Typography>
                  </Box>
                </Grid>

                {/* Match Info */}
                <Grid size={{xs:12,md:4}} sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 'bold',
                        color: '#1A237E',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                      }}
                    >
                      {splitISODate(match?.Date)}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        color: 'text.secondary',
                      }}
                    >
                      <AccessTime sx={{ fontSize: { xs: 14, md: 16 } }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 'medium',
                          fontSize: { xs: '0.75rem', md: '0.875rem' },
                        }}
                      >
                        {splitTime(match?.Date)}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#B0BEC5',
                      fontWeight: 'bold',
                      transition: 'color 0.3s',
                      '.MuiCard-root:hover &': { color: '#00C853' },
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    VS
                  </Typography>
                  {match?.venue && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        color: 'text.secondary',
                        mt: 2,
                      }}
                    >
                      <LocationOn sx={{ fontSize: { xs: 14, md: 16 } }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: '0.75rem', md: '0.875rem' },
                        }}
                      >
                        {match.venue}
                      </Typography>
                    </Box>
                  )}
                </Grid>

                {/* Away Team */}
                <Grid
                  size={{xs:12,md:4}}
                 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, md: 2 },
                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                  }}
                >
                  <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#1A237E',
                        fontSize: { xs: '1rem', md: '1.25rem' },
                      }}
                    >
                      {match?.AwayTeam?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'primary.main',
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                      }}
                    >
                      Away Team
                    </Typography>
                  </Box>
                  <Avatar
                    src={match?.AwayTeam?.image}
                    alt={`${match?.AwayTeam?.name} badge`}
                    sx={{
                      width: { xs: 48, md: 64 },
                      height: { xs: 48, md: 64 },
                      p: 1,
                      bgcolor: 'white',
                      border: '2px solid white',
                      boxShadow: 2,
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                    imgProps={{
                      onError: (e) =>
                        (e.target.src = '/placeholder.svg?height=64&width=64'),
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })
                )
              )
              
              }
      {}
    </Box>
  );
};

export default MatchesList;
