import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MatchContext } from './MatchContext';

export default function AloneMatch() {
  const { id } = useParams();
  const { matches, loading } = useContext(MatchContext);

  if (loading) return <div>Loading...</div>;

  const match = matches.find(m => m.id === parseInt(id));

  if (!match) return <div>Match not found</div>;



  return (
    <div className='match-details'>
      <h2>{match.homeTeam.name} <img src={match.homeTeam.crest} style={{height:'50px', width:'50px'}}/> vs {match.awayTeam.name} <img src={match.awayTeam.crest} style={{height:'50px', width:'50px'}}/></h2>
      <p><strong>Date:</strong> {new Date(match.utcDate).toLocaleString()}</p>
      <p><strong>Score:</strong> {match.score.fullTime.home} - {match.score.fullTime.away}</p>
      <p>Status: {match.status}</p>
      {/* <p>Competition: {match.competition.name}</p>
      <p>Stage: {match.stage}</p> */}
      <p>Referee: {match.referees[0].name}</p>
      
    </div>
  );
}
