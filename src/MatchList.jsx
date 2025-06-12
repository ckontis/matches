import { useContext } from 'react';
import { MatchContext } from './MatchContext';
import MatchCard from './MatchCard';
import { useNavigate } from 'react-router-dom';

export default function MatchList() {
  const { matches, loading } = useContext(MatchContext);
  const navigate = useNavigate();

  if (loading) return <div>Loading matches...</div>;

return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1rem',
        padding: '1rem',
    }}>
        {matches
            .filter(match => match.homeTeam.name === "Arsenal FC" || match.awayTeam.name === "Arsenal FC")
            .slice(0, 20)
            .map(match => (
                <div key={match.id} onClick={() => navigate(`/match/${match.id}`)}>
                    <MatchCard match={match} />
                </div>
            ))}
    </div>
);
}

